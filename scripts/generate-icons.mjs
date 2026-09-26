/**
 * Script de generación automática de iconos.
 *
 * Lee todos los SVGs de src/svg/ y genera:
 * - Componentes React (src/react/)
 * - Componentes React Native (src/react-native/)
 * - Archivos index.ts con todos los exports
 *
 * Uso: node scripts/generate-icons.mjs
 */

import fs from "node:fs";
import path from "node:path";

import { svgFileToComponentName } from "./lib/naming.mjs";
import { REACT_DIR, RN_DIR, SVG_DIR } from "./lib/paths.mjs";

// ─── Utilidades ──────────────────────────────────────────

/**
 * Normaliza el inner SVG: si el root tiene fill="X" y algún shape no tiene
 * fill ni stroke explícito, añade fill="X" directamente en ese shape.
 * Así el generador puede poner fill="none" en el root sin romper la herencia.
 */
function normalizeFillInheritance(inner, rootFill) {
  if (!rootFill || rootFill === "none") return inner;

  const SHAPES = "path|circle|rect|ellipse|polygon|polyline|line";
  return inner.replace(
    new RegExp(`<(${SHAPES})(\\s[^/=>\\s][^>]*)?(\\s*/?>)`, "g"),
    (match, tag, attrsStr = "", close) => {
      const hasFill = /fill="/.test(attrsStr);
      const hasStroke = /stroke="/.test(attrsStr);
      if (!hasFill && !hasStroke) {
        return `<${tag} fill="${rootFill}"${attrsStr}${close}`;
      }
      return match;
    },
  );
}

/**
 * Si todas las formas con trazo comparten el mismo stroke-width, lo quita de
 * cada una y lo devuelve para ponerlo en el <svg> raíz como valor por defecto:
 * así las formas lo heredan y la prop `strokeWidth` del icono lo sustituye.
 * Con grosores distintos, o alguna forma con trazo sin grosor, no toca nada.
 */
function hoistStrokeWidth(inner) {
  const SHAPES = "path|circle|rect|ellipse|polygon|polyline|line";
  const shapes = [...inner.matchAll(new RegExp(`<(?:${SHAPES})\\b[^>]*>`, "g"))].map(
    ([tag]) => tag,
  );
  const stroked = shapes.filter((tag) => /\sstroke="(?!none")/.test(tag));
  const widths = new Set(stroked.map((tag) => tag.match(/stroke-width="([^"]*)"/)?.[1]));
  const [strokeWidth] = widths;
  if (stroked.length === 0 || widths.size !== 1 || strokeWidth === undefined) {
    return { inner, strokeWidth: null };
  }
  return { inner: inner.replace(/\sstroke-width="[^"]*"/g, ""), strokeWidth };
}

/** Extrae el contenido interior del <svg> y sus atributos */
function parseSvg(svgContent) {
  // Extraer atributos del tag <svg>
  const svgTagMatch = svgContent.match(/<svg([^>]*)>/s);
  const attrs = svgTagMatch ? svgTagMatch[1] : "";

  // Extraer viewBox
  const viewBoxMatch = attrs.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // Extraer width y height (defaults a 24), eliminando unidades "px"
  const widthMatch = attrs.match(/width="([^"]*)"/);
  const heightMatch = attrs.match(/height="([^"]*)"/);
  const width = widthMatch ? widthMatch[1].replace(/px$/, "") : "24";
  const height = heightMatch ? heightMatch[1].replace(/px$/, "") : "24";

  // Extraer fill del root (para normalizar herencia)
  const rootFillMatch = attrs.match(/fill="([^"]*)"/);
  const rootFill = rootFillMatch ? rootFillMatch[1] : null;

  // Extraer contenido interior y normalizar fill heredado del root
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const rawInner = innerMatch ? innerMatch[1].trim() : "";
  const { inner, strokeWidth } = hoistStrokeWidth(
    normalizeFillInheritance(rawInner, rootFill),
  );

  return { viewBox, width, height, inner, strokeWidth };
}

/** Convierte atributos SVG a JSX (stroke-width → strokeWidth) */
function svgAttrsToJsx(content) {
  return content
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-dasharray/g, "strokeDasharray")
    .replace(/stroke-dashoffset/g, "strokeDashoffset")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit")
    .replace(/stroke-opacity/g, "strokeOpacity")
    .replace(/fill-opacity/g, "fillOpacity")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/clip-path/g, "clipPath")
    .replace(/font-size/g, "fontSize")
    .replace(/font-family/g, "fontFamily")
    .replace(/font-weight/g, "fontWeight")
    .replace(/text-anchor/g, "textAnchor")
    .replace(/stop-color/g, "stopColor")
    .replace(/stop-opacity/g, "stopOpacity")
    .replace(/xmlns:xlink/g, "xmlnsXlink")
    .replace(/xlink:href/g, "xlinkHref");
}

/** Convierte tags SVG a React Native SVG (<path → <Path, <circle → <Circle, etc.) */
function svgTagsToRN(content) {
  const tagMap = {
    path: "Path",
    circle: "Circle",
    rect: "Rect",
    line: "Line",
    polyline: "Polyline",
    polygon: "Polygon",
    ellipse: "Ellipse",
    g: "G",
    defs: "Defs",
    clipPath: "ClipPath",
    linearGradient: "LinearGradient",
    radialGradient: "RadialGradient",
    stop: "Stop",
    mask: "Mask",
    use: "Use",
    text: "TSpan",
    tspan: "TSpan",
  };

  let result = content;
  const usedTags = new Set();

  for (const [svgTag, rnTag] of Object.entries(tagMap)) {
    const regex = new RegExp(`<(\/?)${svgTag}(\\s|>|\\/)`, "g");
    if (regex.test(result)) {
      usedTags.add(rnTag);
      result = result.replace(
        new RegExp(`<(\/?)${svgTag}(\\s|>|\\/)`, "g"),
        `<$1${rnTag}$2`,
      );
    }
  }

  return { content: result, usedTags: [...usedTags] };
}

// ─── Generadores ─────────────────────────────────────────

/** `strokeWidth` por defecto en el <svg> raíz, antes de {...props} para que se pueda cambiar. */
const rootStrokeWidth = (strokeWidth) =>
  strokeWidth ? `\n    strokeWidth={${strokeWidth}}` : "";

function generateReactComponent(name, svg) {
  const { viewBox, width, height, inner, strokeWidth } = parseSvg(svg);
  const jsxInner = svgAttrsToJsx(inner);

  return `import * as React from 'react';

export interface ${name}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ${name}: React.FC<${name}Props> = ({
  size,
  width = ${width},
  height = ${height},
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"${rootStrokeWidth(strokeWidth)}
    {...props}
  >
    ${jsxInner}
  </svg>
);

${name}.displayName = '${name}';
`;
}

function generateReactNativeComponent(name, svg) {
  const { viewBox, width, height, inner, strokeWidth } = parseSvg(svg);
  const jsxInner = svgAttrsToJsx(inner);
  const { content: rnInner, usedTags } = svgTagsToRN(jsxInner);

  const imports =
    usedTags.length > 0
      ? `\nimport Svg, { ${usedTags.join(", ")} } from 'react-native-svg';`
      : `\nimport Svg from 'react-native-svg';`;

  return `import * as React from 'react';${imports}
import type { SvgProps } from 'react-native-svg';

export interface ${name}Props extends SvgProps {
  size?: number;
}

export const ${name}: React.FC<${name}Props> = ({
  size,
  width = ${width},
  height = ${height},
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="${viewBox}"
    fill="none"${rootStrokeWidth(strokeWidth)}
    {...props}
  >
    ${rnInner}
  </Svg>
);

${name}.displayName = '${name}';
`;
}

function generateIndex(names) {
  return (
    names.map((name) => `export { ${name} } from './${name}';`).join("\n") +
    "\n"
  );
}

function generateTypesIndex(names) {
  return (
    names
      .map((name) => `export type { ${name}Props } from './${name}';`)
      .join("\n") + "\n"
  );
}

// ─── Main ────────────────────────────────────────────────

function main() {
  // Leer todos los SVGs
  const svgFiles = fs
    .readdirSync(SVG_DIR)
    .filter((f) => f.endsWith(".svg"))
    .sort();

  if (svgFiles.length === 0) {
    console.log("⚠️  No se encontraron archivos SVG en src/svg/");
    return;
  }

  console.log(`🔍 Encontrados ${svgFiles.length} SVG(s)`);

  // Asegurar que las carpetas existen
  fs.mkdirSync(REACT_DIR, { recursive: true });
  fs.mkdirSync(RN_DIR, { recursive: true });

  const componentNames = [];

  for (const file of svgFiles) {
    const name = svgFileToComponentName(file);
    const svgContent = fs.readFileSync(path.join(SVG_DIR, file), "utf-8");

    componentNames.push(name);

    // Generar componente React
    const reactComponent = generateReactComponent(name, svgContent);
    fs.writeFileSync(path.join(REACT_DIR, `${name}.tsx`), reactComponent);

    // Generar componente React Native
    const rnComponent = generateReactNativeComponent(name, svgContent);
    fs.writeFileSync(path.join(RN_DIR, `${name}.tsx`), rnComponent);

    console.log(`  ✅ ${file} → ${name}`);
  }

  // Generar archivos index.ts
  const indexContent = generateIndex(componentNames);
  const typesContent = generateTypesIndex(componentNames);

  const reactIndex = indexContent + "\n// Types\n" + typesContent;
  const rnIndex = indexContent + "\n// Types\n" + typesContent;

  fs.writeFileSync(path.join(REACT_DIR, "index.ts"), reactIndex);
  fs.writeFileSync(path.join(RN_DIR, "index.ts"), rnIndex);

  console.log(
    `\n📦 Generados ${componentNames.length} iconos para React y React Native`,
  );
  console.log(`📝 index.ts actualizado en ambas carpetas`);
  console.log('\n🎉 ¡Listo! Ejecuta "npm run build" para compilar.');
}

main();

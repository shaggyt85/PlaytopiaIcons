/**
 * Detecta y corrige SVGs donde los paths heredan el fill del root SVG.
 * El generador hardcodea fill="none" en el root, así que paths sin fill propio
 * quedan invisibles. Este script añade fill="currentColor" explícito a esos paths.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SVG_DIR = path.resolve(__dirname, "../src/svg");

const files = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith(".svg"));
let fixed = 0;

for (const file of files) {
  const filePath = path.join(SVG_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Extraer atributos del root SVG
  const svgTagMatch = content.match(/<svg([^>]*)>/s);
  if (!svgTagMatch) continue;
  const attrs = svgTagMatch[1];

  // ¿El root SVG tiene fill="currentColor"?
  const rootFillMatch = attrs.match(/fill="([^"]*)"/);
  if (!rootFillMatch || rootFillMatch[1] === "none") continue;

  const rootFill = rootFillMatch[1]; // "currentColor" normalmente

  // Extraer inner content
  const innerMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!innerMatch) continue;
  const inner = innerMatch[1];

  // Añadir fill="currentColor" a shapes que no tienen fill ni stroke explícito
  const SHAPE_TAGS = [
    "path",
    "circle",
    "rect",
    "ellipse",
    "polygon",
    "polyline",
    "line",
  ];
  const tagPattern = new RegExp(`<(${SHAPE_TAGS.join("|")})(\\s[^>]*)?>`, "g");

  let patchedInner = inner;
  let patched = false;

  patchedInner = patchedInner.replace(
    tagPattern,
    (match, tag, attrsStr = "") => {
      const hasFill = /fill="/.test(attrsStr);
      const hasStroke = /stroke="/.test(attrsStr);
      if (!hasFill && !hasStroke) {
        patched = true;
        // Insertar fill="currentColor" justo después del tag name
        return `<${tag} fill="${rootFill}"${attrsStr}>`;
      }
      return match;
    },
  );

  if (patched) {
    // Reconstruir con el inner corregido y quitar fill del root
    const newContent = content
      .replace(/<svg([^>]*)>/, (m, a) => `<svg${a}>`)
      .replace(/<svg[^>]*>([\s\S]*)<\/svg>/, (_, _inner) => {
        const svgOpen = content.match(/<svg[^>]*>/)[0];
        return `${svgOpen}${patchedInner}</svg>`;
      });

    fs.writeFileSync(filePath, newContent);
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  }
}

console.log(`\n🔧 ${fixed} archivo(s) corregido(s).`);

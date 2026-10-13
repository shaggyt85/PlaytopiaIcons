/**
 * Los iconos de Lucide de la librería (`icon-lo-*`), escritos una sola vez: de
 * qué SVG de lucide-static sale cada nombre de lucide-react y cómo se llama el
 * fichero en la librería. Lo usan `add-lucide-icons.mjs` y sus tests.
 *
 * Existe porque los prototipos de Lovable usan los nombres de lucide-react, y
 * varios son alias en lucide-static (`AlertCircle` es `circle-alert`,
 * `XCircle` es `circle-x`). Hasta la 1.10.0 cada alias se buscaba a mano.
 */
import { svgFileToComponentName } from "./naming.mjs";

/** Prefijo de los iconos de Lucide en la librería. */
export const LUCIDE_PREFIX = "icon-lo-";

/**
 * Lee del índice de lucide-static (`dist/esm/lucide-static.js`) qué SVG
 * corresponde a cada nombre que exporta, alias incluidos:
 * `export { default as AlertCircle, default as CircleAlert } from './icons/circle-alert.js'`.
 * @param {string} esmIndex
 * @returns {Map<string, string>} nombre de lucide-react → nombre del SVG, sin extensión.
 */
export function parseLucideIndex(esmIndex) {
  const byName = new Map();
  for (const [, names, file] of esmIndex.matchAll(
    /export \{([^}]+)\} from '\.\/icons\/([a-z0-9-]+)\.js'/g,
  )) {
    for (const part of names.split(",")) {
      byName.set(part.trim().replace(/^default as /, ""), file);
    }
  }
  return byName;
}

/**
 * El fichero de la librería para un nombre de lucide-react: siempre con ese
 * nombre, aunque en lucide-static sea un alias, porque es el que usa el
 * prototipo. `XCircle` → `icon-lo-x-circle.svg`, `BarChart3` → `icon-lo-bar-chart-3.svg`.
 * @param {string} lucideName
 * @returns {string}
 */
export function libraryFileFor(lucideName) {
  const kebab = lucideName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/([A-Za-z])([0-9])/g, "$1-$2")
    .toLowerCase();
  return `${LUCIDE_PREFIX}${kebab}.svg`;
}

/**
 * Qué hacer con un nombre de lucide-react.
 * @param {string} lucideName
 * @param {Map<string, string>} index el de {@link parseLucideIndex}
 * @param {Set<string>} existing ficheros que ya hay en `src/svg`
 * @returns {{ status: "missing" } | { status: "exists", file: string } | { status: "add", file: string, source: string, alias: boolean }}
 */
export function planLucideIcon(lucideName, index, existing) {
  const source = index.get(lucideName);
  if (!source) return { status: "missing" };
  const file = libraryFileFor(lucideName);
  // Que el fichero vuelva a dar el mismo nombre: si no, el componente generado
  // no se llamaría `IconLo<nombre>` y el prototipo no lo encontraría.
  if (svgFileToComponentName(file) !== `IconLo${lucideName}`) {
    throw new Error(`${lucideName}: ${file} generaría ${svgFileToComponentName(file)}`);
  }
  if (existing.has(file)) return { status: "exists", file };
  const alias = source !== file.slice(LUCIDE_PREFIX.length, -".svg".length);
  return { status: "add", file, source, alias };
}

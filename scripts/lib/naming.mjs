/**
 * Regla de nombres de la librería, escrita una sola vez: el generador la usa
 * para crear los componentes y los tests para comprobar que existen.
 */

/**
 * Convierte el nombre de un SVG en el de su componente:
 * "icon-home-filled.svg" → "IconHomeFilled", "icon-lo-trash-2.svg" → "IconLoTrash2".
 * @param {string} filename
 * @returns {string}
 */
export function svgFileToComponentName(filename) {
  return filename
    .replace(/\.svg$/, "")
    .split(/[-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

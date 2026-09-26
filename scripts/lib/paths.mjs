/**
 * Rutas de la librería, definidas una sola vez. Las usan el generador, los
 * scripts de mantenimiento y los tests de integridad.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Raíz del repositorio. */
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/** SVG fuente: la única fuente de verdad de cada icono. */
export const SVG_DIR = path.join(ROOT, "src", "svg");
/** Componentes React generados. */
export const REACT_DIR = path.join(ROOT, "src", "react");
/** Componentes React Native generados. */
export const RN_DIR = path.join(ROOT, "src", "react-native");

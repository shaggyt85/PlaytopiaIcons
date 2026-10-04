# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.10.0] - 2026-10-04

### Agregado

- Los 4 iconos de Lucide (lucide-static 0.575.0) que usan las pantallas del prototipo final de Playtopia Pro y que la 1.9.0 no traía: `IconLoBarChart2` (`chart-no-axes-column`; `bar-chart-2` es su nombre en lucide-react, el que usa el prototipo), `IconLoCalendarOff`, `IconLoCopy` e `IconLoLogOut`.
  - Los que solo usan los componentes genéricos de shadcn del prototipo (`Circle`, `Minus`, `MoreHorizontal`, `GripVertical`, `PanelLeft`) siguen fuera, como en la 1.9.0.

---

## [1.9.0] - 2026-09-26

### Agregado

- 2 iconos de biometría de Lucide (lucide-static 0.575.0) para Playtopia Pro: `IconLoScanFace` (`scan-face`) e `IconLoFingerprint` (`fingerprint-pattern`; `fingerprint` es su alias en Lucide).
- Los 24 iconos del prototipo de Playtopia Pro que faltaban (lucide-static 0.575.0), para no tener que publicar una versión por cada pantalla: los 22 que usan sus pantallas y que la 1.8.0 no traía, más `IconLoChevronDown` e `IconLoChevronUp` para desplegables y secciones plegables.
  - `IconLoActivity`, `IconLoArrowLeft`, `IconLoArrowRightLeft`, `IconLoBriefcase`, `IconLoBuilding2`, `IconLoCalendar`, `IconLoCamera`, `IconLoCompass`, `IconLoHistory`, `IconLoLibrary`, `IconLoMail`, `IconLoMap`, `IconLoPhone`, `IconLoSend`, `IconLoSquare`, `IconLoTrendingDown`, `IconLoUndo2`, `IconLoWaves`, `IconLoChevronDown` e `IconLoChevronUp`.
  - Con el nombre de lucide-react que usa el prototipo, aunque en lucide-static sea un alias: `IconLoAlertTriangle` (`triangle-alert`), `IconLoCheckCircle2` (`circle-check`), `IconLoFileEdit` (`file-pen`) e `IconLoWand2` (`wand-sparkles`).
  - Los que solo usan los componentes genéricos de shadcn del prototipo (`Circle`, `Minus`, `MoreHorizontal`, `GripVertical`, `PanelLeft`) no se añaden: la app nativa tiene los suyos.

---

## [1.8.0] - 2026-09-26

### Agregado

- 45 iconos de trazo fino de Lucide (lucide-static 0.575.0) para Playtopia Pro, con el prefijo `lo` para distinguirlos: ficheros `icon-lo-*.svg` y componentes `IconLo*` (p. ej. `IconLoHome`, `IconLoCalendarDays`, `IconLoTrash2`). No sustituyen a ningún icono existente.
- `THIRD_PARTY_NOTICES.md` con el aviso de licencia ISC de Lucide, incluido en el paquete.
- Test que falla si un SVG trae un color fijo en lugar de `currentColor` (con una lista de excepciones justificadas).
- Test que comprueba que `main`, `module`, `types` y cada ruta de `exports` existen en `dist`.
- Prop `strokeWidth` en los iconos de un solo grosor: el generador sube el `stroke-width` común de las formas al `<svg>` raíz como valor por defecto. Aplica a los 45 `IconLo*`, `IconHome`, `IconOvalClose` e `IconSchedule`; el aspecto por defecto no cambia.

### Corregido

- `exports`, `main` y `module` apuntaban a ficheros inexistentes (`index.cjs`) o al formato equivocado: `import` ahora resuelve `index.mjs` (ESM), `require` resuelve `index.js` (CommonJS) y `types` va primero.
- `IconHome` tenía el trazo fijo en `#222`: ahora usa `currentColor` y cambia con la prop `color`.

### Cambiado

- La regla de nombres (`scripts/lib/naming.mjs`) y las rutas (`scripts/lib/paths.mjs`) se definen una sola vez y las comparten el generador, `fix-svg-fills` y los tests.
- El onboarding documenta `fix-svg-fills.mjs` (arreglo retroactivo, fuera del build) y `generate-logo-base64.mjs`.

## [1.0.0] - 2026-04-03

### Agregado

- Estructura inicial del proyecto.
- Soporte para React (web/Next.js) y React Native (Expo).
- Script de generación automática de componentes desde SVG.
- Optimización de SVGs con SVGO.
- Build con tsup (ESM + CJS + tipos).
- Tests con Vitest + Testing Library.
- Tests de integridad automáticos.
- Icono de ejemplo: `IconHome`.

# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

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

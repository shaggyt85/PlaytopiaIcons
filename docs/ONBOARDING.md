# @playtopia/icons — Onboarding para Nuevos Desarrolladores

Bienvenido al equipo. Este documento es el punto de entrada para entender cómo funciona la librería de iconos oficial de Playtopia y cómo utilizarla en tu proyecto.

---

## ¿Qué es esta librería?

`@playtopia/icons` es la librería centralizada de iconos de Playtopia. Contiene todos los iconos utilizados en los productos de Playtopia y está diseñada para funcionar en:

- **React** (web)
- **Next.js**
- **React Native** (iOS / Android)
- **Expo**

La ventaja principal es que **hay una sola fuente de verdad**: los SVGs originales viven en esta librería, y todos los proyectos la consumen, en lugar de tener copias dispersas.

---

## Documentos de referencia

| Documento                                                            | Descripción                                  |
| -------------------------------------------------------------------- | -------------------------------------------- |
| [GETTING-STARTED-REACT.md](./GETTING-STARTED-REACT.md)               | Cómo usar la librería en React / Next.js     |
| [GETTING-STARTED-REACT-NATIVE.md](./GETTING-STARTED-REACT-NATIVE.md) | Cómo usar la librería en React Native / Expo |
| [CONTRIBUTING.md](./CONTRIBUTING.md)                                 | Cómo agregar nuevos iconos a la librería     |
| [ANALISIS-ROADMAP.md](./ANALISIS-ROADMAP.md)                         | Análisis técnico del proyecto y roadmap      |

---

## Arquitectura del proyecto

```
@playtopia/icons/
│
├── src/
│   ├── svg/                   ← SVGs ORIGINALES (fuente de verdad)
│   │   └── icon-home.svg
│   ├── react/                 ← Componentes para React/Next.js (AUTO-GENERADOS)
│   │   ├── index.ts
│   │   └── IconHome.tsx
│   └── react-native/          ← Componentes para React Native/Expo (AUTO-GENERADOS)
│       ├── index.ts
│       └── IconHome.tsx
│
├── scripts/
│   └── generate-icons.mjs     ← Script que convierte SVGs en componentes
│
├── .storybook/                ← Config de Storybook (docs visual)
├── stories/                   ← Stories de Storybook
├── __tests__/                 ← Tests automáticos
├── dist/                      ← Build final (no editar manualmente)
├── package.json
├── tsup.config.ts             ← Config de build
└── svgo.config.js             ← Config de optimización de SVGs
```

### Regla fundamental

> ⚠️ **Nunca edites los archivos de `src/react/` o `src/react-native/` manualmente.**
> Estos archivos se generan automáticamente a partir de los SVGs de `src/svg/`.
> Si editas un componente a mano, tu cambio se perderá la próxima vez que se ejecute `npm run generate`.

---

## Flujo de trabajo resumido

```
SVG original       →    Optimización    →    Generación    →    Build    →    Publicación
src/svg/*.svg           npm run svgo         npm run generate   npm run build   npm publish
```

---

## Scripts disponibles

```bash
npm run build          # Pipeline completo: clean → svgo → generate → compile
npm run generate       # Solo genera componentes desde SVGs
npm run svgo           # Solo optimiza los SVGs de src/svg/
npm run test           # Ejecuta los tests
npm run test:watch     # Tests en modo watch
npm run storybook      # Abre la documentación visual en localhost:6006
npm run build:storybook # Genera el sitio estático de Storybook
```

---

## Convenciones de nombres

| SVG en src/svg/         | Componente generado | Import                                                     |
| ----------------------- | ------------------- | ---------------------------------------------------------- |
| `icon-home.svg`         | `IconHome`          | `import { IconHome } from '@playtopia/icons/react'`        |
| `icon-user-profile.svg` | `IconUserProfile`   | `import { IconUserProfile } from '@playtopia/icons/react'` |
| `icon-arrow-left.svg`   | `IconArrowLeft`     | `import { IconArrowLeft } from '@playtopia/icons/react'`   |

---

## Herramientas del proyecto

| Herramienta        | Propósito                        |
| ------------------ | -------------------------------- |
| **TypeScript**     | Tipado estático                  |
| **tsup**           | Build (genera ESM + CJS + tipos) |
| **SVGO**           | Optimización de SVGs             |
| **Vitest**         | Tests unitarios                  |
| **Storybook 10**   | Documentación visual interactiva |
| **GitHub Actions** | CI/CD automático                 |

---

## Preguntas frecuentes

**¿Dónde está la versión publicada del paquete?**
En npm: [https://www.npmjs.com/package/@playtopia/icons](https://www.npmjs.com/package/@playtopia/icons)

**¿Quiero agregar un nuevo icono, qué hago?**
Lee [CONTRIBUTING.md](./CONTRIBUTING.md).

**¿Cómo veo todos los iconos disponibles visualmente?**
Ejecuta `npm run storybook` y abre `http://localhost:6006`. Verás la galería completa con buscador.

**¿Por qué hay dos carpetas, react/ y react-native/?**
Los SVGs en React web usan etiquetas HTML nativas (`<svg>`, `<path>`). En React Native no existe el DOM, por lo que se usan componentes de `react-native-svg` (`<Svg>`, `<Path>`). Por eso la generación es diferente para cada plataforma.

**¿Puedo usar los iconos en un proyecto Expo?**
Sí, usa el import de `react-native`. Asegúrate de tener `react-native-svg` instalado. Ver [GETTING-STARTED-REACT-NATIVE.md](./GETTING-STARTED-REACT-NATIVE.md).

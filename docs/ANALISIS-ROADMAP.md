# IconsPlaytopia — Análisis Profundo y Roadmap 2026

---

## 1. Estado Actual del Proyecto

### Estructura existente

```
IconsPlaytopia/
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── src/
│   ├── react/
│   │   ├── index.ts
│   │   └── IconHome.tsx
│   ├── react-native/
│   │   ├── index.ts
│   │   └── IconHome.tsx
│   └── svg/
│       └── icon-home.svg
├── dist/                  (vacío — aún no se ha hecho build)
├── scripts/               (vacío — sin scripts de automatización)
└── node_modules/
```

### ✅ Lo que ya está bien

- Estructura separada por plataforma (react / react-native / svg).
- tsup.config.ts profesional con ESM + CJS, minificación, sourcemaps y tipos.
- peerDependencies correctamente declaradas.
- SVGO como devDependency para optimización de SVGs.
- TypeScript estricto habilitado.

---

## 2. Lo que Falta (Crítico)

### 2.1 — Configuración de package.json para npm

El `package.json` actual no tiene los campos necesarios para que npm exponga correctamente los entry points por plataforma.

**Agregar:**

```json
{
  "name": "@playtopia/icons",
  "main": "./dist/react/index.cjs",
  "module": "./dist/react/index.js",
  "types": "./dist/react/index.d.ts",
  "exports": {
    "./react": {
      "import": "./dist/react/index.js",
      "require": "./dist/react/index.cjs",
      "types": "./dist/react/index.d.ts"
    },
    "./react-native": {
      "import": "./dist/react-native/index.js",
      "require": "./dist/react-native/index.cjs",
      "types": "./dist/react-native/index.d.ts"
    }
  },
  "files": ["dist", "src/svg"],
  "keywords": [
    "icons",
    "playtopia",
    "react",
    "react-native",
    "expo",
    "nextjs",
    "svg",
    "ui",
    "icon-library"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/shaggyt85/IconsPlaytopia.git"
  },
  "homepage": "https://github.com/shaggyt85/IconsPlaytopia#readme",
  "bugs": {
    "url": "https://github.com/shaggyt85/IconsPlaytopia/issues"
  }
}
```

### 2.2 — Archivos esenciales que faltan

| Archivo          | Propósito                                                    |
| ---------------- | ------------------------------------------------------------ |
| `.gitignore`     | Ignorar node_modules, dist, .DS_Store, etc.                  |
| `.npmignore`     | Controlar qué se sube a npm (o usar `files` en package.json) |
| `README.md`      | Documentación básica del paquete                             |
| `CHANGELOG.md`   | Registro de cambios por versión                              |
| `LICENSE`        | Archivo de licencia (UNLICENSED o privada)                   |
| `svgo.config.js` | Configuración personalizada de SVGO                          |
| `.npmrc`         | Config de npm (legacy-peer-deps=true para evitar conflictos) |
| `src/index.ts`   | Entry point raíz opcional                                    |

### 2.3 — Scripts de automatización (carpeta `scripts/`)

Falta un script que automatice la generación de componentes React y React Native a partir de los SVGs originales. Sin esto, al tener miles de iconos, tendrías que crear cada componente a mano.

**Necesitas:**

- `scripts/generate-react.ts` — Convierte SVGs → componentes React.
- `scripts/generate-react-native.ts` — Convierte SVGs → componentes React Native.
- `scripts/generate-index.ts` — Auto-genera los archivos `index.ts` con todos los exports.

**Herramienta recomendada:** [SVGR](https://github.com/gregberge/svgr) (v8+)

- Convierte SVGs a componentes React y React Native automáticamente.
- Soporte para templates personalizados.
- Se integra con SVGO.

### 2.4 — Versionado semántico automatizado

Para manejar miles de iconos necesitas:

- **Changesets** (`@changesets/cli`) o **semantic-release** para versonado automático.
- **Script de prepublish** que ejecute el build antes de publicar.

---

## 3. Documentación Web — Recomendaciones 2026

Para una documentación moderna, visual e interactiva (estilo Scalar), estas son las mejores opciones:

### 🥇 Opción 1 — **Storybook 9** (Recomendada)

- Estándar de la industria para documentar componentes UI.
- Muestra cada icono con preview en vivo, props editables y código copiable.
- Soporte para React y React Native (con addon).
- Se despliega como sitio estático en GitHub Pages, Vercel o Netlify.
- **Plugin:** `@storybook/addon-docs` para generar docs automáticos.

```bash
npx storybook@latest init
```

### 🥈 Opción 2 — **Fumadocs** (Next.js)

- Framework de documentación moderno basado en Next.js 15+.
- Diseño elegante, búsqueda integrada, MDX, modo oscuro.
- Ideal si ya usas Next.js en Playtopia.
- Puedes embeber componentes React en vivo.
- https://fumadocs.vercel.app

### 🥉 Opción 3 — **Docusaurus 3** (Meta/Facebook)

- Documentación estática con MDX.
- Buscador Algolia integrado.
- Versionado de docs.
- Muy usado para librerías open source.

### 🏅 Opción 4 — **Astro Starlight**

- Generador de sitios de documentación ultrarrápido.
- Diseño moderno, búsqueda integrada, i18n.
- Perfecto para catálogos de iconos con rendering estático.
- https://starlight.astro.build

### Comparativa rápida

| Herramienta         | Preview en vivo | React Native | Búsqueda | Velocidad  | Estilo 2026 |
| ------------------- | --------------- | ------------ | -------- | ---------- | ----------- |
| **Storybook 9**     | ✅              | ✅ (addon)   | ✅       | ⭐⭐⭐     | ⭐⭐⭐⭐    |
| **Fumadocs**        | ✅              | ❌           | ✅       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |
| **Docusaurus 3**    | ✅              | ❌           | ✅       | ⭐⭐⭐⭐   | ⭐⭐⭐      |
| **Astro Starlight** | ✅              | ❌           | ✅       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |

**Mi recomendación:** **Storybook 9** para el catálogo interactivo de iconos + **Fumadocs** o **Astro Starlight** para la documentación general del paquete.

---

## 4. Testing — Recomendaciones

### 4.1 — Tests unitarios con Vitest

**¿Por qué Vitest y no Jest?**

- Más rápido (compatibilidad nativa con ESM y TypeScript).
- Compatible con Jest API (migración trivial).
- Integración nativa con tsup.

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

**¿Qué testear?**

| Test              | Descripción                                                       |
| ----------------- | ----------------------------------------------------------------- |
| **Renderizado**   | Cada icono se renderiza sin errores.                              |
| **Props**         | Los iconos aceptan width, height, color, className, etc.          |
| **Accesibilidad** | Los iconos tienen `role="img"` o `aria-hidden` según corresponda. |
| **Snapshot**      | Snapshot de cada icono para detectar cambios no intencionados.    |
| **Exports**       | Todos los iconos están exportados en el index.ts.                 |

**Ejemplo de test:**

```tsx
import { render } from "@testing-library/react";
import { IconHome } from "../src/react";

describe("IconHome", () => {
  it("renderiza sin errores", () => {
    const { container } = render(<IconHome />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("acepta props de tamaño", () => {
    const { container } = render(<IconHome width={48} height={48} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("48");
  });

  it("snapshot", () => {
    const { container } = render(<IconHome />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
```

### 4.2 — Tests visuales (opcional pero recomendado para miles de iconos)

- **Chromatic** (de Storybook): Detecta cambios visuales automáticamente.
- **Percy** (BrowserStack): Alternativa a Chromatic.

### 4.3 — Tests automatizados de integridad

Script que valide:

- Todos los SVGs en `src/svg/` tienen su componente React y React Native correspondiente.
- Todos los componentes están exportados en su `index.ts`.
- Ningún SVG tiene atributos no optimizados.

### 4.4 — CI/CD recomendado

```yaml
# GitHub Actions
- npm run svgo # Optimizar SVGs
- npm run build # Build
- npm run test # Tests
- npm publish # Publicar (manual o automático con changesets)
```

---

## 5. Estructura Final Recomendada

```
IconsPlaytopia/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI: lint, test, build
│       └── publish.yml         # Publicar a npm
├── .storybook/                 # Config de Storybook (documentación)
│   ├── main.ts
│   └── preview.ts
├── docs/                       # Documentación web (Fumadocs/Starlight)
├── scripts/
│   ├── generate-react.ts       # SVG → componentes React
│   ├── generate-react-native.ts # SVG → componentes React Native
│   └── generate-index.ts       # Auto-genera index.ts
├── src/
│   ├── react/
│   │   ├── index.ts
│   │   └── [IconNombre].tsx
│   ├── react-native/
│   │   ├── index.ts
│   │   └── [IconNombre].tsx
│   └── svg/
│       └── [icon-nombre].svg
├── __tests__/
│   ├── react/
│   │   └── icons.test.tsx
│   ├── react-native/
│   │   └── icons.test.tsx
│   └── integrity.test.ts       # Tests de integridad
├── dist/                       # Output del build (no versionado)
├── .gitignore
├── .npmrc
├── CHANGELOG.md
├── LICENSE
├── README.md
├── package.json
├── svgo.config.js
├── tsconfig.json
├── tsup.config.ts
└── vitest.config.ts
```

---

## 6. Checklist de Implementación

- [ ] Actualizar package.json con exports, files, keywords, repository.
- [ ] Crear .gitignore.
- [ ] Crear .npmrc con `legacy-peer-deps=true`.
- [ ] Crear svgo.config.js con reglas personalizadas.
- [ ] Crear scripts de generación automática (SVGR).
- [ ] Configurar Vitest + tests de renderizado y snapshot.
- [ ] Configurar Storybook 9 para documentación visual.
- [ ] Crear README.md con instrucciones de instalación y uso.
- [ ] Crear CHANGELOG.md.
- [ ] Crear LICENSE.
- [ ] Configurar GitHub Actions para CI/CD.
- [ ] Probar build completo (`npm run build`).
- [ ] Publicar primera versión en npm.

---

> **Resumen:** El proyecto tiene una base sólida, pero le faltan los entry points de npm (exports), scripts de generación automática para escalar a miles de iconos, testing, documentación web y CI/CD. La combinación Storybook + Vitest + SVGR + GitHub Actions es la más profesional y escalable para 2026.

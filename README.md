# @playtopia/icons

Librería oficial de iconos de Playtopia. Compatible con **React**, **React Native**, **Expo** y **Next.js**.

---

## Instalación

```bash
npm install @playtopia/icons
```

### Peer Dependencies

Según tu plataforma, asegúrate de tener instaladas las dependencias necesarias:

**React / Next.js (web):**

```bash
npm install react
```

**React Native / Expo:**

```bash
npm install react react-native react-native-svg
```

---

## Uso

### React / Next.js

```tsx
import { IconHome } from "@playtopia/icons/react";

export default function App() {
  return <IconHome size={32} color="#333" />;
}
```

### React Native / Expo

```tsx
import { IconHome } from "@playtopia/icons/react-native";

export default function App() {
  return <IconHome size={32} color="#333" />;
}
```

---

## Props

Todos los iconos aceptan las siguientes props:

| Prop       | Tipo                    | Default | Descripción                                |
| ---------- | ----------------------- | ------- | ------------------------------------------ |
| `size`     | `number \| string`      | `24`    | Tamaño del icono (aplica a width y height) |
| `width`    | `number \| string`      | `24`    | Ancho del icono                            |
| `height`   | `number \| string`      | `24`    | Alto del icono                             |
| `color`    | `string`                | `#222`  | Color del trazo (stroke)                   |
| `...props` | `SVGProps` / `SvgProps` | —       | Cualquier prop nativa de SVG               |

---

## Iconos disponibles

| Icono | Nombre del componente |
| ----- | --------------------- |
| 🏠    | `IconHome`            |

> Esta tabla se actualiza automáticamente con cada build.

---

## Desarrollo

### Agregar un nuevo icono

1. Coloca el archivo SVG en `src/svg/` con formato `kebab-case`:

   ```
   src/svg/icon-mi-icono.svg
   ```

2. Ejecuta el generador automático:

   ```bash
   npm run generate
   ```

3. Los componentes se crean automáticamente en `src/react/` y `src/react-native/`.

4. Ejecuta el build:
   ```bash
   npm run build
   ```

### Scripts disponibles

| Script               | Descripción                                         |
| -------------------- | --------------------------------------------------- |
| `npm run build`      | Limpia, optimiza SVGs, genera componentes y compila |
| `npm run generate`   | Genera componentes React y RN a partir de SVGs      |
| `npm run svgo`       | Optimiza los SVGs de src/svg/                       |
| `npm run clean`      | Elimina la carpeta dist/                            |
| `npm run test`       | Ejecuta los tests con Vitest                        |
| `npm run test:watch` | Ejecuta tests en modo watch                         |

### Convenciones de nombres

| SVG (src/svg/)          | Componente generado |
| ----------------------- | ------------------- |
| `icon-home.svg`         | `IconHome`          |
| `icon-user-profile.svg` | `IconUserProfile`   |
| `icon-arrow-left.svg`   | `IconArrowLeft`     |

---

## Estructura del proyecto

```
@playtopia/icons/
├── src/
│   ├── svg/                  # SVGs originales (fuente de verdad)
│   ├── react/                # Componentes React (auto-generados)
│   └── react-native/         # Componentes React Native (auto-generados)
├── dist/                     # Build final (ESM + CJS + tipos)
├── scripts/
│   └── generate-icons.mjs    # Generador automático
├── __tests__/                # Tests
├── svgo.config.js            # Configuración de optimización SVG
├── tsup.config.ts            # Configuración de build
└── vitest.config.ts          # Configuración de tests
```

---

## Publicar nueva versión

```bash
npm version patch  # o minor / major
npm publish --access public
```

---

## Licencia

UNLICENSED — Uso privado de Playtopia.

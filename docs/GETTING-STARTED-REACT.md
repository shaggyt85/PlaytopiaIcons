# Guía de uso — React / Next.js

Esta guía explica cómo instalar y usar `@playtopia/icons` en proyectos React o Next.js.

---

## Instalación

```bash
npm install @playtopia/icons
```

> No necesitas instalar dependencias adicionales para React web.

---

## Uso básico

```tsx
import { IconHome } from "@playtopia/icons/react";

export default function MyComponent() {
  return <IconHome />;
}
```

---

## Props disponibles

Todos los iconos extienden `React.SVGProps<SVGSVGElement>` y añaden la prop `size`:

| Prop                         | Tipo                | Default | Descripción                  |
| ---------------------------- | ------------------- | ------- | ---------------------------- |
| `size`                       | `number \| string`  | `24`    | Ancho y alto simultáneamente |
| `width`                      | `number \| string`  | `24`    | Ancho del icono              |
| `height`                     | `number \| string`  | `24`    | Alto del icono               |
| `color`                      | `string`            | `#222`  | Color del trazo (stroke)     |
| `className`                  | `string`            | —       | Clase CSS                    |
| `style`                      | `CSSProperties`     | —       | Estilos inline               |
| `onClick`                    | `MouseEventHandler` | —       | Evento de click              |
| ...cualquier prop SVG nativa |                     |         |                              |

---

## Ejemplos

### Tamaño personalizado

```tsx
import { IconHome } from '@playtopia/icons/react';

// Con prop size (aplica a width y height)
<IconHome size={32} />

// Con width y height independientes
<IconHome width={40} height={40} />
```

### Color personalizado

```tsx
<IconHome size={24} color="#6366f1" />

// Con clases Tailwind
<IconHome size={24} className="text-indigo-500" />

// Con CSS variable
<IconHome size={24} color="var(--color-primary)" />
```

### Con evento click

```tsx
<IconHome
  size={24}
  onClick={() => console.log("clicked")}
  style={{ cursor: "pointer" }}
/>
```

### Accesibilidad

```tsx
// Icono decorativo (oculto para lectores de pantalla)
<IconHome size={24} aria-hidden="true" />

// Icono con significado semántico
<IconHome size={24} role="img" aria-label="Ir al inicio" />
```

---

## Uso en Next.js

Compatible sin configuración adicional con Next.js 13+ (App Router y Pages Router).

```tsx
// app/page.tsx (App Router)
import { IconHome } from "@playtopia/icons/react";

export default function HomePage() {
  return (
    <header>
      <IconHome size={24} />
      <span>Inicio</span>
    </header>
  );
}
```

```tsx
// pages/index.tsx (Pages Router)
import { IconHome } from "@playtopia/icons/react";

export default function Home() {
  return <IconHome size={24} />;
}
```

---

## Uso con Tailwind CSS

Los iconos aceptan `className`, por lo que son totalmente compatibles con Tailwind:

```tsx
<IconHome className="w-6 h-6 text-gray-500 hover:text-indigo-600 transition-colors" />
```

> **Nota:** Para que `text-{color}` afecte el color del icono, el SVG debe usar `currentColor` como valor de `stroke` o `fill`. Si el icono no cambia de color con Tailwind, contacta al equipo para actualizar el SVG.

---

## Importar múltiples iconos

```tsx
import { IconHome, IconUser, IconSettings } from "@playtopia/icons/react";

export function Navbar() {
  return (
    <nav>
      <IconHome size={20} />
      <IconUser size={20} />
      <IconSettings size={20} />
    </nav>
  );
}
```

---

## Ver todos los iconos disponibles

Ejecuta Storybook para ver la galería completa:

```bash
# Dentro del repositorio de @playtopia/icons
npm run storybook
```

Abre `http://localhost:6006` → **Icons/Gallery**

---

## Versión instalada

Consulta la versión actual del paquete en tu proyecto:

```bash
npm ls @playtopia/icons
```

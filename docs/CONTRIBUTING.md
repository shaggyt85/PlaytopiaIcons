# Guía de contribución

Esta guía está orientada a los desarrolladores del equipo Playtopia que trabajan directamente en el repositorio `@playtopia/icons`.

---

## Tabla de contenidos

1. [Clonar y configurar el repositorio](#1-clonar-y-configurar-el-repositorio)
2. [Añadir un nuevo icono](#2-añadir-un-nuevo-icono)
3. [Estándares para archivos SVG](#3-estándares-para-archivos-svg)
4. [Convenciones de nombres](#4-convenciones-de-nombres)
5. [Ciclo de trabajo completo](#5-ciclo-de-trabajo-completo)
6. [Ejecutar pruebas](#6-ejecutar-pruebas)
7. [Publicar una nueva versión](#7-publicar-una-nueva-versión)
8. [Convención de commits](#8-convención-de-commits)
9. [Configuración de GitHub Actions](#9-configuración-de-github-actions)

---

## 1. Clonar y configurar el repositorio

```bash
git clone git@github.com:shaggyt85/PlaytopiaIcons.git
cd PlaytopiaIcons
npm install
```

El archivo `.npmrc` del repositorio incluye `legacy-peer-deps=true` para evitar conflictos de peer dependencies. No es necesario añadirlo manualmente.

---

## 2. Añadir un nuevo icono

El flujo varía según el tipo de asset:

**Icono de UI** (monocromático, controlado por props):

```
Diseñador exporta SVG → src/svg/ → npm run generate → src/react/ + src/react-native/ → npm run build
```

**Logo / marca** (gradiente fijo, no auto-generado) → ver sección [Añadir un logo de marca](#2b-añadir-un-logo-de-marca-brand-asset).

### Paso a paso

**a) Obtén el SVG del diseñador (Figma, Illustrator, etc.)**

Exporta o copia el archivo `.svg` del diseño.

**b) Coloca el SVG en `src/svg/`**

```
src/svg/icon-settings.svg
```

Sigue la convención `icon-{nombre}.svg` en kebab-case.

**c) Ejecuta la generación automática**

```bash
npm run generate
```

Esto genera automáticamente:

- `src/react/IconSettings.tsx`
- `src/react-native/IconSettings.tsx`
- Actualiza `src/react/index.ts`
- Actualiza `src/react-native/index.ts`

> **NUNCA edites los archivos en `src/react/` y `src/react-native/` manualmente.** Son generados automáticamente. Los cambios manuales se perderán en la próxima ejecución de `npm run generate`.

---

## 2b. Añadir un logo de marca (brand asset)

Los logos y assets corporativos (isologotipos, isotipo, wordmark) van en `src/brand/` y se crean **a mano, una sola vez**. No pasan por el pipeline de auto-generación.

**¿Cuándo usar `src/brand/` en vez de `src/svg/`?**

- El SVG usa gradientes de color de marca (`#E40066`, `#544997`)
- El SVG usa máscaras (`<mask>`)
- El color del asset **no** debe ser configurable por el consumidor
- Es un logo, isologotipo o wordmark (no un icono de UI)

**Paso a paso:**

1. Convierte el SVG a JSX (puedes usar [svg2jsx.com](https://svg2jsx.com))
2. Crea `src/brand/LogoNuevo.tsx` siguiendo la estructura de `LogoHorizontal.tsx`:
   - Props: `width`, `height`, `textColor` (si aplica), `className`, `style`
   - IDs únicos prefijados con `playtopia-logo-{nombre}-` para evitar conflictos
   - `aria-label` y `role="img"` para accesibilidad
3. Expórtalo en `src/brand/index.ts`
4. Compila y verifica: `npm run build && npm test`

> A diferencia de `src/react/` y `src/react-native/`, los archivos de `src/brand/` **sí se editan y commitean directamente**.

**d) Verifica el resultado en Storybook**

```bash
npm run storybook
```

El icono nuevo aparecerá automáticamente en la galería en `http://localhost:6006`.

**e) Compila y prueba**

```bash
npm run build
npm test
```

---

## 3. Estándares para archivos SVG

Para que la generación automática funcione correctamente, los archivos SVG deben cumplir:

| Requisito                         | Descripción                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| `viewBox` presente                | El SVG debe tener el atributo `viewBox` (ej. `viewBox="0 0 24 24"`)                                 |
| Sin `width`/`height` hardcodeados | Los archivos no deben tener width/height fijos; el script los inyecta vía props                     |
| Color parametrizable              | Usar `stroke="currentColor"` o `fill="currentColor"` para que el color sea controlable por props    |
| Sin namespaces de editores        | Sin `xmlns:xlink`, `xmlns:sodipodi`, `xmlns:inkscape`, etc. El script SVGO los elimina              |
| Sin capas ocultas                 | Elimina capas con `display:none` o `visibility:hidden` antes de exportar                            |
| Trazo limpio                      | Si el ícono usa trazos (stroke), deben estar con `stroke` explícito, no convertidos a path con fill |

### Ejemplo de SVG correcto

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## 4. Convenciones de nombres

| Elemento              | Formato                          | Ejemplo               |
| --------------------- | -------------------------------- | --------------------- |
| Archivo SVG           | `icon-{nombre}.svg` (kebab-case) | `icon-arrow-left.svg` |
| Componente React      | `Icon{Nombre}` (PascalCase)      | `IconArrowLeft`       |
| Archivo de componente | `Icon{Nombre}.tsx`               | `IconArrowLeft.tsx`   |
| Export de props       | `Icon{Nombre}Props`              | `IconArrowLeftProps`  |

El script de generación realiza la conversión kebab-case → PascalCase automáticamente.

---

## 5. Ciclo de trabajo completo

```bash
# 1. Crea una rama para tu trabajo
git checkout -b feat/add-icon-settings

# 2. Coloca el SVG
cp ~/ruta/al/diseño/icon-settings.svg src/svg/

# 3. Genera los componentes
npm run generate

# 4. Verifica visualmente
npm run storybook

# 5. Compila
npm run build

# 6. Pasa los tests
npm test

# 7. Commit y push
git add .
git commit -m "feat: add IconSettings"
git push origin feat/add-icon-settings

# 8. Abre un Pull Request en GitHub
```

---

## 6. Ejecutar pruebas

```bash
# Ejecutar todos los tests una vez
npm test

# Ejecutar en modo watch durante desarrollo
npm run test:watch

# Ver la cobertura de tests
npm run test:coverage
```

Los tests validan automáticamente:

- Que cada SVG en `src/svg/` tiene su componente React correspondiente
- Que cada SVG en `src/svg/` tiene su componente React Native correspondiente
- Que todos los componentes están exportados en los archivos `index.ts`
- Que los iconos se renderizan correctamente con props de tamaño y color

---

## 7. Publicar una nueva versión

Sigue [Semantic Versioning](https://semver.org/):

| Tipo de cambio        | Comando             | Cuándo usarlo                            |
| --------------------- | ------------------- | ---------------------------------------- |
| Bug fix               | `npm version patch` | Corrección que no rompe la API existente |
| Nuevo icono o feature | `npm version minor` | Nueva funcionalidad sin breaking changes |
| Breaking change       | `npm version major` | Cambio que rompe la compatibilidad       |

### Proceso de publicación manual

```bash
# 1. Asegúrate de estar en master y con todo limpio
git checkout master
git pull origin master

# 2. Actualiza la versión (elige patch/minor/major)
npm version minor

# 3. Publica en npm (ejecuta automáticamente npm run build antes)
npm publish --access public

# 4. Sube el tag creado por npm version
git push origin master --tags
```

### Proceso de publicación automática (CI/CD)

Alternativamente, crea un **GitHub Release** y el workflow `publish.yml` publicará automáticamente en npm.

> Para que funcione, el secreto `NPM_TOKEN` debe estar configurado en el repositorio de GitHub:
> Settings → Secrets and variables → Actions → `NPM_TOKEN`

---

## 8. Convención de commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>: <descripción corta en minúsculas>
```

| Tipo       | Cuándo usarlo                                       |
| ---------- | --------------------------------------------------- |
| `feat`     | Nuevo icono o nueva funcionalidad                   |
| `fix`      | Corrección de bug en un icono o script              |
| `docs`     | Solo cambios en documentación                       |
| `refactor` | Refactorización sin cambio de comportamiento        |
| `test`     | Añadir o modificar tests                            |
| `chore`    | Tareas de mantenimiento (actualizar deps, CI, etc.) |
| `build`    | Cambios en el sistema de build (tsup, scripts)      |

### Ejemplos

```bash
git commit -m "feat: add IconArrowLeft and IconArrowRight"
git commit -m "fix: IconUser stroke not applying color prop"
git commit -m "docs: update contributing guide"
git commit -m "chore: bump typescript to 5.4"
```

---

## 9. Configuración de GitHub Actions

El repositorio tiene dos workflows:

### `ci.yml` — Integración continua

Se ejecuta en cada `push` y `pull request` a `main`. Corre los pasos de build y test en Node.js 18, 20 y 22.

### `publish.yml` — Publicación automática

Se ejecuta al crear un **GitHub Release**. Requiere el secreto `NPM_TOKEN` con permiso de publicación en la organización `@playtopia` de npm.

**Cómo añadir el secreto:**

1. Ve a `github.com/shaggyt85/PlaytopiaIcons/settings/secrets/actions`
2. Clic en "New repository secret"
3. Nombre: `NPM_TOKEN`
4. Valor: token de npm con scope `automation` o `publish` generado en [npmjs.com/settings](https://www.npmjs.com/settings)

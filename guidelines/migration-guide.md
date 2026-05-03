# Guía de migración — Arquitectura BRIX

Instrucciones completas para replicar la arquitectura, estilos e infraestructura de este proyecto en una nueva aplicación desde cero o migrando desde otro sistema.

---

## 1. Stack tecnológico

| Capa             | Tecnología                | Versión               |
| ---------------- | ------------------------- | --------------------- |
| UI framework     | React                     | 19.x                  |
| Lenguaje         | TypeScript                | ES2020 strict         |
| Bundler          | Vite                      | 6.x                   |
| Estilos          | Tailwind CSS v4           | 4.x                   |
| Animaciones CSS  | tw-animate-css            | 1.x                   |
| Animaciones JS   | Motion (ex Framer Motion) | 12.x (`motion/react`) |
| Íconos           | Lucide React              | 0.487.x               |
| Lectura de Excel | xlsx                      | 0.18.x                |
| Formateo         | Prettier                  | —                     |

> **Tailwind v4 es una ruptura total con v3.** No existe `tailwind.config.js`. La configuración va directamente en CSS con directivas `@theme {}`.

---

## 2. Instalación del proyecto

```bash
# 1. Crear proyecto base
npm create vite@latest mi-proyecto -- --template react-ts
cd mi-proyecto

# 2. Dependencias de producción
npm install react@19 react-dom@19
npm install motion lucide-react tw-animate-css
npm install xlsx          # solo si necesitas leer archivos Excel

# 3. Dependencias de desarrollo
npm install -D tailwindcss@4 @tailwindcss/vite@4
npm install -D @types/react @types/react-dom @types/node
```

---

## 3. Estructura de carpetas

Replicar exactamente esta estructura:

```
mi-proyecto/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── prettier.config.mjs
├── public/
│   └── CNAME                   # solo si se despliega en GitHub Pages con dominio custom
├── src/
│   ├── main.tsx                # entry point
│   ├── vite-env.d.ts
│   ├── app/
│   │   ├── App.tsx             # raíz de la app — maneja estado de navegación
│   │   └── components/
│   │       ├── Shell.tsx       # layout global (header + main)
│   │       ├── Ambient.tsx     # fondo animado decorativo
│   │       ├── brix-ui.tsx     # componentes UI reutilizables (Button, Chip, Tag…)
│   │       ├── Welcome.tsx     # pantalla de inicio
│   │       ├── DirectSearch.tsx
│   │       ├── GuidedSearch.tsx
│   │       ├── ArticleView.tsx
│   │       └── CrossRefPanel.tsx
│   ├── data/
│   │   ├── types.ts            # tipos TypeScript del modelo de datos
│   │   ├── index.ts            # exports centrales: TREE, ARTICLES, REFS, getChildren
│   │   └── [titulo]/           # carpeta por cada título/sección del contenido
│   │       ├── _chapters.ts    # árbol de navegación del título
│   │       ├── X.1.ts
│   │       ├── X.2.ts
│   │       └── ...
│   ├── imports/                # SVGs de marca exportados como componentes React
│   │   ├── Group1/
│   │   │   └── Group1.tsx      # logo completo
│   │   └── Group2/
│   │       └── Group2.tsx      # ícono/mark
│   └── styles/
│       ├── index.css           # importa todo en orden
│       ├── fonts.css           # @font-face si hay tipografías locales
│       ├── tailwind.css        # directivas de Tailwind + tw-animate-css
│       └── theme.css           # tokens de diseño con @theme {}
```

---

## 4. Configuración de archivos base

### `vite.config.ts`

```ts
import { defineConfig } from "vite"
import path from "path"
import { fileURLToPath } from "url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
})
```

> El alias `@` permite imports absolutos desde `src/`. Ejemplo: `import { ARTICLES } from "@/data"`.

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### `prettier.config.mjs`

```mjs
export default {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  plugins: [],
}
```

### `index.html`

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi App</title>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
      #root {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/main.tsx`

```tsx
import { createRoot } from "react-dom/client"
import App from "./app/App.tsx"
import "./styles/index.css"

createRoot(document.getElementById("root")!).render(<App />)
```

---

## 5. Sistema de estilos (Tailwind v4)

### `src/styles/index.css`

```css
@import "./fonts.css";
@import "./tailwind.css";
@import "./theme.css";
```

### `src/styles/tailwind.css`

```css
@import "tailwindcss" source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import "tw-animate-css";
```

> `source(none)` desactiva el escaneo automático. `@source` indica exactamente qué archivos escanear. Esto es **necesario** en Tailwind v4.

### `src/styles/theme.css`

Aquí van todos los tokens de diseño. En v4 se usa `@theme {}` en lugar de `theme.extend` en JS:

```css
@theme {
  /* Paleta de marca — reemplazar con los colores del proyecto */
  --color-brand-ink: #22184a; /* texto principal */
  --color-brand-accent: #3f369f; /* acento primario */
  --color-brand-violet: #8b3dff;
  --color-brand-violet-soft: #8c69f9;
  --color-brand-cyan: #14cedb;
  --color-brand-green: #0de77a;
  --color-brand-blue: #597cff;
  --color-brand-purple: #a548ff;
  --color-brand-pink: #d269e6;
  --color-brand-red: #fe4f54;
  --color-brand-wash: #f6f4fb; /* fondo suave */
}

@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --muted: #ececf0;
  --muted-foreground: #717182;
  --border: rgba(0, 0, 0, 0.1);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... completar según sea necesario */
}
```

**Uso en JSX:** Los tokens de `@theme` se usan directamente como clases de Tailwind:

```tsx
// --color-brand-ink → clase text-brand-ink, bg-brand-ink, border-brand-ink
<div className="text-brand-ink bg-brand-wash border-brand-accent" />

// Opacidad con /: text-brand-ink/55 = color al 55% de opacidad
<p className="text-brand-ink/55" />
```

---

## 6. Modelo de datos

El contenido se almacena como TypeScript puro — sin base de datos ni API externa.

### `src/data/types.ts`

```ts
// Bloque de contenido — soporta anidamiento recursivo
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: (string | number)[][] }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "subsection"; code: string; title: string; items: Block[] }

// Unidad mínima de contenido consultable
export type Article = {
  code: string // identificador único, ej: "B.1.2"
  title: string // título corto
  summary: string // 1-2 oraciones, usado en previews y paneles laterales
  body: Block[] // contenido completo; puede incluir subsecciones anidadas
  related: { code: string; title: string }[] // referencias cruzadas
}

// Árbol de navegación
export type TreeItem = {
  code: string
  title: string
  children?: TreeItem[]
}

export type TreeChapter = {
  title: string // "Capítulo X.1 — Nombre"
  items: TreeItem[]
}
```

### `src/data/[titulo]/_chapters.ts`

Define el árbol de navegación del lado izquierdo:

```ts
import type { TreeChapter } from "../types"

export const MI_TITULO_CHAPTERS: TreeChapter[] = [
  {
    title: "X.1 — Nombre del capítulo",
    items: [
      { code: "X.1.1", title: "Artículo uno" },
      {
        code: "X.1.2",
        title: "Artículo con hijos",
        children: [{ code: "X.1.2.1", title: "Subarticulo" }],
      },
    ],
  },
]
```

### `src/data/[titulo]/X.1.ts`

Un archivo por capítulo, exporta un array de `Article`:

```ts
import type { Article } from "../types"

export const X1: Article[] = [
  {
    code: "X.1.1",
    title: "Nombre del artículo",
    summary: "Descripción breve de una o dos oraciones.",
    body: [
      {
        type: "paragraph",
        text: "Texto completo del artículo...",
      },
      {
        type: "table",
        caption: "Tabla X.1-1 — Nombre de la tabla",
        headers: ["Columna A", "Columna B", "Columna C"],
        rows: [
          ["Fila 1", "Valor", 100],
          ["Fila 2", "Valor", 200],
        ],
      },
      {
        type: "note",
        text: "Nota aclaratoria sobre el artículo.",
      },
    ],
    related: [{ code: "X.1.2", title: "Artículo relacionado" }],
  },
]
```

### `src/data/index.ts`

Agrega todo en un solo punto de entrada:

```ts
import { MI_TITULO_CHAPTERS } from "./mi-titulo/_chapters"
import { X1 } from "./mi-titulo/X.1"
import { X2 } from "./mi-titulo/X.2"
import type { Article } from "./types"

export const TREE = [{ title: "Mi Título", chapters: MI_TITULO_CHAPTERS }]

const ALL_ARTICLES: Article[] = [...X1, ...X2]

export const ARTICLES: Record<string, Article> = Object.fromEntries(
  ALL_ARTICLES.map((a) => [a.code, a])
)

export const REFS = ARTICLES

export function getChildren(code: string): Article[] {
  const prefix = code + "."
  return Object.values(ARTICLES).filter((a) => {
    if (!a.code.startsWith(prefix)) return false
    const rest = a.code.slice(prefix.length)
    return !rest.includes(".")
  })
}
```

---

## 7. Arquitectura de navegación (SPA sin router)

La app no usa React Router. La navegación entre pantallas se maneja con un `useState` simple en `App.tsx`.

```tsx
// src/app/App.tsx
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Shell } from "./components/Shell"
import { Welcome } from "./components/Welcome"
// ...importar las demás pantallas

type Screen = "welcome" | "direct" | "guided" | "result"

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome")
  const [selectedCode, setSelectedCode] = useState<string | undefined>(undefined)
  const home = () => setScreen("welcome")

  return (
    <Shell onHome={home} ambient={screen === "welcome" ? "strong" : "soft"}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          {screen === "welcome" && <Welcome onPick={(m) => setScreen(m)} />}
          {screen === "result" && <ArticleView onHome={home} initialCode={selectedCode} />}
        </motion.div>
      </AnimatePresence>
    </Shell>
  )
}
```

**Patrón de pantallas:** cada pantalla recibe callbacks (`onBack`, `onResult`, `onHome`) en lugar de navegar directamente. Esto mantiene todo el estado de navegación centralizado en `App.tsx`.

---

## 8. Componentes UI (`brix-ui.tsx`)

Este archivo reemplaza a shadcn/ui. Contiene los primitivos del design system. Los tokens del tema (`--color-brand-*`) se usan directamente como clases de Tailwind.

Componentes mínimos a implementar:

- **`Button`** — variantes: `primary`, `ghost`, `outline`, `soft`
- **`Chip`** — pill seleccionable con tono de color (`violet`, `cyan`, `green`, `pink`)
- **`Tag`** — etiqueta no interactiva
- **`Input`** — campo de texto estilizado

Todos usan `transition-all duration-200` y `active:scale-[0.98]` para feedback táctil.

---

## 9. Animaciones

### Motion (animaciones JS)

Se importa desde `motion/react` (no desde `framer-motion`):

```tsx
import { motion, AnimatePresence } from "motion/react"

// Transición de entrada estándar
<motion.div
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
>
```

La curva `[0.22, 1, 0.36, 1]` es una ease-out personalizada que da sensación de fluidez natural.

### tw-animate-css (animaciones CSS)

Para animaciones declarativas con clases:

```tsx
<div className="animate-fade-in animate-duration-300" />
```

### Ambient (fondo animado)

El componente `Ambient.tsx` crea el fondo de blobs de color usando `motion.div` con `animate` continuo (`repeat: Infinity`). Recibe una prop `intensity: "strong" | "soft" | "none"` para controlar la opacidad del efecto.

---

## 10. SVGs de marca como componentes React

Los SVGs del logo y marca van en `src/imports/` como componentes React. Esto permite controlarlos con clases y props.

Estructura:

```
src/imports/
  Group1/
    Group1.tsx   # <svg> como JSX — logo horizontal completo
  Group2/
    Group2.tsx   # <svg> como JSX — ícono/mark
```

Los SVGs exportados desde Figma se pegan directamente como JSX con `className="absolute block inset-0 size-full"` para que sean responsivos dentro de un contenedor con dimensiones definidas.

Uso:

```tsx
import BrixLogo from "../../imports/Group1/Group1"

// El wrapper define el tamaño; el SVG llena el contenedor
;<div className="h-7 w-[96px]">
  <BrixLogo />
</div>
```

---

## 11. Persistencia local

Se usa `localStorage` directamente (sin librería) para guardar estado ligero como artículos recientes:

```ts
const LS_KEY = "app:recent-codes"

function loadRecents(): string[] {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function saveRecents(codes: string[]): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(codes))
  } catch {
    // storage no disponible — fallo silencioso
  }
}
```

---

## 12. Despliegue — GitHub Pages con dominio custom

### Configuración de Vite

```ts
// vite.config.ts
export default defineConfig({
  base: "/", // "/" cuando se usa dominio custom; "/nombre-repo/" si no
  // ...
})
```

### Build y deploy

```bash
# Build de producción
npm run build
# Genera la carpeta dist/
```

Para GitHub Pages, el método recomendado es con `gh-pages`:

```bash
npm install -D gh-pages

# Agregar en package.json:
# "deploy": "gh-pages -d dist"

npm run build && npm run deploy
```

O con GitHub Actions — crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Dominio custom

1. Crear archivo `public/CNAME` con el dominio (sin `https://`):
   ```
   mi-dominio.com
   ```
2. En el DNS del dominio, agregar registros `A` apuntando a GitHub Pages:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. En Settings → Pages del repositorio, configurar el dominio custom y activar HTTPS.

El archivo `CNAME` en `public/` se copia automáticamente a `dist/` en cada build.

---

## 13. Migración de contenido desde otro sistema

### Desde Excel

Si el contenido viene en un archivo `.xlsx`:

```ts
import * as XLSX from "xlsx"

const workbook = XLSX.readFile("contenido.xlsx")
const sheet = workbook.Sheets[workbook.SheetNames[0]!]!
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet)

// Mapear a tipo Article
const articles = rows.map((row) => ({
  code: row["Código"]!,
  title: row["Título"]!,
  summary: row["Resumen"]!,
  body: [{ type: "paragraph" as const, text: row["Contenido"]! }],
  related: [],
}))
```

### Desde HTML/Markdown

Extraer el contenido como texto plano y mapearlo al tipo `Block`. El tipo `paragraph` acepta HTML en texto si se renderiza con `dangerouslySetInnerHTML`, pero la convención del proyecto es texto plano.

### Desde una API REST

Si la fuente de datos actual es una API, durante la migración se puede hacer fetch en `data/index.ts` y cachear en un archivo `.ts` estático. La estructura de `Article[]` es compatible con cualquier origen.

---

## 14. Checklist de migración

- [ ] Crear el proyecto con Vite + React + TypeScript
- [ ] Instalar dependencias (`motion`, `lucide-react`, `tailwindcss@4`, etc.)
- [ ] Copiar y adaptar `vite.config.ts`, `tsconfig.json`, `prettier.config.mjs`
- [ ] Crear la estructura de carpetas `src/app`, `src/data`, `src/styles`, `src/imports`
- [ ] Configurar los tres archivos CSS (`tailwind.css`, `theme.css`, `index.css`)
- [ ] Definir la paleta de colores en `@theme {}` con los valores del proyecto
- [ ] Definir los tipos en `src/data/types.ts`
- [ ] Convertir el contenido al formato `Article[]` y organizarlo por capítulos
- [ ] Crear `src/data/index.ts` con `TREE`, `ARTICLES`, `REFS` y `getChildren`
- [ ] Exportar SVGs de Figma como componentes React en `src/imports/`
- [ ] Implementar `Shell.tsx` con el layout global
- [ ] Implementar `Ambient.tsx` para el fondo animado (opcional)
- [ ] Crear los componentes de `brix-ui.tsx` (`Button`, `Chip`, etc.)
- [ ] Implementar las pantallas y conectar la navegación en `App.tsx`
- [ ] Crear `public/CNAME` con el dominio
- [ ] Configurar GitHub Actions para deploy automático
- [ ] Verificar build con `npm run build` sin errores de TypeScript

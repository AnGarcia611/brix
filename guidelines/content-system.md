# Sistema de contenido — BRIX

## Diagnóstico del prototipo

El prototipo actual tiene **todo el contenido hardcodeado** en múltiples archivos de componentes. Los puntos de datos son:

| Lugar                         | Qué contiene                                                             | Estado    |
| ----------------------------- | ------------------------------------------------------------------------ | --------- |
| `ArticleView.tsx` → `TREE`    | Árbol de navegación izquierdo (Títulos, Capítulos, Artículos)            | Hardcoded |
| `ArticleView.tsx` → `Article` | Cuerpo del artículo central (JSX puro)                                   | Hardcoded |
| `CrossRefPanel.tsx` → `REFS`  | Artículos de referencias cruzadas (código, título, cuerpo, relacionados) | Hardcoded |
| `DirectSearch.tsx` → `SMART`  | Índice de búsqueda (query → código de artículo)                          | Hardcoded |
| `DirectSearch.tsx` → `RECENT` | Búsquedas recientes dummy                                                | Hardcoded |
| `GuidedSearch.tsx` → `STEPS`  | Preguntas del flujo guiado                                               | Hardcoded |

Toda la lógica de navegación y presentación **ya funciona correctamente**. Lo que hay que hacer es desacoplar el contenido de los componentes y alimentarlo desde una fuente de datos estructurada.

---

## Modelo de datos recomendado

Dado que el proyecto es un prototipo React/Vite sin backend y el alcance inicial es solo **Título B**, la solución más pragmática son **archivos TypeScript en `src/data/`**. Sin dependencias nuevas, con tipado completo y editable directamente.

### Tipos base

```ts
// src/data/types.ts  ← implementado

// Bloque de contenido — recursivo para soportar subsecciones anidadas
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: (string | number)[][] }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "subsection"; code: string; title: string; items: Block[] } // ← recursivo

export type Article = {
  code: string // "B.1.2"
  title: string // "Requisitos básicos"
  summary: string // 1-2 oraciones — usado en CrossRefPanel
  body: Block[]
  related: { code: string; title: string }[]
}

export type TreeItem = {
  code: string
  title: string
  children?: TreeItem[] // subsecciones visibles en el nav
}

export type TreeChapter = {
  title: string // "Capítulo B.1 — Requisitos generales"
  items: TreeItem[]
}
```

### Por qué se necesita `subsection`

La NSR-10 tiene jerarquías de hasta 4 niveles (B.1.2.1.4). El tipo `subsection` es recursivo — puede anidarse — lo que permite representar fielmente esta estructura dentro del `body` de un artículo padre. El árbol de navegación izquierdo solo muestra nivel B.1.x; el detalle interno vive en el cuerpo del artículo.

> **Sobre referencias inline:** los `paragraph` llevan texto plano. En una iteración futura se puede agregar `{ type: "rich"; nodes: (string | { ref: string; label: string })[] }` para habilitar links en medio del texto tal como en el prototipo.

---

## Estructura de archivos — implementada

```
src/
  data/
    types.ts                  ← ✅ implementado
    index.ts                  ← ✅ exporta TREE, ARTICLES, REFS, SEARCH_INDEX
    titulo-b/
      _chapters.ts            ← ✅ árbol de navegación del Título B
      B.1.ts                  ← ✅ Capítulo B.1 — Requisitos generales (contenido real)
      B.2.ts                  ← pendiente — Cargas muertas
      B.3.ts                  ← pendiente — Cargas vivas
      B.4.ts                  ← pendiente — Cargas de viento
      B.5.ts                  ← pendiente — Cargas de lluvia
      B.6.ts                  ← pendiente — Combinaciones de carga
```

### Ejemplo de artículo con subsecciones (`B.1.ts`)

```ts
{
  code: "B.1.2",
  title: "Requisitos básicos",
  body: [
    {
      type: "subsection",
      code: "B.1.2.1",
      title: "Requisitos que deben cumplir la estructura y todas sus partes",
      items: [
        {
          type: "subsection",
          code: "B.1.2.1.1",
          title: "Resistencia",
          items: [
            { type: "paragraph", text: "La estructura de la edificación..." },
          ],
        },
        {
          type: "subsection",
          code: "B.1.2.1.2",
          title: "Funcionamiento",
          items: [
            { type: "paragraph", text: "Los sistemas estructurales..." },
          ],
        },
      ],
    },
  ],
}
```

### Artículos con tablas (patrón para B.3 y B.4)

```ts
import type { Article } from "../types"

export const B3: Article[] = [
  {
    code: "B.3.4",
    title: "Cargas vivas mínimas uniformemente distribuidas",
    summary: "Valores mínimos de carga viva según el uso del espacio.",
    body: [
      {
        type: "paragraph",
        text: "Las cargas vivas mínimas para el diseño de pisos y cubiertas se determinan según el uso previsto del espacio, de acuerdo con los valores de la Tabla B.3-1.",
      },
      {
        type: "table",
        caption: "Tabla B.3-1 — Cargas vivas mínimas",
        headers: ["Uso", "Carga (kN/m²)"],
        rows: [
          ["Vivienda — sala, comedor, dormitorio", 1.8],
          ["Oficinas", 2.4],
          ["Corredores públicos en pisos", 4.8],
          ["Escaleras", 4.8],
          ["Garajes vehiculares", 2.4],
        ],
      },
      {
        type: "note",
        text: "El diseñador puede usar valores mayores si las condiciones de uso lo justifican.",
      },
    ],
    related: [
      { code: "B.3.5", title: "Reducción de cargas vivas" },
      { code: "B.6.1", title: "Combinaciones de carga de resistencia" },
    ],
  },
]
```

### Ejemplo: `src/data/titulo-b/_chapters.ts`

```ts
import type { TreeChapter } from "../types"

export const TITULO_B_CHAPTERS: TreeChapter[] = [
  {
    title: "Capítulo B.1 — Generalidades",
    items: [
      { code: "B.1.1", title: "Alcance" },
      { code: "B.1.3", title: "Definiciones" },
    ],
  },
  {
    title: "Capítulo B.2 — Cargas muertas",
    items: [{ code: "B.2.4", title: "Pesos unitarios de materiales" }],
  },
  {
    title: "Capítulo B.3 — Cargas vivas",
    items: [
      { code: "B.3.4", title: "Cargas mínimas uniformes" },
      { code: "B.3.5", title: "Reducción de cargas vivas" },
      { code: "B.3.6", title: "Cargas vivas de cubierta" },
    ],
  },
  // ...
]
```

### Ejemplo: `src/data/titulo-b/search.ts`

```ts
export const TITULO_B_SEARCH = [
  { q: "carga muerta", ref: "B.2.4" },
  { q: "peso propio", ref: "B.2.4" },
  { q: "carga viva mínima", ref: "B.3.4" },
  { q: "reducción de carga viva", ref: "B.3.5" },
  { q: "combinaciones de carga", ref: "B.6.1" },
  { q: "carga de viento", ref: "B.4.1" },
  // ...
]
```

### `src/data/index.ts` — punto de entrada

```ts
import { TITULO_B_CHAPTERS } from "./titulo-b/_chapters"
import { B1 } from "./titulo-b/B.1"
import { B3 } from "./titulo-b/B.3"
// ... demás capítulos

import { TITULO_B_SEARCH } from "./titulo-b/search"
import type { Article } from "./types"

// TREE: lo que consume el LeftNav de ArticleView
export const TREE = [{ title: "Título B — Cargas", chapters: TITULO_B_CHAPTERS }]

// ARTICLES: lookup por código → Article
const all: Article[] = [...B1, ...B3]
export const ARTICLES: Record<string, Article> = Object.fromEntries(all.map((a) => [a.code, a]))

// REFS: mismo formato que usa CrossRefPanel hoy
export const REFS = ARTICLES // son el mismo objeto

// SEARCH_INDEX: lo que consume DirectSearch
export const SEARCH_INDEX = TITULO_B_SEARCH
```

---

## Pipeline de extracción desde el PDF

El PDF de la NSR-10 tiene numeración estricta (`B.3.4.1`, etc.) aunque el formato sea caótico. El proceso sugerido:

1. **Extraer texto por sección** — copiar manualmente (o con un script Python + `pdfplumber`) el texto de cada artículo numerado del Título B.
2. **Crear el `.ts` del capítulo** — pegar el texto como `body: [{ type: "paragraph", text: "..." }]` por artículo.
3. **Agregar tablas** — las tablas de la NSR-10 son los datos más valiosos; tipearlas como `type: "table"` con `headers` y `rows`.
4. **Mapear relacionados** — anotar `related` con las referencias cruzadas que menciona el texto del artículo.
5. **Alimentar el índice de búsqueda** — agregar las frases clave que un usuario escribiría en `DirectSearch`.

---

## Cómo conectar con el código actual

Una vez creado `src/data/index.ts`, los cambios en los componentes son mínimos:

| Componente                          | Cambio                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| `CrossRefPanel.tsx`                 | Reemplazar `const REFS = { ... }` hardcodeado por `import { REFS } from "../../data"`      |
| `ArticleView.tsx` → `TREE`          | Importar desde `data` en lugar de la constante local                                       |
| `ArticleView.tsx` → `CenterContent` | Recibir el `Article` actual como prop y renderizar sus `body` blocks en lugar del JSX fijo |
| `DirectSearch.tsx` → `SMART`        | Importar `SEARCH_INDEX` desde `data`                                                       |

El `GuidedSearch` puede quedarse como está por ahora (sus preguntas son UI, no contenido normativo), o en el futuro mapear las respuestas a códigos de artículo reales.

---

## Resumen

```
src/data/            ← toda la NSR-10 que el prototipo conoce
  types.ts           ← contratos de TypeScript
  index.ts           ← TREE, ARTICLES, REFS, SEARCH_INDEX
  titulo-b/          ← un archivo por capítulo + search.ts
```

- **Sin backend, sin base de datos, sin parsers** — solo objetos TypeScript.
- **Escalable**: agregar Título C = crear `src/data/titulo-c/` y re-exportar desde `index.ts`.
- **Editable por ti** directamente en el editor, con autocompletado gracias a los tipos.

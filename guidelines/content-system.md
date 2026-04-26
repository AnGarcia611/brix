# Sistema de contenido — BRIX

Todo el contenido normativo de la NSR-10 vive en **archivos TypeScript en `src/data/`**. No hay backend ni base de datos. Esta guía declara cómo se deben elaborar esos archivos para que el sistema funcione correctamente.

---

## Modelo de datos

Los tipos base están definidos en `src/data/types.ts`. Todo archivo de contenido debe importar desde ahí y respetar exactamente estas estructuras.

### Tipos

```ts
// src/data/types.ts

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: (string | number)[][] }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "subsection"; code: string; title: string; items: Block[] } // recursivo

export type Article = {
  code: string // "B.1.2"
  title: string // "Requisitos básicos"
  summary: string // 1-2 oraciones — usado en el panel de referencias cruzadas
  body: Block[]
  related: { code: string; title: string }[]
}

export type TreeItem = {
  code: string
  title: string
  children?: TreeItem[]
}

export type TreeChapter = {
  title: string // "Capítulo B.1 — Requisitos generales"
  items: TreeItem[]
}
```

El tipo `subsection` es recursivo y se usa cuando un sub-numeral no tiene su propia entrada en `_chapters.ts` y su contenido vive completamente dentro del artículo padre. Si un sub-numeral aparece en `_chapters.ts`, va como `Article` independiente.

---

## Estructura de archivos

```
src/
  data/
    types.ts          ← tipos base — no modificar
    index.ts          ← exporta TREE, ARTICLES, SEARCH_INDEX
    titulo-b/
      _chapters.ts    ← árbol de navegación del Título B
      B.1.ts          ← array de Articles del Capítulo B.1
      B.2.ts          ← array de Articles del Capítulo B.2
      B.3.ts          ← ...y así para cada capítulo
```

Cada capítulo tiene su propio archivo `.ts` con un array exportado nombrado en mayúsculas (`B1`, `B2`, `B3`, …). El archivo `index.ts` los concatena todos en `ARTICLES` y los expone junto con `TREE` y `SEARCH_INDEX`.

---

## Cómo elaborar un archivo de capítulo

### Estructura base del archivo

```ts
// src/data/titulo-b/B.3.ts
import type { Article } from "../types"

export const B3: Article[] = [
  // un objeto Article por cada numeral del capítulo
]
```

### Un artículo por numeral

Cada sección numerada del texto (B.x, B.x.x, B.x.x.x, B.x.x.x.x) genera su propio objeto `Article`. Los artículos padre existen aunque su contenido sea una introducción breve. Los objetos se ordenan jerárquicamente: primero el padre, luego sus hijos en orden numérico.

```ts
{
  code: "B.3.4",          // código exacto del numeral, incluyendo todos los puntos
  title: "...",           // título oficial tal como aparece en el texto, sin el código delante
  summary: "...",         // 1-2 oraciones que resumen el artículo — se redactan, no se copian
  body: [ /* bloques */ ],
  related: [
    { code: "B.x.x", title: "..." },  // referencias cruzadas que menciona el texto
  ],
},
```

### Mapeo texto plano → bloque

| Señal en el texto                                | Tipo de bloque | Notas                                                                                     |
| ------------------------------------------------ | -------------- | ----------------------------------------------------------------------------------------- |
| Párrafo narrativo continuo                       | `paragraph`    | Texto literal; cada párrafo separado → bloque separado                                    |
| Lista con letras (a), b)) o guiones              | `list`         | Cada ítem → un string en `items[]`                                                        |
| Tabla con filas y columnas                       | `table`        | `caption` = título de tabla; valores numéricos sin comillas, textuales con comillas       |
| "Nota:", "NOTA:", aclaraciones enmarcadas        | `note`         | El prefijo "Nota:" se omite del campo `text`                                              |
| Sub-numeral sin entrada propia en `_chapters.ts` | `subsection`   | Si tiene entrada en `_chapters.ts`, va como `Article` independiente, no como `subsection` |

### Ejemplo con tablas

```ts
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
    { code: "B.2.4.2.2", title: "Reducción del factor de carga viva" },
  ],
},
```

### Ejemplo con subsecciones anidadas

```ts
{
  code: "B.1.2",
  title: "Requisitos básicos",
  summary: "...",
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
  related: [],
},
```

---

## Árbol de navegación — `_chapters.ts`

Todo código que aparezca en el sidebar izquierdo de la app debe estar registrado en `_chapters.ts`. Los artículos de 4° nivel van como `children` del tercer nivel.

```ts
import type { TreeChapter } from "../types"

export const TITULO_B_CHAPTERS: TreeChapter[] = [
  {
    title: "Capítulo B.3 — Cargas vivas",
    items: [
      { code: "B.3.4", title: "Cargas mínimas uniformes" },
      {
        code: "B.3.5",
        title: "Reducción de cargas vivas",
        children: [{ code: "B.3.5.1", title: "Requisitos" }],
      },
    ],
  },
]
```

Todo código registrado en `_chapters.ts` **debe tener un objeto `Article` correspondiente** en el archivo `.ts` del capítulo. Si no lo tiene, el panel central queda en blanco al hacer clic en ese nodo.

---

## Registro en `index.ts`

Al agregar un capítulo nuevo, se actualiza `src/data/index.ts` en dos lugares:

```ts
import { B3 } from "./titulo-b/B.3"

const ALL_ARTICLES: Article[] = [...B1, ...B2, ...B3]
```

Y se agregan entradas al `SEARCH_INDEX`:

```ts
{ q: "carga viva mínima almacenamiento", ref: "B.3.4" },
{ q: "reducción de carga viva área tributaria", ref: "B.3.5" },
```

---

## Ejemplo completo — texto plano a `Article`

**Entrada:**

```
B.3.5 — Reducción de cargas vivas

La carga viva de diseño puede reducirse en elementos estructurales que soporten
una superficie tributaria AT de 37.2 m² o más, de acuerdo con la fórmula:

  L = L0 · (0.25 + 4.57 / √AT)

donde L es la carga viva reducida, L0 la carga viva nominal y AT el área tributaria (m²).

La carga viva reducida no debe ser inferior a:
  a) 50% de L0 para elementos que soporten una sola planta
  b) 40% de L0 para otros elementos

Nota: Esta reducción no aplica a cargas de cubierta ni a cargas superiores a 4.8 kN/m².
```

**Resultado:**

```ts
{
  code: "B.3.5",
  title: "Reducción de cargas vivas",
  summary:
    "Permite reducir la carga viva de diseño cuando el área tributaria es mayor o igual a 37.2 m², con límites mínimos del 40-50% de L0.",
  body: [
    {
      type: "paragraph",
      text: "La carga viva de diseño puede reducirse en elementos estructurales que soporten una superficie tributaria AT de 37.2 m² o más, de acuerdo con la fórmula: L = L0 · (0.25 + 4.57 / √AT), donde L es la carga viva reducida, L0 la carga viva nominal y AT el área tributaria (m²).",
    },
    {
      type: "list",
      items: [
        "50% de L0 para elementos que soporten una sola planta",
        "40% de L0 para otros elementos",
      ],
    },
    {
      type: "note",
      text: "Esta reducción no aplica a cargas de cubierta ni a cargas superiores a 4.8 kN/m².",
    },
  ],
  related: [
    { code: "B.3.4", title: "Cargas vivas mínimas uniformemente distribuidas" },
    { code: "B.2.4.2.2", title: "Reducción del factor de carga viva" },
  ],
},
```

---

## Reglas de calidad

- `code` coincide **exactamente** con el numeral de la NSR-10, incluyendo todos los puntos.
- `title` es el título oficial del numeral, sin el código delante.
- `summary` se redacta — no se copia del texto — y funciona como descripción independiente.
- Las fórmulas van en texto plano ASCII dentro de `paragraph` (`L = L0 · (0.25 + 4.57 / √AT)`). No usar LaTeX ni HTML.
- No omitir artículos aunque tengan poco contenido.
- `related` solo referencia códigos que existan o vayan a existir en el sistema. No inventar códigos.
- El array exportado se nombra con el prefijo del título en mayúsculas: `B1`, `B2`, `B3`, etc.

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

---

## Instrucciones para recrear un archivo de contenido desde texto plano

Esta sección permite que otro sistema (modelo de IA, colaborador, script) tome el texto de un capítulo de la NSR-10 y produzca un archivo `.ts` válido, listo para importar en `src/data/index.ts`.

### Convenciones generales

- **Un artículo = un objeto `Article`** en el array exportado.
- Cada sección numerada visible en el texto (B.x, B.x.x, B.x.x.x, B.x.x.x.x) genera su propio objeto independiente en el array. No anidar artículos dentro de `body` de otro artículo.
- Un artículo padre (p.ej. B.2.3) **también existe como objeto propio** aunque su contenido sea una introducción breve o solo redirija a sus sub-artículos.
- Los objetos se ordenan en el array de forma jerárquica: primero el padre, luego sus hijos en orden numérico.

### Mapeo texto plano → tipo de bloque

| Señal en el texto plano                                                   | Tipo de bloque | Notas                                                                                                                               |
| ------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Párrafo narrativo continuo                                                | `paragraph`    | Texto literal, sin formateo extra                                                                                                   |
| Lista con guiones, letras o números                                       | `list`         | Cada ítem → un string en `items[]`                                                                                                  |
| Tabla con filas y columnas                                                | `table`        | `caption` = título de la tabla, `headers` = encabezados, `rows` = filas como arrays                                                 |
| Nota, advertencia o aclaración ("Nota:", "Nota importante:")              | `note`         | Texto del cuerpo de la nota en `text`                                                                                               |
| Sub-numeral dentro del `body` de un artículo que no tiene artículo propio | `subsection`   | Solo si el sub-numeral no tiene código propio registrado en `_chapters.ts`. Si tiene código propio, va como artículo independiente. |

### Proceso paso a paso

**1. Identificar los artículos del capítulo**

Leer el texto y listar todos los encabezados numerados. Ejemplo para B.3:

```
B.3.1   Alcance
B.3.2   Definiciones
B.3.3   Cargas vivas de cubierta
B.3.4   Cargas vivas mínimas uniformemente distribuidas
B.3.4.1   Áreas de almacenamiento
B.3.5   Reducción de cargas vivas
```

Cada línea de esa lista → un objeto `Article` en el array.

**2. Crear el archivo**

```ts
// src/data/titulo-b/B.3.ts
import type { Article } from "../types"

export const B3: Article[] = [
  // artículos aquí
]
```

**3. Rellenar cada artículo**

Por cada sección numerada del texto:

```ts
{
  code: "B.3.4",                  // código exacto del numeral
  title: "...",                   // título tal como aparece en el texto
  summary: "...",                 // 1-2 oraciones que resumen el artículo (redactar)
  body: [ /* bloques */ ],
  related: [                      // referencias cruzadas que menciona el texto
    { code: "B.x.x", title: "..." },
  ],
},
```

**4. Convertir el cuerpo del texto a bloques**

Recorrer el texto del artículo de arriba hacia abajo y emitir bloques en orden:

- **Párrafos narrativos**: cada párrafo separado por salto de línea → `{ type: "paragraph", text: "..." }`. No concatenar párrafos distintos en uno solo.
- **Listas**: cuando el texto enumera ítems con letras (a), b), c)) o guiones → `{ type: "list", items: ["...", "...", "..."] }`.
- **Tablas**: cuando aparece una tabla con filas/columnas → `{ type: "table", caption: "Tabla X.X-X — Título", headers: [...], rows: [[...], [...]] }`. Los valores numéricos van sin comillas (`1.6`, `4.8`), los textuales van con comillas (`"Vivienda"`).
- **Notas**: cuando el texto tiene "Nota:", "NOTA:", o aclaraciones enmarcadas → `{ type: "note", text: "..." }`. Omitir el prefijo "Nota:" del campo `text`.

**5. Registrar en `_chapters.ts`**

Agregar los nuevos artículos al árbol de navegación del capítulo correspondiente. Los artículos de 4° nivel (B.x.x.x.x) van como `children` del tercer nivel.

**6. Registrar en `src/data/index.ts`**

```ts
import { B3 } from "./titulo-b/B.3"

const ALL_ARTICLES: Article[] = [...B1, ...B2, ...B3]

// Agregar entradas al SEARCH_INDEX:
{ q: "carga viva mínima almacenamiento", ref: "B.3.4" },
{ q: "reducción de carga viva área tributaria", ref: "B.3.5" },
```

### Ejemplo completo — conversión de texto plano a objeto `Article`

**Texto plano de entrada:**

```
B.3.5 — Reducción de cargas vivas

La carga viva de diseño puede reducirse en elementos estructurales que soporten
una superficie tributaria AT de 37.2 m² o más, de acuerdo con la fórmula:

  L = L0 · (0.25 + 4.57 / √AT)

donde:
  L  = carga viva de diseño reducida (kN/m²)
  L0 = carga viva nominal (kN/m²)
  AT = área tributaria del elemento (m²)

La carga viva reducida no debe ser inferior a los siguientes valores:
  a) 50% de L0 para elementos que soporten una sola planta
  b) 40% de L0 para otros elementos

Nota: Esta reducción no aplica a cargas de cubierta ni a cargas superiores a
      4.8 kN/m².
```

**Objeto `Article` resultante:**

```ts
{
  code: "B.3.5",
  title: "Reducción de cargas vivas",
  summary:
    "Permite reducir la carga viva de diseño cuando el área tributaria es mayor o igual a 37.2 m², con límites mínimos del 40-50% de L0.",
  body: [
    {
      type: "paragraph",
      text: "La carga viva de diseño puede reducirse en elementos estructurales que soporten una superficie tributaria AT de 37.2 m² o más, de acuerdo con la fórmula: L = L0 · (0.25 + 4.57 / √AT), donde L es la carga viva de diseño reducida (kN/m²), L0 es la carga viva nominal (kN/m²) y AT es el área tributaria del elemento (m²).",
    },
    {
      type: "list",
      items: [
        "50% de L0 para elementos que soporten una sola planta",
        "40% de L0 para otros elementos",
      ],
    },
    {
      type: "note",
      text: "Esta reducción no aplica a cargas de cubierta ni a cargas superiores a 4.8 kN/m².",
    },
  ],
  related: [
    { code: "B.3.4", title: "Cargas vivas mínimas uniformemente distribuidas" },
    { code: "B.2.4.2.2", title: "Reducción del factor de carga viva" },
  ],
},
```

### Reglas de calidad

- `code` debe coincidir **exactamente** con el código del numeral en la NSR-10, incluyendo puntos.
- `title` es el título oficial del numeral, sin el código delante.
- `summary` se redacta — no se copia literalmente del texto — y debe poder leerse de forma independiente (se muestra en el panel de referencias cruzadas).
- Las fórmulas matemáticas van dentro del texto del `paragraph`, escritas en texto plano o notación ASCII (`L = L0 · (0.25 + 4.57 / √AT)`). No usar LaTeX ni HTML.
- No omitir artículos aunque tengan poco contenido: un artículo con un solo párrafo es válido.
- Los `related` deben referenciar códigos que **existan o vayan a existir** en el sistema. No inventar códigos.
- El array exportado debe llamarse con el prefijo del título en mayúsculas: `B1`, `B2`, `B3`, `B4`, `B5`, `B6`.

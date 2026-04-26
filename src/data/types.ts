// Bloque de contenido — recursivo para soportar subsecciones anidadas
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: (string | number)[][] }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "subsection"; code: string; title: string; items: Block[] }

// Artículo de la NSR-10 — unidad mínima de consulta
export type Article = {
  code: string // "B.1.2"
  title: string // "Requisitos básicos"
  summary: string // 1-2 oraciones — usado en CrossRefPanel
  body: Block[] // contenido; puede incluir subsecciones anidadas
  related: { code: string; title: string }[] // referencias cruzadas
}

// Árbol de navegación izquierdo — soporta un nivel de hijos
export type TreeItem = {
  code: string
  title: string
  children?: TreeItem[] // subsecciones visibles en el nav
}

export type TreeChapter = {
  title: string // "Capítulo B.1 — Requisitos generales"
  items: TreeItem[]
}

import { TITULO_B_CHAPTERS } from "./titulo-b/_chapters"
import { B1 } from "./titulo-b/B.1"
import type { Article } from "./types"

// ─── Árbol de navegación (LeftNav en ArticleView) ───────────────────────────
export const TREE = [{ title: "Título B — Cargas", chapters: TITULO_B_CHAPTERS }]

// ─── Lookup de artículos por código ─────────────────────────────────────────
const ALL_ARTICLES: Article[] = [...B1]

export const ARTICLES: Record<string, Article> = Object.fromEntries(
  ALL_ARTICLES.map((a) => [a.code, a])
)

// ─── REFS — alias de ARTICLES; mismo formato que consume CrossRefPanel ───────
export const REFS = ARTICLES

// ─── Índice de búsqueda — query → código de artículo ────────────────────────
export const SEARCH_INDEX: { q: string; ref: string }[] = [
  { q: "alcance cargas", ref: "B.1.1" },
  { q: "cargas de diseño", ref: "B.1.1" },
  { q: "requisitos básicos", ref: "B.1.2" },
  { q: "resistencia estructura", ref: "B.1.2" },
  { q: "funcionamiento rigidez deflexiones", ref: "B.1.2" },
  { q: "deformaciones impuestas temperatura retracción", ref: "B.1.2" },
  { q: "análisis estructural equilibrio", ref: "B.1.2" },
  { q: "integridad estructural colapso progresivo", ref: "B.1.3" },
  { q: "ductilidad continuidad amarre", ref: "B.1.3" },
  { q: "trayectoria de cargas", ref: "B.1.4" },
  { q: "diafragma fuerzas horizontales", ref: "B.1.4" },
]

import { TITULO_B_CHAPTERS } from "./titulo-b/_chapters"
import { B1 } from "./titulo-b/B.1"
import { B2 } from "./titulo-b/B.2"
import type { Article } from "./types"

// ─── Árbol de navegación (LeftNav en ArticleView) ───────────────────────────
export const TREE = [{ title: "Título B — Cargas", chapters: TITULO_B_CHAPTERS }]

// ─── Lookup de artículos por código ─────────────────────────────────────────
const ALL_ARTICLES: Article[] = [...B1, ...B2]

export const ARTICLES: Record<string, Article> = Object.fromEntries(
  ALL_ARTICLES.map((a) => [a.code, a])
)

// ─── REFS — alias de ARTICLES; mismo formato que consume CrossRefPanel ───────
export const REFS = ARTICLES

// ─── Hijos directos: artículos exactamente un nivel más profundos ────────────
export function getChildren(code: string): Article[] {
  const prefix = code + "."
  return Object.values(ARTICLES).filter((a) => {
    if (!a.code.startsWith(prefix)) return false
    const rest = a.code.slice(prefix.length)
    return !rest.includes(".")
  })
}

// ─── Índice de búsqueda — query → código de artículo ────────────────────────
export const SEARCH_INDEX: { q: string; ref: string }[] = [
  { q: "alcance cargas diseño mínimo", ref: "B.1.1" },
  { q: "cargas de diseño edificaciones", ref: "B.1.1" },
  { q: "requisitos básicos estructura partes", ref: "B.1.2" },
  { q: "requisitos resistencia funcionamiento análisis", ref: "B.1.2.1" },
  { q: "resistencia elementos conexiones coeficientes de carga", ref: "B.1.2.1.1" },
  { q: "funcionamiento rigidez deflexiones derivas vibraciones", ref: "B.1.2.1.2" },
  { q: "deformaciones impuestas temperatura retracción asentamientos", ref: "B.1.2.1.3" },
  { q: "análisis estructural equilibrio estabilidad compatibilidad", ref: "B.1.2.1.4" },
  { q: "integridad estructural unidad general", ref: "B.1.3" },
  { q: "amarre sismo título A concreto reforzado C.7.13", ref: "B.1.3.1" },
  { q: "colapso progresivo daño local estabilidad general", ref: "B.1.3.2" },
  { q: "ductilidad continuidad redistribución cargas", ref: "B.1.3.3" },
  { q: "trayectoria de cargas sistema estructural", ref: "B.1.4" },
  { q: "trayectoria continua solicitaciones diseño", ref: "B.1.4.1" },
  { q: "capacidad resistente cimentación apoyo fuerzas", ref: "B.1.4.2" },
  { q: "diafragma fuerzas horizontales viento sismo empuje", ref: "B.1.4.3" },
  { q: "definiciones cargas nominales mayoradas esfuerzos trabajo resistencia", ref: "B.2.1" },
  { q: "nomenclatura símbolos carga muerta viva viento sismo", ref: "B.2.2" },
  { q: "combinaciones carga esfuerzos de trabajo estado límite servicio", ref: "B.2.3" },
  { q: "combinaciones básicas esfuerzos trabajo D L W E sismo", ref: "B.2.3" },
  { q: "combinaciones cargas mayoradas método resistencia factores", ref: "B.2.4" },
  { q: "factores de carga 1.2D 1.6L 1.0E método resistencia", ref: "B.2.4" },
]

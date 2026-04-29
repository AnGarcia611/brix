import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { ARTICLES, TREE } from "../../data"

const LS_KEY = "brix:recent-codes"
const MAX_RECENTS = 3

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
    // storage not available — silent fail
  }
}

function addRecent(code: string): string[] {
  const prev = loadRecents().filter((c) => c !== code)
  const next = [code, ...prev].slice(0, MAX_RECENTS)
  saveRecents(next)
  return next
}

function sortByCode(a: { code: string }, b: { code: string }): number {
  const aParts = a.code.split(".").map((p) => (isNaN(Number(p)) ? p : Number(p)))
  const bParts = b.code.split(".").map((p) => (isNaN(Number(p)) ? p : Number(p)))
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    if (aParts[i] === undefined) return -1
    if (bParts[i] === undefined) return 1
    if (aParts[i]! < bParts[i]!) return -1
    if (aParts[i]! > bParts[i]!) return 1
  }
  return 0
}

const ALL_ARTICLES = Object.values(ARTICLES).sort(sortByCode)
const CHAPTERS = TREE[0]!.chapters

export function DirectSearch({
  onResult,
}: {
  onBack: () => void
  onResult: (code: string) => void
}) {
  const [query, setQuery] = useState("")
  const [recents, setRecents] = useState<string[]>(() => loadRecents())

  const navigate = (code: string) => {
    setRecents(addRecent(code))
    onResult(code)
  }

  const filtered = query
    ? ALL_ARTICLES.filter((a) => {
        const q = query.toLowerCase()
        return (
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.code.toLowerCase().includes(q)
        )
      })
    : []

  return (
    <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-[720px] flex-col px-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const first = filtered[0] ?? ALL_ARTICLES[0]
              if (first) navigate(first.code)
            }
          }}
          placeholder="Buscar en NSR-10"
          aria-label="Buscar en NSR-10"
          style={{ fontSize: "1.625rem", fontWeight: 400, letterSpacing: "-0.01em" }}
          className="w-full border-0 border-b border-brand-ink/15 bg-transparent pb-5 text-brand-ink outline-none transition-colors placeholder:text-brand-ink/30 focus:border-brand-accent"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-brand-accent) 0%, var(--color-brand-violet) 60%, var(--color-brand-cyan) 100%)",
          }}
          initial={{ width: 0 }}
          animate={{ width: query ? "100%" : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {query.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-12"
          >
            <SectionLabel>Recientes</SectionLabel>
            {recents.length === 0 ? (
              <p className="mt-4 text-[15px] text-brand-ink/30">Sin búsquedas recientes</p>
            ) : (
              <ul className="mt-4 space-y-1">
                {recents.map((code) => {
                  const article = ARTICLES[code]
                  if (!article) return null
                  return (
                    <li key={code}>
                      <button
                        onClick={() => navigate(code)}
                        className="group flex w-full items-baseline gap-3 rounded-lg py-3 text-left outline-none"
                      >
                        <span className="shrink-0 text-[13px] text-brand-ink/35">{code}</span>
                        <span className="text-[17px] text-brand-ink/75 transition-colors group-hover:text-brand-ink">
                          {article.title}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="mt-12">
              <SectionLabel>Sugerencias</SectionLabel>
              <ul className="mt-4 space-y-1">
                {CHAPTERS.map((chapter) => {
                  const chapterCode = chapter.title.split(" — ")[0]!
                  const chapterLabel = chapter.title.split(" — ")[1] ?? chapter.title
                  return (
                    <li key={chapter.title}>
                      <button
                        onClick={() => navigate(chapterCode)}
                        className="group flex w-full items-baseline gap-3 rounded-lg py-3 text-left outline-none"
                      >
                        <span className="shrink-0 text-[13px] text-brand-ink/35">
                          {chapterCode}
                        </span>
                        <span className="text-[17px] text-brand-ink/75 transition-colors group-hover:text-brand-ink">
                          {chapterLabel}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="mt-10"
          >
            <SectionLabel>
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            </SectionLabel>
            <ul className="mt-4 divide-y divide-brand-ink/8">
              {filtered.map((a, i) => (
                <motion.li
                  key={a.code}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    onClick={() => navigate(a.code)}
                    className="group flex w-full items-baseline justify-between py-4 text-left outline-none"
                  >
                    <span className="text-[17px] text-brand-ink transition-colors group-hover:text-brand-accent">
                      {a.title}
                    </span>
                    <span className="ml-4 text-sm tracking-wider text-brand-ink/40 transition-colors group-hover:text-brand-accent">
                      {a.code}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">{children}</div>
}

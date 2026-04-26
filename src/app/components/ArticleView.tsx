import { motion, AnimatePresence } from "motion/react"
import { useState, useMemo, useEffect } from "react"
import { CrossRefStack } from "./CrossRefPanel"
import { TREE, ARTICLES, REFS, getChildren } from "../../data"
import type { Block, Article as ArticleData, TreeChapter, TreeItem } from "../../data/types"

type Mode = "lectura" | "datos" | "relacion"
type Visit = { code: string; title: string; at: number }

const FIRST_CODE = Object.keys(ARTICLES)[0] ?? "B.1.1"

export function ArticleView({ onHome }: { onHome: () => void; onRestart: () => void }) {
  const [currentCode, setCurrentCode] = useState<string>(FIRST_CODE)
  const [mode, setMode] = useState<Mode>("lectura")
  const [stack, setStack] = useState<string[]>([])
  const firstArticle = ARTICLES[FIRST_CODE]
  const [visits, setVisits] = useState<Visit[]>(
    firstArticle ? [{ code: firstArticle.code, title: firstArticle.title, at: Date.now() }] : []
  )
  const [focusVisit, setFocusVisit] = useState<string>(FIRST_CODE)
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)

  const currentArticle = ARTICLES[currentCode]

  const recordVisit = (code: string) => {
    const ref = REFS[code]
    if (!ref) return
    setVisits((v) => {
      const existing = v.find((x) => x.code === code)
      if (existing) return v
      return [...v, { code, title: ref.title, at: Date.now() }]
    })
  }

  const navigateTo = (code: string) => {
    setCurrentCode(code)
    setMode("lectura")
    recordVisit(code)
    setFocusVisit(code)
  }

  const open = (code: string) => {
    setStack((s) => [...s, code])
    recordVisit(code)
    setFocusVisit(code)
  }
  const back = () => setStack((s) => s.slice(0, -1))
  const close = () => setStack([])
  const promote = (code: string) => {
    setStack([])
    setCurrentCode(code)
    setMode("lectura")
    setTimeout(() => {
      setStack([code])
      recordVisit(code)
      setFocusVisit(code)
    }, 60)
  }

  const gridCols = `${leftOpen ? "390px" : "44px"} 1fr ${rightOpen ? "400px" : "44px"}`

  return (
    <div
      className="relative grid h-[calc(100vh-88px)] overflow-hidden border-t border-brand-ink/8"
      style={{
        gridTemplateColumns: gridCols,
        transition: "grid-template-columns 200ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <LeftNav
        open={leftOpen}
        onToggle={() => setLeftOpen((v) => !v)}
        currentCode={currentCode}
        onSelect={navigateTo}
      />
      <CenterContent article={currentArticle} mode={mode} setMode={setMode} onOpen={open} />
      <RightPanel
        visits={visits}
        focus={focusVisit}
        onSelect={(c) => {
          setFocusVisit(c)
          navigateTo(c)
        }}
        onHome={onHome}
        open={rightOpen}
        onToggle={() => setRightOpen((v) => !v)}
      />

      <CrossRefStack
        stack={stack}
        onClose={close}
        onOpen={open}
        onBack={back}
        onPromote={promote}
      />
    </div>
  )
}

/* ---------- LEFT ---------- */

function LeftNav({
  open,
  onToggle,
  currentCode,
  onSelect,
}: {
  open: boolean
  onToggle: () => void
  currentCode: string
  onSelect: (code: string) => void
}) {
  if (!open) {
    return <CollapsedRail side="left" label="Estructura" onExpand={onToggle} />
  }
  return (
    <aside className="flex flex-col overflow-hidden border-r border-brand-ink/8 bg-white">
      <div className="flex items-start justify-between px-6 pt-8 pb-4">
        <div>
          <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">NSR-10</div>
          <div className="mt-1 text-[15px] text-brand-ink" style={{ fontWeight: 500 }}>
            Estructura
          </div>
        </div>
        <CollapseBtn side="left" onClick={onToggle} />
      </div>
      <div className="flex-1 overflow-y-auto px-3 pb-6">
        {TREE.map((titulo) => (
          <TituloSection
            key={titulo.title}
            title={titulo.title}
            chapters={titulo.chapters}
            currentCode={currentCode}
            onSelect={onSelect}
          />
        ))}
      </div>
    </aside>
  )
}

function CollapseBtn({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Ocultar estructura" : "Ocultar índice"}
      className="flex h-7 w-7 items-center justify-center rounded-md text-brand-ink/45 outline-none transition-colors duration-150 hover:bg-brand-ink/5 hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-accent/30"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {side === "left" ? <path d="M10 3 5 8l5 5" /> : <path d="M6 3l5 5-5 5" />}
      </svg>
    </button>
  )
}

function CollapsedRail({
  side,
  label,
  onExpand,
}: {
  side: "left" | "right"
  label: string
  onExpand: () => void
}) {
  return (
    <aside
      className={`flex flex-col items-center bg-white ${
        side === "left" ? "border-r" : "border-l"
      } border-brand-ink/8`}
    >
      <button
        onClick={onExpand}
        aria-label={`Mostrar ${label}`}
        className="flex h-11 w-full items-center justify-center text-brand-ink/50 outline-none transition-colors duration-150 hover:bg-brand-ink/4 hover:text-brand-ink focus-visible:bg-brand-ink/4"
      >
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {side === "left" ? <path d="M6 3l5 5-5 5" /> : <path d="M10 3 5 8l5 5" />}
        </svg>
      </button>
      <button
        onClick={onExpand}
        className="mt-2 flex flex-1 items-center justify-center outline-none"
        aria-hidden
        tabIndex={-1}
      >
        <span
          className="select-none text-[11px] tracking-[0.22em] text-brand-ink/40 uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {label}
        </span>
      </button>
    </aside>
  )
}

function TituloSection({
  title,
  chapters,
  currentCode,
  onSelect,
}: {
  title: string
  chapters: TreeChapter[]
  currentCode: string
  onSelect: (code: string) => void
}) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="mb-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-brand-ink/75 outline-none transition-colors hover:bg-brand-ink/4 focus-visible:bg-brand-ink/4"
      >
        <span>{title}</span>
        <span className={`text-brand-ink/30 transition-transform ${expanded ? "rotate-90" : ""}`}>
          ›
        </span>
      </button>
      {expanded && (
        <div className="mt-1 ml-3 border-l border-brand-ink/8 pl-2">
          {chapters.map((ch) => (
            <ChapterSection
              key={ch.title}
              chapter={ch}
              currentCode={currentCode}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ChapterSection({
  chapter,
  currentCode,
  onSelect,
}: {
  chapter: TreeChapter
  currentCode: string
  onSelect: (code: string) => void
}) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="mb-0.5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left text-[13px] text-brand-ink/55 outline-none transition-colors hover:bg-brand-ink/4 hover:text-brand-ink/75 focus-visible:bg-brand-ink/4"
      >
        <span>{chapter.title}</span>
        <span className={`text-brand-ink/25 transition-transform ${expanded ? "rotate-90" : ""}`}>
          ›
        </span>
      </button>
      {expanded && chapter.items.length > 0 && (
        <div className="mt-0.5 ml-3 border-l border-brand-ink/8 pl-2">
          {chapter.items.map((item) => (
            <NavItem key={item.code} item={item} currentCode={currentCode} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

function NavItem({
  item,
  currentCode,
  onSelect,
}: {
  item: TreeItem
  currentCode: string
  onSelect: (code: string) => void
}) {
  const hasChildren = (item.children?.length ?? 0) > 0
  const isActive = item.code === currentCode
  const isAncestor = currentCode.startsWith(item.code + ".")
  const [expanded, setExpanded] = useState(isActive || isAncestor)

  useEffect(() => {
    if (currentCode.startsWith(item.code + ".")) setExpanded(true)
  }, [currentCode, item.code])

  return (
    <div className="mb-0.5">
      <div className="flex items-stretch">
        <button
          onClick={() => onSelect(item.code)}
          className={`relative flex min-w-0 flex-1 items-baseline gap-3 rounded-md px-3 py-2 text-left text-sm outline-none transition-colors duration-150 ${
            isActive
              ? "bg-brand-accent/10 text-brand-accent"
              : "text-brand-ink/65 hover:bg-brand-ink/4 hover:text-brand-ink"
          }`}
          style={{ fontWeight: isActive ? 500 : 400 }}
        >
          {isActive && (
            <span
              aria-hidden
              className="absolute -left-[9px] top-1.5 bottom-1.5 w-[2px] rounded-full bg-brand-accent"
            />
          )}
          <span className="shrink-0 text-xs tracking-wider text-brand-ink/40">{item.code}</span>
          <span className="truncate">{item.title}</span>
        </button>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Contraer" : "Expandir"}
            className="flex items-center px-2 text-brand-ink/25 outline-none transition-colors hover:text-brand-ink/50 focus-visible:text-brand-ink/50"
          >
            <span
              className="inline-block text-base transition-transform duration-150"
              style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ›
            </span>
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <div className="ml-3 border-l border-brand-ink/8 pl-2">
          {item.children!.map((child) => (
            <NavItem key={child.code} item={child} currentCode={currentCode} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------- CENTER ---------- */

function extractTables(blocks: Block[]): Extract<Block, { type: "table" }>[] {
  const result: Extract<Block, { type: "table" }>[] = []
  for (const block of blocks) {
    if (block.type === "table") result.push(block)
    if (block.type === "subsection") result.push(...extractTables(block.items))
  }
  return result
}

function CenterContent({
  article,
  mode,
  setMode,
  onOpen,
}: {
  article: ArticleData | undefined
  mode: Mode
  setMode: (m: Mode) => void
  onOpen: (c: string) => void
}) {
  if (!article) return null

  const parts = article.code.split(".")
  const breadcrumbs =
    parts.length >= 2
      ? [`Título ${parts[0]}`, `Capítulo ${parts[0]}.${parts[1]}`, article.code]
      : [`Título ${parts[0]}`, article.code]

  const tables = extractTables(article.body)

  return (
    <section className="flex flex-col overflow-hidden bg-white">
      <div className="flex items-center justify-between gap-6 px-12 pt-10">
        <div className="flex items-center gap-1.5 text-[12px] text-brand-ink/35">
          {breadcrumbs.map((part, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-brand-ink/20">/</span>}
              <span className={i === breadcrumbs.length - 1 ? "text-brand-ink/60" : ""}>
                {part}
              </span>
            </span>
          ))}
        </div>
        <ModeSegment mode={mode} setMode={setMode} />
      </div>

      <div className="px-12 pt-5">
        <h1
          style={{
            fontSize: "clamp(2rem, 3.2vw, 2.625rem)",
            fontWeight: 500,
            letterSpacing: "-0.022em",
            lineHeight: 1.08,
          }}
          className="text-[#22184A]"
        >
          {article.title}
        </h1>
      </div>

      <div className="mt-10 flex-1 overflow-y-auto px-12 pb-14">
        <div className="mx-auto max-w-[640px]">
          <BlocksRenderer blocks={article.body} mode={mode} onOpen={onOpen} />

          <AnimatePresence initial={false}>
            {mode === "datos" && (
              <motion.div
                key="datos"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <DataOverlay tables={tables} />
              </motion.div>
            )}
            {mode === "relacion" && (
              <motion.div
                key="relacion"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <RelationOverlay
                  related={article.related}
                  children={getChildren(article.code)}
                  onOpen={onOpen}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ModeSegment({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const items: { id: Mode; label: string }[] = [
    { id: "lectura", label: "Lectura" },
    { id: "datos", label: "Datos" },
    { id: "relacion", label: "Relación" },
  ]
  return (
    <div
      role="tablist"
      aria-label="Modo de consulta"
      className="relative inline-flex items-center rounded-full bg-brand-ink/5 p-1"
    >
      {items.map((it) => {
        const active = mode === it.id
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(it.id)}
            className={`relative rounded-full px-4 py-1.5 text-[13px] outline-none transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:ring-brand-accent/25 ${
              active ? "text-brand-accent" : "text-brand-ink/45 hover:text-brand-ink/75"
            }`}
            style={{ fontWeight: active ? 500 : 400, letterSpacing: "-0.005em" }}
          >
            {active && (
              <motion.span
                layoutId="mode-indicator"
                className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(34,24,74,0.06),0_2px_6px_-2px_rgba(34,24,74,0.10)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                aria-hidden
              />
            )}
            <span className="relative">{it.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function BlocksRenderer({
  blocks,
  mode,
  onOpen,
  depth = 0,
}: {
  blocks: Block[]
  mode: Mode
  onOpen: (c: string) => void
  depth?: number
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <BlockItem key={i} block={block} mode={mode} onOpen={onOpen} depth={depth} />
      ))}
    </div>
  )
}

function BlockItem({
  block,
  mode,
  onOpen,
  depth,
}: {
  block: Block
  mode: Mode
  onOpen: (c: string) => void
  depth: number
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className="text-[17px] leading-[1.78] text-brand-ink/80"
          style={{ letterSpacing: "-0.002em" }}
        >
          {block.text}
        </p>
      )
    case "subsection":
      if (!block.title) {
        return (
          <div className="space-y-4">
            {block.items.map((item, i) =>
              item.type === "paragraph" ? (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-[0.35em] shrink-0 text-xs tracking-wider text-brand-ink/35">
                    {block.code}
                  </span>
                  <p
                    className="text-[17px] leading-[1.78] text-brand-ink/80"
                    style={{ letterSpacing: "-0.002em" }}
                  >
                    {item.text}
                  </p>
                </div>
              ) : (
                <BlockItem key={i} block={item} mode={mode} onOpen={onOpen} depth={depth} />
              )
            )}
          </div>
        )
      }
      return (
        <div className={depth === 0 ? "mt-2" : "mt-1"}>
          <div className="mb-3 flex items-baseline gap-3">
            <span className="w-16 shrink-0 text-xs tracking-wider text-brand-ink/35">
              {block.code}
            </span>
            <span
              className={`text-brand-ink ${depth === 0 ? "text-[16px]" : "text-[15px]"}`}
              style={{ fontWeight: 500 }}
            >
              {block.title}
            </span>
          </div>
          <div className="pl-[76px]">
            <BlocksRenderer blocks={block.items} mode={mode} onOpen={onOpen} depth={depth + 1} />
          </div>
        </div>
      )
    case "table":
      return (
        <div className="overflow-x-auto">
          {block.caption && (
            <div className="mb-3 text-[12px] text-brand-ink/50" style={{ fontWeight: 500 }}>
              {block.caption}
            </div>
          )}
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-brand-ink/10">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="pb-2 pr-6 text-left text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-brand-ink/6 last:border-b-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3 pr-6 text-brand-ink/75">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "list":
      return (
        <ul className="space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="list-disc text-[17px] leading-[1.78] text-brand-ink/80"
              style={{ letterSpacing: "-0.002em" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )
    case "note":
      return (
        <div className="rounded-lg border-l-2 border-brand-ink/20 bg-brand-ink/4 px-5 py-4 text-[14px] leading-relaxed text-brand-ink/70">
          {block.text}
        </div>
      )
    default:
      return null
  }
}

function DataOverlay({ tables }: { tables: Extract<Block, { type: "table" }>[] }) {
  if (tables.length === 0) {
    return (
      <div className="rounded-[16px] border border-brand-ink/8 bg-[#FAFAFB] px-8 py-12 text-center shadow-[0_1px_2px_rgba(34,24,74,0.03)]">
        <div className="text-[13px] text-brand-ink/40">
          Este artículo no contiene tablas de datos.
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-8">
      {tables.map((table, i) => (
        <div
          key={i}
          className="rounded-[16px] border border-brand-ink/8 bg-[#FAFAFB] p-8 shadow-[0_1px_2px_rgba(34,24,74,0.03)]"
        >
          {table.caption && (
            <div className="mb-5 text-[11px] tracking-[0.16em] text-brand-ink/40 uppercase">
              {table.caption}
            </div>
          )}
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-brand-ink/10">
                {table.headers.map((h, hi) => (
                  <th
                    key={hi}
                    className="pb-2.5 pr-6 text-left text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-brand-ink/6 last:border-b-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3.5 pr-6 text-brand-ink/75">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

function RelationOverlay({
  related,
  children,
  onOpen,
}: {
  related: { code: string; title: string }[]
  children: { code: string; title: string; summary: string }[]
  onOpen: (c: string) => void
}) {
  const hasChildren = children.length > 0
  const hasRelated = related.length > 0

  if (!hasChildren && !hasRelated) {
    return (
      <div className="border-t border-brand-ink/8 pt-8">
        <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">
          Referencias conectadas
        </div>
        <div className="mt-4 text-[13px] text-brand-ink/40">
          Este artículo no tiene referencias cruzadas.
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {hasChildren && (
        <div className="border-t border-brand-ink/8 pt-8">
          <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">
            Subsecciones
          </div>
          <div className="mt-3 divide-y divide-brand-ink/8">
            {children.map((child) => (
              <button
                key={child.code}
                onClick={() => onOpen(child.code)}
                className="group flex w-full items-start gap-6 py-4 text-left outline-none"
              >
                <div className="w-16 shrink-0 text-xs tracking-wider text-brand-ink/45 transition-colors duration-150 group-hover:text-brand-accent">
                  {child.code}
                </div>
                <div className="flex-1">
                  <div
                    className="text-[15px] text-brand-ink transition-colors duration-150 group-hover:text-brand-accent"
                    style={{ fontWeight: 500 }}
                  >
                    {child.title}
                  </div>
                  {child.summary && (
                    <div className="mt-0.5 text-[13px] text-brand-ink/50">{child.summary}</div>
                  )}
                </div>
                <span
                  aria-hidden
                  className="mt-0.5 text-brand-ink/30 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand-accent"
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {hasRelated && (
        <div className={hasChildren ? "" : "border-t border-brand-ink/8 pt-8"}>
          <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">
            Referencias cruzadas
          </div>
          <div className="mt-3 divide-y divide-brand-ink/8">
            {related.map((it) => (
              <button
                key={it.code}
                onClick={() => onOpen(it.code)}
                className="group flex w-full items-baseline gap-6 py-4 text-left outline-none"
              >
                <div className="w-16 text-xs tracking-wider text-brand-ink/45 transition-colors duration-150 group-hover:text-brand-accent">
                  {it.code}
                </div>
                <div className="flex-1">
                  <div
                    className="text-[15px] text-brand-ink transition-colors duration-150 group-hover:text-brand-accent"
                    style={{ fontWeight: 500 }}
                  >
                    {it.title}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="text-brand-ink/30 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand-accent"
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------- RIGHT: Dynamic Index / Memory + PDF ---------- */

function RightPanel({
  visits,
  focus,
  onSelect,
  onHome,
  open,
  onToggle,
}: {
  visits: Visit[]
  focus: string
  onSelect: (c: string) => void
  onHome: () => void
  open: boolean
  onToggle: () => void
}) {
  const path = useMemo(() => visits.map((v) => v.code), [visits])

  if (!open) {
    return <CollapsedRail side="right" label="Índice de la consulta" onExpand={onToggle} />
  }

  return (
    <aside className="flex flex-col overflow-hidden border-l border-brand-ink/6 bg-[#FBFBFC] text-brand-ink/75">
      {/* Dynamic index — memory of consultation */}
      <div className="border-b border-brand-ink/6 px-6 pt-8 pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] tracking-[0.16em] text-brand-ink/35 uppercase">
              Índice de la consulta
            </div>
            <div className="mt-1.5 text-[14px] text-brand-ink/75" style={{ fontWeight: 500 }}>
              Tu recorrido
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onHome}
              className="rounded-md px-2 py-1 text-[12px] text-brand-ink/40 outline-none transition-colors duration-150 hover:bg-brand-ink/4 hover:text-brand-ink/75"
            >
              Nueva
            </button>
            <CollapseBtn side="right" onClick={onToggle} />
          </div>
        </div>

        {/* Breadcrumb path */}
        <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]">
          {path.map((code, i) => (
            <span key={code + i} className="flex items-center gap-1.5">
              <button
                onClick={() => onSelect(code)}
                className={`rounded-md px-1.5 py-0.5 outline-none transition-colors duration-150 ${
                  code === focus
                    ? "bg-brand-accent/90 text-white"
                    : "text-brand-ink/55 hover:bg-brand-ink/5 hover:text-brand-ink/80"
                }`}
              >
                {code}
              </button>
              {i < path.length - 1 && <span className="text-brand-ink/20">→</span>}
            </span>
          ))}
        </div>

        {/* Visited nodes as a memory list */}
        <ul className="mt-6 space-y-0.5">
          {visits.map((v) => (
            <li key={v.code}>
              <button
                onClick={() => onSelect(v.code)}
                className={`flex w-full items-baseline gap-3 rounded-md px-2 py-2 text-left outline-none transition-colors ${
                  v.code === focus
                    ? "bg-white shadow-[0_1px_2px_rgba(34,24,74,0.04)]"
                    : "hover:bg-white/60"
                }`}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 rounded-full ${
                    v.code === focus ? "bg-brand-accent" : "bg-brand-ink/20"
                  }`}
                  aria-hidden
                />
                <span className="w-14 text-[11px] tracking-wider text-brand-ink/40">{v.code}</span>
                <span className="flex-1 text-[12.5px] text-brand-ink/70">{v.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PDF viewer */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-baseline justify-between px-6 pt-6">
          <div className="text-[11px] tracking-[0.16em] text-brand-ink/35 uppercase">
            Documento original
          </div>
          <span className="text-[11px] text-brand-ink/35">p. 47</span>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-6">
          <div className="mx-auto aspect-[3/4] w-full overflow-hidden rounded-md border border-brand-ink/8 bg-white p-5 text-[10px] leading-relaxed text-brand-ink/65 shadow-[0_1px_2px_rgba(34,24,74,0.04)]">
            <div className="border-b border-brand-ink/10 pb-2 text-center text-[9px] tracking-[0.14em] text-brand-ink/45 uppercase">
              NSR-10 · Título A
            </div>
            <div className="mt-3 text-brand-accent" style={{ fontWeight: 500 }}>
              A.2.5 Coeficientes de importancia
            </div>
            <p className="mt-2">
              Las edificaciones se clasifican en cuatro grupos de uso, de acuerdo con el riesgo
              asociado.
            </p>
            <p className="mt-2">
              A cada grupo se asigna un coeficiente I que modifica el espectro sísmico de diseño.
            </p>
            <div className="mt-3 rounded bg-brand-ink/4 p-2">
              <div style={{ fontWeight: 500 }}>Tabla A.2.5-1</div>
              <div className="mt-1.5 grid grid-cols-2 gap-y-0.5 text-[9px]">
                <div>Grupo IV</div>
                <div className="text-right">I = 1,50</div>
                <div>Grupo III</div>
                <div className="text-right">I = 1,25</div>
                <div>Grupo II</div>
                <div className="text-right">I = 1,10</div>
                <div>Grupo I</div>
                <div className="text-right">I = 1,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

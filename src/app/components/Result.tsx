import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import { CrossRefStack, REFS } from "./CrossRefPanel";

type Mode = "lectura" | "datos" | "relacion";
type Visit = { code: string; title: string; at: number };

const TREE = [
  {
    title: "Título A — Requisitos generales",
    open: true,
    items: [
      { code: "A.1", title: "Introducción" },
      { code: "A.2", title: "Zonas de amenaza sísmica", active: true },
      { code: "A.3", title: "Procedimientos de análisis" },
      { code: "A.6", title: "Derivas y deflexiones" },
    ],
  },
  { title: "Título B — Cargas", items: [] },
  { title: "Título C — Concreto estructural", items: [] },
  { title: "Título D — Mampostería", items: [] },
  { title: "Título F — Acero estructural", items: [] },
];

export function Result({ onHome }: { onHome: () => void; onRestart: () => void }) {
  const [mode, setMode] = useState<Mode>("lectura");
  const [stack, setStack] = useState<string[]>([]);
  const [visits, setVisits] = useState<Visit[]>([
    { code: "A.2.5", title: "Coeficientes de importancia", at: Date.now() },
  ]);
  const [focusVisit, setFocusVisit] = useState<string>("A.2.5");
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const recordVisit = (code: string) => {
    const ref = REFS[code];
    if (!ref) return;
    setVisits((v) => {
      const existing = v.find((x) => x.code === code);
      if (existing) return v;
      return [...v, { code, title: ref.title, at: Date.now() }];
    });
  };

  const open = (code: string) => {
    setStack((s) => [...s, code]);
    recordVisit(code);
    setFocusVisit(code);
  };
  const back = () => setStack((s) => s.slice(0, -1));
  const close = () => setStack([]);
  const promote = (code: string) => {
    setStack([]);
    setTimeout(() => {
      setStack([code]);
      recordVisit(code);
      setFocusVisit(code);
    }, 60);
  };

  const gridCols = `${leftOpen ? "260px" : "44px"} 1fr ${rightOpen ? "400px" : "44px"}`;

  return (
    <div
      className="relative grid h-[calc(100vh-88px)] overflow-hidden border-t border-[#22184A]/8"
      style={{
        gridTemplateColumns: gridCols,
        transition: "grid-template-columns 200ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <LeftNav open={leftOpen} onToggle={() => setLeftOpen((v) => !v)} />
      <CenterContent mode={mode} setMode={setMode} onOpen={open} />
      <RightPanel
        visits={visits}
        focus={focusVisit}
        onSelect={(c) => { setFocusVisit(c); open(c); }}
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
  );
}

/* ---------- LEFT ---------- */

function LeftNav({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  if (!open) {
    return (
      <CollapsedRail side="left" label="Estructura" onExpand={onToggle} />
    );
  }
  return (
    <aside className="flex flex-col overflow-hidden border-r border-[#22184A]/8 bg-white">
      <div className="flex items-start justify-between px-6 pt-8 pb-4">
        <div>
          <div className="text-[11px] tracking-[0.14em] text-[#22184A]/40 uppercase">
            NSR-10
          </div>
          <div className="mt-1 text-[15px] text-[#22184A]" style={{ fontWeight: 500 }}>
            Estructura
          </div>
        </div>
        <CollapseBtn side="left" onClick={onToggle} />
      </div>
      <div className="flex-1 overflow-y-auto px-3 pb-6">
        {TREE.map((section) => (
          <TreeSection key={section.title} {...section} />
        ))}
      </div>
    </aside>
  );
}

function CollapseBtn({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Ocultar estructura" : "Ocultar índice"}
      className="flex h-7 w-7 items-center justify-center rounded-md text-[#22184A]/45 outline-none transition-colors duration-150 hover:bg-[#22184A]/5 hover:text-[#22184A] focus-visible:ring-2 focus-visible:ring-[#3F369F]/30"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {side === "left" ? (
          <path d="M10 3 5 8l5 5" />
        ) : (
          <path d="M6 3l5 5-5 5" />
        )}
      </svg>
    </button>
  );
}

function CollapsedRail({
  side,
  label,
  onExpand,
}: {
  side: "left" | "right";
  label: string;
  onExpand: () => void;
}) {
  return (
    <aside
      className={`flex flex-col items-center bg-white ${
        side === "left" ? "border-r" : "border-l"
      } border-[#22184A]/8`}
    >
      <button
        onClick={onExpand}
        aria-label={`Mostrar ${label}`}
        className="flex h-11 w-full items-center justify-center text-[#22184A]/50 outline-none transition-colors duration-150 hover:bg-[#22184A]/4 hover:text-[#22184A] focus-visible:bg-[#22184A]/4"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          className="select-none text-[11px] tracking-[0.22em] text-[#22184A]/40 uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {label}
        </span>
      </button>
    </aside>
  );
}

function TreeSection({
  title,
  items,
  open,
}: {
  title: string;
  items: { code: string; title: string; active?: boolean }[];
  open?: boolean;
}) {
  const [expanded, setExpanded] = useState(!!open);
  return (
    <div className="mb-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-[#22184A]/75 outline-none transition-colors hover:bg-[#22184A]/4 focus-visible:bg-[#22184A]/4"
      >
        <span>{title}</span>
        <span className={`text-[#22184A]/30 transition-transform ${expanded ? "rotate-90" : ""}`}>›</span>
      </button>
      {expanded && items.length > 0 && (
        <div className="mt-1 ml-3 border-l border-[#22184A]/8 pl-2">
          {items.map((c) => (
            <button
              key={c.code}
              className={`relative flex w-full items-baseline gap-3 rounded-md px-3 py-2 text-left text-sm outline-none transition-colors duration-150 ${
                c.active
                  ? "bg-[#3F369F]/10 text-[#3F369F]"
                  : "text-[#22184A]/65 hover:bg-[#22184A]/4 hover:text-[#22184A]"
              }`}
              style={{ fontWeight: c.active ? 500 : 400 }}
            >
              {c.active && (
                <span
                  aria-hidden
                  className="absolute -left-[9px] top-1.5 bottom-1.5 w-[2px] rounded-full bg-[#3F369F]"
                />
              )}
              <span className="w-8 text-xs tracking-wider text-[#22184A]/40">{c.code}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- CENTER ---------- */

function CenterContent({
  mode,
  setMode,
  onOpen,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  onOpen: (c: string) => void;
}) {
  return (
    <section className="flex flex-col overflow-hidden bg-white">
      <div className="flex items-center justify-between gap-6 px-12 pt-10">
        <div className="flex items-center gap-1.5 text-[12px] text-[#22184A]/35">
          <span>Título A</span>
          <span className="text-[#22184A]/20">/</span>
          <span>Capítulo A.2</span>
          <span className="text-[#22184A]/20">/</span>
          <span className="text-[#22184A]/60">A.2.5</span>
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
          Coeficientes de importancia
        </h1>
      </div>

      <div className="mt-10 flex-1 overflow-y-auto px-12 pb-14">
        <div className="mx-auto max-w-[640px]">
          <Article mode={mode} onOpen={onOpen} />

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
                <DataOverlay />
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
                <RelationOverlay onOpen={onOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ModeSegment({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
}) {
  const items: { id: Mode; label: string }[] = [
    { id: "lectura", label: "Lectura" },
    { id: "datos", label: "Datos" },
    { id: "relacion", label: "Relación" },
  ];
  return (
    <div
      role="tablist"
      aria-label="Modo de consulta"
      className="relative inline-flex items-center rounded-full bg-[#22184A]/5 p-1"
    >
      {items.map((it) => {
        const active = mode === it.id;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(it.id)}
            className={`relative rounded-full px-4 py-1.5 text-[13px] outline-none transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:ring-[#3F369F]/25 ${
              active ? "text-[#3F369F]" : "text-[#22184A]/45 hover:text-[#22184A]/75"
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
        );
      })}
    </div>
  );
}

function RefLink({
  code,
  children,
  onOpen,
  emphasis,
}: {
  code: string;
  children: React.ReactNode;
  onOpen: (c: string) => void;
  emphasis: "quiet" | "strong";
}) {
  const strong = emphasis === "strong";
  return (
    <button
      onClick={() => onOpen(code)}
      className={`rounded-sm outline-none transition-[color,background-color,text-decoration-color] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-[#3F369F]/30 ${
        strong
          ? "bg-[#3F369F]/8 px-1.5 py-px text-[#3F369F] hover:bg-[#3F369F]/14"
          : "text-[#597CFF] no-underline decoration-[#597CFF]/0 underline-offset-4 hover:underline hover:decoration-[#597CFF]/60"
      }`}
      style={strong ? { fontWeight: 500 } : undefined}
    >
      {children}
    </button>
  );
}

function KeyValue({
  children,
  on,
}: {
  children: React.ReactNode;
  on: boolean;
}) {
  return (
    <span
      className="transition-colors duration-200 ease-out"
      style={
        on
          ? {
              backgroundColor: "rgba(13,231,122,0.18)",
              boxShadow: "inset 0 -0.3em 0 rgba(13,231,122,0.18)",
              padding: "0 2px",
              borderRadius: 2,
              fontWeight: 500,
              color: "#22184A",
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

function Article({
  mode,
  onOpen,
}: {
  mode: Mode;
  onOpen: (c: string) => void;
}) {
  const refEmph = mode === "relacion" ? "strong" : "quiet";
  const dataOn = mode === "datos";
  return (
    <article className="space-y-7">
      <p className="text-[17px] leading-[1.78] text-[#22184A]/80" style={{ letterSpacing: "-0.002em" }}>
        Las edificaciones se clasifican en{" "}
        <KeyValue on={dataOn}>cuatro grupos de uso</KeyValue> —véase{" "}
        <RefLink code="A.2.5.1" onOpen={onOpen} emphasis={refEmph}>A.2.5.1</RefLink>— y a cada grupo
        se le asigna un coeficiente de importancia <em>I</em> que modifica las
        fuerzas sísmicas de diseño obtenidas según{" "}
        <RefLink code="A.2.6" onOpen={onOpen} emphasis={refEmph}>A.2.6</RefLink>.
      </p>
      <p className="text-[17px] leading-[1.78] text-[#22184A]/80" style={{ letterSpacing: "-0.002em" }}>
        Los valores de <em>I</em> son{" "}
        <KeyValue on={dataOn}>1,50 · 1,25 · 1,10 · 1,00</KeyValue>{" "}
        según el grupo. Este coeficiente se aplica también al cálculo de{" "}
        <RefLink code="A.6.4" onOpen={onOpen} emphasis={refEmph}>derivas máximas</RefLink>, y es
        responsabilidad del profesional diseñador consignar el grupo seleccionado
        en las memorias de cálculo de la estructura.
      </p>
    </article>
  );
}

function DataOverlay() {
  const rows = [
    { g: "IV", u: "Indispensable", ex: "Hospitales, bomberos", i: "1,50" },
    { g: "III", u: "Atención a la comunidad", ex: "Colegios, estaciones", i: "1,25" },
    { g: "II", u: "Ocupación especial", ex: "Centros comerciales", i: "1,10" },
    { g: "I", u: "Ocupación normal", ex: "Vivienda, oficinas", i: "1,00" },
  ];
  return (
    <div>
      {/* Valor clave — hero grid */}
      <div className="rounded-[16px] border border-[#22184A]/8 bg-[#FAFAFB] p-8 shadow-[0_1px_2px_rgba(34,24,74,0.03)]">
        <div className="text-[11px] tracking-[0.16em] text-[#22184A]/40 uppercase">
          Valor clave
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          {rows.map((r) => (
            <div key={r.g}>
              <div
                style={{
                  fontSize: "2.125rem",
                  fontWeight: 500,
                  letterSpacing: "-0.028em",
                  lineHeight: 1,
                }}
                className="text-[#22184A]"
              >
                {r.i}
              </div>
              <div className="mt-2 text-[12px] tracking-[0.02em] text-[#22184A]/50">
                Grupo {r.g}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed breakdown */}
      <div className="mt-8">
        <div className="text-[11px] tracking-[0.16em] text-[#22184A]/40 uppercase">
          Detalle por grupo
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-[56px_1fr_1.2fr_64px] border-b border-[#22184A]/10 pb-2.5 text-[11px] tracking-[0.14em] text-[#22184A]/40 uppercase">
            <div>Grupo</div>
            <div>Clasificación</div>
            <div>Ejemplos</div>
            <div className="text-right">I</div>
          </div>
          {rows.map((r) => (
            <div
              key={r.g}
              className="grid grid-cols-[56px_1fr_1.2fr_64px] items-center border-b border-[#22184A]/6 py-3.5 text-[14px] last:border-b-0"
            >
              <div className="text-[#22184A]" style={{ fontWeight: 500 }}>{r.g}</div>
              <div className="text-[#22184A]/75">{r.u}</div>
              <div className="text-[#22184A]/50">{r.ex}</div>
              <div className="text-right text-[#22184A]" style={{ fontWeight: 500 }}>{r.i}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelationOverlay({ onOpen }: { onOpen: (c: string) => void }) {
  const items = [
    { code: "A.2.5.1", title: "Clasificación por uso", desc: "Define cada grupo de uso." },
    { code: "A.2.6", title: "Movimientos sísmicos de diseño", desc: "Espectro sobre el que actúa I." },
    { code: "A.6.4", title: "Derivas máximas", desc: "Aplicación del coeficiente en derivas." },
  ];
  return (
    <div className="border-t border-[#22184A]/8 pt-8">
      <div className="text-[11px] tracking-[0.14em] text-[#22184A]/40 uppercase">
        Referencias conectadas
      </div>
      <div className="mt-3 divide-y divide-[#22184A]/8">
        {items.map((it) => (
          <button
            key={it.code}
            onClick={() => onOpen(it.code)}
            className="group flex w-full items-baseline gap-6 py-4 text-left outline-none"
          >
            <div className="w-16 text-xs tracking-wider text-[#22184A]/45 transition-colors duration-150 group-hover:text-[#3F369F]">
              {it.code}
            </div>
            <div className="flex-1">
              <div className="text-[15px] text-[#22184A] transition-colors duration-150 group-hover:text-[#3F369F]" style={{ fontWeight: 500 }}>
                {it.title}
              </div>
              <div className="mt-0.5 text-[13px] text-[#22184A]/55">{it.desc}</div>
            </div>
            <span
              aria-hidden
              className="text-[#22184A]/30 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-[#3F369F]"
            >
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
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
  visits: Visit[];
  focus: string;
  onSelect: (c: string) => void;
  onHome: () => void;
  open: boolean;
  onToggle: () => void;
}) {
  const path = useMemo(() => visits.map((v) => v.code), [visits]);

  if (!open) {
    return (
      <CollapsedRail side="right" label="Índice de la consulta" onExpand={onToggle} />
    );
  }

  return (
    <aside className="flex flex-col overflow-hidden border-l border-[#22184A]/6 bg-[#FBFBFC] text-[#22184A]/75">
      {/* Dynamic index — memory of consultation */}
      <div className="border-b border-[#22184A]/6 px-6 pt-8 pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] tracking-[0.16em] text-[#22184A]/35 uppercase">
              Índice de la consulta
            </div>
            <div className="mt-1.5 text-[14px] text-[#22184A]/75" style={{ fontWeight: 500 }}>
              Tu recorrido
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onHome}
              className="rounded-md px-2 py-1 text-[12px] text-[#22184A]/40 outline-none transition-colors duration-150 hover:bg-[#22184A]/4 hover:text-[#22184A]/75"
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
                    ? "bg-[#3F369F]/90 text-white"
                    : "text-[#22184A]/55 hover:bg-[#22184A]/5 hover:text-[#22184A]/80"
                }`}
              >
                {code}
              </button>
              {i < path.length - 1 && <span className="text-[#22184A]/20">→</span>}
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
                    v.code === focus ? "bg-[#3F369F]" : "bg-[#22184A]/20"
                  }`}
                  aria-hidden
                />
                <span className="w-14 text-[11px] tracking-wider text-[#22184A]/40">{v.code}</span>
                <span className="flex-1 text-[12.5px] text-[#22184A]/70">{v.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PDF viewer */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-baseline justify-between px-6 pt-6">
          <div className="text-[11px] tracking-[0.16em] text-[#22184A]/35 uppercase">
            Documento original
          </div>
          <span className="text-[11px] text-[#22184A]/35">p. 47</span>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-6">
          <div className="mx-auto aspect-[3/4] w-full overflow-hidden rounded-md border border-[#22184A]/8 bg-white p-5 text-[10px] leading-relaxed text-[#22184A]/65 shadow-[0_1px_2px_rgba(34,24,74,0.04)]">
            <div className="border-b border-[#22184A]/10 pb-2 text-center text-[9px] tracking-[0.14em] text-[#22184A]/45 uppercase">
              NSR-10 · Título A
            </div>
            <div className="mt-3 text-[#3F369F]" style={{ fontWeight: 500 }}>
              A.2.5 Coeficientes de importancia
            </div>
            <p className="mt-2">
              Las edificaciones se clasifican en cuatro grupos de uso, de acuerdo con el riesgo asociado.
            </p>
            <p className="mt-2">
              A cada grupo se asigna un coeficiente I que modifica el espectro sísmico de diseño.
            </p>
            <div className="mt-3 rounded bg-[#22184A]/4 p-2">
              <div style={{ fontWeight: 500 }}>Tabla A.2.5-1</div>
              <div className="mt-1.5 grid grid-cols-2 gap-y-0.5 text-[9px]">
                <div>Grupo IV</div><div className="text-right">I = 1,50</div>
                <div>Grupo III</div><div className="text-right">I = 1,25</div>
                <div>Grupo II</div><div className="text-right">I = 1,10</div>
                <div>Grupo I</div><div className="text-right">I = 1,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

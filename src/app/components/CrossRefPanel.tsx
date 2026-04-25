import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ExternalLink, Lock, ArrowLeft } from "lucide-react";
import { Button, Tag } from "./brix-ui";

export type RefItem = {
  id: string;
  code: string;
  title: string;
  summary: string;
  body: string[];
  related: { code: string; title: string }[];
};

export const REFS: Record<string, RefItem> = {
  "A.2.5": {
    id: "A.2.5",
    code: "A.2.5",
    title: "Coeficientes de importancia",
    summary: "Factores de importancia I según el grupo de uso de la edificación.",
    body: [
      "El coeficiente de importancia I modifica el espectro de diseño con el fin de garantizar niveles de desempeño superiores para edificaciones de ocupación especial o indispensables.",
      "Para el grupo II se adopta I = 1.10; para el grupo III, I = 1.25; para el grupo IV (indispensable), I = 1.50.",
    ],
    related: [
      { code: "A.2.5.1", title: "Clasificación por uso" },
      { code: "A.2.6", title: "Movimientos sísmicos de diseño" },
    ],
  },
  "A.2.5.1": {
    id: "A.2.5.1",
    code: "A.2.5.1",
    title: "Clasificación por uso",
    summary: "Grupos de uso I, II, III y IV definidos por la norma.",
    body: [
      "Grupo I — Estructuras de ocupación normal. Grupo II — Estructuras de ocupación especial. Grupo III — Estructuras de atención a la comunidad. Grupo IV — Edificaciones indispensables.",
      "La clasificación es responsabilidad del profesional diseñador y debe quedar consignada en las memorias de cálculo.",
    ],
    related: [{ code: "A.2.6", title: "Movimientos sísmicos de diseño" }],
  },
  "A.2.6": {
    id: "A.2.6",
    code: "A.2.6",
    title: "Movimientos sísmicos de diseño",
    summary: "Lectura en profundidad — nivel 3 (solo lectura).",
    body: [
      "Los movimientos sísmicos de diseño corresponden a un sismo con una probabilidad del 10% de ser excedido en 50 años.",
      "Los valores de Aa y Av se obtienen del Apéndice A-4 para cada municipio.",
    ],
    related: [],
  },
  "A.6.4": {
    id: "A.6.4",
    code: "A.6.4",
    title: "Derivas máximas permitidas",
    summary: "Límites de deriva en función del sistema estructural.",
    body: [
      "La deriva máxima permitida corresponde al 1% de la altura de entrepiso en estructuras de concreto, metálicas o de madera; y 0.5% en estructuras de mampostería.",
    ],
    related: [
      { code: "A.2.5", title: "Coeficientes de importancia" },
    ],
  },
};

export function CrossRefStack({
  stack,
  onClose,
  onOpen,
  onBack,
  onPromote,
}: {
  stack: string[];
  onClose: () => void;
  onOpen: (code: string) => void;
  onBack: () => void;
  onPromote: (code: string) => void;
}) {
  return (
    <AnimatePresence>
      {stack.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#22184A]/30 backdrop-blur-[2px]"
          />
          <div className="pointer-events-none fixed inset-y-0 right-0 z-50 flex">
            {stack.map((code, idx) => {
              const level = idx + 1;
              const isTop = idx === stack.length - 1;
              const ref = REFS[code];
              if (!ref) return null;
              return (
                <motion.aside
                  key={code + idx}
                  initial={{ x: "100%" }}
                  animate={{
                    x: 0,
                    scale: isTop ? 1 : 0.98 - (stack.length - 1 - idx) * 0.02,
                    opacity: isTop ? 1 : 0.55,
                  }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  style={{
                    width: `min(540px, 42vw)`,
                    marginRight: isTop ? 0 : -480,
                    zIndex: 50 + idx,
                  }}
                  className="pointer-events-auto relative h-full overflow-hidden border-l border-[#22184A]/10 bg-white shadow-[0_-20px_60px_-10px_rgba(34,24,74,0.25)]"
                >
                  <PanelContent
                    level={level}
                    ref_={ref}
                    stack={stack}
                    onClose={onClose}
                    onBack={onBack}
                    onOpen={onOpen}
                    onPromote={onPromote}
                  />
                </motion.aside>
              );
            })}
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function PanelContent({
  level,
  ref_,
  stack,
  onClose,
  onBack,
  onOpen,
  onPromote,
}: {
  level: number;
  ref_: RefItem;
  stack: string[];
  onClose: () => void;
  onBack: () => void;
  onOpen: (code: string) => void;
  onPromote: (code: string) => void;
}) {
  const readonly = level >= 3;
  const levelColors = ["#3F369F", "#8B3DFF", "#14CEDB"];
  const color = levelColors[level - 1];

  return (
    <div className="flex h-full flex-col">
      <div
        className="border-b border-[#22184A]/8 px-6 pt-5 pb-4"
        style={{ backgroundColor: `${color}06` }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-6 items-center rounded-md px-2 text-[10px] tracking-wider"
              style={{ backgroundColor: `${color}1F`, color }}
            >
              NIVEL {level}
            </span>
            {readonly && (
              <span className="inline-flex items-center gap-1 rounded-md bg-[#22184A]/8 px-2 py-0.5 text-xs text-[#22184A]/70">
                <Lock className="h-3 w-3" /> Solo lectura
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {level > 1 && (
              <button
                onClick={onBack}
                className="flex h-8 w-8 items-center justify-center rounded-md text-[#22184A]/60 hover:bg-[#22184A]/5 hover:text-[#22184A]"
                aria-label="Volver un nivel"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-md text-[#22184A]/60 hover:bg-[#22184A]/5 hover:text-[#22184A]"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mt-3 flex items-center gap-1 overflow-x-auto text-xs text-[#22184A]/55">
          <span>Resultado normativo</span>
          {stack.map((c, i) => (
            <span key={c + i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              <span className={i === stack.length - 1 ? "text-[#22184A]" : ""}>
                {c}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Tag color={color}>{ref_.code}</Tag>
        </div>
        <h2
          style={{ fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.25 }}
          className="mt-2 text-[#22184A]"
        >
          {ref_.title}
        </h2>
        <p className="mt-1 text-sm text-[#22184A]/60">{ref_.summary}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        <div className="space-y-4">
          {ref_.body.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[#22184A]/80">
              {p}
            </p>
          ))}
        </div>

        {ref_.related.length > 0 && !readonly && (
          <div className="mt-8">
            <div className="mb-3 text-xs tracking-wider text-[#22184A]/50">
              REFERENCIAS CRUZADAS
            </div>
            <div className="space-y-2">
              {ref_.related.map((r) => (
                <button
                  key={r.code}
                  onClick={() => onOpen(r.code)}
                  className="group flex w-full items-center justify-between rounded-xl border border-[#22184A]/10 bg-white px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[#3F369F]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Tag color="#8B3DFF">{r.code}</Tag>
                    <span className="text-sm text-[#22184A]">{r.title}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#22184A]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#3F369F]" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {!readonly && (
        <div className="flex items-center justify-between gap-3 border-t border-[#22184A]/8 bg-white px-6 py-4">
          <span className="text-xs text-[#22184A]/50">
            Contexto original visible detrás
          </span>
          <Button variant="soft" onClick={() => onPromote(ref_.code)}>
            <ExternalLink className="h-4 w-4" /> Abrir como nueva consulta
          </Button>
        </div>
      )}
    </div>
  );
}

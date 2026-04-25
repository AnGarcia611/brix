import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Question = {
  title: string;
  options: { value: string; label: string; description: string }[];
};

const STEPS: Question[] = [
  {
    title: "¿Qué tipo de edificación?",
    options: [
      { value: "vivienda", label: "Vivienda", description: "Uni o multifamiliar" },
      { value: "comercial", label: "Comercial", description: "Oficinas, retail" },
      { value: "institucional", label: "Institucional", description: "Grupo III o IV" },
      { value: "industrial", label: "Industrial", description: "Bodegas, plantas" },
    ],
  },
  {
    title: "¿Sistema estructural?",
    options: [
      { value: "concreto", label: "Concreto reforzado", description: "Título C" },
      { value: "acero", label: "Acero estructural", description: "Título F" },
      { value: "mamposteria", label: "Mampostería", description: "Título D" },
      { value: "madera", label: "Madera o guadua", description: "Título G" },
    ],
  },
  {
    title: "¿Qué necesitas consultar?",
    options: [
      { value: "sismo", label: "Requisitos sísmicos", description: "Amenaza y diseño" },
      { value: "cargas", label: "Cargas y combinaciones", description: "Título B" },
      { value: "deriva", label: "Deriva y desplazamientos", description: "Capítulo A.6" },
      { value: "materiales", label: "Materiales y calidad", description: "Ensayos" },
    ],
  },
  {
    title: "¿Zona de amenaza sísmica?",
    options: [
      { value: "baja", label: "Baja", description: "Aa ≤ 0,10" },
      { value: "intermedia", label: "Intermedia", description: "0,10 < Aa ≤ 0,20" },
      { value: "alta", label: "Alta", description: "Aa > 0,20" },
      { value: "ns", label: "No estoy seguro", description: "Consultar mapa" },
    ],
  },
  {
    title: "¿Nivel de detalle?",
    options: [
      { value: "resumen", label: "Resumen", description: "Vista general" },
      { value: "articulo", label: "Artículo completo", description: "Texto oficial" },
      { value: "tablas", label: "Tablas y valores", description: "Datos técnicos" },
      { value: "todo", label: "Todo", description: "Consulta completa" },
    ],
  },
];

export function Guided({
  onBack,
  onResult,
}: {
  onBack: () => void;
  onResult: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const q = STEPS[step];

  const select = (v: string) => {
    const next = [...answers];
    next[step] = v;
    setAnswers(next);
    setTimeout(() => {
      if (step + 1 >= STEPS.length) onResult();
      else setStep(step + 1);
    }, 240);
  };

  const back = () => {
    if (step === 0) onBack();
    else setStep(step - 1);
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-[760px] flex-col px-10 pt-16">
      <div className="flex items-center justify-between">
        <button
          onClick={back}
          className="text-[15px] text-brand-ink/55 outline-none transition-colors hover:text-brand-ink focus-visible:text-brand-ink"
        >
          ← Atrás
        </button>
          <span className="text-[13px] tracking-wider text-brand-ink/45">
          {step + 1} / {STEPS.length}
        </span>
      </div>

      <div className="mt-6">
        <div className="relative h-px w-full overflow-hidden bg-brand-ink/8">
          <motion.div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand-accent) 0%, var(--color-brand-violet) 55%, var(--color-brand-cyan) 100%)",
            }}
            initial={false}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <h1
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.15 }}
            className="text-brand-ink"
          >
            {q.title}
          </h1>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {q.options.map((opt, i) => {
              const selected = answers[step] === opt.value;
              return (
                <motion.button
                  key={opt.value}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.04 }}
                  onClick={() => select(opt.value)}
                  className={`group relative flex items-center justify-between rounded-[16px] border bg-white px-6 py-5 text-left outline-none transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-brand-accent/20 ${
                    selected
                      ? "border-brand-green bg-brand-green/4 shadow-[0_8px_24px_-12px_rgba(13,231,122,0.35)]"
                      : "border-brand-ink/10 hover:border-brand-ink/25 hover:shadow-[0_2px_4px_rgba(34,24,74,0.04),0_16px_36px_-20px_rgba(34,24,74,0.15)]"
                  }`}
                >
                  <div>
                    <div className="text-[17px] text-brand-ink" style={{ fontWeight: 500 }}>
                      {opt.label}
                    </div>
                    <div className="mt-1 text-sm text-brand-ink/50">{opt.description}</div>
                  </div>
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-200 ${
                      selected ? "border-brand-green bg-brand-green" : "border-brand-ink/20 group-hover:border-brand-accent/40"
                    }`}
                    aria-hidden
                  >
                    {selected && (
                      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 5.2 4.2 7.4 8.2 2.6" />
                      </svg>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

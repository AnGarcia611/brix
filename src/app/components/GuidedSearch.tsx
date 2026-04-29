import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

type LoadType = "muerta" | "viva" | "viento" | "combinaciones"

type Option = { label: string; description: string }
type LeafOption = Option & { code: string }

const STEP1: { title: string; options: (Option & { value: LoadType })[] } = {
  title: "¿Qué tipo de carga está consultando?",
  options: [
    { value: "muerta", label: "Carga muerta", description: "Peso propio y elementos permanentes" },
    { value: "viva", label: "Carga viva", description: "Ocupación y uso de la edificación" },
    { value: "viento", label: "Viento", description: "Presión y succión sobre la estructura" },
    { value: "combinaciones", label: "Combinaciones", description: "Métodos ASD y LRFD" },
  ],
}

const STEP2: Record<LoadType, { title: string; options: LeafOption[] }> = {
  muerta: {
    title: "¿Qué aspecto de carga muerta?",
    options: [
      {
        code: "B.3.2",
        label: "Masas y pesos de materiales",
        description: "Densidades y pesos unitarios de materiales",
      },
      {
        code: "B.3.3",
        label: "Cargas muertas mínimas",
        description: "Valores mínimos por tipo de cubierta y piso",
      },
      {
        code: "B.3.4",
        label: "Elementos no estructurales",
        description: "Muros divisorios, fachadas, instalaciones",
      },
    ],
  },
  viva: {
    title: "¿Qué aspecto de carga viva?",
    options: [
      {
        code: "B.4.2",
        label: "Cargas vivas uniformes",
        description: "Tabla de valores por tipo de ocupación",
      },
      {
        code: "B.4.3",
        label: "Carga parcial",
        description: "Aplicación en una parte del área tributaria",
      },
      {
        code: "B.4.4",
        label: "Impacto",
        description: "Incremento por maquinaria o equipos móviles",
      },
      {
        code: "B.4.5",
        label: "Reducción de la carga viva",
        description: "Condiciones para reducir en áreas grandes",
      },
    ],
  },
  viento: {
    title: "¿Qué aspecto de viento?",
    options: [
      {
        code: "B.6.1.1",
        label: "Procedimientos permitidos",
        description: "Métodos aceptados para el cálculo de viento",
      },
      {
        code: "B.6.1.3",
        label: "Carga de viento mínima",
        description: "Presión mínima de diseño para estructuras",
      },
      {
        code: "B.6.4",
        label: "Procedimiento simplificado — Método 1",
        description: "Para edificios cerrados de poca altura",
      },
      {
        code: "B.6.5",
        label: "Método 2 — Procedimiento analítico",
        description: "Para edificios de cualquier altura y forma",
      },
    ],
  },
  combinaciones: {
    title: "¿Qué aspecto de combinaciones?",
    options: [
      {
        code: "B.2.1.1",
        label: "Definiciones",
        description: "Términos clave del sistema de cargas NSR-10",
      },
      {
        code: "B.2.2",
        label: "Nomenclatura",
        description: "Símbolos y notación usados en combinaciones",
      },
      {
        code: "B.2.3",
        label: "Método ASD",
        description: "Esfuerzos de trabajo — cargas sin mayorar",
      },
      {
        code: "B.2.4",
        label: "Método LRFD",
        description: "Resistencia — cargas mayoradas por factores",
      },
    ],
  },
}

export function GuidedSearch({
  onBack,
  onResult,
}: {
  onBack: () => void
  onResult: (code: string) => void
}) {
  const [step, setStep] = useState(0)
  const [loadType, setLoadType] = useState<LoadType | null>(null)

  const currentStep = step === 0 ? STEP1 : STEP2[loadType!]
  const totalSteps = 2

  const selectStep1 = (v: LoadType) => {
    setLoadType(v)
    setTimeout(() => setStep(1), 240)
  }

  const selectStep2 = (code: string) => {
    setTimeout(() => onResult(code), 180)
  }

  const back = () => {
    if (step === 0) onBack()
    else setStep(0)
  }

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
          {step + 1} / {totalSteps}
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
            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
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
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
            }}
            className="text-brand-ink"
          >
            {currentStep.title}
          </h1>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {step === 0
              ? STEP1.options.map((opt, i) => (
                  <motion.button
                    key={opt.value}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.04 }}
                    onClick={() => selectStep1(opt.value)}
                    className="group relative flex items-center justify-between rounded-[16px] border border-brand-ink/10 bg-white px-6 py-5 text-left outline-none transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-ink/25 hover:shadow-[0_2px_4px_rgba(34,24,74,0.04),0_16px_36px_-20px_rgba(34,24,74,0.15)] focus-visible:ring-4 focus-visible:ring-brand-accent/20"
                  >
                    <div>
                      <div className="text-[17px] text-brand-ink" style={{ fontWeight: 500 }}>
                        {opt.label}
                      </div>
                      <div className="mt-1 text-sm text-brand-ink/50">{opt.description}</div>
                    </div>
                    <div
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-ink/20 transition-all duration-200 group-hover:border-brand-accent/40"
                      aria-hidden
                    />
                  </motion.button>
                ))
              : STEP2[loadType!].options.map((opt, i) => (
                  <motion.button
                    key={opt.code}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.04 }}
                    onClick={() => selectStep2(opt.code)}
                    className="group relative flex items-center justify-between rounded-[16px] border border-brand-ink/10 bg-white px-6 py-5 text-left outline-none transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-ink/25 hover:shadow-[0_2px_4px_rgba(34,24,74,0.04),0_16px_36px_-20px_rgba(34,24,74,0.15)] focus-visible:ring-4 focus-visible:ring-brand-accent/20"
                  >
                    <div>
                      <div className="text-[17px] text-brand-ink" style={{ fontWeight: 500 }}>
                        {opt.label}
                      </div>
                      <div className="mt-1 text-sm text-brand-ink/50">{opt.description}</div>
                    </div>
                    <div className="shrink-0 text-[12px] text-brand-ink/30">{opt.code}</div>
                  </motion.button>
                ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

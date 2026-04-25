import { motion } from "motion/react";

export function Welcome({
  onPick,
}: {
  onPick: (mode: "direct" | "guided") => void;
}) {
  return (
    <div className="relative">
      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1120px] flex-col justify-center px-10 pb-24">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="text-[11px] tracking-[0.22em] text-brand-ink/45 uppercase">
            NSR-10
          </div>

          <h1
            style={{
              fontSize: "clamp(2.75rem, 5.4vw, 4rem)",
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: "-0.032em",
            }}
            className="mt-7 text-brand-ink"
          >
            Nueva experiencia
            <br />
            de consulta
          </h1>

          <p
            style={{
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
              letterSpacing: "-0.005em",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
            className="mx-auto mt-7 max-w-[520px] text-brand-ink/55"
          >
            ¿Cómo quieres consultar hoy?
          </p>
        </motion.header>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <Option
            index="01"
            label="Búsqueda directa"
            description="Busca artículos, tablas o conceptos."
            onClick={() => onPick("direct")}
            delay={0.18}
          />
          <Option
            index="02"
            label="Consulta guiada"
            description="Responde 5 preguntas y obtén el resultado."
            onClick={() => onPick("guided")}
            delay={0.26}
          />
        </div>
      </div>
    </div>
  );
}

function Option({
  index,
  label,
  description,
  onClick,
  delay,
}: {
  index: string;
  label: string;
  description: string;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.995 }}
      onClick={onClick}
      className="group relative flex h-[260px] flex-col justify-between overflow-hidden rounded-[16px] border border-brand-ink/8 bg-white/80 p-10 text-left outline-none backdrop-blur-xl shadow-[0_1px_2px_rgba(34,24,74,0.03),0_12px_32px_-20px_rgba(34,24,74,0.14)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:border-brand-accent/25 hover:bg-white hover:shadow-[0_2px_4px_rgba(34,24,74,0.04),0_24px_52px_-24px_rgba(34,24,74,0.22)] focus-visible:border-brand-accent focus-visible:ring-4 focus-visible:ring-brand-accent/15"
    >
      <div className="flex items-start justify-between">
        <span className="text-[11px] tracking-[0.22em] text-brand-ink/35">
          {index}
        </span>
        <span
          aria-hidden
          className="block h-px w-6 bg-brand-ink/15 transition-all duration-500 ease-out group-hover:w-14 group-hover:bg-brand-accent"
        />
      </div>

      <div>
        <div
          style={{
            fontSize: "1.75rem",
            fontWeight: 500,
            letterSpacing: "-0.022em",
            lineHeight: 1.12,
          }}
          className="text-brand-ink"
        >
          {label}
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-6">
          <p
            className="text-brand-ink/55"
            style={{ fontSize: "14.5px", lineHeight: 1.55, fontWeight: 400 }}
          >
            {description}
          </p>
          <span
            aria-hidden
            className="shrink-0 text-[18px] text-brand-ink/30 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-brand-accent"
          >
            →
          </span>
        </div>
      </div>
    </motion.button>
  );
}

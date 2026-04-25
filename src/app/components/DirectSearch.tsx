import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const RECENT = [
  "Coeficiente sísmico Aa",
  "Derivas máximas permitidas",
  "Pórticos de concreto reforzado",
];

const SMART = [
  { q: "deriva máxima permitida", ref: "A.6.4" },
  { q: "coeficiente de importancia", ref: "A.2.5" },
  { q: "grupos de uso", ref: "A.2.5.1" },
  { q: "resistencia del concreto f'c", ref: "C.5.1" },
  { q: "anclajes estructurales", ref: "C.D.6" },
  { q: "zonas de amenaza sísmica", ref: "A.2.3" },
];

export function DirectSearch({
  onResult,
}: {
  onBack: () => void;
  onResult: () => void;
}) {
  const [query, setQuery] = useState("");

  const filtered = query
    ? SMART.filter((s) => s.q.toLowerCase().includes(query.toLowerCase()))
    : [];

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
          onKeyDown={(e) => e.key === "Enter" && onResult()}
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
            <ul className="mt-4 space-y-1">
              {RECENT.map((r) => (
                <li key={r}>
                  <button
                    onClick={() => setQuery(r)}
                    className="group w-full rounded-lg py-3 text-left text-[17px] text-brand-ink/75 outline-none transition-colors hover:text-brand-ink focus-visible:text-brand-ink"
                  >
                      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-brand-ink/20">
                      {r}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <SectionLabel>Sugerencias</SectionLabel>
              <ul className="mt-4 space-y-1">
                {SMART.slice(0, 4).map((s) => (
                  <li key={s.q}>
                    <button
                      onClick={() => setQuery(s.q)}
                      className="flex w-full items-baseline justify-between rounded-lg py-3 text-left outline-none"
                    >
                      <span className="text-[17px] text-brand-ink/75 transition-colors hover:text-brand-ink">
                        {s.q}
                      </span>
                      <span className="ml-4 text-sm tracking-wider text-brand-ink/35">
                        {s.ref}
                      </span>
                    </button>
                  </li>
                ))}
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
              {(filtered.length ? filtered : SMART).map((s, i) => (
                <motion.li
                  key={s.q}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    onClick={onResult}
                    className="group flex w-full items-baseline justify-between py-4 text-left outline-none"
                  >
                    <span className="text-[17px] text-brand-ink transition-colors group-hover:text-brand-accent">
                      {s.q}
                    </span>
                    <span className="ml-4 text-sm tracking-wider text-brand-ink/40 transition-colors group-hover:text-brand-accent">
                      {s.ref}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] tracking-[0.14em] text-brand-ink/40 uppercase">
      {children}
    </div>
  );
}

import { motion } from "motion/react";
import { ReactNode, ButtonHTMLAttributes } from "react";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline" | "soft";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent disabled:opacity-40";
  const variants: Record<string, string> = {
    primary:
      "bg-brand-ink text-white hover:bg-brand-accent active:scale-[0.98] shadow-sm hover:shadow-md",
    ghost: "text-brand-ink hover:bg-brand-ink/5 active:scale-[0.98]",
    outline:
      "border border-brand-ink/15 text-brand-ink hover:border-brand-accent hover:bg-brand-accent/5 active:scale-[0.98]",
    soft:
      "bg-brand-accent/8 text-brand-accent hover:bg-brand-accent/14 active:scale-[0.98]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Chip({
  children,
  active,
  onClick,
  tone = "violet",
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  tone?: "violet" | "cyan" | "green" | "pink";
}) {
  const tones: Record<string, { bg: string; fg: string; ring: string }> = {
    violet: { bg: "#8B3DFF14", fg: "var(--color-brand-accent)", ring: "#8B3DFF33" },
    cyan: { bg: "#14CEDB1A", fg: "#0B7F87", ring: "#14CEDB4D" },
    green: { bg: "#0DE77A1A", fg: "#0A8A4A", ring: "#0DE77A4D" },
    pink: { bg: "#D269E61A", fg: "#8A3B9B", ring: "#D269E64D" },
  };
  const t = tones[tone];
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: active ? t.fg : t.bg,
        color: active ? "#fff" : t.fg,
        borderColor: t.ring,
      }}
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  interactive,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={interactive ? { y: -2 } : undefined}
      onClick={onClick}
      className={`rounded-2xl border border-brand-ink/8 bg-white p-6 shadow-[0_1px_2px_rgba(34,24,74,0.04),0_8px_24px_-12px_rgba(34,24,74,0.10)] ${
        interactive ? "cursor-pointer hover:shadow-[0_2px_4px_rgba(34,24,74,0.06),0_16px_40px_-16px_rgba(34,24,74,0.18)] hover:border-brand-accent/25" : ""
      } ${className}`}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}

export function Stepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex items-center gap-3">
      {steps.map((label, i) => {
        const state = i < current ? "done" : i === current ? "active" : "todo";
        return (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all duration-300 ${
                  state === "active"
                    ? "bg-brand-ink text-white shadow-[0_0_0_4px_#3F369F22]"
                    : state === "done"
                    ? "bg-brand-green text-white"
                    : "bg-brand-ink/8 text-brand-ink/60"
                }`}
              >
                {state === "done" ? "✓" : i + 1}
              </div>
              <span
                className={`hidden text-sm md:inline ${
                  state === "todo" ? "text-brand-ink/50" : "text-brand-ink"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="h-px w-8 bg-brand-ink/12 md:w-12" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Tag({
  children,
  color = "var(--color-brand-accent)",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{ backgroundColor: `${color}14`, color }}
      className="inline-flex items-center rounded-md px-2 py-0.5 text-xs tracking-wide uppercase"
    >
      {children}
    </span>
  );
}

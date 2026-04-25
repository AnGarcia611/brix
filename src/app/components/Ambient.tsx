import { motion } from "motion/react";

export function Ambient({
  intensity = "soft",
}: {
  intensity?: "strong" | "soft" | "none";
}) {
  if (intensity === "none") return null;

  const mult = intensity === "strong" ? 1 : 0.55;
  const veil = intensity === "strong" ? 0.35 : 0.6;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-wash to-white" />

      <motion.div
        className="absolute -top-[20%] left-[8%] h-[70vw] w-[70vw] max-h-[820px] max-w-[820px] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(139,61,255,${0.14 * mult}), rgba(139,61,255,0) 60%)`,
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[12%] right-[4%] h-[60vw] w-[60vw] max-h-[720px] max-w-[720px] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(20,206,219,${0.12 * mult}), rgba(20,206,219,0) 60%)`,
          filter: "blur(70px)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-[55vw] w-[55vw] max-h-[680px] max-w-[680px] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(63,54,159,${0.10 * mult}), rgba(63,54,159,0) 60%)`,
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 20, -25, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: `rgba(255,255,255,${veil})` }}
      />
    </div>
  );
}

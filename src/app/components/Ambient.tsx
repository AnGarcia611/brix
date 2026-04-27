import { motion } from "motion/react"

export function Ambient({ intensity = "soft" }: { intensity?: "strong" | "soft" | "none" }) {
  if (intensity === "none") return null

  const mult = intensity === "strong" ? 1.8 : 0.5
  const veil = intensity === "strong" ? 0.15 : 0.65

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-wash to-white" />

      <motion.div
        className="absolute -top-[20%] left-[8%] h-[70vw] w-[70vw] max-h-[820px] max-w-[820px]"
        style={{
          background: `radial-gradient(circle at center, rgba(139,61,255,${0.18 * mult}), rgba(139,61,255,0) 60%)`,
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 120, 260, 180, 0, -100, -140, -60, 0],
          y: [0, -80, -30, -180, -120, -60, 40, 120, 0],
          scale: [1, 1.08, 0.96, 1.12, 1, 0.94, 1.06, 0.98, 1],
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "40% 60% 30% 70% / 60% 40% 70% 30%",
            "70% 30% 50% 50% / 30% 70% 40% 60%",
            "30% 70% 60% 40% / 70% 30% 60% 40%",
            "50% 50% 40% 60% / 40% 60% 50% 50%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[12%] right-[4%] h-[60vw] w-[60vw] max-h-[720px] max-w-[720px]"
        style={{
          background: `radial-gradient(circle at center, rgba(20,206,219,${0.15 * mult}), rgba(20,206,219,0) 60%)`,
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -80, -200, -120, 0, 100, 160, 80, 0],
          y: [0, 100, 40, 200, 140, 60, -60, -140, 0],
          scale: [1, 0.94, 1.1, 0.98, 1.06, 1.12, 0.96, 1.04, 1],
          borderRadius: [
            "40% 60% 50% 50% / 60% 40% 60% 40%",
            "70% 30% 40% 60% / 40% 60% 30% 70%",
            "30% 70% 60% 40% / 50% 50% 70% 30%",
            "60% 40% 30% 70% / 30% 70% 50% 50%",
            "50% 50% 70% 30% / 70% 30% 40% 60%",
            "40% 60% 50% 50% / 60% 40% 60% 40%",
          ],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[25%] h-[55vw] w-[55vw] max-h-[680px] max-w-[680px]"
        style={{
          background: `radial-gradient(circle at center, rgba(13,231,122,${0.2 * mult}), rgba(13,231,122,0) 60%)`,
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 90, 180, 80, -60, -200, -100, 40, 0],
          y: [0, -120, -60, -160, -80, 20, 100, 60, 0],
          scale: [1, 1.06, 0.92, 1.1, 1, 1.08, 0.96, 1.02, 1],
          borderRadius: [
            "50% 50% 30% 70% / 40% 60% 50% 50%",
            "30% 70% 60% 40% / 70% 30% 40% 60%",
            "60% 40% 50% 50% / 30% 70% 60% 40%",
            "40% 60% 70% 30% / 60% 40% 30% 70%",
            "70% 30% 40% 60% / 50% 50% 70% 30%",
            "50% 50% 30% 70% / 40% 60% 50% 50%",
          ],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: `rgba(255,255,255,${veil})` }}
      />
    </div>
  )
}

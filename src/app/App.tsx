import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Shell } from "./components/Shell";
import { Welcome } from "./components/Welcome";
import { DirectSearch } from "./components/DirectSearch";
import { Guided } from "./components/Guided";
import { Result } from "./components/Result";

type Screen = "welcome" | "direct" | "guided" | "result";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const home = () => setScreen("welcome");

  return (
    <Shell
      onHome={home}
      mark={screen === "result"}
      ambient={
        screen === "welcome"
          ? "strong"
          : screen === "result"
          ? "none"
          : "soft"
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          {screen === "welcome" && (
            <Welcome onPick={(m) => setScreen(m === "direct" ? "direct" : "guided")} />
          )}
          {screen === "direct" && (
            <DirectSearch onBack={home} onResult={() => setScreen("result")} />
          )}
          {screen === "guided" && (
            <Guided onBack={home} onResult={() => setScreen("result")} />
          )}
          {screen === "result" && <Result onHome={home} onRestart={home} />}
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}

import { ReactNode } from "react";
import BrixLogo from "../../imports/Group1/Group1";
import BrixMark from "../../imports/Group2/Group2";
import { Ambient } from "./Ambient";

export function Shell({
  children,
  onHome,
  mark,
  ambient = "soft",
}: {
  children: ReactNode;
  onHome: () => void;
  mark?: boolean;
  ambient?: "strong" | "soft" | "none";
}) {
  return (
    <div className="relative isolate flex h-full min-h-screen w-full flex-col overflow-hidden bg-white text-brand-ink">
      <Ambient intensity={ambient} />

      <header className="relative z-30 flex items-center justify-between px-10 py-6">
        <button
          onClick={onHome}
          aria-label="BRIX — Inicio"
          className="group inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
        >
          {mark ? (
            <div className="h-8 w-8 transition-transform duration-300 group-hover:scale-105">
              <BrixMark />
            </div>
          ) : (
            <div className="h-7 w-[96px] transition-opacity duration-300 group-hover:opacity-80">
              <BrixLogo />
            </div>
          )}
        </button>

      </header>

      <main className="relative z-10 flex-1">{children}</main>
    </div>
  );
}

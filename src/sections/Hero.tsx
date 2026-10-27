import { motion } from "framer-motion";
import { Shell } from "@/components/Layout";
import { site } from "@/config/site";
import { Search } from "lucide-react";

export function Hero({ onOpenPalette }: { onOpenPalette?: () => void }) {
  return (
    <Shell className="px-6 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-start gap-8"
      >
        <div className="min-w-0 flex-1">
          <h1 className="hero-title font-serif text-5xl leading-[1.05] tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl">
            Hi, <span className="hero-title-name italic">{site.firstName || "Pranjal"}</span> Here
          </h1>
          <p className="mt-3 font-mono text-sm tracking-[0.12em] text-[var(--muted)]">{site.location}</p>
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              title="Open Command Palette (Ctrl+K)"
            >
              <Search size={14} /> <span>Explore the site</span>
              <span className="ml-1 text-[var(--soft)]">Ctrl K</span>
            </button>
          )}
        </div>
      </motion.div>
    </Shell>
  );
}
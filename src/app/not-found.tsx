import { TransitionLink } from "@/components/layout/PageTransition";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 // Signal Lost | DEMONZDEV",
  description: "The requested system coordinate does not exist or has been relocated within the DEMONZDEV runtime.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-12 bg-black overflow-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle Center Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(112, 0, 255, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl w-full relative z-10 flex flex-col items-start text-left mt-16 md:mt-20">
        {/* Technical Eyebrow Status */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-brand-purple-light uppercase border border-brand-purple/40 px-3.5 py-1 rounded-full bg-surface/80 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light animate-pulse" />
            SYS.ERR // 0x404_ROUTE_UNRESOLVED
          </span>
        </div>

        {/* Primary Monospaced Glitch Header */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-3 notranslate" translate="no">
          404 // SIGNAL LOST
        </h1>

        {/* Technical Sub-heading */}
        <div className="font-mono text-sm md:text-base text-zinc-400 tracking-wider uppercase mb-5">
          COORDINATE NOT FOUND IN SYSTEM RUNTIME
        </div>

        {/* Editorial Body Description */}
        <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl mb-8">
          The requested path does not exist, has been relocated, or is unavailable in the current production export. The rest of the platform remains online.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <TransitionLink
            href="/"
            className="px-8 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purple-light text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-purple/25 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Return to Headquarters</span>
          </TransitionLink>
          <TransitionLink
            href="/work"
            className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Selected Work</span>
            <ArrowUpRight size={16} />
          </TransitionLink>
        </div>

        {/* Technical Diagnostics Cluster */}
        <div className="mt-12 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <div>LATENCY: 0.12MS // MEMORY: NOMINAL</div>
          <div>DEMONZDEV v2.0 // DEPLOYED RUNTIME</div>
        </div>
      </div>
    </div>
  );
}


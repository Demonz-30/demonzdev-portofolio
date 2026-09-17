import { About } from "@/components/sections/About";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Approach } from "@/components/sections/Approach";
import { TransitionLink } from "@/components/layout/PageTransition";

export const metadata = {
  title: "ABOUT | DEMONZ",
  description: "I create. I build. I experiment. Discover the creative technologist behind DEMONZ.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden min-h-screen">
      <About />
      <Philosophy />
      <WhatIDo />
      <Approach />

      {/* Closing CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
              04 // NEXT STEP &amp; COLLABORATION
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-sm md:text-base text-zinc-400 font-light mt-2 max-w-lg">
              Let&apos;s build digital products, mobile applications, or interactive systems together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TransitionLink
              href="/contact"
              className="px-8 py-4 rounded-full bg-brand-purple hover:bg-brand-purple-light text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-purple/25 flex items-center gap-2"
            >
              <span>Start Collaboration</span>
              <span>→</span>
            </TransitionLink>
            <TransitionLink
              href="/work"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300"
            >
              Explore Works
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}

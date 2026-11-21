"use client";

import { institutionalCollaborations } from "@/data/testimonials";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function WhatTheySay() {
  const sectionRef = useScrollReveal<HTMLElement>({
    selector: "[data-reveal]",
    stagger: 0.12,
  });

  return (
    <section
      ref={sectionRef}
      id="collaborations"
      className="py-24 md:py-36 px-6 md:px-12 bg-black relative z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span
            data-reveal
            className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-3 block"
          >
            02 // INSTITUTIONAL CONTEXT &amp; COLLABORATION
          </span>
          <h2
            data-reveal
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase"
          >
            COLLABORATIONS &amp; IMPACT
          </h2>
          <p
            data-reveal
            className="text-sm md:text-base text-zinc-400 font-light mt-3 max-w-xl"
          >
            Real-world environments, community programs, and competitive challenges where technical problem-solving and creative execution deliver verified results.
          </p>
        </div>

        {/* Verifiable Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {institutionalCollaborations.map((item, index) => (
            <div
              key={item.id}
              data-reveal
              className="bg-surface/30 border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between hover:border-brand-purple/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono text-brand-purple-light uppercase tracking-widest border border-brand-purple/20 px-2 py-0.5 rounded-full">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.attribution}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2">
                  {item.organization}
                </h3>
                <p className="text-xs font-mono text-brand-purple-light mb-4">
                  {item.role}
                </p>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {item.context}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                    Verified Deliverables:
                  </span>
                  {item.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-light">
                      <span className="text-brand-purple-light mt-0.5">›</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Ground-Truth Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

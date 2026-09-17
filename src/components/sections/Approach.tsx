"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const approachPhases = [
  {
    step: "01",
    title: "LEARN",
    role: "System Architecture & Foundations",
    description:
      "Absorb domain fundamentals, dissect existing implementations, and understand user intent before writing a single line of code.",
    deliverables: ["Technical Research", "Mental Models", "System Mapping"],
  },
  {
    step: "02",
    title: "EXPERIMENT",
    role: "Creative & Technical Spikes",
    description:
      "Build rapid prototypes, test visual choreography, and stress-test technical feasibility to uncover the most elegant solution.",
    deliverables: ["Interactive Spikes", "Shader Tests", "Layout Prototyping"],
  },
  {
    step: "03",
    title: "BUILD",
    role: "Production-Grade Engineering",
    description:
      "Execute with strict type safety, performant motion, clean component architecture, and responsive precision for production scale.",
    deliverables: ["Full-Stack App", "Clean Codebase", "Mobile Resilience"],
  },
  {
    step: "04",
    title: "REFINE",
    role: "Optimization & Micro-Polish",
    description:
      "Measure real-world performance, eliminate interaction friction, tune frame budgets, and continuously improve the final output.",
    deliverables: ["60fps Audits", "Accessibility", "Micro-Interactions"],
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0 && sectionRef.current) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card) => {
        if (card) gsap.set(card, { opacity: 1, y: 0 });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="py-24 md:py-36 px-6 md:px-12 bg-surface/10 relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-[92rem] mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
              03 // METHODOLOGY &amp; PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
              {content.approach.heading}
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-zinc-400 max-w-md uppercase tracking-wider">
            {content.approach.tagline}
          </p>
        </div>

        {/* 4-Column Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachPhases.map((phase, index) => (
            <div
              key={phase.step}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative p-6 md:p-8 bg-zinc-950/60 border border-white/10 rounded-sm hover:border-brand-purple/40 transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-purple/10 text-brand-purple-light border border-brand-purple/20">
                    PHASE {phase.step}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">[{index + 1}/4]</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase mb-2 group-hover:text-brand-purple-light transition-colors">
                  {phase.title}
                </h3>
                <p className="text-xs font-mono text-brand-purple-light/90 uppercase tracking-wider mb-4">
                  {phase.role}
                </p>

                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables / Tags */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                  Key Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {phase.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-purple group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { content } from "@/data/content";
import { TransitionLink } from "@/components/layout/PageTransition";
import { useScrollReveal } from "@/lib/useScrollReveal";

import { assetPath } from "@/lib/paths";
export function AboutSummary() {
  const sectionRef = useScrollReveal<HTMLElement>({ selector: "[data-home-reveal]", stagger: 0.1 });

  return (
    <section ref={sectionRef} id="about" className="py-32 md:py-44 px-6 md:px-12 bg-surface/30 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div data-home-reveal className="mb-20 md:mb-28 border-b border-white/10 pb-8">
          <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
            {"04 // ABOUT & PHILOSOPHY"}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase">
            THE BUILDER MINDSET
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <div data-home-reveal className="lg:col-span-5 relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface">
              <Image 
                src={assetPath("/assets/media/portrait-main.webp")}
                alt="Demonz Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Subtle decorative corner registration mark */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-purple-light/60 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-purple-light/60 pointer-events-none" />
          </div>

          {/* Statement & Philosophy Column */}
          <div data-home-reveal className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 uppercase">
              {content.about.heading}
            </h3>

            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-6">
              {content.about.paragraphs[0]}
            </p>
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-10">
              {content.about.paragraphs[1]} {content.about.paragraphs[2]}
            </p>

            {/* 3 Core Philosophy Lines */}
            <div className="space-y-4 mb-10 border-l-2 border-brand-purple/40 pl-6">
              {content.philosophy.map((line, i) => (
                <p key={i} className="text-sm md:text-base font-mono text-zinc-300">
                  <span className="text-brand-purple-light mr-3">0{i + 1}.</span>
                  {line}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div>
              <TransitionLink
                href="/about"
                className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white hover:text-brand-purple-light transition-colors duration-300"
              >
                <span>Read Full Background &amp; Approach</span>
                <span className="text-brand-purple-light">→</span>
              </TransitionLink>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/data/content";

import { assetPath } from "@/lib/paths";
gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageMaskRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);
  const cornersRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 1. Decorative frame corners subtly appear
      const corners = cornersRef.current.filter(Boolean);
      if (corners.length > 0) {
        tl.fromTo(
          corners,
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }
        );
      }

      // 2. Image mask reveals upward while image scales and settles (0.97 -> 1.0 or 1.04 -> 1.0 settling)
      if (imageMaskRef.current) {
        tl.fromTo(
          imageMaskRef.current,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      if (imgElementRef.current) {
        tl.fromTo(
          imgElementRef.current,
          { scale: 1.04, y: 18, opacity: 0.3 },
          {
            scale: 1.0,
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "<"
        );
      }

      // 3. Editorial text sequence reveals with restrained stagger
      const texts = textRef.current?.querySelectorAll(".about-text");
      if (texts && texts.length > 0) {
        tl.fromTo(
          texts,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const corners = cornersRef.current.filter(Boolean);
      corners.forEach((el) => el && gsap.set(el, { opacity: 1, scale: 1 }));

      if (imageMaskRef.current) {
        gsap.set(imageMaskRef.current, { clipPath: "none" });
      }
      if (imgElementRef.current) {
        gsap.set(imgElementRef.current, { scale: 1, y: 0, opacity: 1 });
      }

      const texts = textRef.current?.querySelectorAll(".about-text");
      if (texts) {
        texts.forEach((el) => gsap.set(el, { opacity: 1, y: 0, filter: "none" }));
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-40 px-6 md:px-12 bg-background relative z-10 overflow-hidden"
    >
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Large Editorial Portrait Anchor */}
        <div
          className="lg:col-span-6 w-full flex justify-center lg:justify-start"
          data-cursor="image"
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/5] lg:min-h-[700px]">
            {/* Outer precision frame */}
            <div className="w-full h-full p-2.5 sm:p-3 border border-white/10 bg-zinc-950/40 rounded-sm relative">
              <div
                ref={imageMaskRef}
                className="w-full h-full relative overflow-hidden bg-zinc-900 rounded-[2px]"
              >
                <Image
                  ref={imgElementRef}
                  src={assetPath("/assets/media/portrait-main.webp")}
                  alt="Demonz Portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_15%] origin-center"
                />
              </div>

              {/* Decorative Corner Accents */}
              <div
                ref={(el) => { cornersRef.current[0] = el; }}
                className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-brand-purple-light"
              />
              <div
                ref={(el) => { cornersRef.current[1] = el; }}
                className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-brand-purple-light"
              />
              <div
                ref={(el) => { cornersRef.current[2] = el; }}
                className="absolute -top-2.5 -right-2.5 w-3 h-3 border-t border-r border-white/30"
              />
              <div
                ref={(el) => { cornersRef.current[3] = el; }}
                className="absolute -bottom-2.5 -left-2.5 w-3 h-3 border-b border-l border-white/30"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div ref={textRef} className="lg:col-span-6 flex flex-col justify-start pt-2 lg:pt-0">
          <span className="about-text text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
            01 // ABOUT &amp; PHILOSOPHY
          </span>

          <h1 className="about-text text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-balance mb-6 uppercase leading-[0.95] text-white">
            THE BUILDER MINDSET
          </h1>

          <p className="about-text text-lg md:text-xl font-mono text-brand-purple-light mb-8">
            {content.about.heading}
          </p>

          <div className="flex flex-col gap-5 text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6 mb-8">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="about-text text-balance">
                {p}
              </p>
            ))}
          </div>

          {/* Core Philosophy Principles */}
          <div className="about-text space-y-3.5 my-4 border-l-2 border-brand-purple/40 pl-6">
            {content.philosophy.map((line, i) => (
              <p key={i} className="text-xs md:text-sm font-mono text-zinc-300">
                <span className="text-brand-purple-light mr-3">0{i + 1}.</span>
                {line}
              </p>
            ))}
          </div>

          {/* Metric Badges */}
          <div className="about-text mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-black text-white font-mono">04</span>
              <span className="text-xs tracking-widest uppercase text-brand-purple-light mt-1 font-mono">
                Core Disciplines
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-black text-white font-mono">06</span>
              <span className="text-xs tracking-widest uppercase text-brand-purple-light mt-1 font-mono">
                Total Domains
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-black text-white font-mono">100%</span>
              <span className="text-xs tracking-widest uppercase text-brand-purple-light mt-1 font-mono">
                Hands-on Builder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

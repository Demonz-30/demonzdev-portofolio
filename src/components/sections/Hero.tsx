"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/layout/PageTransition";
import { content } from "@/data/content";
import { DemonzLogo } from "@/components/canvas/DemonzLogo";
import { HomepageVideoBackground } from "@/components/sections/HomepageVideoBackground";

gsap.registerPlugin(ScrollTrigger);

const ROTATING_ROLES = [
  "PRODUCT ENGINEER",
  "AI BUILDER",
  "CREATIVE DEVELOPER",
  "WEB ENGINEER",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const roleTextRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const scrollProgress = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // UI Elements entry — synchronized to reveal as Preloader exits (~1.1s)
      // UI Elements entry — synchronized to reveal cleanly as Preloader exits (~1.4s)
      gsap.fromTo(".hero-ui-element", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.1,
        delay: 1.4,
        ease: "power3.out"
      });

      // Caret subtle blinking animation
      let caretTween: gsap.core.Tween | null = null;
      if (caretRef.current) {
        caretTween = gsap.to(caretRef.current, {
          opacity: 0,
          duration: 0.53,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }

      // Typewriter continuous loop
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typewriterCall: gsap.core.Tween | null = null;

      // Start with empty text so first role types out upon entrance
      if (roleTextRef.current) {
        roleTextRef.current.textContent = "";
      }

      const typeStep = () => {
        if (!roleTextRef.current) return;
        const currentRole = ROTATING_ROLES[roleIndex];

        if (!isDeleting) {
          // Typing character-by-character (70ms-90ms range)
          charIndex++;
          roleTextRef.current.textContent = currentRole.slice(0, charIndex);

          if (charIndex >= currentRole.length) {
            // Hold full role for ~3 seconds (deliberate, readable)
            isDeleting = true;
            typewriterCall = gsap.delayedCall(3.0, typeStep);
          } else {
            // Typing interval: 80ms
            typewriterCall = gsap.delayedCall(0.08, typeStep);
          }
        } else {
          // Deleting character-by-character (40ms-60ms range)
          charIndex--;
          roleTextRef.current.textContent = currentRole.slice(0, charIndex);

          if (charIndex <= 0) {
            // Pause before typing next role: 400ms (300ms - 500ms range)
            isDeleting = false;
            roleIndex = (roleIndex + 1) % ROTATING_ROLES.length;
            typewriterCall = gsap.delayedCall(0.4, typeStep);
          } else {
            // Deleting interval: 50ms
            typewriterCall = gsap.delayedCall(0.05, typeStep);
          }
        }
      };

      // Start typewriter loop synchronized with hero entrance
      typewriterCall = gsap.delayedCall(1.4, typeStep);

      // Scroll Choreography — keep the Hero transition self-contained before Selected Work begins.
      // Scroll Choreography — track scroll progress for 3D DemonzLogo reactivity and lifecycle
      if (containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.1,
          onUpdate: (self) => {
            scrollProgress.current = self.progress;
            // Fade out UI content as we push through
            if (contentRef.current) {
              contentRef.current.style.opacity = Math.max(0, 1 - self.progress).toString();
              contentRef.current.style.transform = `translateY(${self.progress * -48}px)`;
            }
            // Disable canvas when scrolled out of view
            const isVisible = self.progress < 0.99;
            setInView((prev) => (prev !== isVisible ? isVisible : prev));
          }
        });
      }

      return () => {
        if (typewriterCall) typewriterCall.kill();
        if (caretTween) caretTween.kill();
        if (roleTextRef.current) gsap.killTweensOf(roleTextRef.current);
        if (caretRef.current) gsap.killTweensOf(caretRef.current);
      };
    });
    
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hero-ui-element", { opacity: 1, y: 0 });
      if (roleTextRef.current) {
        roleTextRef.current.textContent = ROTATING_ROLES[0];
      }
      if (caretRef.current) {
        caretRef.current.style.display = "none";
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-start px-6 md:px-12 overflow-hidden bg-black">
      <HomepageVideoBackground />

      {/* WebGL Canvas Background / Artifact (Desktop) */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-auto">
          <DemonzLogo scrollProgress={scrollProgress} active={inView} />
        </div>
      )}

      {/* Static Fallback (Mobile) */}
      {isMobile && (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 mix-blend-screen pointer-events-none overflow-hidden">
           <div className="relative w-[300px] h-[300px] blur-sm hero-mobile-logo">
              <Image src="/assets/brand/demonz-logo.jpg" alt="DEMONZ Logo" fill sizes="300px" className="object-contain animate-pulse" priority />
           </div>
        </div>
      )}

      {/* Typography Overlay */}
      <div ref={contentRef} className="max-w-7xl w-full relative z-10 pointer-events-none mt-[14vh] md:mt-[16vh] flex flex-col items-start text-left">
        <div className="w-full text-left overflow-hidden mb-3">
          <span className="hero-ui-element inline-block text-xs font-mono tracking-widest text-brand-purple-light uppercase border border-brand-purple/40 px-3.5 py-1 rounded-full bg-surface/80 backdrop-blur-md">
            Creative Technologist
          </span>
        </div>
        <div className="w-full text-left overflow-hidden">
          <h1 className="hero-ui-element text-[14vw] md:text-[9.5vw] font-black leading-none tracking-tighter text-white uppercase mb-2 text-left">
            DEMONZDEV
          </h1>
        </div>
        <div className="w-full text-left overflow-hidden h-7 md:h-8 flex items-center justify-start">
          <h2 className="hero-ui-element text-lg md:text-2xl text-zinc-300 font-medium tracking-wide uppercase whitespace-nowrap inline-flex items-center text-left">
            <span ref={roleTextRef} className="inline-block">
              {ROTATING_ROLES[0]}
            </span>
            <span
              ref={caretRef}
              className="inline-block w-[2px] h-[1.1em] bg-brand-purple-light ml-1.5 self-center motion-reduce:hidden"
              aria-hidden="true"
            />
          </h2>
        </div>
        <div className="w-full text-left overflow-hidden max-w-xl">
          <p className="hero-ui-element text-sm md:text-base text-zinc-400 font-light leading-relaxed mt-4 mb-8 text-left">
            Building digital products, mobile platforms, and interactive systems where engineering depth meets creative execution.
          </p>
        </div>
        <div className="w-full text-left hero-ui-element flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pointer-events-auto justify-start">
          <TransitionLink
            href="/work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purple-light text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-purple/25 flex items-center justify-center gap-2"
          >
            <span>View Selected Work</span>
            <span>→</span>
          </TransitionLink>
          <TransitionLink
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center"
          >
            Contact
          </TransitionLink>
        </div>
      </div>

      {/* Kinetic Disciplines Ticker */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none z-10 opacity-25">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...content.footer.categories, ...content.footer.categories, ...content.footer.categories].map((discipline, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8 text-white/30" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
              {discipline}
            </span>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker,
          .hero-mobile-logo {
            animation: none;
          }
        }
      `}} />
    </section>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLenis } from "lenis/react";

import { assetPath } from "@/lib/paths";
declare global {
  interface Window {
    __demonz_boot_revealed?: boolean;
    __demonz_boot_complete?: boolean;
  }
}

const PHASES = [
  { text: "INITIALIZING SYSTEM CORE...", sub: "KERNEL.V2 // MOUNTING RUNTIME", pct: 15 },
  { text: "LOADING EXPERIENCE RUNTIME...", sub: "BUFFER // ALLOCATING ASSETS", pct: 40 },
  { text: "COMPILING GRAPHICS & MOTION...", sub: "WEBGL // SHADERS COMPILED", pct: 68 },
  { text: "SYNCHRONIZING ASSETS & WORK...", sub: "PORTFOLIO // STATIC EXPORT SYNC", pct: 88 },
  { text: "BUILDING EDITORIAL INTERFACE...", sub: "COMPOSITION // FINALIZING VIEW", pct: 98 },
  { text: "SYSTEM READY.", sub: "DEMONZDEV // LAUNCHING EXPERIENCE", pct: 100 },
];

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<SVGSVGElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const phaseTextRef = useRef<HTMLDivElement>(null);
  const phaseSubRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const skipBtnRef = useRef<HTMLButtonElement>(null);
  const quadRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [complete, setComplete] = useState(false);
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);
  const isFastForwardingRef = useRef(false);
  const lenis = useLenis();

  // Fast-forward / smooth skip capability
  const handleFastForward = useCallback(() => {
    if (isFastForwardingRef.current || !masterTlRef.current) return;
    isFastForwardingRef.current = true;

    // Immediately trigger background WebGL / video warmup
    window.dispatchEvent(new CustomEvent("demonz:boot-warmup"));

    // Smoothly speed up timeline so user experiences an accelerated transition without sudden jumps
    gsap.to(masterTlRef.current, {
      timeScale: 4.5,
      ease: "power2.in",
      duration: 0.4,
    });
  }, []);

  useEffect(() => {
    // Lock scrolling while preloader is active
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
    if (lenis) {
      lenis.stop();
    }

    // Keydown listener for space / escape to fast-forward
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Escape") {
        e.preventDefault();
        handleFastForward();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Fail-safe timeout: ensure preloader is dismissed within 15s even if an edge case occurs
    const safetyTimer = setTimeout(() => {
      window.__demonz_boot_revealed = true;
      window.__demonz_boot_complete = true;
      window.dispatchEvent(new CustomEvent("demonz:boot-warmup"));
      window.dispatchEvent(new CustomEvent("demonz:boot-reveal"));
      window.dispatchEvent(new CustomEvent("demonz:boot-complete"));
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
      if (lenis) {
        lenis.start();
      }
      setComplete(true);
      if (containerRef.current) {
        containerRef.current.style.display = "none";
      }
    }, 15500);

    const mm = gsap.matchMedia();

    // 1. REDUCED MOTION PREFERENCE
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const redTl = gsap.timeline({
        onComplete: () => {
          window.__demonz_boot_revealed = true;
          window.__demonz_boot_complete = true;
          window.dispatchEvent(new CustomEvent("demonz:boot-warmup"));
          window.dispatchEvent(new CustomEvent("demonz:boot-reveal"));
          window.dispatchEvent(new CustomEvent("demonz:boot-complete"));
          if (typeof document !== "undefined") {
            document.body.style.overflow = "";
          }
          if (lenis) {
            lenis.start();
          }
          setComplete(true);
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        },
      });

      redTl.fromTo(
        containerRef.current,
        { opacity: 1 },
        { opacity: 1, duration: 0.5 }
      )
      .call(() => {
        window.__demonz_boot_revealed = true;
        window.dispatchEvent(new CustomEvent("demonz:boot-warmup"));
        window.dispatchEvent(new CustomEvent("demonz:boot-reveal"));
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
      });
    });

    // 2. FULL CINEMATIC BOOT SEQUENCE (10–14s total duration)
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        onComplete: () => {
          window.__demonz_boot_complete = true;
          window.dispatchEvent(new CustomEvent("demonz:boot-complete"));
          if (typeof document !== "undefined") {
            document.body.style.overflow = "";
          }
          if (lenis) {
            lenis.start();
          }
          setComplete(true);
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        },
      });
      masterTlRef.current = tl;

      // Progress tracker object for numerical counter
      const progressObj = { value: 0 };
      const updateCounter = (targetVal: number, duration: number, ease = "power1.inOut") => {
        tl.to(progressObj, {
          value: targetVal,
          duration,
          ease,
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = `${Math.floor(progressObj.value)
                .toString()
                .padStart(2, "0")}%`;
            }
          },
        }, "<");
      };

      // -------------------------------------------------------------
      // PHASE 1: 0.0s – 2.2s (Pure Black, Ambient Awakening)
      // -------------------------------------------------------------
      if (contentRef.current) tl.set(contentRef.current, { opacity: 1 });
      const initialCoreElements = [
        tagRef.current,
        logoWrapperRef.current,
        wordmarkRef.current,
      ].filter(Boolean);
      if (initialCoreElements.length) {
        tl.set(initialCoreElements, { opacity: 0 });
      }
      const initialHiddenSelectors = containerRef.current?.querySelectorAll(".preloader-status-container, .preloader-telemetry-cluster");
      if (initialHiddenSelectors && initialHiddenSelectors.length) {
        tl.set(initialHiddenSelectors, { opacity: 0 });
      }

      // Faint telemetry fades in softly
      const metaElements = containerRef.current?.querySelectorAll(".preloader-meta");
      if (metaElements && metaElements.length) {
        tl.to(metaElements, {
          opacity: 0.5,
          duration: 1.2,
          ease: "power2.out",
        }, 0.2);
      }

      // Micro tag "DEMONZ — INITIALIZING" appears with subtle tracking stretch
      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { opacity: 0, letterSpacing: "0.2em", y: 10 },
          { opacity: 1, letterSpacing: "0.35em", y: 0, duration: 1.2, ease: "power2.out" },
          0.4
        );
      }

      // Logo mark emerges subtly from darkness
      if (logoWrapperRef.current) {
        tl.fromTo(
          logoWrapperRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.0, duration: 1.4, ease: "power2.out" },
          0.8
        );
      }

      // Status container fades in
      const statusContainerEl = containerRef.current?.querySelector(".preloader-status-container");
      if (statusContainerEl) {
        tl.fromTo(
          statusContainerEl,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.2
        );
      }

      // Telemetry cluster fades in
      const telemetryClusterEl = containerRef.current?.querySelector(".preloader-telemetry-cluster");
      if (telemetryClusterEl) {
        tl.fromTo(
          telemetryClusterEl,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          1.4
        );
      }

      // Counter moves 0 -> 15% and quadrant 1 highlights
      updateCounter(15, 2.0);
      tl.to(quadRefs.current[0], {
        borderColor: "rgba(112, 0, 255, 0.8)",
        backgroundColor: "rgba(112, 0, 255, 0.15)",
        color: "#ffffff",
        duration: 0.4,
      }, 1.6);

      // -------------------------------------------------------------
      // PHASE 2: 2.2s – 5.2s (Controlled Mark Awakening & System Initialization)
      // -------------------------------------------------------------
      tl.call(() => {
        if (phaseTextRef.current) phaseTextRef.current.textContent = PHASES[1].text;
        if (phaseSubRef.current) phaseSubRef.current.textContent = PHASES[1].sub;
      }, undefined, 2.3);

      // Wordmark DEMONZDEV emerges with crisp typographical focus
      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        2.4
      );

      // Technical reticle ring begins subtle rotational animation
      if (reticleRef.current) {
        tl.to(reticleRef.current, {
          rotation: 90,
          duration: 3.0,
          ease: "power1.inOut",
        }, 2.4);
      }

      // Counter moves 15% -> 45%
      updateCounter(45, 2.8);

      // Quadrant 2 highlights
      tl.to(quadRefs.current[1], {
        borderColor: "rgba(112, 0, 255, 0.8)",
        backgroundColor: "rgba(112, 0, 255, 0.15)",
        color: "#ffffff",
        duration: 0.4,
      }, 3.8);

      // Fade in subtle skip button
      tl.to(skipBtnRef.current, {
        opacity: 0.65,
        duration: 0.8,
        ease: "power2.out",
      }, 3.0);

      // -------------------------------------------------------------
      // PHASE 3: 5.2s – 8.2s (Visual Momentum, Scan & Shader Compilation)
      // -------------------------------------------------------------
      tl.call(() => {
        if (phaseTextRef.current) phaseTextRef.current.textContent = PHASES[2].text;
        if (phaseSubRef.current) phaseSubRef.current.textContent = PHASES[2].sub;
      }, undefined, 5.2);

      // Controlled scan line sweeps across the logo mark
      if (scanLineRef.current) {
        tl.fromTo(
          scanLineRef.current,
          { top: "-10%", opacity: 0 },
          { top: "110%", opacity: 0.8, duration: 1.6, ease: "power2.inOut" },
          5.4
        );
      }

      // Logo corona pulse and gentle scale breathing
      // Logo gentle scale breathing without heavy boxShadow animation
      tl.to(logoWrapperRef.current, {
        boxShadow: "0 0 60px rgba(112, 0, 255, 0.45)",
        scale: 1.04,
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      }, 5.5);

      // Reticle continues rotation to 240 deg
      if (reticleRef.current) {
        tl.to(reticleRef.current, {
          rotation: 240,
          duration: 3.0,
          ease: "power2.inOut",
        }, 5.4);
      }

      // Counter moves 45% -> 72%
      updateCounter(72, 2.8);

      // Quadrant 3 highlights
      tl.to(quadRefs.current[2], {
        borderColor: "rgba(112, 0, 255, 0.8)",
        backgroundColor: "rgba(112, 0, 255, 0.15)",
        color: "#ffffff",
        duration: 0.4,
      }, 6.8);

      // -------------------------------------------------------------
      // PHASE 4: 8.2s – 11.0s (Interface Assembly & Verification)
      // -------------------------------------------------------------
      tl.call(() => {
        if (phaseTextRef.current) phaseTextRef.current.textContent = PHASES[3].text;
        if (phaseSubRef.current) phaseSubRef.current.textContent = PHASES[3].sub;
      }, undefined, 8.2);

      // Intermediate sub-step at 9.5s
      tl.call(() => {
        if (phaseTextRef.current) phaseTextRef.current.textContent = PHASES[4].text;
        if (phaseSubRef.current) phaseSubRef.current.textContent = PHASES[4].sub;
      }, undefined, 9.5);

      // Counter climbs 72% -> 100%
      updateCounter(100, 2.6, "power2.out");

      // Reticle locks to 360 deg
      if (reticleRef.current) {
        tl.to(reticleRef.current, {
          rotation: 360,
          duration: 2.6,
          ease: "power2.out",
        }, 8.2);
      }

      // Quadrant 4 highlights
      tl.to(quadRefs.current[3], {
        borderColor: "rgba(112, 0, 255, 0.9)",
        backgroundColor: "rgba(112, 0, 255, 0.25)",
        color: "#ffffff",
        duration: 0.4,
      }, 10.4);

      // -------------------------------------------------------------
      // PHASE 5: 11.0s – 12.4s (Visuals Settle & System Ready)
      // -------------------------------------------------------------
      tl.call(() => {
        window.dispatchEvent(new CustomEvent("demonz:boot-warmup"));
        if (phaseTextRef.current) {
          phaseTextRef.current.textContent = PHASES[5].text;
          phaseTextRef.current.classList.add("text-brand-purple-light");
        }
        if (phaseSubRef.current) phaseSubRef.current.textContent = PHASES[5].sub;
      }, undefined, 11.0);

      // Subtle locked status pulse on wordmark
      tl.to(wordmarkRef.current, {
        scale: 1.02,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      }, 11.0);

      // Brief cinematic hold to absorb ready state
      tl.to({}, { duration: 1.0 });

      // -------------------------------------------------------------
      // PHASE 6: 12.0s – 13.3s (Seamless Dissolution INTO Hero)
      // -------------------------------------------------------------
      // 1. Peripheral telemetry, meta bars, and counter dissolve out first
      const dissolveTargets = [
        ...(metaElements ? Array.from(metaElements) : []),
        telemetryClusterEl,
        statusContainerEl,
        tagRef.current,
        skipBtnRef.current,
      ].filter(Boolean);

      if (dissolveTargets.length) {
        tl.to(
          dissolveTargets,
          {
            opacity: 0,
            y: 4,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.02,
          },
          12.0
        );
      }

      // 2. Dispatch boot-reveal at 12.35s so Hero begins its entrance concurrently
      // while preloader backdrop dissolves into the Hero canvas and video
      tl.call(() => {
        window.__demonz_boot_revealed = true;
        window.dispatchEvent(new CustomEvent("demonz:boot-reveal"));
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = "none";
        }
      }, undefined, 12.35);

      // 3. Central emblem & reticle subtly scale down and dissolve into the Hero's WebGL logo center
      const emblemTargets = [logoWrapperRef.current, reticleRef.current].filter(Boolean);
      if (emblemTargets.length) {
        tl.to(
          emblemTargets,
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.85,
            ease: "power2.inOut",
          },
          12.35
        );
      }

      // 4. Preloader wordmark fades out smoothly as Hero headline emerges
      if (wordmarkRef.current) {
        tl.to(
          wordmarkRef.current,
          {
            opacity: 0,
            y: -6,
            filter: "blur(4px)",
            duration: 0.6,
            ease: "power2.out",
          },
          12.35
        );
      }

      // 5. Preloader dark background overlay dissolves completely into the Hero
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.95,
            ease: "power2.inOut",
          },
          12.35
        );
      }
    });

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
      mm.revert();
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [lenis, handleFastForward]);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-5 sm:p-6 md:p-12 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] overflow-hidden select-none demonz-preloader touch-manipulation"
      onClick={handleFastForward}
      title="Tap anywhere or press Space to accelerate"
    >
      {/* Background Dissolve Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-full bg-black"
      >
        {/* Subtle Editorial Background Grid Watermark */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft Ambient Center Purple Halo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[600px] h-[320px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(112, 0, 255, 0.16) 0%, rgba(112, 0, 255, 0.05) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Corner Technical Crosshairs (Desktop only to prevent mobile clutter) */}
      <div className="hidden md:block absolute top-4 left-4 font-mono text-[9px] text-white/30 pointer-events-none preloader-meta">
        + [001 // TL]
      </div>
      <div className="hidden md:block absolute top-4 right-4 font-mono text-[9px] text-white/30 pointer-events-none preloader-meta text-right">
        + [002 // TR]
      </div>
      <div className="hidden md:block absolute bottom-4 left-4 font-mono text-[9px] text-white/30 pointer-events-none preloader-meta">
        + [003 // BL]
      </div>
      <div className="hidden md:block absolute bottom-4 right-4 font-mono text-[9px] text-white/30 pointer-events-none preloader-meta text-right">
        + [004 // BR]
      </div>

      {/* Header Telemetry Bar */}
      <div className="relative z-10 w-full flex items-center justify-between text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 uppercase pointer-events-none preloader-meta">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
          <span className="text-[10px] sm:text-xs">SYS.BOOT // DEMONZDEV v2.0</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-zinc-400">
          <span>KERNEL // ONLINE</span>
          <span className="text-zinc-600">|</span>
          <span>LATENCY // 0.12MS</span>
        </div>
      </div>

      {/* Center Cinematic Core */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-2xl mx-auto w-full flex flex-col items-center justify-center text-center my-auto pointer-events-none"
      >
        {/* Emblem / Reticle Container */}
        <div className="relative mb-5 md:mb-8 flex items-center justify-center">
          {/* Rotating Technical Reticle Ring (SVG) */}
          <svg
            ref={reticleRef}
            viewBox="0 0 160 160"
            className="absolute w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 text-brand-purple/40 pointer-events-none"
            style={{ transformOrigin: "center center" }}
          >
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle
              cx="80"
              cy="80"
              r="76"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />
            {/* 4 Cardinal tick marks */}
            <line x1="80" y1="2" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
            <line x1="80" y1="150" x2="80" y2="158" stroke="currentColor" strokeWidth="2" />
            <line x1="2" y1="80" x2="10" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="150" y1="80" x2="158" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Logo Mark Container with Scanline */}
          <div
            ref={logoWrapperRef}
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-brand-purple/40 shadow-[0_0_30px_rgba(112,0,255,0.25)] md:shadow-[0_0_40px_rgba(112,0,255,0.25)] flex items-center justify-center bg-black"
          >
            <Image
              src={assetPath("/assets/brand/demonz-logo.jpg")}
              alt="DEMONZ"
              fill
              sizes="(max-width: 768px) 80px, 128px"
              className="object-contain p-2 sm:p-2.5 notranslate"
              translate="no"
              priority
            />
            {/* Dynamic Scan Line Sweep */}
            <div
              ref={scanLineRef}
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-purple-light to-transparent opacity-0 pointer-events-none"
            />
          </div>
        </div>

        {/* Micro Tag Initializing */}
        <div
          ref={tagRef}
          className="text-brand-purple-light font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.28em] sm:tracking-[0.35em] uppercase mb-1.5 md:mb-2"
        >
          DEMONZ — INITIALIZING
        </div>

        {/* Brand Wordmark DEMONZDEV */}
        <h1
          ref={wordmarkRef}
          className="text-[2.1rem] sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-3 md:mb-4 notranslate leading-none"
          translate="no"
        >
          DEMONZDEV
        </h1>

        {/* Dynamic Status Readout Display */}
        <div className="preloader-status-container h-6 flex items-center justify-center mb-4 md:mb-6">
          <div
            ref={phaseTextRef}
            className="text-[11px] sm:text-xs md:text-sm font-mono tracking-wider sm:tracking-widest text-zinc-300 uppercase inline-flex items-center gap-1.5 sm:gap-2 px-2"
          >
            <span>{PHASES[0].text}</span>
            <span className="w-1.5 h-3 sm:h-3.5 bg-brand-purple-light animate-pulse inline-block" />
          </div>
        </div>

        {/* Editorial Telemetry Cluster: Numeric Counter + Quadrants */}
        <div className="preloader-telemetry-cluster flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 border border-white/10 bg-[#0a0a0f]/90 px-4 py-2 sm:px-5 sm:py-3 rounded-xl max-w-[320px] sm:max-w-none w-full sm:w-auto">
          {/* Mobile Top Row / Desktop In-line: Numeric Counter + 4 Quadrants */}
          <div className="flex items-center gap-3 sm:gap-8">
            {/* Numeric Percentage */}
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-[9px] sm:text-[10px] text-zinc-500 uppercase">SYS.PRG //</span>
              <span
                ref={counterRef}
                className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider notranslate"
                translate="no"
              >
                00%
              </span>
            </div>

            <div className="w-[1px] h-4 sm:h-6 bg-white/10" />

            {/* 4 Quadrant Milestones */}
            <div className="flex items-center gap-1 sm:gap-2">
              {["01", "02", "03", "04"].map((q, idx) => (
                <div
                  key={q}
                  ref={(el) => {
                    quadRefs.current[idx] = el;
                  }}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-white/10 flex items-center justify-center font-mono text-[9px] sm:text-[10px] text-zinc-600 transition-all duration-300 notranslate"
                  translate="no"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-white/10" />

          {/* Sub Readout */}
          <div
            ref={phaseSubRef}
            className="text-[9px] sm:text-[10px] font-mono text-zinc-400 tracking-wider uppercase text-center sm:text-left"
          >
            {PHASES[0].sub}
          </div>
        </div>
      </div>

      {/* Footer Telemetry Bar & Fast-Forward Trigger */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 uppercase preloader-meta">
        <div className="pointer-events-none text-center sm:text-left text-[9px] sm:text-[10px] md:text-xs">
          ENGINEERING · AI · CREATIVE TECHNOLOGY
        </div>

        {/* Interactive Fast-Forward Hint */}
        <button
          ref={skipBtnRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleFastForward();
          }}
          className="opacity-0 hover:opacity-100 text-zinc-400 hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer flex items-center gap-2 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5 active:bg-white/15 touch-manipulation min-h-[38px]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="hidden sm:inline">[SPACE / CLICK TO SKIP]</span>
          <span className="inline sm:hidden">[TAP TO ACCELERATE]</span>
        </button>
      </div>
    </div>
  );
}

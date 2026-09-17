"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

interface ContactKeyItem {
  id: string;
  name: string;
  keyLabel: string;
  handle: string;
  href: string;
  isEmail?: boolean;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const contactKeys: ContactKeyItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    keyLabel: "IG",
    handle: "@demonzdev",
    href: content.contact.instagram,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "email",
    name: "Email",
    keyLabel: "MAIL",
    handle: content.contact.email,
    href: `mailto:${content.contact.email}`,
    isEmail: true,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    keyLabel: "WA",
    handle: "+62 896 7521 0655",
    href: content.contact.whatsapp,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    keyLabel: "GH",
    handle: "@Demonz-30",
    href: content.contact.github,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    keyLabel: "IN",
    handle: "Demonz",
    href: content.contact.linkedin,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const keysRef = useRef<(HTMLLIElement | null)[]>([]);
  const supportRef = useRef<HTMLDivElement>(null);

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

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

      // 1. Heading sequence
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" }
        );
      }

      // 2. Dock enclosure rises
      if (dockRef.current) {
        tl.fromTo(
          dockRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
      }

      // 3. Physical keys reveal with mechanical stagger
      const keys = keysRef.current.filter(Boolean);
      if (keys.length > 0) {
        tl.fromTo(
          keys,
          { opacity: 0, y: 20, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.4"
        );
      }

      // 4. Supporting text reveals last
      if (supportRef.current) {
        tl.fromTo(
          supportRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      }

      // Subtle desktop pointer parallax on the dock
      const handleMouseMove = (e: MouseEvent) => {
        if (!dockRef.current || window.innerWidth < 1024) return;
        const rect = dockRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        if (Math.abs(deltaX) <= 1.5 && Math.abs(deltaY) <= 1.5) {
          gsap.to(dockRef.current, {
            rotationY: deltaX * 3,
            rotationX: -deltaY * 3,
            duration: 0.6,
            ease: "power1.out",
            transformPerspective: 800,
          });
        }
      };

      const handleMouseLeave = () => {
        if (!dockRef.current) return;
        gsap.to(dockRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const dockEl = dockRef.current;
      if (dockEl) {
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        dockEl.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        dockEl?.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (headingRef.current) {
        Array.from(headingRef.current.children).forEach((el) => {
          gsap.set(el, { opacity: 1, y: 0 });
        });
      }
      if (dockRef.current) {
        gsap.set(dockRef.current, { opacity: 1, y: 0, scale: 1, rotationX: 0, rotationY: 0 });
      }
      keysRef.current.filter(Boolean).forEach((k) => {
        if (k) gsap.set(k, { opacity: 1, y: 0, scale: 1 });
      });
      if (supportRef.current) {
        gsap.set(supportRef.current, { opacity: 1, y: 0 });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 md:py-48 px-4 sm:px-6 md:px-12 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
    >
      {/* Restrained Atmospheric Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_80%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow & Heading */}
        <div ref={headingRef} className="flex flex-col items-center mb-14 md:mb-20">
          <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
            01 // COLLABORATION &amp; INQUIRY
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.9] max-w-4xl text-balance mb-6">
            LET&apos;S BUILD SOMETHING.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-xl text-balance">
            Select an operational channel to discuss engineering initiatives, creative collaborations, or product development.
          </p>
        </div>

        {/* Physical Interactive Contact Dock */}
        <div className="w-full max-w-3xl mx-auto mb-14 perspective-1000">
          <div
            ref={dockRef}
            className="p-2 sm:p-4 rounded-2xl md:rounded-3xl bg-zinc-950/80 border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md transition-shadow duration-300"
          >
            {/* Recessed Key Tray */}
            <ul className="grid grid-cols-5 gap-1.5 sm:gap-3 md:gap-4 p-2 sm:p-3.5 rounded-xl md:rounded-2xl bg-black/80 border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.9)] list-none m-0">
              {contactKeys.map((item, index) => {
                const IconComponent = item.icon;
                const isEmail = item.isEmail;

                return (
                  <li
                    key={item.id}
                    ref={(el) => { keysRef.current[index] = el; }}
                    className="group/key relative w-full min-w-0 max-w-[130px] mx-auto"
                    onMouseEnter={() => setActiveTooltip(item.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {/* Floating Tooltip Bubble */}
                    <div
                      role="tooltip"
                      id={`tooltip-${item.id}`}
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out z-30 whitespace-nowrap ${
                        activeTooltip === item.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      } hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/95 border border-white/15 text-[11px] font-mono text-white shadow-xl`}
                    >
                      <span className="text-brand-purple-light font-semibold">{item.name}</span>
                      <span className="text-zinc-500">/</span>
                      <span className="text-zinc-300">{item.handle}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-white/15 rotate-45" />
                    </div>

                    {/* Semantic Accessible Link */}
                    <a
                      href={item.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={`${item.name} (${item.handle})`}
                      aria-describedby={`tooltip-${item.id}`}
                      className="block w-full focus-visible:outline-none"
                      onFocus={() => setActiveTooltip(item.id)}
                      onBlur={() => setActiveTooltip(null)}
                    >
                      {/* Physical Keycap */}
                      <div className="relative h-[72px] sm:h-24 md:h-28 rounded-lg md:rounded-xl bg-gradient-to-b from-zinc-800/90 to-zinc-900/95 border border-white/10 flex flex-col items-center justify-between p-2 sm:p-3 shadow-[0_4px_0_#09090b,0_6px_10px_rgba(0,0,0,0.6)] sm:shadow-[0_5px_0_#09090b,0_8px_14px_rgba(0,0,0,0.6)] group-hover/key:-translate-y-2 md:group-hover/key:-translate-y-3 group-focus-visible/key:-translate-y-2 md:group-focus-visible/key:-translate-y-3 group-hover/key:border-brand-purple/50 group-focus-visible/key:border-brand-purple/50 group-hover/key:shadow-[0_8px_0_#09090b,0_14px_20px_rgba(112,0,255,0.22)] sm:group-hover/key:shadow-[0_10px_0_#09090b,0_18px_24px_rgba(112,0,255,0.22)] group-focus-visible/key:shadow-[0_8px_0_#09090b,0_14px_20px_rgba(112,0,255,0.22)] sm:group-focus-visible/key:shadow-[0_10px_0_#09090b,0_18px_24px_rgba(112,0,255,0.22)] group-active/key:translate-y-0.5 group-active/key:shadow-[0_2px_0_#09090b,0_4px_8px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out cursor-pointer overflow-hidden">
                        {/* Top Bevel Highlight */}
                        <div className="absolute top-0 inset-x-1.5 sm:inset-x-2 h-[1px] bg-white/20 rounded-full pointer-events-none" />

                        {/* Top Monogram Label */}
                        <span className="text-[9px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-zinc-500 group-hover/key:text-brand-purple-light group-focus-visible/key:text-brand-purple-light transition-colors">
                          {item.keyLabel}
                        </span>

                        {/* Center Platform Icon */}
                        <div className="my-auto text-zinc-400 group-hover/key:text-white group-focus-visible/key:text-white group-hover/key:drop-shadow-[0_0_8px_rgba(112,0,255,0.6)] group-focus-visible/key:drop-shadow-[0_0_8px_rgba(112,0,255,0.6)] transition-all duration-300">
                          <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </div>

                        {/* Bottom Status Dot */}
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-700 group-hover/key:bg-brand-purple-light group-focus-visible/key:bg-brand-purple-light transition-colors duration-300" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Minimal Supporting Copy */}
        <div ref={supportRef} className="flex flex-col items-center gap-3">
          <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Available for remote contracts &amp; technical advisory worldwide.
          </p>
          <span className="text-[11px] font-mono text-zinc-600">
            Based in Indonesia (GMT+7) — Direct responses within 24 hours.
          </span>
        </div>
      </div>
    </section>
  );
}

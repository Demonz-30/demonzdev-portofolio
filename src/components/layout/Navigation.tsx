"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/layout/PageTransition";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const links = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CREATIVE", href: "/creative" },
  { label: "CONTACT", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const isHiddenRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoVideoRef = useRef<HTMLVideoElement>(null);
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && logoVideoRef.current) {
      logoVideoRef.current.pause();
    }

    if (prefersReducedMotion) {
      if (logoBoxRef.current) gsap.set(logoBoxRef.current, { opacity: 1, x: 0, scale: 1 });
      if (logoTextRef.current) gsap.set(logoTextRef.current, { opacity: 1, x: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });
    if (logoBoxRef.current) {
      tl.fromTo(
        logoBoxRef.current,
        { opacity: 0, x: -8, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: "power2.out" }
      );
    }
    if (logoTextRef.current) {
      tl.fromTo(
        logoTextRef.current,
        { opacity: 0, x: -6 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);
  
  useEffect(() => {
    const navElement = navRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showNav = () => {
      if (prefersReducedMotion) {
        gsap.set(navElement, { y: "0%" });
      } else {
        gsap.to(navElement, { y: "0%", duration: 0.35, ease: "power3.out", overwrite: "auto" });
      }
    };
    const hideNav = () => {
      if (prefersReducedMotion) {
        gsap.set(navElement, { y: "-100%" });
      } else {
        gsap.to(navElement, { y: "-100%", duration: 0.35, ease: "power3.inOut", overwrite: "auto" });
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!navRef.current) return;
      
      const scrolledPastTop = currentScroll > 50;
      setIsScrolled((prev) => (prev !== scrolledPastTop ? scrolledPastTop : prev));

      if (currentScroll > 100) {
        if (currentScroll > lastScroll.current && currentScroll - lastScroll.current > 5) {
          if (!isHiddenRef.current) {
            isHiddenRef.current = true;
            hideNav();
          }
        } else if (lastScroll.current - currentScroll > 5) {
          if (isHiddenRef.current) {
            isHiddenRef.current = false;
            showNav();
          }
        }
      } else {
        if (isHiddenRef.current) {
          isHiddenRef.current = false;
          showNav();
        }
      }
      lastScroll.current = currentScroll;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(navElement);
    };
  }, []);

  useEffect(() => {
    const menuElement = menuRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (menuOpen) {
      if (prefersReducedMotion) {
        gsap.set(menuElement, { clipPath: "circle(150% at right top)" });
      } else {
        gsap.to(menuElement, { clipPath: "circle(150% at right top)", duration: 0.8, ease: "power4.inOut" });
      }
      document.body.style.overflow = "hidden";
    } else {
      if (prefersReducedMotion) {
        gsap.set(menuElement, { clipPath: "circle(0% at right top)" });
      } else {
        gsap.to(menuElement, { clipPath: "circle(0% at right top)", duration: 0.8, ease: "power4.inOut" });
      }
      document.body.style.overflow = "";
    }

    return () => gsap.killTweensOf(menuElement);
  }, [menuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 transform-gpu",
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent backdrop-blur-none border-b border-transparent"
        )}
      >
        <TransitionLink 
          href="/" 
          className="relative z-[60] flex items-center gap-3.5 group cursor-pointer focus:outline-none" 
          data-cursor="hover"
          aria-label="DEMONZDEV Home"
        >
          <div 
            ref={logoBoxRef}
            className="w-10 h-10 relative flex items-center justify-center overflow-hidden rounded-md border border-white/10 shadow-lg bg-zinc-950/40 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:border-brand-purple/50 group-hover:shadow-[0_0_16px_rgba(112,0,255,0.22)]"
          >
            <video
              ref={logoVideoRef}
              src="/assets/videos/demonz-logo.mp4?v=2"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <span 
            ref={logoTextRef}
            className="font-bold tracking-widest text-sm hidden md:block text-white transition-all duration-500 ease-out group-hover:text-brand-purple-light group-hover:tracking-[0.16em] notranslate"
            translate="no"
          >
            DEMONZDEV
          </span>
        </TransitionLink>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <TransitionLink 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-xs font-bold tracking-widest transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-brand-purple after:transition-transform after:origin-left after:duration-300",
                  active 
                    ? "text-white after:scale-x-100" 
                    : "text-white/60 hover:text-brand-purple after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </TransitionLink>
            );
          })}
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-[60] w-12 h-12 flex flex-col justify-center items-center gap-2 focus:outline-none bg-surface/50 rounded-full border border-white/5 backdrop-blur-md"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={cn("w-5 h-[1px] bg-white transition-transform origin-center duration-500", menuOpen && "rotate-45 translate-y-[9px]")} />
          <span className={cn("w-5 h-[1px] bg-white transition-opacity duration-500", menuOpen && "opacity-0")} />
          <span className={cn("w-5 h-[1px] bg-white transition-transform origin-center duration-500", menuOpen && "-rotate-45 -translate-y-[9px]")} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-8 md:hidden"
        style={{ clipPath: "circle(0% at right top)" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
        {links.map((link) => {
          const active = isLinkActive(link.href);
          return (
            <TransitionLink 
              key={link.href} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-4xl font-black uppercase tracking-tighter transition-colors duration-300",
                active ? "text-brand-purple" : "text-white hover:text-brand-purple"
              )}
            >
              {link.label}
            </TransitionLink>
          );
        })}
      </div>
    </>
  );
}

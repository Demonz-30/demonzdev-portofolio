"use client";

import React, { createContext, useContext, useRef, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { useLenis } from "lenis/react";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const hairlineRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);
  const failSafeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const clearFailSafe = () => {
    if (failSafeTimerRef.current) {
      clearTimeout(failSafeTimerRef.current);
      failSafeTimerRef.current = null;
    }
  };

  // Entrance animation when route/pathname changes
  useEffect(() => {
    clearFailSafe();
    isNavigatingRef.current = false;
    activeTimelineRef.current?.kill();

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reset scroll immediately upon new route mount
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    }

    const mainEl = document.querySelector("main");

    if (prefersReducedMotion) {
      if (mainEl) {
        gsap.set(mainEl, { opacity: 1, y: 0, clearProps: "all" });
      }
      if (veilRef.current) {
        gsap.set(veilRef.current, { opacity: 0, display: "none" });
      }
      if (hairlineRef.current) {
        gsap.set(hairlineRef.current, { scaleX: 0, opacity: 0 });
      }
      return;
    }

    const tl = gsap.timeline();
    activeTimelineRef.current = tl;

    // Complete hairline indicator sweep to 1.0 and fade out
    if (hairlineRef.current) {
      tl.to(hairlineRef.current, { scaleX: 1, duration: 0.16, ease: "power2.out" })
        .to(hairlineRef.current, { opacity: 0, duration: 0.2, ease: "power2.in" }, "-=0.06");
    }

    // Fade out editorial veil
    if (veilRef.current) {
      tl.to(
        veilRef.current,
        {
          opacity: 0,
          duration: 0.24,
          ease: "power2.out",
          onComplete: () => {
            if (veilRef.current) veilRef.current.style.display = "none";
          },
        },
        "<"
      );
    }

    // Subtle entrance reveal for the main content
    if (mainEl) {
      tl.fromTo(
        mainEl,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.38, ease: "power2.out", clearProps: "transform" },
        "<"
      );
    }

    return () => {
      activeTimelineRef.current?.kill();
    };
  }, [pathname, lenis]);

  useEffect(() => {
    return () => {
      clearFailSafe();
      activeTimelineRef.current?.kill();
    };
  }, []);

  const navigate = useCallback(
    (href: string) => {
      // Clean query and hash for route match comparison
      const targetPath = href.split("?")[0].split("#")[0];
      if (targetPath === pathname || isNavigatingRef.current) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      isNavigatingRef.current = true;

      // Stop scrolling immediately during exit
      if (lenis) {
        lenis.stop();
      }

      // Fail-safe timeout: unlock after 900ms regardless of network/loading latency
      clearFailSafe();
      failSafeTimerRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
        if (veilRef.current) veilRef.current.style.display = "none";
        const mainEl = document.querySelector("main");
        if (mainEl) gsap.set(mainEl, { opacity: 1, y: 0 });
        if (lenis) lenis.start();
      }, 900);

      activeTimelineRef.current?.kill();
      const exitTl = gsap.timeline({
        onComplete: () => {
          router.push(href);
        },
      });
      activeTimelineRef.current = exitTl;

      // Show subtle backdrop veil
      if (veilRef.current) {
        gsap.set(veilRef.current, { display: "block", opacity: 0 });
        exitTl.to(veilRef.current, { opacity: 0.3, duration: 0.22, ease: "power2.inOut" }, 0);
      }

      // Start top hairline progress
      if (hairlineRef.current) {
        gsap.set(hairlineRef.current, { scaleX: 0, opacity: 1 });
        exitTl.to(hairlineRef.current, { scaleX: 0.7, duration: 0.22, ease: "power1.inOut" }, 0);
      }

      // Smooth content exit
      const mainEl = document.querySelector("main");
      if (mainEl) {
        exitTl.to(mainEl, { opacity: 0, y: -6, duration: 0.22, ease: "power2.inOut" }, 0);
      }
    },
    [pathname, router, lenis]
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {/* Top minimal hairline progress indicator */}
      <div
        ref={hairlineRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-purple-light to-white z-[9999] pointer-events-none origin-left transform-gpu"
        style={{ transform: "scaleX(0)", opacity: 0 }}
      />
      {/* Subtle editorial backdrop veil */}
      <div
        ref={veilRef}
        className="fixed inset-0 z-[45] bg-black/40 backdrop-blur-[1px] pointer-events-none"
        style={{ opacity: 0, display: "none" }}
      />
      {children}
    </TransitionContext.Provider>
  );
}

export type TransitionLinkProps = React.ComponentProps<typeof Link>;

export const TransitionLink = React.forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, onClick, prefetch = false, ...props }, ref) => {
    const { navigate } = useContext(TransitionContext);
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;

      const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("target");
      if (isModified || (target && target !== "_self")) {
        return;
      }

      const hrefString = typeof href === "string" ? href : href.pathname || "";

      const isExternal = /^https?:\/\/|^mailto:|^tel:/.test(hrefString);
      const isHash = hrefString.startsWith("#");
      if (isExternal || isHash) {
        return;
      }

      e.preventDefault();
      const targetPath = hrefString.split("?")[0].split("#")[0];
      if (targetPath !== pathname) {
        navigate(hrefString);
      }
    };

    return (
      <Link ref={ref} href={href} onClick={handleClick} prefetch={prefetch} {...props}>
        {children}
      </Link>
    );
  }
);
TransitionLink.displayName = "TransitionLink";

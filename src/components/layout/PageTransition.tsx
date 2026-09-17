"use client";

import React, { createContext, useContext, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Entrance animation on pathname change
  useEffect(() => {
    isAnimatingRef.current = false;
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    transitionTimelineRef.current?.kill();
    transitionTimelineRef.current = null;

    if (overlayRef.current && logoRef.current) {
      const tl = gsap.timeline();
      transitionTimelineRef.current = tl;
      tl.to(logoRef.current, { scale: 1.2, opacity: 0, duration: 0.25, ease: "power2.in" })
        .to(overlayRef.current, { clipPath: "circle(0% at 50% 50%)", duration: 0.35, ease: "power4.inOut" }, "-=0.1")
        .set(overlayRef.current, { display: "none" });
    }

    return () => {
      transitionTimelineRef.current?.kill();
    };
  }, [pathname]);

  useEffect(() => () => {
    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    transitionTimelineRef.current?.kill();
  }, []);

  const navigate = (href: string) => {
    if (href === pathname || isAnimatingRef.current) return;

    // Instantly navigate for users with reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    isAnimatingRef.current = true;

    // Fail-safe unlock: ensure overlay never traps the user
    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      if (overlayRef.current) overlayRef.current.style.display = "none";
    }, 1200);

    if (overlayRef.current && logoRef.current) {
      transitionTimelineRef.current?.kill();
      gsap.set(overlayRef.current, { display: "flex", clipPath: "circle(0% at 50% 50%)" });
      gsap.set(logoRef.current, { scale: 0.6, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          router.push(href);
        }
      });
      transitionTimelineRef.current = tl;

      tl.to(overlayRef.current, { clipPath: "circle(150% at 50% 50%)", duration: 0.45, ease: "power4.inOut" })
        .to(logoRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" }, "-=0.2");
    } else {
      router.push(href);
      isAnimatingRef.current = false;
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
        style={{ display: "none" }}
      >
        <div ref={logoRef} className="relative w-24 h-24 overflow-hidden rounded-xl border border-brand-purple/20 shadow-[0_0_50px_rgba(112,0,255,0.3)]">
          <Image src="/assets/brand/demonz-logo.jpg" alt="DEMONZ" fill sizes="96px" className="object-cover" priority />
        </div>
      </div>
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
      // Preserve custom onClick handler if passed
      if (onClick) onClick(e);

      // If default was already prevented by another handler, return
      if (e.defaultPrevented) return;

      // Preserve native browser behaviors:
      // 1. Middle-click (button === 1) or secondary button clicks
      // 2. Modifier keys: Cmd, Ctrl, Shift, Alt (open in new tab, new window, download)
      // 3. Target="_blank" or other targets
      const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("target");
      if (isModified || (target && target !== "_self")) {
        return;
      }

      const hrefString = typeof href === "string" ? href : href.pathname || "";

      // External links, mailto, tel, or internal hash links
      const isExternal = /^https?:\/\/|^mailto:|^tel:/.test(hrefString);
      const isHash = hrefString.startsWith("#");
      if (isExternal || isHash) {
        return;
      }

      // Normal internal navigation
      e.preventDefault();
      if (hrefString !== pathname) {
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

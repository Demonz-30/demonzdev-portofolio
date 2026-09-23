"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { assetPath } from "@/lib/paths";
gsap.registerPlugin(ScrollTrigger);

export function HomepageVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const onPlay = () => {
      if (video) {
        video.play().catch(() => {});
      }
    };

    const isPreloaderActive =
      typeof document !== "undefined" &&
      Boolean(document.querySelector(".demonz-preloader")) &&
      !window.__demonz_boot_revealed;

    if (!isPreloaderActive) {
      onPlay();
    } else {
      window.addEventListener("demonz:boot-warmup", onPlay, { once: true });
      window.addEventListener("demonz:boot-reveal", onPlay, { once: true });
    }

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo(video,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, container);

      return () => context.revert();
    });

    media.add("(prefers-reduced-motion: reduce)", () => {
      video.pause();
      video.currentTime = 0;
      gsap.set(video, { yPercent: 0 });
    });

    return () => {
      window.removeEventListener("demonz:boot-warmup", onPlay);
      window.removeEventListener("demonz:boot-reveal", onPlay);
      media.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute inset-y-[-5%] left-0 h-[110%] w-full object-cover opacity-20 md:opacity-25"
        src={assetPath("/assets/videos/demonz-bg.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-black/75" />
    </div>
  );
}

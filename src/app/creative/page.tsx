import { TransitionLink } from "@/components/layout/PageTransition";
import Image from "next/image";
import { ArrowRight, Camera, Film, Terminal } from "lucide-react";
import type { Metadata } from "next";

import { assetPath } from "@/lib/paths";
import { routeMetadata } from "@/lib/metadata";

export const metadata: Metadata = routeMetadata("/creative/", {
  title: "Creative Directory",
  description:
    "Discipline-based creative directory spanning Photography, Videography, and Creative Code by DEMONZDEV.",
  openGraph: {
    title: "Creative Directory | DEMONZDEV",
    description:
      "Discipline-based creative directory spanning Photography, Videography, and Creative Code by DEMONZDEV.",
  },
});

export default function CreativeLandingPage() {
  const disciplines = [
    {
      id: "photography",
      number: "01",
      title: "PHOTOGRAPHY",
      subtitle: "Still Imagery & Lens-Based Documentary",
      description:
        "An 18-work editorial archive exploring commercial craft, environmental portraiture, behind-the-scenes POV documentation, and community events with preserved natural aspect ratios.",
      count: "18 Works",
      tag: "Still Media",
      href: "/creative/photography",
      icon: Camera,
      preview: {
        type: "image" as const,
        src: assetPath("/assets/photography/Creative/fotografi/16,9.jpg"),
        alt: "Demonz Coffee Robusta Lampung Staging",
      },
    },
    {
      id: "videography",
      number: "02",
      title: "VIDEOGRAPHY",
      subtitle: "Cinematic Motion & Observational Pacing",
      description:
        "Continuous motion capture, field cinematography, and environmental pacing compiled into a focused 106-second documentary reel preserving native widescreen framing.",
      count: "01 Motion Reel",
      tag: "Time-Based Media",
      href: "/creative/videography",
      icon: Film,
      preview: {
        type: "video" as const,
        src: assetPath("/assets/photography/Creative/video%20grafi/videpgrafi.mp4"),
      },
    },
    {
      id: "creative-code",
      number: "03",
      title: "CREATIVE CODE",
      subtitle: "Generative Systems & Interactive Visuals",
      description:
        "Screen-based visual experiments interrogating algorithmic motion, dynamic layout systems, and real-time computational interactions.",
      count: "01 Visual System",
      tag: "Computational",
      href: "/creative/creative-code",
      icon: Terminal,
      preview: {
        type: "video" as const,
        src: assetPath("/assets/photography/Creative/creative%20code/creative%20code.mp4"),
      },
    },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground pt-32 md:pt-40 pb-32 px-6 md:px-12 selection:bg-brand-purple selection:text-white">
      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto mb-20 md:mb-28 border-b border-white/10 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
              DISCIPLINE DIRECTORY // DEMONZ CREATIVE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
              CREATIVE
            </h1>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              A structured directory organized into three distinct creative disciplines: lens-based photography, motion videography, and computational code.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase">
              <span>03 Disciplines</span>
              <span>•</span>
              <span>Select Category To Explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Discipline Directory Cards */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {disciplines.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className="group relative rounded-3xl border border-white/10 bg-surface/40 hover:bg-surface/70 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              <TransitionLink
                href={item.href}
                data-cursor="project"
                className="block p-6 sm:p-10 md:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Metadata & Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple-light">
                          <Icon size={20} />
                        </span>
                        <span className="text-xs font-mono tracking-widest text-brand-purple-light font-bold">
                          [{item.number}]
                        </span>
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300 uppercase">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        {item.count}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white group-hover:text-brand-purple-light transition-colors mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-brand-purple-light/80 uppercase tracking-wider mb-6">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4 flex items-center gap-3 text-xs font-mono font-bold tracking-widest uppercase text-white group-hover:text-brand-purple-light transition-colors">
                      <span>Explore {item.title}</span>
                      <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:border-brand-purple-light group-hover:text-brand-purple-light transition-all group-hover:translate-x-1.5">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Visual Teaser */}
                  <div className="lg:col-span-5">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-inner group-hover:border-brand-purple/40 transition-colors">
                      {item.preview.type === "image" ? (
                        <Image
                          src={item.preview.src}
                          alt={item.preview.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 480px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          priority
                        />
                      ) : (
                        <video
                          src={item.preview.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                        Preview
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionLink>
            </article>
          );
        })}
      </div>

      {/* Continuity Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <span className="text-zinc-500 uppercase tracking-wider">
          DEMONZ Visual Architecture // 3 Categories Active
        </span>
        <TransitionLink
          href="/work"
          className="text-brand-purple-light hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
        >
          <span>View Engineering Projects</span>
          <span>→</span>
        </TransitionLink>
      </div>
    </div>
  );
}

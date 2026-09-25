import { getPhotographyWorks } from "@/data/creative";
import { TransitionLink } from "@/components/layout/PageTransition";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export const metadata: Metadata = routeMetadata("/creative/photography/", {
  title: "Photography Archive",
  description:
    "An editorial archive of 18 photography works across commercial craft, documentary portraiture, and behind-the-scenes moments.",
  openGraph: {
    title: "Photography Archive | DEMONZDEV",
    description:
      "An editorial archive of 18 photography works across commercial craft, documentary portraiture, and behind-the-scenes moments.",
  },
});

export default function PhotographyArchivePage() {
  const works = getPhotographyWorks();

  return (
    <div className="bg-background min-h-screen text-foreground pt-32 md:pt-40 pb-32 px-6 md:px-12 selection:bg-brand-purple selection:text-white">
      {/* Header & Back Navigation */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 border-b border-white/10 pb-12">
        <div className="mb-8">
          <TransitionLink
            href="/creative"
            className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"
          >
            <ArrowLeft size={16} />
            <span>BACK TO CREATIVE</span>
          </TransitionLink>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
              01 // STILL MEDIA DISCIPLINE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
              PHOTOGRAPHY
            </h1>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              18 lens-based works preserved in their native aspect ratios. Exploring commercial packaging, traditional architecture, street documentary, and production POV.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase">
              <span>18 Curated Works</span>
              <span>•</span>
              <span>Native Aspect Ratios</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Masonry Gallery */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {works.map((work) => (
          <article
            key={work.id}
            className="break-inside-avoid group rounded-2xl border border-white/10 bg-surface/40 hover:bg-surface/70 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden shadow-xl"
          >
            <TransitionLink
              href={`/creative/photography/${work.slug}`}
              data-cursor="project"
              className="block p-5 sm:p-6"
            >
              {/* Card Top Metadata */}
              <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono text-white/50">
                <div className="flex items-center gap-2">
                  <span className="text-brand-purple-light font-bold">[{work.number}]</span>
                  <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300 uppercase">
                    {work.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-purple-light/90 uppercase px-2 py-0.5 rounded border border-brand-purple/30 bg-brand-purple/10">
                  {work.aspectRatio}
                </span>
              </div>

              {/* Natural Ratio Image Container */}
              <div
                className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/5"
                style={{
                  aspectRatio: `${work.width} / ${work.height}`,
                }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Card Caption */}
              <div className="mt-5">
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-brand-purple-light transition-colors mb-1.5 line-clamp-1">
                  {work.title}
                </h2>
                <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 mb-3">
                  {work.shortIntro}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/5">
                  <span className="uppercase">{work.role}</span>
                  <span className="text-brand-purple-light font-medium group-hover:underline">
                    View Study →
                  </span>
                </div>
              </div>
            </TransitionLink>
          </article>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <TransitionLink
          href="/creative"
          className="text-zinc-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          <span>Return to Creative Directory</span>
        </TransitionLink>
        <div className="flex items-center gap-6">
          <TransitionLink
            href="/creative/videography"
            className="text-brand-purple-light hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
          >
            <span>Explore Videography</span>
            <span>→</span>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}


import { getGraphicDesignWorks } from "@/data/creative";
import { TransitionLink } from "@/components/layout/PageTransition";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export const metadata: Metadata = routeMetadata("/creative/graphic-design/", {
  title: "Graphic Design Archive",
  description:
    "An editorial archive of graphic design, brand identities, large-format print layouts, and publication typography.",
  openGraph: {
    title: "Graphic Design Archive | DEMONZDEV",
    description:
      "An editorial archive of graphic design, brand identities, large-format print layouts, and publication typography.",
  },
});

export default function GraphicDesignArchivePage() {
  const works = getGraphicDesignWorks();

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
              03 // PRINT &amp; VISUAL DISCIPLINE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
              GRAPHIC DESIGN
            </h1>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              Curated visual deliverables spanning community publication design, commercial marketing artwork, Swiss geometric posters, and large-format outdoor banners.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase">
              <span>04 Curated Deliverables</span>
              <span>•</span>
              <span>Vector &amp; High-Res Print</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Masonry Gallery */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {works.map((work) => (
          <article
            key={work.id}
            className="break-inside-avoid group relative rounded-2xl border border-white/10 bg-surface/50 overflow-hidden shadow-xl transition-all duration-500 hover:border-brand-purple/50 hover:bg-surface/80 hover:-translate-y-1.5"
          >
            <TransitionLink
              href={`/creative/graphic-design/${work.slug}`}
              className="block cursor-pointer"
            >
              <div className="relative w-full overflow-hidden bg-black/60">
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: `${work.width} / ${work.height}`,
                  }}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                  [{work.number}] {work.category}
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>{work.year}</span>
                  <span>{work.technicalDetails.medium}</span>
                </div>
                <h2 className="text-lg font-bold text-white group-hover:text-brand-purple-light transition-colors uppercase tracking-tight mb-2">
                  {work.title}
                </h2>
                <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                  {work.shortIntro}
                </p>
              </div>
            </TransitionLink>
          </article>
        ))}
      </div>

      {/* Category Footnote */}
      <div className="max-w-7xl mx-auto mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <TransitionLink
          href="/creative"
          className="text-zinc-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          <span>Return to Creative Directory</span>
        </TransitionLink>
        <TransitionLink
          href="/creative/creative-code"
          className="text-brand-purple-light hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
        >
          <span>Explore Creative Code</span>
          <span>→</span>
        </TransitionLink>
      </div>
    </div>
  );
}

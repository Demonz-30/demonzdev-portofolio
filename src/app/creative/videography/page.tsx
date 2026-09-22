import { getVideographyWorks } from "@/data/creative";
import { TransitionLink } from "@/components/layout/PageTransition";
import { ArrowLeft, ArrowRight, Film, Play, Clock, Monitor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videography Archive",
  description:
    "Motion capture and documentary videography reel exploring cinematic narrative and observational flow.",
  openGraph: {
    title: "Videography Archive | DEMONZDEV",
    description:
      "Motion capture and documentary videography reel exploring cinematic narrative and observational flow.",
  },
};

export default function VideographyArchivePage() {
  const works = getVideographyWorks();

  return (
    <div className="bg-background min-h-screen text-foreground pt-32 md:pt-40 pb-32 px-6 md:px-12 selection:bg-brand-purple selection:text-white">
      {/* Header & Back Navigation */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 border-b border-white/10 pb-12">
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
              02 // TIME-BASED MEDIA DISCIPLINE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
              VIDEOGRAPHY
            </h1>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              Cinematic motion piece capturing environmental presence, documentary pacing, and field observation in native widescreen framing.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase">
              <span>01 Motion Reel</span>
              <span>•</span>
              <span>Native 848 × 480 Widescreen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Videography Showcase List */}
      <div className="max-w-6xl mx-auto space-y-16">
        {works.map((work) => (
          <article
            key={work.id}
            className="rounded-3xl border border-white/10 bg-surface/40 overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple-light">
                  <Film size={20} />
                </span>
                <span className="text-xs font-mono tracking-widest text-brand-purple-light font-bold">
                  [{work.number}]
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300 uppercase">
                  {work.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-brand-purple-light" />
                  {work.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Monitor size={14} className="text-brand-purple-light" />
                  {work.technicalDetails.resolution}
                </span>
              </div>
            </div>

            {/* Native Aspect Ratio Video Player Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black/90 shadow-2xl mb-8 flex items-center justify-center">
              <div
                className="w-full max-w-[960px]"
                style={{
                  aspectRatio: "848 / 480",
                }}
              >
                <video
                  src={work.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Video Narrative & Detail Link */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4 border-t border-white/10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
                  {work.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-brand-purple-light/80 uppercase tracking-wider mb-4">
                  {work.tagline}
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-6">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono text-zinc-300 bg-surface/80 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <TransitionLink
                  href={`/creative/videography/${work.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-brand-purple text-white hover:bg-brand-purple-light transition-colors text-xs font-mono font-bold tracking-widest uppercase shadow-lg group"
                >
                  <Play size={14} fill="currentColor" />
                  <span>View Video Case Study</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </TransitionLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Continuity */}
      <div className="max-w-6xl mx-auto mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
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


import { getPhotographyWorks, getPhotographyWorkBySlug } from "@/data/creative";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TransitionLink } from "@/components/layout/PageTransition";
import { ArrowLeft, ArrowRight, Camera, Info, Layers, Sliders } from "lucide-react";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return getPhotographyWorks().map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const work = getPhotographyWorkBySlug(resolvedParams.slug);

  if (!work) {
    return routeMetadata(`/creative/photography/${resolvedParams.slug}/`, {
      title: "Work Not Found | DEMONZ CREATIVE",
    });
  }

  return routeMetadata(`/creative/photography/${resolvedParams.slug}/`, {
    title: `${work.title} | DEMONZ PHOTOGRAPHY`,
    description: work.shortIntro,
  });
}

export default async function PhotographyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const work = getPhotographyWorkBySlug(resolvedParams.slug);

  if (!work) {
    notFound();
  }

  const allWorks = getPhotographyWorks();
  const currentIndex = allWorks.findIndex((w) => w.slug === work.slug);
  const prevWork = allWorks[(currentIndex - 1 + allWorks.length) % allWorks.length];
  const nextWork = allWorks[(currentIndex + 1) % allWorks.length];
  const isPortrait = work.orientation === "portrait";

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-brand-purple selection:text-white">
      {/* Hero Visual Display */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-brand-purple/5">
        <div className="absolute top-24 left-6 md:left-12 z-30">
          <TransitionLink href="/creative/photography" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-purple transition-colors font-bold tracking-widest text-xs uppercase group bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            BACK TO PHOTOGRAPHY
          </TransitionLink>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10 pointer-events-none" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 border border-brand-purple/40 bg-brand-purple/10 rounded-full text-xs font-mono tracking-widest uppercase text-brand-purple-light">
              {work.category}
            </span>
            <span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-white/50 uppercase">
              {work.year}
            </span>
            <span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-zinc-400 uppercase">
              Ratio: {work.aspectRatio}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-balance text-white">
            {work.title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-zinc-400 font-light text-balance mb-10 font-mono">
            {work.tagline}
          </p>
        </div>

        {/* Large Natural-Aspect Image Presentation */}
        <div className="relative z-20 w-full max-w-5xl mx-auto mt-4 px-4 sm:px-6 flex items-center justify-center">
          <div
            className={`relative w-full rounded-2xl border-4 md:border-8 border-surface bg-surface shadow-2xl overflow-hidden p-2 sm:p-4 ${
              isPortrait
                ? "max-w-[500px] md:max-w-[580px]"
                : "max-w-[760px] md:max-w-[940px]"
            }`}
          >
            <div
              className="relative w-full rounded-xl overflow-hidden bg-[#050505]"
              style={{
                aspectRatio: `${work.width} / ${work.height}`,
              }}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 940px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Technical Specs Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background relative z-30">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
            <div className="md:col-span-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-brand-purple-light uppercase mb-4 flex items-center gap-2">
                <Info size={14} />
                <span>01 // Narrative Context</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-balance leading-relaxed text-white">
                {work.shortIntro}
              </p>
            </div>
            <div className="space-y-5 text-xs font-mono">
              <div>
                <span className="text-white/40 uppercase block mb-1">Discipline</span>
                <p className="text-sm font-medium text-white">{work.category}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Role / Focus</span>
                <p className="text-sm font-medium text-white">{work.role}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Timeline</span>
                <p className="text-sm font-medium text-white">{work.year}</p>
              </div>
            </div>
          </div>

          {/* Photographic & Visual Study */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-purple-light uppercase mb-6 flex items-center gap-2">
              <Layers size={14} />
              <span>02 // Visual Study</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
              {work.description}
            </p>
          </div>

          {/* Composition & Aesthetics Breakdown */}
          <div className="bg-surface/40 border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-purple-light uppercase mb-8 flex items-center gap-2">
              <Sliders size={14} />
              <span>03 // Composition &amp; Aesthetics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-mono text-white/50 uppercase mb-2">Composition</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {work.visualDetails.composition}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-white/50 uppercase mb-2">Lighting</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {work.visualDetails.lighting}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-white/50 uppercase mb-2">Color Palette</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {work.visualDetails.colorPalette}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications (Strictly Factual EXIF handling) */}
          <div className="bg-surface/30 border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-purple-light uppercase mb-8 flex items-center gap-2">
              <Camera size={14} />
              <span>04 // Technical Specifications</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-xs font-mono">
              <div>
                <span className="text-white/40 uppercase block mb-1">Camera</span>
                <p className="text-sm text-zinc-300 font-medium">{work.technicalDetails.camera}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Lens</span>
                <p className="text-sm text-zinc-300 font-medium">{work.technicalDetails.lens}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Settings</span>
                <p className="text-sm text-zinc-300 font-medium">{work.technicalDetails.settings}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Dimensions</span>
                <p className="text-sm text-white font-medium">{work.technicalDetails.dimensions}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Format</span>
                <p className="text-sm text-white font-medium">{work.technicalDetails.format}</p>
              </div>
            </div>
          </div>

          {/* Tools & Disciplines */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-purple-light uppercase mb-6">
              05 // Applied Disciplines &amp; Techniques
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {work.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono text-zinc-300 bg-surface/60 border border-white/10 px-4 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface/40 border-t border-white/10 relative z-30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <TransitionLink
            href={`/creative/photography/${prevWork.slug}`}
            className="flex items-center gap-4 group text-left w-full md:w-auto"
            data-cursor="project"
          >
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-colors shrink-0">
              <ArrowLeft size={16} />
            </span>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                Previous Photo
              </span>
              <span className="text-sm md:text-base font-bold text-white uppercase group-hover:text-brand-purple-light transition-colors line-clamp-1">
                {prevWork.title}
              </span>
            </div>
          </TransitionLink>

          <TransitionLink
            href="/creative/photography"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/60 hover:text-white transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-white/30"
          >
            All 18 Photos
          </TransitionLink>

          <TransitionLink
            href={`/creative/photography/${nextWork.slug}`}
            className="flex items-center gap-4 group text-right w-full md:w-auto justify-end"
            data-cursor="project"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                Next Photo
              </span>
              <span className="text-sm md:text-base font-bold text-white uppercase group-hover:text-brand-purple-light transition-colors line-clamp-1">
                {nextWork.title}
              </span>
            </div>
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-colors shrink-0">
              <ArrowRight size={16} />
            </span>
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}


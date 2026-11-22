import { getGraphicDesignWorks, getGraphicDesignWorkBySlug } from "@/data/creative";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TransitionLink } from "@/components/layout/PageTransition";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return getGraphicDesignWorks().map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const work = getGraphicDesignWorkBySlug(resolvedParams.slug);

  if (!work) {
    return routeMetadata(`/creative/graphic-design/${resolvedParams.slug}/`, {
      title: "Work Not Found | DEMONZ CREATIVE",
    });
  }

  return routeMetadata(`/creative/graphic-design/${resolvedParams.slug}/`, {
    title: `${work.title} | DEMONZ GRAPHIC DESIGN`,
    description: work.shortIntro,
  });
}

export default async function GraphicDesignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const work = getGraphicDesignWorkBySlug(resolvedParams.slug);

  if (!work) {
    notFound();
  }

  const allWorks = getGraphicDesignWorks();
  const currentIndex = allWorks.findIndex((w) => w.slug === work.slug);
  const prevWork = allWorks[(currentIndex - 1 + allWorks.length) % allWorks.length];
  const nextWork = allWorks[(currentIndex + 1) % allWorks.length];
  const isPortrait = work.orientation === "portrait";

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-brand-purple selection:text-white">
      {/* Hero Visual Display */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-brand-purple/5">
        <div className="absolute top-24 left-6 md:left-12 z-30">
          <TransitionLink
            href="/creative/graphic-design"
            className="inline-flex items-center gap-2 text-white/70 hover:text-brand-purple transition-colors font-bold tracking-widest text-xs uppercase group bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            BACK TO GRAPHIC DESIGN
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
              Scale: {work.aspectRatio}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-balance text-white">
            {work.title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-zinc-400 font-light text-balance mb-10 font-mono">
            {work.tagline}
          </p>
        </div>

        {/* Natural-Aspect Visual Presentation */}
        <div className="relative z-20 w-full max-w-5xl mx-auto mt-4 px-4 sm:px-6 flex items-center justify-center">
          <div
            className={`relative w-full rounded-2xl border-4 md:border-8 border-surface bg-surface shadow-2xl overflow-hidden p-2 sm:p-4 ${
              work.aspectRatio === "1024/4128"
                ? "max-w-[340px] md:max-w-[420px]"
                : isPortrait
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
                sizes="(max-width: 1024px) 100vw, 940px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Breakdown */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Narrative & Intent */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
                01 // DESIGN NARRATIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                Deliverable Overview
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-6">
                {work.description}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {work.shortIntro}
              </p>
            </div>

            {/* Design System & Visual Properties */}
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
                02 // VISUAL ATTRIBUTES
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
                Composition &amp; Layout System
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl border border-white/10 bg-surface/40">
                  <span className="text-xs font-mono text-brand-purple-light uppercase block mb-2">
                    Composition
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {work.visualDetails.composition}
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-surface/40">
                  <span className="text-xs font-mono text-brand-purple-light uppercase block mb-2">
                    Typography
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {work.visualDetails.typography}
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-surface/40">
                  <span className="text-xs font-mono text-brand-purple-light uppercase block mb-2">
                    Color Palette
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {work.visualDetails.colorPalette}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Metadata Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Palette size={18} className="text-brand-purple-light" />
                <span className="text-xs font-mono tracking-widest uppercase text-white font-bold">
                  Technical Specifications
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 uppercase">Year</span>
                  <span className="text-white">{work.year}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 uppercase">Role</span>
                  <span className="text-white text-right max-w-[200px]">{work.role}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 uppercase">Dimensions</span>
                  <span className="text-white">{work.technicalDetails.dimensions}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 uppercase">Output Format</span>
                  <span className="text-white">{work.technicalDetails.format}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 uppercase">Medium</span>
                  <span className="text-white">{work.technicalDetails.medium}</span>
                </div>
                {work.technicalDetails.provenance && (
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-500 uppercase">Provenance</span>
                    <span className="text-brand-purple-light">{work.technicalDetails.provenance}</span>
                  </div>
                )}
              </div>

              {/* Tools Used */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase text-zinc-500 block mb-3">
                  Production Software
                </span>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjacent Work Navigation */}
      <section className="border-t border-white/10 py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <TransitionLink
            href={`/creative/graphic-design/${prevWork.slug}`}
            className="flex items-center gap-4 text-left group"
          >
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-brand-purple group-hover:text-brand-purple transition-all">
              <ArrowLeft size={16} />
            </span>
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                Previous Deliverable
              </span>
              <span className="text-sm font-bold uppercase text-white group-hover:text-brand-purple-light transition-colors">
                {prevWork.title}
              </span>
            </div>
          </TransitionLink>

          <TransitionLink
            href="/creative/graphic-design"
            className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            Archive Index
          </TransitionLink>

          <TransitionLink
            href={`/creative/graphic-design/${nextWork.slug}`}
            className="flex items-center gap-4 text-right group"
          >
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                Next Deliverable
              </span>
              <span className="text-sm font-bold uppercase text-white group-hover:text-brand-purple-light transition-colors">
                {nextWork.title}
              </span>
            </div>
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-brand-purple group-hover:text-brand-purple transition-all">
              <ArrowRight size={16} />
            </span>
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}

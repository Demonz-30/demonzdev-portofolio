"use client";

import Image from "next/image";
import { getFeaturedProjects, projects } from "@/data/projects";
import { TransitionLink } from "@/components/layout/PageTransition";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function SelectedWork() {
  const featuredProjects = getFeaturedProjects();
  const sectionRef = useScrollReveal<HTMLElement>({ selector: "[data-home-reveal]", stagger: 0.08 });

  return (
    <section ref={sectionRef} id="selected-work" className="py-32 md:py-44 px-6 md:px-12 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div data-home-reveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-4 block">
              01 // SELECTED WORK
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase">
              FLAGSHIP APPLICATIONS
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-light">
            Real products engineered from application architecture to interface design.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-32 md:space-y-44">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const primaryVisual: string = project.media.coverWebp || project.media.cover || project.media.dashboardPreview || "";
            const accent = project.accentColor || "#7000FF";
            const isFlagship = index === 0;
            const isPortrait = project.media.orientation === "portrait";
            const isSquare = project.media.orientation === "square" || project.media.aspectRatio === "1/1";

            return (
              <div 
                key={project.id}
                data-home-reveal
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:col-start-8" : ""}`}>
                  {/* Meta badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-mono text-xs text-white/40 tracking-wider">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span 
                      className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border ${
                        isFlagship ? "font-semibold" : ""
                      }`}
                      style={{ 
                        color: accent, 
                        borderColor: `${accent}${isFlagship ? "60" : "40"}`,
                        backgroundColor: `${accent}${isFlagship ? "15" : "10"}` 
                      }}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Titles */}
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-3">
                    {project.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg font-medium mb-6 font-mono"
                    style={{ color: accent }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Project Description */}
                  <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Technology Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono text-zinc-300 bg-surface border border-white/10 px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study CTA */}
                  <div>
                    <TransitionLink
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white bg-surface hover:bg-white/10 border border-white/15 hover:border-white/30 active:scale-95 px-7 py-4 rounded-full transition-all duration-300 group/link shadow-lg"
                      data-cursor="project"
                    >
                      <span>Explore Case Study</span>
                      <span 
                        className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                        style={{ color: accent }}
                      >
                        →
                      </span>
                    </TransitionLink>
                  </div>
                </div>

                {/* Media Presentation Column */}
                <div className={`lg:col-span-7 relative w-full ${isEven ? "lg:col-start-1" : ""}`}>
                  <TransitionLink
                    href={`/work/${project.id}`}
                    data-cursor="project"
                    className={`block relative w-full rounded-2xl border bg-[#0C0C0E] p-6 sm:p-8 md:p-12 min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center shadow-2xl group transition-all duration-500 hover:border-white/25 cursor-pointer ${
                      isFlagship ? "border-white/15 shadow-[0_0_60px_-20px_rgba(33,224,173,0.15)]" : "border-white/10"
                    }`}
                  >
                    {/* Ambient backlight */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                        isFlagship ? "opacity-15 group-hover:opacity-25" : "opacity-10 group-hover:opacity-20"
                      }`}
                      style={{ 
                        background: `radial-gradient(circle at center, ${accent} 0%, transparent 70%)` 
                      }}
                    />

                    {/* Presentation Stage */}
                    <div className="relative z-10 w-full flex items-center justify-center">
                      {isPortrait ? (
                        <div className={`relative w-full ${
                          project.media.aspectRatio === "4/5"
                            ? "max-w-[280px] sm:max-w-[320px] md:max-w-[340px] aspect-[4/5]"
                            : "max-w-[260px] sm:max-w-[300px] md:max-w-[320px] aspect-[9/20]"
                        } rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]`}>
                          <Image 
                            src={primaryVisual}
                            alt={`${project.title} Dashboard Screenshot`}
                            fill
                            sizes="(max-width: 768px) 260px, 320px"
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>
                      ) : isSquare ? (
                        <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 sm:p-6 md:p-8 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={primaryVisual}
                              alt={`${project.title} Visual Presentation`}
                              fill
                              sizes="(max-width: 768px) 300px, 380px"
                              className="object-contain drop-shadow-2xl"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      ) : (
                        <div 
                          className={`relative w-full ${
                            project.media.aspectRatio === "2/1" ? "max-w-[620px] aspect-[2/1]" : "max-w-[560px] aspect-[3/2]"
                          } rounded-xl overflow-hidden bg-black/40 border border-white/5 p-4 sm:p-6 md:p-8 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image 
                              src={primaryVisual}
                              alt={`${project.title} Visual Presentation`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 620px"
                              className="object-contain drop-shadow-2xl"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Subtle status caption indicator */}
                    <div className="absolute bottom-4 right-6 hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                      <span>{project.category}</span>
                    </div>
                  </TransitionLink>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Archive Navigation */}
        <div className="mt-32 pt-12 border-t border-white/10 flex justify-center">
          <TransitionLink
            href="/work"
            className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            <span>View All Works &amp; Experiments ({projects.length})</span>
            <span className="text-brand-purple-light">→</span>
          </TransitionLink>
        </div>

      </div>
    </section>
  );
}

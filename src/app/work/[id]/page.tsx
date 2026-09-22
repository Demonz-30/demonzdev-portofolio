import { getProjectById, getCaseStudyProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TransitionLink } from "@/components/layout/PageTransition";
import { CaseStudyHeroMotion } from "@/components/case-study/CaseStudyMotion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getCaseStudyProjects().map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} — Case Study`;
  const description =
    project.description || `${project.title} product engineering case study by DEMONZDEV.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | DEMONZDEV`,
      description,
      images: [
        {
          url: project.media.cover,
          width: 1200,
          height: 630,
          alt: `${project.title} — Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | DEMONZDEV`,
      description,
      images: [project.media.cover],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);
  
  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;
  const image1 = project.media.dashboardPreview || project.media.mobileMockups?.[0] || project.media.cover;
  const image2 = project.media.mobileMockups?.[1];
  const isLandscape = project.id === "gizvana" || (project.media.orientation === "landscape" && project.id !== "finora" && project.id !== "hyperassist" && project.id !== "jadwalku");

  const caseStudyProjects = getCaseStudyProjects();
  const currentIndex = caseStudyProjects.findIndex((p) => p.id === project.id);
  const nextProject = caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-brand-purple selection:text-white">
      {/* Hero Case Study */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden" style={{ backgroundColor: project.accent + "10" }}>
        <div className="absolute top-24 left-6 md:left-12 z-30">
          <TransitionLink href="/work" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-purple transition-colors font-bold tracking-widest text-xs uppercase group bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            BACK TO WORK
          </TransitionLink>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
        
        <CaseStudyHeroMotion>
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-4 cs-reveal mb-8">
              <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono tracking-widest uppercase" style={{ color: project.accent, borderColor: project.accent }}>
                {project.category === "brand-business"
                  ? "Brand & Business Case Study"
                  : project.category === "creative-direction"
                  ? "Creative Direction Case Study"
                  : "App Case Study"}
              </span>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 bg-surface/80 hover:bg-surface rounded-full text-xs font-mono tracking-widest uppercase text-white transition-all duration-300 group shadow-lg"
                  data-cursor="pointer"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: project.accent }} />
                </a>
              )}
            </div>
            <h1 className="cs-reveal text-5xl md:text-8xl font-black tracking-tighter mb-6">{project.title}</h1>
            <p className="cs-reveal text-xl md:text-3xl text-foreground-muted font-light text-balance mb-12">{project.subtitle}</p>
          </div>

          {/* Parallax Mockup Header */}
          {isLandscape ? (
            <div className="cs-reveal relative z-20 w-full max-w-5xl mx-auto mt-12 px-6 flex items-center justify-center perspective-1000">
              <div className="relative w-full max-w-[640px] md:max-w-[760px] aspect-[16/10] rounded-2xl border-4 md:border-8 border-surface bg-surface shadow-2xl overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out z-20 p-2 sm:p-4">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050505]">
                  <Image 
                    src={image1} 
                    alt={`${project.title} Preview`}
                    fill 
                    sizes="(max-width: 768px) 100vw, 760px" 
                    className="object-contain" 
                    priority 
                  />
                </div>
              </div>
              {image2 && (
                <div className="hidden lg:block absolute -bottom-6 right-8 w-[200px] aspect-square rounded-2xl border-4 border-surface/50 bg-surface shadow-xl overflow-hidden transform rotate-y-12 rotate-x-6 z-10 blur-[1px] opacity-75">
                  <Image src={image2} alt={`${project.title} Screen 2`} fill sizes="200px" className="object-cover" />
                </div>
              )}
            </div>
          ) : (
            <div className="cs-reveal relative z-20 w-full max-w-5xl mx-auto mt-12 px-6 h-[40vh] md:h-[60vh] perspective-1000">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] aspect-[9/19.5] rounded-[3rem] border-8 border-surface bg-surface shadow-2xl overflow-hidden transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-20">
                <Image src={image1} alt={`${project.title} Screen 1`} fill sizes="(max-width: 768px) 280px, 350px" className="object-contain p-4 bg-[#050505]" priority />
              </div>
              {image2 && (
                <div className="absolute top-12 left-1/2 translate-x-12 md:translate-x-32 w-[240px] md:w-[300px] aspect-[9/19.5] rounded-[3rem] border-8 border-surface/50 bg-surface shadow-xl overflow-hidden transform rotate-y-12 rotate-x-6 z-10 blur-[2px] opacity-60">
                  <Image src={image2} alt={`${project.title} Screen 2`} fill sizes="(max-width: 768px) 240px, 300px" className="object-cover" />
                </div>
              )}
            </div>
          )}
        </CaseStudyHeroMotion>
      </section>

      {/* Case Study Content */}
      <section className="py-24 px-6 md:px-12 bg-background relative z-30">
        <div className="max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            <div className="md:col-span-2">
              <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">01 &mdash; Overview</h2>
              <p className="text-2xl md:text-4xl font-light text-balance leading-tight">{caseStudy.overview}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">STATUS // CURRENT</h2>
              <p className="text-xl font-medium">{caseStudy.status}</p>
              {project.links?.live && (
                <div className="mt-8">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-surface hover:bg-white/10 border border-white/20 hover:border-white/40 px-6 py-3.5 rounded-full transition-all duration-300 group shadow-lg"
                    data-cursor="pointer"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: project.accent }} />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-32">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">02 &mdash; Problem / Idea</h2>
              <p className="text-xl text-foreground-muted leading-relaxed">{caseStudy.problem}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">03 &mdash; Product</h2>
                <p className="text-lg text-foreground-muted leading-relaxed">{caseStudy.product}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">04 &mdash; Design</h2>
                <p className="text-lg text-foreground-muted leading-relaxed">{caseStudy.design}</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">05 &mdash; Development</h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-12">{caseStudy.development}</p>
              
              <div className="bg-surface border border-white/5 p-8 rounded-3xl">
                <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">06 &mdash; Technology</h2>
                <p className="text-lg font-mono text-white/80">{caseStudy.technology}</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-purple mb-6 uppercase">07 &mdash; Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Next Project & Continuity Navigation */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface/40 border-t border-white/10 relative z-30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xs font-mono tracking-widest text-brand-purple-light uppercase mb-2">Next Case Study</span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">{nextProject.title}</h3>
            <p className="text-sm font-mono mt-1" style={{ color: nextProject.accent }}>{nextProject.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TransitionLink
              href={`/work/${nextProject.id}`}
              className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white bg-surface hover:bg-white/10 border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition-all duration-300 shadow-xl group"
              data-cursor="project"
            >
              <span>Explore Next Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: nextProject.accent }}>→</span>
            </TransitionLink>
            <TransitionLink
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors px-4 py-2"
            >
              ← Back to Work
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}

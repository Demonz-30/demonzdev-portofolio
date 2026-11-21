export interface PrimaryCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  stack: string[];
}

export interface SupportingDiscipline {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
}

export interface WhatIDoItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
}

export const primaryCapabilities: PrimaryCapability[] = [
  {
    id: "01",
    title: "PRODUCT ENGINEERING",
    tagline: "Full-Stack Web & Web Applications",
    description: "Architecting responsive, high-performance web applications with clean component trees, robust state management, and reliable API integration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git & GitHub"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    id: "02",
    title: "MOBILE & SYSTEMS",
    tagline: "Native & Cross-Platform Mobile",
    description: "Building responsive mobile applications with offline-first local persistence, background synchronization, and realtime datastores.",
    technologies: [
      "Android SDK",
      "Kotlin",
      "SQLite / Room",
      "Flutter",
      "Dart",
      "Firebase"
    ],
    stack: [
      "Android SDK",
      "Kotlin",
      "SQLite / Room",
      "Flutter",
      "Dart",
      "Firebase"
    ]
  },
  {
    id: "03",
    title: "CREATIVE TECHNOLOGY",
    tagline: "Interactive 3D & Motion Systems",
    description: "Crafting expressive digital interfaces with procedural shaders, WebGL canvas integration, and choreographing performant kinetic motion.",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL Shaders",
      "GSAP",
      "ScrollTrigger",
      "UI/UX Architecture"
    ],
    stack: [
      "Three.js",
      "React Three Fiber",
      "WebGL Shaders",
      "GSAP",
      "ScrollTrigger",
      "UI/UX Architecture"
    ]
  },
  {
    id: "04",
    title: "AI & AUTOMATION",
    tagline: "Intelligent Workflows & Logic",
    description: "Integrating algorithmic task orchestration, intelligent matching engines, automated reporting pipelines, and Python script automation.",
    technologies: [
      "AI Matching Engine",
      "Task Parsing",
      "AI-Assisted Workflow",
      "Python Scripting",
      "Process Automation"
    ],
    stack: [
      "AI Matching Engine",
      "Task Parsing",
      "AI-Assisted Workflow",
      "Python Scripting",
      "Process Automation"
    ]
  }
];

export const supportingDisciplines: SupportingDiscipline[] = [
  {
    id: "05",
    title: "UI/UX & BRAND DESIGN SYSTEMS",
    tagline: "Design Systems & Visual Identity",
    description:
      "Designing visual identities, comprehensive design systems, typographic hierarchies, and digital product interfaces with consistent visual character.",
    skills: [
      "UI/UX Architecture",
      "Design Systems",
      "Typography & Layout",
      "Brand Identity",
      "Figma"
    ]
  },
  {
    id: "B",
    title: "MULTIMEDIA & PRODUCT EXPERIMENTS",
    tagline: "Visual Production & Real-world Experiments",
    description:
      "Menggabungkan produksi visual, photography, cinematography, content strategy, dan eksperimen produk nyata.",
    skills: [
      "Commercial Photography",
      "Cinematography",
      "Visual Storytelling",
      "Color Grading",
      "Content Strategy",
      "Product Strategy"
    ]
  }
];

export const allCapabilitiesWhatIDo: WhatIDoItem[] = [
  ...primaryCapabilities.map((p) => ({
    id: p.id,
    title: p.title,
    tagline: p.tagline,
    description: p.description,
    skills: p.technologies
  })),
  ...supportingDisciplines.map((s) => ({
    id: s.id,
    title: s.title,
    tagline: s.tagline,
    description: s.description,
    skills: s.skills
  }))
];


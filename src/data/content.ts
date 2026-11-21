import { projects } from "./projects";
import { allCapabilitiesWhatIDo } from "./capabilities";
export * from "./projects";
export * from "./capabilities";

export const content = {
  hero: {
    title: "DEMONZDEV",
    subtitle: "Creative Technologist & Product Engineer",
    message: "I engineer digital products, mobile applications, AI workflows, and multimedia systems where technical depth meets creative execution.",
  },
  about: {
    heading: "I create. I build. I experiment.",
    paragraphs: [
      "I'm Muhammad Munir Alfaruq (DEMONZDEV) — a Creative Technologist and Product Engineer.",
      "My work bridges software engineering, mobile systems, AI automation, and visual direction.",
      "I build functional systems from ground-up architecture — whether it's an offline-first POS application, an AI-powered financial intelligence tool, an interactive 3D WebGL experience, or comprehensive brand guidelines.",
      "I do not limit myself to shallow abstractions. I build with hands-on technical discipline, local persistence, and deliberate design craft.",
      "I learn, experiment, build, and deliver."
    ]
  },
  whatIDo: allCapabilitiesWhatIDo,
  projects,
  nav: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
    { label: "CREATIVE", href: "/creative" },
    { label: "EXPERIMENTS", href: "/experiments" },
    { label: "CONTACT", href: "/contact" }
  ],
  approach: {
    heading: "MY APPROACH",
    tagline: "Learn → Experiment → Build → Deliver",
    steps: [
      { id: "01", title: "LEARN" },
      { id: "02", title: "EXPERIMENT" },
      { id: "03", title: "BUILD" },
      { id: "04", title: "DELIVER" }
    ]
  },
  tools: [
    "TypeScript", "React", "Next.js", "Kotlin", "Flutter", "Python", 
    "Three.js", "Tailwind CSS", "Firebase", "SQLite", "Figma", "Git & GitHub"
  ],
  currentlyExploring: ["AI & AUTOMATION", "CREATIVE DEVELOPMENT", "MULTIMEDIA", "PRODUCT ARCHITECTURE"],
  philosophy: [
    "Technology provides the capability.",
    "Creativity provides the direction.",
    "Real-world utility provides the purpose."
  ],
  contact: {
    email: "muhammadmuniralfaruq@gmail.com",
    whatsapp: "https://wa.me/6289675210655",
    github: "https://github.com/Demonz-30",
    linkedin: "https://www.linkedin.com/in/muhammad-munir-alfaruq-283b0b367/",
    instagram: "https://www.instagram.com/demonzdev"
  },
  footer: {
    brand: "DEMONZDEV",
    tagline: "Creative Technologist & Product Engineer",
    categories: ["Software Engineering", "AI Systems", "UI/UX", "Photography", "Videography", "Graphic Design"],
    message: "Building ideas into reality.",
    copyright: "DEMONZDEV"
  }
};

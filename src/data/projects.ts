import { assetPath } from "@/lib/paths";
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectMedia {
  cover: string;
  coverWebp?: string;
  mobileMockups?: string[];
  desktopMockups?: string[];
  banner?: string;
  dashboardPreview?: string;
  aspectRatio?: string;
  orientation?: "landscape" | "portrait" | "square";
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture?: string;
  keyFeatures: string[];
  features: string[]; // Preserved for backwards compatibility with existing UI
  product?: string;   // Preserved for backwards compatibility
  design?: string;    // Preserved for backwards compatibility
  development?: string; // Preserved for backwards compatibility
  technology?: string;  // Preserved for backwards compatibility
  technologies?: {
    frontend?: string[];
    backend?: string[];
    mobile?: string[];
    infrastructure?: string[];
    ai?: string[];
  };
  metrics?: ProjectMetric[];
  challengesSolved?: string;
  status: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category:
    | "mobile-app"
    | "web-platform"
    | "ai-system"
    | "brand-business"
    | "creative-direction";
  featured: boolean;
  year: string;
  status:
    | "Production Ready"
    | "Active Development"
    | "Shipped"
    | "Concept";
  accentColor?: string;
  accent?: string;     // Preserved for backwards compatibility
  isApp?: boolean;     // Preserved for backwards compatibility
  focus: string[];     // Preserved for backwards compatibility
  stack: string[];
  media: ProjectMedia;
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "finora",
    title: "FINORA",
    subtitle: "Personal Finance & Wealth Management Platform",
    tagline: "Personal Finance & Wealth Management Platform",
    description: "Flagship personal finance and wealth management mobile application designed to simplify financial tracking, budgeting, and asset management into an intuitive digital experience.",
    category: "mobile-app",
    featured: true,
    year: "2026",
    status: "Active Development",
    accentColor: "#21e0ad",
    accent: "#21e0ad",
    isApp: true,
    focus: ["Product Engineering", "Mobile Application", "UI/UX Architecture", "Financial Systems"],
    stack: ["Mobile Application", "Product Engineering", "UI/UX Design", "Financial Systems"],
    media: {
      cover: assetPath("/assets/projects/finora-1.jpeg"),
      dashboardPreview: assetPath("/assets/projects/finora-dashboard.jpeg"),
      aspectRatio: "2/1",
      orientation: "landscape",
      mobileMockups: [
        assetPath("/assets/projects/finora-dashboard.jpeg")
      ]
    },
    caseStudy: {
      overview: "Finora is DEMONZDEV's flagship personal finance platform designed to streamline financial tracking, budgeting, and asset management into an intuitive digital experience.",
      problem: "Personal financial management is often fragmented across multiple accounts, spreadsheets, and complex interfaces without clear visual feedback.",
      solution: "A mobile financial application bringing clarity to personal finance through structured data visualization, expense categorization, and seamless user experience.",
      product: "A flagship personal finance mobile application focused on high-usability financial management and budgeting workflows.",
      design: "Clean, dark-mode financial interface emphasizing typographical hierarchy, data legibility, and restrained accent highlights.",
      development: "Modern mobile application architecture built with modular components, secure local state management, and responsive interfaces.",
      technology: "Mobile Application Architecture, Modern UI, Data Management, UI/UX Design System.",
      architecture: "Mobile application architecture focused on client-side financial computation, state persistence, and responsive UI components.",
      keyFeatures: [
        "Financial Overview & Tracking",
        "Expense & Income Categorization",
        "Budget Management",
        "Asset Allocation Visibility",
        "Data Legibility & Dark Interface"
      ],
      features: [
        "Financial Overview & Tracking",
        "Expense & Income Categorization",
        "Budget Management",
        "Asset Allocation Visibility",
        "Data Legibility & Dark Interface"
      ],
      technologies: {
        mobile: ["Mobile Architecture", "UI Components"],
        backend: ["Data Management", "Local Persistence"]
      },
      status: "Active Development"
    }
  },
  {
    id: "gizvana",
    title: "GIZVANA",
    subtitle: "Smart Nutrition & Operations Platform",
    tagline: "Smart Nutrition & Operations Platform",
    description: "Smart nutrition and operations application concept designed to connect nutrition operations, inventory, distribution, reporting, and organizational workflows into a unified digital system.",
    category: "mobile-app",
    featured: true,
    year: "2026",
    status: "Production Ready",
    accentColor: "#10b981",
    accent: "#10b981",
    isApp: true,
    focus: ["Product Development", "UI/UX", "Android", "Backend", "Database"],
    stack: ["Android SDK", "Kotlin", "SQLite/Room", "REST APIs", "UI/UX"],
    media: {
      cover: assetPath("/assets/projects/gizvana-1.jpg"),
      dashboardPreview: assetPath("/assets/projects/gizvana-1.jpg"),
      aspectRatio: "3/2",
      orientation: "landscape",
      mobileMockups: [
        assetPath("/assets/projects/gizvana-1.jpg"),
        assetPath("/assets/projects/gizvana-2.jpg")
      ]
    },
    caseStudy: {
      overview: "Gizvana bridges the gap in nutritional operations by providing a unified digital platform for data management and reporting.",
      problem: "Manual nutrition tracking and inventory distribution are highly prone to data loss, inefficiencies, and slow reporting cycles.",
      solution: "A full-scale Android application that acts as a mobile command center for field operators and administrators.",
      product: "A full-scale Android application that acts as a mobile command center for field operators and administrators.",
      design: "The UI/UX focuses on high-density data visibility, offline-first forms, and clear operational hierarchies.",
      development: "Built natively for Android with a robust background sync engine to handle poor network conditions.",
      technology: "Kotlin, Android SDK, SQLite/Room, REST APIs, and a custom backend dashboard.",
      architecture: "Android Native architecture (Kotlin/Android SDK) utilizing SQLite/Room for offline data persistence and background synchronization with a REST API backend dashboard.",
      keyFeatures: [
        "Offline Data Entry",
        "Inventory Management",
        "Distribution Tracking",
        "Automated Reporting",
        "Role-based Access"
      ],
      features: [
        "Offline Data Entry",
        "Inventory Management",
        "Distribution Tracking",
        "Automated Reporting",
        "Role-based Access"
      ],
      technologies: {
        mobile: ["Android SDK", "Kotlin"],
        backend: ["SQLite/Room", "REST APIs"]
      },
      status: "Production Ready / Active"
    }
  },
  {
    id: "hyperassist",
    title: "HYPERASSIST",
    subtitle: "Hyperlocal Micro-Service Marketplace",
    tagline: "Hyperlocal Micro-Service Marketplace",
    description: "Hyperlocal micro-service marketplace application concept designed to connect people who need quick local help with nearby helpers through an AI-assisted task workflow.",
    category: "mobile-app",
    featured: true,
    year: "2026",
    status: "Concept",
    accentColor: "#06b6d4",
    accent: "#06b6d4",
    isApp: true,
    focus: ["Product Development", "Flutter", "UI/UX", "Firebase", "AI-assisted workflow", "Application architecture"],
    stack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "AI Matching Engine"],
    media: {
      cover: assetPath("/assets/projects/hyperassist-1.jpg"),
      dashboardPreview: assetPath("/assets/projects/hyperassist-dashboard.jpeg"),
      aspectRatio: "1/1",
      orientation: "square",
      mobileMockups: [
        assetPath("/assets/projects/hyperassist-dashboard.jpeg")
      ]
    },
    caseStudy: {
      overview: "HyperAssist reimagines the gig economy by leveraging AI to instantly match users with hyperlocal micro-service providers.",
      problem: "Finding reliable, immediate help for small tasks is disjointed. Existing platforms are too broad and lack AI-driven matchmaking.",
      solution: "A cross-platform Flutter mobile application where users can broadcast needs and helpers can bid instantly.",
      product: "A cross-platform Flutter mobile application where users can broadcast needs and helpers can bid instantly.",
      design: "Modern, trust-building interfaces. The design utilizes geographic mapping, real-time status indicators, and clean conversational UI.",
      development: "Developed using Flutter for seamless iOS and Android deployment, powered by Firebase real-time infrastructure.",
      technology: "Flutter, Dart, Firebase Firestore, Firebase Auth, AI Matching Engine.",
      architecture: "Cross-platform mobile application built on Flutter/Dart, integrating Firebase Firestore and Firebase Auth for realtime operations alongside an AI task matching engine.",
      keyFeatures: [
        "AI Task Parsing",
        "Real-time Geolocation",
        "Instant Bidding",
        "In-app Chat",
        "Secure Payments"
      ],
      features: [
        "AI Task Parsing",
        "Real-time Geolocation",
        "Instant Bidding",
        "In-app Chat",
        "Secure Payments"
      ],
      technologies: {
        mobile: ["Flutter", "Dart"],
        backend: ["Firebase Firestore", "Firebase Auth"],
        ai: ["AI Matching Engine", "AI Task Parsing"]
      },
      status: "Concept / Development"
    }
  },
  {
    id: "jadwalku",
    title: "JADWALKU",
    subtitle: "Smart Academic Schedule & Task Platform",
    tagline: "Smart Academic Schedule & Task Platform",
    description: "Academic scheduling and daily task management application designed for students and schools, featuring real-time schedule tracking, subject organization, and assignment monitoring.",
    category: "mobile-app",
    featured: true,
    year: "2026",
    status: "Production Ready",
    accentColor: "#3947b4",
    accent: "#3947b4",
    isApp: true,
    focus: ["Product Engineering", "Mobile Application", "UI/UX Architecture", "Academic Systems"],
    stack: ["Mobile Application", "Schedule Engine", "UI/UX Design", "Local Persistence"],
    media: {
      cover: assetPath("/assets/projects/logo-jadwalku.jpeg"),
      dashboardPreview: assetPath("/assets/projects/jadwalku-dashboard.jpeg"),
      aspectRatio: "4/5",
      orientation: "portrait",
      mobileMockups: [
        assetPath("/assets/projects/jadwalku-dashboard.jpeg"),
        assetPath("/assets/projects/logo-jadwalku.jpeg")
      ]
    },
    caseStudy: {
      overview: "JadwalKu is a dedicated academic scheduling application engineered to streamline school timetables, class schedules, and daily assignment workflows for students and educators.",
      problem: "Students frequently struggle with disjointed school schedules, shifting class periods, and tracking assignment deadlines across paper notebooks or generic chat groups.",
      solution: "A mobile application providing structured daily schedules, real-time school period tracking, lesson agendas, and focused task reminders.",
      product: "A mobile academic utility application tailored for students at SMK Muhammadiyah 10 Kisaran and educational institutions.",
      design: "High-contrast dark interface featuring distinct time-card visual blocks, status tags, and intuitive navigation.",
      development: "Engineered with offline-first persistence, local notification scheduling, and performant UI list rendering.",
      technology: "Mobile Application, Component Architecture, Local Data Storage, UI/UX System.",
      architecture: "Mobile application architecture built around local persistence, structured timetable relational mapping, and responsive component rendering.",
      keyFeatures: [
        "Real-time Class Timetable",
        "School Bell & Period Tracker",
        "Daily Subject Management",
        "Assignment & Task Tracking",
        "Offline-first Timetable Access"
      ],
      features: [
        "Real-time Class Timetable",
        "School Bell & Period Tracker",
        "Daily Subject Management",
        "Assignment & Task Tracking",
        "Offline-first Timetable Access"
      ],
      technologies: {
        mobile: ["Mobile Architecture", "Component State"],
        backend: ["Local Persistence", "Data Relational Mapping"]
      },
      status: "Production Ready"
    }
  },
  {
    id: "demonz-coffee",
    title: "DEMONZ COFFEE",
    subtitle: "Real-world Coffee Business",
    tagline: "Real-world Coffee Business",
    description: "Real-world coffee business project combining product development, branding, photography, marketing, content creation, and digital presence.",
    category: "brand-business",
    featured: false,
    year: "2026",
    status: "Active Development",
    accentColor: "#f59e0b",
    accent: "#f59e0b",
    isApp: false,
    focus: ["Product Development", "Branding", "Photography", "Marketing", "Content"],
    stack: ["Product Development", "Branding", "Photography", "Marketing", "Content Strategy"],
    media: {
      cover: assetPath("/assets/photography/demonz-coffee.webp"),
      coverWebp: assetPath("/assets/photography/demonz-coffee.webp"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    links: {
      live: "https://demonzcoffe.web.id"
    },
    caseStudy: {
      overview: "Demonz Coffee is a real-world coffee business venture combining product development, brand identity, commercial photography, marketing, content creation, and digital presence.",
      problem: "Establishing a physical and digital coffee brand requires integrating product development, distinctive visual identity, digital customer experience, and content marketing into a coherent system.",
      solution: "An end-to-end brand ecosystem connecting roast formulation, packaging design, high-quality commercial photography, digital web channels, and strategic marketing.",
      product: "A real-world commercial coffee business encompassing product formulation, packaging design, brand assets, and digital presence.",
      design: "Artisanal modern visual aesthetic balancing rich coffee tones, structured typography, tactile packaging, and cohesive digital design.",
      development: "Brand identity architecture, digital presence at demonzcoffe.web.id, and scalable content workflows.",
      technology: "Product Development, Brand Architecture, Commercial Photography, Web Presence, Content Strategy.",
      architecture: "Omnichannel brand platform connecting physical craft with digital presence and social distribution.",
      keyFeatures: [
        "Product Development & Formulation",
        "Brand Identity & Packaging Design",
        "Commercial Photography & Visual Storytelling",
        "Marketing & Content Strategy",
        "Digital Presence & Web Platform"
      ],
      features: [
        "Product Development & Formulation",
        "Brand Identity & Packaging Design",
        "Commercial Photography & Visual Storytelling",
        "Marketing & Content Strategy",
        "Digital Presence & Web Platform"
      ],
      technologies: {
        frontend: ["Web Presence", "Digital Platform"],
        backend: ["Content Strategy", "Brand Architecture"]
      },
      status: "Active Development"
    }
  },
  {
    id: "creative-multimedia",
    title: "CREATIVE MULTIMEDIA",
    subtitle: "Visual Storytelling Experiments",
    tagline: "Visual Storytelling Experiments",
    description: "Photography, cinematography, video editing, promotional content, and visual storytelling.",
    category: "creative-direction",
    featured: false,
    year: "2026",
    status: "Active Development",
    accentColor: "#3b82f6",
    accent: "#3b82f6",
    isApp: false,
    focus: ["Photography", "Cinematography", "Video Editing", "Promotional Content"],
    stack: ["Photography", "Cinematography", "Video Editing", "Color Grading", "Visual Storytelling"],
    media: {
      cover: assetPath("/assets/photography/creative-multimedia.jpg"),
      coverWebp: assetPath("/assets/photography/creative-multimedia.jpg"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    caseStudy: {
      overview: "Creative Multimedia is a multidisciplinary discipline dedicated to photography, cinematography, video editing, promotional content, and cinematic visual storytelling.",
      problem: "Delivering powerful visual stories requires mastering both creative direction and technical rigor across lighting, framing, narrative pacing, and color science.",
      solution: "A disciplined visual production pipeline combining editorial photography, cinematic camera movement, color grading science, and multi-platform promotional editing.",
      product: "A versatile creative direction archive encompassing editorial photography, brand motion reels, and promotional visual campaigns.",
      design: "Cinematic atmosphere defined by high-contrast lighting, intentional composition, restrained color grading palettes, and immersive rhythm.",
      development: "End-to-end creative workflows: pre-production planning, camera operation, post-production editing, color grading, and format optimization.",
      technology: "Commercial Photography, Cinematography, Video Editing, Color Grading, Visual Storytelling.",
      architecture: "Production-ready creative pipeline optimized for high-resolution visual output and multi-channel distribution.",
      keyFeatures: [
        "Commercial & Editorial Photography",
        "Cinematography & Motion Direction",
        "Post-Production & Video Editing",
        "Bespoke Color Grading & Science",
        "Visual Storytelling & Promotional Content"
      ],
      features: [
        "Commercial & Editorial Photography",
        "Cinematography & Motion Direction",
        "Post-Production & Video Editing",
        "Bespoke Color Grading & Science",
        "Visual Storytelling & Promotional Content"
      ],
      technologies: {
        frontend: ["Visual Storytelling", "Cinematography"],
        backend: ["Post-Production", "Color Grading"]
      },
      status: "Active Development"
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAppProjects(): Project[] {
  return projects.filter((project) => project.isApp);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((project) => Boolean(project.caseStudy));
}

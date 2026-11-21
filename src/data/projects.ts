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
    | "Concept"
    | "Functional Prototype"
    | "Hackathon Submission / Working Demo"
    | "Advanced Functional Prototype"
    | "Live Showcase";
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
    id: "kitchen-ledger",
    title: "KITCHEN LEDGER",
    subtitle: "Offline-First Dormitory POS & Inventory System",
    tagline: "Offline-First Dormitory POS & Inventory System",
    description: "Specialized offline-first accounting, point-of-sale, and inventory management application prototype engineered for the dormitory kitchen of Pondok Multimedia Munzalan Indonesia (PMMI). Features client-side localStorage transactions, Capacitor filesystem receipt persistence, and PDF invoice generation.",
    category: "mobile-app",
    featured: true,
    year: "2026",
    status: "Functional Prototype",
    accentColor: "#10b981",
    accent: "#10b981",
    isApp: true,
    focus: ["Offline-First Systems", "Mobile Engineering", "Local Persistence", "Operational Utility"],
    stack: ["React 19", "Capacitor 8", "Filesystem API", "TypeScript", "Tailwind CSS"],
    media: {
      cover: assetPath("/assets/projects/kitchen-ledger-hero.png"),
      dashboardPreview: assetPath("/assets/projects/kitchen-ledger-hero.png"),
      aspectRatio: "16/10",
      orientation: "landscape",
      desktopMockups: [
        assetPath("/assets/projects/kitchen-ledger-hero.png")
      ]
    },
    caseStudy: {
      overview: "Kitchen Ledger is an operational offline-first mobile accounting and kitchen ledger application prototype engineered specifically for the internal dormitory kitchen of Pondok Multimedia Munzalan Indonesia (PMMI).",
      problem: "Dormitory kitchen transactions and raw ingredient purchases occurred in areas with intermittent or zero internet connectivity. Paper logs led to calculation discrepancies, inventory waste, and delayed expense reporting.",
      solution: "A hybrid mobile application prototype utilizing Capacitor 8 and client-side localStorage for immediate data persistence, with @capacitor/filesystem storing receipt photos locally and jsPDF generating printable invoice documents without requiring continuous cloud connectivity.",
      product: "An operational internal utility prototype featuring POS order recording, raw material stock tracking, expense categorization, and daily reconciliation reports.",
      design: "High-contrast dark UI optimized for rapid touch interaction in kitchen environments, featuring large numerical keys and glanceable financial totals.",
      development: "Engineered with React 19, TypeScript, Capacitor 8 runtime, localStorage state synchronization, and native filesystem photo caching.",
      technology: "React 19, Capacitor 8, Capacitor Filesystem, TypeScript, Tailwind CSS, Local Storage, jsPDF.",
      architecture: "Local-first client architecture operating over localStorage state and native filesystem photo storage, with exportable JSZip backup archives.",
      keyFeatures: [
        "Zero-latency Offline Transaction Logging",
        "Dormitory Meal & Raw Ingredient Inventory",
        "Daily Cash Balance & Expense Reconciliation",
        "Client-side PDF Invoice Generation",
        "Local Filesystem Receipt Photo Persistence"
      ],
      features: [
        "Zero-latency Offline Transaction Logging",
        "Dormitory Meal & Raw Ingredient Inventory",
        "Daily Cash Balance & Expense Reconciliation",
        "Client-side PDF Invoice Generation",
        "Local Filesystem Receipt Photo Persistence"
      ],
      technologies: {
        mobile: ["Capacitor 8", "React 19", "TypeScript"],
        backend: ["LocalStorage", "@capacitor/filesystem", "jsPDF"]
      },
      status: "Functional Prototype"
    }
  },
  {
    id: "signallens",
    title: "SIGNALLENS",
    subtitle: "Indonesian Market Financial Intelligence & Sentiment Engine",
    tagline: "Indonesian Market Financial Intelligence & Sentiment Engine",
    description: "Financial analysis platform and agentic investigation system engineered as a competition submission for the Sectors AI Hackathon 2026. Audits Indonesian IDX listed companies through deep quantitative metrics and real-time sentiment extraction.",
    category: "web-platform",
    featured: true,
    year: "2026",
    status: "Hackathon Submission / Working Demo",
    accentColor: "#3b82f6",
    accent: "#3b82f6",
    isApp: false,
    focus: ["Financial Intelligence", "AI Agents", "Next.js 15", "Quantitative Analysis"],
    stack: ["Next.js 15", "React 19", "TypeScript", "Sectors API", "OpenAI API", "Tailwind CSS"],
    media: {
      cover: assetPath("/assets/projects/kitchen-ledger-hero.png"),
      dashboardPreview: assetPath("/assets/projects/kitchen-ledger-hero.png"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    links: {
      github: "https://github.com/Demonz-30/signallens"
    },
    caseStudy: {
      overview: "SignalLens is a specialized market intelligence platform engineered as a competition submission for the Sectors AI Hackathon 2026, combining real-time IDX sector performance metrics with structured AI sentiment evaluation.",
      problem: "Retail investors and researchers struggle to synthesize disparate financial reports, quarterly filings, and corporate sentiment across hundreds of IDX listed equities.",
      solution: "An automated evidence-first investigation pipeline that connects directly to the Sectors Financial API, ingesting balance sheet ratios and evaluating corporate sentiment with LLM reasoning.",
      product: "A working hackathon demo featuring sector anomaly detection, company deep-dives, and automated falsification checks against market hype.",
      design: "Terminal-grade dark aesthetic emphasizing data legibility, responsive charts, and dense financial indicators.",
      development: "Built with Next.js 15 App Router, React 19, TypeScript, and server-side API integration caching Sectors API endpoints for low-latency queries.",
      technology: "Next.js 15, React 19, TypeScript, Sectors API, OpenAI API, Tailwind CSS.",
      architecture: "Server-side data orchestration pipeline caching financial metrics and streaming AI analysis directly to client views.",
      keyFeatures: [
        "Sectors Financial API Realtime Ingestion",
        "IDX Equity Financial Ratio Comparison",
        "Automated Narrative & Sentiment Extraction",
        "Outlier & Anomaly Detection Pipeline",
        "Evidence-first Financial Synthesis"
      ],
      features: [
        "Sectors Financial API Realtime Ingestion",
        "IDX Equity Financial Ratio Comparison",
        "Automated Narrative & Sentiment Extraction",
        "Outlier & Anomaly Detection Pipeline",
        "Evidence-first Financial Synthesis"
      ],
      technologies: {
        frontend: ["Next.js 15", "React 19", "Tailwind CSS"],
        backend: ["Sectors API", "OpenAI API", "TypeScript Server Actions"]
      },
      status: "Hackathon Submission / Working Demo"
    }
  },
  {
    id: "xemon-voice-command",
    title: "XEMON VOICE COMMAND",
    subtitle: "System-Level Android Voice Automation Assistant",
    tagline: "System-Level Android Voice Automation Assistant",
    description: "Advanced system-level Android voice automation assistant prototype featuring an overlay floating service, speech recognition, and Python NLP task processing for hands-free device management.",
    category: "ai-system",
    featured: false,
    year: "2026",
    status: "Advanced Functional Prototype",
    accentColor: "#8b5cf6",
    accent: "#8b5cf6",
    isApp: true,
    focus: ["System Automation", "Android Service", "Voice AI", "Python NLP"],
    stack: ["Android Kotlin", "Foreground Service", "Accessibility API", "Python NLP", "WebSockets"],
    media: {
      cover: assetPath("/assets/projects/hyperassist-dashboard.jpeg"),
      dashboardPreview: assetPath("/assets/projects/hyperassist-dashboard.jpeg"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    caseStudy: {
      overview: "Xemon Voice Command is an advanced functional Android prototype engineered to enable hands-free voice command execution over device functions using an active floating bubble interface.",
      problem: "Standard mobile voice assistants often require cloud lock-in, have high latency, and lack deep integration with local developer automation scripts.",
      solution: "A native Kotlin foreground service featuring an accessible overlay window, connected via local WebSockets to a lightweight Python NLP server for custom intent classification.",
      product: "A verified system automation prototype that operates over any Android app, capturing voice inputs and translating them into direct system actions via AccessibilityService.",
      design: "Minimal floating bubble UI designed to minimize screen occlusion while giving immediate visual feedback during audio capture.",
      development: "Developed using Android Kotlin, AccessibilityService APIs, and background Foreground Service life-cycle management.",
      technology: "Android Kotlin, AccessibilityService, Foreground Service, Python NLP, SpeechRecognition.",
      architecture: "Client-server bridge between Android Kotlin Native Service and local Python NLP processing daemon.",
      keyFeatures: [
        "Persistent Overlay Floating Bubble",
        "Low-latency Speech Recognition Pipeline",
        "Accessibility API Action Injection",
        "Custom Python Intent Parsing Bridge",
        "Configurable System Automation Shortcuts"
      ],
      features: [
        "Persistent Overlay Floating Bubble",
        "Low-latency Speech Recognition Pipeline",
        "Accessibility API Action Injection",
        "Custom Python Intent Parsing Bridge",
        "Configurable System Automation Shortcuts"
      ],
      technologies: {
        mobile: ["Android Kotlin", "AccessibilityService"],
        backend: ["Python NLP", "WebSockets"]
      },
      status: "Advanced Functional Prototype"
    }
  },
  {
    id: "finora",
    title: "FINORA",
    subtitle: "Personal Finance & Wealth Architecture Platform",
    tagline: "Personal Finance & Wealth Architecture Platform",
    description: "Personal financial planning and wealth management system featuring Product Requirement Documentation (PRD v1.0), high-fidelity UX wireframes, and cross-platform Flutter prototypes.",
    category: "mobile-app",
    featured: false,
    year: "2026",
    status: "Concept",
    accentColor: "#21e0ad",
    accent: "#21e0ad",
    isApp: true,
    focus: ["Product Engineering", "Mobile Architecture", "UI/UX Wireframing", "Financial Systems"],
    stack: ["Product Engineering", "PRD Architecture", "Figma UX", "Flutter", "Dart"],
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
      overview: "Finora is a comprehensive personal finance application concept and product architecture designed to streamline budgeting, investment tracking, and multi-wallet balance consolidation.",
      problem: "Individual financial tracking is often scattered across banking apps, physical notes, and complex spreadsheets without an intuitive visual overview of net wealth.",
      solution: "A structured mobile financial concept supported by detailed Product Requirement Documentation (PRD v1.0) and high-fidelity UX prototypes.",
      product: "A mobile financial management concept focusing on user ergonomics, transaction categorization, and clear portfolio breakdown.",
      design: "Modern dark financial UI emphasizing typographic hierarchy, high-contrast data visualization, and restrained emerald accent cues.",
      development: "Conceptualized and prototyped with Flutter and Dart, specifying local encrypted data storage and secure state management.",
      technology: "Product Architecture, PRD v1.0, Flutter, Dart, UI/UX Design System.",
      architecture: "Client-side financial calculation architecture with local-first persistence specification and clean state separation.",
      keyFeatures: [
        "Multi-wallet Balance Aggregation",
        "Categorized Expense & Income Tracking",
        "Visual Monthly Budget Limits",
        "Asset Allocation Overview",
        "High-legibility Dark Mode Interface"
      ],
      features: [
        "Multi-wallet Balance Aggregation",
        "Categorized Expense & Income Tracking",
        "Visual Monthly Budget Limits",
        "Asset Allocation Overview",
        "High-legibility Dark Mode Interface"
      ],
      technologies: {
        mobile: ["Flutter Prototype", "Dart"],
        backend: ["PRD Architecture", "State Specification"]
      },
      status: "Concept / Prototyping"
    }
  },
  {
    id: "hyperassist",
    title: "HYPERASSIST",
    subtitle: "Santri Productivity & Task Workflow Platform",
    tagline: "Santri Productivity & Task Workflow Platform",
    description: "Product design and productivity workflow concept tailored for santri environments, featuring structured daily schedules, task prioritization, and PRD v1.2 specifications.",
    category: "mobile-app",
    featured: false,
    year: "2026",
    status: "Concept",
    accentColor: "#06b6d4",
    accent: "#06b6d4",
    isApp: true,
    focus: ["Product Design", "PRD v1.2", "UX Architecture", "Flutter Prototype"],
    stack: ["Product Design", "PRD v1.2", "UX Architecture", "Flutter", "Firebase"],
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
      overview: "HyperAssist is a productivity and schedule coordination platform concept engineered to help santri and students organize educational agendas, daily routines, and shared duties.",
      problem: "Santri daily schedules involve structured prayer, recitation, and academic sessions that traditional generic calendar apps fail to represent intuitively.",
      solution: "A tailored mobile assistant application concept featuring dedicated timetable blocks, duty rotations, and notification triggers.",
      product: "A mobile utility concept supported by complete PRD v1.2 documentation and interface prototypes.",
      design: "Clean, high-density dashboard featuring quick-toggle status cards and prayer time synchronization markers.",
      development: "Prototyped in Flutter with planned Firebase Firestore synchronization for shared schedule updates.",
      technology: "Product Specifications, PRD v1.2, Flutter, Dart, UI/UX System.",
      architecture: "Relational schedule models designed for offline cacheability with periodic background sync.",
      keyFeatures: [
        "Santri Daily Routine & Timetable Tracker",
        "Assignment & Duty Rotation Reminders",
        "High-contrast Schedule Cards",
        "Offline-first Timetable Access",
        "Clear Status & Progress Markers"
      ],
      features: [
        "Santri Daily Routine & Timetable Tracker",
        "Assignment & Duty Rotation Reminders",
        "High-contrast Schedule Cards",
        "Offline-first Timetable Access",
        "Clear Status & Progress Markers"
      ],
      technologies: {
        mobile: ["Flutter", "Dart"],
        backend: ["Firebase Firestore Spec", "Local Cache"]
      },
      status: "Concept / PRD v1.2"
    }
  },
  {
    id: "demonz-coffee",
    title: "DEMONZ COFFEE",
    subtitle: "Artisan Coffee Brand & Live Digital Showcase",
    tagline: "Artisan Coffee Brand & Live Digital Showcase",
    description: "Artisan coffee brand and live digital ordering showcase at demonzcoffe.web.id, combining Lampung Robusta bean formulation, packaging typography, commercial photography, and direct-to-consumer Shopee and WhatsApp ordering.",
    category: "brand-business",
    featured: true,
    year: "2026",
    status: "Live Showcase",
    accentColor: "#f59e0b",
    accent: "#f59e0b",
    isApp: false,
    focus: ["Brand Architecture", "Commercial Photography", "E-Commerce Integration", "Web Presence"],
    stack: ["HTML5 / CSS3", "JavaScript", "Brand Architecture", "Commercial Photography", "E-Commerce"],
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
      overview: "Demonz Coffee is a live artisanal coffee brand and web showcase originating in Lampung, integrating bean roast formulation, packaging typography, commercial photography, and an active web ordering presence.",
      problem: "Artisan coffee ventures require strong visual differentiation and low-friction purchasing channels to convey bean quality and serve direct consumers.",
      solution: "A responsive digital showcase featuring high-resolution product photography, structured brand storytelling, direct WhatsApp ordering, and Shopee checkout integration, with Three.js WebGL canvas experiments explored in development.",
      product: "A live production website at demonzcoffe.web.id integrated with physical packaging and direct customer ordering channels.",
      design: "Tactile, warm visual palette combining rich coffee hues, structured grotesque typography, and minimalist product framing.",
      development: "Developed with responsive HTML5/CSS3 and JavaScript, with Three.js 3D WebGL staging explored in code history.",
      technology: "JavaScript, HTML5/CSS3, Commercial Food Photography, E-Commerce Integration, Three.js (Development Experiment).",
      architecture: "Static web storefront with direct Shopee marketplace checkout and interactive WhatsApp order generation.",
      keyFeatures: [
        "Original Lampung Robusta Bean Formulation",
        "High-resolution Commercial Product Photography",
        "Direct Shopee & WhatsApp Customer Ordering",
        "Brand Identity & Tactile Packaging Design",
        "Three.js 3D WebGL Staging & Experiments"
      ],
      features: [
        "Original Lampung Robusta Bean Formulation",
        "High-resolution Commercial Product Photography",
        "Direct Shopee & WhatsApp Customer Ordering",
        "Brand Identity & Tactile Packaging Design",
        "Three.js 3D WebGL Staging & Experiments"
      ],
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Three.js (Dev Experiment)"],
        backend: ["Shopee Storefront", "WhatsApp API"]
      },
      status: "Live Showcase"
    }
  },
  {
    id: "paskas-brand-system",
    title: "PASKAS BAHAGIA BRAND IDENTITY",
    subtitle: "Collaborative Brand Guidelines & Visual System",
    tagline: "Collaborative Brand Guidelines & Visual System",
    description: "Comprehensive 98-page brand identity guideline manual and social media design system developed collaboratively with the Pondok Multimedia Munzalan Indonesia (PMMI) media team.",
    category: "brand-business",
    featured: false,
    year: "2026",
    status: "Shipped",
    accentColor: "#ec4899",
    accent: "#ec4899",
    isApp: false,
    focus: ["Brand Identity", "Design System", "Editorial Design", "Typography"],
    stack: ["Brand Identity", "Design System", "Editorial Design", "Typography", "PMMI Collaboration"],
    media: {
      cover: assetPath("/assets/photography/creative-multimedia.webp"),
      coverWebp: assetPath("/assets/photography/creative-multimedia.webp"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    caseStudy: {
      overview: "PASKAS Bahagia Brand Identity is a comprehensive 98-page brand guidelines manual and visual communication framework created collaboratively with the Pondok Multimedia Munzalan Indonesia (PMMI) media team.",
      problem: "Social campaigns and event promotions across regional chapters lacked visual consistency, clear color specifications, and uniform typography rules.",
      solution: "A standardized design system detailing logo anatomy, clear space, primary/secondary color palettes, typography scales, and print banner layouts.",
      product: "A 98-page vector brand book, social media asset toolkit, and verified print-ready banners.",
      design: "Warm, community-centric visual identity utilizing vibrant tones, accessible contrast, and clean layout grids.",
      development: "Authored in Adobe Illustrator and Figma, standardizing asset exports for both print production and digital publishing.",
      technology: "Vector Design, Typography Hierarchy, Print Layout Standards, Color Science.",
      architecture: "Modular brand token architecture establishing clear guidelines for regional volunteer media production.",
      keyFeatures: [
        "Comprehensive 98-page Brand Manual",
        "Logo Anatomy & Safe-zone Specifications",
        "Multi-channel Social Media Templates",
        "Print-ready Large Format Banner Standards",
        "Collaborative PMMI Media Team Attribution"
      ],
      features: [
        "Comprehensive 98-page Brand Manual",
        "Logo Anatomy & Safe-zone Specifications",
        "Multi-channel Social Media Templates",
        "Print-ready Large Format Banner Standards",
        "Collaborative PMMI Media Team Attribution"
      ],
      technologies: {
        frontend: ["Design Systems", "Typography Tokens"],
        backend: ["Print Specifications", "Asset Exports"]
      },
      status: "Shipped / Active Standard"
    }
  },
  {
    id: "creative-multimedia",
    title: "CREATIVE MULTIMEDIA & DOCUMENTARY",
    subtitle: "Cinematography, Color Grading & AI Enhancement",
    tagline: "Cinematography, Color Grading & AI Enhancement",
    description: "Documentary video production for PMMI events, cinematic color grading in DaVinci Resolve, commercial photography, and AI-assisted video super-resolution workflows.",
    category: "creative-direction",
    featured: false,
    year: "2026",
    status: "Shipped",
    accentColor: "#a855f7",
    accent: "#a855f7",
    isApp: false,
    focus: ["Cinematography", "DaVinci Resolve", "Color Grading", "Editorial Photography"],
    stack: ["Cinematography", "DaVinci Resolve", "Color Grading", "Editorial Photography", "AI Upscaling"],
    media: {
      cover: assetPath("/assets/photography/creative-multimedia.webp"),
      coverWebp: assetPath("/assets/photography/creative-multimedia.webp"),
      aspectRatio: "16/10",
      orientation: "landscape"
    },
    caseStudy: {
      overview: "Creative Multimedia is an ongoing production archive encompassing event documentary videography, cinematic color grading, editorial photography, and AI video restoration.",
      problem: "Capturing fast-paced institutional events while maintaining cinema-grade lighting, crisp audio, and high narrative coherence across multiple distribution formats.",
      solution: "A disciplined media production pipeline: structured shot lists, calibrated picture profiles, DaVinci Resolve color node trees, and AI frame upscaling.",
      product: "A versatile visual portfolio spanning short-form educational reels, 1080p60 documentary masters, and commercial food photography.",
      design: "Cinematic realism characterized by natural skin tones, intentional contrast curves, and balanced compositional framing.",
      development: "End-to-end post-production workflows spanning multi-cam editing, loudness normalization, and export optimization.",
      technology: "Commercial Photography, Cinematography, DaVinci Resolve, Color Science, AI Super-Resolution.",
      architecture: "Structured asset pipeline for 4K raw acquisition downsampled and graded for multi-platform delivery.",
      keyFeatures: [
        "PMMI Event Video Documentaries",
        "DaVinci Resolve Cinematic Color Grading",
        "Commercial Food & Product Photography",
        "AI-assisted Video Super-Resolution & Denoising",
        "Short-form Vertical Content Optimization"
      ],
      features: [
        "PMMI Event Video Documentaries",
        "DaVinci Resolve Cinematic Color Grading",
        "Commercial Food & Product Photography",
        "AI-assisted Video Super-Resolution & Denoising",
        "Short-form Vertical Content Optimization"
      ],
      technologies: {
        frontend: ["Cinematography", "Visual Direction"],
        backend: ["DaVinci Resolve", "Post-Production", "Color Science"]
      },
      status: "Shipped / Continuous Production"
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

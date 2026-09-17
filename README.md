# DEMONZDEV Portfolio v2

Personal portfolio for DEMONZDEV, showcasing multidisciplinary work spanning product engineering, modern web applications, mobile architectures, creative technology, multimedia direction, and AI-assisted workflows.

## Live Website

Production deployment: [https://demonz-portfolio.pages.dev](https://demonz-portfolio.pages.dev)

The production application is statically generated and hosted globally via Cloudflare Pages.

## About the Project

DEMONZDEV Portfolio v2 is built as an editorial digital portfolio that balances technical engineering rigor with visual expression. The interface adheres to a dark, cyber-minimalist aesthetic characterized by:

- Near-black backgrounds with high-contrast typographical hierarchy
- Restrained deep purple accent highlights
- Editorial layout compositions inspired by technical index systems
- Coordinated kinetic motion and scroll-driven interactions
- Responsive layouts tailored for desktop, tablet, and mobile viewports

## Featured Work

The portfolio presents production software, systems architecture, and real-world ventures:

- **FINORA** (`/work/finora`)  
  *Personal Finance & Wealth Management Platform*  
  Mobile application focused on financial clarity, budgeting workflows, and asset allocation visualization through structured data presentation.  
  *Category:* Mobile Application | *Focus:* Product Engineering, Mobile Application, UI/UX Architecture, Financial Systems

- **GIZVANA** (`/work/gizvana`)  
  *Smart Nutrition & Operations Platform*  
  Native Android operations platform providing offline-first data entry, inventory tracking, distribution monitoring, and automated reporting.  
  *Category:* Mobile Application | *Stack:* Android SDK, Kotlin, SQLite/Room, REST APIs, UI/UX

- **HYPERASSIST** (`/work/hyperassist`)  
  *Hyperlocal Micro-Service Marketplace*  
  Cross-platform mobile application concept connecting immediate local task requirements with nearby helpers using AI task parsing and real-time geolocation matching.  
  *Category:* Mobile Application | *Stack:* Flutter, Dart, Firebase Firestore, Firebase Auth, AI Matching Engine

- **JADWALKU** (`/work/jadwalku`)  
  *Smart Academic Schedule & Task Platform*  
  Academic scheduling and daily assignment management application with real-time class timetable tracking, bell schedules, and offline-first local storage.  
  *Category:* Mobile Application | *Stack:* Mobile Architecture, Schedule Engine, Local Persistence, UI/UX Design

- **DEMONZ COFFEE** (`/work/demonz-coffee`)  
  *Real-world Coffee Business*  
  Commercial brand venture combining roast formulation, packaging design, commercial photography, digital web presence ([demonzcoffe.web.id](https://demonzcoffe.web.id)), and content marketing.  
  *Category:* Brand & Business | *Focus:* Product Development, Brand Architecture, Commercial Photography, Web Presence

- **CREATIVE MULTIMEDIA** (`/work/creative-multimedia`)  
  *Visual Storytelling Experiments*  
  Multidisciplinary production pipeline covering commercial photography, cinematography, post-production video editing, and color grading science.  
  *Category:* Creative Direction | *Focus:* Commercial Photography, Cinematography, Video Editing, Color Grading

## Creative

The portfolio maintains dedicated creative archives documenting visual and experimental work:

- **Photography** (`/creative/photography`)  
  Commercial product staging, origin collateral studies, landscape compositions, architecture, and botanical detail studies with comprehensive technical camera and lighting metadata.
- **Videography** (`/creative/videography`)  
  Brand motion reels, pacing studies, and promotional video production focused on dynamic rhythm and cinematic framing.
- **Creative Code & Experiments** (`/creative/creative-code`, `/experiments`)  
  Computational visual studies exploring particle dynamics, algorithmic grid coordinates, real-time GLSL fragment shaders, and interactive 3D WebGL artifacts.

## Tech Stack

The codebase is built on modern web and graphics technologies:

- **Framework & Runtime:** Next.js 16.3 (App Router with Turbopack), React 19, TypeScript 5
- **Styling & Design System:** Tailwind CSS v4, PostCSS
- **Animation & Choreography:** GSAP 3.15, ScrollTrigger, `@gsap/react`
- **Smooth Scrolling:** Lenis 1.3
- **3D Graphics & Canvas:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Icons & Primitives:** Lucide React, clsx, tailwind-merge
- **Image Processing & Build:** Sharp, ESLint 9
- **Deployment & Edge Hosting:** Cloudflare Pages, Wrangler CLI

## Project Structure

```
demonz-site/
├── public/
│   └── assets/
│       ├── brand/           # Brand marks and monograms
│       ├── media/           # General static media assets
│       ├── photography/     # Photography archive assets
│       ├── projects/        # Project mockups and covers
│       └── videos/          # Showreels and background video loops
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts, metadata)
│   │   ├── about/           # Editorial about and philosophy page
│   │   ├── contact/         # Contact dock and communication channels
│   │   ├── creative/        # Creative archives (photography, videography, creative-code)
│   │   ├── experiments/     # Interactive visual experiments playground
│   │   ├── work/            # Work directory and [id] case study routes
│   │   ├── globals.css      # Global Tailwind styling and typography layers
│   │   └── layout.tsx       # Root layout with fonts and hydration handling
│   ├── components/
│   │   ├── canvas/          # 3D scenes and Three.js canvas components
│   │   ├── case-study/      # Case study motion containers and layout blocks
│   │   ├── layout/          # Global navigation, footer, transitions, scroll provider
│   │   ├── sections/        # Page sections (Hero, About, Work, Contact, etc.)
│   │   └── ui/              # Interactive primitives (custom cursor, magnetic button)
│   ├── data/                # Structured and typed data sources (projects, creative, capabilities)
│   └── lib/                 # Shared utilities and transition link wrappers
├── next.config.ts           # Next.js static export configuration
├── package.json             # Scripts and dependencies
└── tsconfig.json            # TypeScript configuration
```

## Development

### Prerequisites

- Node.js 20 or later
- npm (or compatible package manager)

### Installation

Install project dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

Generate the static export build:

```bash
npm run build
```

This compiles TypeScript, executes static page generation for all routes, and exports the optimized static files into the `out/` directory.

### Code Quality

Run ESLint to check for linting errors:

```bash
npm run lint
```

## Routes

The application exposes the following key public routes:

- `/` - Main landing page (Hero, Selected Work, Capabilities, Lab Teaser, About Summary, Contact)
- `/about` - About, philosophy, disciplines, methodology, and collaboration process
- `/work` - Directory of featured engineering and business projects
- `/work/[id]` - Dedicated case studies (`finora`, `gizvana`, `hyperassist`, `jadwalku`, `demonz-coffee`, `creative-multimedia`)
- `/creative` - Creative directory overview
- `/creative/photography` - Photography portfolio and collection gallery
- `/creative/photography/[slug]` - Deep-dive photography entry pages
- `/creative/videography` - Videography and motion showcase
- `/creative/videography/[slug]` - Videography detail showcase (`demonz-motion-reel`)
- `/creative/creative-code` - Creative code and visual computing experiments
- `/creative/creative-code/[slug]` - Computational visual experiment detail
- `/experiments` - Interactive laboratory and generative playground
- `/contact` - Direct contact channels, interactive dock, and collaboration inquiries

## Deployment

The production website is deployed on Cloudflare Pages as a fully static site:

- Next.js is configured with `output: "export"` in `next.config.ts`, generating static HTML, CSS, JavaScript, and pre-rendered assets in `out/`.
- Deployments are served via Cloudflare's global edge network.
- Production deployments target the `demonz-portfolio` Pages project on the `master` branch.
- Production canonical URL: [https://demonz-portfolio.pages.dev](https://demonz-portfolio.pages.dev)

## Notes

- **Static Export Architecture**: All pages and dynamic parameters (`generateStaticParams`) are pre-rendered at build time, ensuring sub-second response times without server runtime dependencies.
- **Scroll & Kinetic Motion**: Smooth scrolling is managed via Lenis and synced with GSAP ScrollTrigger for consistent performance across high-refresh displays.
- **Browser Translation Compatibility**: Root document attributes and hydration flags are structured to allow native browser translation tools (such as Google Chrome Translate) to translate editorial copy freely while safeguarding dynamic typewriter loops and brand identifiers against DOM corruption.

## License

No license file is currently provided in this repository. All rights reserved. The source code, visual design, photography, video assets, and branding materials are proprietary to DEMONZDEV.

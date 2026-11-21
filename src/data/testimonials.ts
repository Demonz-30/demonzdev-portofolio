export interface CollaborationRecord {
  id: string;
  context: string;
  role: string;
  organization: string;
  deliverables: string[];
  attribution: string;
}

export const institutionalCollaborations: CollaborationRecord[] = [
  {
    id: "pmmi-collaboration",
    context:
      "Core media contribution, internal tool engineering, and visual branding during santri khidmah at Pondok Multimedia Munzalan Indonesia.",
    role: "Internal Tooling & Media Creator",
    organization: "Pondok Multimedia Munzalan Indonesia (PMMI)",
    deliverables: [
      "Kitchen Ledger: Offline-first dormitory kitchen POS & inventory system",
      "PASKAS Bahagia: 98-page brand identity guideline & print system",
      "Multimedia: Event documentary video production & photography",
    ],
    attribution: "Collaborative Santri Khidmah & Internal Operations",
  },
  {
    id: "sectors-hackathon",
    context:
      "Rapid prototyping and full-stack implementation for the Sectors AI Hackathon 2026, creating an Indonesian equity sentiment and outlier detection tool.",
    role: "Full-Stack Engineer",
    organization: "Sectors AI Hackathon 2026",
    deliverables: [
      "SignalLens: Next.js 15 App Router platform with AI analysis",
      "Sectors Financial API integration for IDX market indicators",
      "Structured evidence-first financial reporting pipeline",
    ],
    attribution: "Competition Engineering Submission",
  },
  {
    id: "demonz-coffee-brand",
    context:
      "Real-world business venture integrating local Robusta coffee formulation, commercial product photography, and 3D web showcase.",
    role: "Founder & Creative Technologist",
    organization: "Demonz Coffee Venture",
    deliverables: [
      "Interactive 3D Three.js showcase at demonzcoffe.web.id",
      "Packaging typography and brand identity assets",
      "Commercial product photography & content distribution",
    ],
    attribution: "Independent Product & Business Venture",
  },
];

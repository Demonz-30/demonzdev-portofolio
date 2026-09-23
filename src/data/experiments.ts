import { assetPath } from "@/lib/paths";
export interface ExperimentItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  description: string;
  image: string | null;
  href: string;
}

export const experimentsData: ExperimentItem[] = [
  {
    id: "01",
    title: "PARTICLE FIELD",
    tag: "Interactive / Canvas",
    desc: "Self-organizing particle dynamic system responding to real-time cursor velocity and magnetic force fields.",
    description: "Self-organizing particle dynamic system responding to real-time cursor velocity and magnetic force fields.",
    image: null,
    href: "/creative/creative-code",
  },
  {
    id: "02",
    title: "GENERATIVE GRID",
    tag: "Interactive / WebGL",
    desc: "Algorithmic coordinate matrix computing geometric transformations and wave disturbances via GPU shaders.",
    description: "Algorithmic coordinate matrix computing geometric transformations and wave disturbances via GPU shaders.",
    image: assetPath("/assets/photography/creative-code.jpeg"),
    href: "/creative/creative-code",
  },
  {
    id: "03",
    title: "LIQUID FORM",
    tag: "Shader / WebGL",
    desc: "Viscous fluid simulations and procedural noise distortion rendered via real-time GLSL fragment shaders.",
    description: "Viscous fluid simulations and procedural noise distortion rendered via real-time GLSL fragment shaders.",
    image: null,
    href: "/creative/creative-code",
  },
  {
    id: "04",
    title: "DEMONZ OBJECT",
    tag: "Three.js / 3D",
    desc: "Kinetic polygonal artifact featuring reactive lighting models, normal displacement, and orbital physics.",
    description: "Kinetic polygonal artifact featuring reactive lighting models, normal displacement, and orbital physics.",
    image: null,
    href: "/creative/creative-code",
  },
];


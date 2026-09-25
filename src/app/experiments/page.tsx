import { ExperimentsPlayground } from "@/components/sections/ExperimentsPlayground";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export const metadata: Metadata = routeMetadata("/experiments/", {
  title: "Experiments Playground",
  description:
    "Technical creativity, exploring generative algorithms, shaders, motion systems, and computational fragments.",
  openGraph: {
    title: "Experiments Playground | DEMONZDEV",
    description:
      "Technical creativity, exploring generative algorithms, shaders, motion systems, and computational fragments.",
  },
});

export default function ExperimentsPage() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden min-h-screen">
      <ExperimentsPlayground />
    </div>
  );
}

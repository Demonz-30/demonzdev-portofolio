import { Projects } from "@/components/sections/Projects";
import type { Metadata } from "next";

import { routeMetadata } from "@/lib/metadata";

export const metadata: Metadata = routeMetadata("/work/", {
  title: "Selected Work",
  description:
    "Featured digital products, mobile platforms, and interactive engineering systems built by DEMONZDEV.",
  openGraph: {
    title: "Selected Work | DEMONZDEV",
    description:
      "Featured digital products, mobile platforms, and interactive engineering systems built by DEMONZDEV.",
  },
});

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden min-h-screen">
      <Projects />
    </div>
  );
}

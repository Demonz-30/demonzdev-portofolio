import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Direct channels for software engineering, product development, creative technology, and business collaboration with DEMONZDEV.",
  openGraph: {
    title: "Contact & Collaboration | DEMONZDEV",
    description:
      "Direct channels for software engineering, product development, creative technology, and business collaboration with DEMONZDEV.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden min-h-screen">
      <Contact />
    </div>
  );
}

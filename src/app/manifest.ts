import type { MetadataRoute } from "next";

import { assetPath } from "@/lib/paths";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DEMONZDEV Portfolio",
    short_name: "DEMONZDEV",
    description:
      "Building digital products, mobile platforms, and interactive systems where engineering depth meets creative execution.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#000000",
    theme_color: "#030305",
    icons: [
      {
        src: assetPath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: assetPath("/assets/brand/demonz-logo.jpg"),
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}


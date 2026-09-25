import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/** Build route-specific canonical and Open Graph URLs from the site URL. */
export function routeMetadata(path: string, metadata: Metadata): Metadata {
  const url = new URL(path, `${siteConfig.url}/`).toString();

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: url,
    },
    openGraph: {
      ...metadata.openGraph,
      url,
    },
  };
}

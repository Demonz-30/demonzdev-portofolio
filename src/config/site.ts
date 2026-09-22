/**
 * Site Configuration & Canonical URL Source of Truth
 * 
 * Supports dynamic configuration via environment variables:
 * - NEXT_PUBLIC_SITE_URL (e.g., https://demonzdev.com or https://demonz-portfolio.pages.dev)
 * 
 * When migrating to a custom domain, update NEXT_PUBLIC_SITE_URL in the deployment
 * environment or update the fallback below.
 */

const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  // Production fallback on Cloudflare Pages
  return "https://demonz-portfolio.pages.dev";
};

export const siteConfig = {
  name: "DEMONZDEV",
  title: "DEMONZDEV | Creative Technologist & Product Engineer",
  tagline: "Creative Technologist & Product Engineer",
  description:
    "Building digital products, mobile platforms, and interactive systems where engineering depth meets creative execution.",
  url: getSiteUrl(),
  ogImage: "/assets/brand/demonz-logo.jpg",
  author: "DEMONZ",
  links: {
    github: "https://github.com/Demonz-30",
    email: "demonzdev01@gmail.com",
    instagram: "https://instagram.com/demonz.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;


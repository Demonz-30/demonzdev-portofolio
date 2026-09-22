import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getCaseStudyProjects } from "@/data/projects";
import {
  getPhotographyWorks,
  getVideographyWorks,
  getCreativeCodeWorks,
} from "@/data/creative";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Core Landing Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creative`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creative/photography`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/creative/videography`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/creative/creative-code`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/experiments`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Selected Work Case Studies
  const caseStudyRoutes: MetadataRoute.Sitemap = getCaseStudyProjects().map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Photography Works
  const photographyRoutes: MetadataRoute.Sitemap = getPhotographyWorks().map((work) => ({
    url: `${baseUrl}/creative/photography/${work.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Videography Works
  const videographyRoutes: MetadataRoute.Sitemap = getVideographyWorks().map((work) => ({
    url: `${baseUrl}/creative/videography/${work.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Creative Code Works
  const creativeCodeRoutes: MetadataRoute.Sitemap = getCreativeCodeWorks().map((work) => ({
    url: `${baseUrl}/creative/creative-code/${work.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...caseStudyRoutes,
    ...photographyRoutes,
    ...videographyRoutes,
    ...creativeCodeRoutes,
  ];
}


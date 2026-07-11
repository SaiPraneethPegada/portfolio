import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";
import { flagshipProjects, infrastructureProjects } from "@/lib/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/projects", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  const projectRoutes = [...flagshipProjects, ...infrastructureProjects].map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
  }));

  return [...staticRoutes, ...projectRoutes];
}

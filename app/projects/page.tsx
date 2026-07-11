import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";
import { flagshipProjects, infrastructureProjects, earlyProjects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Flagship healthcare AI platform work, shared infrastructure, and early personal projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Projects" className="mb-12" />
      </Reveal>

      <div className="grid grid-cols-1 gap-4 mb-4">
        {flagshipProjects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} size="large" />
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {infrastructureProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70} className="h-full">
            <ProjectCard project={project} size="medium" />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 mb-4">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
            Early projects
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {earlyProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60} className="h-full">
            <ProjectCard project={project} size="small" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

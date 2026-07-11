import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/shared/brand-icons";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { TechBadgeList } from "./tech-badge-list";
import type { Project } from "@/lib/content/types";

export function ProjectCard({
  project,
  size = "medium",
}: {
  project: Project;
  size?: "large" | "medium" | "small";
}) {
  if (project.tier === "early") {
    return (
      <Card className="p-0 gap-0 overflow-hidden group">
        {project.image ? (
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
        ) : null}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-sm">{project.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-3">{project.summary}</p>
          <TechBadgeList tech={project.tech} className="flex flex-wrap gap-1 mt-1" />
          <div className="flex items-center gap-3 mt-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline cursor-pointer"
              >
                {link.label === "GitHub" ? (
                  <GithubIcon className="size-3.5" />
                ) : (
                  <ExternalLink className="size-3.5" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  const isLarge = size === "large";

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <SpotlightCard className="rounded-xl">
        <Card
          className={`h-full p-6 sm:p-8 gap-4 transition-shadow duration-200 hover:shadow-lg cursor-pointer ${
            isLarge ? "sm:p-10" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              {project.tier === "flagship" ? (
                <Badge className="font-mono text-xs mb-2">Flagship</Badge>
              ) : null}
              <h3 className={`font-bold ${isLarge ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                {project.title}
              </h3>
              {project.role ? (
                <p className="text-sm text-muted-foreground mt-1">{project.role}</p>
              ) : null}
            </div>
          </div>
          <p className={`text-muted-foreground ${isLarge ? "text-base" : "text-sm"}`}>
            {project.summary}
          </p>
          {project.impact && project.impact.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground marker:text-primary">
              {project.impact.slice(0, isLarge ? 3 : 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <TechBadgeList tech={project.tech.slice(0, isLarge ? 8 : 5)} />
          <span className="inline-flex items-center gap-1 text-sm text-primary mt-auto pt-2">
            Read case study
            <ArrowRight className="size-3.5" />
          </span>
        </Card>
      </SpotlightCard>
    </Link>
  );
}

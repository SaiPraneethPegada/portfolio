import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TechBadgeList } from "./tech-badge-list";
import { PlatformArchitectureDiagram } from "./platform-architecture-diagram";
import { SimpleFlowDiagram, type SimpleFlowNode } from "./simple-flow-diagram";
import { Reveal } from "@/components/shared/reveal";
import type { Project } from "@/lib/content/types";

const infraDiagrams: Record<string, { nodes: SimpleFlowNode[]; caption?: string }> = {
  "shared-core-library": {
    nodes: [
      { label: "Two Production Services", sublabel: "Clinical AI Platform · Patient Portal" },
      { label: "Shared Core Library", sublabel: "Shared Python library", accent: true },
      { label: "AWS CodeArtifact", sublabel: "Versioned releases" },
    ],
    caption: "CI-gated version bumps run before every release.",
  },
  "crm-ehr-integration": {
    nodes: [
      { label: "GoHighLevel CRM", sublabel: "Surveys · intake forms" },
      { label: "Webhook Service", sublabel: "FastAPI on AWS Lambda", accent: true },
      { label: "Cerbo EHR", sublabel: "Clinical encounters" },
    ],
    caption: "Also processes lab-result webhooks.",
  },
  "patient-portal-frontend": {
    nodes: [
      { label: "Founding Scaffold", sublabel: "Next.js 16 · Design system · PWA", accent: true },
      { label: "5-Engineer Team", sublabel: "Built features on top" },
      { label: "AWS Amplify", sublabel: "CI/CD to production" },
    ],
  },
};

export function CaseStudyDetail({ project }: { project: Project }) {
  const compact = project.tier === "infrastructure";
  const infraDiagram = infraDiagrams[project.slug];

  return (
    <article className={`mx-auto max-w-3xl px-4 sm:px-6 ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24"}`}>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="size-3.5" />
        Back to projects
      </Link>

      <Reveal>
        {project.tier === "flagship" ? (
          <Badge className="font-mono text-xs mb-3">Flagship</Badge>
        ) : (
          <Badge variant="secondary" className="font-mono text-xs mb-3">
            Infrastructure
          </Badge>
        )}

        <h1 className={`font-bold tracking-tight mb-2 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>
          {project.title}
        </h1>
        {project.role ? <p className="text-muted-foreground mb-1">{project.role}</p> : null}
        {project.period ? (
          <p className="font-mono text-sm text-muted-foreground mb-6">{project.period}</p>
        ) : null}

        <p className={`text-muted-foreground mb-8 ${compact ? "text-base" : "text-lg"}`}>
          {project.summary}
        </p>

        <TechBadgeList tech={project.tech} className="flex flex-wrap gap-1.5" />
      </Reveal>

      {project.slug === "clinical-ai-platform" ? (
        <Reveal delay={60}>
          <PlatformArchitectureDiagram />
        </Reveal>
      ) : infraDiagram ? (
        <Reveal delay={60}>
          <SimpleFlowDiagram nodes={infraDiagram.nodes} caption={infraDiagram.caption} />
        </Reveal>
      ) : null}

      <div className={compact ? "space-y-6 mt-10" : "space-y-10 mt-10"}>
        {project.sections?.map((section, i) => (
          <Reveal key={section.heading} delay={i === 0 ? 0 : 40}>
            {i > 0 && <Separator className="mb-6" />}
            <h2 className={`font-semibold mb-3 ${compact ? "text-lg" : "text-xl"}`}>
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </article>
  );
}

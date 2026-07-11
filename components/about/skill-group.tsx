import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { skills } from "@/lib/content/skills";

export function SkillGroups() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <Reveal>
        <SectionHeading eyebrow="Technical skills" title="What I work with" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant={skill.featured ? "default" : "secondary"}
                  className="font-mono text-xs font-normal"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

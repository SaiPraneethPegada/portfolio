import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { experience } from "@/lib/content/experience";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="Career" title="Where I've worked" />
      </Reveal>
      <div className="flex flex-col gap-4">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 70}>
            <SpotlightCard className="rounded-xl">
              <Card className="p-5 sm:p-6 gap-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {entry.role} · {entry.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{entry.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {entry.current ? (
                      <Badge className="font-mono text-xs">Current</Badge>
                    ) : null}
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                      {entry.period}
                    </span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground marker:text-primary">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {entry.tech && entry.tech.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {entry.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </Card>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

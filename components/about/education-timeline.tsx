import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { education, certifications } from "@/lib/content/education";

export function EducationTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & certification" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        <Reveal>
          <SpotlightCard className="rounded-xl h-full">
            <Card className="p-5 gap-3 h-full">
              <h3 className="text-sm font-semibold text-muted-foreground">Education</h3>
              <div className="flex flex-col gap-4">
                {education.map((entry, i) => (
                  <div key={entry.institution}>
                    {i > 0 && <Separator className="mb-4" />}
                    <p className="font-medium">{entry.credential}</p>
                    <p className="text-sm text-muted-foreground">
                      {entry.institution} · {entry.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {entry.period} · {entry.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={80}>
          <SpotlightCard className="rounded-xl h-full">
            <Card className="p-5 gap-3 h-full">
              <h3 className="text-sm font-semibold text-muted-foreground">Certification</h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-2">{cert.period}</p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View credential
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

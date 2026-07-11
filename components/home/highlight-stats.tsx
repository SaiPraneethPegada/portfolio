import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { CountUp } from "@/components/shared/count-up";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "~17x", label: "Faster document processing after a pipeline rewrite" },
  { value: "2", label: "Shared infrastructure codebases created" },
  { value: "187", label: "Tests in the bvital-core library" },
];

export function HighlightStats() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <SpotlightCard className="rounded-xl h-full">
              <Card className="p-4 sm:p-5 gap-1 h-full">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </Card>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

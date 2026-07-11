import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { skills } from "@/lib/content/skills";

const featured = skills.flatMap((group) => group.skills.filter((s) => s.featured));

export function FeaturedSkills() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-24">
      <Reveal>
        <SectionHeading eyebrow="Core stack" title="What I build with" />
        <div className="flex flex-wrap gap-2 mb-6">
          {featured.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="font-mono text-sm px-3 py-1">
              {skill.name}
            </Badge>
          ))}
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          See the full breakdown
          <ArrowRight className="size-3.5" />
        </Link>
      </Reveal>
    </section>
  );
}

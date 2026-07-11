import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { ResumeButton } from "@/components/shared/resume-button";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { site } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Reveal>
        <p className="font-mono text-sm text-primary mb-4">Hi, I&apos;m</p>
        <h1 className="text-glow text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          {site.name}
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl">
          {site.role} — {site.tagline}
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          {site.bio}
        </p>
      </Reveal>
      <Reveal delay={220}>
        <div className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button render={<Link href="/projects" />} nativeButton={false}>
              View Projects
              <ArrowRight className="size-4" />
            </Button>
          </Magnetic>
          <Magnetic>
            <ResumeButton variant="outline" />
          </Magnetic>
          <SocialLinks className="flex items-center gap-1 ml-2" />
        </div>
      </Reveal>
    </section>
  );
}

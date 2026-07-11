import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/content/site";

export function Bio() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-12 sm:pt-20">
      <Reveal>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <Image
            src="/images/profile.jpg"
            alt={site.name}
            width={240}
            height={240}
            className="rounded-2xl object-cover size-32 sm:size-40 shrink-0"
            priority
          />
          <div>
            <p className="font-mono text-sm text-primary mb-2">About me</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {site.name}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {site.bio}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

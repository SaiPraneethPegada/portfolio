import { Hero } from "@/components/home/hero";
import { FeaturedSkills } from "@/components/home/featured-skills";

export default function HomePage() {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="ambient-glow absolute -top-32 -left-32 size-[26rem] rounded-full bg-primary/10 blur-3xl" />
        <div
          className="ambient-glow absolute top-1/3 -right-32 size-[24rem] rounded-full bg-primary/10 blur-3xl"
          style={{ animationDelay: "-10s" }}
        />
        <div
          className="ambient-glow absolute -bottom-32 left-1/4 size-[22rem] rounded-full bg-primary/10 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
      </div>
      <Hero />
      <FeaturedSkills />
    </>
  );
}

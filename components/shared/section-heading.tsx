import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow ? (
        <p className="font-mono text-sm text-primary mb-2">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

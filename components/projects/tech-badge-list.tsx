import { Badge } from "@/components/ui/badge";

export function TechBadgeList({ tech, className }: { tech: string[]; className?: string }) {
  if (!tech.length) return null;
  return (
    <div className={className ? className : "flex flex-wrap gap-1.5"}>
      {tech.map((t) => (
        <Badge key={t} variant="secondary" className="font-mono text-xs font-normal">
          {t}
        </Badge>
      ))}
    </div>
  );
}

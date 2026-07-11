import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FlowBox({
  label,
  sublabel,
  accent,
  compact,
}: {
  label: string;
  sublabel?: string;
  accent?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border flex flex-col items-center justify-center text-center gap-0.5 min-w-[8.5rem]",
        compact ? "px-3 py-2" : "px-4 py-3",
        accent ? "border-primary/40 bg-primary/5" : "border-border bg-card"
      )}
    >
      <p className={cn("text-sm font-semibold leading-tight", accent && "text-primary")}>
        {label}
      </p>
      {sublabel ? (
        <p className="text-[0.7rem] text-muted-foreground font-mono leading-tight">{sublabel}</p>
      ) : null}
    </div>
  );
}

export function FlowArrow() {
  return <ArrowRight className="size-4 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />;
}

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";

export function ResumeButton({ variant = "default" }: { variant?: "default" | "outline" }) {
  return (
    <Button
      variant={variant}
      render={<a href={site.resumeUrl} target="_blank" rel="noreferrer" />}
      nativeButton={false}
    >
      <Download className="size-4" />
      Resume
    </Button>
  );
}

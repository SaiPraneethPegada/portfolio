import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SocialLinks } from "@/components/shared/social-links";
import { ResumeButton } from "@/components/shared/resume-button";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { site } from "@/lib/content/site";

export function ContactInfo() {
  return (
    <SpotlightCard className="rounded-xl h-full">
      <Card className="p-6 gap-4 h-full">
        <div>
          <p className="font-mono text-sm text-primary mb-1">Let&apos;s work together</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Feel free to get in touch — I&apos;m happy to talk through your project or opportunity.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
        <SocialLinks />
        <ResumeButton />
      </Card>
    </SpotlightCard>
  );
}

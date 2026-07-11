import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { site } from "@/lib/content/site";

const links = [
  { label: "GitHub", href: site.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ? className : "flex items-center gap-1"}>
      {links.map(({ label, href, icon: Icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label={label}
                render={
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
              />
            }
          >
            <Icon className="size-4" />
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

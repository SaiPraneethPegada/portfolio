import { SocialLinks } from "@/components/shared/social-links";
import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

import Link from "next/link";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lg font-semibold tracking-tight text-primary"
          aria-label="Sai Praneeth Pegada — Home"
        >
          {"{ SP }"}
        </Link>
        <div className="flex items-center gap-2">
          <DesktopNav />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

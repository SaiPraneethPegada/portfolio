"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, isActivePath } from "./nav-links";

export function DesktopNav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    function measure() {
      const activeIndex = navLinks.findIndex((link) => isActivePath(pathname, link.href));
      const el = linkRefs.current[activeIndex];
      const container = containerRef.current;
      if (!el || !container) {
        setPill(null);
        return;
      }
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPill({ left: elRect.left - containerRect.left, width: elRect.width });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <nav ref={containerRef} className="hidden md:flex items-center gap-1 relative">
      {pill ? (
        <span
          aria-hidden
          className="absolute inset-y-0 rounded-md bg-accent transition-[left,width] duration-300 ease-out"
          style={{ left: pill.left, width: pill.width }}
        />
      ) : null}
      {navLinks.map((link, i) => {
        const active = isActivePath(pathname, link.href);
        return (
          <Link
            key={link.href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            href={link.href}
            className={cn(
              "relative z-10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
              active ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// next.config's trailingSlash:true means usePathname() returns e.g. "/about/",
// while these hrefs are written without one — normalize before comparing.
export function isActivePath(pathname: string | null, href: string) {
  const strip = (p: string) => (p === "/" ? p : p.replace(/\/$/, ""));
  return strip(pathname ?? "") === strip(href);
}

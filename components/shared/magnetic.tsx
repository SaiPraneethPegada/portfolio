"use client";

import { useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.25,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef<boolean>(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    if (typeof window !== "undefined") {
      reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    if (reduceMotion.current) return;
    const rect = node.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}

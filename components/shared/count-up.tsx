"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1200;

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? 0 : null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !match) return;
    const target = parseFloat(match[2]);
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(Number((target * easeOutQuart(progress)).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const [, prefix, , suffix] = match;
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

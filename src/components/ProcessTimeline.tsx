"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ProcessTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ptl = ref.current;
    if (!ptl) return;
    const onScroll = () => {
      const r = ptl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const p = Math.max(0, Math.min(1, (vh - r.top) / (total + vh)));
      ptl.style.setProperty("--progress", p * 100 + "%");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="process-timeline" ref={ref}>{children}</div>;
}

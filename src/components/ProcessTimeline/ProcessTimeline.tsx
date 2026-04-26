"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ProcessTimeline.module.css";

export default function ProcessTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = ref.current;
    if (!timeline) return;

    const onScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height;
      const progress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (total + viewportHeight)),
      );
      timeline.style.setProperty("--progress", `${progress * 100}%`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.root} ref={ref}>
      {children}
    </div>
  );
}

"use client";

import { useEffect } from "react";

const sections = [
  { id: "top", label: "00" },
  { id: "about", label: "01" },
  { id: "process", label: "02" },
  { id: "cases", label: "03" },
  { id: "services", label: "04" },
  { id: "contact", label: "05" },
];

export default function SideRail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.3) {
            document.querySelectorAll(".side-rail a").forEach((a) => {
              a.classList.toggle(
                "active",
                (a as HTMLAnchorElement).dataset.target === e.target.id
              );
            });
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="side-rail"
      style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}
      aria-label="Section navigation"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-target={s.id}
          className={s.id === "top" ? "active" : ""}
        >
          <span>{s.label}</span>
          <span className="l" />
        </a>
      ))}
    </aside>
  );
}

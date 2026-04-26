"use client";

import { useEffect, useState } from "react";
import styles from "./SideRail.module.css";

const sections = [
  { id: "top", label: "00" },
  { id: "about", label: "01" },
  { id: "process", label: "02" },
  { id: "cases", label: "03" },
  { id: "sponsors", label: "04" },
  { id: "services", label: "05" },
  { id: "contact", label: "06" },
];

export default function SideRail() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={styles.root} aria-label="Section navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={[styles.link, activeSection === section.id ? styles.active : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <span>{section.label}</span>
          <span className={styles.line} />
        </a>
      ))}
    </aside>
  );
}

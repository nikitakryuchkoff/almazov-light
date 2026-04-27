"use client";

import { useEffect, useState } from "react";
import styles from "./SideRail.module.css";

const sections = [
  { id: "top", label: "00" },
  { id: "about", label: "01" },
  { id: "process", label: "02" },
  { id: "cases", label: "03" },
  { id: "sponsors", label: "04" },
  { id: "faq", label: "05" },
  { id: "contact", label: "06" },
];

export default function SideRail() {
  const [activeSection, setActiveSection] = useState("top");

  const getScrollOffset = () => {
    const raw = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--section-scroll-offset");
    const offset = Number.parseFloat(raw);
    return Number.isFinite(offset) ? offset : 88;
  };

  const scrollToSection = (id: string, behavior: ScrollBehavior = "smooth") => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const offset = getScrollOffset();
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = getScrollOffset() + 8;
      let currentId = sections[0]?.id ?? "top";

      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= threshold) currentId = id;
        else break;
      }

      setActiveSection((current) => (current === currentId ? current : currentId));
    };

    const syncHash = (behavior: ScrollBehavior = "auto") => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      setActiveSection(id);
      requestAnimationFrame(() => scrollToSection(id, behavior));
    };

    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    const onHashChange = () => syncHash("smooth");
    syncHash();
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", onHashChange);
    };
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
          aria-current={activeSection === section.id ? "true" : undefined}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection(section.id);
            window.history.pushState(null, "", `#${section.id}`);
            scrollToSection(section.id, "smooth");
          }}
        >
          <span>{section.label}</span>
          <span className={styles.line} />
        </a>
      ))}
    </aside>
  );
}

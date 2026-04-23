"use client";

import { useState, type ReactNode } from "react";
import type { Dictionary } from "@/i18n";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function CasesFilter({
  dict,
  children,
}: {
  dict: Dictionary;
  children: ReactNode;
}) {
  const [active, setActive] = useState<string>("all");

  const handleFilter = (key: string) => {
    setActive(key);
    document.querySelectorAll<HTMLElement>(".project").forEach((p) => {
      const match = key === "all" || p.dataset.cat === key;
      p.style.display = match ? "" : "none";
    });
  };

  const filters = [
    { key: "all", label: dict.cases.filters.all },
    { key: "facade", label: dict.cases.filters.facade },
    { key: "interior", label: dict.cases.filters.interior },
    { key: "commercial", label: dict.cases.filters.commercial },
    { key: "residential", label: dict.cases.filters.residential },
  ];

  return (
    <>
      <div className="projects-filters rv" style={mono}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`chip ${active === f.key ? "active" : ""}`}
            onClick={() => handleFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {children}
    </>
  );
}

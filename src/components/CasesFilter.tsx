"use client";

import type { Dictionary } from "@/i18n";
import styles from "./CasesFilter.module.css";

export default function CasesFilter({
  dict,
  active,
  onChange,
}: {
  dict: Dictionary;
  active: string;
  onChange: (key: string) => void;
}) {
  const filters = [
    { key: "all", label: dict.cases.filters.all },
    { key: "facade", label: dict.cases.filters.facade },
    { key: "interior", label: dict.cases.filters.interior },
    { key: "commercial", label: dict.cases.filters.commercial },
    { key: "residential", label: dict.cases.filters.residential },
  ];

  return (
    <div className={styles.root} data-reveal>
      {filters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          className={[styles.chip, active === filter.key ? styles.active : ""]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

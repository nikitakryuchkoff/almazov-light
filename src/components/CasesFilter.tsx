"use client";

import { cases, type CaseCategory } from "@/data/portfolio";
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
  const labels: Record<CaseCategory, string> = {
    facade: dict.cases.filters.facade,
    interior: dict.cases.filters.interior,
    commercial: dict.cases.filters.commercial,
    residential: dict.cases.filters.residential,
  };

  const categoryOrder: CaseCategory[] = ["facade", "interior", "commercial", "residential"];

  const availableCategories = categoryOrder.filter((category) => cases.some((item) => item.category === category));

  const filters = [{ key: "all", label: dict.cases.filters.all }].concat(
    availableCategories.map((category) => ({
      key: category,
      label: labels[category],
    }))
  );

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

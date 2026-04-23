"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cases } from "@/data/portfolio";
import ProjectScene from "./svg/ProjectScenes";
import CasesFilter from "./CasesFilter";
import CtaLink from "./ui/CtaLink";
import SectionHeader from "./ui/SectionHeader";
import styles from "./Cases.module.css";

export default function Cases({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleCases = cases.filter((item) => activeFilter === "all" || item.category === activeFilter);

  return (
    <section id="cases">
      <div className="container">
        <SectionHeader
          number={dict.cases.sectionNum}
          title={
            <>
              {dict.cases.titleStart} &amp; <em>{dict.cases.titleEm}</em>
              {dict.cases.titleEnd}
            </>
          }
        />

        <CasesFilter dict={dict} active={activeFilter} onChange={setActiveFilter} />

        <div className={styles.grid} data-reveal>
          {visibleCases.map((item) => {
            const sizeClass =
              item.size === "wide" ? styles.wide : item.size === "tall" ? styles.tall : "";

            return (
              <Link
                key={item.slug}
                href={`/${locale}/portfolio/${item.slug}`}
                className={[styles.project, sizeClass].filter(Boolean).join(" ")}
                data-hover
                aria-label={`${dict.cases.viewCase}: ${item.title[locale]}`}
              >
                <div className={styles.tag}>{item.ref}</div>
                <span className={styles.play} aria-hidden>
                  <svg viewBox="0 0 10 10" fill="currentColor">
                    <path d="M1 0 L10 5 L1 10 Z" />
                  </svg>
                </span>
                <div className={styles.background}>
                  <ProjectScene scene={item.scene} />
                </div>
                <div className={styles.overlay} />
                <div className={styles.meta}>
                  <div>
                    <div className={styles.category}>{item.categoryLabel[locale]}</div>
                    <h3 className={styles.title}>{item.title[locale]}</h3>
                  </div>
                  <div className={styles.location}>
                    {item.location[locale]} · {item.year}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.ctaRow} data-reveal>
          <span>{dict.cases.selection}</span>
          <CtaLink href={`/${locale}#contact`}>{dict.cases.fullPortfolio}</CtaLink>
        </div>
      </div>
    </section>
  );
}

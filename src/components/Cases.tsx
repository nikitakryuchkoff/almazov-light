import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cases } from "@/data/portfolio";
import ProjectScene from "./svg/ProjectScenes";
import CasesFilter from "./CasesFilter";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function Cases({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="cases">
      <div className="container">
        <header className="section-head rv">
          <div className="section-num" style={mono}>{dict.cases.sectionNum}</div>
          <h2 className="section-title">
            {dict.cases.titleStart}
            {" "}&amp;{" "}
            <em>{dict.cases.titleEm}</em>{dict.cases.titleEnd}
          </h2>
        </header>

        <CasesFilter dict={dict}>
          <div className="projects-grid rv">
            {cases.map((c) => {
              const sizeClass =
                c.size === "wide" ? "wide" : c.size === "tall" ? "tall" : "";
              return (
                <Link
                  key={c.slug}
                  href={`/${locale}/portfolio/${c.slug}`}
                  className={`project ${sizeClass}`}
                  data-cat={c.category}
                  data-hover
                  aria-label={`${dict.cases.viewCase}: ${c.title[locale]}`}
                >
                  <div className="p-tag" style={mono}>{c.ref}</div>
                  <span className="p-play" aria-hidden>
                    <svg viewBox="0 0 10 10" fill="currentColor">
                      <path d="M1 0 L10 5 L1 10 Z" />
                    </svg>
                  </span>
                  <div className="p-bg"><ProjectScene scene={c.scene} /></div>
                  <div className="p-overlay" />
                  <div className="p-meta">
                    <div>
                      <div className="cat" style={mono}>{c.categoryLabel[locale]}</div>
                      <h3>{c.title[locale]}</h3>
                    </div>
                    <div className="loc" style={mono}>
                      {c.location[locale]} · {c.year}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </CasesFilter>

        <div className="portfolio-cta rv" style={mono}>
          <span>{dict.cases.selection}</span>
          <Link href={`/${locale}#contact`} className="cta" data-hover>
            <span className="dot" />
            <span>{dict.cases.fullPortfolio}</span>
            <svg className="arrow" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1 5 H13 M9 1 L13 5 L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

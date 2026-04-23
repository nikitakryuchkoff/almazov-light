import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cases } from "@/data/portfolio";
import CtaLink from "./ui/CtaLink";
import SectionHeader from "./ui/SectionHeader";
import styles from "./Cases.module.css";

export default function Cases({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
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

        <div className={styles.grid} data-reveal>
          {cases.map((item) => {
            const sizeClass =
              item.size === "wide"
                ? styles.wide
                : item.size === "tall"
                  ? styles.tall
                  : "";

            return (
              <Link
                key={item.slug}
                href={`/${locale}/portfolio/${item.slug}`}
                className={[styles.project, sizeClass]
                  .filter(Boolean)
                  .join(" ")}
                data-hover
                aria-label={`${dict.cases.viewCase}: ${item.title[locale]}`}
              >
                <div className={styles.tag}>{item.ref}</div>
                <div className={styles.background}>
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    quality={92}
                    className={styles.backgroundMedia}
                    sizes={
                      item.size === "wide"
                        ? "(max-width: 960px) 100vw, 1440px"
                        : "(max-width: 960px) 100vw, 720px"
                    }
                    style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div className={styles.overlay} />
                <div className={styles.meta}>
                  <div>
                    <div className={styles.category}>
                      {item.categoryLabel[locale]}
                    </div>
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
          <CtaLink href={`/${locale}#cases`}>
            {dict.cases.fullPortfolio}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

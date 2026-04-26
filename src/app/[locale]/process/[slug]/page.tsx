import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import {
  processSteps,
  getProcessStepBySlug,
  type ProcessBlock,
} from "@/data/processSteps";
import Navbar from "@/components/Navbar";
import CursorLight from "@/components/CursorLight";
import RevealObserver from "@/components/RevealObserver";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const step of processSteps) {
      params.push({ locale, slug: step.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const step = getProcessStepBySlug(slug);
  if (!step) return {};

  const title = step.title[localeParam];
  const description = step.summary[localeParam];

  return {
    title,
    description,
    alternates: {
      canonical: `/${localeParam}/process/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/process/${slug}`]),
      ),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://almazov-light.uz/${localeParam}/process/${slug}`,
    },
  };
}

function BlockRenderer({
  block,
  locale,
}: {
  block: ProcessBlock;
  locale: Locale;
}) {
  switch (block.kind) {
    case "lead":
      return <p className={styles.lead}>{block.text[locale]}</p>;

    case "para":
      return <p className={styles.para}>{block.text[locale]}</p>;

    case "list":
      return (
        <section className={styles.section} data-reveal>
          {block.heading && (
            <h2 className={styles.sectionHeading}>{block.heading[locale]}</h2>
          )}
          <ul className={styles.list}>
            {block.items.map((item, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.listMark} aria-hidden />
                <span>{item[locale]}</span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section className={styles.section} data-reveal>
          {block.heading && (
            <h2 className={styles.sectionHeading}>{block.heading[locale]}</h2>
          )}
          <ol className={styles.steps}>
            {block.items.map((item, i) => (
              <li key={i} className={styles.stepItem}>
                <span className={styles.stepIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{item.title[locale]}</h3>
                  <p className={styles.stepBody}>{item.body[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "table":
      return (
        <section className={styles.section} data-reveal>
          {block.heading && (
            <h2 className={styles.sectionHeading}>{block.heading[locale]}</h2>
          )}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {block.columns.map((col, i) => (
                    <th key={i}>{col[locale]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>{cell[locale]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
  }
}

export default async function ProcessStepPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const step = getProcessStepBySlug(slug);
  if (!step) notFound();

  const locale = localeParam;
  const dict = getDictionary(locale);

  const currentIndex = processSteps.findIndex((s) => s.slug === step.slug);
  const nextStep =
    currentIndex >= 0 && currentIndex < processSteps.length - 1
      ? processSteps[currentIndex + 1]
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: step.title[locale],
    description: step.summary[locale],
    url: `https://almazov-light.uz/${locale}/process/${step.slug}`,
    provider: {
      "@type": "Organization",
      name: "AlmazovLight",
      url: "https://almazov-light.uz",
    },
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorLight />
      <Navbar locale={locale} dict={dict} />
      <RevealObserver />

      <main className={styles.page}>
        <div className="container">
          <Link
            href={`/${locale}#process`}
            className={styles.backLink}
            data-hover
          >
            <svg
              width="14"
              viewBox="0 0 14 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M13 5 H1 M5 1 L1 5 L5 9" />
            </svg>
            {dict.processDetail.backToProcess}
          </Link>

          <header className={styles.hero}>
            <div>
              <div className={styles.heroNumber}>
                {dict.process.steps[currentIndex]?.num ?? `STEP / ${step.num}`}
              </div>
              <h1 className={styles.heroTitle}>{step.title[locale]}</h1>
            </div>
            <p className={styles.heroDescription}>{step.summary[locale]}</p>
          </header>

          <div className={styles.body}>
            {step.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} locale={locale} />
            ))}
          </div>

          <nav
            className={styles.allSteps}
            aria-label={dict.processDetail.allSteps}
          >
            <div className={styles.allStepsLabel}>
              {dict.processDetail.allSteps}
            </div>
            <ol className={styles.allStepsList}>
              {processSteps.map((s) => {
                const active = s.slug === step.slug;
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/${locale}/process/${s.slug}`}
                      className={[
                        styles.allStepsLink,
                        active ? styles.allStepsLinkActive : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-current={active ? "page" : undefined}
                      data-hover
                    >
                      <span className={styles.allStepsNum}>{s.num}</span>
                      <span className={styles.allStepsTitle}>
                        {s.title[locale]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          {nextStep && (
            <Link
              href={`/${locale}/process/${nextStep.slug}`}
              className={styles.next}
              data-hover
            >
              <div>
                <div className={styles.nextLabel}>
                  {dict.processDetail.nextStep}
                </div>
                <div className={styles.nextTitle}>
                  {nextStep.title[locale]}
                </div>
              </div>
              <svg
                width="32"
                viewBox="0 0 14 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M1 5 H13 M9 1 L13 5 L9 9" />
              </svg>
            </Link>
          )}
        </div>
      </main>

      <Footer locale={locale} dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

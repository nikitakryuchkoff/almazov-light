import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { cases, getCaseBySlug } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import CursorLight from "@/components/CursorLight";
import RevealObserver from "@/components/RevealObserver";
import Footer from "@/components/Footer";
import ProjectScene from "@/components/svg/ProjectScenes";
import styles from "./page.module.css";

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const item of cases) {
      params.push({ locale, slug: item.slug });
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
  const item = getCaseBySlug(slug);
  if (!item) return {};

  const title = item.title[localeParam];
  const description = item.shortDescription[localeParam];

  return {
    title,
    description,
    alternates: {
      canonical: `/${localeParam}/portfolio/${slug}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/portfolio/${slug}`])),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://almazov-light.uz/${localeParam}/portfolio/${slug}`,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const locale = localeParam;
  const dict = getDictionary(locale);
  const currentIndex = cases.findIndex((entry) => entry.slug === item.slug);
  const nextCase = cases[(currentIndex + 1) % cases.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title[locale],
    description: item.shortDescription[locale],
    url: `https://almazov-light.uz/${locale}/portfolio/${item.slug}`,
    locationCreated: {
      "@type": "Place",
      name: item.location[locale],
    },
    dateCreated: item.year,
    creator: {
      "@type": "Organization",
      name: "DILIGHT by ALMAZOV",
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
          <Link href={`/${locale}#cases`} className={styles.backLink} data-hover>
            <svg width="14" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M13 5 H1 M5 1 L1 5 L5 9" />
            </svg>
            {dict.caseDetail.backToCases}
          </Link>

          <header className={styles.hero}>
            <div>
              <div className={styles.heroNumber}>{item.ref}</div>
              <h1 className={styles.heroTitle}>{item.title[locale]}</h1>
            </div>
            <p className={styles.heroDescription}>{item.shortDescription[locale]}</p>
          </header>

          <div className={styles.metaRow}>
            <div>
              <div className={styles.metaKey}>{dict.caseDetail.category}</div>
              <div className={styles.metaValue}>{item.categoryLabel[locale]}</div>
            </div>
            <div>
              <div className={styles.metaKey}>{dict.caseDetail.location}</div>
              <div className={styles.metaValue}>{item.location[locale]}</div>
            </div>
            <div>
              <div className={styles.metaKey}>{dict.caseDetail.year}</div>
              <div className={styles.metaValue}>{item.year}</div>
            </div>
          </div>

          <div className={styles.image} data-reveal>
            <ProjectScene scene={item.scene} />
          </div>

          <section className={styles.blocks} data-reveal>
            <h2 className={styles.blocksTitle}>{dict.caseDetail.objective}</h2>
            <div className={styles.blockBody}>{item.objective[locale]}</div>
          </section>

          <section className={styles.blocks} data-reveal>
            <h2 className={styles.blocksTitle}>{dict.caseDetail.contribution}</h2>
            <div className={styles.blockBody}>
              <ul>
                {item.contribution.map((contribution, index) => (
                  <li key={index}>{contribution[locale]}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.blocks} data-reveal>
            <h2 className={styles.blocksTitle}>{dict.caseDetail.outcome}</h2>
            <div className={styles.blockBody}>{item.outcome[locale]}</div>
          </section>

          <Link href={`/${locale}/portfolio/${nextCase.slug}`} className={styles.next} data-hover>
            <div>
              <div className={styles.nextLabel}>{dict.caseDetail.nextCase}</div>
              <div className={styles.nextTitle}>{nextCase.title[locale]}</div>
            </div>
            <svg width="32" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1 5 H13 M9 1 L13 5 L9 9" />
            </svg>
          </Link>
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

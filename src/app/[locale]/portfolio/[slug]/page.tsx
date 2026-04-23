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

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const c of cases) {
      params.push({ locale, slug: c.slug });
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
  const c = getCaseBySlug(slug);
  if (!c) return {};

  const title = c.title[localeParam];
  const description = c.shortDescription[localeParam];

  return {
    title,
    description,
    alternates: {
      canonical: `/${localeParam}/portfolio/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/portfolio/${slug}`])
      ),
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
  const c = getCaseBySlug(slug);
  if (!c) notFound();
  const locale = localeParam;
  const dict = getDictionary(locale);

  const idx = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title[locale],
    description: c.shortDescription[locale],
    url: `https://almazov-light.uz/${locale}/portfolio/${c.slug}`,
    locationCreated: {
      "@type": "Place",
      name: c.location[locale],
    },
    dateCreated: c.year,
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

      <main className="case-page">
        <div className="container">
          <Link href={`/${locale}#cases`} className="case-back" data-hover>
            <svg width="14" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M13 5 H1 M5 1 L1 5 L5 9" />
            </svg>
            {dict.caseDetail.backToCases}
          </Link>

          <header className="case-hero">
            <div>
              <div className="section-num" style={mono}>{c.ref}</div>
              <h1 style={{ marginTop: 24 }}>{c.title[locale]}</h1>
            </div>
            <p>{c.shortDescription[locale]}</p>
          </header>

          <div className="case-meta-row" style={mono}>
            <div>
              <div className="k">{dict.caseDetail.category}</div>
              <div className="v" style={{ fontFamily: "var(--font-display)" }}>
                {c.categoryLabel[locale]}
              </div>
            </div>
            <div>
              <div className="k">{dict.caseDetail.location}</div>
              <div className="v" style={{ fontFamily: "var(--font-display)" }}>
                {c.location[locale]}
              </div>
            </div>
            <div>
              <div className="k">{dict.caseDetail.year}</div>
              <div className="v" style={{ fontFamily: "var(--font-display)" }}>
                {c.year}
              </div>
            </div>
          </div>

          <div className="case-image rv">
            <ProjectScene scene={c.scene} />
          </div>

          <section className="case-blocks rv">
            <h2 style={mono}>{dict.caseDetail.objective}</h2>
            <div className="block-body">{c.objective[locale]}</div>
          </section>

          <section className="case-blocks rv">
            <h2 style={mono}>{dict.caseDetail.contribution}</h2>
            <div className="block-body">
              <ul>
                {c.contribution.map((item, i) => (
                  <li key={i}>{item[locale]}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="case-blocks rv">
            <h2 style={mono}>{dict.caseDetail.outcome}</h2>
            <div className="block-body">{c.outcome[locale]}</div>
          </section>

          <Link href={`/${locale}/portfolio/${next.slug}`} className="case-next" data-hover>
            <div>
              <div className="label" style={mono}>{dict.caseDetail.nextCase}</div>
              <div className="next-title">{next.title[locale]}</div>
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

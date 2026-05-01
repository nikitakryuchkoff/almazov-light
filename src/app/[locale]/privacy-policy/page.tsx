import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { contactInfo } from "@/data/contact";
import CursorLight from "@/components/CursorLight";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";
import { getAbsoluteSiteUrl } from "@/utils/site";
import styles from "./page.module.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  const title = dict.privacy.title;
  const description = dict.privacy.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/${localeParam}/privacy-policy`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/privacy-policy`]),
      ),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: getAbsoluteSiteUrl(`/${localeParam}/privacy-policy`),
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const copy = dict.privacy;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorLight />
      <Navbar locale={locale} dict={dict} />
      <RevealObserver />

      <main className={styles.page}>
        <div className="container">
          <Link href={`/${locale}`} className={styles.backLink} data-hover>
            <svg width="14" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M13 5 H1 M5 1 L1 5 L5 9" />
            </svg>
            {copy.backHome}
          </Link>

          <header className={styles.hero}>
            <div>
              <div className={styles.eyebrow}>{copy.eyebrow}</div>
              <h1 className={styles.title}>{copy.title}</h1>
            </div>
          </header>

          <div className={styles.content} data-reveal>
            {copy.sections.map((section) => (
              <section className={styles.section} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className={styles.section}>
              <h2>{copy.contactTitle}</h2>
              <p>
                {copy.contactText}{" "}
                <a href={`mailto:${contactInfo.email}`} className={styles.contactLink}>
                  {contactInfo.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}

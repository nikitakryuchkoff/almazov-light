import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { getAbsoluteSiteUrl } from "@/utils/site";

const SITE_TITLE = "Almazov light";

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
  const t = getDictionary(localeParam);

  const ogLocale = { en: "en_US", ru: "ru_RU", uz: "uz_UZ" }[localeParam];

  return {
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE_TITLE}`,
    },
    description: t.meta.description,
    keywords: [
      "lighting design",
      "освещение",
      "дизайн освещения",
      "yorug'lik dizayni",
      "Tashkent",
      "Toshkent",
      "Ташкент",
      "AlmazovLight",
      "Almazov Light",
      "interior lighting",
      "facade lighting",
      "architectural lighting",
    ],
    alternates: {
      canonical: `/${localeParam}`,
      languages: {
        en: "/en",
        ru: "/ru",
        uz: "/uz",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: getAbsoluteSiteUrl(`/${localeParam}`),
      siteName: "AlmazovLight",
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // Nested `lang` per HTML5 spec — scopes language for screen readers and
  // crawlers without forcing the root <html> tag to be dynamic.
  return (
    <div lang={locale satisfies Locale} data-locale={locale}>
      {children}
    </div>
  );
}

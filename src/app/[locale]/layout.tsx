import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

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
      default: t.meta.title,
      template: "%s | DILIGHT by ALMAZOV",
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
      "DILIGHT",
      "ALMAZOV",
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
      url: `https://almazov-light.uz/${localeParam}`,
      siteName: "DILIGHT by ALMAZOV",
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
  return <div data-locale={locale satisfies Locale}>{children}</div>;
}

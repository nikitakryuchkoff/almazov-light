import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { cases } from "@/data/portfolio";
import { processSteps } from "@/data/processSteps";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almazov-light.uz";
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: locale === "en" ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}`])
        ),
      },
    });
  }

  for (const c of cases) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/portfolio/${c.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/portfolio/${c.slug}`])
          ),
        },
      });
    }
  }

  for (const step of processSteps) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/process/${step.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/process/${step.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}

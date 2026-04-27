import type { Locale } from "@/i18n/config";

const NBSP = "\u00A0";
const LOCALES: Locale[] = ["en", "ru", "uz"];
const LOCALE_SET = new Set<Locale>(LOCALES);

const SHORT_WORDS: Record<Locale, string[]> = {
  en: ["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "to"],
  ru: [
    "а",
    "без",
    "в",
    "во",
    "для",
    "до",
    "за",
    "и",
    "из",
    "изо",
    "к",
    "ко",
    "меж",
    "между",
    "на",
    "над",
    "не",
    "ни",
    "но",
    "о",
    "об",
    "обо",
    "от",
    "ото",
    "по",
    "под",
    "подо",
    "при",
    "про",
    "с",
    "со",
    "у",
    "через",
  ],
  uz: ["bilan", "deb", "ham", "hamda", "uchun", "va", "yoki"],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function bindShortWords(text: string, locale: Locale) {
  const words = SHORT_WORDS[locale];
  if (!words.length) return text;

  const pattern = new RegExp(
    `(^|[\\s([{"'«„])(${words.map(escapeRegExp).join("|")})\\s+`,
    "giu",
  );

  return text.replace(pattern, (_match, prefix: string, word: string) => `${prefix}${word}${NBSP}`);
}

export function applyTypographyToLocaleTree<T>(value: T, locale: Locale): T {
  if (typeof value === "string") {
    return bindShortWords(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => applyTypographyToLocaleTree(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    const next: Record<string, unknown> = {};

    for (const [key, nested] of Object.entries(value)) {
      next[key] = applyTypographyToLocaleTree(nested, locale);
    }

    return next as T;
  }

  return value;
}

export function applyTypographyToLocalizedTree<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => applyTypographyToLocalizedTree(item)) as T;
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  const objectValue = value as Record<string, unknown>;
  const keys = Object.keys(objectValue);

  if (keys.length > 0 && keys.every((key) => LOCALE_SET.has(key as Locale))) {
    const next: Record<string, unknown> = {};

    for (const locale of LOCALES) {
      if (!(locale in objectValue)) continue;
      next[locale] = applyTypographyToLocaleTree(objectValue[locale], locale);
    }

    return next as T;
  }

  const next: Record<string, unknown> = {};

  for (const [key, nested] of Object.entries(objectValue)) {
    next[key] = applyTypographyToLocalizedTree(nested);
  }

  return next as T;
}

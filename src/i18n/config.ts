export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "Oʻzbek",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

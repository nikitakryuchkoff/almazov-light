import { applyTypographyToLocalizedTree } from "@/utils/typography";
import type { ContactInfo } from "@/types/contact";

const rawContactInfoStatic: Pick<ContactInfo, "city" | "country" | "hours" | "address"> = {
  city: {
    en: "Tashkent",
    ru: "Ташкент",
    uz: "Toshkent",
  },
  country: "UZ",
  hours: {
    en: "Mon — Sat · 10 — 19",
    ru: "Пн — Сб · 10 — 19",
    uz: "Du — Sha · 10 — 19",
  },
  address: {
    en: "2nd Aviasozlar passage, 8/2, Tashkent, Uzbekistan",
    ru: "2-й проезд Авиасозлар, 8/2, Ташкент, Узбекистан",
    uz: "2-Aviasozlar o‘tkazgichi, 8/2, Toshkent, O‘zbekiston",
  },
};

export const CONTACT_INFO_STATIC = applyTypographyToLocalizedTree(rawContactInfoStatic);

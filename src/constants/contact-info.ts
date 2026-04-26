import type { ContactInfo } from "@/types/contact";

export const CONTACT_INFO_STATIC: Pick<ContactInfo, "city" | "country" | "hours" | "address"> = {
  city: {
    en: "Tashkent",
    ru: "РўР°С€РєРµРЅС‚",
    uz: "Toshkent",
  },
  country: "UZ",
  hours: {
    en: "Mon вЂ” Sat В· 10 вЂ” 19",
    ru: "РџРЅ вЂ” РЎР± В· 10 вЂ” 19",
    uz: "Du вЂ” Sha В· 10 вЂ” 19",
  },
  address: {
    en: "2nd Aviasozlar passage, 8/2, Tashkent, Uzbekistan",
    ru: "2-Р№ РїСЂРѕРµР·Рґ РђРІРёР°СЃРѕР·Р»Р°СЂ, 8/2, РўР°С€РєРµРЅС‚, РЈР·Р±РµРєРёСЃС‚Р°РЅ",
    uz: "2-Aviasozlar oвЂtkazgichi, 8/2, Toshkent, OвЂzbekiston",
  },
};

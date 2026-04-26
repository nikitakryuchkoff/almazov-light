export const contactInfo = {
  email: "info@almazov-light.uz",
  phone: "+998712000000",
  phoneDisplay: "+998 (71) 200 00 00",
  telegram: "https://t.me/almazov_light",
  whatsapp: "https://wa.me/998712000000",
  instagram: "https://instagram.com/almazov_light",
  // Approximate coordinates for the Aviasozlar area, Yashnabad district, Tashkent.
  // The Yandex Map widget itself resolves the pin via mapQuery, so this only
  // backs the LocalBusiness JSON-LD; verify and refine if exact coords are needed.
  geo: { lat: 41.272, lng: 69.296 },
  city: { en: "Tashkent", ru: "Ташкент", uz: "Toshkent" },
  country: "UZ",
  hours: {
    en: "Mon — Sat · 10 — 19",
    ru: "Пн — Сб · 10 — 19",
    uz: "Du — Sha · 10 — 19",
  },
  address: {
    en: "2nd Aviasozlar passage, 8/2, Tashkent, Uzbekistan",
    ru: "2-й проезд Авиасозлар, 8/2, Ташкент, Узбекистан",
    uz: "2-Aviasozlar oʻtkazgichi, 8/2, Toshkent, Oʻzbekiston",
  },
  // Russian works best for Yandex search inside Uzbekistan
  mapQuery: "Узбекистан, Ташкент, 2-й проезд Авиасозлар, 8/2",
};

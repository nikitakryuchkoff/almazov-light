import type { Locale } from "@/i18n/config";

export type CaseCategory = "facade" | "interior" | "commercial" | "residential";

export type LocalizedText = Record<Locale, string>;

export interface CaseStudy {
  slug: string;
  category: CaseCategory;
  year: string;
  size: "wide" | "tall" | "default";
  scene: "facade" | "interior" | "commercial" | "art" | "stairs" | "bridge" | "lobby";
  ref: string;
  title: LocalizedText;
  location: LocalizedText;
  categoryLabel: LocalizedText;
  shortDescription: LocalizedText;
  objective: LocalizedText;
  contribution: LocalizedText[];
  outcome: LocalizedText;
}

export const cases: CaseStudy[] = [
  {
    slug: "grand-hotel-irkutsk",
    category: "facade",
    year: "2025",
    size: "wide",
    scene: "facade",
    ref: "PR—017 · FAÇADE",
    title: {
      en: "Grand Hotel, Irkutsk",
      ru: "Гранд-отель, Иркутск",
      uz: "Grand mehmonxonasi, Irkutsk",
    },
    location: {
      en: "Irkutsk · Russia",
      ru: "Иркутск · Россия",
      uz: "Irkutsk · Rossiya",
    },
    categoryLabel: {
      en: "Façade · Heritage",
      ru: "Фасад · Наследие",
      uz: "Fasad · Meros",
    },
    shortDescription: {
      en: "Architectural illumination of one of Irkutsk’s most distinctive neoclassical landmarks — designed to read as a nighttime icon while protecting its heritage character.",
      ru: "Архитектурная подсветка одного из самых выразительных неоклассических памятников Иркутска — вечерний образ как новый ориентир города при сохранении исторического характера.",
      uz: "Irkutskning eng oʻziga xos neoklassik yodgorliklaridan birining arxitektura yoritilishi — tarixiy xarakterni saqlagan holda kechki obrazni shahar belgisiga aylantirish.",
    },
    objective: {
      en: "Create evening illumination that accentuates the structure’s architectural form, making it a prominent nighttime landmark without compromising its heritage character.",
      ru: "Создать вечернюю подсветку, подчёркивающую архитектурную форму здания и превращающую его в ночной ориентир без ущерба для исторического облика.",
      uz: "Bino arxitektura shaklini taʼkidlovchi va tarixiy qiyofasiga zarar yetkazmasdan uni tungi belgi sifatida ajratib turuvchi kechki yoritishni yaratish.",
    },
    contribution: [
      {
        en: "Developed the architectural lighting concept and full technical lighting solution.",
        ru: "Разработали архитектурную концепцию подсветки и полное светотехническое решение.",
        uz: "Arxitektura yoritish konsepsiyasi va toʻliq texnik yechim ishlab chiqildi.",
      },
      {
        en: "Created lighting scenarios focused on cornices, pilasters and attics.",
        ru: "Создали световые сценарии с акцентом на карнизы, пилястры и аттики.",
        uz: "Karnizlar, pilastrlar va attiklarga eʼtibor qaratilgan yorugʻlik sahnalari yaratildi.",
      },
      {
        en: "Proposed custom mounting solutions avoiding damage to historic surfaces.",
        ru: "Предложили индивидуальные решения крепежа, исключающие повреждение исторических поверхностей.",
        uz: "Tarixiy yuzalarga zarar yetkazmaydigan maxsus oʻrnatish yechimlari taklif qilindi.",
      },
      {
        en: "Ensured discreet fixture integration within the existing architecture.",
        ru: "Обеспечили деликатную интеграцию приборов в существующую архитектуру.",
        uz: "Asboblar mavjud arxitekturaga ehtiyotkorlik bilan integratsiya qilindi.",
      },
    ],
    outcome: {
      en: "The illumination is both expressive and elegant, highlighting the building’s architectural value and reinforcing the city’s identity. The hotel became a new nighttime landmark while preserving its historic character.",
      ru: "Подсветка получилась выразительной и одновременно деликатной — она подчёркивает архитектурную ценность здания и усиливает идентичность города. Отель стал новым ночным ориентиром, сохранив исторический характер.",
      uz: "Yoritish ifodali va nafis chiqdi — bino arxitektura qiymatini taʼkidlaydi va shahar identifikatsiyasini mustahkamlaydi. Mehmonxona tarixiy qiyofasini saqlagan holda yangi tungi belgiga aylandi.",
    },
  },
  {
    slug: "ddx-fitness-passage-spb",
    category: "commercial",
    year: "2024",
    size: "default",
    scene: "interior",
    ref: "PR—024 · INTERIOR",
    title: {
      en: "DDX Fitness · Passage Department Store",
      ru: "DDX Fitness · ТД «Пассаж»",
      uz: "DDX Fitness · «Passaj» savdo uyi",
    },
    location: {
      en: "St. Petersburg · Russia",
      ru: "Санкт-Петербург · Россия",
      uz: "Sankt-Peterburg · Rossiya",
    },
    categoryLabel: {
      en: "Commercial · Heritage Interior",
      ru: "Коммерция · Интерьер в памятнике",
      uz: "Kommertsiya · Yodgorlik interyeri",
    },
    shortDescription: {
      en: "A 2,000 m² premium fitness facility on Nevsky Prospekt, set inside a 19th-century heritage building. Lighting design and technical supervision under strict heritage constraints.",
      ru: "Премиальный фитнес-клуб площадью 2 000 м² на Невском проспекте — в здании-памятнике XIX века. Дизайн освещения и авторский надзор в условиях жёстких ограничений охраны памятников.",
      uz: "Nevskiy prospektidagi 2 000 m² premium fitnes klub — XIX asr yodgorlik binosida. Yoritish dizayni va meros saqlash boʻyicha qatʼiy cheklovlar ostidagi muallif nazorati.",
    },
    objective: {
      en: "Integrate modern lighting infrastructure without disrupting the historic fabric, provide adequate light for high-intensity workouts, eliminate glare, and design adaptive scenarios for the venue’s zones.",
      ru: "Интегрировать современную инфраструктуру освещения без вмешательства в историческую ткань здания, обеспечить достаточный свет для интенсивных тренировок, устранить блики и спроектировать адаптивные сценарии под зоны клуба.",
      uz: "Tarixiy binoga aralashmasdan zamonaviy yoritish infratuzilmasini integratsiya qilish, yuqori jadallikdagi mashgʻulotlar uchun yetarli yorugʻlikni taʼminlash, koʻzni qamashtirishni bartaraf etish va klub zonalari uchun adaptiv sahnalarni loyihalash.",
    },
    contribution: [
      {
        en: "Concealed lighting within structural elements — ceiling coves and beams — bypassing prohibited mounting methods.",
        ru: "Скрыли свет внутри конструктивных элементов — карнизах и балках — обойдя запрещённые методы крепления.",
        uz: "Yoritishni konstruktiv elementlar — karnizlar va tirgaklar ichiga yashirib, taqiqlangan oʻrnatish usullarini chetlab oʻtdik.",
      },
      {
        en: "Specified advanced optical systems with controlled distribution sized to surface reflectance.",
        ru: "Подобрали продвинутые оптические системы с управляемым распределением, рассчитанные под отражательные свойства поверхностей.",
        uz: "Yuzalarning aks etish xususiyatlariga moslashtirilgan boshqariluvchi taqsimotli ilgʻor optik tizimlar tanlandi.",
      },
      {
        en: "Developed adaptive scenarios that adjust to time of day and functional needs.",
        ru: "Разработали адаптивные сценарии, подстраивающиеся под время суток и функциональные задачи.",
        uz: "Vaqt va funksional ehtiyojlarga moslashuvchan sahnalar ishlab chiqildi.",
      },
      {
        en: "Provided full technical supervision over installation and commissioning.",
        ru: "Осуществляли полный авторский надзор за монтажом и пуско-наладкой.",
        uz: "Montaj va ishga tushirish ustidan toʻliq muallif nazorati taʼminlandi.",
      },
    ],
    outcome: {
      en: "The project became a signature DDX venue in St. Petersburg and a widely discussed example of commercial adaptation of historic buildings while preserving architectural integrity.",
      ru: "Проект стал визитной карточкой DDX в Санкт-Петербурге и широко обсуждаемым примером коммерческой адаптации исторического здания с сохранением архитектурной целостности.",
      uz: "Loyiha Sankt-Peterburgdagi DDX visit kartochkasiga aylandi va arxitektura yaxlitligini saqlagan holda tarixiy binoning kommertsiya moslashuvining keng muhokama qilingan namunasiga aylandi.",
    },
  },
  {
    slug: "private-house-tashkent",
    category: "residential",
    year: "2023",
    size: "default",
    scene: "interior",
    ref: "PR—042 · RESIDENCE",
    title: {
      en: "Private House, Tashkent",
      ru: "Частный дом, Ташкент",
      uz: "Hovli, Toshkent",
    },
    location: {
      en: "Tashkent · Uzbekistan",
      ru: "Ташкент · Узбекистан",
      uz: "Toshkent · Oʻzbekiston",
    },
    categoryLabel: {
      en: "Residential · Façade & Interior",
      ru: "Резиденция · Фасад и интерьер",
      uz: "Uy-joy · Fasad va interyer",
    },
    shortDescription: {
      en: "A residential project focused on the façade and summer kitchen — warm, subtle illumination tuned to entertaining guests while letting the architecture lead.",
      ru: "Резиденция с акцентом на фасад и летнюю кухню — тёплый деликатный свет для приёма гостей, не перетягивающий внимание с архитектуры.",
      uz: "Fasad va yozgi oshxonaga eʼtibor qaratilgan turar joy loyihasi — mehmonlarni kutib olishga moslashgan iliq, nozik yoritish, arxitektura yetakchiligi saqlangan.",
    },
    objective: {
      en: "Create a luminous environment that highlights the home’s architecture and produces a warm, subtle, cozy evening atmosphere — minimalist and integrated, never aggressive.",
      ru: "Создать световую среду, подчёркивающую архитектуру дома и формирующую тёплую, деликатную, уютную вечернюю атмосферу — минималистично и интегрированно, без агрессии.",
      uz: "Uy arxitekturasini taʼkidlaydigan va iliq, nozik, qulay kechki muhitni shakllantiradigan yorugʻlik muhitini yaratish — minimalist va integratsiyalashgan, hech qachon hujumkor emas.",
    },
    contribution: [
      {
        en: "Linear lighting integrated directly into the structures of the summer kitchen, with the fireplace as the visual centerpiece.",
        ru: "Линейная подсветка, интегрированная прямо в конструкции летней кухни, с камином в качестве визуального центра.",
        uz: "Yozgi oshxona konstruksiyalariga toʻgʻridan-toʻgʻri integratsiyalashgan chiziqli yoritish, kamin vizual markaz sifatida.",
      },
      {
        en: "Understated façade lighting prioritising architectural form and material.",
        ru: "Сдержанная подсветка фасада, отдающая приоритет форме и материалу.",
        uz: "Shakl va materialga ustuvorlik beruvchi vazmin fasad yoritishi.",
      },
      {
        en: "Solutions developed in close dialogue with the client and tailored to their wishes.",
        ru: "Решения вырабатывались в тесном диалоге с заказчиком и под его пожелания.",
        uz: "Yechimlar mijoz bilan yaqin muloqotda va uning xohish-istaklariga moslashtirilgan holda ishlab chiqildi.",
      },
    ],
    outcome: {
      en: "One of our first projects in Tashkent — modest in scale but our professional debut in the region, balancing architectural expression with hospitality.",
      ru: "Один из наших первых проектов в Ташкенте — небольшой по объёму, но наш профессиональный дебют в регионе: баланс архитектурного выражения и гостеприимства.",
      uz: "Toshkentdagi birinchi loyihalarimizdan biri — hajmi jihatidan kichik, ammo mintaqadagi professional debyutimiz: arxitektura ifodasi va mehmondoʻstlik muvozanati.",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

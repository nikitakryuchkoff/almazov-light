import type { Locale } from "@/i18n/config";
import { applyTypographyToLocalizedTree } from "@/utils/typography";

type LocalizedText = Record<Locale, string>;

export interface Service {
  slug: string;
  idx: string;
  shortName: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}

const rawServices: Service[] = [
  {
    slug: "concept-development",
    idx: "01 / 06",
    shortName: {
      en: "Concept Development",
      ru: "Разработка концепции",
      uz: "Konsepsiya ishlab chiqish",
    },
    title: {
      en: "Photorealistic 3D lighting concept.",
      ru: "Фотореалистичная 3D-концепция освещения.",
      uz: "Fotorealistik 3D yoritish konsepsiyasi.",
    },
    description: {
      en: "We model your space in 3D so you can compare scenarios, brightness and atmosphere live before a single fixture is installed.",
      ru: "Моделируем ваше пространство в 3D — оцениваете сценарии, яркость и атмосферу онлайн до установки светильников.",
      uz: "Joyni 3D-da modellashtiramiz — bitta ham chiroq oʻrnatishdan oldin sahnalar, yorqinlik va atmosferani onlayn baholaysiz.",
    },
  },
  {
    slug: "lighting-technical-analysis",
    idx: "02 / 06",
    shortName: {
      en: "Technical Analysis",
      ru: "Светотехнический анализ",
      uz: "Yorugʻlik-texnik tahlil",
    },
    title: {
      en: "Engineering lighting calculation.",
      ru: "Инженерный расчёт освещения.",
      uz: "Muhandislik yoritish hisob-kitobi.",
    },
    description: {
      en: "Photometric analysis in Dialux per QMQ 2.01.05-2019 and EN 12464-1 — illuminance, uniformity, UGR and cylindrical lux verified.",
      ru: "Фотометрический анализ в Dialux по ҚМҚ 2.01.05-2019 и EN 12464-1 — освещённость, равномерность, UGR и цилиндрический люкс проверены.",
      uz: "Dialux’da QMQ 2.01.05-2019 va EN 12464-1 boʻyicha fotometrik tahlil — yoritilganlik, bir xillik, UGR va silindrik luks tekshirilgan.",
    },
  },
  {
    slug: "equipment-selection",
    idx: "03 / 06",
    shortName: {
      en: "Equipment Selection",
      ru: "Подбор оборудования",
      uz: "Uskunalarni tanlash",
    },
    title: {
      en: "Brand-agnostic fixture selection.",
      ru: "Подбор светильников без привязки к бренду.",
      uz: "Brendga bogʻliq boʻlmagan chiroq tanlash.",
    },
    description: {
      en: "Optimal solutions from leading European, premium Asian and trusted local suppliers — matched to concept, calculations and budget.",
      ru: "Оптимальные решения от ведущих европейских, премиальных азиатских и проверенных локальных поставщиков — под концепцию, расчёты и бюджет.",
      uz: "Yetakchi yevropa, premium osiyo va ishonchli mahalliy yetkazib beruvchilardan optimal yechimlar — konsepsiya, hisob-kitoblar va byudjetga muvofiq.",
    },
  },
  {
    slug: "equipment-delivery",
    idx: "04 / 06",
    shortName: {
      en: "Equipment Delivery",
      ru: "Поставка оборудования",
      uz: "Jihozlarni yetkazib berish",
    },
    title: {
      en: "End-to-end logistics.",
      ru: "Сквозная логистика.",
      uz: "Toʻliq logistika.",
    },
    description: {
      en: "Availability checks, optimised delivery routes, customs and warranty terms agreed before procurement begins.",
      ru: "Проверка наличия, оптимизированные маршруты поставки, согласование таможни и гарантийных условий до закупки.",
      uz: "Mavjudlikni tekshirish, optimallashtirilgan yetkazib berish marshrutlari, xarid oldidan bojxona va kafolat shartlarini kelishish.",
    },
  },
  {
    slug: "installation-commissioning",
    idx: "05 / 06",
    shortName: {
      en: "Installation & Commissioning",
      ru: "Монтаж и пуско-наладка",
      uz: "Montaj va ishga tushirish",
    },
    title: {
      en: "Mounted to the letter of the design.",
      ru: "Монтаж по букве проекта.",
      uz: "Loyihaga qatʼiy muvofiq oʻrnatish.",
    },
    description: {
      en: "Our installers commission scenes, channels and control systems — handover-ready, with documentation in your hands.",
      ru: "Наши монтажники запускают сцены, каналы и системы управления — готово к передаче, с полной документацией.",
      uz: "Oʻrnatish jamoamiz sahnalar, kanallar va boshqaruv tizimlarini ishga tushiradi — toʻliq hujjatlar bilan topshirishga tayyor.",
    },
  },
  {
    slug: "service-maintenance",
    idx: "06 / 06",
    shortName: {
      en: "Service & Maintenance",
      ru: "Сервис и обслуживание",
      uz: "Xizmat va texnik koʻrik",
    },
    title: {
      en: "Warranty and lifetime upkeep.",
      ru: "Гарантия и обслуживание на весь срок.",
      uz: "Kafolat va xizmat muddati davomida texnik koʻrik.",
    },
    description: {
      en: "Warranty coverage and regular maintenance so the installed system performs flawlessly across its full lifetime.",
      ru: "Гарантийное покрытие и регулярное обслуживание — система работает безупречно весь срок службы.",
      uz: "Kafolat qamrovi va muntazam texnik xizmat — tizim butun xizmat muddati davomida benuqson ishlaydi.",
    },
  },
];

export const services: Service[] = applyTypographyToLocalizedTree(rawServices);

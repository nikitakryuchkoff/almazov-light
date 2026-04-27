import type { Locale } from "@/i18n/config";
import { applyTypographyToLocalizedTree } from "@/utils/typography";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionCopy = {
  navLabel: string;
  sectionNum: string;
  titleStart: string;
  titleEm: string;
  titleEnd: string;
};

const rawFaqSectionCopy: Record<Locale, FaqSectionCopy> = {
  en: {
    navLabel: "FAQ",
    sectionNum: "[ 05 · FAQ ]",
    titleStart: "Important",
    titleEm: "questions",
    titleEnd: ".",
  },
  ru: {
    navLabel: "FAQ",
    sectionNum: "[ 05 · FAQ ]",
    titleStart: "Важные",
    titleEm: "вопросы",
    titleEnd: ".",
  },
  uz: {
    navLabel: "FAQ",
    sectionNum: "[ 05 · FAQ ]",
    titleStart: "Muhim",
    titleEm: "savollar",
    titleEnd: ".",
  },
};

export const faqSectionCopy = applyTypographyToLocalizedTree(rawFaqSectionCopy);

const rawFaqItems: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "How much does a lighting design project cost?",
      answer:
        "The cost depends on the project scope and tasks. We always discuss your request in advance and prepare a clear estimate. A simple consultation is free.",
    },
    {
      question: "Can you simply advise which fixtures to buy for my interior?",
      answer:
        "Yes, we can provide a consultation and help you choose fixtures even if you are not ordering a full project.",
    },
    {
      question: "Do you work with unconventional sites?",
      answer:
        "Yes. Our experience includes lighting for museums, art spaces, and historic buildings. We account for architectural preservation and fire-safety requirements.",
    },
    {
      question: "Do you have completed examples we can review?",
      answer:
        "Of course. We show examples of completed projects both on the website and during an in-person meeting.",
    },
    {
      question: "Can I order turnkey lighting from concept through installation?",
      answer:
        "Yes, we work with trusted installation partners. We can support the project end-to-end: concept, equipment selection, supply, and installation.",
    },
    {
      question: "Do you select specific fixtures or only prepare the plan?",
      answer:
        "We provide both a full lighting concept and selection of specific fixtures according to your budget and goals.",
    },
  ],
  ru: [
    {
      question: "Сколько стоит разработка проекта освещения?",
      answer:
        "Стоимость зависит от объёма проекта и задач. Мы всегда предварительно обсуждаем ваш запрос и готовим понятную смету. Простая консультация — бесплатно.",
    },
    {
      question: "Вы можете просто подсказать, какие светильники купить для моего интерьера?",
      answer:
        "Да, можем провести консультацию и помочь с выбором светильников, даже если вы не заказываете полный проект.",
    },
    {
      question: "Работаете ли вы с нестандартными объектами?",
      answer:
        "Да. Опыт включает освещение музеев, арт-пространств, исторических зданий. Учитываем нормы по сохранению архитектуры и пожарной безопасности.",
    },
    {
      question: "А у вас есть готовые примеры, чтобы посмотреть?",
      answer:
        "Конечно. Мы показываем примеры реализованных проектов — на сайте и при личной встрече.",
    },
    {
      question: "Можно ли у вас заказать свет под ключ — от проекта до монтажа?",
      answer:
        "Да, у нас есть проверенные партнёры по монтажу. Мы можем сопровождать проект полностью: концепция, подбор оборудования, поставка и монтаж.",
    },
    {
      question: "Вы подбираете конкретные светильники или только делаете план?",
      answer:
        "Мы делаем и полноценную концепцию света, и подбор конкретных светильников по вашему бюджету и задачам.",
    },
  ],
  uz: [
    {
      question: "Yoritish loyihasini ishlab chiqish qancha turadi?",
      answer:
        "Narx loyiha hajmi va vazifalarga bog'liq. Biz har doim so'rovingizni oldindan muhokama qilamiz va tushunarli smeta tayyorlaymiz. Oddiy konsultatsiya bepul.",
    },
    {
      question:
        "Interyerim uchun qaysi chiroqlarni olish kerakligini shunchaki aytib bera olasizmi?",
      answer:
        "Ha, albatta. To'liq loyiha buyurtma qilmasangiz ham, konsultatsiya o'tkazib, mos chiroqlarni tanlashda yordam bera olamiz.",
    },
    {
      question: "Nostandart obyektlar bilan ham ishlaysizmi?",
      answer:
        "Ha. Tajribamizda muzeylar, art-makonlar va tarixiy binolar yoritishi bor. Arxitekturani saqlash hamda yong'in xavfsizligi talablarini inobatga olamiz.",
    },
    {
      question: "Ko'rish uchun tayyor misollaringiz bormi?",
      answer:
        "Albatta. Amalga oshirilgan loyihalar misollarini sayt orqali ham, shaxsiy uchrashuvda ham ko'rsatamiz.",
    },
    {
      question: "Loyihadan tortib montajgacha bo'lgan turnkey yoritishni buyurtma qilish mumkinmi?",
      answer:
        "Ha, bizda montaj bo'yicha ishonchli hamkorlar bor. Loyiha bo'yicha to'liq hamrohlik qila olamiz: konsepsiya, uskunani tanlash, yetkazib berish va montaj.",
    },
    {
      question: "Siz aniq chiroqlarni ham tanlaysizmi yoki faqat reja tayyorlaysizmi?",
      answer:
        "Biz ham to'liq yorug'lik konsepsiyasini, ham budjet va vazifalaringizga mos aniq chiroqlar tanlovini tayyorlaymiz.",
    },
  ],
};

export const faqItems = applyTypographyToLocalizedTree(rawFaqItems);

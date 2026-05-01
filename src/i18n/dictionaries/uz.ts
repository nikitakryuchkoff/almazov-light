import { applyTypographyToLocaleTree } from "@/utils/typography";

import type { Dictionary } from "./en";

const uzDictionary = {
  nav: {
    about: "Biz haqimizda",
    process: "Xizmatlar",
    services: "Xizmatlar",
    cases: "Loyihalar",
    contact: "Kontaktlar",
    cta: "Ariza qoldirish",
  },
  hero: {
    titleLine1: "Ilhom bag‘ishlovchi",
    titleLine2: "Yorug‘lik.",
    description:
      "Xonadonlar, idoralar, koʻchalar va sanʼat maydonlari uchun yoritish tizimlarini professional loyihalash, oʻrnatish va bezash. Yorugʻlikni sanʼat darajasiga olib chiqamiz.",
    studio: "Studiya",
    studioValue: "AlmazovLight",
    based: "Joylashuvi",
    basedValue: "TOSHKENT · UZ",
    practice: "Yoʻnalish",
    practiceValue: "UY · OFIS · KOʻCHA",
    credo: "Falsafa",
    credoValue: "YORUGʻLIK — SANʼAT",
    viewPortfolio: "Loyihalarni koʻrish",
  },
  about: {
    sectionNum: "[ 01 · BIZ HAQIMIZDA ]",
    title: "Har qanday makon uchun",
    titleEm: "zamonaviy yoritish yechimlari",
    titleEnd: ".",
    cards: [
      {
        idx: "01 / INTERYER YORITISH DIZAYNI",
        h: "Makonga mos chiroqlar",
        p: "Uy, ofis va retail uchun chiroqlarni tanlash va joylashtirish. Har bir yechim xona vazifasi, byudjet va kerakli kayfiyatga moslashtiriladi.",
      },
      {
        idx: "02 / HISOB-KITOB VA AQLLI BOSHQARUV",
        h: "Muhandislik va boshqaruv tizimlari",
        p: "Yoritilganlik, energiya samaradorligi va meʼyorlarga muvofiqlik oldindan tekshiriladi. Qulaylik, sahnalar va tejamkorlik uchun yoritishni boshqaruv tizimlari.",
      },
      {
        idx: "03 / ARXITEKTURA YORITISH",
        h: "Fasadlar, landshaftlar, jamoat joylari",
        p: "Fasadlar, landshaftlar va jamoat joylarining arxitektura yoritilishi — bino oʻz xarakterini yoʻqotmagan holda yangi tungi belgiga aylanadi.",
      },
    ],
  },
  process: {
    sectionNum: "[ 02 · BIZNING XIZMATLARIMIZ ]",
    titleStart: "Bizning",
    titleEm: "xizmatlarimiz",
    titleEnd: ".",
    readMore: "Bosqichni ochish",
    steps: [
      {
        num: "BOSQICH / 01",
        title: "Konsepsiya ishlab chiqish.",
        desc: "Arxitektura chizmalarini 3D-yoritish modeliga oʻtkazamiz — atmosfera, rang harorati va aksent qatlamlari onlayn tartibda siz bilan kelishiladi.",
      },
      {
        num: "BOSQICH / 02",
        title: "Yorugʻlik-texnik tahlil.",
        desc: "Dialux’da QMQ 2.01.05-2019 va EN 12464-1 boʻyicha fotometrik hisob-kitoblar — gorizontal va vertikal yoritilganlik, bir xillik, UGR, silindrik luks.",
      },
      {
        num: "BOSQICH / 03",
        title: "Uskunalarni tanlash.",
        desc: "Brendga bogʻliq boʻlmagan tanlov — yetakchi yevropa, premium osiyo va ishonchli mahalliy yetkazib beruvchilar — konsepsiya, hisob-kitoblar va byudjetga muvofiq.",
      },
      {
        num: "BOSQICH / 04",
        title: "Jihozlarni yetkazib berish.",
        desc: "Toʻliq logistika: mavjudlikni tekshirish, optimallashtirilgan yetkazib berish marshrutlari, bojxona va kafolat shartlari xarid oldidan kelishiladi.",
      },
      {
        num: "BOSQICH / 05",
        title: "Montaj va foydalanishga topshirish.",
        desc: "Oʻrnatish jamoamiz tizimni loyihaga qatʼiy muvofiq oʻrnatadi. Sahnalar, kanallar va boshqaruv tizimlari ishga tushiriladi va topshiriladi.",
      },
      {
        num: "BOSQICH / 06",
        title: "Xizmat va texnik koʻrik.",
        desc: "Kafolat qamrovi va muntazam texnik xizmat — tizim butun xizmat muddati davomida benuqson ishlaydi.",
      },
    ],
  },
  cases: {
    sectionNum: "[ 03 · BIZNING LOYIHALAR ]",
    titleStart: "Mehmonxonalar, uylar, savdo",
    titleEm: "va sanʼat maydonlari",
    titleEnd: ".",
    filters: {
      all: "Barcha loyihalar",
    },
    selection: "Tanlangan · barcha loyihalarni koʻring",
    fullPortfolio: "Barcha loyihalar",
    viewCase: "Loyihani koʻrish",
  },
  services: {
    sectionNum: "[ 04 · XIZMATLAR ]",
    titleStart: "Toʻliq sikl",
    titleEm: "yoritish xizmatlari",
    titleEnd: ".",
    enquire: "SOʻROV",
  },
  contact: {
    sectionNum: "[ 06 · KONTAKTLAR ]",
    titleStart: "Sizning",
    titleEm: "loyihangizni",
    titleEnd: " muhokama qilamiz.",
    statementStart: "Biz",
    statementEm: "ilhom bag‘ishlovchi yorug‘lik",
    statementEnd: " yaratamiz.",
    studio: "Studiya",
    studioValue: "AlmazovLight · Toshkent",
    hours: "Ish vaqti",
    hoursValue: "Du — Sha · 10 — 19",
    email: "Email",
    direct: "Toʻgʻridan-toʻgʻri",
    address: "Manzil",
    formIntro: "Yangi soʻrov",
    formName: "Ism",
    formNamePh: "Ismingiz",
    formEmail: "Email",
    formEmailPh: "you@studio.com",
    formTopic: "Mavzu",
    formTopicPh: "So'rov nimaga oid?",
    formBrief: "Xabaringiz",
    formBriefPh: "Vazifa, obyekt, muddat yoki izoh qoldiring.",
    requiredFieldError: "Majburiy maydon.",
    invalidEmailError: "To'g'ri email kiriting.",
    sendBrief: "So'rovni yuborish",
    sendingBrief: "Yuborilmoqda...",
    sendError:
      "So‘rovni yuborib bo‘lmadi. Qayta urinib ko‘ring yoki Telegram / WhatsApp orqali yozing.",
    sentMessage: "Xabar yuborildi — tez orada bogʻlanamiz.",
  },
  footer: {
    privacyPolicy: "Maxfiylik siyosati",
    studio: "Studiya",
    studioDesc:
      "AlmazovLight — xonadonlar, idoralar, koʻchalar va sanʼat maydonlari uchun yoritish tizimlarini professional loyihalash, oʻrnatish va bezash. Yorugʻlikni sanʼat darajasiga olib chiqamiz.",
    navigate: "Navigatsiya",
    connect: "Aloqa",
    office: "Ofis",
    inspiring: "Ilhom bag‘ishlovchi yorug‘lik",
  },
  privacy: {
    backHome: "Bosh sahifaga",
    eyebrow: "Huquqiy ma'lumot",
    title: "Maxfiylik siyosati",
    updated: "Yangilangan sana: 2026-yil 29-aprel",
    intro:
      "Ushbu siyosat AlmazovLight sayt orqali yuborilgan ariza va aloqa ma'lumotlarini qanday qayta ishlashini tushuntiradi.",
    metaDescription:
      "AlmazovLight maxfiylik siyosati: sayt arizalari, forma ma'lumotlari, email orqali yetkazish va saqlash muddatlari.",
    sections: [
      {
        title: "Biz yig'adigan ma'lumotlar",
        paragraphs: [
          "Ariza yuborilganda ism, email, loyiha mavzusi, xabar matni, tanlangan til va texnik anti-spam maydonlari olinadi.",
        ],
      },
      {
        title: "Ma'lumotlardan foydalanish",
        paragraphs: [
          "Bu ma'lumotlar arizaga javob berish, loyiha bo'yicha muloqotni tayyorlash, spamning oldini olish va sayt xavfsizligini saqlash uchun ishlatiladi.",
        ],
      },
      {
        title: "Emailni qayta ishlash",
        paragraphs: [
          "Arizalar Resend orqali yetkaziladi. Email mazmuni tranzaksion xabarlarni yetkazish uchun Resend tomonidan qayta ishlanishi mumkin.",
        ],
      },
      {
        title: "Ma'lumotlarni ulashish",
        paragraphs: [
          "Biz shaxsiy ma'lumotlarni sotmaymiz. Ular faqat sayt ishlashi va arizalarni qayta ishlash uchun zarur servis provayderlariga berilishi mumkin.",
        ],
      },
      {
        title: "Saqlash muddati",
        paragraphs: [
          "Ariza ma'lumotlari muloqot, loyiha yozuvlari va oqilona ma'muriy vazifalar uchun kerak bo'lgan muddat davomida saqlanadi.",
        ],
      },
    ],
    contactTitle: "Maxfiylik bo'yicha aloqa",
    contactText: "Maxfiylik bo'yicha savollar uchun bizga yozing:",
  },
  caseDetail: {
    backToCases: "Barcha loyihalarga qaytish",
    category: "Kategoriya",
    location: "Joylashuv",
    year: "Yil",
    objective: "Maqsad",
    contribution: "Bizning hissamiz",
    outcome: "Natija",
    gallery: "Loyiha galereyasi",
    previousImage: "Oldingi",
    nextImage: "Keyingi",
    related: "Boshqa loyihalar",
    nextCase: "Keyingi loyiha",
  },
  sponsors: {
    sectionNum: "[ 04 · HAMKORLAR ]",
    titleStart: "Biz birga",
    titleEm: "ishlaydigan brendlar",
    titleEnd: ".",
  },
  processDetail: {
    backToProcess: "Jarayonga qaytish",
    summary: "Qisqacha",
    allSteps: "Barcha bosqichlar",
    nextStep: "Keyingi bosqich",
    overview: "Tavsif",
  },
  meta: {
    title: "AlmazovLight — Toshkentdagi professional yoritish dizayni",
    description:
      "Toshkent, Oʻzbekistondagi xonadonlar, idoralar, koʻchalar va sanʼat maydonlari uchun yoritish tizimlarini professional loyihalash, oʻrnatish va bezash. Yorugʻlikni sanʼat darajasiga olib chiqamiz.",
    ogTitle: "AlmazovLight — Ilhom bag‘ishlovchi yorug‘lik",
  },
} satisfies Dictionary;

export const uz: Dictionary = applyTypographyToLocaleTree(uzDictionary, "uz");

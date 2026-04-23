import type { Locale } from "@/i18n/config";

export type CaseCategory = "facade" | "interior" | "commercial" | "residential";

export type LocalizedText = Record<Locale, string>;

export interface CaseGalleryImage {
  src: string;
  position?: string;
}

export interface CaseStudy {
  slug: string;
  category: CaseCategory;
  year: string;
  size: "wide" | "tall" | "default";
  scene: "facade" | "interior" | "commercial" | "art" | "stairs" | "bridge" | "lobby";
  image: string;
  imagePosition?: string;
  gallery: CaseGalleryImage[];
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
    slug: "private-house-tashkent",
    category: "facade",
    year: "2023",
    size: "default",
    scene: "interior",
    image: "/cases/private-house-tashkent-premium.png",
    imagePosition: "50% 54%",
    gallery: [
      { src: "/cases/private-house-tashkent/01-summer-kitchen.webp", position: "50% 52%" },
      { src: "/cases/private-house-tashkent/02-facade.webp", position: "50% 54%" },
      { src: "/cases/private-house-tashkent/03-entrance.webp", position: "48% 50%" },
    ],
    ref: "PR-042 / PRIVATE",
    title: {
      en: "Private House, Tashkent",
      ru: "Частный дом, Ташкент",
      uz: "Hovli, Toshkent",
    },
    location: {
      en: "Tashkent / Uzbekistan",
      ru: "Ташкент / Узбекистан",
      uz: "Toshkent / O'zbekiston",
    },
    categoryLabel: {
      en: "Facade Lighting",
      ru: "Фасадное освещение",
      uz: "Fasad yoritish",
    },
    shortDescription: {
      en: "One of our first projects in Tashkent was the lighting design for a private residence with a focus on its facade and summer kitchen. Though modest in scale, it marked our professional debut in the region.",
      ru: "Один из первых наших проектов в Ташкенте — освещение частного дома с акцентом на фасад и летнюю кухню. Небольшой по объему, но важный в плане подхода, этот проект стал своеобразной пробой пера в регионе.",
      uz: "Toshkentdagi ilk loyihalarimizdan biri — asosiy urg'u fasad va yozgi oshxonaga berilgan hovli yoritish tizimi. Garchi hajm jihatdan kichik bo'lsa-da, bu loyiha biz uchun mintaqadagi muhim ilk tajribalardan biri bo'ldi.",
    },
    objective: {
      en: "The primary objective was to create a luminous environment that highlights the home's architecture and atmosphere while remaining minimalist and comfortable. Special attention was paid to the evening lighting scheme for hosting guests: warm, subtle, and never aggressive.",
      ru: "Основная задача — создать световую среду, которая подчеркивает архитектуру и атмосферу дома, оставаясь при этом минималистичной и комфортной. Особое внимание уделили вечернему режиму освещения для приема гостей: свет должен быть теплым, тактичным и уютным.",
      uz: "Asosiy vazifa — binoning me'morchiligi va muhitini ta'kidlaydigan, ayni paytda minimalist va shinam bo'lib qoladigan yorug'lik muhitini yaratish. Mehmonlarni kutib olishga mo'ljallangan kechki yoritish rejimi ayniqsa iliq, vazmin va qulay bo'lishi kerak edi.",
    },
    contribution: [
      {
        en: "The facade lighting was designed to remain understated, with an emphasis on architectural form and material.",
        ru: "Архитектурная подсветка фасада выполнена сдержанно, с акцентом на форму и материал.",
        uz: "Fasadning me'moriy yoritilishi shakl va materialga urg'u bergan holda bosiqlik bilan bajarildi.",
      },
      {
        en: "In the summer kitchen, we used linear lighting integrated directly into the structures, avoiding excessive decorative elements.",
        ru: "В зоне летней кухни применено простое, но выразительное решение — линейная подсветка, встроенная в конструкции, без лишнего декоративного перегруза.",
        uz: "Yozgi oshxona hududida oddiy, biroq ifodali yechim qo'llanildi — ortiqcha dekorativ bezaklarsiz, konstruksiyalar ichiga o'rnatilgan chiziqli yoritish.",
      },
      {
        en: "The fireplace became the visual centerpiece of the space — a surface for the play of light.",
        ru: "Камин стал визуальным центром пространства, своего рода экраном, на который «играет» свет.",
        uz: "Kamin makonning vizual markaziga, yorug'lik «o'ynaydigan» o'ziga xos ekranga aylandi.",
      },
      {
        en: "All solutions were developed in close dialogue with the client and adapted to their wishes.",
        ru: "Все решения подбирались в диалоге с заказчиком и в максимальной степени адаптированы под его пожелания.",
        uz: "Barcha yechimlar buyurtmachi bilan muloqotda tanlandi va uning istaklariga maksimal darajada moslashtirildi.",
      },
    ],
    outcome: {
      en: "The house received a warm and restrained lighting environment that supports the architecture, hospitality, and everyday comfort of the space.",
      ru: "В итоге дом получил теплую и сдержанную световую среду, которая поддерживает архитектуру, атмосферу гостеприимства и повседневный комфорт пространства.",
      uz: "Natijada hovli me'morchilikni, mehmondo'stlik muhitini va kundalik qulaylikni qo'llab-quvvatlaydigan iliq hamda vazmin yorug'lik muhitiga ega bo'ldi.",
    },
  },
  {
    slug: "ddx-fitness-passage-spb",
    category: "interior",
    year: "2024",
    size: "default",
    scene: "interior",
    image: "/cases/ddx-fitness-passage-spb-premium.png",
    imagePosition: "56% 50%",
    gallery: [
      { src: "/cases/ddx-fitness-passage-spb/04-lounge.webp", position: "56% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/01-entry.webp", position: "50% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/02-studio.webp", position: "50% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/03-training-hall.webp", position: "52% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/05-wet-zone.webp", position: "50% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/06-lockers.webp", position: "50% 50%" },
      { src: "/cases/ddx-fitness-passage-spb/07-sauna.webp", position: "50% 50%" },
    ],
    ref: "PR-024 / INTERIOR",
    title: {
      en: "DDX Fitness at the Passage Department Store, St. Petersburg",
      ru: "DDX Fitness в ТД «Пассаж», Санкт-Петербург",
      uz: "DDX Fitness, «Passaj» Savdo Uyi, Sankt-Peterburg",
    },
    location: {
      en: "St. Petersburg / Russia",
      ru: "Санкт-Петербург / Россия",
      uz: "Sankt-Peterburg / Rossiya",
    },
    categoryLabel: {
      en: "Interior Lighting",
      ru: "Внутреннее освещение",
      uz: "Ichki yoritish",
    },
    shortDescription: {
      en: "In 2024, our team designed and technically supervised the lighting for DDX Fitness in the Passage Department Store on Nevsky Prospekt, one of St. Petersburg's most recognizable historic landmarks.",
      ru: "В 2024 году наша команда выполнила проектирование и светотехническое сопровождение пространства DDX Fitness в здании Торгового дома «Пассаж» на Невском проспекте — одном из самых узнаваемых исторических объектов Санкт-Петербурга.",
      uz: "2024-yilda jamoamiz Nevskiy shohko'chasidagi «Passaj» Savdo Uyi binosida joylashgan DDX Fitness makoni uchun yoritish tizimini loyihaladi va texnik jihatdan kuzatib bordi.",
    },
    objective: {
      en: "Our task was to integrate a modern engineering and lighting infrastructure without disrupting the historic fabric of the building. It was equally important to provide sufficient illumination for high-intensity workouts while eliminating glare, reflections, and oversaturation.",
      ru: "Наша задача состояла в том, чтобы интегрировать современную инженерную и световую инфраструктуру, не нарушив историческую ткань здания. При этом необходимо было обеспечить достаточную освещенность для высокоинтенсивных тренировок, исключив ослепление, блики и «перегрев» пространства светом.",
      uz: "Vazifamiz binoning tarixiy tuzilishiga zarar yetkazmasdan zamonaviy muhandislik va yoritish infratuzilmasini integratsiya qilishdan iborat edi. Shu bilan birga, yuqori intensivlikdagi mashg'ulotlar uchun yetarli yorug'likni ta'minlash va ko'zni qamashtirish hamda yaltirashni bartaraf etish muhim edi.",
    },
    contribution: [
      {
        en: "We utilized advanced optical systems with controlled light distribution, customized to the dimensions and reflectance properties of the halls.",
        ru: "Мы использовали современные оптические системы с контролируемым распределением света, кастомизированные под габариты и отражающую способность залов.",
        uz: "Biz zallarning o'lchamlari va yorug'likni qaytarish qobiliyatiga moslab tayyorlangan, yorug'lik taqsimoti nazorat qilinadigan zamonaviy optik tizimlardan foydalandik.",
      },
      {
        en: "The lighting was concealed within structural elements, including ceiling coves and beams, leaving the architecture visually untouched.",
        ru: "Освещение было скрыто в конструктивных элементах, включая потолочные ниши и балки, благодаря чему архитектура осталась визуально «нетронутой».",
        uz: "Yoritish tizimlari shift bo'shliqlari va to'sinlarni o'z ichiga olgan konstruktiv elementlarga yashirildi, shu tufayli me'morchilik vizual jihatdan daxlsiz qoldi.",
      },
      {
        en: "Adaptive lighting scenarios were implemented with adjustable color temperature and intensity based on time of day and functional load.",
        ru: "Были применены адаптивные сценарии освещения с возможностью изменения температурного режима и интенсивности в зависимости от времени суток и функциональной нагрузки помещения.",
        uz: "Kunning vaqti va xonaning funksional yuklamasiga qarab harorat rejimi va intensivligini o'zgartirish imkoniyatiga ega bo'lgan moslashuvchan yoritish ssenariylari qo'llanildi.",
      },
    ],
    outcome: {
      en: "The DDX at Passage became a nearly 2,000 m² modern fitness destination integrated into a historic envelope with deep respect for architectural heritage and attention to detail.",
      ru: "DDX в «Пассаже» стал почти 2000 м² современной инфраструктуры, интегрированной в историческую оболочку с глубоким уважением к архитектурному наследию и вниманием к деталям.",
      uz: "«Passaj»dagi DDX qariyb 2000 m² zamonaviy infratuzilmaga ega, tarixiy qobiq ichiga me'moriy merosga chuqur hurmat bilan integratsiya qilingan maskanga aylandi.",
    },
  },
  {
    slug: "grand-hotel-irkutsk",
    category: "facade",
    year: "2025",
    size: "wide",
    scene: "facade",
    image: "/cases/grand-hotel-irkutsk-premium.png",
    imagePosition: "50% 34%",
    gallery: [
      { src: "/cases/grand-hotel-irkutsk/04-night-corner.webp", position: "50% 34%" },
      { src: "/cases/grand-hotel-irkutsk/01-night-panorama.webp", position: "50% 48%" },
      { src: "/cases/grand-hotel-irkutsk/02-facade-detail.webp", position: "50% 38%" },
      { src: "/cases/grand-hotel-irkutsk/03-tower.webp", position: "50% 42%" },
    ],
    ref: "PR-017 / FACADE",
    title: {
      en: "Grand Hotel, Irkutsk",
      ru: "Гранд Отель, Иркутск",
      uz: "Grand mehmonxonasi, Irkutsk",
    },
    location: {
      en: "Irkutsk / Russia",
      ru: "Иркутск / Россия",
      uz: "Irkutsk / Rossiya",
    },
    categoryLabel: {
      en: "Facade Lighting",
      ru: "Фасадное освещение",
      uz: "Fasad yoritish",
    },
    shortDescription: {
      en: "The Irkutsk Grand Hotel is one of the most distinctive architectural landmarks in the historic heart of Irkutsk. The neoclassical building demanded an exceptionally sensitive lighting approach.",
      ru: "Здание «Иркутск Гранд Отель» — один из самых выразительных памятников архитектуры в историческом центре Иркутска. Выполненный в неоклассическом стиле объект требовал особенно деликатного подхода к световой концепции.",
      uz: "«Irkutsk Grand Hotel» binosi Irkutsk tarixiy markazidagi eng ifodali me'moriy yodgorliklardan biridir. Neoklassik uslubdagi obyekt yorug'lik konsepsiyasini ishlab chiqishda o'ta nozik yondashuvni talab qildi.",
    },
    objective: {
      en: "The goal was to accentuate the facade's rich architectural form and make the building a prominent feature in the city's nighttime panorama, while preserving its historical authenticity and respecting the urban balance.",
      ru: "Цель заключалась в том, чтобы подчеркнуть богатую архитектурную пластику фасада и сделать объект ярким акцентом в ночной панораме города, не нарушив при этом историческую аутентичность и баланс городской среды.",
      uz: "Maqsad — fasadning boy me'moriy plastikasini ta'kidlash va ayni paytda tarixiy o'ziga xoslik hamda shahar muhiti muvozanatini buzmagan holda, obyektni shaharning tungi panoramasida yorqin urg'uga aylantirish edi.",
    },
    contribution: [
      {
        en: "We developed a lighting scenario focused on the cornices, pilasters, and attics to shape a distinctive evening silhouette.",
        ru: "Мы разработали сценарий освещения, при котором основное внимание акцентируется на карнизах, пилястрах и аттиках, формируя выразительный вечерний силуэт здания.",
        uz: "Biz asosiy e'tiborni karnizlar, pilyastrlar va attiklarga qaratib, binoning ifodali kechki siluetini shakllantiradigan yoritish ssenariysini ishlab chiqdik.",
      },
      {
        en: "We proposed custom mounting solutions that avoided drilling into the historic surfaces.",
        ru: "Мы предложили нестандартные схемы крепления оборудования, позволяющие избежать сверления исторических поверхностей.",
        uz: "Biz tarixiy yuzalarni burg'ilashdan qochish imkonini beruvchi nostandart uskunalar mahkamlash sxemalarini taklif qildik.",
      },
      {
        en: "We ensured the most discreet integration of fixtures possible within the existing architecture.",
        ru: "Мы обеспечили максимально скрытую интеграцию светильников в существующую архитектуру.",
        uz: "Biz yoritish moslamalarining mavjud me'morchilikka maksimal darajada yashirin integratsiyasini ta'minladik.",
      },
    ],
    outcome: {
      en: "The resulting illumination is both expressive and elegant, highlighting the building's architectural value and reinforcing the city's identity. The hotel became a new nighttime landmark while retaining its historic character.",
      ru: "В результате объект получил выразительное, но элегантное освещение, подчеркивающее архитектурную ценность и усиливающее городскую идентичность. Здание стало новым ориентиром в вечернем Иркутске, сохранив весь свой исторический характер.",
      uz: "Natijada obyekt me'moriy qimmatini ta'kidlaydigan va shahar o'ziga xosligini kuchaytiradigan ifodali, ammo nafis yoritishga ega bo'ldi. Bino kechki Irkutskda yangi mo'ljalga aylandi va tarixiy qiyofasini saqlab qoldi.",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}

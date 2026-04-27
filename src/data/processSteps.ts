import type { Locale } from "@/i18n/config";
import { applyTypographyToLocalizedTree } from "@/utils/typography";

type LocalizedText = Record<Locale, string>;

export type ProcessBlock =
  | { kind: "lead"; text: LocalizedText }
  | { kind: "para"; text: LocalizedText }
  | { kind: "list"; heading?: LocalizedText; items: LocalizedText[] }
  | {
      kind: "steps";
      heading?: LocalizedText;
      items: { title: LocalizedText; body: LocalizedText }[];
    }
  | {
      kind: "table";
      heading?: LocalizedText;
      columns: LocalizedText[];
      rows: LocalizedText[][];
    };

export interface ProcessStepDetail {
  slug: string;
  num: string;
  title: LocalizedText;
  summary: LocalizedText;
  blocks: ProcessBlock[];
}

const RAW_STEPS: ProcessStepDetail[] = [
  {
    slug: "concept-development",
    num: "01",
    title: {
      en: "Concept development",
      ru: "Разработка концепции",
      uz: "Konsepsiya ishlab chiqish",
    },
    summary: {
      en: "Quality lighting begins with a strong concept. We translate architecture into a photorealistic 3D model so you see the atmosphere before a single fixture is mounted.",
      ru: "Хорошее освещение начинается с сильной концепции. Мы переводим архитектуру в фотореалистичную 3D-модель — атмосферу видно ещё до монтажа первого светильника.",
      uz: "Sifatli yoritish puxta konsepsiyadan boshlanadi. Arxitekturani fotorealistik 3D-modelga aylantiramiz — bironta chiroq oʻrnatilmasdan oldin atmosferani koʻrasiz.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We don’t just light up a space — we reveal it.",
          ru: "Мы не «подсвечиваем» пространство — мы его раскрываем.",
          uz: "Biz makonni shunchaki «yoritmaymiz» — uni ochamiz.",
        },
      },
      {
        kind: "para",
        text: {
          en: "Traditional flat lighting plans place fixtures on a drawing without simulating how the light will actually behave. The result on site is uneven distribution, mismatched temperatures, and an atmosphere that misses the mark.",
          ru: "Традиционные «плоские» проекты освещения расставляют светильники на чертеже без моделирования реального поведения света. На объекте это даёт неравномерность, несовпадающие температуры и атмосферу, которая «не та».",
          uz: "An’anaviy «yassi» loyihalar chizmaga chiroqlarni joylashtirish bilan cheklanadi va yorugʻlikning haqiqiy taʼsirini hisobga olmaydi. Natijada — notekis taqsimot, mos kelmaydigan haroratlar va kerakli atmosfera yoʻq.",
        },
      },
      {
        kind: "list",
        heading: {
          en: "What you get from a 3D concept",
          ru: "Что вы получаете от 3D-концепции",
          uz: "3D-konsepsiyadan nima olasiz",
        },
        items: [
          {
            en: "Photorealistic 3D visualization of the lighting environment before any equipment is installed.",
            ru: "Фотореалистичную 3D-визуализацию световой среды ещё до установки оборудования.",
            uz: "Jihoz oʻrnatilishidan oldin yoritish muhitining fotorealistik 3D vizualizatsiyasi.",
          },
          {
            en: "Precise photometric calculations: brightness levels, uniformity, accent zones.",
            ru: "Точные светотехнические расчёты: уровни яркости, равномерность освещения, акцентные зоны.",
            uz: "Aniq yoritish hisob-kitoblari: yorqinlik darajalari, bir tekislik, aksent zonalari.",
          },
          {
            en: "Live online review of the model — adjustments and scenario selection in real time.",
            ru: "Совместную онлайн-работу с моделью — правки и подбор сценариев света в реальном времени.",
            uz: "Model ustida onlayn ish — oʻzgartirishlar va sahnalarni real vaqtda tanlash.",
          },
        ],
      },
      {
        kind: "para",
        text: {
          en: "Our team builds a detailed 3D model from your architectural drawings, including furniture and finish materials. During video sessions you compare scenarios, request changes, and lock in the final concept together with us.",
          ru: "Наша команда собирает детальную 3D-модель по архитектурным чертежам — с мебелью и материалами отделки. На видеовстречах вы сравниваете сценарии, вносите правки и фиксируете финальную концепцию вместе с нами.",
          uz: "Jamoamiz arxitektura chizmalari asosida — mebel va pardozlash materiallari bilan birga — batafsil 3D-model yaratadi. Videouchrashuvlarda sahnalarni solishtirasiz, oʻzgartirish kiritasiz va biz bilan birga yakuniy konsepsiyani belgilaysiz.",
        },
      },
      {
        kind: "list",
        heading: {
          en: "Project deliverables",
          ru: "Результаты этапа",
          uz: "Bosqich natijalari",
        },
        items: [
          {
            en: "Multi-page report with concept, scenarios and rationale.",
            ru: "Многостраничный отчёт с концепцией, сценариями и обоснованием.",
            uz: "Konsepsiya, sahnalar va asoslash bilan koʻp sahifali hisobot.",
          },
          {
            en: "Fixture placement plans tied to the architectural layout.",
            ru: "Планы размещения светильников, привязанные к архитектурной планировке.",
            uz: "Arxitektura rejasiga bogʻlangan chiroqlarni joylashtirish rejalari.",
          },
          {
            en: "Presentation visualizations for the client team and contractors.",
            ru: "Презентационные визуализации для команды заказчика и подрядчиков.",
            uz: "Mijoz jamoasi va pudratchilar uchun taqdimot vizualizatsiyalari.",
          },
        ],
      },
    ],
  },

  {
    slug: "lighting-technical-analysis",
    num: "02",
    title: {
      en: "Lighting technical analysis",
      ru: "Светотехнический анализ",
      uz: "Yorugʻlik-texnik tahlil",
    },
    summary: {
      en: "An engineering analysis in Dialux that determines optimal lighting parameters — illuminance, uniformity, glare and equipment specification verified to current norms.",
      ru: "Инженерный анализ в Dialux, который определяет оптимальные параметры освещения — освещённость, равномерность, ослеплённость и спецификация оборудования по действующим нормативам.",
      uz: "Dialux’da bajariladigan muhandislik tahlili — joy uchun optimal yoritish parametrlari: yoritilganlik, bir xillik, koʻzni qamashtirish va jihoz tarkibi amaldagi normalarga muvofiq tekshiriladi.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Far more than “enough lux” — engineering, not guesswork.",
          ru: "Гораздо больше, чем «достаточно люкс» — инженерия, а не угадывание.",
          uz: "Bu shunchaki «luks yetarli» degan emas — bu muhandislik, taxmin emas.",
        },
      },
      {
        kind: "para",
        text: {
          en: "Calculations are run in Dialux against the active QMQ 2.01.05-2019 standard “Natural and artificial lighting” and the base normative package of Uzbekistan, with EN 12464-1 / ISO 8995-1 used for international projects.",
          ru: "Расчёты выполняются в Dialux по действующему стандарту ҚМҚ 2.01.05-2019 «Естественное и искусственное освещение» и базовому нормативному пакету Узбекистана, для международных проектов — по EN 12464-1 / ISO 8995-1.",
          uz: "Hisob-kitoblar Dialux’da amaldagi QMQ 2.01.05-2019 «Tabiiy va sun’iy yoritish» standarti va Oʻzbekistonning asosiy normativ paketi boʻyicha bajariladi; xalqaro loyihalar uchun EN 12464-1 / ISO 8995-1 qoʻllaniladi.",
        },
      },
      {
        kind: "list",
        heading: {
          en: "What you get",
          ru: "Что вы получаете",
          uz: "Nimani olasiz",
        },
        items: [
          {
            en: "Photorealistic visualizations of the light–shadow picture across switching scenarios.",
            ru: "Фотореалистичные визуализации светотеневой картины для разных сценариев включения.",
            uz: "Yoqish sahnalari boʻyicha yorugʻ-soya tasvirining fotorealistik vizualizatsiyalari.",
          },
          {
            en: "Horizontal and vertical illuminance verified against normative requirements.",
            ru: "Горизонтальную и вертикальную освещённость с проверкой требований нормативов.",
            uz: "Normativ talablarga muvofiq tekshirilgan gorizontal va vertikal yoritilganlik.",
          },
          {
            en: "Uniformity coefficient — eliminates dark spots in the working plane.",
            ru: "Коэффициент равномерности — исключает тёмные пятна в рабочей плоскости.",
            uz: "Bir xillik koeffitsienti — ish tekisligida qorongʻi joylar bartaraf etiladi.",
          },
          {
            en: "UGR (glare index) with recommendations on fixture positioning.",
            ru: "UGR (индекс ослеплённости) с рекомендациями по расположению светильников.",
            uz: "UGR (koʻzni qamashtirish indeksi) — chiroqlarni joylashtirish boʻyicha tavsiyalar bilan.",
          },
          {
            en: "Modeled and cylindrical illuminance for human-centric perception.",
            ru: "Моделирующее и цилиндрическое освещение для комфортного восприятия.",
            uz: "Inson idroki uchun modellovchi va silindrik yoritish.",
          },
          {
            en: "Zone-by-zone calculations driven by the activity in each space.",
            ru: "Отдельные расчёты по функциональным зонам с учётом специфики деятельности.",
            uz: "Faoliyat turini hisobga olgan holda funksional zonalar boʻyicha alohida hisoblar.",
          },
          {
            en: "Fixture specification: models, optics, color temperature and control system.",
            ru: "Спецификацию светильников: модели, оптику, цветовую температуру и систему управления.",
            uz: "Chiroqlar tarkibi: modellar, optika, rang harorati va boshqaruv tizimi.",
          },
        ],
      },
      {
        kind: "steps",
        heading: {
          en: "How the calculation runs",
          ru: "Как идёт расчёт",
          uz: "Hisob qanday boriladi",
        },
        items: [
          {
            title: {
              en: "Approve the lighting concept",
              ru: "Утверждаем концепцию освещения",
              uz: "Yoritish konsepsiyasini tasdiqlaymiz",
            },
            body: {
              en: "Together with the interior designer we agree on tasks, character of the light and equipment types.",
              ru: "Совместно с дизайнером интерьера фиксируем задачи, характер света и типы оборудования.",
              uz: "Interyer dizayneri bilan birga vazifalarni, yorugʻlik xarakterini va jihoz turlarini kelishamiz.",
            },
          },
          {
            title: {
              en: "Build the 3D model in Dialux",
              ru: "Собираем 3D-модель в Dialux",
              uz: "Dialux’da 3D-model yigʻamiz",
            },
            body: {
              en: "Geometry, finish reflectance and the actual photometric data of the selected fixtures are loaded into the model.",
              ru: "В модель загружаются геометрия, коэффициенты отражения отделки и реальные фотометрические данные выбранных светильников.",
              uz: "Modelga geometriya, pardozlashning qaytarish koeffitsientlari va tanlangan chiroqlarning haqiqiy fotometrik maʼlumotlari yuklanadi.",
            },
          },
          {
            title: {
              en: "Run calculations to current norms",
              ru: "Запускаем расчёты по нормативам",
              uz: "Normativlar boʻyicha hisoblarni ishga tushiramiz",
            },
            body: {
              en: "Illuminance, uniformity, UGR and cylindrical lux are verified against QMQ 2.01.05-2019 (or EN 12464-1 internationally).",
              ru: "Освещённость, равномерность, UGR и цилиндрический люкс выверяются по ҚМҚ 2.01.05-2019 (или EN 12464-1 для зарубежных проектов).",
              uz: "Yoritilganlik, bir xillik, UGR va silindrik luks QMQ 2.01.05-2019 (xalqaro loyihalarda EN 12464-1) boʻyicha tekshiriladi.",
            },
          },
          {
            title: {
              en: "Analyse results and optimise",
              ru: "Анализируем и оптимизируем",
              uz: "Natijalarni tahlil qilib optimallashtiramiz",
            },
            body: {
              en: "We refine the layout, optics or fixture selection and recalculate until every zone meets the spec.",
              ru: "Корректируем раскладку, оптику или подбор светильников и пересчитываем — пока каждая зона не уложится в нормы.",
              uz: "Joylashish, optika yoki chiroq tanlovini aniqlaymiz va har bir zona meʼyorlarga tushgunga qadar qayta hisoblaymiz.",
            },
          },
          {
            title: {
              en: "Deliver the report",
              ru: "Готовим отчёт",
              uz: "Hisobotni tayyorlaymiz",
            },
            body: {
              en: "PDF with visualizations, tables and a final equipment specification — ready for procurement and expert review.",
              ru: "PDF с визуализациями, таблицами и итоговой спецификацией оборудования — готов к закупке и экспертизе.",
              uz: "Vizualizatsiyalar, jadvallar va yakuniy jihoz tarkibi bilan PDF — xarid va ekspertiza uchun tayyor.",
            },
          },
        ],
      },
      {
        kind: "table",
        heading: {
          en: "Sample norms · QMQ 2.01.05-2019",
          ru: "Пример нормативов · ҚМҚ 2.01.05-2019",
          uz: "Normativ namunasi · QMQ 2.01.05-2019",
        },
        columns: [
          { en: "Space / zone", ru: "Помещение / зона", uz: "Joy / zona" },
          {
            en: "Min. average lux",
            ru: "Мин. средняя освещ., лк",
            uz: "Min. oʻrtacha luks",
          },
          { en: "Uniformity", ru: "Равномерность", uz: "Bir xillik" },
          { en: "UGR max", ru: "UGR, не выше", uz: "UGR, eng koʻp" },
        ],
        rows: [
          [
            {
              en: "Hotel guest / living room",
              ru: "Гостевая / жилая комната отеля",
              uz: "Mehmon / yashash xonasi (mehmonxona)",
            },
            { en: "200", ru: "200", uz: "200" },
            { en: "0.5", ru: "0,5", uz: "0,5" },
            { en: "22", ru: "22", uz: "22" },
          ],
          [
            {
              en: "Office workstation",
              ru: "Рабочее место в офисе",
              uz: "Ofisdagi ish joyi",
            },
            { en: "500", ru: "500", uz: "500" },
            { en: "0.6", ru: "0,6", uz: "0,6" },
            { en: "19", ru: "19", uz: "19" },
          ],
          [
            {
              en: "Corridors, halls",
              ru: "Коридоры, холлы",
              uz: "Yoʻlaklar, zallar",
            },
            { en: "100", ru: "100", uz: "100" },
            { en: "0.4", ru: "0,4", uz: "0,4" },
            { en: "25", ru: "25", uz: "25" },
          ],
        ],
      },
    ],
  },

  {
    slug: "equipment-selection",
    num: "03",
    title: {
      en: "Equipment selection",
      ru: "Подбор оборудования",
      uz: "Uskunalarni tanlash",
    },
    summary: {
      en: "After the concept and working drawings are approved we move to selecting fixtures and control components — fully matched to the calculated scenario, the architecture and your budget.",
      ru: "После утверждения концепции и рабочей документации переходим к подбору светильников и компонентов управления — точно под расчётный сценарий, архитектуру и бюджет.",
      uz: "Konsepsiya va ishchi hujjatlar tasdiqlanganidan soʻng chiroqlar va boshqaruv komponentlarini tanlashga oʻtamiz — hisoblangan sahna, arxitektura va byudjetga toʻliq mos.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We are not tied to a brand. We are tied to your project.",
          ru: "Мы не привязаны к бренду — мы привязаны к проекту.",
          uz: "Biz brendga emas — loyihaga bogʻlanamiz.",
        },
      },
      {
        kind: "list",
        heading: {
          en: "Each selected fixture must",
          ru: "Каждый подобранный светильник должен",
          uz: "Tanlangan har bir chiroq quyidagilarga javob berishi kerak",
        },
        items: [
          {
            en: "Match the approved concept and the photometric calculations.",
            ru: "Соответствовать утверждённой концепции и светотехническим расчётам.",
            uz: "Tasdiqlangan konsepsiyaga va yoritish hisob-kitoblariga muvofiq boʻlishi.",
          },
          {
            en: "Deliver the required lighting effects and visual comfort.",
            ru: "Обеспечивать нужные световые эффекты и визуальный комфорт.",
            uz: "Kerakli yorugʻlik effektlari va vizual qulaylikni taʼminlashi.",
          },
          {
            en: "Integrate cleanly with the architecture and the interior.",
            ru: "Чисто интегрироваться в архитектуру и интерьер.",
            uz: "Arxitektura va interyer bilan toza integratsiyalanishi.",
          },
          {
            en: "Match the project’s quality bar and budget.",
            ru: "Соответствовать уровню качества и бюджету проекта.",
            uz: "Loyihaning sifat darajasi va byudjetiga mos boʻlishi.",
          },
        ],
      },
      {
        kind: "steps",
        heading: {
          en: "How we select",
          ru: "Как мы подбираем",
          uz: "Qanday tanlaymiz",
        },
        items: [
          {
            title: {
              en: "Analyse project requirements",
              ru: "Анализируем требования проекта",
              uz: "Loyiha talablarini tahlil qilamiz",
            },
            body: {
              en: "We study the approved working documentation and prepare a detailed technical brief — purpose of each room, usage scenarios, normative requirements, aesthetic and installation constraints.",
              ru: "Изучаем утверждённую рабочую документацию и формируем подробный технический бриф — назначение каждой комнаты, сценарии использования, нормативные требования, эстетика и особенности монтажа.",
              uz: "Tasdiqlangan ishchi hujjatlarni oʻrganamiz va batafsil texnik brif tayyorlaymiz — har bir xonaning vazifasi, foydalanish sahnalari, normativ talablar, estetika va oʻrnatish xususiyatlari.",
            },
          },
          {
            title: {
              en: "Build a preliminary equipment list",
              ru: "Формируем предварительный список",
              uz: "Dastlabki roʻyxat tuzamiz",
            },
            body: {
              en: "Several optimal options are picked for each zone (general, accent, decorative, technical) — drawing on leading European brands, premium Asian solutions and trusted local suppliers.",
              ru: "Подбираем несколько оптимальных решений по каждой зоне (общее, акцентное, декоративное, техническое освещение) — из ведущих европейских брендов, премиальных азиатских и проверенных локальных поставщиков.",
              uz: "Har bir zona uchun bir nechta optimal yechim tanlaymiz (umumiy, aksent, dekorativ, texnik yoritish) — yetakchi yevropa brendlari, premium osiyo va ishonchli mahalliy yetkazib beruvchilar orasidan.",
            },
          },
          {
            title: {
              en: "Coordinate with the client and design team",
              ru: "Согласуем с заказчиком и дизайнерами",
              uz: "Mijoz va dizaynerlar bilan kelishamiz",
            },
            body: {
              en: "We prepare visual presentations and specifications and walk the client and architect/designer through preferences for style, finishes and integration.",
              ru: "Готовим визуальные подборки и спецификации, обсуждаем с заказчиком и архитектором/дизайнером пожелания по стилю, отделке и интеграции.",
              uz: "Vizual tanlovlar va spetsifikatsiyalar tayyorlaymiz; mijoz va arxitektor/dizayner bilan uslub, pardozlash va integratsiya boʻyicha xohish-istaklarni muhokama qilamiz.",
            },
          },
          {
            title: {
              en: "Lock the list and prepare for procurement",
              ru: "Финализируем список и готовим к закупке",
              uz: "Roʻyxatni yakunlab xaridga tayyorlaymiz",
            },
            body: {
              en: "The agreed list becomes a procurement specification: stock checks, optimised delivery routes, customs and warranty terms agreed before purchase.",
              ru: "Согласованный список превращается в закупочную спецификацию: проверка наличия, оптимизация маршрутов доставки, согласование таможни и гарантийных условий до закупки.",
              uz: "Kelishilgan roʻyxat xarid spetsifikatsiyasiga aylanadi: mavjudlikni tekshirish, yetkazib berish marshrutlarini optimallashtirish, xarid oldidan bojxona va kafolat shartlarini kelishish.",
            },
          },
        ],
      },
      {
        kind: "para",
        text: {
          en: "Following the right sequence — concept → working drawings → equipment selection — avoids the most common construction-phase problems: fixtures that don’t fit the project, insufficient light, awkward integration and schedule slips.",
          ru: "Правильный порядок — концепция → рабочая документация → подбор оборудования — избавляет от самых частых проблем стройки: светильники не вписываются, света не хватает, кривая интеграция и срыв сроков.",
          uz: "Toʻgʻri ketma-ketlik — konsepsiya → ishchi hujjatlar → uskunalarni tanlash — qurilish bosqichidagi eng koʻp uchraydigan muammolardan saqlaydi: loyihaga mos kelmaydigan chiroqlar, yorugʻlik yetishmasligi, notoʻgʻri integratsiya va muddatlarning surilishi.",
        },
      },
    ],
  },

  {
    slug: "equipment-delivery",
    num: "04",
    title: {
      en: "Equipment delivery",
      ru: "Поставка оборудования",
      uz: "Jihozlarni yetkazib berish",
    },
    summary: {
      en: "Once the equipment list is locked we take full responsibility for ordering, production control and logistics — through to handover on site.",
      ru: "Как только список утверждён, мы берём на себя полную ответственность за заказ, контроль производства и логистику — вплоть до сдачи оборудования на объекте.",
      uz: "Roʻyxat tasdiqlangach, biz buyurtma berish, ishlab chiqarish nazorati va logistikani toʻliq oʻz zimmamizga olamiz — jihozlar obyektga topshirilgunga qadar.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Without proper logistics, even the best project fails on site.",
          ru: "Без чёткой логистики даже лучший проект «спотыкается» на стройке.",
          uz: "Aniq logistikasiz hatto eng yaxshi loyiha ham qurilishda «qoqilib» qoladi.",
        },
      },
      {
        kind: "steps",
        heading: {
          en: "How delivery is organised",
          ru: "Как мы организуем поставку",
          uz: "Yetkazib berishni qanday tashkil etamiz",
        },
        items: [
          {
            title: {
              en: "Order placement",
              ru: "Размещение заказа",
              uz: "Buyurtma berish",
            },
            body: {
              en: "After specifications are signed we place orders with European brands (factoring in production lead times) and with local / Asian partners (with quality and deadline control).",
              ru: "После подписания спецификации размещаем заказы у европейских брендов (с учётом сроков производства) и у локальных / азиатских партнёров (с контролем качества и сроков).",
              uz: "Spetsifikatsiyalar imzolangach, yevropa brendlariga (ishlab chiqarish muddatlarini hisobga olgan holda) va mahalliy / osiyo hamkorlariga (sifat va muddatlar nazorati bilan) buyurtma beramiz.",
            },
          },
          {
            title: {
              en: "Production control",
              ru: "Контроль производства",
              uz: "Ishlab chiqarish nazorati",
            },
            body: {
              en: "We monitor product readiness, assembly quality on custom items and compliance with the agreed specification — including factory inspections for large or unique projects.",
              ru: "Мониторим готовность, качество сборки кастомных изделий и соответствие согласованной спецификации — вплоть до инспекций на фабрике для крупных или уникальных проектов.",
              uz: "Mahsulot tayyorligini, maxsus elementlarning yigʻilish sifatini va kelishilgan spetsifikatsiyaga muvofiqligini kuzatamiz — yirik yoki nodir loyihalar uchun zavoddagi inspeksiyalargacha.",
            },
          },
          {
            title: {
              en: "Logistics optimisation",
              ru: "Оптимизация логистики",
              uz: "Logistikani optimallashtirish",
            },
            body: {
              en: "Delivery to warehouse or directly to site, batch consolidation so each zone arrives complete, all paperwork prepared (certificates, manuals, warranties), trusted partners for international freight.",
              ru: "Доставка на склад или сразу на объект, объединение партий — чтобы каждая зона приходила в комплекте, подготовка документов (сертификаты, инструкции, гарантии), проверенные партнёры по международным перевозкам.",
              uz: "Omborga yoki bevosita obyektga yetkazib berish, partiyalarni birlashtirib har bir zonani toʻliq holda yetkazish, hujjatlarni tayyorlash (sertifikatlar, qoʻllanmalar, kafolatlar), xalqaro yuk tashish boʻyicha ishonchli hamkorlar.",
            },
          },
          {
            title: {
              en: "Site handover",
              ru: "Передача на объекте",
              uz: "Obyektga topshirish",
            },
            body: {
              en: "On arrival the client receives acceptance acts, delivery specifications and recommendations on storage and pre-installation. Our specialists can join the joint acceptance with your technical team.",
              ru: "По прибытии заказчик получает акты приёмки, спецификацию поставки и рекомендации по хранению и подготовке к монтажу. Наши специалисты могут участвовать в совместной приёмке с вашей технической командой.",
              uz: "Yetib kelganda mijoz qabul aktlari, yetkazib berish spetsifikatsiyasi hamda saqlash va montaj oldidan tayyorlash boʻyicha tavsiyalar oladi. Mutaxassislarimiz texnik jamoangiz bilan birgalikdagi qabulda ishtirok eta oladi.",
            },
          },
        ],
      },
    ],
  },

  {
    slug: "installation-commissioning",
    num: "05",
    title: {
      en: "Installation & commissioning",
      ru: "Монтаж и пуско-наладка",
      uz: "Montaj va foydalanishga topshirish",
    },
    summary: {
      en: "After delivery we install and commission the system — either supporting your construction team or working turnkey with our certified partners.",
      ru: "После поставки мы монтируем и запускаем систему — либо сопровождая вашу стройплощадку, либо «под ключ» с нашими сертифицированными партнёрами.",
      uz: "Yetkazib berish ortidan tizimni oʻrnatib ishga tushiramiz — qurilish jamoangizni qoʻllab-quvvatlash yoki sertifikatlangan hamkorlarimiz bilan «kalitiga» rejimida.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Light is a precision instrument — installation is where it’s decided.",
          ru: "Свет — точный инструмент. Монтаж — этап, на котором всё решается.",
          uz: "Yorugʻlik — nozik vosita. Hammasi montajda hal boʻladi.",
        },
      },
      {
        kind: "steps",
        heading: {
          en: "Two ways to run installation",
          ru: "Два формата работы на монтаже",
          uz: "Montajda ishlashning ikki formati",
        },
        items: [
          {
            title: {
              en: "Option A — your team, our supervision",
              ru: "Вариант A — ваша бригада, наш надзор",
              uz: "A varianti — sizning brigada, bizning nazorat",
            },
            body: {
              en: "We hand over the full working documentation, brief your installers, and supervise key stages on site so the system goes in exactly as designed.",
              ru: "Передаём полную рабочую документацию, проводим инструктаж монтажников и сопровождаем ключевые этапы на объекте, чтобы система собралась ровно так, как спроектирована.",
              uz: "Toʻliq ishchi hujjatlarni topshiramiz, oʻrnatuvchilarni brief qilamiz va asosiy bosqichlarni obyektda kuzatib boramiz — tizim aynan loyihalanganidek yigʻilishi uchun.",
            },
          },
          {
            title: {
              en: "Option B — turnkey with our partners",
              ru: "Вариант B — «под ключ» с нашими партнёрами",
              uz: "B varianti — hamkorlarimiz bilan «kalitiga»",
            },
            body: {
              en: "Certified electrical crews, qualified lighting technicians and control-system specialists. We oversee the project end-to-end — from accepting the equipment through to programming the final scenes.",
              ru: "Сертифицированные электромонтажные бригады, квалифицированные светотехники и специалисты по системам управления. Сопровождаем проект сквозь — от приёмки оборудования до программирования финальных сцен.",
              uz: "Sertifikatlangan elektromontaj brigadalari, malakali yoritish mutaxassislari va boshqaruv tizimi boʻyicha ekspertlar. Loyihani jihoz qabulidan yakuniy sahnalarni dasturlashgacha boshidan oxirigacha kuzatamiz.",
            },
          },
        ],
      },
      {
        kind: "para",
        text: {
          en: "Either way we stay on the project until the system is signed off and the lighting works exactly as the concept promised.",
          ru: "В любом из вариантов мы остаёмся на проекте до подписания актов и до момента, когда свет работает ровно так, как обещала концепция.",
          uz: "Har ikki variantda ham aktlar imzolanishigacha va yorugʻlik konsepsiyada vaʼda qilingandek ishlay boshlagunga qadar loyihada qolamiz.",
        },
      },
    ],
  },

  {
    slug: "service-maintenance",
    num: "06",
    title: {
      en: "Service & maintenance",
      ru: "Сервис и обслуживание",
      uz: "Xizmat va texnik koʻrik",
    },
    summary: {
      en: "We stay in touch after handover. Workmanship warranty, manufacturer warranty and optional scheduled maintenance keep the installed system performing flawlessly for years.",
      ru: "После сдачи мы остаёмся на связи. Гарантия на работы, гарантия производителя и опциональное плановое обслуживание — чтобы система работала безупречно годами.",
      uz: "Topshirilgandan keyin ham aloqada qolamiz. Ishlar uchun kafolat, ishlab chiqaruvchi kafolati va ixtiyoriy rejali texnik xizmat — tizim yillar davomida benuqson ishlashi uchun.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Your lighting concept should keep delivering for years, not weeks.",
          ru: "Ваша световая концепция должна радовать годами, а не неделями.",
          uz: "Yoritish konsepsiyangiz hafta emas, yillar davomida quvonch bagʻishlashi kerak.",
        },
      },
      {
        kind: "list",
        heading: {
          en: "Included guarantees",
          ru: "Что входит по гарантии",
          uz: "Kafolatga nimalar kiradi",
        },
        items: [
          {
            en: "1 month of workmanship warranty on installation and commissioning — any defects discovered during operation are corrected free of charge.",
            ru: "1 месяц гарантии на работы (монтаж и пуско-наладка) — недочёты, выявленные при эксплуатации, устраняем бесплатно.",
            uz: "Montaj va ishga tushirish boʻyicha 1 oy ish kafolati — foydalanish jarayonida aniqlangan kamchiliklar bepul bartaraf etiladi.",
          },
          {
            en: "Manufacturer’s warranty on the equipment — typically 2–5 years depending on brand.",
            ru: "Гарантия производителя на оборудование — обычно 2–5 лет в зависимости от бренда.",
            uz: "Jihozlar uchun ishlab chiqaruvchi kafolati — odatda brendga qarab 2–5 yil.",
          },
        ],
      },
      {
        kind: "list",
        heading: {
          en: "Optional services",
          ru: "Дополнительные услуги",
          uz: "Qoʻshimcha xizmatlar",
        },
        items: [
          {
            en: "Scheduled maintenance under a separate contract.",
            ru: "Плановое сервисное обслуживание по отдельному договору.",
            uz: "Alohida shartnoma boʻyicha rejali texnik xizmat.",
          },
          {
            en: "Consulting on operation and evolution of the lighting system — adding new scenes, integrating with smart-home platforms.",
            ru: "Консультации по эксплуатации и развитию системы освещения — добавление новых сценариев, интеграция с «умным домом».",
            uz: "Yoritish tizimini ishlatish va rivojlantirish boʻyicha maslahat — yangi sahnalar qoʻshish, «aqlli uy» platformalari bilan integratsiya.",
          },
        ],
      },
    ],
  },
];

const STEPS: ProcessStepDetail[] = applyTypographyToLocalizedTree(RAW_STEPS);

export const processSteps = STEPS;

export function getProcessStepBySlug(slug: string): ProcessStepDetail | undefined {
  return STEPS.find((step) => step.slug === slug);
}

export const PROCESS_SLUGS = STEPS.map((s) => s.slug);

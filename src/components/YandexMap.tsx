import { contactInfo } from "@/data/contact";
import type { Locale } from "@/i18n/config";

const yandexHost: Record<Locale, string> = {
  en: "https://yandex.com/map-widget/v1/",
  ru: "https://yandex.ru/map-widget/v1/",
  uz: "https://yandex.uz/map-widget/v1/",
};

export default function YandexMap({ locale }: { locale: Locale }) {
  const { lat, lng } = contactInfo.geo;
  const ll = `${lng},${lat}`;
  const src = `${yandexHost[locale]}?ll=${ll}&z=15&pt=${ll},pm2rdm&mode=search`;

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      frameBorder={0}
      loading="lazy"
      allowFullScreen
      title={`DILIGHT studio location — ${contactInfo.city[locale]}`}
      style={{ border: 0, display: "block", filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
    />
  );
}

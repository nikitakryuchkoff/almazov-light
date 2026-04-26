import { contactInfo } from "@/data/contact";
import type { Locale } from "@/i18n/config";
import styles from "./YandexMap.module.css";

const yandexHost: Record<Locale, string> = {
  en: "https://yandex.com/map-widget/v1/",
  ru: "https://yandex.ru/map-widget/v1/",
  uz: "https://yandex.uz/map-widget/v1/",
};

export default function YandexMap({ locale }: { locale: Locale }) {
  const query = encodeURIComponent(contactInfo.mapQuery);
  const src = `${yandexHost[locale]}?text=${query}&z=17&mode=search`;

  return (
    <iframe
      src={src}
      className={styles.frame}
      width="100%"
      height="100%"
      frameBorder={0}
      loading="lazy"
      allowFullScreen
      title={`AlmazovLight studio location — ${contactInfo.address[locale]}`}
    />
  );
}

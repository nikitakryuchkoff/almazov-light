import ContactForm from "@/components/ContactForm";
import YandexMap from "@/components/YandexMap";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { contactInfo } from "@/data/contact";
import styles from "./Contact.module.css";

export default function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeader
          number={dict.contact.sectionNum}
          title={
            <>
              {dict.contact.titleStart}{" "}
              <em>
                {dict.contact.titleEm}
                {dict.contact.titleEnd}
              </em>
            </>
          }
        />

        <div className={styles.grid}>
          <div data-reveal>
            <p className={styles.statement}>
              {dict.contact.statementStart}{" "}
              <em>
                {dict.contact.statementEm}
                {dict.contact.statementEnd}
              </em>
            </p>
            <div className={styles.meta}>
              <div>
                <div className={styles.key}>{dict.contact.studio}</div>
                <div className={styles.value}>{dict.contact.studioValue}</div>
              </div>
              <div>
                <div className={styles.key}>{dict.contact.hours}</div>
                <div className={styles.value}>{dict.contact.hoursValue}</div>
              </div>
              <div>
                <div className={styles.key}>{dict.contact.email}</div>
                <div className={styles.value}>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
              <div>
                <div className={styles.key}>{dict.contact.direct}</div>
                <div className={styles.value}>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
                </div>
              </div>
              <div>
                <div className={styles.key}>{dict.contact.address}</div>
                <div className={styles.value}>{contactInfo.address[locale]}</div>
              </div>
            </div>
            <div className={styles.map}>
              <YandexMap locale={locale} />
            </div>
          </div>

          <ContactForm dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
}

import ContactForm from "./ContactForm";
import YandexMap from "./YandexMap";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { contactInfo } from "@/data/contact";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="contact">
      <div className="container">
        <header className="section-head rv">
          <div className="section-num" style={mono}>{dict.contact.sectionNum}</div>
          <h2 className="section-title">
            {dict.contact.titleStart}{" "}<em>{dict.contact.titleEm}</em>{dict.contact.titleEnd}
          </h2>
        </header>

        <div className="contact-grid">
          <div className="rv">
            <p className="contact-statement">
              {dict.contact.statementStart}{" "}<em>{dict.contact.statementEm}</em>{dict.contact.statementEnd}
            </p>
            <div className="contact-meta" style={mono}>
              <div className="kv">
                <div className="k">{dict.contact.studio}</div>
                <div className="v" style={{ fontFamily: "var(--font-display)" }}>{dict.contact.studioValue}</div>
              </div>
              <div className="kv">
                <div className="k">{dict.contact.hours}</div>
                <div className="v" style={{ fontFamily: "var(--font-display)" }}>{dict.contact.hoursValue}</div>
              </div>
              <div className="kv">
                <div className="k">{dict.contact.email}</div>
                <div className="v" style={{ fontFamily: "var(--font-display)" }}>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
              <div className="kv">
                <div className="k">{dict.contact.direct}</div>
                <div className="v" style={{ fontFamily: "var(--font-display)" }}>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
                </div>
              </div>
            </div>
            <div className="map"><YandexMap locale={locale} /></div>
          </div>

          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  );
}

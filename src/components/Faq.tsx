import type { Locale } from "@/i18n/config";
import { faqItems, faqSectionCopy } from "@/data/faq";
import SectionHeader from "./ui/SectionHeader";
import styles from "./Faq.module.css";

export default function Faq({
  locale,
}: {
  locale: Locale;
}) {
  const copy = faqSectionCopy[locale];

  return (
    <section id="services">
      <div className="container">
        <SectionHeader
          number={copy.sectionNum}
          title={
            <>
              {copy.titleStart} <em>{copy.titleEm}</em>
              {copy.titleEnd}
            </>
          }
        />

        <div className={styles.list} data-reveal>
          {faqItems[locale].map((item, index) => (
            <details
              key={item.question}
              className={styles.item}
              data-hover
              open={index === 0}
            >
              <summary className={styles.summary}>
                <span className={styles.index}>
                  Q / {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>

              <div className={styles.answerWrap}>
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

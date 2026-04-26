"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqItems, faqSectionCopy } from "@/data/faq";
import styles from "./Faq.module.css";

export default function Faq({ locale }: { locale: Locale }) {
  const copy = faqSectionCopy[locale];
  const items = faqItems[locale];

  // Multi-open accordion. The first item is open on first paint to mirror the
  // previous native <details open> behaviour.
  const [openSet, setOpenSet] = useState<ReadonlySet<number>>(() => new Set([0]));

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

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
          {items.map((item, index) => {
            const open = openSet.has(index);
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={[styles.item, open ? styles.open : ""].filter(Boolean).join(" ")}
                data-hover
              >
                <button
                  id={buttonId}
                  type="button"
                  className={styles.summary}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.index}>
                    Q / {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.toggle} aria-hidden="true" />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.answerWrap}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

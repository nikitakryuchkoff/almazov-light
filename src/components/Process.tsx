import Link from "next/link";
import ProcessTimeline from "./ProcessTimeline";
import SectionHeader from "./ui/SectionHeader";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { PROCESS_SLUGS } from "@/data/processSteps";
import styles from "./Process.module.css";

export default function Process({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="process">
      <div className="container">
        <SectionHeader
          number={dict.process.sectionNum}
          title={
            <>
              {dict.process.titleStart} <em>{dict.process.titleEm}</em>{" "}
              {dict.process.titleEnd}
            </>
          }
        />

        <ProcessTimeline>
          {dict.process.steps.map((step, index) => {
            const slug = PROCESS_SLUGS[index];
            return (
              <Link
                key={index}
                href={`/${locale}/process/${slug}`}
                className={styles.step}
                data-hover
                data-reveal
                aria-label={`${step.num} — ${step.title}`}
              >
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepHeading}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDescription}>{step.desc}</p>
                <div className={styles.stepCta}>
                  <span className={styles.stepCtaDot} aria-hidden />
                  <span className={styles.stepCtaLabel}>
                    {dict.process.readMore}
                  </span>
                  <svg
                    className={styles.stepArrow}
                    viewBox="0 0 14 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    aria-hidden
                  >
                    <path d="M1 5 H13 M9 1 L13 5 L9 9" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </ProcessTimeline>
      </div>
    </section>
  );
}

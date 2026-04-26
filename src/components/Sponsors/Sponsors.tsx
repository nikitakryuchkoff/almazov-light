import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import SectionHeader from "@/components/ui/SectionHeader";
import { sponsors } from "@/data/sponsors";
import styles from "./Sponsors.module.css";

export default function Sponsors({
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  // Triple the list so the marquee always has enough content to fill the
  // viewport across the wrap point — animation translates by -33.333%.
  const track = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section id="sponsors" className={styles.section}>
      <div className="container">
        <SectionHeader
          number={dict.sponsors.sectionNum}
          title={
            <>
              {dict.sponsors.titleStart} <em>{dict.sponsors.titleEm}</em>
              {dict.sponsors.titleEnd}
            </>
          }
        />
      </div>

      <div className={styles.marquee} data-reveal>
        <div className={styles.fadeLeft} aria-hidden />
        <div className={styles.fadeRight} aria-hidden />
        <ul className={styles.track} aria-label="Partner logos">
          {track.map((sponsor, index) => (
            <li
              key={`${sponsor.src}-${index}`}
              className={styles.item}
              aria-hidden={index >= sponsors.length ? true : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.src}
                alt={index < sponsors.length ? sponsor.name : ""}
                className={styles.logo}
                loading="lazy"
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

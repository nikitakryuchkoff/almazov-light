import Clock from "@/components/Clock";
import HeroBackground from "@/components/HeroBackground";
import type { Dictionary } from "@/i18n";
import CtaLink from "@/components/ui/CtaLink";
import type { Locale } from "@/i18n/config";
import styles from "./Hero.module.css";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const beams = [
    [styles.beam, styles.beam1].join(" "),
    [styles.beam, styles.beam2, styles.cool].join(" "),
    [styles.beam, styles.beam3].join(" "),
    [styles.beam, styles.beam4].join(" "),
    [styles.beam, styles.beam5, styles.cool].join(" "),
    [styles.beam, styles.beam6].join(" "),
  ];

  const pools = [
    [styles.pool, styles.pool1].join(" "),
    [styles.pool, styles.pool2].join(" "),
    [styles.pool, styles.pool3].join(" "),
  ];

  return (
    <section className={styles.root} id="top">
      <div className={styles.stage}>
        <HeroBackground />
        <div className={styles.beams}>
          {beams.map((className, index) => (
            <div key={index} className={className} />
          ))}
        </div>
        {pools.map((className, index) => (
          <div key={index} className={className} />
        ))}
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span>{dict.hero.titleLine1}</span>
          </span>
          <br />
          <span className={styles.titleLineDelayed}>
            <span>
              <em>{dict.hero.titleLine2}</em>
            </span>
          </span>
        </h1>

        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span>{dict.hero.studio}</span>
            <span className={styles.metaValue}>{dict.hero.studioValue}</span>
          </div>
          <div className={styles.metaRow}>
            <span>{dict.hero.based}</span>
            <span className={styles.metaValue}>{dict.hero.basedValue}</span>
          </div>
          <div className={styles.metaRow}>
            <span>{dict.hero.practice}</span>
            <span className={styles.metaValue}>{dict.hero.practiceValue}</span>
          </div>
          <div className={styles.metaRow}>
            <span>{dict.hero.credo}</span>
            <span className={styles.metaValue}>{dict.hero.credoValue}</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <CtaLink href={`/${locale}#cases`} className={styles.bottomCta}>
          {dict.hero.viewPortfolio}
        </CtaLink>
        <div className={styles.ticker}>
          <span>41.3111° N</span>
          <span>69.2797° E</span>
          <Clock />
        </div>
      </div>
    </section>
  );
}

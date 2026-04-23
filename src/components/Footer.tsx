import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { contactInfo } from "@/data/contact";
import styles from "./Footer.module.css";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = `/${locale}`;

  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.columns}>
          <div className={[styles.column, styles.lead].join(" ")}>
            <h6 className={styles.columnTitle}>{dict.footer.studio}</h6>
            <p className={styles.studioDesc}>{dict.footer.studioDesc}</p>
          </div>
          <div className={styles.column}>
            <h6 className={styles.columnTitle}>{dict.footer.navigate}</h6>
            <div className={styles.linkList}>
              <Link href={`${home}#about`}>{dict.nav.about}</Link>
              <Link href={`${home}#process`}>{dict.nav.process}</Link>
              <Link href={`${home}#cases`}>{dict.nav.cases}</Link>
              <Link href={`${home}#services`}>{dict.nav.services}</Link>
            </div>
          </div>
          <div className={styles.column}>
            <h6 className={styles.columnTitle}>{dict.footer.connect}</h6>
            <div className={styles.linkList}>
              <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h6 className={styles.columnTitle}>{dict.footer.office}</h6>
            <div className={styles.linkList}>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
              <span className={styles.metaText}>RU / EN / UZ</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} AlmazovLight · {dict.footer.rights}</span>
          <span>{dict.footer.inspiring}</span>
        </div>
      </div>
    </footer>
  );
}

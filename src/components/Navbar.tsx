"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import { localeShort } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import styles from "./Navbar.module.css";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle(styles.scrolled, y > 40);
      if (y > lastY.current && y > 200) nav.classList.add(styles.hidden);
      else nav.classList.remove(styles.hidden);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = `/${locale}`;

  return (
    <nav className={styles.root} ref={navRef} aria-label="Main navigation">
      <Link className={styles.brand} href={`${home}#top`}>
        <span className={styles.mark} />
        DILIGHT<span className={styles.slash}>·</span>ALMAZOV
      </Link>
      <div className={styles.links}>
        <Link href={`${home}#about`} className={styles.link}>
          {dict.nav.about}
        </Link>
        <Link href={`${home}#process`} className={styles.link}>
          {dict.nav.process}
        </Link>
        <Link href={`${home}#cases`} className={styles.link}>
          {dict.nav.cases}
        </Link>
        <Link href={`${home}#services`} className={styles.link}>
          {dict.nav.services}
        </Link>
        <Link href={`${home}#contact`} className={styles.link}>
          {dict.nav.contact}
        </Link>
      </div>
      <div className={styles.right}>
        <span className={styles.location}>
          <span className={styles.locDot} />
          {dict.nav.location}
        </span>
        <span className={styles.langSwitch} aria-label="Language switcher">
          {(["en", "ru", "uz"] as Locale[]).map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              hrefLang={l}
              className={[styles.langLink, l === locale ? styles.langLinkActive : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {localeShort[l]}
            </Link>
          ))}
        </span>
      </div>
    </nav>
  );
}

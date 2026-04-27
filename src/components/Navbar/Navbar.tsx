"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeShort } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { faqSectionCopy } from "@/data/faq";
import styles from "./Navbar.module.css";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locales = ["en", "ru", "uz"] as const;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle(styles.scrolled, y > 40 || isMenuOpen);
      if (isMenuOpen) {
        nav.classList.remove(styles.hidden);
        lastY.current = y;
        return;
      }
      if (y > lastY.current && y > 200) {
        nav.classList.add(styles.hidden);
      } else {
        nav.classList.remove(styles.hidden);
      }
      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const home = `/${locale}`;
  const faqLabel = faqSectionCopy[locale].navLabel;
  const navLinks = [
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#process`, label: dict.nav.process },
    { href: `${home}#cases`, label: dict.nav.cases },
    { href: `${home}#faq`, label: faqLabel },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  const getLocaleHref = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    if (segments.length < 2) return `/${nextLocale}${hash}`;
    segments[1] = nextLocale;
    const nextPath = segments.join("/") || `/${nextLocale}`;

    return `${nextPath}${hash}`;
  };

  return (
    <nav className={styles.root} ref={navRef} aria-label="Main navigation">
      <Link className={styles.brand} href={`${home}#top`} aria-label="AlmazovLight">
        <Image
          src="/brand/almazov-light-logo.png"
          alt="Almazov Light"
          width={560}
          height={140}
          className={styles.logoImage}
          priority
        />
      </Link>
      <div className={styles.links}>
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.right}>
        <span className={styles.langSwitch} aria-label="Language switcher">
          {locales.map((l) => (
            <Link
              key={l}
              href={getLocaleHref(l)}
              hrefLang={l}
              className={[styles.langLink, l === locale ? styles.langLinkActive : ""]
                .filter(Boolean)
                .join(" ")}
              aria-current={l === locale ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {localeShort[l]}
            </Link>
          ))}
        </span>
        <button
          type="button"
          className={[styles.menuButton, isMenuOpen ? styles.menuButtonActive : ""]
            .filter(Boolean)
            .join(" ")}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>
      {isMenuOpen ? (
        <div className={styles.mobilePanel} id="mobile-nav">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}

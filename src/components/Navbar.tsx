"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import { localeShort } from "@/i18n/config";
import type { Dictionary } from "@/i18n";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

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
      nav.classList.toggle("scrolled", y > 40);
      if (y > lastY.current && y > 200) nav.classList.add("hidden");
      else nav.classList.remove("hidden");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = `/${locale}`;

  return (
    <nav className="top-nav" ref={navRef} aria-label="Main navigation">
      <Link className="brand" href={`${home}#top`}>
        <span className="mark" />
        DILIGHT<span className="slash">·</span>ALMAZOV
      </Link>
      <div className="nav-links" style={mono}>
        <Link href={`${home}#about`}>{dict.nav.about}</Link>
        <Link href={`${home}#process`}>{dict.nav.process}</Link>
        <Link href={`${home}#cases`}>{dict.nav.cases}</Link>
        <Link href={`${home}#services`}>{dict.nav.services}</Link>
        <Link href={`${home}#contact`}>{dict.nav.contact}</Link>
      </div>
      <div className="nav-right" style={mono}>
        <span>
          <span className="loc-dot" />
          {dict.nav.location}
        </span>
        <span className="lang-switch" aria-label="Language switcher">
          {(["en", "ru", "uz"] as Locale[]).map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              hrefLang={l}
              className={l === locale ? "active" : ""}
            >
              {localeShort[l]}
            </Link>
          ))}
        </span>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import styles from "./CtaLink.module.css";

export default function CtaLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(href, window.location.origin);

    if (
      targetUrl.origin !== currentUrl.origin ||
      targetUrl.pathname !== currentUrl.pathname ||
      !targetUrl.hash
    ) {
      return;
    }

    const targetId = decodeURIComponent(targetUrl.hash.slice(1));
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    event.preventDefault();
    window.history.pushState(null, "", `${targetUrl.pathname}${targetUrl.hash}`);
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link
      href={href}
      className={[styles.root, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      onClick={handleClick}
      data-hover
      data-radial
    >
      <span className={styles.dot} />
      <span className={styles.label}>{children}</span>
      <svg
        className={styles.arrow}
        viewBox="0 0 14 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M1 5 H13 M9 1 L13 5 L9 9" />
      </svg>
    </Link>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
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
  return (
    <Link
      href={href}
      className={[styles.root, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
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

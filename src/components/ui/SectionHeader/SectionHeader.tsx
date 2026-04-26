import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ number, title }: { number: string; title: ReactNode }) {
  return (
    <header className={styles.root} data-reveal>
      <div className={styles.number}>{number}</div>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}

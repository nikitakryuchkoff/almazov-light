import type { ReactNode } from "react";
import styles from "./ProcessTimeline.module.css";

export default function ProcessTimeline({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}

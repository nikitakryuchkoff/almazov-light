"use client";

import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState("--:--:-- LOC");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        String(d.getHours()).padStart(2, "0") +
          ":" +
          String(d.getMinutes()).padStart(2, "0") +
          ":" +
          String(d.getSeconds()).padStart(2, "0") +
          " LOC",
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className={styles.root}>{time}</span>;
}

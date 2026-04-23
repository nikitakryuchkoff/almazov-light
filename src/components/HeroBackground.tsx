import styles from "./Hero.module.css";

export default function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.backgroundImage} src="/hero-bg.svg" alt="" />
      <div className={styles.backgroundOverlay} />
    </div>
  );
}

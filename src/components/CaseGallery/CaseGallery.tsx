"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseGalleryImage } from "@/data/portfolio";
import styles from "./CaseGallery.module.css";

export default function CaseGallery({
  images,
  title,
  label,
  previousLabel,
  nextLabel,
}: {
  images: CaseGalleryImage[];
  title: string;
  label: string;
  previousLabel: string;
  nextLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const total = images.length;

  if (!activeImage) return null;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  return (
    <section className={styles.root} data-reveal aria-label={`${label}: ${title}`}>
      <div className={styles.header}>
        <span>{label}</span>
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.frame}>
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={`${title} ${activeIndex + 1}`}
          fill
          quality={92}
          className={styles.image}
          sizes="(max-width: 960px) 100vw, 1600px"
          style={{ objectPosition: activeImage.position ?? "50% 50%" }}
        />
        <div className={styles.vignette} aria-hidden="true" />

        {total > 1 ? (
          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={goToPrevious} aria-label={previousLabel}>
              <span>{previousLabel}</span>
              <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M17 6H1M6 1 1 6l5 5" />
              </svg>
            </button>
            <button type="button" className={styles.arrow} onClick={goToNext} aria-label={nextLabel}>
              <span>{nextLabel}</span>
              <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M1 6h16M12 1l5 5-5 5" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>

      {total > 1 ? (
        <div className={styles.thumbs} aria-label={label}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={[styles.thumb, activeIndex === index ? styles.active : ""].filter(Boolean).join(" ")}
              onClick={() => setActiveIndex(index)}
              aria-label={`${label} ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <span className={styles.thumbIndex}>{String(index + 1).padStart(2, "0")}</span>
              <Image
                src={image.src}
                alt=""
                fill
                className={styles.thumbImage}
                sizes="160px"
                style={{ objectPosition: image.position ?? "50% 50%" }}
              />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

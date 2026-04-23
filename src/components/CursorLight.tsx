"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorLight.module.css";

export default function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    const dot = dotRef.current;
    if (!light || !dot) return;
    if (window.matchMedia("(max-width: 960px)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx;
    let ty = my;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const onLeave = () => {
      light.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const onEnter = () => {
      light.style.opacity = "1";
      dot.style.opacity = "1";
    };

    let raf = 0;
    const animate = () => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      light.style.left = `${tx}px`;
      light.style.top = `${ty}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const setupHover = () => {
      const hoverElements = document.querySelectorAll("[data-hover]");
      const radialElements = document.querySelectorAll<HTMLElement>("[data-radial]");
      const addHover = () => dot.classList.add(styles.hover);
      const removeHover = () => dot.classList.remove(styles.hover);

      hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", addHover);
        element.addEventListener("mouseleave", removeHover);
      });

      const onRadialMove = function (this: HTMLElement, event: MouseEvent) {
        const rect = this.getBoundingClientRect();
        this.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        this.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      };

      radialElements.forEach((element) => {
        element.addEventListener("mousemove", onRadialMove as EventListener);
      });

      return () => {
        hoverElements.forEach((element) => {
          element.removeEventListener("mouseenter", addHover);
          element.removeEventListener("mouseleave", removeHover);
        });

        radialElements.forEach((element) => {
          element.removeEventListener("mousemove", onRadialMove as EventListener);
        });
      };
    };

    const cleanupHover = setupHover();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cleanupHover();
    };
  }, []);

  return (
    <>
      <div className={styles.light} ref={lightRef} aria-hidden />
      <div className={styles.dot} ref={dotRef} aria-hidden />
    </>
  );
}

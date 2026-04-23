"use client";

import { useEffect, useRef } from "react";

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

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    const onLeave = () => { light.style.opacity = "0"; dot.style.opacity = "0"; };
    const onEnter = () => { light.style.opacity = "1"; dot.style.opacity = "1"; };

    let raf: number;
    const animate = () => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      light.style.left = tx + "px";
      light.style.top = ty + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const setupHover = () => {
      const hoverEls = document.querySelectorAll("[data-hover]");
      const addHover = () => dot.classList.add("hover");
      const removeHover = () => dot.classList.remove("hover");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
      const radialEls = document.querySelectorAll<HTMLElement>(".service, .cta");
      const onRadialMove = function (this: HTMLElement, e: MouseEvent) {
        const r = this.getBoundingClientRect();
        this.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        this.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      };
      radialEls.forEach((el) =>
        el.addEventListener("mousemove", onRadialMove as EventListener)
      );
      return () => {
        hoverEls.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
        radialEls.forEach((el) =>
          el.removeEventListener("mousemove", onRadialMove as EventListener)
        );
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
      <div className="cursor-light" ref={lightRef} aria-hidden />
      <div className="cursor-dot" ref={dotRef} aria-hidden />
    </>
  );
}

import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { services } from "@/data/services";
import SectionHeader from "./ui/SectionHeader";
import styles from "./Services.module.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M2 5 H8 M6 2 L8 5 L6 8" />
  </svg>
);

const serviceVizs: Record<string, React.ReactNode> = {
  "concept-development": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect
        x="20"
        y="20"
        width="260"
        height="100"
        stroke="rgba(255,255,255,0.12)"
      />
      <rect x="20" y="20" width="260" height="2" fill="oklch(70% 0.16 245)" />
      <rect x="20" y="118" width="260" height="2" fill="oklch(70% 0.16 245)" />
      <rect x="18" y="20" width="2" height="100" fill="oklch(70% 0.16 245)" />
      <rect x="280" y="20" width="2" height="100" fill="oklch(70% 0.16 245)" />
      <rect
        x="10"
        y="22"
        width="280"
        height="8"
        fill="oklch(70% 0.16 245 / 0.2)"
      />
    </svg>
  ),
  "lighting-technical-analysis": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <line x1="20" y1="30" x2="280" y2="30" stroke="rgba(255,255,255,0.1)" />
      {[60, 120, 180, 240].map((x) => (
        <g key={x}>
          <line
            x1={x}
            y1="30"
            x2={x}
            y2={x === 60 ? 70 : x === 120 ? 60 : x === 180 ? 75 : 65}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          />
          <circle
            cx={x}
            cy={x === 60 ? 70 : x === 120 ? 60 : x === 180 ? 75 : 65}
            r="2"
            fill="oklch(70% 0.16 245)"
          />
          <ellipse
            cx={x}
            cy="120"
            rx="28"
            ry="5"
            fill="oklch(70% 0.16 245 / 0.3)"
          />
        </g>
      ))}
    </svg>
  ),
  "equipment-selection": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      {[
        { x: 60, cx: 85 },
        { x: 190, cx: 215 },
      ].map((fixture) => (
        <g key={fixture.x}>
          <rect
            x={fixture.x}
            y="40"
            width="50"
            height="60"
            fill="#0a0a0a"
            stroke="rgba(255,255,255,0.15)"
          />
          <path
            d={`M${fixture.cx} 20 L${fixture.cx} 40`}
            stroke="oklch(70% 0.16 245)"
            strokeWidth="0.8"
          />
          <circle cx={fixture.cx} cy="18" r="3" fill="oklch(70% 0.16 245)" />
          <ellipse
            cx={fixture.cx}
            cy="70"
            rx="35"
            ry="30"
            fill="oklch(70% 0.16 245 / 0.15)"
          />
        </g>
      ))}
    </svg>
  ),
  "equipment-delivery": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect
        x="30"
        y="40"
        width="240"
        height="60"
        stroke="rgba(255,255,255,0.12)"
      />
      <rect
        x="30"
        y="40"
        width="60"
        height="60"
        fill="rgba(255,255,255,0.04)"
      />
      <rect
        x="100"
        y="40"
        width="60"
        height="60"
        fill="rgba(255,255,255,0.04)"
      />
      <rect
        x="170"
        y="40"
        width="60"
        height="60"
        fill="rgba(255,255,255,0.04)"
      />
      <line
        x1="30"
        y1="120"
        x2="270"
        y2="120"
        stroke="oklch(70% 0.16 245 / 0.5)"
        strokeDasharray="4 4"
      />
      <circle cx="270" cy="120" r="3" fill="oklch(70% 0.16 245)" />
    </svg>
  ),
  "installation-commissioning": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <path d="M30 120 L150 30 L270 120 Z" stroke="rgba(255,255,255,0.12)" />
      <circle cx="150" cy="55" r="3" fill="oklch(70% 0.16 245)" />
      <ellipse
        cx="150"
        cy="120"
        rx="80"
        ry="12"
        fill="oklch(70% 0.16 245 / 0.3)"
      />
      <path d="M150 55 L100 120 L200 120 Z" fill="oklch(70% 0.16 245 / 0.12)" />
    </svg>
  ),
  "service-maintenance": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect
        x="30"
        y="30"
        width="240"
        height="80"
        stroke="rgba(255,255,255,0.1)"
      />
      {[
        { y: 42, w: 180, c: "oklch(70% 0.16 245)" },
        { y: 60, w: 80, c: "oklch(85% 0.08 215)" },
        { y: 78, w: 140, c: "oklch(70% 0.16 245)" },
        { y: 96, w: 50, c: "oklch(85% 0.08 215)" },
      ].map((bar) => (
        <g key={bar.y}>
          <rect
            x="40"
            y={bar.y}
            width="220"
            height="3"
            fill={bar.c.replace(")", " / 0.25)")}
          />
          <rect x="40" y={bar.y} width={bar.w} height="3" fill={bar.c} />
        </g>
      ))}
    </svg>
  ),
};

export default function Services({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="services">
      <div className="container">
        <SectionHeader
          number={dict.services.sectionNum}
          title={
            <>
              {dict.services.titleStart} <em>{dict.services.titleEm}</em>
              {dict.services.titleEnd}
            </>
          }
        />

        <div className={styles.grid} data-reveal>
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={styles.card}
              data-hover
              data-radial
            >
              <div className={styles.head}>
                <span>{service.shortName[locale]}</span>
                <span className={styles.index}>{service.idx}</span>
              </div>
              <div className={styles.demo}>{serviceVizs[service.slug]}</div>
              <div>
                <h3 className={styles.title}>{service.title[locale]}</h3>
                <p className={styles.description}>
                  {service.description[locale]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

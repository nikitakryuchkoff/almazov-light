import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { services } from "@/data/services";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

const ArrowIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M2 5 H8 M6 2 L8 5 L6 8" />
  </svg>
);

const serviceVizs: Record<string, React.ReactNode> = {
  "concept-development": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect x="20" y="20" width="260" height="100" stroke="rgba(255,255,255,0.12)" />
      <rect x="20" y="20" width="260" height="2" fill="oklch(78% 0.16 75)" />
      <rect x="20" y="118" width="260" height="2" fill="oklch(78% 0.16 75)" />
      <rect x="18" y="20" width="2" height="100" fill="oklch(78% 0.16 75)" />
      <rect x="280" y="20" width="2" height="100" fill="oklch(78% 0.16 75)" />
      <rect x="10" y="22" width="280" height="8" fill="oklch(78% 0.16 75 / 0.2)" />
    </svg>
  ),
  "lighting-technical-analysis": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <line x1="20" y1="30" x2="280" y2="30" stroke="rgba(255,255,255,0.1)" />
      {[60, 120, 180, 240].map((x) => (
        <g key={x}>
          <line x1={x} y1="30" x2={x} y2={x === 60 ? 70 : x === 120 ? 60 : x === 180 ? 75 : 65} stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <circle cx={x} cy={x === 60 ? 70 : x === 120 ? 60 : x === 180 ? 75 : 65} r="2" fill="oklch(78% 0.16 75)" />
          <ellipse cx={x} cy="120" rx="28" ry="5" fill="oklch(78% 0.16 75 / 0.3)" />
        </g>
      ))}
    </svg>
  ),
  "equipment-selection": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      {[{ x: 60, cx: 85 }, { x: 190, cx: 215 }].map((f) => (
        <g key={f.x}>
          <rect x={f.x} y="40" width="50" height="60" fill="#0a0a0a" stroke="rgba(255,255,255,0.15)" />
          <path d={`M${f.cx} 20 L${f.cx} 40`} stroke="oklch(78% 0.16 75)" strokeWidth="0.8" />
          <circle cx={f.cx} cy="18" r="3" fill="oklch(78% 0.16 75)" />
          <ellipse cx={f.cx} cy="70" rx="35" ry="30" fill="oklch(78% 0.16 75 / 0.15)" />
        </g>
      ))}
    </svg>
  ),
  "equipment-delivery": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect x="30" y="40" width="240" height="60" stroke="rgba(255,255,255,0.12)" />
      <rect x="30" y="40" width="60" height="60" fill="rgba(255,255,255,0.04)" />
      <rect x="100" y="40" width="60" height="60" fill="rgba(255,255,255,0.04)" />
      <rect x="170" y="40" width="60" height="60" fill="rgba(255,255,255,0.04)" />
      <line x1="30" y1="120" x2="270" y2="120" stroke="oklch(78% 0.16 75 / 0.5)" strokeDasharray="4 4" />
      <circle cx="270" cy="120" r="3" fill="oklch(78% 0.16 75)" />
    </svg>
  ),
  "installation-commissioning": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <path d="M30 120 L150 30 L270 120 Z" stroke="rgba(255,255,255,0.12)" />
      <circle cx="150" cy="55" r="3" fill="oklch(78% 0.16 75)" />
      <ellipse cx="150" cy="120" rx="80" ry="12" fill="oklch(78% 0.16 75 / 0.3)" />
      <path d="M150 55 L100 120 L200 120 Z" fill="oklch(78% 0.16 75 / 0.12)" />
    </svg>
  ),
  "service-maintenance": (
    <svg viewBox="0 0 300 140" className="scene" fill="none">
      <rect x="30" y="30" width="240" height="80" stroke="rgba(255,255,255,0.1)" />
      {[
        { y: 42, w: 180, c: "oklch(78% 0.16 75)" },
        { y: 60, w: 80, c: "oklch(78% 0.14 230)" },
        { y: 78, w: 140, c: "oklch(78% 0.16 75)" },
        { y: 96, w: 50, c: "oklch(78% 0.14 230)" },
      ].map((bar) => (
        <g key={bar.y}>
          <rect x="40" y={bar.y} width="220" height="3" fill={bar.c.replace(")", " / 0.25)")} />
          <rect x="40" y={bar.y} width={bar.w} height="3" fill={bar.c} />
        </g>
      ))}
    </svg>
  ),
};

export default function Services({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="services">
      <div className="container">
        <header className="section-head rv">
          <div className="section-num" style={mono}>{dict.services.sectionNum}</div>
          <h2 className="section-title">
            {dict.services.titleStart}{" "}<em>{dict.services.titleEm}</em>{dict.services.titleEnd}
          </h2>
        </header>

        <div className="services-grid rv">
          {services.map((s, i) => (
            <article key={s.slug} className="service" data-hover>
              <div className="service-head" style={mono}>
                <span>{s.shortName[locale]}</span>
                <span className="idx">{s.idx}</span>
              </div>
              <div className="service-demo">{serviceVizs[s.slug]}</div>
              <div>
                <h3 style={{
                  fontSize: 26, fontWeight: 300, letterSpacing: "-0.015em",
                  lineHeight: 1.15, maxWidth: "14ch",
                }}>
                  {s.title[locale]}
                </h3>
                <p>{s.description[locale]}</p>
              </div>
              <div className="service-bottom" style={mono}>
                <span>{String(i + 1).padStart(2, "0")} — {dict.services.enquire}</span>
                <span className="go"><ArrowIcon /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

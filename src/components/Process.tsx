import ProcessTimeline from "./ProcessTimeline";
import type { Dictionary } from "@/i18n";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

const stepVizs = [
  <svg key="1" viewBox="0 0 160 80" stroke="oklch(78% 0.16 75)" fill="none" strokeWidth="0.8">
    <rect x="20" y="20" width="120" height="40" opacity="0.4" />
    <circle cx="40" cy="40" r="2" fill="oklch(78% 0.16 75)" />
    <circle cx="80" cy="40" r="2" fill="oklch(78% 0.16 75)" />
    <circle cx="120" cy="40" r="2" fill="oklch(78% 0.16 75)" />
    <path d="M40 40 L60 60 M80 40 L80 70 M120 40 L100 60" strokeDasharray="2 2" opacity="0.6" />
  </svg>,
  <svg key="2" viewBox="0 0 160 80" fill="none">
    <defs>
      <linearGradient id="m1" x1="0" x2="1">
        <stop offset="0" stopColor="oklch(78% 0.16 75)" stopOpacity="0" />
        <stop offset="1" stopColor="oklch(78% 0.16 75)" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <rect x="10" y="30" width="140" height="20" fill="url(#m1)" />
    <text x="10" y="22" fill="rgba(255,255,255,0.4)" fontSize="7">2200K → 4000K</text>
  </svg>,
  <svg key="3" viewBox="0 0 160 80" stroke="oklch(78% 0.16 75)" fill="none" strokeWidth="0.6">
    <path d="M10 70 L30 40 L50 55 L70 25 L90 45 L110 20 L130 35 L150 15" opacity="0.9" />
    <path d="M10 70 L30 40 L50 55 L70 25 L90 45 L110 20 L130 35 L150 15 L150 70 Z" fill="oklch(78% 0.16 75)" opacity="0.1" stroke="none" />
    <line x1="10" y1="70" x2="150" y2="70" opacity="0.3" />
  </svg>,
  <svg key="4" viewBox="0 0 160 80" stroke="oklch(78% 0.16 75)" fill="none" strokeWidth="0.6">
    <circle cx="30" cy="40" r="10" opacity="0.6" />
    <rect x="55" y="30" width="20" height="20" opacity="0.6" />
    <path d="M95 30 L115 30 L115 50 L95 50 Z M100 40 L110 40" opacity="0.6" />
    <circle cx="140" cy="40" r="6" fill="oklch(78% 0.16 75)" />
  </svg>,
  <svg key="5" viewBox="0 0 160 80" fill="none">
    <rect x="10" y="20" width="140" height="4" fill="oklch(78% 0.16 75)" opacity="0.3" />
    <rect x="10" y="20" width="40" height="4" fill="oklch(78% 0.16 75)" />
    <rect x="10" y="36" width="140" height="4" fill="oklch(78% 0.14 230)" opacity="0.3" />
    <rect x="10" y="36" width="90" height="4" fill="oklch(78% 0.14 230)" />
    <rect x="10" y="52" width="140" height="4" fill="oklch(78% 0.16 75)" opacity="0.3" />
    <rect x="10" y="52" width="70" height="4" fill="oklch(78% 0.16 75)" />
  </svg>,
  <svg key="6" viewBox="0 0 160 80" fill="none">
    <circle cx="80" cy="40" r="4" fill="oklch(78% 0.16 75)" />
    <circle cx="80" cy="40" r="12" stroke="oklch(78% 0.16 75)" strokeWidth="0.5" opacity="0.6" />
    <circle cx="80" cy="40" r="22" stroke="oklch(78% 0.16 75)" strokeWidth="0.5" opacity="0.35" />
    <circle cx="80" cy="40" r="32" stroke="oklch(78% 0.16 75)" strokeWidth="0.5" opacity="0.15" />
    <text x="115" y="43" fill="oklch(78% 0.16 75)" fontSize="8">OK</text>
  </svg>,
];

export default function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process">
      <div className="container">
        <header className="section-head rv">
          <div className="section-num" style={mono}>{dict.process.sectionNum}</div>
          <h2 className="section-title">
            {dict.process.titleStart}{" "}<em>{dict.process.titleEm}</em>{" "}{dict.process.titleEnd}
          </h2>
        </header>

        <ProcessTimeline>
          {dict.process.steps.map((step, i) => (
            <div key={i} className="process-step rv" data-hover>
              <div className="step-num" style={mono}>{step.num}</div>
              <div><h3>{step.title}</h3></div>
              <p>{step.desc}</p>
              <div className="step-viz">{stepVizs[i]}</div>
            </div>
          ))}
        </ProcessTimeline>
      </div>
    </section>
  );
}

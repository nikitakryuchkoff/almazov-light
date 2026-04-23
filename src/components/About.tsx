import type { Dictionary } from "@/i18n";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function About({ dict }: { dict: Dictionary }) {
  const cards = dict.about.cards;
  return (
    <section id="about">
      <div className="container">
        <header className="section-head rv">
          <div className="section-num" style={mono}>{dict.about.sectionNum}</div>
          <h2 className="section-title">
            {dict.about.title}
            {" "}<em>{dict.about.titleEm}</em>{" "}
            {dict.about.titleEnd}
          </h2>
        </header>

        <div className="about-grid rv">
          <article className="about-card" data-hover>
            <div>
              <div className="idx" style={mono}>{cards[0].idx}</div>
              <h3>{cards[0].h}</h3>
              <p>{cards[0].p}</p>
            </div>
            <div className="about-viz">
              <div className="viz-point"><span className="bulb" /></div>
            </div>
          </article>

          <article className="about-card" data-hover>
            <div>
              <div className="idx" style={mono}>{cards[1].idx}</div>
              <h3>{cards[1].h}</h3>
              <p>{cards[1].p}</p>
            </div>
            <div className="about-viz">
              <div className="viz-eng">
                <svg viewBox="0 0 400 160" fill="none" stroke="oklch(78% 0.16 75)" strokeWidth="0.5" opacity="0.9">
                  <circle cx="80" cy="80" r="6" fill="oklch(78% 0.16 75)" />
                  <circle cx="200" cy="40" r="6" fill="oklch(78% 0.16 75)" />
                  <circle cx="320" cy="100" r="6" fill="oklch(78% 0.16 75)" />
                  <path d="M80 80 L200 40 L320 100" strokeDasharray="2 3" />
                  <path d="M80 80 Q140 140 200 40 T 320 100" opacity="0.3" />
                  <circle cx="80" cy="80" r="30" opacity="0.2" />
                  <circle cx="200" cy="40" r="22" opacity="0.2" />
                  <circle cx="320" cy="100" r="28" opacity="0.2" />
                  <text x="12" y="14" fill="oklch(78% 0.16 75)" fontSize="8" opacity="0.7">2700K · 8W · 24°</text>
                  <text x="12" y="152" fill="rgba(255,255,255,0.3)" fontSize="7">CH. 1 — DMX 040</text>
                </svg>
              </div>
            </div>
          </article>

          <article className="about-card" data-hover>
            <div>
              <div className="idx" style={mono}>{cards[2].idx}</div>
              <h3>{cards[2].h}</h3>
              <p>{cards[2].p}</p>
            </div>
            <div className="about-viz">
              <div className="viz-real">
                <svg viewBox="0 0 400 160" fill="none" className="scene">
                  <defs>
                    <linearGradient id="rgrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="oklch(78% 0.16 75)" stopOpacity="0.4" />
                      <stop offset="1" stopColor="oklch(78% 0.16 75)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="30" width="320" height="110" fill="#141416" stroke="rgba(255,255,255,0.1)" />
                  <rect x="40" y="30" width="320" height="8" fill="#0a0a0a" />
                  {[70, 120, 170, 220, 270, 320].map((x, i) => (
                    <rect key={x} x={x} y="60" width="30" height="60"
                      fill={`oklch(78% 0.16 75 / ${[0.8, 0.5, 0.9, 0.3, 0.7, 0.6][i]})`} />
                  ))}
                  <path d="M40 140 L360 140 L400 160 L0 160 Z" fill="url(#rgrad)" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

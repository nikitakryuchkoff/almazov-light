import Clock from "./Clock";
import HeroArchSvg from "./svg/HeroArch";
import HeroBackground from "./HeroBackground";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="hero" id="top">
      <div className="hero-stage">
        <HeroBackground />
        <div className="beams">
          <div className="beam b1" />
          <div className="beam b2 cool" />
          <div className="beam b3" />
          <div className="beam b4" />
          <div className="beam b5 cool" />
          <div className="beam b6" />
        </div>
        <div className="pool p1" />
        <div className="pool p2" />
        <div className="pool p3" />
        <div className="arch">
          <HeroArchSvg />
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="reveal">
            <span>{dict.hero.titleLine1}</span>
          </span>
          <br />
          <span className="reveal">
            <span>
              <em>{dict.hero.titleLine2}</em>
            </span>
          </span>
        </h1>

        <div className="hero-meta" style={mono}>
          <div className="kv">
            <span>{dict.hero.studio}</span>
            <b>{dict.hero.studioValue}</b>
          </div>
          <div className="kv">
            <span>{dict.hero.based}</span>
            <b>{dict.hero.basedValue}</b>
          </div>
          <div className="kv">
            <span>{dict.hero.practice}</span>
            <b>{dict.hero.practiceValue}</b>
          </div>
          <div className="kv">
            <span>{dict.hero.credo}</span>
            <b>{dict.hero.credoValue}</b>
          </div>
        </div>
      </div>

      <div className="hero-bottom" style={mono}>
        <div className="scroll-hint">
          <span className="scroll-line" />
        </div>
        <a href={`/${locale}#cases`} className="cta" data-hover>
          <span className="dot" />
          <span>{dict.hero.viewPortfolio}</span>
          <svg
            className="arrow"
            viewBox="0 0 14 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M1 5 H13 M9 1 L13 5 L9 9" />
          </svg>
        </a>
        <div className="ticker">
          <span>41.3111° N</span>
          <span>69.2797° E</span>
          <Clock />
        </div>
      </div>
    </section>
  );
}

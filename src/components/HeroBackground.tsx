export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-bg.svg" alt="" />
      <div className="hero-bg-overlay" />
    </div>
  );
}

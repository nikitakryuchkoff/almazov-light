export default function HeroArchSvg() {
  return (
    <svg viewBox="0 0 920 575" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1a1a1c" stopOpacity="0.0" />
          <stop offset="1" stopColor="#1a1a1c" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="floor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0a0a0a" />
          <stop offset="1" stopColor="#1c1c1f" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0" r="1">
          <stop offset="0" stopColor="oklch(78% 0.16 75)" stopOpacity="0.45" />
          <stop offset="1" stopColor="oklch(78% 0.16 75)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M0 0 L920 0 L920 100 L0 100 Z" fill="#0a0a0a" />
      <rect x="120" y="100" width="680" height="280" fill="url(#wall)" stroke="rgba(255,255,255,0.04)" />
      {[140, 260, 380, 500, 620, 740].map((x) => (
        <rect key={x} x={x} y="100" width="40" height="400" fill="#0f0f10" stroke="rgba(255,255,255,0.06)" />
      ))}
      {[160, 280, 400, 520, 640, 760].map((cx) => (
        <ellipse key={cx} cx={cx} cy="500" rx="60" ry="8" fill="url(#glow)" />
      ))}
      <rect x="0" y="500" width="920" height="75" fill="url(#floor)" />
      <rect x="120" y="380" width="680" height="1" fill="oklch(78% 0.16 75 / 0.5)" />
    </svg>
  );
}

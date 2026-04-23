import type { CaseStudy } from "@/data/portfolio";

function FacadeCity() {
  return (
    <svg className="scene" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#050508" /><stop offset="1" stopColor="#0a0d14" />
        </linearGradient>
        <linearGradient id="fac1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(70% 0.16 245)" stopOpacity="0.0" />
          <stop offset="0.6" stopColor="oklch(70% 0.16 245)" stopOpacity="0.5" />
          <stop offset="1" stopColor="oklch(70% 0.16 245)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="460" fill="url(#sky1)" />
      <path d="M200 460 L200 120 L480 80 L480 460 Z" fill="#0a0a0a" stroke="rgba(255,255,255,0.06)" />
      <path d="M480 460 L480 60 L780 30 L780 460 Z" fill="#0e0e10" stroke="rgba(255,255,255,0.08)" />
      <path d="M780 460 L780 110 L1020 140 L1020 460 Z" fill="#0a0a0a" stroke="rgba(255,255,255,0.06)" />
      <g opacity="0.95">
        {[240,280,320,360,400,440].map(x => <rect key={`a${x}`} x={x} y="130" width="2" height="330" fill="url(#fac1)" />)}
        {[520,560,600,640,680,720].map(x => <rect key={`b${x}`} x={x} y="70" width="2" height="390" fill="url(#fac1)" />)}
        {[820,860,900,940,980].map(x => <rect key={`c${x}`} x={x} y="120" width="2" height="340" fill="url(#fac1)" />)}
      </g>
      <ellipse cx="600" cy="470" rx="520" ry="40" fill="oklch(70% 0.16 245 / 0.25)" />
    </svg>
  );
}

function InteriorPendant() {
  return (
    <svg className="scene" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="pool1" cx="0.5" cy="0.9" r="0.6">
          <stop offset="0" stopColor="oklch(70% 0.16 245 / 0.6)" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#0a0a0a" />
      <path d="M0 500 L800 500 L520 320 L280 320 Z" fill="#141416" />
      {[{ cx: 200, cy: 200, r: 40 }, { cx: 400, cy: 150, r: 60 }, { cx: 600, cy: 180, r: 50 }].map(({ cx, cy, r }) => (
        <g key={cx}>
          <line x1={cx} y1="0" x2={cx} y2={cy} stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="4" fill="oklch(70% 0.16 245)" />
          <circle cx={cx} cy={cy} r={r} fill={`oklch(70% 0.16 245 / ${r === 60 ? 0.3 : 0.25})`} />
        </g>
      ))}
      <rect x="280" y="330" width="240" height="8" fill="#1a1a1c" />
      <rect x="0" y="400" width="800" height="100" fill="url(#pool1)" />
    </svg>
  );
}

function CommercialGallery() {
  return (
    <svg className="scene" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="500" fill="#0a0a0a" />
      <rect x="100" y="80" width="600" height="340" fill="#0f0f11" stroke="rgba(255,255,255,0.08)" />
      <rect x="100" y="80" width="600" height="4" fill="#050505" />
      {[220,340,460,580].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="90" r="3" fill="oklch(85% 0.08 215)" />
          <path d={`M${cx} 90 L${cx-40} 420 L${cx+40} 420 Z`} fill="oklch(85% 0.08 215 / 0.25)" />
        </g>
      ))}
      {[195,315,435,555].map(x => (
        <rect key={x} x={x} y={x === 315 ? 360 : x === 435 ? 370 : 380}
          width="50" height={x === 315 ? 60 : x === 435 ? 50 : 40}
          fill="#1a1a1c" stroke="rgba(255,255,255,0.1)" />
      ))}
    </svg>
  );
}

function ArtRings() {
  return (
    <svg className="scene" viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="600" height="750" fill="#0a0a0a" />
      <g transform="translate(300 375)" fill="none" stroke="oklch(70% 0.16 245)" strokeWidth="0.8">
        {[40,90,140,200,270,340].map((r,i) => (
          <circle key={r} r={r} opacity={[1,0.8,0.55,0.35,0.2,0.1][i]} />
        ))}
      </g>
      <circle cx="300" cy="375" r="10" fill="oklch(70% 0.16 245)" />
      <circle cx="300" cy="375" r="60" fill="oklch(70% 0.16 245 / 0.3)" />
    </svg>
  );
}

function InteriorStairs() {
  return (
    <svg className="scene" viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="wash" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(70% 0.16 245 / 0.0)" />
          <stop offset="0.5" stopColor="oklch(70% 0.16 245 / 0.4)" />
          <stop offset="1" stopColor="oklch(70% 0.16 245 / 0.0)" />
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="#0a0a0a" />
      {[150,250,350,450,550].map(y => (
        <g key={y}>
          <rect x="150" y={y} width="300" height="30" fill="#141416" stroke="rgba(255,255,255,0.08)" />
          <rect x="150" y={y+28} width="300" height="3" fill="url(#wash)" />
          <rect x="150" y={y+31} width="300" height="60" fill="oklch(70% 0.16 245 / 0.08)" />
        </g>
      ))}
    </svg>
  );
}

function FacadeBridge() {
  return (
    <svg className="scene" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#080810" /><stop offset="1" stopColor="#050508" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="#05050a" />
      <path d="M50 320 Q400 100 750 320" stroke="oklch(85% 0.08 215)" strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M50 320 Q400 120 750 320" stroke="oklch(85% 0.08 215)" strokeWidth="6" fill="none" opacity="0.2" />
      <g stroke="oklch(85% 0.08 215 / 0.5)" strokeWidth="0.5">
        {[200,250,300,350,450,500,550,600].map(x => (
          <path key={x} d={`M400 110 L${x} 320`} />
        ))}
      </g>
      <rect x="0" y="320" width="800" height="180" fill="url(#water)" />
      <path d="M50 320 Q400 540 750 320" stroke="oklch(85% 0.08 215 / 0.3)" strokeWidth="1" fill="none" />
    </svg>
  );
}

function CommercialLobby() {
  return (
    <svg className="scene" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="500" fill="#0a0a0a" />
      <path d="M0 500 L800 500 L560 180 L240 180 Z" fill="#0d0d0f" />
      <path d="M0 0 L800 0 L560 180 L240 180 Z" fill="#050505" />
      <path d="M0 0 L240 180 L240 500 L0 500 Z" fill="#0f0f11" />
      <path d="M800 0 L560 180 L560 500 L800 500 Z" fill="#0f0f11" />
      {[
        { x1: 260, x2: 540, y: 180, o: 1 },
        { x1: 220, x2: 580, y: 140, o: 0.7 },
        { x1: 180, x2: 620, y: 100, o: 0.5 },
        { x1: 140, x2: 660, y: 60, o: 0.3 },
      ].map(l => (
        <line key={l.y} x1={l.x1} y1={l.y} x2={l.x2} y2={l.y} stroke="oklch(70% 0.16 245)" strokeWidth="1" opacity={l.o} />
      ))}
      <rect x="0" y="440" width="800" height="60" fill="oklch(70% 0.16 245 / 0.12)" />
      <rect x="310" y="280" width="180" height="60" fill="#1a1a1c" stroke="rgba(255,255,255,0.08)" />
      <rect x="310" y="278" width="180" height="2" fill="oklch(70% 0.16 245 / 0.8)" />
    </svg>
  );
}

const sceneMap = {
  facade: FacadeCity,
  interior: InteriorPendant,
  commercial: CommercialGallery,
  art: ArtRings,
  stairs: InteriorStairs,
  bridge: FacadeBridge,
  lobby: CommercialLobby,
};

export default function ProjectScene({ scene }: { scene: CaseStudy["scene"] }) {
  const Component = sceneMap[scene];
  return <Component />;
}

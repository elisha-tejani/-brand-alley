const TONES = {
  stone: { a: "#e9dfca", b: "#d8c8ac", c: "#c9b28a" },
  orange: { a: "#f4a44f", b: "#eb7302", c: "#a84e02" },
  ink: { a: "#2b2620", b: "#1c1815", c: "#0c0a08" },
  blush: { a: "#e7d3c9", b: "#d6b39f", c: "#b98567" },
  sage: { a: "#d9ddc9", b: "#bcc4a3", c: "#8f9a72" },
  clay: { a: "#ddd2c2", b: "#c3b39c", c: "#8a7f6e" },
} as const;

export type BackdropTone = keyof typeof TONES;

export default function Backdrop({
  tone = "stone",
  className = "",
  children,
}: {
  tone?: BackdropTone;
  className?: string;
  children?: React.ReactNode;
}) {
  const t = TONES[tone];
  const uid = `grain-${tone}`;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: t.a }}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
        <defs>
          <radialGradient id={`${uid}-r1`} cx="25%" cy="20%" r="65%">
            <stop offset="0%" stopColor={t.b} stopOpacity="0.9" />
            <stop offset="100%" stopColor={t.a} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}-r2`} cx="80%" cy="85%" r="60%">
            <stop offset="0%" stopColor={t.c} stopOpacity="0.55" />
            <stop offset="100%" stopColor={t.a} stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-noise`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uid}-r1)`} />
        <rect width="100%" height="100%" fill={`url(#${uid}-r2)`} />
        <rect width="100%" height="100%" filter={`url(#${uid}-noise)`} />
      </svg>
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}

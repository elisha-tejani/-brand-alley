const PATHS = [
  // overcoat
  "M60 22 L100 10 L140 22 L128 44 L118 36 L118 226 L82 226 L82 36 L72 44 Z",
  // dress
  "M100 16 C110 16 116 26 116 34 C116 44 108 50 100 50 C92 50 84 44 84 34 C84 26 90 16 100 16 Z M64 62 L100 50 L136 62 L142 224 L58 224 Z",
  // turtleneck
  "M70 18 L130 18 L134 46 L112 46 L112 224 L88 224 L88 46 L66 46 Z",
  // trouser
  "M76 18 L124 18 L124 60 L142 224 L106 224 L100 100 L94 224 L58 224 L76 60 Z",
  // wrap coat
  "M56 30 L100 10 L144 30 L156 56 L134 68 L124 52 L124 224 L76 224 L76 52 L66 68 L44 56 Z",
  // slip dress
  "M100 20 C90 30 78 40 78 70 L84 224 L116 224 L122 70 C122 40 110 30 100 20 Z",
];

const TONE_FILLS: Record<string, string> = {
  ink: "#15120F",
  orange: "#EB7302",
  paper: "#FAF7F2",
  clay: "#8A7F6E",
  blush: "#B98567",
  sage: "#8F9A72",
};

export default function GarmentIcon({
  index = 0,
  className = "",
  tone = "ink",
}: {
  index?: number;
  className?: string;
  tone?: keyof typeof TONE_FILLS;
}) {
  const d = PATHS[index % PATHS.length];
  const fill = TONE_FILLS[tone] ?? TONE_FILLS.ink;
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <path d={d} fill={fill} fillOpacity="0.92" stroke={fill} strokeWidth="1.5" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinejoin="round" transform="translate(1.5 1.5)" />
    </svg>
  );
}

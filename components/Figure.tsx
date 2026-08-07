// A deliberately abstract, faceless croquis silhouette — the kind of stylised
// figure fashion mood-boards use — so hero/banner art reads as "a look" rather
// than an empty box, without depicting any real or realistic person.
export default function Figure({ className = "", tone = "#15120F" }: { className?: string; tone?: string }) {
  return (
    <svg viewBox="0 0 220 420" fill="none" className={className}>
      <ellipse cx="110" cy="34" rx="22" ry="26" fill={tone} opacity="0.9" />
      <path
        d="M62 96 C62 70 84 58 110 58 C136 58 158 70 158 96 L166 210 C168 240 150 254 128 258 L128 400 L92 400 L92 258 C70 254 52 240 54 210 Z"
        fill={tone}
        opacity="0.16"
      />
      <path
        d="M110 58 C136 58 158 70 158 96 L163 168 M110 58 C84 58 62 70 62 96 L57 168"
        stroke={tone}
        strokeOpacity="0.5"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function MagicWandIllustration() {
  return (
    <svg
      className="magic-wand-illustration"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Magic wand with sparkles"
    >
      <circle cx="42" cy="48" r="5" fill="#8D7DB8" opacity="0.85" />
      <path
        d="M176 34l4 4-8 8-4-4 8-8z"
        fill="#FFE18A"
        opacity="0.95"
      />
      <circle cx="188" cy="72" r="4" fill="#FFB8A8" opacity="0.9" />
      <path
        d="M34 118l3 3-6 6-3-3 6-6z"
        fill="#C4D8F8"
        opacity="0.95"
      />
      <circle cx="58" cy="164" r="4.5" fill="#FFE18A" opacity="0.9" />
      <path
        d="M168 148l3.5 3.5-7 7-3.5-3.5 7-7z"
        fill="#8D7DB8"
        opacity="0.75"
      />

      <g transform="rotate(-38 110 110)">
        <rect
          x="72"
          y="118"
          width="18"
          height="72"
          rx="9"
          fill="#8D7DB8"
        />
        <rect
          x="74"
          y="120"
          width="14"
          height="68"
          rx="7"
          fill="#7A6BA8"
          opacity="0.35"
        />
        <path
          d="M81 52l14 66-28 0 14-66z"
          fill="#FFE18A"
        />
        <path
          d="M81 52l7 33-14 0 7-33z"
          fill="#F5C842"
          opacity="0.45"
        />
      </g>
    </svg>
  );
}

function Sparkle({
  x,
  y,
  size,
  fill,
  rotation = 0,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  rotation?: number;
}) {
  const half = size / 2;
  return (
    <path
      d={`M${x} ${y - half} L${x + half * 0.28} ${y - half * 0.28} L${x + half} ${y} L${x + half * 0.28} ${y + half * 0.28} L${x} ${y + half} L${x - half * 0.28} ${y + half * 0.28} L${x - half} ${y} L${x - half * 0.28} ${y - half * 0.28} Z`}
      fill={fill}
      transform={`rotate(${rotation} ${x} ${y})`}
    />
  );
}

export default function MagicWandIllustration() {
  const outline = "#43356B";
  const starFill = "#FFF0B8";
  const handleFill = "#D8CCF0";

  return (
    <svg
      className="magic-wand-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Magic wand with sparkles"
    >
      <ellipse
        cx="118"
        cy="196"
        rx="46"
        ry="9"
        fill="#E8DCC8"
        opacity="0.85"
      />

      <Sparkle x={122} y={34} size={16} fill="#FFE18A" rotation={12} />
      <Sparkle x={168} y={52} size={14} fill="#C4B5E8" rotation={-8} />
      <Sparkle x={188} y={92} size={15} fill="#C4D8F8" rotation={18} />
      <Sparkle x={176} y={132} size={13} fill="#B8E6CF" rotation={-14} />
      <Sparkle x={68} y={58} size={13} fill="#FFE18A" rotation={6} />
      <Sparkle x={52} y={98} size={12} fill="#FFB8A8" rotation={-10} />
      <Sparkle x={84} y={138} size={14} fill="#B8E6CF" rotation={16} />

      <g transform="translate(118 118) rotate(-42)">
        <rect
          x="-10"
          y="18"
          width="20"
          height="78"
          rx="10"
          fill={handleFill}
          stroke={outline}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M0 -34 L9.5 -8.5 L36 -8.5 L13.5 7.5 L22 33 L0 17.5 L-22 33 L-13.5 7.5 L-36 -8.5 L-9.5 -8.5 Z"
          fill={starFill}
          stroke={outline}
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

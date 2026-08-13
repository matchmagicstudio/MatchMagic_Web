import Image from "next/image";
import Link from "next/link";

const LOGO_PATH = "/assets/matchmagic-logo.png";
const LOGO_ASPECT = 1024 / 750;

type MatchMagicLogoProps = {
  variant?: "header" | "hero";
  priority?: boolean;
  linked?: boolean;
};

export default function MatchMagicLogo({
  variant = "header",
  priority = false,
  linked = false,
}: MatchMagicLogoProps) {
  const isHero = variant === "hero";
  const width = isHero ? 320 : 140;
  const height = Math.round(width / LOGO_ASPECT);

  const image = (
    <Image
      src={LOGO_PATH}
      alt="MatchMagic"
      width={width}
      height={height}
      priority={priority}
      className={isHero ? "matchmagic-logo matchmagic-logo--hero" : "matchmagic-logo matchmagic-logo--header"}
      sizes={isHero ? "(max-width: 768px) 85vw, 320px" : "140px"}
    />
  );

  if (linked) {
    return (
      <Link href="/" className="site-logo" aria-label="MatchMagic home">
        {image}
      </Link>
    );
  }

  return image;
}

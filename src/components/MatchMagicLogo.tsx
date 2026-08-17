import Image from "next/image";
import Link from "next/link";

const LOGO_PATH = "/assets/matchmagic-logo.png";
const LOGO_ASPECT = 1024 / 750;

type MatchMagicLogoProps = {
  variant?: "header" | "hero" | "footer" | "about";
  priority?: boolean;
  linked?: boolean;
};

export default function MatchMagicLogo({
  variant = "header",
  priority = false,
  linked = false,
}: MatchMagicLogoProps) {
  const isHero = variant === "hero";
  const isFooter = variant === "footer";
  const isAbout = variant === "about";
  const width = isHero ? 480 : isFooter ? 168 : isAbout ? 260 : 200;
  const height = Math.round(width / LOGO_ASPECT);

  const image = (
    <Image
      src={LOGO_PATH}
      alt="MatchMagic"
      width={width}
      height={height}
      priority={priority}
      className={
        isHero
          ? "matchmagic-logo matchmagic-logo--hero"
          : isFooter
            ? "matchmagic-logo matchmagic-logo--footer"
            : isAbout
              ? "matchmagic-logo matchmagic-logo--about"
              : "matchmagic-logo matchmagic-logo--header"
      }
      sizes={
        isHero
          ? "(max-width: 768px) 92vw, 480px"
          : isFooter
            ? "168px"
            : isAbout
              ? "(max-width: 767px) 200px, 260px"
              : "200px"
      }
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

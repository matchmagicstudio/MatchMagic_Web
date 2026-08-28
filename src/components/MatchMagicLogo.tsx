import Image from "next/image";
import Link from "next/link";

const LEGACY_LOGO_PATH = "/assets/matchmagic-logo.png";
const HOMEPAGE_LOGO_PATH = "/assets/MatchMagic_logo - Edited.png";
const LEGACY_LOGO_ASPECT = 1024 / 750;
const HOMEPAGE_LOGO_ASPECT = 1465 / 1074;

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
  const usesHomepageLogo = isHero || isAbout;
  const logoPath = usesHomepageLogo ? HOMEPAGE_LOGO_PATH : LEGACY_LOGO_PATH;
  const logoAspect = usesHomepageLogo ? HOMEPAGE_LOGO_ASPECT : LEGACY_LOGO_ASPECT;
  const width = isHero ? 480 : isFooter ? 168 : isAbout ? 400 : 200;
  const height = Math.round(width / logoAspect);

  const image = (
    <Image
      src={logoPath}
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
              ? "(max-width: 767px) 240px, 400px"
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

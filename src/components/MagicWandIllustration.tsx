import Image from "next/image";

const WAND_PATH = "/assets/magic-wand-illustration.png";
const WAND_ASPECT = 986 / 1112;

export default function MagicWandIllustration() {
  const width = 320;
  const height = Math.round(width / WAND_ASPECT);

  return (
    <Image
      src={WAND_PATH}
      alt=""
      width={width}
      height={height}
      className="magic-wand-illustration"
      sizes="(max-width: 767px) 72vw, 320px"
      aria-hidden="true"
    />
  );
}

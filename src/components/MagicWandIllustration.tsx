import Image from "next/image";

const WAND_PATH = "/assets/magic-wand-standalone.png";
const WAND_WIDTH = 1382;
const WAND_HEIGHT = 1900;

export default function MagicWandIllustration() {
  return (
    <Image
      src={WAND_PATH}
      alt=""
      width={WAND_WIDTH}
      height={WAND_HEIGHT}
      className="magic-wand-illustration"
      sizes="(max-width: 767px) 200px, 290px"
      aria-hidden="true"
    />
  );
}

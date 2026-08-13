import Image from "next/image";

const decorations = [
  { src: "/assets/decorations/logo-star-1.png", className: "playful-decorations__item playful-decorations__item--1" },
  { src: "/assets/decorations/logo-star-3.png", className: "playful-decorations__item playful-decorations__item--2" },
  { src: "/assets/decorations/logo-star-5.png", className: "playful-decorations__item playful-decorations__item--3" },
  { src: "/assets/decorations/logo-star-7.png", className: "playful-decorations__item playful-decorations__item--4" },
] as const;

export default function PlayfulDecorations() {
  return (
    <div className="playful-decorations" aria-hidden="true">
      {decorations.map(({ src, className }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={32}
          height={32}
          className={className}
        />
      ))}
      <span className="playful-decorations__blob playful-decorations__blob--1" />
      <span className="playful-decorations__blob playful-decorations__blob--2" />
      <span className="playful-decorations__blob playful-decorations__blob--3" />
    </div>
  );
}

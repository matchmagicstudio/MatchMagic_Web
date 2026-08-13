import MatchMagicLogo from "@/components/MatchMagicLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <h1 id="hero-heading" className="hero__brand">
          <MatchMagicLogo variant="hero" priority />
        </h1>
        <p className="hero__tagline">Learning through play.</p>
        <p className="hero__description">
          A playful matching game designed for children ages 2–6 to strengthen
          memory, attention, vocabulary, and early thinking skills.
        </p>
        <div
          className="app-store-badge"
          role="img"
          aria-label="Coming Soon on the App Store"
        >
          <span>Coming Soon on the App Store</span>
        </div>
      </div>
    </section>
  );
}

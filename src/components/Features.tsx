const features = [
  {
    title: "Build Memory & Attention",
    description:
      "Playful matching activities support focus and recall.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Age-Appropriate Challenges",
    description: "Game difficulty grows with young learners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Child-Friendly Design",
    description:
      "Large touch targets and simple layouts keep play intuitive.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Safe for Young Children",
    description: "No third-party advertisements and no account required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export default function Features() {
  return (
    <section className="section section--alt" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="section__heading">
          Why MatchMagic?
        </h2>
        <ul className="features-grid">
          {features.map(({ title, description, icon }) => (
            <li key={title}>
              <article className="feature-card">
                <div className="feature-card__icon">{icon}</div>
                <h3 className="feature-card__title">{title}</h3>
                <p className="feature-card__text">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

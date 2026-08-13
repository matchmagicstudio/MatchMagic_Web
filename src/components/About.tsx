export default function About() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section__heading section__heading--left">
          About MatchMagic
        </h2>
        <div className="about-content">
          <p>
            MatchMagic is an educational memory game created to make early
            learning feel joyful, simple, and developmentally appropriate.
          </p>
          <p>
            Through matching activities, children practice memory, attention,
            vocabulary, visual recognition, and early problem-solving skills
            while playing at their own pace.
          </p>
          <p className="developer">Developed by MatchMagic Studio.</p>
        </div>
      </div>
    </section>
  );
}

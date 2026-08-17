export default function FooterWave() {
  return (
    <div className="site-footer__wave-wrap" aria-hidden="true">
      <svg
        className="site-footer__wave"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,56 C240,56 420,84 720,44 C960,12 1200,68 1440,40 L1440,96 L0,96 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

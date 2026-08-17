export default function FooterWave() {
  return (
    <div className="site-footer__waves" aria-hidden="true">
      <svg
        className="site-footer__wave site-footer__wave--back"
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,52 C240,88 480,12 720,48 C960,84 1200,28 1440,56 L1440,88 L0,88 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="site-footer__wave site-footer__wave--front"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,36 C180,8 360,64 540,32 C720,0 900,56 1080,28 C1260,0 1380,20 1440,32 L1440,72 L0,72 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

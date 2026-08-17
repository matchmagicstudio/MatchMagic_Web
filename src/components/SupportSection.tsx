import Link from "next/link";

function EnvelopeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  );
}

export default function SupportSection() {
  return (
    <section
      className="section section--alt support-section"
      aria-labelledby="support-heading"
    >
      <div className="container">
        <h2 id="support-heading" className="section__heading section__heading--left">
          Need Help?
        </h2>
        <div className="support-content">
          <p className="support-section__lead">
            Questions, feedback, support? We&apos;d love to hear from you.
          </p>
          <div className="support-cards">
            <a
              href="mailto:matchmagic.studio@gmail.com"
              className="support-card support-card--email"
              aria-label="Email MatchMagic Studio"
            >
              <div className="support-card__icon">
                <EnvelopeIcon />
              </div>
              <p className="support-card__title">
                Email:{" "}
                <span className="support-card__email">matchmagic.studio@gmail.com</span>
              </p>
              <p className="support-card__hint">Email us directly</p>
            </a>
            <span className="support-cards__or" aria-hidden="true">
              or
            </span>
            <Link href="/support" className="support-card">
              <div className="support-card__icon">
                <HeadsetIcon />
              </div>
              <p className="support-card__title">Go to support page</p>
              <p className="support-card__hint">We&apos;re here to help!</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

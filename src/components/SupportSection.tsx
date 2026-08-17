import Link from "next/link";

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
            Questions, feedback, or support?
          </p>
          <a
            href="mailto:matchmagic.studio@gmail.com"
            className="support-section__email"
          >
            matchmagic.studio@gmail.com
          </a>
          <Link href="/support" className="support-section__link">
            Contact Support →
          </Link>
        </div>
      </div>
    </section>
  );
}

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
          <p>
            Questions, feedback, or technical issues? We&apos;d be happy to hear
            from you.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:matchmagic.studio@gmail.com">
              matchmagic.studio@gmail.com
            </a>
          </p>
          <Link href="/support" className="support-section__link">
            Visit our support page
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Get help with MatchMagic. Contact MatchMagic Studio for questions, feedback, or technical support.",
};

export default function SupportPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Support</h1>
        </div>
      </header>
      <div className="page-content">
        <article className="container prose">
          <p className="prose__intro">Need help with MatchMagic?</p>
          <p>
            Whether you&apos;ve found a bug, have a question, or would like to
            share feedback, we&apos;d love to hear from you.
          </p>

          <h2>MatchMagic Studio</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:matchmagic.studio@gmail.com"
              className="support-email"
            >
              matchmagic.studio@gmail.com
            </a>
          </p>
          <p>We aim to respond within 2–3 business days.</p>

          <h2>Helpful information to include</h2>
          <ul className="support-list">
            <li>Device model</li>
            <li>Operating system version</li>
            <li>MatchMagic app version</li>
            <li>Brief description of the issue</li>
          </ul>
        </article>
      </div>
    </>
  );
}

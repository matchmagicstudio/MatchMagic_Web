import type { Metadata } from "next";
import Link from "next/link";
import SupportContactForm from "@/components/SupportContactForm";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Get help with MatchMagic. Contact MatchMagic Studio for questions, feedback, or technical support.",
};

export default function SupportPage() {
  return (
    <div className="page-document support-page">
      <div className="container page-document__inner">
        <Link
          href="/"
          className="page-document__back"
          aria-label="Return to MatchMagic homepage"
        >
          ← MatchMagic
        </Link>
        <div className="support-page__content">
          <h1 className="support-page__title">How can we help?</h1>
          <p className="support-page__lead">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
          <SupportContactForm />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

const SUPPORT_EMAIL = "matchmagic.studio@gmail.com";

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function SupportContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const bodyLines = [
      name ? `Name: ${name}` : "Name: Not provided",
      `Reply-to: ${email}`,
      "",
      message,
    ];

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  }

  return (
    <form className="support-form" onSubmit={handleSubmit} noValidate>
      <div className="support-form__field">
        <label className="support-form__label" htmlFor="support-name">
          Name <span className="support-form__optional">(optional)</span>
        </label>
        <input
          id="support-name"
          name="name"
          type="text"
          className="support-form__input"
          autoComplete="name"
          placeholder="Your name"
        />
      </div>

      <div className="support-form__field">
        <label className="support-form__label" htmlFor="support-email">
          Email <span className="support-form__required">*</span>
        </label>
        <input
          id="support-email"
          name="email"
          type="email"
          className="support-form__input"
          autoComplete="email"
          placeholder="Your email address"
          required
        />
      </div>

      <div className="support-form__field">
        <label className="support-form__label" htmlFor="support-subject">
          Subject <span className="support-form__required">*</span>
        </label>
        <input
          id="support-subject"
          name="subject"
          type="text"
          className="support-form__input"
          placeholder="What is this about?"
          required
        />
      </div>

      <div className="support-form__field">
        <label className="support-form__label" htmlFor="support-message">
          Message <span className="support-form__required">*</span>
        </label>
        <textarea
          id="support-message"
          name="message"
          className="support-form__textarea"
          rows={5}
          placeholder="Please describe your inquiry in detail..."
          required
        />
      </div>

      <button
        type="submit"
        className="support-form__submit"
        disabled={isSubmitting}
      >
        Send Message
      </button>

      <p className="support-form__privacy">
        <LockIcon />
        <span>
          Your information is safe with us. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> for details.
        </span>
      </p>
    </form>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "MatchMagic Terms of Use. Read the terms and conditions for using the MatchMagic educational matching game.",
};

export default function TermsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Terms of Use</h1>
        </div>
      </header>
      <div className="page-content">
        <article className="container prose">
          <p className="prose__effective-date">
            <strong>Effective Date:</strong> August 13, 2026
          </p>

          <p>
            Welcome to MatchMagic, developed by MatchMagic Studio.
          </p>
          <p>
            By downloading, accessing, or using MatchMagic, you agree to these
            Terms of Use. If you do not agree to these terms, please do not use
            the app.
          </p>

          <h2>1. About MatchMagic</h2>
          <p>
            MatchMagic is an educational memory game designed for children ages
            2–6 and their families.
          </p>
          <p>
            The app is intended to provide enjoyable, age-appropriate learning
            experiences that support early cognitive development through play.
          </p>

          <h2>2. License to Use</h2>
          <p>
            MatchMagic Studio grants you a limited, non-exclusive,
            non-transferable, and revocable license to use MatchMagic for
            personal, non-commercial purposes.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy or redistribute the app</li>
            <li>
              Modify or reverse engineer the app except where applicable law
              expressly permits it
            </li>
            <li>Use the app for unlawful purposes</li>
            <li>
              Sell or commercially exploit any part of the app without written
              permission
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content within MatchMagic—including artwork, illustrations,
            graphics, animations, sounds, music, logos, text, and software—is
            owned by or licensed to MatchMagic Studio and is protected by
            applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or create derivative works from
            MatchMagic content without prior written permission, except as
            permitted by law.
          </p>

          <h2>4. Educational Purpose</h2>
          <p>
            MatchMagic is designed to encourage learning through play.
          </p>
          <p>
            While the app is developed using research-informed educational
            principles, it is intended to complement—not replace—parental
            guidance, classroom instruction, or professional educational
            services.
          </p>

          <h2>5. Appropriate Use</h2>
          <p>
            Parents and caregivers are responsible for supervising
            children&apos;s use of the app when appropriate.
          </p>
          <p>
            Users agree not to misuse the app or attempt to interfere with its
            normal operation.
          </p>

          <h2>6. Disclaimer</h2>
          <p>
            MatchMagic is provided &ldquo;as is&rdquo; and &ldquo;as
            available.&rdquo;
          </p>
          <p>
            While we strive to provide a reliable and high-quality experience,
            we do not guarantee that the app will always operate without
            interruptions or errors.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, MatchMagic Studio
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages arising from use of MatchMagic.
          </p>
          <p>
            Nothing in these Terms excludes rights or protections that cannot
            legally be excluded.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>We may update these Terms of Use from time to time.</p>
          <p>
            If significant changes are made, we will update the Effective Date
            shown at the top of this page.
          </p>
          <p>
            Continued use of MatchMagic after updated Terms become effective
            constitutes acceptance of the revised Terms to the extent permitted
            by law.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about these Terms of Use, contact:</p>
          <p>
            <strong>MatchMagic Studio</strong>
            <br />
            Email:{" "}
            <a href="mailto:matchmagic.studio@gmail.com">
              matchmagic.studio@gmail.com
            </a>
          </p>

          <p className="prose__copyright">
            &copy; 2026 MatchMagic Studio. All rights reserved.
          </p>
        </article>
      </div>
    </>
  );
}

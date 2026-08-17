import type { Metadata } from "next";
import PageDocument from "@/components/PageDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MatchMagic Privacy Policy. Learn how MatchMagic Studio handles information for our educational matching game for children ages 2–6.",
};

export default function PrivacyPage() {
  return (
    <PageDocument title="Privacy Policy">
          <p className="prose__effective-date">
            <strong>Effective Date:</strong> August 13, 2026
          </p>

          <p>
            Thank you for choosing MatchMagic, developed by MatchMagic Studio.
          </p>
          <p>
            MatchMagic is an educational memory game designed for children ages
            2–6 and their families. Protecting your privacy—especially the
            privacy of children—is important to us.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use
            it, and the choices available to you.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            MatchMagic is designed to collect as little personal information as
            possible.
          </p>

          <h3>Information You Do Not Provide</h3>
          <p>You and your child are not required to:</p>
          <ul>
            <li>Create an account</li>
            <li>Sign in</li>
            <li>Provide a name</li>
            <li>Provide an email address</li>
            <li>Provide a phone number</li>
            <li>Share photos or videos</li>
            <li>Share your location</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            To help improve the quality and reliability of MatchMagic, trusted
            third-party services may automatically collect limited technical
            information, including:
          </p>
          <ul>
            <li>Device model</li>
            <li>Operating system version</li>
            <li>App version</li>
            <li>Language settings</li>
            <li>Anonymous app usage information</li>
            <li>Crash reports and diagnostic information</li>
          </ul>
          <p>
            We do not use this information to personally identify you or your
            child.
          </p>

          <h2>2. Information Stored on Your Device</h2>
          <p>
            MatchMagic stores certain information only on your device,
            including:
          </p>
          <ul>
            <li>Music and sound effect preferences</li>
            <li>Gameplay progress</li>
            <li>App settings</li>
          </ul>
          <p>
            This information is not uploaded to MatchMagic Studio servers.
          </p>

          <h2>3. Analytics and Crash Reporting</h2>
          <p>
            MatchMagic uses Google Firebase Analytics and Google Firebase
            Crashlytics to help us:
          </p>
          <ul>
            <li>Improve app performance</li>
            <li>Understand general usage trends</li>
            <li>Identify and fix crashes</li>
            <li>Improve the overall user experience</li>
          </ul>
          <p>
            These services may process limited technical information such as:
          </p>
          <ul>
            <li>App launches</li>
            <li>Session information</li>
            <li>Features used</li>
            <li>Device type</li>
            <li>Operating system version</li>
            <li>Crash logs</li>
          </ul>
          <p>
            We do not set Firebase user IDs or intentionally send names, email
            addresses, birthdays, precise location, child profiles, or free-form
            user content to these services.
          </p>
          <p>
            For more information, see Google&apos;s Privacy Policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>

          <h2>4. Children&apos;s Privacy</h2>
          <p>
            MatchMagic is designed for young children with the involvement of a
            parent or caregiver.
          </p>
          <p>
            We do not knowingly collect personal information from children,
            including:
          </p>
          <ul>
            <li>Names</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Photographs</li>
            <li>Precise location</li>
            <li>Other directly identifying information</li>
          </ul>
          <p>
            If you believe personal information has been provided to us
            unintentionally, please contact us so we can investigate and take
            appropriate action.
          </p>

          <h2>5. Advertising</h2>
          <p>MatchMagic does not display third-party advertisements.</p>

          <h2>6. Internet Connection</h2>
          <p>
            MatchMagic is designed to be playable without an internet
            connection.
          </p>
          <p>
            When internet access is available, limited technical information
            may be transmitted through Firebase Analytics and Firebase
            Crashlytics to help us improve the app.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable measures to protect information processed through
            MatchMagic.
          </p>
          <p>
            However, no method of electronic transmission or storage can be
            guaranteed to be completely secure.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>MatchMagic currently uses:</p>
          <ul>
            <li>Google Firebase Analytics</li>
            <li>Google Firebase Crashlytics</li>
          </ul>
          <p>These services operate under their own privacy policies.</p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>
            If significant changes are made, we will update the Effective Date
            shown at the top of this page.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact:</p>
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
    </PageDocument>
  );
}

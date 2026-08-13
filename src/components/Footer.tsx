import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/support", label: "Contact Support" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <nav aria-label="Footer navigation">
          <ul className="site-footer__links">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__copyright">
          &copy; 2026 MatchMagic Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

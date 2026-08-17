import Link from "next/link";
import MatchMagicLogo from "@/components/MatchMagicLogo";
import FooterWave from "@/components/FooterWave";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/support", label: "Contact Support" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <FooterWave />
      <div className="site-footer__body">
        <div className="container site-footer__inner">
          <MatchMagicLogo variant="footer" />
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
      </div>
    </footer>
  );
}

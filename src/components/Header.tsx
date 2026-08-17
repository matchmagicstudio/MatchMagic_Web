import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", ariaLabel: "MatchMagic home" },
  { href: "/privacy", label: "Privacy", ariaLabel: "Privacy Policy" },
  { href: "/terms", label: "Terms", ariaLabel: "Terms of Use" },
  { href: "/support", label: "Support", ariaLabel: "Contact Support" },
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="site-nav__list">
            {navLinks.map(({ href, label, ariaLabel }) => (
              <li key={href}>
                <Link href={href} aria-label={ariaLabel}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo">
          MatchMagic
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
}

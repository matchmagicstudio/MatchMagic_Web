import Link from "next/link";
import MatchMagicLogo from "@/components/MatchMagicLogo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <MatchMagicLogo variant="header" priority linked />
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
}

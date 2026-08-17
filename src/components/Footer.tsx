import MatchMagicLogo from "@/components/MatchMagicLogo";
import FooterWave from "@/components/FooterWave";

export default function Footer() {
  return (
    <footer className="site-footer">
      <FooterWave />
      <div className="site-footer__body">
        <div className="container site-footer__inner">
          <MatchMagicLogo variant="footer" />
          <p className="site-footer__copyright">
            &copy; 2026 MatchMagic Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

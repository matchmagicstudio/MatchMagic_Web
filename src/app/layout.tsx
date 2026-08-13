import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MatchMagic | Learning Through Play",
    template: "%s | MatchMagic",
  },
  description:
    "MatchMagic is an educational matching game for children ages 2–6 designed to support memory, attention, vocabulary, and early thinking skills through play.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MatchMagic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.variable}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

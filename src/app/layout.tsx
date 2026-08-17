import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

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
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

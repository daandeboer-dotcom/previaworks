import "./../styles/globals.css";

export const metadata = {
  title: "Previa Works — Mensgericht. Impactgestuurd. Data‑gedreven.",
  description: "We ontwerpen en bouwen snelle, schaalbare websites die aansluiten op je propositie, merk en commerciële doelen.",
  metadataBase: new URL("https://www.previaworks.nl"),
  openGraph: {
    title: "Previa Works",
    description: "Strategisch ontworpen, clean uitgevoerd.",
    url: "https://www.previaworks.nl",
    siteName: "Previa Works",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

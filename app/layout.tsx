import type { Metadata } from "next";
import { Prata, Outfit, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cedarville = Cedarville_Cursive({
  variable: "--font-cedarville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pallavi | Live Wedding Artist & Custom Artwork",
  description: "Experience the magic of live art with Pallavi. Specializing in Live Wedding Painting, Turmeric Magic, Glitter Art, and Custom Commissions across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${outfit.variable} ${cedarville.variable} h-full antialiased bg-brand-bg`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

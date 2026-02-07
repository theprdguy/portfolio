import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theprdguy.github.io"),
  title: "thePRDguy | Product Manager & Builder",
  description:
    "Product Manager & Builder creating digital products and sharing learnings through writing. Portfolio of projects and articles by thePRDguy.",
  keywords: [
    "product manager",
    "portfolio",
    "thePRDguy",
    "product management",
    "digital products",
    "PRD",
  ],
  authors: [{ name: "thePRDguy" }],
  creator: "thePRDguy",
  openGraph: {
    title: "thePRDguy | Product Manager & Builder",
    description:
      "Product Manager & Builder creating digital products and sharing learnings through writing.",
    url: "https://theprdguy.github.io",
    siteName: "thePRDguy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thePRDguy | Product Manager & Builder",
    description:
      "Product Manager & Builder creating digital products and sharing learnings through writing.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  alternates: {
    canonical: "https://theprdguy.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#288E48",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mawulipopceiling.com'),
  title: {
    default: "Mawuli POP Ceiling - Professional POP Design & Installation in Ghana",
    template: "%s | Mawuli POP Ceiling"
  },
  description: "Expert POP ceiling installation, wall skimming, and TV unit designs in Ghana. 16+ years of experience delivering quality, durable, and beautiful interiors in Accra, Tema, and beyond.",
  keywords: ["POP Ceiling Ghana", "Ceiling Design Accra", "Mawuli POP", "Interior Design Ghana", "Drywall", "Polystyrene", "Wall Skimming", "TV Unit Design", "P.O.P Specialist"],
  authors: [{ name: "Mawuli Kodzo Afrim" }],
  creator: "Mawuli Kodzo Afrim",
  publisher: "Mawuli POP Ceiling Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mawuli POP Ceiling - Professional POP Design & Installation",
    description: "Expert POP ceiling installation, wall skimming, and TV unit designs in Ghana. 16+ years of experience. Providing video updates for diaspora clients.",
    url: "https://mawulipopceiling.com",
    siteName: "Mawuli POP Ceiling",
    images: [
      {
        url: "/mawuli-hero.webp",
        width: 1200,
        height: 630,
        alt: "Mawuli POP Ceiling Services",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawuli POP Ceiling - Professional POP Design",
    description: "Expert POP ceiling installation, wall skimming, and TV unit designs in Ghana.",
    images: ["/mawuli-hero.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" } // Automatic fallback
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mawulipopceiling.com",
  }
};

import JsonLd from "@/components/JsonLd";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased text-mawuli-black bg-white">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

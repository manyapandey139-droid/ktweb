import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/lib/brandConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndependenceDayPopup from "@/components/IndependenceDayPopup";
import { WishlistProvider } from "@/contexts/WishlistContext";
import {
  independenceDay,
  getIndependencePopupProducts,
} from "@/data/independenceDay";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.seo.siteUrl),
  title: {
    default: brandConfig.seo.defaultTitle,
    template: `%s | ${brandConfig.brandName}`,
  },
  description: brandConfig.seo.defaultDescription,
  openGraph: {
    title: brandConfig.seo.defaultTitle,
    description: brandConfig.seo.defaultDescription,
    siteName: brandConfig.brandName,
    locale: "en_IN",
    type: "website",
    images: ["/images/brand/hero-model-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.seo.defaultTitle,
    description: brandConfig.seo.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <WishlistProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          {independenceDay.isLive && (
            <IndependenceDayPopup
              products={getIndependencePopupProducts()}
              heading={independenceDay.popup.heading}
              message={independenceDay.popup.message}
              cta={independenceDay.popup.cta}
              href={independenceDay.href}
            />
          )}
        </WishlistProvider>
      </body>
    </html>
  );
}

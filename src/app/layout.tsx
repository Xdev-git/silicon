import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { BannerPopup } from "@/components/layout/BannerPopup";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-playfair" 
});

const fedra = localFont({
  src: [
    {
      path: "../../fonts/Fedra Sans Book Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Fedra Sans Normal Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Fedra Sans TF Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Fedra Sans Normal Regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-fedra"
});

export const metadata: Metadata = {
  title: "Silicon - Premium Spaces",
  description: "Redefining luxury living and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fedra.variable} ${playfair.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground`}>
          <Navbar />
          {/* Padding bottom added on mobile to prevent content from hiding behind the sticky bottom bar */}
          <div className="min-h-screen pb-16 md:pb-0 flex flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
          <FloatingElements />
          <BannerPopup />
          <Footer />
          <MobileMenu />
      </body>
    </html>
  );
}

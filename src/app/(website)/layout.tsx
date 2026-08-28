import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Poppins is pubrica.com's real primary typeface. Self-hosted (rather than
// next/font/google) so the build never depends on reaching Google Fonts.
const poppins = localFont({
  src: [
    { path: "../../fonts/poppins/Poppins-300.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/poppins/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/poppins/Poppins-400-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/poppins/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/poppins/Poppins-500-Italic.woff2", weight: "500", style: "italic" },
    { path: "../../fonts/poppins/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/poppins/Poppins-600-Italic.woff2", weight: "600", style: "italic" },
    { path: "../../fonts/poppins/Poppins-700.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/poppins/Poppins-700-Italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pubrica.com"),
  title: {
    default: "Pubrica | Scientific & Medical Communication Services",
    template: "%s | Pubrica",
  },
  description:
    "Expert medical writing, biostatistics modeling, systematic reviews, and journal publication support services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} min-h-screen flex flex-col font-sans bg-white text-gray-900`}
      >
        <Header />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}
           <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}

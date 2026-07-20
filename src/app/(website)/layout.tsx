import type { Metadata } from "next";
// import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Poppins, Outfit } from "next/font/google";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

// const outfit = Outfit({
//   variable: "--font-display",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
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
        className={`${poppins.variable} ${outfit.variable} min-h-screen flex flex-col font-sans bg-white text-gray-900`}
      >
        <Header />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

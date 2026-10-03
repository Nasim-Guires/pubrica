import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactTabs from "@/components/layout/FloatingContactTabs";
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
  // Safety net: constructMetadata() already applies the real site-wide
  // noindex,nofollow (see src/lib/metadata.ts), but any page that skips it
  // still inherits this base metadata, so keep it consistent here too.
  robots:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} min-h-screen flex flex-col overflow-x-hidden font-sans bg-white text-gray-900`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKNN2BK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKNN2BK');`}
        </Script>

        {/* Google tag (gtag.js): GA4 + Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-46813K0K1F" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-46813K0K1F');
gtag('config', 'AW-11168017483');`}
        </Script>

        <Header />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}
           <SpeedInsights />
        </main>
        <Footer />

        <FloatingContactTabs />

        {/* Tawk.to live chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/679b329a825083258e0d6b25/1iir3rb1v';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
      </body>
    </html>
  );
}

import React from "react";
import { constructMetadata } from "@/lib/metadata";
import Hero from "@/features/home/components/Hero";
// import ClientLogos from "@/features/home/components/ClientLogos";
import FeaturedServices from "@/features/home/components/FeaturedServices";
import WhoWeWorkFor from "@/features/home/components/WhoWeWorkFor";
import TrustedNetwork from "@/features/home/components/TrustedNetwork";
import Testimonials from "@/features/home/components/Testimonials";
import LatestBlogs from "@/features/home/components/LatestBlogs";
import CTA from "@/features/home/components/CTA";
import StructuredData from "@/components/seo/StructuredData";
import ResourceConsolidationBanner from "@/features/home/components/ResourceConsolidationBanner";
import SpecialisationsMenu from "@/features/home/components/SpecialisationsMenu";
import FAQAccordion from "@/features/home/components/FAQAccordion";
import LatestNews from "@/features/home/components/LatestNews";

export const metadata = constructMetadata({
  title: "Achieve Research Success with Pubrica’s Support Services",
  description:
    "Pubrica provides professional medical writing, research assistance, and publication support to help researchers produce high-quality work.",
  keywords: ["Pubrica", "medical writing services", "scientific editing", "publication support", "research assistance"],
  slug: "/",
});

export default function HomePage() {
  // Inject Organization schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pubrica",
    url: "https://pubrica.com",
    logo: "https://pubrica.com/images/logo.png",
    sameAs: [
      "https://twitter.com/pubrica",
      "https://www.linkedin.com/company/pubrica",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-773-302-8629",
      contactType: "customer service",
      email: "support@pubrica.com",
    },
  };

  return (
    <>
      <StructuredData data={schema} />
      <Hero />
      <FeaturedServices />
      <WhoWeWorkFor />
      <ResourceConsolidationBanner />
      <TrustedNetwork />
      <SpecialisationsMenu />
      <Testimonials />
      <LatestNews/>
      <FAQAccordion />
    </>
  );
}

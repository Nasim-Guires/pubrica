import EducationalContentDevelopmentPage from "@/components/services/educational-content-development/EducationalContentDevelopmentPage";
import EducationalOfferingsAndAudience from "@/components/services/educational-content-development/EducationalOfferingsAndAudience";
import HowItWorksAndDomainsSection from "@/components/services/educational-content-development/HowItWorksAndDomainsSection";
import PackagesAndSampleWorkSection from "@/components/services/educational-content-development/PackagesAndSampleWorkSection";
import TestimonialsAndFAQSection from "@/components/services/educational-content-development/TestimonialsAndFAQSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Educational Content Development Paper Writing Services - Pubrica",
  description: "We offer educational content development services for education providers and software developers worldwide with our comprehensive guide.",
  keywords: ["Educational Content Development", "educational content development services", "educational content developer", "online education content developer", "academic content developer"],
  slug: "/services/educational-content-development",
});

const page = () => {
  return (
    <>
      <EducationalContentDevelopmentPage />
      <EducationalOfferingsAndAudience />
      <HowItWorksAndDomainsSection />
      <PackagesAndSampleWorkSection />
      <TestimonialsAndFAQSection />
      <InsightsSection />
    </>
  );
};

export default page;

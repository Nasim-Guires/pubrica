import EducationalContentDevelopmentPage from "@/components/services/educational-content-development/EducationalContentDevelopmentPage";
import EducationalOfferingsAndAudience from "@/components/services/educational-content-development/EducationalOfferingsAndAudience";
import HowItWorksAndDomainsSection from "@/components/services/educational-content-development/HowItWorksAndDomainsSection";
import PackagesAndSampleWorkSection from "@/components/services/educational-content-development/PackagesAndSampleWorkSection";
import TestimonialsAndFAQSection from "@/components/services/educational-content-development/TestimonialsAndFAQSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import React from "react";

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

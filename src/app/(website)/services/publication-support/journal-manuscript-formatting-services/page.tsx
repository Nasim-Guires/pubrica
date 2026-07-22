import ManuscriptFormattingService from "@/components/services/publication-support/journal-manuscript-formatting-services/ManuscriptFormattingService";
import PackagesAndPricing from "@/components/services/publication-support/journal-manuscript-formatting-services/PackagesAndPricing";
import ProcessAndBenefitsSections from "@/components/services/publication-support/journal-manuscript-formatting-services/ProcessAndBenefitsSections";
import WhatWeDoAndWhoWeServe from "@/components/services/publication-support/journal-manuscript-formatting-services/WhatWeDoAndWhoWeServe";
import TestimonialsAndFAQSections from "@/components/services/publication-support/journal-manuscript-formatting-services/TestimonialsAndFAQ";
import React from "react";
import InsightsSection from "@/components/services/editing-translation/Insights/InsightsSection";

const page = () => {
  return (
    <>
      <ManuscriptFormattingService />
      <WhatWeDoAndWhoWeServe/>
      <ProcessAndBenefitsSections/>
      <PackagesAndPricing/>
      <TestimonialsAndFAQSections/>
      <InsightsSection/>
    </>
  );
};

export default page;

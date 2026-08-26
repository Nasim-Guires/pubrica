import ManuscriptFormattingService from "@/components/services/publication-support/journal-manuscript-formatting-services/ManuscriptFormattingService";
import PackagesAndPricing from "@/components/services/publication-support/journal-manuscript-formatting-services/PackagesAndPricing";
import ProcessAndBenefitsSections from "@/components/services/publication-support/journal-manuscript-formatting-services/ProcessAndBenefitsSections";
import WhatWeDoAndWhoWeServe from "@/components/services/publication-support/journal-manuscript-formatting-services/WhatWeDoAndWhoWeServe";
import TestimonialsAndFAQSections from "@/components/services/publication-support/journal-manuscript-formatting-services/TestimonialsAndFAQ";
import React from "react";
import InsightsSection from "@/components/services/editing-translation/Insights/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Manuscript Formatting Service for Scholars & Researchers",
  description: "Professional manuscript formatting ensures research papers are structured, polished, and submission-ready with consistent style and clear layout.",
  keywords: ["Professional document formatting services", "online formatting services uk", "phd thesis formatting service", "formatting services for thesis", "Scientific and Academic Manuscript Formatting Service"],
  slug: "/services/publication-support/journal-manuscript-formatting-services",
});

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

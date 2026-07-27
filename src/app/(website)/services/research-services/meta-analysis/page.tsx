import InsightCard from "@/components/services/editing-translation/Insights/InsightCard";
import TestimonialCard from "@/components/services/editing-translation/Testimonials/TestimonialCard";
import TestimonialSlider from "@/components/services/editing-translation/Testimonials/TestimonialSlider";
import TestimonialsAndFAQSection from "@/components/services/educational-content-development/TestimonialsAndFAQSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import MetaAnalysisComplianceSection from "@/components/services/research-services/meta-analysis/MetaAnalysisComplianceSection";
import MetaAnalysisHeroOverview from "@/components/services/research-services/meta-analysis/MetaAnalysisHeroOverview";
import MetaAnalysisPackagesSection from "@/components/services/research-services/meta-analysis/MetaAnalysisPackagesSection";
import MetaAnalysisProcess from "@/components/services/research-services/meta-analysis/MetaAnalysisProcess";
import MetaAnalysisServicesTabSection from "@/components/services/research-services/meta-analysis/MetaAnalysisServicesTabSection";
import MetaAnalysisTypesAccordion from "@/components/services/research-services/meta-analysis/MetaAnalysisTypesAccordion";
import MetaReviewServiceOverview from "@/components/services/research-services/meta-analysis/MetaReviewServiceOverview";
import WhoWeServe from "@/components/services/research-services/meta-analysis/WhoWeServe";

import React from "react";

const page = () => {
  return (
    <>
      <MetaAnalysisHeroOverview />
      <MetaAnalysisTypesAccordion />
      <WhoWeServe />
      <MetaAnalysisProcess />
      <MetaAnalysisServicesTabSection />
      <MetaReviewServiceOverview />
      <MetaAnalysisComplianceSection />
      <MetaAnalysisPackagesSection />
      <TestimonialsAndFAQSection/>
      <InsightsSection/>
    </>
  );
};

export default page;

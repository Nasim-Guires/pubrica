import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Meta-Analysis Services for Life Sci, Pharma, and Research",
  description: "Expert meta-analysis services with systematic reviews, statistical analysis, and publication support to help researchers publish in high-impact journals.",
  keywords: ["Meta Analysis", "Meta-analysis research", "statistical data analysis", "systematic review", "meta-analysis"],
  slug: "/services/research-services/meta-analysis",
});
import MetaAnalysisComplianceSection from "@/components/services/research-services/meta-analysis/MetaAnalysisComplianceSection";
import MetaAnalysisHeroOverview from "@/components/services/research-services/meta-analysis/MetaAnalysisHeroOverview";
import MetaAnalysisPackagesSection from "@/components/services/research-services/meta-analysis/MetaAnalysisPackagesSection";
import MetaAnalysisProcess from "@/components/services/research-services/meta-analysis/MetaAnalysisProcess";
import MetaAnalysisServicesTabSection from "@/components/services/research-services/meta-analysis/MetaAnalysisServicesTabSection";
import MetaAnalysisTypesAccordion from "@/components/services/research-services/meta-analysis/MetaAnalysisTypesAccordion";
import MetaReviewServiceOverview from "@/components/services/research-services/meta-analysis/MetaReviewServiceOverview";
import WhoWeServe from "@/components/services/research-services/meta-analysis/WhoWeServe";
import {
  metaAnalysisFAQ,
  metaAnalysisTestimonials,
} from "@/lib/services/data/research-services/metaAnalysisTestimonials";

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
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's meta-analysis service has helped researchers publish statistically rigorous, guideline-compliant evidence syntheses in leading journals. Here is what our clients say:"
        testimonials={metaAnalysisTestimonials}
      />
      <CommonFAQ
        title="Frequently Asked Questions – Meta Analysis Service"
        faqs={metaAnalysisFAQ}
      />
      <InsightsSection />
    </>
  );
};

export default page;

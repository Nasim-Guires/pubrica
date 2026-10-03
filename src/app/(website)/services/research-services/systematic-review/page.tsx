import SystematicReviewFullProcess from "@/components/services/research-services/systematic-review/SystematicReviewFullProcess";
import SystematicReviewPackages from "@/components/services/research-services/systematic-review/SystematicReviewPackages";
import SystematicReviewsByPurpose from "@/components/services/research-services/systematic-review/SystematicReviewsByPurpose";
import { SystematicReviewOverview } from "@/components/services/research-services/systematic-review/SystematicReviewServiceOverview";
import SystematicReviewServicesTabs from "@/components/services/research-services/systematic-review/SystematicReviewServicesTabs";
import SystematicReviewTargetAudienceGrid from "@/components/services/research-services/systematic-review/SystematicReviewTargetAudienceGrid";
import SystematicReviewTypesAccordion from "@/components/services/research-services/systematic-review/SystematicReviewTypesAccordion";
import TestimonialsAndFAQ from "@/components/services/research-services/systematic-review/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Systematic Review Writing Services for Research Excellence",
  description: "Comprehensive Systematic Review Writing Services, ensuring PRISMA compliance, rigorous methodology, and publication-ready quality.",
  keywords: ['Meta Analysis,Meta-analysis research,statistical data analysis,systematic review,meta-analysis'],
  slug: '/services/research-services/systematic-review/',
})

const page = () => {
  return (
    <>
      <SystematicReviewOverview />
      <SystematicReviewTypesAccordion />
      <SystematicReviewTargetAudienceGrid />
      <SystematicReviewsByPurpose />
      <SystematicReviewServicesTabs />
      <SystematicReviewFullProcess />
      <SystematicReviewPackages />
      <TestimonialsAndFAQ />
      <InsightsSection />
    </>
  );
};

export default page;

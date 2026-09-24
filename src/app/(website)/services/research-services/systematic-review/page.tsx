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
  title: 'Meta-Analysis Services for Life Sci, Pharma, and Research',
  description: 'Expert meta-analysis services with systematic reviews, statistical analysis, and publication support to help researchers publish in high-impact journals.',
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

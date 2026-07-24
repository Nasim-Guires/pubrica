import SystematicReviewFullProcess from "@/components/services/research-services/systematic-review/SystematicReviewFullProcess";
import SystematicReviewPackages from "@/components/services/research-services/systematic-review/SystematicReviewPackages";
import SystematicReviewsByPurpose from "@/components/services/research-services/systematic-review/SystematicReviewsByPurpose";
import SystematicReviewServiceOverview from "@/components/services/research-services/systematic-review/SystematicReviewServiceOverview";
import SystematicReviewServicesTabs from "@/components/services/research-services/systematic-review/SystematicReviewServicesTabs";
import SystematicReviewTargetAudienceGrid from "@/components/services/research-services/systematic-review/SystematicReviewTargetAudienceGrid";
import SystematicReviewTypesAccordion from "@/components/services/research-services/systematic-review/SystematicReviewTypesAccordion";
import TestimonialsAndFAQ from "@/components/services/research-services/systematic-review/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <SystematicReviewServiceOverview />
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

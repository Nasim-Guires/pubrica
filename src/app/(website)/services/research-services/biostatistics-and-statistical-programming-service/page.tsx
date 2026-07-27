import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import BiostatisticsComplianceAndPackages from "@/components/services/research-services/biostatistics-and-statistical-programming-services/BiostatisticsComplianceAndPackages";
import BiostatisticsExpertiseAndWhoWeServe from "@/components/services/research-services/biostatistics-and-statistical-programming-services/BiostatisticsExpertiseAndWhoWeServe";
import BiostatisticsHeroAndIntroSection from "@/components/services/research-services/biostatistics-and-statistical-programming-services/BiostatisticsHeroAndIntroSection";
import BiostatisticsProcessAndTools from "@/components/services/research-services/biostatistics-and-statistical-programming-services/BiostatisticsProcessAndTools";
import {
  biostatisticalProgrammingFAQ,
  biostatisticalProgrammingTestimonials,
} from "@/lib/services/data/research-services/biostatisticalProgrammingTestimonials";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <BiostatisticsHeroAndIntroSection />
      <BiostatisticsExpertiseAndWhoWeServe />
      <BiostatisticsProcessAndTools />
      <BiostatisticsComplianceAndPackages />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's biostatistical programming service has supported researchers, CROs, and pharmaceutical teams in producing accurate, regulatory-compliant analyses that strengthen clinical trial submissions and accelerate the path to approval. Here is what our clients say:"
        testimonials={biostatisticalProgrammingTestimonials}
      />
      <CommonFAQ
        title="Frequently Asked Questions – Biostatistical Programming Service"
        faqs={biostatisticalProgrammingFAQ}
      />
      <InsightsSection />
    </>
  );
};

export default page;

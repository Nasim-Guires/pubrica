import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import DiseaseBasedAndComplianceSection from "@/components/services/research-services/literature-review-and-gap/DiseaseBasedAndComplianceSection";
import LiteratureReviewHeroAndIntroSection from "@/components/services/research-services/literature-review-and-gap/LiteratureReviewHeroAndIntroSection";
import LiteratureReviewPackagesSection from "@/components/services/research-services/literature-review-and-gap/LiteratureReviewPackagesSection";
import LiteratureReviewTypesSection from "@/components/services/research-services/literature-review-and-gap/LiteratureReviewTypesSection";
import WhoWeServeAndProcessSection from "@/components/services/research-services/literature-review-and-gap/WhoWeServeAndProcessSection";
import {
  literatureReviewFAQ,
  literatureReviewTestimonials,
} from "@/lib/services/data/research-services/literatureReview";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Literature Review Writing and Gap Analysis Service",
  description: "Enhance research outcomes through comprehensive evidence assessment, expert guidance, and publication-focused support for stronger research impact.",
  keywords: ["Literature Review Gap", "Literature review services", "Professional literature review", "Research gap analysis services", "Systematic review consulting"],
  slug: "/services/research-services/literature-review-and-gap",
});

const page = () => {
  return (
    <>
      <LiteratureReviewHeroAndIntroSection />
      <LiteratureReviewTypesSection />
      <WhoWeServeAndProcessSection />
      <DiseaseBasedAndComplianceSection />
      <LiteratureReviewPackagesSection />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's literature review service has empowered researchers to produce high-quality, publication-ready reviews that contribute to evidence-based practice and enhance their academic visibility. Here is what our clients say:"
        testimonials={literatureReviewTestimonials}
      />

      <CommonFAQ
        title="Frequently Asked Questions – Literature Review Writing Service"
        faqs={literatureReviewFAQ}
      />
      <InsightsSection />
    </>
  );
};

export default page;

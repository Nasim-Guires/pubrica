import EditingServicesAndWhoWeServe from "@/components/services/editing-and-translation/translation-with-editing/EditingServicesAndWhoWeServe";
import HowItWorksAndLanguages from "@/components/services/editing-and-translation/translation-with-editing/HowItWorksAndLanguages";
import SupportServicesAndSampleWork from "@/components/services/editing-and-translation/translation-with-editing/SupportServicesAndSampleWork";
import TranslationEditingHero from "@/components/services/editing-and-translation/translation-with-editing/TranslationEditingHero";
import TranslationPlansSection from "@/components/services/editing-and-translation/translation-with-editing/TranslationPlansSection";
import TRanslationWhatWeDoSection from "@/components/services/editing-and-translation/translation-with-editing/TRanslationWhatWeDoSection";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/translation-with-editing/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

import React from "react";

export const metadata = constructMetadata({
  title: "Translation with Editing Service for Academic & Scientific Papers",
  description: "Professional translation and editing for dissertations, proposals, textbooks, and videos to help publish in top academic journals.",
  keywords: ["Translation with Editing", "Translation with Editing Service", "Scientific paper translation service", "medical paper translation", "research paper translation"],
  slug: "/services/editing-and-translation/translation-with-editing",
});

const page = () => {
  return (
    <>
      <TranslationEditingHero />
      <TRanslationWhatWeDoSection />
      <EditingServicesAndWhoWeServe />
      <HowItWorksAndLanguages />
      <SupportServicesAndSampleWork />
      <TranslationPlansSection />
      <TestimonialsAndFAQ />
      <InsightsSection/>
    </>
  );
};

export default page;

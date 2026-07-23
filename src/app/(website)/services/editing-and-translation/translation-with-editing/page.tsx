import EditingServicesAndWhoWeServe from "@/components/services/editing-and-translation/translation-with-editing/EditingServicesAndWhoWeServe";
import HowItWorksAndLanguages from "@/components/services/editing-and-translation/translation-with-editing/HowItWorksAndLanguages";
import SupportServicesAndSampleWork from "@/components/services/editing-and-translation/translation-with-editing/SupportServicesAndSampleWork";
import TranslationEditingHero from "@/components/services/editing-and-translation/translation-with-editing/TranslationEditingHero";
import TranslationPlansSection from "@/components/services/editing-and-translation/translation-with-editing/TranslationPlansSection";
import TRanslationWhatWeDoSection from "@/components/services/editing-and-translation/translation-with-editing/TRanslationWhatWeDoSection";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/translation-with-editing/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

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

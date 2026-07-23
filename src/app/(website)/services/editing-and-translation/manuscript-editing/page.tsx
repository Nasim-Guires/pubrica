import { EditingTranslationManuscriptEditingBanner } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingBanner";
import { EditingTranslationManuscriptEditingOverview } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingOverview";
import { EditingTranslationManuscriptEditingProcessAndFeatures } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingProcessAndFeatures";
import { EditingTranslationManuscriptEditingTestimonialsAndFaq } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingTestimonialsAndFaq";
import { EditingTranslationManuscriptEditingTypesAndPackages } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingTypesAndPackages";
import { EditingTranslationManuscriptEditingWhatWeDo } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingWhatWeDo";
import { EditingTranslationManuscriptEditingWhoWeServe } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingWhoWeServe";
import { EditingTranslationManuscriptEditingWhyChooseAndSamples } from "@/components/services/editing-and-translation/manuscript-editing/EditingTranslationManuscriptEditingWhyChooseAndSamples";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <EditingTranslationManuscriptEditingBanner />
      <EditingTranslationManuscriptEditingOverview />
      <EditingTranslationManuscriptEditingWhatWeDo />
      <EditingTranslationManuscriptEditingWhoWeServe />
      <EditingTranslationManuscriptEditingProcessAndFeatures />
      <EditingTranslationManuscriptEditingWhyChooseAndSamples />
      <EditingTranslationManuscriptEditingTypesAndPackages />
      <EditingTranslationManuscriptEditingTestimonialsAndFaq />
      <InsightsSection/>
    </>
  );
};

export default page;

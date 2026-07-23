import { BookEditingAdvantageAndSampleWork } from "@/components/services/editing-and-translation/book-editing/BookEditingAdvantageAndSampleWork";
import { BookEditingOverviewAndProcess } from "@/components/services/editing-and-translation/book-editing/BookEditingOverviewAndProcess";
import { BookEditingPackagesTestimonialsAndFAQ } from "@/components/services/editing-and-translation/book-editing/BookEditingPackagesTestimonialsAndFAQ";
import { EditingTranslationBookEditingHero } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingHero";
import { EditingTranslationBookEditingServicesTab } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingServicesTab";
import { EditingTranslationBookEditingWhoWeServe } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingWhoWeServe";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <EditingTranslationBookEditingHero />
      <EditingTranslationBookEditingServicesTab />
      <EditingTranslationBookEditingWhoWeServe />
      <BookEditingOverviewAndProcess />
      <BookEditingAdvantageAndSampleWork />
      <BookEditingPackagesTestimonialsAndFAQ />
      <InsightsSection />
    </>
  );
};

export default page;

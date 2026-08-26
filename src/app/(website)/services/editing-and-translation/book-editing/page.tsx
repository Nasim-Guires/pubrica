import { BookEditingAdvantageAndSampleWork } from "@/components/services/editing-and-translation/book-editing/BookEditingAdvantageAndSampleWork";
import { BookEditingOverviewAndProcess } from "@/components/services/editing-and-translation/book-editing/BookEditingOverviewAndProcess";
import { BookEditingPackagesTestimonialsAndFAQ } from "@/components/services/editing-and-translation/book-editing/BookEditingPackagesTestimonialsAndFAQ";
import { EditingTranslationBookEditingHero } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingHero";
import { EditingTranslationBookEditingServicesTab } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingServicesTab";
import { EditingTranslationBookEditingWhoWeServe } from "@/components/services/editing-and-translation/book-editing/EditingTranslationBookEditingWhoWeServe";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Book Editing Services for Scientific and Academic Papers',
  description: 'Our professional book editing service Provides you with scientific, academic, and medical papers by experts to bring the best in your writings',
  slug: '/services/editing-and-translation/book-editing',
});

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

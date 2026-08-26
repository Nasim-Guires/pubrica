import ServicePricingSection from "@/components/services/editing-and-translation/thesis-editing/ServicePricingSection";
import { ThesisEditingHeroAndOverview } from "@/components/services/editing-and-translation/thesis-editing/ThesisEditingHeroAndOverview";
import { ThesisEditingPage } from "@/components/services/editing-and-translation/thesis-editing/ThesisEditingPage";
import ThesisPhdEditingService from "@/components/services/editing-and-translation/thesis-editing/ThesisPhdEditingService";
import { ThesisServiceWorkflow } from "@/components/services/editing-and-translation/thesis-editing/ThesisServiceWorkflow";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/thesis-editing/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

import React from "react";

export const metadata = constructMetadata({
  title: "Thesis Editing & Proofreading Service | Subject Experts",
  description: "Subject experts provide thesis editing and proofreading to enhance readability, strengthen arguments, and prepare research papers for successful submission.",
  keywords: ["Thesis Editing", "Thesis editing service", "PhD thesis editing services", "PhD dissertation editing services", "thesis editing support help"],
  slug: "/services/editing-and-translation/thesis-editing",
});

const page = () => {
  return (
    <>
      <ThesisEditingHeroAndOverview />
      <ThesisEditingPage />
      <ThesisServiceWorkflow />
      <ThesisPhdEditingService />
      <ServicePricingSection />
      <TestimonialsAndFAQ />
      <InsightsSection />
    </>
  );
};

export default page;

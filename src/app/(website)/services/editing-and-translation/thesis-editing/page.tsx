import ServicePricingSection from "@/components/services/editing-and-translation/thesis-editing/ServicePricingSection";
import { ThesisEditingHeroAndOverview } from "@/components/services/editing-and-translation/thesis-editing/ThesisEditingHeroAndOverview";
import { ThesisEditingPage } from "@/components/services/editing-and-translation/thesis-editing/ThesisEditingPage";
import ThesisPhdEditingService from "@/components/services/editing-and-translation/thesis-editing/ThesisPhdEditingService";
import { ThesisServiceWorkflow } from "@/components/services/editing-and-translation/thesis-editing/ThesisServiceWorkflow";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/thesis-editing/TestimonialsAndFAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

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

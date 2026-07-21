import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import ResearchImpactAndStakeholders from "@/components/services/research-impact/ResearchImpactAndStakeholders";
import ResearchImpactSection from "@/components/services/research-impact/ResearchImpactSection";
import ResearchImpactService from "@/components/services/research-impact/ResearchImpactService";
import ResearchPromotionAndProcess from "@/components/services/research-impact/ResearchPromotionAndProcess";
import TestimonialsCarousel from "@/components/services/research-impact/TestimonialsCarousel";
import TherapeuticComplianceAndSamples from "@/components/services/research-impact/TherapeuticComplianceAndSamples";
import React from "react";

const page = () => {
  return(
    <>
    <ResearchImpactService/>
    <ResearchImpactAndStakeholders/>
    <ResearchPromotionAndProcess/>
    <TherapeuticComplianceAndSamples/>
    <TestimonialsCarousel/>
    <ResearchImpactSection/>
    <InsightsSection/>
    </>
  )
};

export default page;

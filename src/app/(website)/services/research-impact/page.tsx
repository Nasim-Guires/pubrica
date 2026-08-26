import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import ResearchImpactAndStakeholders from "@/components/services/research-impact/ResearchImpactAndStakeholders";
import ResearchImpactSection from "@/components/services/research-impact/ResearchImpactSection";
import ResearchImpactService from "@/components/services/research-impact/ResearchImpactService";
import ResearchPromotionAndProcess from "@/components/services/research-impact/ResearchPromotionAndProcess";
import TestimonialsCarousel from "@/components/services/research-impact/TestimonialsCarousel";
import TherapeuticComplianceAndSamples from "@/components/services/research-impact/TherapeuticComplianceAndSamples";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Manuscript Formatting & Research Impact Services | Pubrica",
  description: "Pubrica offers Research Impact Services, including scientific illustrations, infographics, and promotion, to broaden the reach of your research",
  keywords: ["research impact", "citation enhancement", "academic visibility", "publication success", "scholarly influence."],
  slug: "/services/research-impact",
});

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

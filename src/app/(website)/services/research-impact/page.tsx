import ResearchImpactAndStakeholders from "@/components/services/research-impact/ResearchImpactAndStakeholders";
import ResearchImpactService from "@/components/services/research-impact/ResearchImpactService";
import ResearchPromotionAndProcess from "@/components/services/research-impact/ResearchPromotionAndProcess";
import TherapeuticComplianceAndSamples from "@/components/services/research-impact/TherapeuticComplianceAndSamples";
import React from "react";

const page = () => {
  return(
    <>
    <ResearchImpactService/>
    <ResearchImpactAndStakeholders/>
    <ResearchPromotionAndProcess/>
    <TherapeuticComplianceAndSamples/>
    </>
  )
};

export default page;

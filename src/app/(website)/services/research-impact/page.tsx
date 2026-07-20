import ResearchImpactAndStakeholders from "@/components/services/research-impact/ResearchImpactAndStakeholders";
import ResearchImpactService from "@/components/services/research-impact/ResearchImpactService";
import ResearchPromotionAndProcess from "@/components/services/research-impact/ResearchPromotionAndProcess";
import React from "react";

const page = () => {
  return(
    <>
    <ResearchImpactService/>
    <ResearchImpactAndStakeholders/>
    <ResearchPromotionAndProcess/>
    </>
  )
};

export default page;

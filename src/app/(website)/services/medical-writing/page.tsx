import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import ComplianceAndStandards from "@/components/services/medical-writing/ComplianceAndStandards";
import FaqSection from "@/components/services/medical-writing/FaqSection";
import MedicalWritingSection from "@/components/services/medical-writing/MedicalWritingSection";
import OurPackages from "@/components/services/medical-writing/OurPackages";
import QualityAndTestimonials from "@/components/services/medical-writing/QualityAndTestimonials";
import TherapeuticAreasAndWorkflow from "@/components/services/medical-writing/TherapeuticAreasAndWorkflow";
import WhoWeServeAndServices from "@/components/services/medical-writing/WhoWeServeAndServices";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Expert Medical Writing Services for Pharma & Research",
  description: "Pubrica delivers expert medical writing, research writing, and medical paper writing services for physicians, researchers, and healthcare professionals.",
  keywords: ["Medical writing", "medical writing services", "research writing", "medical paper writing service", "clinical manuscript writing"],
  slug: "/services/medical-writing",
});

const page = () => {
  return (
    <>
      <MedicalWritingSection />
      <WhoWeServeAndServices />
      <TherapeuticAreasAndWorkflow />
      <ComplianceAndStandards />
      <OurPackages />
      <QualityAndTestimonials/>
      <FaqSection/>
      <InsightsSection/>
    </>
  );
};

export default page;

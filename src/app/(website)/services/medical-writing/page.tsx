import InsightsSection from "@/components/services/editing-translation/Insights/InsightsSection";
import ComplianceAndStandards from "@/components/services/medical-writing/ComplianceAndStandards";
import FaqSection from "@/components/services/medical-writing/FaqSection";
import MedicalWritingSection from "@/components/services/medical-writing/MedicalWritingSection";
import OurPackages from "@/components/services/medical-writing/OurPackages";
import QualityAndTestimonials from "@/components/services/medical-writing/QualityAndTestimonials";
import TherapeuticAreasAndWorkflow from "@/components/services/medical-writing/TherapeuticAreasAndWorkflow";
import WhoWeServeAndServices from "@/components/services/medical-writing/WhoWeServeAndServices";
import React from "react";

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

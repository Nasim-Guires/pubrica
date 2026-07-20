import React from "react";
import AiMlHeroSection from "@/components/services/ai-ml-support/AiMlHeroSection";
import OurServicesSection from "@/components/services/ai-ml-support/OurServicesSection";
import OurApproachSection from "@/components/services/ai-ml-support/OurApproachSection";
import WhoWeServeSection from "@/components/services/ai-ml-support/WhoWeServeSection";
import IndustriesEmpoweredSection from "@/components/services/ai-ml-support/IndustriesEmpoweredSection";
import AiMlTechStackSection from "@/components/services/ai-ml-support/AiMlTechStackSection";
import SampleWorkSection from "@/components/services/ai-ml-support/SampleWorkSection";
import AiMlPackagesSection from "@/components/services/ai-ml-support/AiMlPackagesSection";
import TestimonialsSection from "@/components/services/ai-ml-support/TestimonialsSection";
import FaqSection from "@/components/services/ai-ml-support/FaqSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
  return (
    <>
      <AiMlHeroSection />
      <OurServicesSection />
      <OurApproachSection />
      <WhoWeServeSection />
      <IndustriesEmpoweredSection/>
      <AiMlTechStackSection/>
      <SampleWorkSection/>
      <AiMlPackagesSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <InsightsSection/>
    </>
  );
};

export default page;

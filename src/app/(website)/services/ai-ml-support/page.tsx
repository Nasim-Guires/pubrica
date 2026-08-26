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
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Top-tier AI & ML support services to boost your business efficiency.',
  description: 'Discover expert AI & ML support services for advanced data analysis, innovative solutions, and improved project efficiency.',
  slug: '/services/ai-ml-support',
});

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

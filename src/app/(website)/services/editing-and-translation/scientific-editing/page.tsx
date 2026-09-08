import ScientificWhoWeServe from "@/components/services/editing-and-translation/scientific-editing/ScientficWhoWeServe";
import ScientificEditingPage from "@/components/services/editing-and-translation/scientific-editing/ScientificEditingPage";
import ScientificEditingServices from "@/components/services/editing-and-translation/scientific-editing/ScientificEditingServices";
import ScientificKeyFeatures from "@/components/services/editing-and-translation/scientific-editing/ScientificKeyFeatures";
import ScientificPackageDetails from "@/components/services/editing-and-translation/scientific-editing/ScientificPackageDetails";
import ScientificProcessWorkflow from "@/components/services/editing-and-translation/scientific-editing/ScientificProcessWorkflow";
import ScientificSampleWork from "@/components/services/editing-and-translation/scientific-editing/ScientificSampleWork";
import TypesOfEditing from "@/components/services/editing-and-translation/scientific-editing/TypesOfEditing";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import React from "react";
import { constructMetadata } from '@/lib/metadata';
import ServiceBanner, { BannerProps } from "@/components/common/ServiceBanner";

export const metadata = constructMetadata({
  title: 'Scientific Editing Services to Strengthen Research Papers',
  description: 'Professional scientific editing services refine manuscripts to improve quality, accuracy, and readiness for successful journal submission and publication.',
  slug: '/services/editing-and-translation/scientific-editing',
});
  const serviceBannerData: BannerProps = {
    imageSrc: "/images/publication-support/Satisfaction_Guarantee.webp",
    imageAlt: "100% Satisfaction Guarantee",
    heading: "Scientific Editing Services",
    description:
      "Get a chance to be published in a high-impact-factor journal, 61 days with Pubrica’s Scientific Editing Service",
    showQuoteButton: false,
  };

const page = () => {
  return (
    <>
      <ScientificEditingPage />
      <TypesOfEditing />
      <ScientificWhoWeServe />
      <ScientificKeyFeatures />
       <ServiceBanner {...serviceBannerData} />
      <ScientificProcessWorkflow />
      <ScientificSampleWork />
      <ScientificEditingServices />
      {/* <ScientificPackageDetails /> */}
      <InsightsSection/>
    </>
  );
};

export default page;

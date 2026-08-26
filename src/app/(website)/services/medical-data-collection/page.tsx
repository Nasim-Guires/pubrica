import { MedicalDataCollection } from "@/components/services/medical-data-collection/MedicalDataCollection";
import DataServicesSection from "@/components/services/medical-data-collection/DataServicesSection";
import PubricaProcessAndCompliance from "@/components/services/medical-data-collection/PubricaProcessAndCompliance";
import MedicalDataPackages from "@/components/services/medical-data-collection/MedicalDataPackages";
import TestimonialsSection from "@/components/services/medical-data-collection/TestimonialsSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import MedicalDataFAQ from "@/components/services/medical-data-collection/MedicalDataFAQ";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Medical Data Collection Services for Accurate Research",
  description: "Reliable healthcare data collection services offering precise methods, Organizational reporting, and expert support to improve research outcomes.",
  keywords: ["Medical Data Collection", "Health data collection", "healthcare data collection companies", "data collection and analysis help", "data collection services"],
  slug: "/services/medical-data-collection",
});

const page = () => {
  return (
    <>
      <MedicalDataCollection />
      <DataServicesSection />
      <PubricaProcessAndCompliance />
      <MedicalDataPackages />
      <TestimonialsSection />
      <MedicalDataFAQ />
      <InsightsSection />
    </>
  );
};

export default page;

import { MedicalDataCollection } from "@/components/services/medical-data-collection/MedicalDataCollection";
import DataServicesSection from "@/components/services/medical-data-collection/DataServicesSection";
import PubricaProcessAndCompliance from "@/components/services/medical-data-collection/PubricaProcessAndCompliance";
import MedicalDataPackages from "@/components/services/medical-data-collection/MedicalDataPackages";
import TestimonialsSection from "@/components/services/medical-data-collection/TestimonialsSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import MedicalDataFAQ from "@/components/services/medical-data-collection/MedicalDataFAQ";

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

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

const page = () => {
  return (
    <>
      <ScientificEditingPage />
      <TypesOfEditing />
      <ScientificWhoWeServe />
      <ScientificKeyFeatures />
      <ScientificProcessWorkflow />
      <ScientificSampleWork />
      <ScientificEditingServices />
      <ScientificPackageDetails />
      <InsightsSection/>
    </>
  );
};

export default page;

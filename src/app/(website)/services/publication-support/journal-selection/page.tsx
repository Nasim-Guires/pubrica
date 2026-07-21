import InsightsSection from "@/components/services/editing-translation/Insights/InsightsSection";
import ComplianceAndFeaturesSection from "@/components/services/publication-support/journal-selection/ComplianceAndFeaturesSection";
import JournalSelectionBenefits from "@/components/services/publication-support/journal-selection/JournalSelectionBenefits";
import JournalSelectionFullPage from "@/components/services/publication-support/journal-selection/JournalSelectionFullPage";
import JournalSelectionHeader from "@/components/services/publication-support/journal-selection/JournalSelectionHeader";
import PubricaPackagesAndFeedback from "@/components/services/publication-support/journal-selection/PubricaPackagesAndFeedback";
import PubricaSampleWorkAndFAQ from "@/components/services/publication-support/journal-selection/PubricaSampleWorkAndFAQ";
import React from "react";

const page = () => {
  return (
    <>
      <JournalSelectionHeader />
      <ComplianceAndFeaturesSection />
      <JournalSelectionFullPage />
      <JournalSelectionBenefits />
      <PubricaPackagesAndFeedback/>
      <PubricaSampleWorkAndFAQ/>
      <InsightsSection/>
    </>
  );
};

export default page;

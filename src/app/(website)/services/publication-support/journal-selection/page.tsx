import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import ComplianceAndFeaturesSection from "@/components/services/publication-support/journal-selection/ComplianceAndFeaturesSection";
import JournalSelectionBenefits from "@/components/services/publication-support/journal-selection/JournalSelectionBenefits";
import JournalSelectionFullPage from "@/components/services/publication-support/journal-selection/JournalSelectionFullPage";
import JournalSelectionHeader from "@/components/services/publication-support/journal-selection/JournalSelectionHeader";
import PubricaPackagesAndFeedback from "@/components/services/publication-support/journal-selection/PubricaPackagesAndFeedback";
import PubricaSampleWorkAndFAQ from "@/components/services/publication-support/journal-selection/PubricaSampleWorkAndFAQ";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Journal Selection Services to Find the Right Journal",
  description: "Expert journal selection services help researchers identify suitable journals, improve acceptance rates, and maximize research visibility.",
  keywords: ["Journal Selection", "Journal paper publication", "submitting a manuscript for publication", "research paper publication", "editing scientific papers"],
  slug: "/services/publication-support/journal-selection",
});

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

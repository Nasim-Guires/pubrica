import InsightsSection from "@/components/services/editing-translation/Insights/InsightsSection";
import JournalSubmissionBottomSections from "@/components/services/publication-support/journal-submission/JournalSubmissionBottomSections";
import JournalSubmissionPackagesAndWhyChoose from "@/components/services/publication-support/journal-submission/JournalSubmissionPackagesAndWhyChoose";
import JournalSubmissionPage from "@/components/services/publication-support/journal-submission/JournalSubmissionPage";
import JournalSubmissionProcessSection from "@/components/services/publication-support/journal-submission/JournalSubmissionProcessSection";
import TestimonialsAndFAQSections from "@/components/services/publication-support/journal-submission/TestimonialsAndFAQSections";
import React from "react";

const page = () => {
  return (
    <>
      <JournalSubmissionPage />
      <JournalSubmissionProcessSection />
      <JournalSubmissionBottomSections />
      <JournalSubmissionPackagesAndWhyChoose />
      <TestimonialsAndFAQSections />
      <InsightsSection />
    </>
  );
};

export default page;

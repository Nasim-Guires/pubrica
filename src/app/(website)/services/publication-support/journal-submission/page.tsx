import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import JournalSubmissionBottomSections from "@/components/services/publication-support/journal-submission/JournalSubmissionBottomSections";
import JournalSubmissionPackagesAndWhyChoose from "@/components/services/publication-support/journal-submission/JournalSubmissionPackagesAndWhyChoose";
import JournalSubmissionPage from "@/components/services/publication-support/journal-submission/JournalSubmissionPage";
import JournalSubmissionProcessSection from "@/components/services/publication-support/journal-submission/JournalSubmissionProcessSection";
import TestimonialsAndFAQSections from "@/components/services/publication-support/journal-submission/TestimonialsAndFAQSections";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Journal Submission Support for Researchers & Authors",
  description: "Streamline your journal submission with expert support for researchers & authors. Enhance manuscript clarity, formatting, and publication success.",
  keywords: ["Journal Submission Support", "journal paper submission service", "academic journals submisssion service", "journal manuscript submission service", "cover letter journal submission scientific"],
  slug: "/services/publication-support/journal-submission",
});

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

import PublicationSupportPage from "@/components/services/publication-support/response-to-reviewers/PublicationSupportPage";
import PublicationSupportSections from "@/components/services/publication-support/response-to-reviewers/PublicationSupportSections";
import RespondingToReviewersPage from "@/components/services/publication-support/response-to-reviewers/RespondingToReviewersPage";
import RespondingToReviewersSection from "@/components/services/publication-support/response-to-reviewers/RespondingToReviewersSection";
import TestimonialsAndFaq from "@/components/services/publication-support/response-to-reviewers/TestimonialsAndFaq";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Response to Reviewer Service for Manuscripts | P&R",
  description: "Responding to reviewers will be refined by our experts, making them clear, concise, and aligned with reviewer expectations.",
  keywords: ["Response to Reviewer service", "response to reviewers comments journal", "response to peer review comments", "peer reviewed journal research paper", "Response to Reviewer Service for Manuscripts"],
  slug: "/services/publication-support/responding-to-reviewers",
});

const page = () => {
  return (
    <>
      <RespondingToReviewersSection />
      <RespondingToReviewersPage />
      <PublicationSupportSections/>
      <PublicationSupportPage/>
      <TestimonialsAndFaq/>
    </>
  );
};

export default page;

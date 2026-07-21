import PublicationSupportPage from "@/components/services/publication-support/response-to-reviewers/PublicationSupportPage";
import PublicationSupportSections from "@/components/services/publication-support/response-to-reviewers/PublicationSupportSections";
import RespondingToReviewersPage from "@/components/services/publication-support/response-to-reviewers/RespondingToReviewersPage";
import RespondingToReviewersSection from "@/components/services/publication-support/response-to-reviewers/RespondingToReviewersSection";
import TestimonialsAndFaq from "@/components/services/publication-support/response-to-reviewers/TestimonialsAndFaq";
import React from "react";

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

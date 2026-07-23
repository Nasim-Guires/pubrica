import { PostEditingDetailsAndPricing } from "@/components/services/editing-and-translation/post-editing/PostEditingDetailsAndPricing";
import { PostEditingOverview } from "@/components/services/editing-and-translation/post-editing/PostEditingOverview";
import { PostEditingProcessTimeline } from "@/components/services/editing-and-translation/post-editing/PostEditingProcessTimeline";
import { PostEditingServicesAndWhoWeServe } from "@/components/services/editing-and-translation/post-editing/PostEditingServicesAndWhoWeServe";
import { PostEditingTestimonialsAndFaq } from "@/components/services/editing-and-translation/post-editing/PostEditingTestimonialsAndFaq";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <PostEditingOverview />
      <PostEditingServicesAndWhoWeServe />
      <PostEditingProcessTimeline />
      <PostEditingDetailsAndPricing />
      <PostEditingTestimonialsAndFaq />
      <InsightsSection />
    </>
  );
};

export default page;

import { PostEditingDetailsAndPricing } from "@/components/services/editing-and-translation/post-editing/PostEditingDetailsAndPricing";
import { PostEditingOverview } from "@/components/services/editing-and-translation/post-editing/PostEditingOverview";
import { PostEditingProcessTimeline } from "@/components/services/editing-and-translation/post-editing/PostEditingProcessTimeline";
import { PostEditingServicesAndWhoWeServe } from "@/components/services/editing-and-translation/post-editing/PostEditingServicesAndWhoWeServe";
import { PostEditingTestimonialsAndFaq } from "@/components/services/editing-and-translation/post-editing/PostEditingTestimonialsAndFaq";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Expert Post-Editing Services for Authors | Pubrica',
  description: 'Post-editing services from Pubrica involve revisions by experts for smooth, accurate translations of your medical and scientific papers.',
  slug: '/services/editing-and-translation/post-editing',
});

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

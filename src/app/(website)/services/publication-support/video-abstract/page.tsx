import VideoAbstractFooterSections from "@/components/services/publication-support/video-abstract/VideoAbstractFooterSections";
import VideoAbstractHero from "@/components/services/publication-support/video-abstract/VideoAbstractHero";
import VideoAbstractOverview from "@/components/services/publication-support/video-abstract/VideoAbstractOverview";
import VideoAbstractProcess from "@/components/services/publication-support/video-abstract/VideoAbstractProcess";
import WhatWeDo from "@/components/services/publication-support/video-abstract/WhatWeDo";
import WhoWeServe from "@/components/services/publication-support/video-abstract/WhoWeServe";

import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Video Abstract Service for Simplified Research Clarity",
  description: "Transform your research into journal-compliant video abstracts that increase visibility, audience engagement, and scientific impact.",
  keywords: ["Video abstract services", "video creation service", "video creation", "Video Development Service"],
  slug: "/services/publication-support/video-abstract",
});

const page = () => {
  return (
    <>
      <VideoAbstractHero />
      <WhatWeDo />
      <WhoWeServe />
      <VideoAbstractProcess />
      <VideoAbstractOverview/>
      <VideoAbstractFooterSections/>
    </>
  );
};

export default page;

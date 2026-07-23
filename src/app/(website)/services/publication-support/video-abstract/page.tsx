import VideoAbstractFooterSections from "@/components/services/publication-support/video-abstract/VideoAbstractFooterSections";
import VideoAbstractHero from "@/components/services/publication-support/video-abstract/VideoAbstractHero";
import VideoAbstractOverview from "@/components/services/publication-support/video-abstract/VideoAbstractOverview";
import VideoAbstractProcess from "@/components/services/publication-support/video-abstract/VideoAbstractProcess";
import WhatWeDo from "@/components/services/publication-support/video-abstract/WhatWeDo";
import WhoWeServe from "@/components/services/publication-support/video-abstract/WhoWeServe";

import React from "react";

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

import PlagiarismHeroAndOverview from "@/components/services/publication-support/plagiarism-services/PlagiarismHeroAndOverview";
import PlagiarismSectionGroup from "@/components/services/publication-support/plagiarism-services/PlagiarismSectionGroup";
import PlagiarismServicePackages from "@/components/services/publication-support/plagiarism-services/PlagiarismServicePackages";
import PlagiarismWhatWeDo from "@/components/services/publication-support/plagiarism-services/PlagiarismWhatWeDo";
import PlagiarismWhoWeServe from "@/components/services/publication-support/plagiarism-services/PlagiarismWhoWeServe";
import TestimonialsAndFaq from "@/components/services/publication-support/plagiarism-services/TestimonialsAndFaq";

import React from "react";

const page = () => {
  return (
    <>
      <PlagiarismHeroAndOverview />
      <PlagiarismWhatWeDo />
      <PlagiarismWhoWeServe />
      <PlagiarismSectionGroup />
      <PlagiarismServicePackages />
      <TestimonialsAndFaq />
    </>
  );
};

export default page;

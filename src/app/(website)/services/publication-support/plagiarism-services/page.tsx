import PlagiarismHeroAndOverview from "@/components/services/publication-support/plagiarism-services/PlagiarismHeroAndOverview";
import PlagiarismSectionGroup from "@/components/services/publication-support/plagiarism-services/PlagiarismSectionGroup";
import PlagiarismServicePackages from "@/components/services/publication-support/plagiarism-services/PlagiarismServicePackages";
import PlagiarismWhatWeDo from "@/components/services/publication-support/plagiarism-services/PlagiarismWhatWeDo";
import PlagiarismWhoWeServe from "@/components/services/publication-support/plagiarism-services/PlagiarismWhoWeServe";
import TestimonialsAndFaq from "@/components/services/publication-support/plagiarism-services/TestimonialsAndFaq";

import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Research Paper Plagiarism Check Service for Error-Free",
  description: "Ensure your research paper is free from duplication with detailed plagiarism analysis, accurate similarity reports, and expert review for smooth submission.",
  keywords: ["Plagiarism Service", "plagiarism checker uk", "academic paper plagiarism checker services", "research paper plagiarism checker services", "plagiarism checker for dissertation"],
  slug: "/services/publication-support/plagiarism-services",
});

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

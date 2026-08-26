import ArtworkPreparationService from "@/components/services/publication-support/art-work-preparation/ArtworkPreparationService";
import ArtworkPreparationDetails from "@/components/services/publication-support/art-work-preparation/ArtworkPreparationDetails";
import WhoWeServeArtwork from "@/components/services/publication-support/art-work-preparation/WhoWeServeArtwork";
import React from "react";
import ScientificIllustrationShowcase from "@/components/services/publication-support/art-work-preparation/ScientificIllustrationShowcase";
import ArtworkServicePackages from "@/components/services/publication-support/art-work-preparation/ArtworkServicePackages";
import ArtworkTestimonialsAndFAQ from "@/components/services/publication-support/art-work-preparation/ArtworkTestimonialsAndFAQ";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Scientific Artwork Preparation Service for Diagrams & Charts",
  description: "Get expert support in creating clear, accurate diagrams and charts with precise formatting, ensuring your research visuals meet publication standards.",
  keywords: ["Artwork preparation", "Artwork preparation service", "Artwork for publication support", "artwork preparation for scientific paper", "artwork preparation for academic paper"],
  slug: "/services/publication-support/art-work-preparation",
});

const page = () => {
  return (
    <>
      <ArtworkPreparationService />
      <WhoWeServeArtwork />
      <ArtworkPreparationDetails />
      <ScientificIllustrationShowcase/>
      <ArtworkServicePackages/>
      <ArtworkTestimonialsAndFAQ/>
    </>
  );
};

export default page;

import ArtworkPreparationService from "@/components/services/publication-support/art-work-preparation/ArtworkPreparationService";
import ArtworkPreparationDetails from "@/components/services/publication-support/art-work-preparation/ArtworkPreparationDetails";
import WhoWeServeArtwork from "@/components/services/publication-support/art-work-preparation/WhoWeServeArtwork";
import React from "react";
import ScientificIllustrationShowcase from "@/components/services/publication-support/art-work-preparation/ScientificIllustrationShowcase";
import ArtworkServicePackages from "@/components/services/publication-support/art-work-preparation/ArtworkServicePackages";
import ArtworkTestimonialsAndFAQ from "@/components/services/publication-support/art-work-preparation/ArtworkTestimonialsAndFAQ";

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

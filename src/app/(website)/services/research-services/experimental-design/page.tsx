import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import ExperimentalDesignHero from "@/components/services/research-services/experimental-design/ExperimentalDesignHero";
import ExperimentalDesignsAndPackages from "@/components/services/research-services/experimental-design/ExperimentalDesignsAndPackages";
import ExperimentalDesignServicesAccordion from "@/components/services/research-services/experimental-design/ExperimentalDesignServicesAccordion";
import WhoWeServeAndProcess from "@/components/services/research-services/experimental-design/WhoWeServeAndProcess";
import {
  experimentalDesignFAQ,
  experimentalDesignTestimonials,
} from "@/lib/services/data/research-services/experimentalDesignTestimonials";
import React from "react";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Experimental Study Design Service for Research | Pubrica",
  description: "Expert experimental study design services for research papers and manuscripts to ensure accuracy, validity, and journal-ready results.",
  keywords: ["Experimental Study Design", "Experimental Research Design Service", "Research Paper Study Design", "Manuscript Study Design Service", "Thesis Experimental Study Design"],
  slug: "/services/research-services/experimental-design",
});

const page = () => {
  return (
    <>
      <ExperimentalDesignHero />
      <ExperimentalDesignServicesAccordion />
      <WhoWeServeAndProcess />
      <ExperimentalDesignsAndPackages />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's experimental design service has empowered researchers to develop methodologically sound, ethically compliant, and publication-ready studies that advance scientific knowledge and boost their academic impact. Here is what our clients say:"
        testimonials={experimentalDesignTestimonials}
      />
      <CommonFAQ
        title="Frequently Asked Questions – Experimental Design Service"
        faqs={experimentalDesignFAQ}
      />
      <InsightsSection/>
    </>
  );
};

export default page;

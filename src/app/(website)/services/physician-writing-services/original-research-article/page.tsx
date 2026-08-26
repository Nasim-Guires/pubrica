import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import ComplianceAndGuidelinesSection from "@/components/services/research-services/original-research-article/ComplianceAndGuidelinesSection";
import EmpiricalFeaturesAccordion from "@/components/services/research-services/original-research-article/EmpiricalFeaturesAccordion";
import EmpiricalResearchProcessSection from "@/components/services/research-services/original-research-article/EmpiricalResearchProcessSection";
import OriginalResearchArticle from "@/components/services/research-services/original-research-article/OriginalResearchArticle";
import PhysicianResearchOfferingsSection from "@/components/services/research-services/original-research-article/PhysicianResearchOfferingsSection";
import PhysicianWhoWeServeSection from "@/components/services/research-services/original-research-article/PhysicianWhoWeServeSection";
import ResearchArticleTypesAccordion from "@/components/services/research-services/original-research-article/ResearchArticleTypesAccordion";
import ResearchPackagesSection from "@/components/services/research-services/original-research-article/ResearchPackagesSection";
import {
  originalResearchFAQ,
  originalResearchTestimonials,
} from "@/lib/services/data/original-research-article/originalResearchTestimonials";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Research Paper Writing Services by Subject Experts",
  description: "From clinical trials to epidemiological studies, Pubrica delivers publication-ready manuscripts following ICMJE, GCP, and journal standards.",
  keywords: ["Original research article", "Original research article writing service", "Medical discoveries", "Medical manuscript writing service", "Empirical research article writing"],
  slug: "/services/physician-writing-services/original-research-article",
});

const page = () => {
  return (
    <>
      <OriginalResearchArticle />
      <PhysicianResearchOfferingsSection />
      <PhysicianWhoWeServeSection />
      <ResearchArticleTypesAccordion />
      <EmpiricalResearchProcessSection />
      <EmpiricalFeaturesAccordion />
      <ComplianceAndGuidelinesSection />
      <ResearchPackagesSection />
      <CommonTestimonial
        title="Testimonials"
        description="Discover how Pubrica has helped physicians, surgeons, and researchers publish high-quality original research articles in leading peer-reviewed journals."
        testimonials={originalResearchTestimonials}
      />
      <CommonFAQ
        title="Frequently Asked Questions – Original Research Article Writing Service"
        faqs={originalResearchFAQ}
      />
    </>
  );
};

export default page;

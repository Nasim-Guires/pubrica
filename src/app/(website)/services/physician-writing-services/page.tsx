import CommonTestimonial from "@/components/common/CommonTestimonials";
import { PhysicianServicesList } from "@/components/services/physician-writing-services/PhysicianServicesList";
import { PhysicianWhoWeServe } from "@/components/services/physician-writing-services/PhysicianWhoWeServe";
import { PhysicianWritingExtensions } from "@/components/services/physician-writing-services/PhysicianWritingExtensions";
import { PhysicianWritingHero } from "@/components/services/physician-writing-services/PhysicianWritingHero";
import { TherapeuticAndComplianceSpecialties } from "@/components/services/physician-writing-services/TherapeuticAndComplianceSpecialties";
import { physicianWritingHubTestimonials } from "@/lib/services/data/physician-writing-services/physicianWritingHubTestimonials";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Physician Writing Services for Clinical Research Success",
  description: "Enhance your clinical research with expert Physician Writing Services, including manuscript drafting, grants, and regulatory documents.",
  keywords: ["Physician Writing", "Professional Manuscript Scientific Medical Writing Help For Article", "Regulatory", "Case Report", "Biostatistics"],
  slug: "/services/physician-writing-services",
});

const page = () => {
  return (
    <>
      <PhysicianWritingHero />
      <PhysicianServicesList />
      <PhysicianWhoWeServe />
      <TherapeuticAndComplianceSpecialties />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's physician writing service has supported clinicians in producing publication-ready manuscripts, adhering to evidence-based standards, and meeting the ethical and formatting requirements of leading journals. Here is what our clients say:"
        testimonials={physicianWritingHubTestimonials}
      />
      <PhysicianWritingExtensions />
    </>
  );
};

export default page;

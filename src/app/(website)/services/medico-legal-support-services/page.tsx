import CommonPackages from "@/components/common/CommonPackages";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonWhoWeServe from "@/components/common/CommonWhoWeServe";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import CommonFAQ from "@/components/common/FAQ";
import MedicalLegalServicesWhatWeDo from "@/components/services/medico-legal-support-services/MedicalLegalServicesWhatWeDo";
import ServicesAddOnServices from "@/components/services/medico-legal-support-services/ServicesAddOnServices";
import ServicesExpertiseSectors from "@/components/services/medico-legal-support-services/ServicesExpertiseSectors";
import ServicesMedicoLegalComplianceAndSamples from "@/components/services/medico-legal-support-services/ServicesMedicoLegalComplianceAndSamples";
import ServicesMedicoLegalSupportServices from "@/components/services/medico-legal-support-services/ServicesMedicoLegalSupportServices";
import { medicoLegalSupportFaqs, medicoLegalSupportPackages, medicoLegalSupportTestimonials, medicoLegalSupportWhoWeServe, medicoLegalSupportWorkflow } from "@/lib/services/medico-legal-support-services";
import React from "react";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Medico Legal Support Services | Pubrica Experts",
  description: "Outsource medico legal support services to Pubrica. Experts medical record review, litigation support & case screening for pharma, CROs & hospitals.",
  keywords: ["Medico Legal Support Services", "medical record review services", "litigation support services", "medico-legal case screening services", "medico legal services"],
  slug: "/services/medico-legal-support-services",
});

const page = () => {
  return (
    <>
      <ServicesMedicoLegalSupportServices />
      <MedicalLegalServicesWhatWeDo />
      <CommonWhoWeServe
        title={medicoLegalSupportWhoWeServe.title}
        description={medicoLegalSupportWhoWeServe.description}
        data={medicoLegalSupportWhoWeServe.data}
      />
      <ServicesExpertiseSectors />

      <EditorialWorkflowSection
        heading={medicoLegalSupportWorkflow.heading}
        subheading={medicoLegalSupportWorkflow.subheading}
        description={medicoLegalSupportWorkflow.description}
        steps={medicoLegalSupportWorkflow.steps}
      />
      <ServicesMedicoLegalComplianceAndSamples />
      <CommonTestimonial
        title={medicoLegalSupportTestimonials.title}
        description={medicoLegalSupportTestimonials.description}
        testimonials={medicoLegalSupportTestimonials.testimonials}
      />
      <CommonPackages
        title={medicoLegalSupportPackages.title}
        subtitle={medicoLegalSupportPackages.subtitle}
        description={medicoLegalSupportPackages.description}
        packages={medicoLegalSupportPackages.packages}
      />
      <ServicesAddOnServices />
      <CommonFAQ
        title={medicoLegalSupportFaqs.title}
        faqs={medicoLegalSupportFaqs.faqs}
      />
      <InsightsSection/>
    </>
  )
};

export default page;
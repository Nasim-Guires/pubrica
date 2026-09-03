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
import { medicoLegalSupportFaqs, medicoLegalSupportPackages, medicoLegalSupportTestimonials, medicoLegalSupportWorkflow } from "@/lib/services/medico-legal-support-services";
import React from "react";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Medico Legal Support Services | Pubrica Experts",
  description: "Outsource medico legal support services to Pubrica. Experts medical record review, litigation support & case screening for pharma, CROs & hospitals.",
  keywords: ["Medico Legal Support Services", "medical record review services", "litigation support services", "medico-legal case screening services", "medico legal services"],
  slug: "/services/medico-legal-support-services",
});

import Link from "next/link";

export const medicoLegalSupportWhoWeServe = {
  title: "Who We Serve",

  description: (
    <>
      At Pubrica, we provide specialised{" "}
      <Link
        href="/"
        className="text-blue-600"
      >
        medico legal services
      </Link>{" "}
      for diverse clients. Across malpractice litigation support, insurance claims evaluations, and expert evidence support for criminal matters, we provide all parties with accurate, credible, and legally defensible medical evidence.
    </>
  ),

  data: [
    {
      title: "Law firms & attorney",
      bullets: [
        "We support legal professionals with accurate, evidence-based expert medical opinions in medical negligence, personal injury, wrongful death, and malpractice lawsuits through specialized litigation support services.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Medical-record-review-services-for-legal-case-preparation.webp",
    },
    {
      title: "Insurance Providers",
      bullets: [
        "Our experts assist in evaluating disputed claims through independent medical evaluations and medical record review services.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Healthcare-experts-providing-medico-legal-services-globally.webp",
    },
    {
      title: "Government Agencies",
      bullets: [
        "We provide support in healthcare regulation compliance, public health investigations, and criminal justice matters.",
        "Our team assists with forensic reviews, autopsy evaluations, and reports for regulatory bodies and legal departments.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Medico-legal-case-screening-services-for-legal-case-evaluation.webp",
    },
    {
      title: "Healthcare Providers",
      bullets: [
        "Pubrica assists clinics and healthcare institutions with malpractice defense, peer review support, and compliance assessments.",
        "We offer objective medical-legal opinions to help manage risk and respond to legal inquiries.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Medical-record-review-services-for-personal-injury-claims.webp",
    },
    {
      title: "Patients and Families",
      bullets: [
        "We empower individuals navigating medical malpractice or insurance denial cases with professional medico legal support services.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Advanced-medical-record-review-services-for-medico-legal-investigations.webp",
    },
    {
      title: "Medical Professionals",
      bullets: [
        "We offer medico-legal support for doctors and healthcare workers involved in litigation or credentialing disputes.",
        "From defending against negligence claims to regulatory compliance reviews, our services ensure that their practices meet legal standards.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Outsource-medico-legal-services-for-law-firms-worldwide.webp",
    },
    {
      title: "Private Investigators and Forensic Experts",
      bullets: [
        "We collaborate with private investigators and forensic consultants to provide expert analysis on injury patterns, cause of death, and other medico-legal findings relevant to criminal and civil cases.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Medico-legal-case-screening-services-for-medical-malpractice-evaluation.webp",
    },
    {
      title: "Educational Institutions",
      bullets: [
        "We support medical schools, universities, and research bodies in developing medico-legal curricula, evaluating ethical standards, and guiding research involving clinical and legal intersections.",
      ],
      imageUrl:
        "/images/medico-legal-support-services/Medical-record-review-services-for-malpractice-litigation.webp",
    },
  ],
};

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
      <InsightsSection />
    </>
  )
};

export default page;
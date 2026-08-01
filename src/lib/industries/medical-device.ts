import { Testimonial } from "@/components/common/WhatClientsSays";

export const medicalDeviceClinicalEvaluationReportWorkflow = {
  heading: "How to Prepare a Clinical Evaluation Report for Medical Devices",
  subheading: "A clinical evaluation takes place in four steps:",
  description: "A comprehensive four-step process for preparing a clinical evaluation report for medical devices.",
  steps: [
    {
      stepNumber: 1,
      title: "Establishing or Updating the Clinical Evaluation Plan (CEP)",
      description: "The manufacturer establishes or updates the CEP to define the scope and document the clinical evaluation approach.",
      iconSrc: "/icons/cep.svg",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "Identify Relevant Clinical Data",
      description: "Identifying clinical data relevant to the device under evaluation, its intended purpose, and any gaps in the clinical evidence. Potential sources of clinical data include clinical investigation of the device being evaluated, PMS data, particularly PMCF, clinical literature, and equivalence data.",
      iconSrc: "/icons/evidence-sufficiency.svg",
      position: "top",
    },
    {
      stepNumber: 3,
      title: "Appraise & Generate Data",
      description: "Appraises the relevance, quality, and scientific validity of the clinical data. New or additional clinical data are generated as needed to address any gaps in the clinical evidence.",
      iconSrc: "/icons/appraise-data.svg",
      position: "bottom",
    },
    {
      stepNumber: 4,
      title: "Demonstrate Clinical Evidence Sufficiency",
      description: "Requires the manufacturer to provide sufficient clinical evidence for each relevant general safety and performance requirement (GSPR) that requires clinical data.",
      iconSrc: "/icons/evidence-sufficiency.svg",
      position: "top",
    },
  ],
};


export const medicalDeviceTestimonials: Testimonial[] = [
  {
    id: "anna-muller",
    quote:
      "Pubrica's expertise in Clinical Evaluation Reports helped us meet stringent EU MDR requirements without delays. Their team provided in-depth literature reviews, well-structured analysis, and clear documentation that impressed both our internal auditors and regulators.",
    authorName: "Dr. Anna Müller",
    authorRole: "Regulatory Affairs Manager,",
    authorLocation: "Germany",
    avatarLabel: "Portrait of Dr. Anna Müller",
    flagLabel: "Flag of Germany",
  },
  {
    id: "james-carter",
    quote:
      "The CER prepared by Pubrica was comprehensive, evidence-based, and aligned with the latest regulatory expectations. Their subject matter experts ensured our Class II device submission sailed through smoothly.",
    authorName: "James Carter",
    authorRole: "Director of Quality & Compliance,",
    authorLocation: "United Kingdom",
    avatarLabel: "Portrait of James Carter",
    flagLabel: "Flag of the United Kingdom",
  },
  {
    id: "marc-dubois",
    quote:
      "We were struggling with MDR compliance for our clinical evaluation. Pubrica's team stepped in with outstanding guidance, timely delivery, and high-quality CER documentation. Their support gave us confidence in facing notified bodies.",
    authorName: "Dr. Marc Dubois",
    authorRole: "Clinical & Regulatory Consultant,",
    authorLocation: "France",
    avatarLabel: "Portrait of Dr. Marc Dubois",
    flagLabel: "Flag of France",
  },
];
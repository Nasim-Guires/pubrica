"use client";

import React from "react";
import CommonTestimonial from "@/components/common/CommonTestimonials";

export const aiMlTestimonials = [
  {
    image: "/images/ai-ml-support/journal-of-medical-system.webp",
    quote:
      "Pubrica’s AI and ML experts supported me in developing a predictive model for patient survival analysis in cardiology. Their structured workflow and clear documentation ensured that my manuscript met the standards of the Journal of Medical Systems.",
    name: "Dr. Arjun Deshmukh",
    designation: "Data Scientist in Healthcare",
    organization: "India",
    flag: "/images/editing-and-translation/book-editing/flag.png",
  },
  {
    image:
      "/images/ai-ml-support/journal-of-bioinformatics-and-computational-biology.webp",
    quote:
      "With Pubrica’s AI-driven analytics, I was able to extract meaningful insights from large genomic datasets. Their end-to-end support, from data preprocessing to model validation, helped me align with the scope of the Journal of Bioinformatics and Computational Biology.",
    name: "Dr. David Chen",
    designation: "Research Scientist",
    organization: "Singapore",
    flag: "/images/editing-and-translation/scientific-editing/singapore-.png",
  },
  {
    image: "/images/ai-ml-support/biomedical-and-health-informatics.webp",
    quote:
      "Pubrica’s ML solutions helped streamline my clinical imaging research. The precision of their algorithms and the clarity in their documentation ensured that my work was accepted by the IEEE Journal of Biomedical and Health Informatics without major revisions.",
    name: "Dr. Laura Martínez",
    designation: "Biomedical Engineer",
    organization: "Spain",
    flag: "/images/editing-and-translation/thesis-editing/spain-.png",
  },
];

export default function TestimonialsSection(): React.ReactElement {
  return (
    <CommonTestimonial
      title="Testimonials"
      description="Discover how Pubrica’s AI and ML services empower researchers to build accurate, data-driven models that deliver actionable insights, foster innovation, and accelerate research outcomes. Our solutions enhance decision-making, ensure scalability, and strengthen academic and industry visibility. Here is what our clients say:"
      testimonials={aiMlTestimonials}
    />
  );
}

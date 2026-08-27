"use client";

import CommonFAQ from "@/components/common/FAQ";
import React from "react";

export default function FAQAccordion() {
  const faqData = [
    {
      question: "What is Pubrica, and what do they do?",
      answer:
        "Pubrica is a research and publication agency that mainly assists researchers and academic scholars in life science, medical science, and healthcare domains. It focuses on research and publication services.",
    },
    {
      question: "How is Pubrica's editing service different from others?",
      answer:
        "Pubrica has a team of editors who are alumni of Harvard University and are native speakers. Therefore, our writing quality is highly exceptional and unique.",
    },
    {
      question: "Does Pubrica provide support after the submission?",
      answer:
        "Yes, we support you even after the submission, until you get published.",
    },
    {
      question: "What is the average turn-around time for editing services?",
      answer:
        "A standard editing can take up to 5-7 business days, whereas minor ones take 2-3 business days.",
    },
    {
      question: "What are the domains Pubrica excels at?",
      answer: "We excel at all the subfields of medical science, such as:",
      points: [
        "Anatomy",
        "Physiology",
        "Biochemistry",
        "Pharmacology",
        "Pathology",
        "Microbiology",
        "Immunology",
        "Epidemiology",
        "Public Health",
        "Clinical Medicine",
        "Surgery",
        "Radiology",
        "Psychiatry",
      ],
    },
  ];

  return <CommonFAQ title="Frequently Asked Questions" faqs={faqData} />;
}
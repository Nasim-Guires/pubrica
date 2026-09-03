"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CommonFAQ from "@/components/common/FAQ";



const faqData = [
  {
    question: "1. Who can benefit from these services?",
    answer: "These services are designed for:",
    points: [
      "Researchers and academicians preparing journal submissions",
      "PhD candidates and graduate students working on theses/dissertations",
      "Academic publishers and institutions seeking quality control for manuscripts",
      "Professionals preparing technical reports, white papers, or educational materials",
    ],
  },
  {
    question: "2. What specific services are included?",
    answer: "Our services include:",
    points: [
      "Copy Editing: Correct grammar, punctuation, and syntax",
      "Developmental Editing: Improve structure, flow, and logical presentation",
      "Revisioning & Localization: Tailor content for target audiences or regions",
      "Visual & Accessibility Editing: Ensure tables, figures, and charts are clear and accessible",
      "Forensic & Quality Audit: Check for consistency, referencing accuracy, and adherence to guidelines",
      "Metadata & Permissions Assistance: Manage references, citations, and necessary permissions",
    ],
  },
  {
    question: "3. Do you help with journal submission requirements?",
    answer:
      "Yes, our team ensures your manuscript adheres to specific journal or publisher guidelines, including formatting, reference style, and submission-ready standards.",
  },
  {
    question: "4. Can you edit manuscripts in languages other than English?",
    answer:
      "Yes, we offer multilingual editing and translation services for non-English manuscripts to make them publication-ready in international journals.",
  },
  {
    question: "5. How do I submit my manuscript for editing?",
    answer:
      "You can submit your manuscript via our online portal or email. Once received, our team reviews it and provides a quote along with the estimated delivery time.",
  },
  {
    question: "6. What if I need revisions after editing?",
    answer:
      "We provide revision support to address any feedback or additional requirements post-editing, ensuring your manuscript meets your expectations and publication standards.",
  },
];

export function FAQSection() {
  // Set item 1 open by default as shown in the screenshot
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <CommonFAQ
      title="Frequently Asked Questions"
      faqs={faqData}
    />
  );
}

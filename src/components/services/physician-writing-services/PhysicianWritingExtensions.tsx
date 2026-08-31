"use client";
import CommonFAQ from "@/components/common/FAQ";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

interface FAQData {
  id: number;
  question: string;
  answer: string;
}

interface InsightCard {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export const PhysicianWritingExtensions: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const faqs = [
    {
      question:
        "1. How to prepare a clinical research manuscript for journal submission?",
      answer:
        "Prepare by designing an IMRAD structure, ensuring ethical clearance, methodology, accuracy of statistics, proper reporting (e.g., consort statement), proper formatting according to journal guidelines, and editing and proofreading before submission.",
    },
    {
      question:
        "2. How can healthcare organizations outsource medical writing services?",
      answer:
        "Outsourcing by healthcare organizations involves choosing experienced medical writing companies, defining the scope of the project, ensuring compliance with regulations, confidentiality agreements, and timelines and quality checks.",
    },
    {
      question:
        "3. What medical writing services are available for pharma and clinical research projects?",
      answer:
        "Medical writing services involve clinical study reports, clinical study protocols, regulatory documents, manuscript writing, systematic review writing, safety reports, abstracts, posters, grant writing, and publication services for pharmaceutical companies and clinical research.",
    },
    {
      question:
        "4. How do physicians publish research papers in high-impact medical journals?",
      answer:
        "To get published in high-impact journals, physicians conduct robust studies, adhere to reporting guidelines (CONSORT and STROBE), write clearly, choose appropriate journals, ensure ethical compliance, and be responsive to peer review.",
    },
    {
      question:
        "5. How to improve the quality of clinical manuscripts before journal submission?",
      answer:
        "To improve clinical manuscripts, one can improve methodologies, ensure accurate data analysis, adhere to reporting guidelines, improve clarity, check references, ensure correct journal formatting, and edit and proofread manuscripts.",
    },
  ];
  const insights: InsightCard[] = [
    {
      id: 1,
      title:
        "How to Structure Case Reports and Review Articles for Medical Journals",
      excerpt:
        "Journals expect a clear structure for case reports and review articles, featuring precise objectives, rigorous timeline analysis...",
      image:
        "/images/editing-and-translation/How-to-Structure-Case-Reports-and-Review-Articles-for-Medical-Journals.jpg",
      link: "/services/physician-writing-services/case-report",
    },
    {
      id: 2,
      title:
        "How Should Physicians Choose the Right Journal for Submitting a Case...",
      excerpt:
        "Publishing a case report involves more than clinical knowledge; it also demands strategic journal targeting, matching visibility metrics...",
      image:
        "/images/editing-and-translation/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.jpg",
      link: "/services/publication-support/journal-selection",
    },
    {
      id: 3,
      title:
        "How Physicians Can Write Clear and Impactful Patient Education Materials",
      excerpt:
        "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing compliance, and bridging care delivery gaps...",
      image:
        "/images/editing-and-translation/How-Physicians-Can-Write-Clear-and-Impactful-Patient-Education-Materials.jpg",
      link: "/services/patient-education-content",
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-left text-gray-800">
      {/* --- FAQ Accordion Structure --- */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* --- Section 3: Insights Grid Cards --- */}
      <InsightsSection />
    </div>
  );
};

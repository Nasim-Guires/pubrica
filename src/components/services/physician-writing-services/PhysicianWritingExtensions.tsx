"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

  const faqs: FAQData[] = [
    {
      id: 1,
      question:
        "1. How to prepare a clinical research manuscript for journal submission?",
      answer:
        "Prepare by designing an IMRAD structure, ensuring ethical clearance, methodology, accuracy of statistics, proper reporting (e.g., consort statement), proper formatting according to journal guidelines, and editing and proofreading before submission.",
    },
    {
      id: 2,
      question:
        "2. How can healthcare organizations outsource medical writing services?",
      answer:
        "Outsourcing by healthcare organizations involves choosing experienced medical writing companies, defining the scope of the project, ensuring compliance with regulations, confidentiality agreements, and timelines and quality checks.",
    },
    {
      id: 3,
      question:
        "3. What medical writing services are available for pharma and clinical research projects?",
      answer:
        "Medical writing services involve clinical study reports, clinical study protocols, regulatory documents, manuscript writing, systematic review writing, safety reports, abstracts, posters, grant writing, and publication services for pharmaceutical companies and clinical research.",
    },
    {
      id: 4,
      question:
        "4. How do physicians publish research papers in high-impact medical journals?",
      answer:
        "To get published in high-impact journals, physicians conduct robust studies, adhere to reporting guidelines (CONSORT and STROBE), write clearly, choose appropriate journals, ensure ethical compliance, and be responsive to peer review.",
    },
    {
      id: 5,
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
      <section className="py-7 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200/60">
        <h2 className="text-black text-xl md:text-2xl lg:text-[26px] font-bold tracking-tight mb-8">
          Frequently Asked Questions – Physician Writing Service
        </h2>

        <div className="w-full border border-gray-200 rounded overflow-hidden bg-white shadow-sm">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Accordion header click event toggle */}
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-gray-50/70"
                >
                  <span className="text-[#0c313a] text-xs md:text-sm font-bold tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <span className="text-lg font-bold text-slate-700 select-none flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible content section container */}
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[300px] border-t border-gray-100 bg-white"
                      : "max-h-0"
                  }`}
                >
                  <p className="p-4 md:p-5 text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Section 3: Insights Grid Cards --- */}
      <section className="py-7 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200/60">
        <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold tracking-tight mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="bg-white rounded border border-gray-200/80 shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Graphic Banner Top Area */}
              <div className="relative w-full aspect-[16/10] bg-zinc-100 border-b border-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Informational Text Description Wrapper */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="text-[#083c4c] text-xs md:text-sm font-extrabold leading-snug tracking-wide text-left group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed text-justify line-clamp-3">
                  {card.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

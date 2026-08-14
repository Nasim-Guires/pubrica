"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ArticleItem {
  title: string;
  excerpt: string;
  imageUrl: string;
}

export const FAQAndInsightsSection: React.FC = () => {
  // Accordion State tracking open tab
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        "1. What are the common challenges faced in conducting professional research?",
      answer:
        "The common challenges include funding constraints, difficulties in collecting data, problems with methodology, ethical clearances, time constraints, difficulties in accessing literature, and ensuring research validity and reliability.",
    },
    {
      id: 2,
      question:
        "2. What role do research services play in academic and corporate studies?",
      answer:
        "The research services assist in improving study design, analysis, literature review, manuscript preparation, editing, formatting, and ensuring compliance, thereby improving the quality, efficiency, and overall outcome of research.",
    },
    {
      id: 3,
      question:
        "3. What are the ethical standards followed in professional research?",
      answer:
        "Professional research is guided by ethical principles such as obtaining consent, confidentiality, integrity of data, avoiding plagiarism, authorship, ethical approval, transparency, and reporting of results.",
    },
    {
      id: 4,
      question:
        "4. How do research services assist with data interpretation and insights?",
      answer:
        "Research services can help by using the right statistical analysis techniques, accurately interpreting the results, identifying patterns, creating visualizations, and explaining the information to facilitate meaningful conclusions.",
    },
    {
      id: 5,
      question:
        "5. What tools and methodologies are commonly used in advanced research?",
      answer:
        "Advanced research techniques involve the use of statistical software, qualitative analysis software, systematic review methodologies, experimental designs, surveys, regression analysis, data visualization tools, and evidence-based methodologies.",
    },
  ];

  const articles: ArticleItem[] = [
    {
      title:
        "How to Structure Case Reports and Review Articles for Medical Journals",
      excerpt:
        "Medical journals expect a structure for case reports and review articles, with clear objectives....",
      imageUrl:
        "/images/editing-and-translation/How-to-Structure-Case-Reports-and-Review-Articles-for-Medical-Journals.jpg",
    },
    {
      title:
        "How Should Physicians Choose the Right Journal for Submitting a Case...",
      excerpt:
        "Publishing a case report involves more than clinical knowledge; it also demands strategic journal ....",
      imageUrl:
        "/images/editing-and-translation/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.jpg",
    },
    {
      title:
        "How Physicians Can Write Clear and Impactful Patient Education Materials",
      excerpt:
        "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing....",
      imageUrl:
        "/images/editing-and-translation/How-Physicians-Can-Write-Clear-and-Impactful-Patient-Education-Materials.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#f4f9fc] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* =========================================================
            1. FREQUENTLY ASKED QUESTIONS SECTION
           ========================================================= */}

        {/* Top Call to Action Red Button */}
        <div className="mb-8">
         <GetFreeQuoteButton/>
        </div>

        {/* FAQ Header Block */}
        <div className="w-full mb-8 text-left">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-extrabold tracking-tight">
            Frequently Asked Questions &ndash; Research Service
          </h2>
        </div>

        {/* Accordion List Wrapper */}
        <div className="w-full bg-white border border-gray-200 shadow-sm mb-20">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Accordion Trigger Title Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-4 px-6 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors focus:outline-none"
                >
                  <span className="text-[#083c4c] font-bold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold text-[#083c4c] flex-shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Expanded Panel Content */}
                {isOpen && (
                  <div className="bg-white px-6 pb-6 pt-1 border-t border-gray-100">
                    <p className="text-gray-800 text-sm leading-relaxed text-justify">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================
            2. INSIGHTS SECTION
           ========================================================= */}

        {/* Insights Title Header */}
        <div className="w-full mb-10 text-left">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-extrabold tracking-tight">
            Insights
          </h2>
        </div>

        {/* Blog Post Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-b-lg border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group min-h-[380px]"
            >
              {/* Image Graphic Block */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden relative border-b border-gray-50">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Text Description Block */}
              <div className="p-5 flex-1 flex flex-col justify-start gap-4">
                <h3 className="text-[#083c4c] font-bold text-base md:text-[17px] leading-snug tracking-normal hover:text-[#0b4a60] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed text-justify">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

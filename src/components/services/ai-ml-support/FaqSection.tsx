"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question:
      "1. What services do you offer under Data Analytics & Machine Learning Services?",
    answer:
      "We provide a wide variety of services such as Patient journey and Insights – Machine Learning, Customer Segmentation, Predictive analytics, Algorithm and development for training and optimization, Interpretation, Reporting & Visualization, and Leadership content and editorial design.",
  },
  {
    id: 2,
    question:
      "2. Can you integrate AI/ML models with my existing research workflow or software?",
    answer:
      "Yes, we seamlessly integrate customized AI/ML models with your existing software stack, research tools, and cloud platforms via APIs or containerized pipelines to ensure smooth workflow deployment.",
  },
  {
    id: 3,
    question:
      "3. Do you provide publication support along with AI/ML services?",
    answer:
      "Absolutely. In addition to core AI/ML execution, we offer comprehensive manuscript preparation support, including journal-ready data visualizations, method section documentation, statistical validation, and reviewer response support.",
  },
  {
    id: 4,
    question: "4. Who can benefit from these services?",
    answer:
      "Our services are tailored for PhD scholars, academic researchers, healthcare institutions, pharmaceutical companies, biostatisticians, and enterprise organizations seeking data-driven insights and scalable AI solutions.",
  },
];

export default function FaqSection(): React.ReactElement {
  // Open the first item by default to match the screenshot state
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f8f9f9] py-7 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8">
          Frequently Asked Questions – AI and ML Service
        </h2>

        {/* Accordion Container */}
        <div className="border border-slate-300 rounded-sm bg-white divide-y divide-slate-200 shadow-sm">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors duration-150">
                {/* Question Row / Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {item.question}
                  </span>
                  <span className="text-xl font-medium text-slate-700 shrink-0 select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Expanded Answer Box */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-white">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

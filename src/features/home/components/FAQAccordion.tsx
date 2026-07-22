"use client";
import React, { useState } from "react";
import Container from "@/components/common/Container";

export default function FAQAccordion() {
  // Keeps track of the currently opened FAQ index (-1 means all closed)
  const [openIndex, setOpenIndex] = useState(0);
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
        "A standard editing can take up to 5–7 business days, whereas minor edits take 2–3 business days.",
    },
    {
      question: "What are the domains Pubrica excels at?",
      answer: `We excel at all the subfields of medical science, such as:

1. Anatomy
2. Physiology
3. Biochemistry
4. Pharmacology
5. Pathology
6. Microbiology
7. Immunology
8. Epidemiology
9. Public Health
10. Clinical Medicine
11. Surgery
12. Radiology
13. Psychiatry`,
    },
  ];

  const toggleFAQ = (index: React.SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-16 bg-white select-none font-sans text-gray-800">
      <Container className="w-full max-w-5xl flex flex-col items-center">
        {/* Centered Main Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 font-display mb-12">
          Frequently Asked Questions
        </h2>

        {/* Stacked Accordion Border Container Wrapper */}
        <div className="w-full border border-gray-200 rounded-sm divide-y divide-gray-200 shadow-sm overflow-hidden">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="w-full transition-colors duration-300">
                {/* Header Interactive Click Trigger Panel */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 flex items-center gap-4 text-left font-semibold text-xs sm:text-sm text-emerald-950 hover:bg-gray-50/80 transition-all duration-200"
                >
                  {/* Indicator Icon State */}
                  <span className="flex-shrink-0 text-base font-bold text-emerald-950 w-4 flex justify-center">
                    {isOpen ? "−" : "🫵"}
                  </span>

                  <span className="tracking-tight leading-snug">
                    {item.question}
                  </span>
                </button>

                {/* Sub-Text Collapsible Panel Box */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
                    isOpen
                      ? "max-h-[500px] border-t border-gray-100"
                      : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

"use client";

import React, { useState } from "react";

// FAQ Data extracted directly from the design
const leftFaqs = [
  {
    id: 1,
    question: "1. What is pre-submission peer review for research manuscripts?",
    answer:
      "The pre-submission peer review is a process whereby experts review your work before submitting it to a journal in order to clarify your work, methodology, structure, and overall quality.",
  },
  {
    id: 2,
    question:
      "2. How long does the journal submission and peer-review process take?",
    answer:
      "The pre-submission turnaround typically takes 5 to 10 working days depending on the package selected. Actual journal peer-review timelines vary by publisher, usually ranging from 4 to 12 weeks.",
  },
  {
    id: 3,
    question:
      "3. How can researchers ensure compliance with journal ethical guidelines during submission?",
    answer:
      "Ensure clear disclosure of funding sources, institutional review board (IRB) approvals, conflict of interest statements, and proper data attribution before finalizing your manuscript.",
  },
  {
    id: 4,
    question: "4. How to prepare a cover letter for journal submission?",
    answer:
      "Highlight the significance of your findings, explain why your study fits the journal scope, declare no competing interests, and confirm that the work has not been published elsewhere.",
  },
  {
    id: 5,
    question:
      "5. What are the benefits of expert review before submitting a research paper?",
    answer:
      "Expert review identifies methodology gaps, statistical issues, structural flaws, and language ambiguities early, drastically lowering your risk of desk rejection.",
  },
  {
    id: 6,
    question:
      "6. How does pre-submission peer review differ from journal peer review?",
    answer:
      "Pre-submission review is a collaborative feedback service to improve your paper before submission, whereas journal peer review is an evaluative process conducted by the publisher to make an editorial decision.",
  },
  {
    id: 7,
    question:
      "7. What mistakes can be avoided through pre-submission peer review?",
    answer:
      "Common issues like incorrect formatting, missing ethical statements, unaddressed limitations, unclear data presentation, and weak discussion sections can all be resolved prior to formal submission.",
  },
];

const rightFaqs = [
  {
    id: 8,
    question:
      "8. What feedback should authors expect from a pre-submission peer review?",
    answer:
      "The authors can expect feedback on the clarity of the writing, structure, methodology, data presentation, logical gaps, compliance with the guidelines, language quality, and suggestions on how to improve the quality of the manuscript.",
  },
  {
    id: 9,
    question:
      "9. How do research teams ensure their manuscript is ready for journal submission?",
    answer:
      "Conduct a thorough pre-submission checklist review covering target journal scope alignment, reference formatting, high-resolution figures, plagiarism checks, and co-author approvals.",
  },
  {
    id: 10,
    question:
      "10. How can researchers strengthen their manuscript before journal submission?",
    answer:
      "Focus on refining the abstract for clarity, ensuring the introduction states a strong research gap, rigorously validating statistical claims, and linking conclusions back to your core data.",
  },
  {
    id: 11,
    question:
      "11. Can pre-submission peer review increase journal acceptance chances?",
    answer:
      "Yes. By addressing peer reviewer concerns and technical errors proactively, your manuscript presents a significantly higher standard of quality to journal editors, improving peer review outcomes.",
  },
  {
    id: 12,
    question:
      "12. What should I check before submitting my research paper to a journal?",
    answer:
      "Verify word counts, target journal reference style, figure formatting, author affiliations, supplementary material files, and ensure all reviewer feedback has been systematically addressed.",
  },
  {
    id: 13,
    question:
      "13. What do journal reviewers typically look for in a research manuscript?",
    answer:
      "Reviewers evaluate novelty, methodological rigor, clarity of results, proper citation of existing literature, adherence to ethical standards, and whether conclusions are soundly supported by evidence.",
  },
];

export default function FaqSection() {
  // Keep track of open accordions (Items 1 and 8 start open as per the screenshot)
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    1: true,
    8: true,
  });

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-10 text-center">
          Frequently Asked Questions – Peer Review Pre-submission Services
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="border border-gray-200 rounded-sm divide-y divide-gray-200 shadow-sm">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={!!openFaqs[faq.id]}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="border border-gray-200 rounded-sm divide-y divide-gray-200 shadow-sm">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={!!openFaqs[faq.id]}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="bg-white transition-colors">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-xs sm:text-sm text-[#0c3547] leading-snug group-hover:text-[#0082a6] transition-colors">
          {faq.question}
        </span>

        <span className="text-lg font-bold text-[#0c3547] shrink-0 leading-none select-none mt-0.5">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Expandable Content Area */}
      {isOpen && (
        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

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
      "The journal submission and peer review process may take a few weeks to a few months depending on various factors such as journal policies and timelines.",
  },
  {
    id: 3,
    question:
      "3. How can researchers ensure compliance with journal ethical guidelines during submission?",
    answer:
      "A researcher can comply with ethical standards by respecting a journal’s ethical policies, declaring conflicts of interest, seeking approvals such as ethics committee clearance, obtaining informed consent, avoiding plagiarism, and reporting results accurately",
  },
  {
    id: 4,
    question: "4. How to prepare a cover letter for journal submission?",
    answer:
      "Prepare a cover letter that entails a brief description of your study, its importance, and whether it is original, your conflicts of interest, and why it is a good fit for the journal.",
  },
  {
    id: 5,
    question:
      "5. What are the benefits of expert review before submitting a research paper?",
    answer:
      "Expert review will help in clarity, methodology, gaps in information, structure and language quality, and preparation for journal evaluation and peer review.",
  },
  {
    id: 6,
    question:
      "6. How does pre-submission peer review differ from journal peer review?",
    answer:
      "Pre-submission peer review is an optional process, where experts review your manuscript to improve it, while journal peer review is a formal process conducted by experts to determine whether your manuscript is worthy of publication.",
  },
  {
    id: 7,
    question:
      "7. What mistakes can be avoided through pre-submission peer review?",
    answer:
      " Pre-submission peer review enables the avoidance of unclear writing, poor methodology, inadequate reporting, formatting issues, non-compliance with the guidelines, logical gaps, and potential issues that may result in the rejection of the manuscript from the journal.",
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
      "Research groups prepare for submission by refining their study, reviewing journal guidelines, refining the manuscript for clarity and structure, reviewing references, ensuring compliance with guidelines, and possibly conducting internal or expert reviews.  ",
  },
  {
    id: 10,
    question:
      "10. How can researchers strengthen their manuscript before journal submission?",
    answer:
      "Researchers can improve their manuscript by refining the research question, improving structure and clarity, ensuring data accuracy, aligning it with journal guidelines, and seeking feedback from experts.",
  },
  {
    id: 11,
    question:
      "11. Can pre-submission peer review increase journal acceptance chances?",
    answer:
      "Yes, pre-submission peer review may help in increasing the probability of acceptance by helping identify potential flaws in the study, improving clarity and methodology, ensuring that it aligns with journal guidelines, and improving overall quality.",
  },
  {
    id: 12,
    question:
      "12. What should I check before submitting my research paper to a journal?",
    answer:
      "Before submission, it is important to assess whether it aligns with journal scope, formatting requirements, word count, reference style, ethical approvals, conflict of interest statements, data accuracy, and overall quality.",
  },
  {
    id: 13,
    question:
      "13. What do journal reviewers typically look for in a research manuscript?",
    answer:
      "Journal reviewers usually consider originality, methodological quality, clarity of the manuscript, validity of the data, ethical standards, relevance, and contribution of the research to the discipline.",
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
    <section className="w-full bg-white py-7 px-4 font-sans">
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

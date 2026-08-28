"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answerBullets?: string[];
  answerText?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "1. Who can benefit from these services?",
    answerBullets: [
      "Researchers and academicians preparing journal submissions",
      "PhD candidates and graduate students working on theses/dissertations",
      "Academic publishers and institutions seeking quality control for manuscripts",
      "Professionals preparing technical reports, white papers, or educational materials",
    ],
  },
  {
    id: 2,
    question: "2. What specific services are included?",
    answerText:
      "Our packages cover everything from basic grammar and sentence polishing to structural editing, academic formatting, citation checking, and figure/table alignment per journal guidelines.",
  },
  {
    id: 3,
    question: "3. Do you help with journal submission requirements?",
    answerText:
      "Yes, our Advanced and Premium packages include formatting according to specific target journal guidelines, title page setup, and reference cross-checking.",
  },
  {
    id: 4,
    question: "4. Can you edit manuscripts in languages other than English?",
    answerText:
      "We currently specialize in English academic editing, including localization and adaptation for native and non-native international audiences.",
  },
  {
    id: 5,
    question: "5. How do I submit my manuscript for editing?",
    answerText:
      "You can request a free quote using our submission button, upload your document securely, and select your preferred turnaround time.",
  },
  {
    id: 6,
    question: "6. What if I need revisions after editing?",
    answerText:
      "We offer post-editing support and re-reviews based on the tier selected to address reviewer feedback or minor additions.",
  },
];

export function FAQSection() {
  // Set item 1 open by default as shown in the screenshot
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
          Frequently Asked Questions
        </h2>

        {/* Accordion Container */}
        <div className="border border-slate-200 rounded-sm divide-y divide-slate-200">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="bg-white">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-slate-700">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    {faq.answerBullets && (
                      <ul className="list-disc pl-6 space-y-2">
                        {faq.answerBullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {faq.answerText && <p>{faq.answerText}</p>}
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

"use client";

import React, { useState } from "react";
import { ThumbsUp, Minus } from "lucide-react";

// ==========================================
// 1. TESTIMONIALS DATA
// ==========================================
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  journalCoverTitle: string;
  journalCoverSubtitle: string;
  journalCoverBg: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "“The proofreading team corrected subtle grammar and formatting issues I had missed. My thesis looked polished and professional.”",
    name: "Ananya Rao",
    role: "PhD Scholar, India",
    journalCoverTitle: "CLINICAL PROBLEM-SOLVING",
    journalCoverSubtitle: "The New England Journal of Medicine",
    journalCoverBg: "from-blue-900 to-slate-900",
  },
  {
    id: 2,
    quote:
      "“Thanks to Pubrica’s editorial support, my research paper was ready for journal submission without any formatting or citation issues. The process was smooth, and I felt confident submitting it.”",
    name: "Dr Liam O’Connor",
    role: "Postdoctoral Researcher, Canada",
    journalCoverTitle: "CLINICAL PRACTICE",
    journalCoverSubtitle: "The New England Journal of Medicine",
    journalCoverBg: "from-emerald-900 to-slate-900",
  },
];

// ==========================================
// 2. FAQ DATA
// ==========================================
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question:
      "What does proofreading include for academic and research papers?",
    answer:
      "The process of proofreading involves correcting grammar, spelling, punctuation, and formatting errors, typos, reference list inconsistencies, and minor linguistic errors before the final academic submission.",
  },
  {
    id: "faq-2",
    question: "What is the difference between proofreading and editing?",
    answer:
      "Editing involves improving the structure, clarity, content, and flow of writing, while proofreading involves improving grammar, spelling, punctuation, formatting, and minor linguistic errors before the final manuscript submission.",
  },
  {
    id: "faq-[#3]",
    question:
      "Why is proofreading important before submitting a manuscript to a journal?",
    answer:
      "Proofreading ensures grammar, format, reference, readability, and presentation, reducing the risk of rejection and improving the quality of the manuscript prior to journal submission.",
  },
  {
    id: "faq-4",
    question:
      "How can I improve the grammar and clarity of my research paper before submission?",
    answer:
      "Grammar and language may be improved by revising the text, keeping the language simple, logical, and coherent, using active voice, checking consistency, and proofreading the final draft before submission.",
  },
  {
    id: "faq-5",
    question:
      "What types of errors are corrected during professional proofreading?",
    answer:
      "Professional proofreading involves correction of grammatical errors, spelling mistakes, punctuation, typos, formatting, reference list errors, capitalization errors, and language errors before the final submission.",
  },
  {
    id: "faq-6",
    question:
      "Where can I find reliable proofreading services for academic writing?",
    answer:
      "Good proofreading services can be found in the writing centers of universities, professional academic editing companies, qualified freelance editors, and research support services on the Internet.",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function TestimonialsAndFAQ() {
  // Testimonials slide index state
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Accordion active item state (defaults to first item open)
  const [openFAQ, setOpenFAQ] = useState<string>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenFAQ((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: TESTIMONIALS                 */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#1f3d35] text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-between space-y-6 relative border border-[#162d27]"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                {/* Quote and Author Info */}
                <div className="space-y-6 flex-1">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    {item.quote}
                  </p>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      — {item.name}
                    </h3>
                    <p className="text-xs text-emerald-200 italic">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Simulated Book/Journal Cover Frame */}
                <div className="w-28 h-36 shrink-0 bg-slate-900 border-2 border-slate-400 rounded-sm p-1.5 flex flex-col justify-between shadow-md self-center sm:self-start">
                  <div className="bg-white text-[7px] text-slate-800 font-serif p-0.5 text-center font-bold uppercase tracking-tighter border-b border-slate-300">
                    The New England Journal of Medicine
                  </div>
                  <div
                    className={`flex-1 bg-gradient-to-b ${item.journalCoverBg} p-1 flex items-center justify-center text-center my-0.5`}
                  >
                    <span className="text-[9px] font-bold text-white leading-tight uppercase font-serif">
                      {item.journalCoverTitle}
                    </span>
                  </div>
                  <div className="text-[6px] text-slate-400 text-center font-mono">
                    Publication Preview
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveSlide(0)}
            className={`w-3 h-3 rounded-full border border-slate-700 transition-colors ${
              activeSlide === 0 ? "bg-transparent" : "bg-transparent"
            }`}
            aria-label="Slide 1"
          />
          <button
            type="button"
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === 1 ? "bg-slate-900" : "bg-slate-800"
            }`}
            aria-label="Slide 2"
          />
        </div>
      </section>

      {/* ======================================= */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS   */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion Box with Dashed Outer Border */}
        <div className="border border-dashed border-slate-400 bg-white rounded-xs divide-y divide-slate-200">
          {faqData.map((faq) => {
            const isOpen = openFAQ === faq.id;

            return (
              <div key={faq.id} className="transition-colors">
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-start p-4 text-left font-bold text-xs sm:text-sm text-[#003B46] hover:bg-slate-50 transition-colors space-x-3 focus:outline-none"
                >
                  {/* Icon Indicator: ThumbsUp when closed, Minus when open */}
                  <div className="shrink-0 text-slate-700">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-slate-900" />
                    ) : (
                      <ThumbsUp className="w-4 h-4 text-slate-700 hover:text-slate-900" />
                    )}
                  </div>

                  {/* Question Text with focus outline matching screenshot 2 & 3 */}
                  <span
                    className={`leading-normal ${
                      isOpen
                        ? "border border-slate-900 px-1 py-0.5 rounded-2xs"
                        : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-11 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

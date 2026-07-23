"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- Testimonial Data ---
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  country: string;
  flagUrl: string;
  journalLogoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica’s editors transformed my Ph.D. thesis into a well-polished document that met all my university’s requirements. Their attention to detail and academic precision gave me the confidence to submit without hesitation.",
    author: "DR. ANANYA MEHTA",
    title: "Ph.D. Scholar, India",
    country: "India",
    // SVG circular flag or image placeholder
    flagUrl: "https://flagcdn.com/w40/in.png",
  },
  {
    id: 2,
    quote:
      "The editors at Pubrica helped me improve the structure and clarity of my thesis. Their professional support made a huge difference in the outcome and saved me valuable time before submission.",
    author: "SARAH JOHNSON",
    title: "Master’s Scholar, UK",
    country: "United Kingdom",
    flagUrl: "https://flagcdn.com/w40/gb.png",
  },
  {
    id: 3,
    quote:
      "The thorough proofreading and formatting gave my dissertation a professional finish. I received excellent feedback from my supervisor.",
    author: "CARLOS RODRÍGUEZ",
    title: "Master’s Student, Spain",
    country: "Spain",
    flagUrl: "https://flagcdn.com/w40/es.png",
  },
];

// --- FAQ Data ---
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "1. How to edit a thesis before final submission?",
    answer:
      "To edit a thesis, it is necessary to look at the structure, revise arguments, correct grammatical errors, verify data accuracy, check references, check compliance with formatting requirements, and proofread it carefully before submitting it.",
  },
  {
    id: 2,
    question:
      "2. Is professional editing required for a thesis or dissertation?",
    answer:
      "Professional editing is not necessary at times, but it is advisable to enhance clarity, structure, language, formatting, and overall academic presentation.",
  },
  {
    id: 3,
    question: "3. How to improve the language and clarity of a thesis?",
    answer:
      "To enhance language in a thesis, it is necessary to revise sentences to make them clear, simplify complicated words, make it logical, eliminate repetition, use an academic tone, and proofread it carefully.",
  },
  {
    id: 4,
    question:
      "4. What are the common mistakes to fix before thesis submission?",
    answer:
      "Common errors may include grammar errors, poor arguments, formatting problems, citation errors, incomplete references, poor structure, typographical errors, and lack of coherence in the text.",
  },
  {
    id: 5,
    question: "5. Where to get professional thesis editing services?",
    answer:
      "Professional thesis editing services can be accessed through university centers for writing, academic editing companies, individual scholarly editors, and research support organizations online.",
  },
];

export default function TestimonialsAndFAQ() {
  // Testimonial Pagination State (showing 2 items per slide page)
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // FAQ Accordion State (stores active item ID, default open is ID 1)
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 text-slate-800 font-sans">
      {/* ======================================= */}
      {/* SECTION 1: TESTIMONIALS */}
      {/* ======================================= */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
          Testimonials
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          Learn how Pubrica’s Thesis Editing Services have helped Master’s and
          Ph.D. scholars refine their research, enhance clarity, and meet
          academic standards. Our expert editors improve readability, maintain
          your academic voice, and strengthen the overall impact of your thesis,
          making it submission-ready and academically sound. Here is what our
          clients say:
        </p>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {testimonials
            .slice(activeSlide * 2, activeSlide * 2 + 2)
            .map((item) => (
              <div
                key={item.id}
                className="border border-slate-300 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Top Gray Container (Quote + Book Cover Placeholder) */}
                <div className="bg-[#CCCCCC] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 min-h-[160px]">
                  {/* Mock Journal Cover Image */}
                  <div className="w-24 h-28 bg-[#00A896] text-white flex-shrink-0 rounded flex flex-col justify-between p-2 shadow-sm text-center border border-white">
                    <span className="text-[9px] font-bold tracking-tighter uppercase leading-tight">
                      International Journal of
                    </span>
                    <span className="text-[11px] font-black uppercase leading-tight">
                      Surgery Case Reports
                    </span>
                    <div className="w-full h-1 bg-white/40 mt-auto"></div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Bar (Author Info + Flag) */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-slate-200">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-wide">
                      — {item.author}
                    </h4>
                    <p className="text-xs italic text-slate-600">
                      {item.title}
                    </p>
                  </div>

                  {/* Country Flag Badge */}
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                    <img
                      src={item.flagUrl}
                      alt={item.country}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setActiveSlide(0)}
            className={`w-3 h-3 border border-[#003B46] ${
              activeSlide === 0 ? "bg-[#003B46]" : "bg-transparent"
            }`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 border border-[#003B46] ${
              activeSlide === 1 ? "bg-[#003B46]" : "bg-transparent"
            }`}
            aria-label="Slide 2"
          />
        </div>
      </section>

      {/* ======================================= */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
      {/* ======================================= */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-6">
          Frequently Asked Questions
        </h2>

        {/* Accordion Container */}
        <div className="border border-slate-300 rounded-lg overflow-hidden bg-white divide-y divide-slate-200">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                {/* Header / Question Toggle */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:px-6 sm:py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className="text-slate-800 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 font-bold" />
                    ) : (
                      <Plus className="w-4 h-4 font-bold" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content / Answer */}
                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white border-t border-slate-100">
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

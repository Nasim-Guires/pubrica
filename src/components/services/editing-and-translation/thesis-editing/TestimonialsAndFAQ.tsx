"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const IMG_BASE = "/images/editing-and-translation/thesis-editing/";

// --- Testimonial Data ---
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  country: string;
  flagUrl: string;
  journalCover: string;
  journalAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica’s editors transformed my Ph.D. thesis into a well-polished document that met all my university’s requirements. Their attention to detail and academic precision gave me the confidence to submit without hesitation.",
    author: "DR. ANANYA MEHTA",
    title: "Ph.D. Scholar, India",
    country: "India",
    flagUrl: `${IMG_BASE}flag.png`,
    journalCover: `${IMG_BASE}international-journal-case-reports-surgery.png`,
    journalAlt: "International Journal Case Reports Surgery cover",
  },
  {
    id: 2,
    quote:
      "The editors at Pubrica helped me improve the structure and clarity of my thesis. Their professional support made a huge difference in the outcome and saved me valuable time before submission.",
    author: "SARAH JOHNSON",
    title: "Master’s Scholar, UK",
    country: "United Kingdom",
    flagUrl: `${IMG_BASE}uk-flag-.png`,
    journalCover: `${IMG_BASE}jama-oncology-journal-2.png`,
    journalAlt: "JAMA Oncology journal cover",
  },
  {
    id: 3,
    quote:
      "The thorough proofreading and formatting gave my dissertation a professional finish. I received excellent feedback from my supervisor.",
    author: "CARLOS RODRÍGUEZ",
    title: "Master’s Student, Spain",
    country: "Spain",
    flagUrl: `${IMG_BASE}spain-.png`,
    journalCover: `${IMG_BASE}international-journal-of-surgery-.png`,
    journalAlt: "International Journal of Surgery cover",
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // FAQ Accordion State (stores active item ID, default open is ID 1)
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const mobileItem = testimonials[activeIndex];
  const desktopItems = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

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
        <div className="grid grid-cols-1 gap-6 mb-6 md:hidden">
          <TestimonialCard item={mobileItem} />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 mb-6">
          {desktopItems.map((item) => (
            <TestimonialCard key={`${activeIndex}-${item.id}`} item={item} />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 border border-[#003B46] ${
                activeIndex === index ? "bg-[#003B46]" : "bg-transparent"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="border border-slate-300 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col justify-between">
      <div className="bg-[#CCCCCC] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 min-h-[160px]">
        <div className="relative w-24 h-28 shrink-0 rounded overflow-hidden shadow-sm border border-white bg-white">
          <Image
            src={item.journalCover}
            alt={item.journalAlt}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="p-4 bg-white flex items-center justify-between border-t border-slate-200">
        <div>
          <h4 className="text-sm font-bold text-slate-900 tracking-wide">
            — {item.author}
          </h4>
          <p className="text-xs italic text-slate-600">{item.title}</p>
        </div>

        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
          <Image
            src={item.flagUrl}
            alt={item.country}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- Testimonials Data ---
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  journalCover: string;
  countryFlag: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "The Pubrica Translation with Editing Service exceeded my expectations. My manuscript was translated into English flawlessly, preserving the exact meaning and nuances of my original work. The editing made it publication-ready.",
    author: "DR. ANANYA MEHTA",
    role: "Biomedical Researcher, India",
    journalCover:
      "https://placehold.co/120x150/2b3a4a/ffffff?text=Journal+Cover",
    countryFlag: "🇮🇳",
  },
  {
    id: "2",
    quote:
      "The team at Pubrica provided precise translation along with thorough editing. It truly elevated the quality of my manuscript and helped me communicate my findings effectively to an international audience.",
    author: "PROF. LI WEI",
    role: "Materials Science Professor, China",
    journalCover:
      "https://placehold.co/120x150/d32f2f/ffffff?text=THE+LANCET+Oncology",
    countryFlag: "🇨🇳",
  },
  {
    id: "3",
    quote:
      "I was struggling to express complex findings in English. Pubrica not only translated my thesis but also polished the style to meet academic standards. The turnaround time and quality were outstanding.",
    author: "MS. ANANYA MEHTA",
    role: "Ph.D. Scholar in Environmental Science, India",
    journalCover:
      "https://placehold.co/120x150/111827/ffffff?text=frontiers+In+Neuroscience",
    countryFlag: "🇮🇳",
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
    question:
      "How to translate a research paper into English for journal submission?",
    answer:
      "Translate a research paper using professional academic translation, ensuring subject accuracy, technical terms, appropriate formatting according to journal requirements, and post-editing with precision.",
  },
  {
    id: 2,
    question:
      "Where to find academic translation services for research manuscripts?",
    answer:
      "Academic translation services are available from professional translation service providers, research editing services, academic translators, and research assistance services at the universities.",
  },
  {
    id: 3,
    question:
      "Can translated research papers be edited for journal publication?",
    answer:
      "Yes, the translated research papers can be edited professionally to ensure the accuracy of the language, clarity, consistency of the words, formatting, etc.",
  },
  {
    id: 4,
    question:
      "Why is professional editing important after translating a research paper?",
    answer:
      "Professional editing of the translated papers ensures that the papers are grammatically correct, contextually accurate, terminologically correct, easy to read, and strictly accurate in terms of journal requirements.",
  },
];

export default function TestimonialsAndFAQ() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ======================================= */}
        {/* SECTION 1: TESTIMONIALS                 */}
        {/* ======================================= */}
        <section className="space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
              Testimonials
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
              Learn how Pubrica&apos;s Translation with Editing Services have
              helped researchers and authors accurately translate their work,
              enhance clarity, and meet publication standards. Our expert
              translators and editors ensure linguistic precision, preserve the
              original meaning, and refine the text for fluency and readability,
              making your manuscript publication-ready and professionally
              polished. Here is what our clients say:
            </p>
          </div>

          {/* Testimonial Cards Carousel View */}
          <div className="relative overflow-hidden py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {testimonialsData.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-lg border border-slate-300 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                    idx === activeSlide ? "ring-2 ring-[#003B46]" : "opacity-85"
                  }`}
                >
                  {/* Top Light Grey Quote Box with Image */}
                  <div className="bg-[#e2e8f0]/60 p-5 flex items-start space-x-4 border-b border-slate-200 min-h-[180px]">
                    <img
                      src={testimonial.journalCover}
                      alt="Journal Cover"
                      className="w-20 h-24 object-cover border border-slate-300 shadow-xs shrink-0 rounded-sm"
                    />
                    <p className="text-xs text-slate-800 leading-relaxed font-serif italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Bottom Author Box */}
                  <div className="p-4 flex justify-between items-end bg-white">
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm tracking-wide">
                        — {testimonial.author}
                      </p>
                      <p className="text-[11px] text-slate-500 italic">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Flag Icon / Badge */}
                    <span className="text-xl leading-none" title="Country Flag">
                      {testimonial.countryFlag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                type="button"
                onClick={() => setActiveSlide(0)}
                className={`w-3 h-3 border border-slate-800 rounded-xs transition-colors ${
                  activeSlide === 0 ? "bg-[#003B46]" : "bg-transparent"
                }`}
                aria-label="Slide 1"
              />
              <button
                type="button"
                onClick={() => setActiveSlide(1)}
                className={`w-3 h-3 border border-slate-800 rounded-xs transition-colors ${
                  activeSlide === 1 ? "bg-[#003B46]" : "bg-transparent"
                }`}
                aria-label="Slide 2"
              />
            </div>
          </div>
        </section>

        {/* ======================================= */}
        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS   */}
        {/* ======================================= */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Frequently Asked Questions
          </h2>

          {/* Accordion List */}
          <div className="border border-slate-200 rounded-sm bg-white divide-y divide-slate-200 shadow-xs">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="transition-colors">
                  {/* Question Header */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-center space-x-4 focus:outline-hidden hover:bg-slate-50"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.id}. {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-700">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer Box */}
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

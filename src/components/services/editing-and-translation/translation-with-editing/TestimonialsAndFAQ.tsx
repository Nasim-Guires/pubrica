"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const IMG_BASE =
  "/images/editing-and-translation/translation-with-editing/";

// --- Testimonials Data ---
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  journalCover: string;
  journalAlt: string;
  flagSrc: string;
  flagAlt: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "The Pubrica Translation with Editing Service exceeded my expectations. My manuscript was translated into English flawlessly, preserving the exact meaning and nuances of my original work. The editing made it publication-ready.",
    author: "DR. ANANYA MEHTA",
    role: "Biomedical Researcher, India",
    journalCover: `${IMG_BASE}nature-biotechnology.png`,
    journalAlt: "Nature Biotechnology journal cover",
    flagSrc: `${IMG_BASE}india.png`,
    flagAlt: "India flag",
  },
  {
    id: "2",
    quote:
      "The team at Pubrica provided precise translation along with thorough editing. It truly elevated the quality of my manuscript and helped me communicate my findings effectively to an international audience.",
    author: "PROF. LI WEI",
    role: "Materials Science Professor, China",
    journalCover: `${IMG_BASE}the-lancet-of-oncolgy-.png`,
    journalAlt: "The Lancet Oncology journal cover",
    flagSrc: `${IMG_BASE}china.png`,
    flagAlt: "China flag",
  },
  {
    id: "3",
    quote:
      "I was struggling to express complex findings in English. Pubrica not only translated my thesis but also polished the style to meet academic standards. The turnaround time and quality were outstanding.",
    author: "MS. ANANYA MEHTA",
    role: "Ph.D. Scholar in Environmental Science, India",
    journalCover: `${IMG_BASE}Frontiers-of-neuro-science-.png`,
    journalAlt: "Frontiers in Neuroscience journal cover",
    flagSrc: `${IMG_BASE}india.png`,
    flagAlt: "India flag",
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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white rounded-lg border border-slate-300 shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="bg-[#e2e8f0]/60 p-5 flex items-start space-x-4 border-b border-slate-200 min-h-[180px]">
        <div className="relative w-20 h-24 shrink-0 border border-slate-300 shadow-xs rounded-sm overflow-hidden bg-white">
          <Image
            src={item.journalCover}
            alt={item.journalAlt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <p className="text-xs text-slate-800 leading-relaxed font-serif italic">
          &quot;{item.quote}&quot;
        </p>
      </div>

      <div className="p-4 flex justify-between items-end bg-white">
        <div className="space-y-0.5">
          <p className="font-bold text-slate-900 text-xs sm:text-sm tracking-wide">
            — {item.author}
          </p>
          <p className="text-[11px] text-slate-500 italic">{item.role}</p>
        </div>

        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
          <Image
            src={item.flagSrc}
            alt={item.flagAlt}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsAndFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const mobileItem = testimonialsData[activeIndex];
  const desktopItems = [
    testimonialsData[activeIndex],
    testimonialsData[(activeIndex + 1) % testimonialsData.length],
  ];

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

          <div className="relative py-2">
            <div className="grid grid-cols-1 gap-6 items-stretch md:hidden">
              <TestimonialCard item={mobileItem} />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-6 items-stretch">
              {desktopItems.map((item) => (
                <TestimonialCard
                  key={`${activeIndex}-${item.id}`}
                  item={item}
                />
              ))}
            </div>

            <div className="flex justify-center items-center space-x-2 mt-8">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 border border-slate-800 rounded-xs transition-colors ${
                    activeIndex === index ? "bg-[#003B46]" : "bg-transparent"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
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

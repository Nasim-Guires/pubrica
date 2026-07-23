"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- Data Types ---
interface Testimonial {
  id: number;
  quote: string;
  journalName: string;
  authorName: string;
  authorRole: string;
  coverImageSrc: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// --- Component Data ---
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica's plagiarism check gave me the confidence to submit my manuscript to the Journal of Clinical Oncology . The detailed similarity report and expert guidance helped me address all concerns before peer review. Highly recommended for rigorous manuscript preparation.",
    journalName: "Journal of Clinical Oncology",
    authorName: "DR. ANJALI MEHTA,",
    authorRole: "Oncology Researcher",
    coverImageSrc: "/images/testimonials/jco-cover.jpg",
  },
  {
    id: 2,
    quote:
      "Thanks to Pubrica's plagiarism screening, my systematic review was accepted by The Lancet Respiratory Medicine without any originality issues. Their thorough manual review alongside software detection ensured my work met the highest ethical standards.",
    journalName: "The Lancet Respiratory Medicine",
    authorName: "DR. RAJESH KUMAR,",
    authorRole: "Pulmonologist",
    coverImageSrc: "/images/testimonials/lancet-cover.jpg",
  },
  {
    id: 3,
    quote:
      "Pubrica's plagiarism check service helped me prepare a case report for submission to the Journal of Medical Case Reports . The expert editorial team's feedback ensured my manuscript was original and compliant with ICMJE guidelines.",
    journalName: "Journal of Medical Case Reports",
    authorName: "DR. KARAN PATEL,",
    authorRole: "Clinical Researcher",
    coverImageSrc: "/images/testimonials/bmc-cover.jpg",
  },
];

const faqData: FaqItem[] = [
  {
    id: 1,
    question:
      "1. What is the acceptable plagiarism percentage for journal publications?",
    answer:
      "Most journals permit low similarity rates, usually below 10-20%, depending on their journal policies. However, the limits may differ, and it is important to adhere to the requirements of originality.",
  },
  {
    id: 2,
    question:
      "2. Which plagiarism checking tools can be used for academic manuscripts?",
    answer:
      "The most common plagiarism detection tools used by most institutions and journals include Turnitin, iThenticate, Grammarly Premium, Copyscape, and Plagscan.",
  },
  {
    id: 3,
    question:
      "3. How can I check plagiarism in my research paper before journal submission?",
    answer:
      "You may use plagiarism detection tools like Turnitin or iThenticate, and then revise the similar content, and finally submit the paper to the journal.",
  },
  {
    id: 4,
    question:
      "4. What is included in a plagiarism report for academic manuscripts?",
    answer:
      "The elements included in a plagiarism report are a similarity percentage, highlighted matched text, source comparisons, similarity breakdown, and a link to the identified references.",
  },
];

export default function TestimonialsAndFaq() {
  // Testimonial Pagination State (0 = Page 1: Cards 1 & 2, 1 = Page 2: Cards 2 & 3)
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Accordion Open State (Defaults to Q1 open)
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full font-sans bg-white text-slate-800">
      {/* SECTION 1: Testimonials */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
          Testimonials
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 max-w-5xl">
          Learn how Pubrica&apos;s plagiarism check and machine-authored
          document analysis service has helped researchers ensure manuscript
          originality, comply with ethical guidelines, and successfully publish.
          Here is what our clients say:
        </p>

        {/* Testimonials Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {testimonialsData.slice(activeSlide, activeSlide + 2).map((item) => (
            <div
              key={item.id}
              className="bg-[#1f4037] text-white rounded-sm p-6 md:p-8 flex flex-col justify-between shadow-md min-h-[260px] transition-all duration-300"
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                {/* Quote Content */}
                <div className="col-span-8 space-y-3">
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed italic font-light">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Journal Cover Image */}
                <div className="col-span-4 flex justify-end">
                  <div className="relative w-28 h-36 bg-white rounded overflow-hidden shadow-sm">
                    <Image
                      src={item.coverImageSrc}
                      alt={item.journalName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-4 pt-2 border-t border-emerald-800/40">
                <h4 className="text-xs md:text-sm font-bold tracking-wider uppercase text-white">
                  {item.authorName}
                </h4>
                <p className="text-xs italic text-emerald-200">
                  {item.authorRole}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Pagination Indicators */}
        <div className="flex justify-center items-center space-x-2 pt-2">
          <button
            onClick={() => setActiveSlide(0)}
            aria-label="Testimonial Page 1"
            className={`w-3 h-3 transition-colors ${
              activeSlide === 0
                ? "bg-[#0c373b]"
                : "border border-[#0c373b] bg-white"
            }`}
          />
          <button
            onClick={() => setActiveSlide(1)}
            aria-label="Testimonial Page 2"
            className={`w-3 h-3 transition-colors ${
              activeSlide === 1
                ? "bg-[#0c373b]"
                : "border border-[#0c373b] bg-white"
            }`}
          />
        </div>
      </section>

      {/* SECTION 2: Frequently Asked Questions */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-8">
          Frequently Asked Questions – Plagiarism Check Service
        </h2>

        {/* Accordion List Container */}
        <div className="border border-slate-200 rounded-sm overflow-hidden divide-y divide-slate-200 shadow-sm">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div key={faq.id} className="bg-white">
                {/* Question Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold text-slate-700 shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
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

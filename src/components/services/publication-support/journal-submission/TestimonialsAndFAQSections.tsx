"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonFAQ from "@/components/common/FAQ";

// Common path prefix for journal images
const COMMON_IMAGE_PATH = "/images/publication-support/journal-submission/";

// Testimonials Data
const testimonials = [
  {
    quote:
      "I had my manuscript accepted with no technical revisions, and the team at Pubrica worked everything from formatting to proper keyword selection, for submission to PLOS ONE.",
    name: "DR. ARVIND NAIR,",
    role: "Clinical Pharmacologist",
    journalImage: `${COMMON_IMAGE_PATH}scropt-2.jpg`,
  },
  {
    quote:
      "I was working on a case series for The American Journal of Case Reports, and I found Pubrica’s submission team to help perfectly align it with CARE guidelines. The process was a great experience, and the editorial office raised no technical issues with the submission.",
    name: "DR. LEENA GEORGE,",
    role: "Consultant Radiologist",
    journalImage: `${COMMON_IMAGE_PATH}book-01.jpg`,
  },
  {
    quote:
      "Pubrica's focus on metadata entry and file formatting enabled me to submit my work to The Lancet Oncology. They also prepared a quality cover letter based on the journal's scope.",
    name: "DR. SANDEEP KULKARNI,",
    role: "Oncologist, Surgeon, and Researcher",
    journalImage: `${COMMON_IMAGE_PATH}book-01.jpg`,
  },
];

// FAQ Data
const faqs = [
  {
    id: 1,
    question:
      "1. What is the process for submitting a research paper to a journal?",
    answer:
      "The steps involved in the publishing process are: selecting a proper journal, preparing the manuscript according to the journal’s guidelines, preparing a cover letter, preparing other relevant documents, and submitting the manuscript online.",
  },
  {
    id: 2,
    question: "2. How to submit a manuscript to an academic journal?",
    answer:
      "The submission process involves selecting the right journal, preparing the manuscript in the right format, preparing the documents, writing the cover letter, and finally submitting the manuscript through the journal’s portal.",
  },
  {
    id: 3,
    question:
      "3. What documents are required for journal manuscript submission?",
    answer:
      "The documents include a manuscript file, a cover letter, a title page, figures, tables, ethical clearance (when applicable), a conflict of interest statement, and any other relevant supplementary material as may be required by the journal.",
  },
  {
    id: 4,
    question:
      "4. What should I check before submitting a research paper to a journal?",
    answer:
      "Prior to submission, it is advisable to check for journal guidelines, formatting, word count, references, ethical clearances, author information, figure quality, plagiarism, and overall clarity.",
  },
  {
    id: 5,
    question:
      "5. How do I track the status of my manuscript after journal submission?",
    answer:
      'The status of the manuscript can be easily tracked through the online submission system of the journal, where the status of the manuscript is updated with messages such as “under review,” “revision required,” “decision made,” etc.',
  },
];

export default function TestimonialsAndFAQSections() {
  // Carousel State (Shows 2 items per view on desktop)
  const [activeSlide, setActiveSlide] = useState(0);

  // FAQ accordion state (Item 1 open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  // Logic to show 2 items starting from current index
  const visibleTestimonials = [
    testimonials[activeSlide],
    testimonials[(activeSlide + 1) % testimonials.length],
  ];

  // Number of pagination dots (based on total items)
  const totalDots = testimonials.length;

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: TESTIMONIALS                    */}
      {/* ========================================== */}
      <section className="bg-[#f0f2f2] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-8">
            Testimonials
          </h2>

          {/* Testimonial Cards (2 Cards visible on medium screens and up) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-300 ease-in-out">
            {visibleTestimonials.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="bg-[#1c3e38] text-white p-6 sm:p-8 rounded-sm shadow-md flex flex-col justify-between min-h-[220px]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Quote and Author */}
                  <div className="sm:col-span-8 space-y-4">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-100 italic">
                      "{item.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider text-white">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-gray-300 italic">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Journal Cover Image */}
                  <div className="sm:col-span-4 flex justify-center sm:justify-end">
                    <div className="relative w-28 h-36 rounded-sm overflow-hidden shadow-sm border border-white/20">
                      <Image
                        src={item.journalImage}
                        alt="Journal Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === index
                  ? "w-6 bg-[#1c3e38]"
                  : "w-2.5 bg-gray-400 hover:bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS      */}
      {/* ========================================== */}
      <CommonFAQ
        title="Frequently Asked Questions – Journal Submission Services"
        faqs={faqs}
      />
    </div>
  );
}
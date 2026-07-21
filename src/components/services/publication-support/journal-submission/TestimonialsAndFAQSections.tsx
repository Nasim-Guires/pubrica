"use client";

import React, { useState } from "react";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    quote:
      "I had my manuscript accepted with no technical revisions, and the team at Pubrica worked everything from formatting to proper keyword selection, for submission to PLOS ONE.",
    name: "DR. ARVIND NAIR,",
    role: "Clinical Pharmacologist",
    journalImage: "/images/testimonials/clinical-problem-solving.jpg",
  },
  {
    quote:
      "I was working on a case series for The American Journal of Case Reports, and I found Pubrica’s submission team to help perfectly align it with CARE guidelines. The process was a great experience, and the editorial office raised no technical issues with the submission.",
    name: "DR. LEENA GEORGE,",
    role: "Consultant Radiologist",
    journalImage: "/images/testimonials/clinical-practice.jpg",
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
      "Submitting to an academic journal involves creating an account on the journal’s online submission portal (such as Editorial Manager or ScholarOne), uploading formatted manuscript files, entering co-author and metadata details, and attaching required disclosure statements.",
  },
  {
    id: 3,
    question:
      "3. What documents are required for journal manuscript submission?",
    answer:
      "Typically required documents include the main manuscript file, cover letter, title page with author affiliations, high-resolution figures, tables, conflict of interest forms, and ethical approval certificates.",
  },
  {
    id: 4,
    question:
      "4. What should I check before submitting a research paper to a journal?",
    answer:
      "Before submission, verify that your manuscript strictly follows the target journal’s author guidelines regarding word count, reference style, formatting, figure resolution, and ethical statements.",
  },
  {
    id: 5,
    question:
      "5. How do I track the status of my manuscript after journal submission?",
    answer:
      'You can track your manuscript by logging into the journal submission portal where the status will update periodically (e.g., "Under Review", "Awaiting Decision"). Our team also actively monitors this status on your behalf.',
  },
];

export default function TestimonialsAndFAQSections() {
  // FAQ accordion state (Item 1 open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

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

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1c3e38] text-white p-6 sm:p-8 rounded-sm shadow-md flex flex-col justify-between"
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

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1c3e38] cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS      */}
      {/* ========================================== */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-8">
            Frequently Asked Questions – Journal Submission Services
          </h2>

          {/* Accordion Container */}
          <div className="border border-gray-200 divide-y divide-gray-200 rounded-sm">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div key={faq.id} className="bg-white">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#0c3547] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-base text-black shrink-0 font-semibold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

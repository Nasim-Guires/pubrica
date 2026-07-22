"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question:
      "1. What are the formatting requirements for academic journal manuscripts?",
  },
  {
    id: 2,
    question: "2. Which citation and reference styles do journals require?",
    answer:
      "The most common referencing requirements for journals include APA, MLA, Chicago, Harvard, and Vancouver referencing, depending on the journal’s author instructions.",
  },
  {
    id: 3,
    question:
      "3. What is the difference between APA, Vancouver, and Harvard reference styles?",
  },
  {
    id: 4,
    question:
      "4. What file formats do journals require for manuscript submission?",
  },
  {
    id: 5,
    question:
      "5. What is the correct format for tables and figures in research papers?",
  },
  {
    id: 6,
    question:
      "6. Why do journals reject or return manuscripts for formatting corrections?",
  },
];

export default function TestimonialsAndFAQ() {
  // Toggle FAQ accordion state (defaults to item 2 expanded as shown in screenshot)
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-12 space-y-20 antialiased">
      {/* ============================================================ */}
      {/* TESTIMONIALS SECTION                                         */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
          Testimonials
        </h2>
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mb-8">
          Learn how Pubrica’s{" "}
          <a href="#" className="text-[#3b82f6] hover:underline">
            manuscript formatting service
          </a>{" "}
          has helped researchers meet strict publisher standards and complete a
          smooth submission. Here is what our clients say:
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Dr. M. Rajkumar */}
          <div className="bg-[#1e3e35] text-white p-6 md:p-8 rounded-md flex flex-col justify-between shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              <div className="sm:col-span-8 space-y-3">
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed italic">
                  &quot;Pubrica&apos;s formatting team demonstrated a deep
                  understanding of journal-specific structure and ethical
                  compliance. They reformatted our entire manuscript and
                  supplementary files exactly as per the{" "}
                  <strong className="font-semibold not-italic text-white">
                    International Journal of Cardiology
                  </strong>{" "}
                  requirements.&quot;
                </p>
              </div>

              {/* Journal Cover Image */}
              <div className="sm:col-span-4 relative h-32 w-full rounded overflow-hidden bg-white shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop" // Replace with exact journal cover asset
                  alt="International Journal of Cardiology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="mt-6 pt-2">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white">
                DR. M.RAJKUMAR,
              </h4>
              <p className="text-[11px] text-gray-300 italic">
                Consultant Cardiologist
              </p>
            </div>
          </div>

          {/* Card 2: Dr. Kavitha Narayanan */}
          <div className="bg-[#1e3e35] text-white p-6 md:p-8 rounded-md flex flex-col justify-between shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              <div className="sm:col-span-8 space-y-3">
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed italic">
                  &quot;I struggled with the technical formatting and figure
                  resolution issues required by{" "}
                  <strong className="font-semibold not-italic text-white">
                    PLOS ONE
                  </strong>
                  . Pubrica resolved all layout, table, and referencing
                  inconsistencies quickly and professionally. Their service
                  exceeded expectations.&quot;
                </p>
              </div>

              {/* Journal Cover Image */}
              <div className="sm:col-span-4 relative h-32 w-full rounded overflow-hidden bg-black shadow-xs flex items-center justify-center p-2">
                <div className="text-center text-white space-y-1">
                  <span className="text-xs font-bold tracking-widest block border-b border-gray-600 pb-1">
                    PLOS ONE
                  </span>
                  <span className="text-[9px] text-yellow-400 block pt-1">
                    All good science deserves to be published.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white">
                DR. KAVITHA NARAYANAN,
              </h4>
              <p className="text-[11px] text-gray-300 italic">
                PhD Scholar in Public Health
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            type="button"
            aria-label="Slide 1"
            className="w-3 h-3 bg-[#0c3830] rounded-xs cursor-pointer"
          />
          <button
            type="button"
            aria-label="Slide 2"
            className="w-3 h-3 border border-[#0c3830] bg-transparent rounded-xs cursor-pointer"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION                                                  */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] text-center mb-10">
          Frequently Asked Questions – Manuscript Formatting Service
        </h2>

        {/* Accordion Container */}
        <div className="bg-white border border-gray-200 rounded-md divide-y divide-gray-200 shadow-2xs">
          {faqData.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-xs md:text-sm text-gray-900 hover:bg-gray-50/80 transition-colors cursor-pointer"
                >
                  <span
                    className={isOpen ? "border-b-2 border-black pb-0.5" : ""}
                  >
                    {item.question}
                  </span>
                  <span className="text-base text-gray-700 ml-4 font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed bg-white">
                    {item.answer || (
                      <p>
                        Our experts review your target journal guidelines to
                        format structure, citation style, references, tables,
                        and figures precisely to meet publisher standards.
                      </p>
                    )}
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

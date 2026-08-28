"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonFAQ from "@/components/common/FAQ";
import Link from "next/link";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalImage: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica's formatting team demonstrated a deep understanding of journal-specific structure and ethical compliance. They reformatted our entire manuscript and supplementary files exactly as per the International Journal of Cardiology requirements.",
    author: "DR. M.RAJKUMAR,",
    role: "Consultant Cardiologist",
    journal: "International Journal of Cardiology",
    journalImage:
      "/images/publication-support/journal-manuscript-formatting-services/international-journal-of-cardiology-recruitment.jpg",
  },
  {
    id: 2,
    quote:
      "I struggled with the technical formatting and figure resolution issues required by PLOS ONE. Pubrica resolved all layout, table, and referencing inconsistencies quickly and professionally. Their service exceeded expectations.",
    author: "DR. KAVITHA NARAYANAN,",
    role: "PhD Scholar in Public Health",
    journal: "PLOS ONE",
    journalImage:
      "/images/publication-support/journal-manuscript-formatting-services/plos-one-.jpg",
  },
  {
    id: 3,
    quote:
      "The formatting support from Pubrica was instrumental in aligning our manuscript with BMC Cancer's strict submission guidelines. Their attention to detail in referencing and figure placement saved us valuable time during the submission phase.",
    author: "DR. SHALINI VERMA,",
    role: "Oncology Research Fellow",
    journal: "BMC Cancer",
    journalImage:
      "/images/publication-support/journal-manuscript-formatting-services/Bmc-cancer.jpg",
  },
];

const faqData = [
  {
    question: "1. What are the formatting requirements for academic journal manuscripts?",
    answer:
      "The formatting requirements usually include sections, word count, referencing, font requirements, figure requirements, and reference requirements, as well as the journal’s author instructions.",
  },
  {
    question: "2. Which citation and reference styles do journals require?",
    answer:
      "The most common referencing requirements for journals include APA, MLA, Chicago, Harvard, and Vancouver referencing, depending on the journal’s author instructions.",
  },
  {
    question: "3. What is the difference between APA, Vancouver, and Harvard reference styles?",
    answer:
      "The APA referencing style uses the author-date referencing system, Vancouver uses the numbered referencing system, and the Harvard referencing style uses the author-date referencing system.",
  },
  {
    question: "4. What file formats do journals require for manuscript submission?",
    answer:
      "Most journals require authors to submit the manuscript in Word format, i.e., .doc or .docx, in addition to separate files for the figures, tables, and supplementary materials as per the journal’s guidelines.",
  },
  {
    question: "5. What is the correct format for tables and figures in research papers?",
    answer:
      "Tables and figures need to be clearly labeled, numbered consecutively, have titles, meet the journal’s requirements, be of high resolution, and be cited correctly in the manuscript.",
  },
  {
    question: "6. Why do journals reject or return manuscripts for formatting corrections?",
    answer:
      "Journals may reject manuscripts due to poor formatting, failure to comply with guidelines, incorrect citations, missing information, poor quality figures, or failure to follow instructions for submission.",
  },
];

export default function TestimonialsAndFAQ() {
  const [activeSlide, setActiveSlide] = useState(0);

  const mobileItem = testimonialsData[activeSlide];
  const desktopItems = [
    testimonialsData[activeSlide],
    testimonialsData[(activeSlide + 1) % testimonialsData.length],
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-6 space-y-20 antialiased">
      {/* TESTIMONIALS SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
          Testimonials
        </h2>
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mb-8">
          Learn how Pubrica’s{" "}
          <Link
            href="/insights/citation-styles-apa-ama-mla-vancouver-chicago"
            className="text-[#3b82f6] hover:underline"
          >
            manuscript formatting service
          </Link>{" "}
          has helped researchers meet strict publisher standards and complete a
          smooth submission. Here is what our clients say:
        </p>

        <div className="grid grid-cols-1 gap-6 items-stretch mb-6 md:hidden">
          <JournalTestimonialCard item={mobileItem} />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 items-stretch mb-6">
          {desktopItems.map((item) => (
            <JournalTestimonialCard
              key={`${activeSlide}-${item.id}`}
              item={item}
            />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-2 mt-6">
          {testimonialsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-3 h-3 border border-[#1e3e35] ${activeSlide === index ? "bg-white" : "bg-[#1e3e35]"
                }`}
            />
          ))}
        </div>
      </section>

      {/* REPLACED FAQ SECTION */}
      <CommonFAQ
        title="Frequently Asked Questions – Manuscript Formatting Service"
        faqs={faqData}
      />
    </div>
  );
}

function JournalTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#1e3e35] text-white p-6 md:p-8 rounded-md flex flex-col justify-between shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
        <div className="sm:col-span-8 space-y-3">
          <p className="text-xs md:text-sm text-gray-100 leading-relaxed italic">
            &quot;{item.quote}&quot;
          </p>
        </div>
        <div className="sm:col-span-4 relative h-32 w-full rounded overflow-hidden bg-white shadow-xs">
          <Image
            src={item.journalImage}
            alt={item.journal}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
      </div>
      <div className="mt-6 pt-2">
        <h4 className="text-xs font-bold tracking-wider uppercase text-white">
          {item.author}
        </h4>
        <p className="text-[11px] text-gray-300 italic">{item.role}</p>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonFAQ from "@/components/common/FAQ";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalImage: string;
}
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Pubrica's formatting team demonstrated a deep understanding of journal-specific structure and ethical compliance. They reformatted our entire manuscript and supplementary files exactly as per the International Journal of Cardiology requirements.",
    author: "DR. M.RAJKUMAR",
    role: "Consultant Cardiologist",
    journalName: "International Journal of Cardiology",
    image:
      "/images/publication-support/journal-manuscript-formatting-services/international-journal-of-cardiology-recruitment.jpg",
  },
  {
    id: 2,
    quote:
      "I struggled with the technical formatting and figure resolution issues required by PLOS ONE. Pubrica resolved all layout, table, and referencing inconsistencies quickly and professionally. Their service exceeded expectations.",
    author: "DR. KAVITHA NARAYANAN",
    role: "PhD Scholar in Public Health",
    journalName: "PLOS ONE",
    image:
      "/images/publication-support/journal-manuscript-formatting-services/plos-one-.jpg",
  },
  {
    id: 3,
    quote:
      "The formatting support from Pubrica was instrumental in aligning our manuscript with BMC Cancer's strict submission guidelines. Their attention to detail in referencing and figure placement saved us valuable time during the submission phase.",
    author: "DR. SHALINI VERMA",
    role: "Oncology Research Fellow",
    journalName: "BMC Cancer",
    image:
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


  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-6 space-y-20 antialiased">
      {/* TESTIMONIALS SECTION */}
      <MovingTestimonials data={testimonialsData} />

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
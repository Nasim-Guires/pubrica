"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ThumbsUp, Minus } from "lucide-react";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import CommonFAQ from "@/components/common/FAQ";

// ==========================================
// 1. TESTIMONIALS DATA
// ==========================================
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  journalImage: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    image:
      "/images/editing-and-translation/proofreading/testimonials-1.webp",
    quote:
      "Pubrica’s proofreading service ensured my manuscript was completely error-free before submission. The reviewers appreciated the clarity and professionalism.",
    author: "DR. MARIA SCHNEIDER",
    role: "Academic Researcher, Germany",
  },
  {
    id: 2,
    image:
      "/images/editing-and-translation/proofreading/testimonials-2.webp",
    quote:
      "The proofreading team corrected subtle grammar and formatting issues I had missed. My thesis looked polished and professional.",
    author: "ANANYA RAO",
    role: "PhD Scholar, India",
  },
  {
    id: 3,
    image:
      "/images/editing-and-translation/proofreading/testimonials-1.webp",
    quote:
      "Thanks to Pubrica’s editorial support, my research paper was ready for journal submission without any formatting or citation issues. The process was smooth, and I felt confident submitting it.",
    author: "DR. LIAM O’CONNOR",
    role: "Postdoctoral Researcher, Canada",
  },
];

// ==========================================
// 2. FAQ DATA
// ==========================================
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs = [
  {
    question:
      "What does proofreading include for academic and research papers?",
    answer:
      "The process of proofreading involves correcting grammar, spelling, punctuation, and formatting errors, typos, reference list inconsistencies, and minor linguistic errors before the final academic submission.",
  },
  {
    question: "What is the difference between proofreading and editing?",
    answer:
      "Editing involves improving the structure, clarity, content, and flow of writing, while proofreading involves improving grammar, spelling, punctuation, formatting, and minor linguistic errors before the final manuscript submission.",
  },
  {
    question:
      "Why is proofreading important before submitting a manuscript to a journal?",
    answer:
      "Proofreading ensures grammar, format, reference, readability, and presentation, reducing the risk of rejection and improving the quality of the manuscript prior to journal submission.",
  },
  {
    question:
      "How can I improve the grammar and clarity of my research paper before submission?",
    answer:
      "Grammar and language may be improved by revising the text, keeping the language simple, logical, and coherent, using active voice, checking consistency, and proofreading the final draft before submission.",
  },
  {
    question:
      "What types of errors are corrected during professional proofreading?",
    answer:
      "Professional proofreading involves correction of grammatical errors, spelling mistakes, punctuation, typos, formatting, reference list errors, capitalization errors, and language errors before the final submission.",
  },
  {
    question:
      "Where can I find reliable proofreading services for academic writing?",
    answer:
      "Good proofreading services can be found in the writing centers of universities, professional academic editing companies, qualified freelance editors, and research support services on the Internet.",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function TestimonialsAndFAQ() {
  // Testimonials slide index state
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Accordion active item state (defaults to first item open)
  const [openFAQ, setOpenFAQ] = useState<string>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenFAQ((prev) => (prev === id ? "" : id));
  };

  const mobileItem = testimonialsData[activeSlide];
  const desktopItems = [
    testimonialsData[activeSlide],
    testimonialsData[(activeSlide + 1) % testimonialsData.length],
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: TESTIMONIALS                 */}
      {/* ======================================= */}
      <MovingTestimonials data={testimonialsData} />

      {/* ======================================= */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS   */}
      {/* ======================================= */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </div>
  );
}

function ProofreadingTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#1f3d35] text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-between space-y-6 relative border border-[#162d27]">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="space-y-6 flex-1">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
            {item.quote}
          </p>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-white">
              — {item.name}
            </h3>
            <p className="text-xs text-emerald-200 italic">{item.role}</p>
          </div>
        </div>
        <div className="relative w-28 h-36 shrink-0 bg-white border-2 border-slate-400 rounded-sm p-1 overflow-hidden shadow-md self-center sm:self-start">
          <Image
            src={item.journalImage}
            alt={`${item.name} testimonial`}
            fill
            sizes="112px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

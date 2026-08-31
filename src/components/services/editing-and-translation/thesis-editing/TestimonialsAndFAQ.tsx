"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

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

const testimonialsData = [
  {
    image: `${IMG_BASE}international-journal-case-reports-surgery.png`,
    quote:
      "Pubrica’s editors transformed my Ph.D. thesis into a well-polished document that met all my university’s requirements. Their attention to detail and academic precision gave me the confidence to submit without hesitation.",
    name: "DR. ANANYA MEHTA",
    designation: "Ph.D. Scholar",
    organization: "India",
    flag: `${IMG_BASE}flag.png`,
  },
  {
    image: `${IMG_BASE}jama-oncology-journal-2.png`,
    quote:
      "The editors at Pubrica helped me improve the structure and clarity of my thesis. Their professional support made a huge difference in the outcome and saved me valuable time before submission.",
    name: "SARAH JOHNSON",
    designation: "Master’s Scholar",
    organization: "UK",
    flag: `${IMG_BASE}uk-flag-.png`,
  },
  {
    image: `${IMG_BASE}international-journal-of-surgery-.png`,
    quote:
      "The thorough proofreading and formatting gave my dissertation a professional finish. I received excellent feedback from my supervisor.",
    name: "CARLOS RODRÍGUEZ",
    designation: "Master’s Student",
    organization: "Spain",
    flag: `${IMG_BASE}spain-.png`,
  },
];

// --- FAQ Data ---
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "1. How to edit a thesis before final submission?",
    answer:
      "To edit a thesis, it is necessary to look at the structure, revise arguments, correct grammatical errors, verify data accuracy, check references, check compliance with formatting requirements, and proofread it carefully before submitting it.",
  },
  {
    question:
      "2. Is professional editing required for a thesis or dissertation?",
    answer:
      "Professional editing is not necessary at times, but it is advisable to enhance clarity, structure, language, formatting, and overall academic presentation.",
  },
  {
    question: "3. How to improve the language and clarity of a thesis?",
    answer:
      "To enhance language in a thesis, it is necessary to revise sentences to make them clear, simplify complicated words, make it logical, eliminate repetition, use an academic tone, and proofread it carefully.",
  },
  {
    question:
      "4. What are the common mistakes to fix before thesis submission?",
    answer:
      "Common errors may include grammar errors, poor arguments, formatting problems, citation errors, incomplete references, poor structure, typographical errors, and lack of coherence in the text.",
  },
  {
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

  // const mobileItem = testimonials[activeIndex];
  // const desktopItems = [
  //   testimonials[activeIndex],
  //   testimonials[(activeIndex + 1) % testimonials.length],
  // ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 text-slate-800 font-sans">
      {/* ======================================= */}
      {/* SECTION 1: TESTIMONIALS */}
      {/* ======================================= */}
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's Thesis Editing Services have helped Master's and Ph.D. scholars refine their research, enhance clarity, and meet academic standards. Our expert editors improve readability, maintain your academic voice, and strengthen the overall impact of your thesis, making it submission-ready and academically sound. Here is what our clients say:"
        testimonials={testimonialsData}
      />

      {/* ======================================= */}
      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
      {/* ======================================= */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
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

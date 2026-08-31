"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

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

const testimonialsData = [
  {
    image: `${IMG_BASE}nature-biotechnology.png`,
    quote:
      "The Pubrica Translation with Editing Service exceeded my expectations. My manuscript was translated into English flawlessly, preserving the exact meaning and nuances of my original work. The editing made it publication-ready.",
    name: "DR. ANANYA MEHTA",
    designation: "Biomedical Researcher",
    organization: "India",
    flag: `${IMG_BASE}india.png`,
  },
  {
    image: `${IMG_BASE}the-lancet-of-oncolgy-.png`,
    quote:
      "The team at Pubrica provided precise translation along with thorough editing. It truly elevated the quality of my manuscript and helped me communicate my findings effectively to an international audience.",
    name: "PROF. LI WEI",
    designation: "Materials Science Professor",
    organization: "China",
    flag: `${IMG_BASE}china.png`,
  },
  {
    image: `${IMG_BASE}Frontiers-of-neuro-science-.png`,
    quote:
      "I was struggling to express complex findings in English. Pubrica not only translated my thesis but also polished the style to meet academic standards. The turnaround time and quality were outstanding.",
    name: "MS. ANANYA MEHTA",
    designation: "Ph.D. Scholar in Environmental Science",
    organization: "India",
    flag: `${IMG_BASE}india.png`,
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
    question:
      "How to translate a research paper into English for journal submission?",
    answer:
      "Translate a research paper using professional academic translation, ensuring subject accuracy, technical terms, appropriate formatting according to journal requirements, and post-editing with precision.",
  },
  {
    question:
      "Where to find academic translation services for research manuscripts?",
    answer:
      "Academic translation services are available from professional translation service providers, research editing services, academic translators, and research assistance services at the universities.",
  },
  {
    question:
      "Can translated research papers be edited for journal publication?",
    answer:
      "Yes, the translated research papers can be edited professionally to ensure the accuracy of the language, clarity, consistency of the words, formatting, etc.",
  },
  {
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

  // const mobileItem = testimonialsData[activeIndex];
  // const desktopItems = [
  //   testimonialsData[activeIndex],
  //   testimonialsData[(activeIndex + 1) % testimonialsData.length],
  // ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ======================================= */}
        {/* SECTION 1: TESTIMONIALS                 */}
        {/* ======================================= */}
        <CommonTestimonial
          title="Testimonials"
          description="Learn how Pubrica's Translation with Editing Services have helped researchers and authors accurately translate their work, enhance clarity, and meet publication standards. Our expert translators and editors ensure linguistic precision, preserve the original meaning, and refine the text for fluency and readability, making your manuscript publication-ready and professionally polished. Here is what our clients say:"
          testimonials={testimonialsData}
        />
        {/* ======================================= */}
        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS   */}
        {/* ======================================= */}
        <CommonFAQ
          title="Frequently Asked Questions"
          faqs={faqs}
        />
      </div>
    </div>
  );
}

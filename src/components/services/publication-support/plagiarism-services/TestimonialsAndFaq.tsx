"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import CommonFAQ from "@/components/common/FAQ";

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
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Pubrica's plagiarism check gave me the confidence to submit my manuscript to the Journal of Clinical Oncology. The detailed similarity report and expert guidance helped me address all concerns before peer review. Highly recommended for rigorous manuscript preparation.",
    author: "DR. ANJALI MEHTA",
    role: "Oncology Researcher",
    image:
      "/images/publication-support/poster-preparation/journal-of-clinical-oncology-1.jpg",
  },
  {
    id: 2,
    quote:
      "Thanks to Pubrica's plagiarism screening, my systematic review was accepted by The Lancet Respiratory Medicine without any originality issues. Their thorough manual review alongside software detection ensured my work met the highest ethical standards.",
    author: "DR. RAJESH KUMAR",
    role: "Pulmonologist",
    image:
      "/images/publication-support/plagiarism-services/the-lancet-respiratory-medicine.jpg",
  },
  {
    id: 3,
    quote:
      "Pubrica's plagiarism check service helped me prepare a case report for submission to the Journal of Medical Case Reports. The expert editorial team's feedback ensured my manuscript was original and compliant with ICMJE guidelines.",
    author: "DR. KARAN PATEL",
    role: "Clinical Researcher",
    image:
      "/images/publication-support/plagiarism-services/journal-of-medical-case-report.jpg",
  },
];

const faqs = [
  {
    question:
      "1. What is the acceptable plagiarism percentage for journal publications?",
    answer:
      "Most journals permit low similarity rates, usually below 10-20%, depending on their journal policies. However, the limits may differ, and it is important to adhere to the requirements of originality.",
  },
  {
    question:
      "2. Which plagiarism checking tools can be used for academic manuscripts?",
    answer:
      "The most common plagiarism detection tools used by most institutions and journals include Turnitin, iThenticate, Grammarly Premium, Copyscape, and Plagscan.",
  },
  {
    question:
      "3. How can I check plagiarism in my research paper before journal submission?",
    answer:
      "You may use plagiarism detection tools like Turnitin or iThenticate, and then revise the similar content, and finally submit the paper to the journal.",
  },
  {
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
      <section className="w-full py-6 md:py-7 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
          Testimonials
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 max-w-5xl">
          Learn how Pubrica&apos;s plagiarism check and machine-authored
          document analysis service has helped researchers ensure manuscript
          originality, comply with ethical guidelines, and successfully publish.
          Here is what our clients say:
        </p>

        <MovingTestimonials
          data={testimonialsData}
          autoSlideInterval={5000}
        />
      </section>

      {/* SECTION 2: Frequently Asked Questions */}
      <CommonFAQ
        title="Frequently Asked Questions – Plagiarism Check Service"
        faqs={faqs}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonFAQ from "@/components/common/FAQ";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";

// Common path prefix for journal images
const COMMON_IMAGE_PATH = "/images/publication-support/journal-submission/";

// Testimonials Data
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "I had my manuscript accepted with no technical revisions, and the team at Pubrica worked everything from formatting to proper keyword selection, for submission to PLOS ONE.",
    author: "DR. ARVIND NAIR",
    role: "Clinical Pharmacologist",
    image: `${COMMON_IMAGE_PATH}scropt-2.jpg`,
  },
  {
    id: 2,
    quote:
      "I was working on a case series for The American Journal of Case Reports, and I found Pubrica’s submission team to help perfectly align it with CARE guidelines. The process was a great experience, and the editorial office raised no technical issues with the submission.",
    author: "DR. LEENA GEORGE",
    role: "Consultant Radiologist",
    image: `${COMMON_IMAGE_PATH}book-01.jpg`,
  },
  {
    id: 3,
    quote:
      "Pubrica's focus on metadata entry and file formatting enabled me to submit my work to The Lancet Oncology. They also prepared a quality cover letter based on the journal's scope.",
    author: "DR. SANDEEP KULKARNI",
    role: "Oncologist, Surgeon, and Researcher",
    image: `${COMMON_IMAGE_PATH}book-01.jpg`,
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


  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: TESTIMONIALS                    */}
      {/* ========================================== */}
      <MovingTestimonials
        data={testimonialsData}
        autoSlideInterval={5000}
      />

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
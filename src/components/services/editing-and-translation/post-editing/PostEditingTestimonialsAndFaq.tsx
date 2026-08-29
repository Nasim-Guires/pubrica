"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  journalImage: string;
  flagIcon: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const PostEditingTestimonialsAndFaq: React.FC = () => {
  // Testimonials state for pagination dots
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // FAQ accordion state: tracking open question ID for column 1 and column 2
  const [openFaqCol1, setOpenFaqCol1] = useState<number | null>(1); // Default Q1 open
  const [openFaqCol2, setOpenFaqCol2] = useState<number | null>(5); // Default Q5 open

  const testimonialsData = [
    {
      image:
        "/images/editing-and-translation/post-editing/plos-one-.png",
      quote:
        "Pubrica’s post-editing team transformed my manuscript into a polished, publication-ready document. Their attention to detail and understanding of medical terminology were exceptional.",
      name: "DR. PRIYA MENON",
      designation: "Medical Researcher",
      organization: "India",
      flag: "/images/editing-and-translation/post-editing/flag.png",
    },
    {
      image:
        "/images/editing-and-translation/post-editing/diabetologia.png",
      quote:
        "As a non-native English speaker, I found Pubrica’s post-editing services invaluable. They ensured my manuscript met international publication standards.",
      name: "DR. AYESHA PATEL",
      designation: "Clinical Researcher",
      organization: "India",
      flag: "/images/editing-and-translation/post-editing/flag.png",
    },
    {
      image:
        "/images/editing-and-translation/post-editing/bmc-public-health.png",
      quote:
        "Pubrica’s post-editing service improved clarity and precision without altering meaning. My paper was accepted quickly.",
      name: "DR. MARIA GONZALES",
      designation: "Research Scientist",
      organization: "Spain",
      flag: "/images/editing-and-translation/post-editing/spain.png",
    },
  ];

  // const mobileItem = testimonials[activeSlide];
  // const desktopItems = [
  //   testimonials[activeSlide],
  //   testimonials[(activeSlide + 1) % testimonials.length],
  // ];

  // FAQ Column 1 (Questions 1 to 4)
  const faqs = [
    {
      question: "1. What is post-editing in academic and professional writing?",
      answer:
        "Post-editing is defined as the process of reviewing and, if necessary, revising machine-generated or pre-edited text to ensure its accuracy, clarity, consistency, tone, and quality, etc., before its final publication.",
    },
    {
      question:
        "2. What is the difference between machine translation and post-editing?",
      answer:
        "Machine translation is the process of automatically translating text from one language to another, while post-editing refers to reviewing and revising machine translation to ensure its accuracy, clarity, grammar, terminology, etc.",
    },
    {
      question:
        "3. Why is human post-editing required after AI or machine translation?",
      answer:
        "Human post-editing is needed to ensure correction of errors, context accuracy, natural language, terminology, etc., and academic/professional quality, etc.",
    },
    {
      question:
        "4. How does post-editing improve the quality of AI-generated or translated text?",
      answer:
        "The quality of AI-generated or translated text is improved through post-editing, which corrects errors, improves clarity, ensures contextual correctness, refines terminology, and improves readability and quality.",
    },
  ];

  // FAQ Column 2 (Questions 5 to 8)
  const faqColumn2: FaqItem[] = [
    {
      id: 5,
      question:
        "5. When should authors use post-editing services for their manuscripts?",
      answer:
        "Authors should use post-editing services for machine-translated or AI-generated text to ensure accuracy, clarity, consistency, proper terminology, and academic or journal requirements.",
    },
    {
      id: 6,
      question:
        "6. What types of errors are corrected during the post-editing process?",
      answer:
        "Errors in grammar, translation, clarity, terminology, context, formatting, and overall readability are corrected in the text through post-editing.",
    },
    {
      id: 7,
      question:
        "7. How do post-editing services ensure clarity, accuracy, and consistency in translated content?",
      answer:
        "Post-editing services help in ensuring clarity, accuracy, and consistency through expert reviews, terminology matching, context verification, structured editing, quality checks, and style or journal requirements.",
    },
    {
      id: 8,
      question:
        "8. Can professional post-editing help prepare translated manuscripts for journal submission?",
      answer:
        "Yes, professional post-editing is beneficial for translated manuscripts as it ensures the quality and accuracy of language, clarity, terminology, formatting, and quality for journal readiness.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-6 space-y-16">
      {/* ------------------------------------------------------------- */}
      {/* 1. TESTIMONIALS SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <CommonTestimonial
          title="Testimonials"
          description=" Learn how Pubrica’s Post-Editing Services help authors and writers
          polish their manuscripts, correct errors, and ensure adherence to
          publishing standards. Our expert editors enhance clarity, maintain
          your unique voice, and refine your work for maximum impact, making it
          fully ready for successful publication. Here is what our clients say:"
          testimonials={testimonialsData}
        />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                   */}
      {/* ------------------------------------------------------------- */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </div>
  );
};

function PostEditingTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-slate-300 p-6 shadow-sm flex flex-col justify-between space-y-6">
      <div className="bg-[#d5d8d8] rounded-lg p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative w-28 h-28 bg-white rounded border border-slate-300 shrink-0 overflow-hidden flex items-center justify-center p-1">
          <Image
            src={item.journalImage}
            alt={`${item.author} publication cover`}
            fill
            sizes="112px"
            className="object-contain p-1"
          />
        </div>
        <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <h3 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide">
            — {item.author}
          </h3>
          <p className="text-xs text-slate-600 italic mt-0.5">{item.role}</p>
        </div>
        <div className="relative w-7 h-7 rounded-full bg-slate-100 overflow-hidden shadow-sm border border-slate-200">
          <Image
            src={item.flagIcon}
            alt=""
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

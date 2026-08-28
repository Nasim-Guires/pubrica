"use client";

import React, { useState } from "react";
import Image from "next/image";

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

  const testimonials: Testimonial[] = [
    {
      id: "priya-menon",
      quote:
        "Pubrica’s post-editing team transformed my manuscript into a polished, publication-ready document. Their attention to detail and understanding of medical terminology were exceptional.",
      author: "DR. PRIYA MENON",
      role: "Medical Researcher, India",
      journalImage:
        "/images/editing-and-translation/post-editing/plos-one-.png",
      flagIcon: "/images/editing-and-translation/post-editing/flag.png",
    },
    {
      id: "ayesha-patel",
      quote:
        "As a non-native English speaker, I found Pubrica’s post-editing services invaluable. They ensured my manuscript met international publication standards.",
      author: "DR. AYESHA PATEL",
      role: "Clinical Researcher, India",
      journalImage:
        "/images/editing-and-translation/post-editing/diabetologia.png",
      flagIcon: "/images/editing-and-translation/post-editing/flag.png",
    },
    {
      id: "maria-gonzales",
      quote:
        "Pubrica’s post-editing service improved clarity and precision without altering meaning. My paper was accepted quickly.",
      author: "DR. MARIA GONZALES",
      role: "Research Scientist, Spain",
      journalImage:
        "/images/editing-and-translation/post-editing/bmc-public-health.png",
      flagIcon: "/images/editing-and-translation/post-editing/spain.png",
    },
  ];

  const mobileItem = testimonials[activeSlide];
  const desktopItems = [
    testimonials[activeSlide],
    testimonials[(activeSlide + 1) % testimonials.length],
  ];

  // FAQ Column 1 (Questions 1 to 4)
  const faqColumn1: FaqItem[] = [
    {
      id: 1,
      question: "1. What is post-editing in academic and professional writing?",
      answer:
        "Post-editing is defined as the process of reviewing and, if necessary, revising machine-generated or pre-edited text to ensure its accuracy, clarity, consistency, tone, and quality, etc., before its final publication.",
    },
    {
      id: 2,
      question:
        "2. What is the difference between machine translation and post-editing?",
      answer:
        "Machine translation is the process of automatically translating text from one language to another, while post-editing refers to reviewing and revising machine translation to ensure its accuracy, clarity, grammar, terminology, etc.",
    },
    {
      id: 3,
      question:
        "3. Why is human post-editing required after AI or machine translation?",
      answer:
        "Human post-editing is needed to ensure correction of errors, context accuracy, natural language, terminology, etc., and academic/professional quality, etc.",
    },
    {
      id: 4,
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
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
          Testimonials
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mb-8 leading-relaxed">
          Learn how Pubrica’s Post-Editing Services help authors and writers
          polish their manuscripts, correct errors, and ensure adherence to
          publishing standards. Our expert editors enhance clarity, maintain
          your unique voice, and refine your work for maximum impact, making it
          fully ready for successful publication. Here is what our clients say:
        </p>

        <div className="grid grid-cols-1 gap-6 md:hidden">
          <PostEditingTestimonialCard item={mobileItem} />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6">
          {desktopItems.map((item) => (
            <PostEditingTestimonialCard
              key={`${activeSlide}-${item.id}`}
              item={item}
            />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-sm border border-[#0d3b36] transition-colors ${
                activeSlide === index ? "bg-[#0d3b36]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-8">
          Frequently Asked Questions
        </h2>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1 (Questions 1-4) */}
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
            {faqColumn1.map((item, index) => {
              const isOpen = openFaqCol1 === item.id;

              return (
                <div
                  key={item.id}
                  className={`${
                    index !== faqColumn1.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqCol1(isOpen ? null : item.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900 pr-4 leading-snug">
                      {item.question}
                    </span>
                    <span className="font-bold text-lg text-slate-800 shrink-0">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 (Questions 5-8) */}
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
            {faqColumn2.map((item, index) => {
              const isOpen = openFaqCol2 === item.id;

              return (
                <div
                  key={item.id}
                  className={`${
                    index !== faqColumn2.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqCol2(isOpen ? null : item.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900 pr-4 leading-snug">
                      {item.question}
                    </span>
                    <span className="font-bold text-lg text-slate-800 shrink-0">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {item.answer}
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

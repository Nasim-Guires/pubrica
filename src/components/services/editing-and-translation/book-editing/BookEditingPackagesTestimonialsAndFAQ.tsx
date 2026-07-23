"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- Interfaces ---
interface PackageCard {
  letter: string;
  badgeBg: string;
  badgeColor: string;
  cardHeaderBg: string;
  title: string;
  description: string;
  features: string[];
}

interface Testimonial {
  journalImage: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  flagImage: string;
  flagAlt: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const BookEditingPackagesTestimonialsAndFAQ: React.FC = () => {
  // State for FAQ accordion (Allows multiple or single open toggle)
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  // --- Data Definitions ---
  const packages: PackageCard[] = [
    {
      letter: "E",
      badgeBg: "bg-rose-100",
      badgeColor: "text-rose-600",
      cardHeaderBg: "bg-[#cfdcdb]",
      title: "End-to-End Book Publication Pack",
      description:
        "Our publication experts and project manager work together to boost your chances of book publication by ensuring superior quality and experienced support at every step.",
      features: [
        "Book editing to suit your needs",
        "Showcase chapter preparation",
        "Publisher selection",
        "Submission management",
        "Book proposal preparation",
        "Free Q&A with language editors",
      ],
    },
    {
      letter: "A",
      badgeBg: "bg-emerald-100",
      badgeColor: "text-emerald-600",
      cardHeaderBg: "bg-[#d8c5e2]",
      title: "Advanced",
      description:
        "A language editor from your subject area improves the clarity and readability of your book, so that it is easy to understand and free of language errors.",
      features: [
        "Sentence structure and word choice correction, spelling proofreading, and grammar improvement",
        "Free formatting for consistency or to match publisher requirements",
        "Accuracy of terminology",
        "Unlimited free chat with your editor",
      ],
    },
    {
      letter: "P",
      badgeBg: "bg-amber-100",
      badgeColor: "text-amber-600",
      cardHeaderBg: "bg-[#d2b887]",
      title: "Premium",
      description:
        "A superior English editor from your subject area makes substantial improvements to bring out the best in your book by correcting the logic, structure, and language where necessary.",
      features: [
        "Includes all the features of advanced book editing",
        "Improvements in chapter structure, flow, & presentation",
        "Review of core concept and content to improve appeal for academic books and review of plot, pacing, and characters for fiction, biographies, etc.",
      ],
    },
  ];

  const testimonials: Testimonial[] = [
    {
      journalImage: "/images/journals/european-heart-journal.jpg",
      quote:
        "Pubrica’s editors transformed my manuscript into a polished, professional book while preserving my unique voice. Their attention to detail and insightful feedback made all the difference.",
      authorName: "DR. SARAH MITCHELL",
      authorTitle: "Historian & Author, USA",
      flagImage: "/images/flags/usa.png",
      flagAlt: "USA Flag",
    },
    {
      journalImage: "/images/journals/jce.jpg",
      quote:
        "Working with Pubrica’s book editing service was a game-changer. They elevated my writing, corrected inconsistencies, and helped me make a stronger connection with readers.",
      authorName: "CARLOS MENDOZA",
      authorTitle: "Academic & Author, Mexico",
      flagImage: "/images/flags/india.png", // Or Mexico flag image
      flagAlt: "Flag",
    },
  ];

  const faqList: FAQItem[] = [
    {
      id: 1,
      question: "1. What does professional book editing include?",
      answer:
        "Professional book editing involves structural editing, content refinement, language editing, consistency checks, formatting, grammar editing, and overall improvement to make it more comprehensible, readable, and publishable.",
    },
    {
      id: 2,
      question:
        "2. What is the difference between developmental editing, copyediting, and proofreading?",
      answer:
        "Developmental editing improves book structure and content, copy editing improves language and content consistency, while proofreading corrects grammar, spelling, punctuation, and formatting errors prior to publication.",
    },
    {
      id: 3,
      question:
        "3. Why is professional editing important before publishing a book?",
      answer:
        "Professional editing improves book structure, comprehensibility, consistency, language quality, and overall readability to make it publishable and credible as a final manuscript product.",
    },
    {
      id: 4,
      question:
        "4. How can professional book editing improve the quality of a manuscript?",
      answer:
        "Professional book editing improves structure, enhances content flow, corrects grammar and language errors, ensures consistency, improves readability, and enhances overall presentation for higher quality publication and audience engagement.",
    },
    {
      id: 5,
      question:
        "5. When should an author hire a book editor during the writing process?",
      answer:
        "Authors should seek the services of a professional book editor after completing a full draft to allow for overall structural improvements, refinement of language, consistency checks, and overall improvements.",
    },
    {
      id: 6,
      question: "6. How to choose the right book editing service?",
      answer:
        "When choosing a book editing service, look for one that is run by competent editors, has appropriate subject matter expertise, transparent pricing, process, reviews, confidentiality, and appropriate turnaround time.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-12">
      {/* ------------------------------------------------------------- */}
      {/* 1. BOOK EDITING SERVICES - OUR PACKAGES SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-2">
            Book Editing Services – Our Packages
          </h2>
          <h3 className="text-base sm:text-lg font-medium text-[#0d3b36] mb-3">
            Take the Complete Pack or Simply Get Your Book Edited
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We offer a range of book editing packages designed to meet the
            unique needs of authors, from first-time writers to seasoned
            professionals. Each package is tailored to ensure your manuscript is
            polished, coherent, and ready for publication while preserving your
            unique voice and style.
          </p>
        </div>

        {/* 3 Columns Grid for Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#eef3f3] rounded-xl overflow-hidden border border-slate-200/80 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Header Box */}
              <div
                className={`${pkg.cardHeaderBg} p-6 border-b border-slate-200/50`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span
                    className={`w-9 h-9 rounded-full ${pkg.badgeBg} ${pkg.badgeColor} flex items-center justify-center font-bold text-lg shadow-sm`}
                  >
                    {pkg.letter}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {pkg.title}
                  </h4>
                </div>
              </div>

              {/* Body Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-xs sm:text-sm text-slate-700"
                      >
                        <span className="text-slate-800 font-bold mr-2 text-base leading-none">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TESTIMONIALS SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-5xl leading-relaxed">
            Learn how Pubrica’s Book Editing Services have helped authors and
            writers refine their manuscripts, enhance clarity, and meet
            publishing standards. Our expert editors improve readability,
            preserve your unique voice, and strengthen the overall impact of
            your work, making it publication-ready for publishers and readers
            alike. Here is what our clients say:
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between relative"
            >
              <div>
                {/* Upper Box: Journal image + Quote */}
                <div className="bg-[#eef3f3] rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 mb-4 border border-slate-100">
                  <div className="relative w-28 h-36 flex-shrink-0 rounded overflow-hidden shadow-sm border border-slate-200">
                    <Image
                      src={item.journalImage}
                      alt="Journal Cover"
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info & Country Flag */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider">
                      — {item.authorName}
                    </h4>
                    <p className="text-xs text-slate-500 italic mt-0.5">
                      {item.authorTitle}
                    </p>
                  </div>
                  <div className="relative w-6 h-6 flex-shrink-0 rounded-full overflow-hidden shadow-sm">
                    <Image
                      src={item.flagImage}
                      alt={item.flagAlt}
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <span className="w-3 h-3 bg-[#0d3b36] rounded-sm inline-block"></span>
          <span className="w-3 h-3 border border-[#0d3b36] rounded-sm inline-block"></span>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="border-t border-slate-200 bg-white shadow-sm rounded-lg overflow-hidden">
          {faqList.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <div key={faq.id} className="border-b border-slate-200">
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-lg font-bold text-slate-700 select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 bg-white">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

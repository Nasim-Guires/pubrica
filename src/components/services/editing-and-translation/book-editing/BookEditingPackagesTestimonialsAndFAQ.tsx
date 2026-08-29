"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

// --- Interfaces ---
interface PackageCard {
  iconSrc: string;
  iconAlt: string;
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
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  // --- Data Definitions ---
  const packages: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/book-editing/E-pa-icons-1.png",
      title: "End-to-End Book Publication Pack",
      idealFor: "Authors looking for complete book publication support from editing to submission",
      includes: [
        "Book editing to suit your needs",
        "Showcase chapter preparation",
        "Publisher selection",
        "Submission management",
        "Book proposal preparation",
        "Free Q&A with language editors",
      ],
      cardBgColor: "#cfdcdb",
      titleColor: "#0d3b36",
    },
    {
      icon: "/images/publication-support/journal-selection/advanced.webp",
      title: "Advanced",
      idealFor: "Authors seeking professional language editing and improved book readability",
      includes: [
        "Sentence structure and word choice correction, spelling proofreading, and grammar improvement",
        "Free formatting for consistency or to match publisher requirements",
        "Accuracy of terminology",
        "Unlimited free chat with your editor",
      ],
      cardBgColor: "#d8c5e2",
      titleColor: "#6b2d82",
    },
    {
      icon: "/images/editing-and-translation/pro.webp",
      title: "Premium",
      idealFor: "Authors seeking comprehensive editing to improve the structure, logic, language, and overall appeal of their book",
      includes: [
        "Includes all the features of advanced book editing",
        "Improvements in chapter structure, flow, & presentation",
        "Review of core concept and content to improve appeal for academic books and review of plot, pacing, and characters for fiction, biographies, etc.",
      ],
      cardBgColor: "#d2b887",
      titleColor: "#805826",
    },
  ];

  const testimonialsData = [
    {
      image:
        "/images/editing-and-translation/book-editing/testimonials-2.png",
      quote:
        "Pubrica’s editors transformed my manuscript into a polished, professional book while preserving my unique voice. Their attention to detail and insightful feedback made all the difference.",
      name: "DR. SARAH MITCHELL",
      designation: "Historian & Author",
      organization: "USA",
      flag: "/images/editing-and-translation/book-editing/usa-.png",
    },
    {
      image:
        "/images/editing-and-translation/book-editing/journal-of-clinical-epidemiology-1.png",
      quote:
        "Working with Pubrica’s book editing service was a game-changer. They elevated my writing, corrected inconsistencies, and helped me make a stronger connection with readers.",
      name: "CARLOS MENDOZA",
      designation: "Academic & Author",
      organization: "Mexico",
      flag: "/images/editing-and-translation/book-editing/flag.png",
    },
    {
      image:
        "/images/editing-and-translation/book-editing/international-journal-of-cardialogy-.png",
      quote:
        "Their expertise in language and formatting elevated my scientific book to a professional level. The editors were thorough and supportive throughout.",
      name: "DR. THOMAS MULLER",
      designation: "Scientific Author",
      organization: "Germany",
      flag: "/images/editing-and-translation/book-editing/germany-.png",
    },
  ];

  const faqs = [
    {
      question: "1. What does professional book editing include?",
      answer:
        "Professional book editing involves structural editing, content refinement, language editing, consistency checks, formatting, grammar editing, and overall improvement to make it more comprehensible, readable, and publishable.",
    },
    {
      question:
        "2. What is the difference between developmental editing, copyediting, and proofreading?",
      answer:
        "Developmental editing improves book structure and content, copy editing improves language and content consistency, while proofreading corrects grammar, spelling, punctuation, and formatting errors prior to publication.",
    },
    {
      question:
        "3. Why is professional editing important before publishing a book?",
      answer:
        "Professional editing improves book structure, comprehensibility, consistency, language quality, and overall readability to make it publishable and credible as a final manuscript product.",
    },
    {
      question:
        "4. How can professional book editing improve the quality of a manuscript?",
      answer:
        "Professional book editing improves structure, enhances content flow, corrects grammar and language errors, ensures consistency, improves readability, and enhances overall presentation for higher quality publication and audience engagement.",
    },
    {
      question:
        "5. When should an author hire a book editor during the writing process?",
      answer:
        "Authors should seek the services of a professional book editor after completing a full draft to allow for overall structural improvements, refinement of language, consistency checks, and overall improvements.",
    },
    {
      question: "6. How to choose the right book editing service?",
      answer:
        "When choosing a book editing service, look for one that is run by competent editors, has appropriate subject matter expertise, transparent pricing, process, reviews, confidentiality, and appropriate turnaround time.",
    },
  ];

  // const mobileItem = testimonials[activeIndex];
  // const desktopItems = [
  //   testimonials[activeIndex],
  //   testimonials[(activeIndex + 1) % testimonials.length],
  // ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-6">
      {/* ------------------------------------------------------------- */}
      {/* 1. BOOK EDITING SERVICES - OUR PACKAGES SECTION */}
      {/* ------------------------------------------------------------- */}
      <CommonPackages
        title="Book Editing Services – Our Packages"
        subtitle="Take the Complete Pack or Simply Get Your Book Edited"
        description="We offer a range of book editing packages designed to meet the unique needs of authors, from first-time writers to seasoned professionals. Each package is tailored to ensure your manuscript is polished, coherent, and ready for publication while preserving your unique voice and style."
        packages={packages}
      />

      {/* ------------------------------------------------------------- */}
      {/* 2. TESTIMONIALS SECTION */}
      {/* ------------------------------------------------------------- */}
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica’s Book Editing Services have helped authors and writers refine their manuscripts, enhance clarity, and meet publishing standards. Our expert editors improve readability, preserve your unique voice, and strengthen the overall impact of your work, making it publication-ready for publishers and readers alike. Here is what our clients say:"
        testimonials={testimonialsData}
      />

      {/* ------------------------------------------------------------- */}
      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      {/* ------------------------------------------------------------- */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </div>
  );
};

function BookTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between relative">
      <div>
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
  );
}

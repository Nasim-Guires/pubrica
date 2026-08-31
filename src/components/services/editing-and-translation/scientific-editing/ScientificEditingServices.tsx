"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import CommonFAQ from "@/components/common/FAQ";
import CommonTestimonial from "@/components/common/CommonTestimonials";

const IMG = "/images/editing-and-translation/scientific-editing";

// ==========================================
// DATA DEFINITIONS
// ==========================================

const testimonials = [
  {
    image: `${IMG}/testimonials-2.png`,
    quote:
      "Pubrica's scientific editing team transformed my manuscript. Their attention to detail and adherence to journal guidelines made the submission process seamless. I highly recommend their services to anyone aiming for high-impact publications.",
    name: "DR. PRIYA MENON",
    designation: "Oncology Researcher",
    organization: "Pubrica",
  },
  {
    image: `${IMG}/testimonials-1.png`,
    quote:
      "Pubrica's scientific editing service exceeded my expectations. From compliance with journal standards to meticulous proofreading, every aspect was handled professionally.",
    name: "DR. MICHAEL TAN",
    designation: "Neuroscience",
    organization: "Pubrica",
  },
  {
    image: `${IMG}/testimonials-3.png`,
    quote:
      "The editors improved clarity and flow of my paper. Their understanding of scientific nuances is exceptional. My paper was accepted in a top-tier journal within weeks.",
    name: "PROF. JAMES REYNOLDS",
    designation: "Biochemistry",
    organization: "Pubrica",
  },
];

const faqs = [
  {
    question: "What is scientific editing for research manuscripts?",
    answer:
      "Scientific editing is a process that refines research manuscripts by enhancing clarity, structure, language, consistency, format, and overall presentation of research manuscripts to fit journal requirements.",
  },
  {
    question: "What is the difference between scientific editing and proofreading?",
    answer:
      "Scientific editing involves improvements in structure, clarity, and flow of the research, as well as the quality of the content. On the other hand, proofreading involves the correction of grammatical errors and minor formatting issues.",
  },
  {
    question: "How does language editing help increase journal acceptance chances?",
    answer:
      "Language editing improves clarity, readability, grammar, and overall flow of the text, making it easy for the reviewer to comprehend the research without any difficulties or misunderstandings.",
  },
  {
    question: "What types of editing are required before submitting a research paper?",
    answer:
      "Before submission, it is necessary that the manuscript undergoes structural editing, language editing, formatting checks, reference correction, technical editing, and finally proofreading.",
  },
  {
    question: "What is included in a scientific manuscript editing service?",
    answer:
      "A scientific editing service involves language refinement, structural refinement, grammatical correction, formatting, reference checking, clarity improvement, and optimization of quality for journal submission.",
  },
];

interface DocumentType {
  id: string;
  title: string;
  iconSrc: string;
}

const documentTypes: DocumentType[] = [
  { id: "journal-manuscripts", title: "Journal manuscripts", iconSrc: `${IMG}/Journal-manuscripts.png` },
  { id: "grants", title: "Grants/NIH, NSF, and private foundation grants/grant revisions", iconSrc: `${IMG}/GrantsNIH-NSF-and-private-foundation-grantsgrant-revisions.png` },
  { id: "proposals", title: "Proposals", iconSrc: `${IMG}/Proposals.png` },
  { id: "ppt-slides", title: "PowerPoint slides", iconSrc: `${IMG}/PowerPoint-slides.png` },
  { id: "theses", title: "Theses", iconSrc: `${IMG}/Theses.png` },
  { id: "technical-docs", title: "Technical documents", iconSrc: `${IMG}/Technical-documents.png` },
  { id: "abstracts", title: "Abstracts", iconSrc: `${IMG}/Abstracts.png` },
  { id: "book-chapters", title: "Book chapters", iconSrc: `${IMG}/Book-chapters.png` },
  { id: "medical-editing", title: "Medical editing", iconSrc: `${IMG}/Medical-editing.png` },
  { id: "medical-proofreading", title: "Medical manuscript proofreading", iconSrc: `${IMG}/Medical-manuscript-proofreading.png` },
  { id: "conference-posters", title: "Conference posters", iconSrc: `${IMG}/Conference-posters.png` },
];

const packages: PackageItem[] = [
  {
    icon: "/images/publication-support/responding-to-reviewers/standard-logo.png",
    title: "Standard",
    idealFor: "Early-stage manuscripts, pre-submission refinement.",
    includes: [
      "Grammar, punctuation, and spelling corrections",
      "Sentence restructuring for clarity and readability",
      "Basic adherence to journal formatting",
    ],
    turnaround: "5–7 business days",
    cardBgColor: "#e2e8f0",
    titleColor: "#b45309",
  },
  {
    icon: "/images/publication-support/journal-selection/advanced.webp",
    title: "Advanced",
    idealFor: "Manuscripts requiring in-depth scientific review.",
    includes: [
      "All features of the Standard Package",
      "Critical review of methodology, results, and discussion clarity",
      "Compliance with journal-specific guidelines and formatting",
      "Reference formatting and consistency checks",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#f3e8ff",
    titleColor: "#047857",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Premium/Publication-Ready",
    idealFor: "High-impact journals and rigorous peer-review submissions.",
    includes: [
      "All features of the Advanced Package",
      "Comprehensive scientific content editing for logic and flow",
      "Technical accuracy verification",
      "Formatting for figures, tables, and references per journal requirements",
      "Response-to-reviewer support (optional add-on)",
    ],
    turnaround: "10–14 business days",
    cardBgColor: "#fef3c7",
    titleColor: "#0369a1",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ScientificEditingServices() {
  return (
    <div className="w-full bg-white font-sans text-slate-800 overflow-x-hidden">
      {/* SECTION 1: DOCUMENTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] text-center mb-10 tracking-tight">
          What Types of Documents Do We Edit?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <Image
                  src={doc.iconSrc}
                  alt={doc.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0c373b] transition-colors leading-snug">
                {doc.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PACKAGES & QUOTE BUTTON */}
      <CommonPackages
        title="Scientific Editing Services – Our Packages"
        description="At Pubrica, we offer comprehensive scientific editing packages designed to enhance the clarity, accuracy, and impact of your manuscript. Whether you are preparing for submission to a high-impact journal or refining a thesis, our expert editors ensure your work meets international standards."
        packages={packages}
      />

      <div className="my-1 flex justify-center w-full px-1">
        <GetFreeQuoteButton />
      </div>

      {/* SECTION 3: TESTIMONIALS & FAQ CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-12">
        {/* Testimonials */}
      
          <div className="w-full overflow-hidden">
            <CommonTestimonial
              title="Testimonials"
              description="Learn how Pubrica's Scientific Editing Services have empowered researchers and authors to refine their manuscripts, enhance clarity, and meet journal-specific standards. Our expert editors help improve readability, ensure precision, and strengthen the impact of research, increasing the chances of publication in high-impact journals. Here is what our clients say:"
              testimonials={testimonials}
            />          </div>
       

        {/* FAQ Section */}
        <section className="w-full">
          <CommonFAQ
            title="Frequently Asked Questions"
            faqs={faqs}
          />
        </section>
      </div>
    </div>
  );
}
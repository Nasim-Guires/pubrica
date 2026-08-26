"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages from "@/components/common/CommonPackages";

// Base image path for package badge icons
const BASE_IMAGE_PATH = "/images/publication-support/peer-review-pre-submission";

// 1. Package Cards Data
const packagesData = [
  {
    icon: `${BASE_IMAGE_PATH}/Basic-480x480.webp`,
    title: "Basic",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    idealFor: "Authors seeking a scientific review to find gaps before submission.",
    includes: [
      "Feedback from subject-matter experts.",
      "Report with structured feedback on research quality, clarity, structure, and scientific validity.",
      "Simulated reviewer comments that align with the expectations of journal peer reviews.",
    ],
    addOns: [
      "Follow-up clarification call with the reviewer",
      "Guidance on formatting for a specific journal",
    ],
    turnaround: "5 working days.",
    cardBgColor: "#c6d7d6",
    titleColor: "#0f3d3a",
  },
  {
    icon: `${BASE_IMAGE_PATH}/advanced.webp`,
    title: "ADVANCED",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    idealFor: "Authors needing both expert review plus checks on submission readiness.",
    includes: [
      "All features of the Basic Package",
      "Formatting as per the author's target journal's submission guidelines",
      "Pre-submission compliance checklist (covering ethics, references, figures, disclosures, etc.)",
      "Assessment of the author's manuscript against the journal's scope",
    ],
    addOns: [
      "Adaptation of reference style (APA, AMA, Vancouver, etc.)",
      "Formatting of the authors' information and metadata.",
    ],
    turnaround: "7 working days.",
    cardBgColor: "#d2b8d9",
    titleColor: "#7c4d93",
  },
  {
    icon: `${BASE_IMAGE_PATH}/Comprehensive-480x480.webp`,
    title: "Comprehensive",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    idealFor: "Authors aiming to submit to high-impact journals and requiring full editing support.",
    includes: [
      "All features in the Advanced Package",
      "Support with critical revisions to address feedback",
      "Develop a customised cover letter for the journal submission",
      "Check for plagiarism and provide a similarity report (Turnitin or iThenticate)",
      "Final review from an editor for flow, coherence, and whether the manuscript fits the journal",
    ],
    addOns: [
      "Drafting of a response letter for journal reviewers",
      "Language editing and technical proofreading",
    ],
    turnaround: "10 working days.",
    cardBgColor: "#d8be91",
    titleColor: "#7a3e1d",
  },
];

// 2. Testimonials Data
const testimonialsData = [
  {
    id: 1,
    quote:
      '" The peer-review report I received from Pubrica was more detailed than expected. It helped me fix gaps in my discussion section before submitting to a Scopus-indexed journal. "',
    author: "DR. KAVITHA M",
    role: "Biotech Researcher",
    journalCover:
      "/images/publication-support/peer-review-pre-submission/book-01.jpg",
  },
  {
    id: 2,
    quote:
      '"I was very impressed with the thorough peer review I received. They even pointed out statistical flaws in my results section. The feedback improved the clarity and impact of my manuscript."',
    author: "DR. RAMESH NAIR",
    role: "Clinical Epidemiologist",
    journalCover:
      "/images/publication-support/peer-review-pre-submission/scropt-2.jpg",
  },
  {
    id: 3,
    quote:
      '"I was very impressed with the thorough peer review I received. They even pointed out statistical flaws in my results section. The feedback improved the clarity and impact of my manuscript."',
    author: "DR. RAMESH NAIR",
    role: "Clinical Epidemiologist",
    journalCover:
      "/images/publication-support/peer-review-pre-submission/book-01.jpg",
  },
];

const ITEMS_PER_PAGE = 2;

export default function PackagesAndTestimonialsSection() {
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);

  // Calculate total pages based on 2 items per page
  const totalPages = Math.ceil(testimonialsData.length / ITEMS_PER_PAGE);

  // Slice testimonials array to get items for current page
  const currentTestimonials = testimonialsData.slice(
    activeTestimonialPage * ITEMS_PER_PAGE,
    (activeTestimonialPage + 1) * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setActiveTestimonialPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonialPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: OUR PACKAGES                   */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0c3547] mb-10">
          Our Packages
        </h2>

        {/* Package Grid */}
        <CommonPackages packages={packagesData} />

        {/* Full-width "Get a Free Quote" Button */}
        <div className="w-full text-center">
          <GetFreeQuoteButton />
        </div>
      </section>
      {/* ========================================== */}
      {/* SECTION 2: TESTIMONIALS                    */}
      {/* ========================================== */}
      <section className="bg-[#f2f4f5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-10">
            Testimonials
          </h2>

          <div className="relative flex items-center justify-between gap-4">
            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors shrink-0"
              aria-label="Previous testimonial"
            >
              &#10094;
            </button>

            {/* Testimonials Cards Grid (Renders max 2 active items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-[180px]">
              {currentTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="group bg-[#2a4d3e] rounded-xl p-5 border-2 border-[#1c382d] shadow-lg flex items-center space-x-4 transition-all duration-300 hover:bg-black hover:border-black hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                >
                  {/* Journal Cover Image */}
                  <div className="w-28 h-36 relative shrink-0 rounded overflow-hidden shadow-md">
                    <Image
                      src={item.journalCover}
                      alt={item.author}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  {/* Quote & Author Info */}
                  <div className="space-y-3 text-white">
                    <p className="text-xs sm:text-sm leading-relaxed italic group-hover:text-gray-200">
                      {item.quote}
                    </p>
                    <div>
                      <h4 className="font-extrabold text-sm tracking-wide text-white">
                        {item.author}
                      </h4>
                      <p className="text-xs text-gray-300 italic group-hover:text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors shrink-0"
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>

          {/* Dynamic Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveTestimonialPage(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${activeTestimonialPage === idx ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom Arrow Icon for List Items
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-4 h-4 rounded-full bg-black/80 text-white flex items-center justify-center font-bold text-[10px] ${className}`}
    >
      &#10142;
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// 1. Package Cards Data
const packagesData = [
  {
    id: "basic",
    letter: "B",
    name: "Basic",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    badgeBg: "bg-[#f4d17b]", // Soft yellow badge
    headerBg: "bg-[#0f3d3a]", // Dark teal header line
    cardBg: "bg-[#c6d7d6]", // Light sage/teal body
    idealFor:
      "Authors seeking a scientific review to find gaps before submission.",
    includes: [
      "Feedback from subject-matter experts.",
      "Report with structured feedback on research quality, clarity, structure, and scientific validity.",
      "Simulated reviewer comments that align with the expectations of journal peer reviews.",
    ],
    optionalAddOns: [
      "Follow-up clarification call with the reviewer",
      "Guidance on formatting for a specific journal",
    ],
    turnaround: "5 working days.",
  },
  {
    id: "advanced",
    letter: "A",
    name: "ADVANCED",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    badgeBg: "bg-[#98cf82]", // Light green badge
    headerBg: "bg-[#7c4d93]", // Dark purple header line
    cardBg: "bg-[#d2b8d9]", // Light lavender body
    idealFor:
      "Authors needing both expert review plus checks on submission readiness.",
    includes: [
      "All features of the Basic Package",
      "Formatting as per the author's target journal's submission guidelines",
      "Pre-submission compliance checklist (covering ethics, references, figures, disclosures, etc.)",
      "Assessment of the author's manuscript against the journal's scope",
    ],
    optionalAddOns: [
      "Adaptation of reference style (APA, AMA, Vancouver, etc.)",
      "Formatting of the authors' information and metadata.",
    ],
    turnaround: "7 working days.",
  },
  {
    id: "comprehensive",
    letter: "C",
    name: "Comprehensive",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    badgeBg: "bg-[#f57c7c]", // Soft red/coral badge
    headerBg: "bg-[#7a3e1d]", // Dark brown header line
    cardBg: "bg-[#d8be91]", // Light tan/gold body
    idealFor:
      "Authors aiming to submit to high-impact journals and requiring full editing support.",
    includes: [
      "All features in the Advanced Package",
      "Support with critical revisions to address feedback",
      "Develop a customised cover letter for the journal submission",
      "Check for plagiarism and provide a similarity report (Turnitin or iThenticate)",
      "Final review from an editor for flow, coherence, and whether the manuscript fits the journal",
    ],
    optionalAddOns: [
      "Drafting of a response letter for journal reviewers",
      "Language editing and technical proofreading",
    ],
    turnaround: "10 working days.",
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
    journalCover: "/images/testimonials/clinical-practice.jpg",
  },
  {
    id: 2,
    quote:
      '"I was very impressed with the thorough peer review I received. They even pointed out statistical flaws in my results section. The feedback improved the clarity and impact of my manuscript."',
    author: "DR. RAMESH NAIR",
    role: "Clinical Epidemiologist",
    journalCover: "/images/testimonials/clinical-problem-solving.jpg",
  },
];

export default function PackagesAndTestimonialsSection() {
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`group flex flex-col rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:bg-black hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${pkg.cardBg}`}
            >
              {/* Header Box */}
              <div className="bg-white p-5 border-b border-gray-100 flex items-start space-x-3 transition-colors duration-300">
                {/* Letter Circle Badge */}
                <div
                  className={`w-12 h-12 rounded-full ${pkg.badgeBg} text-gray-800 flex items-center justify-center font-extrabold text-xl shrink-0 shadow-inner`}
                >
                  {pkg.letter}
                </div>

                {/* Package Name & Subtitle */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-black transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-600 tracking-tight leading-tight mt-0.5">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Decorative Header Bar */}
              <div className={`h-2 ${pkg.headerBg}`} />

              {/* Package Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-5 text-xs sm:text-sm">
                <div className="space-y-4">
                  {/* Ideal For */}
                  <div className="flex items-start space-x-2">
                    <ArrowIcon className="mt-0.5 shrink-0 group-hover:text-white" />
                    <div>
                      <strong className="font-bold text-gray-900 group-hover:text-white">
                        Ideal for:
                      </strong>
                      <p className="text-gray-800 group-hover:text-gray-200 mt-0.5 leading-snug">
                        {pkg.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="flex items-start space-x-2">
                    <ArrowIcon className="mt-0.5 shrink-0 group-hover:text-white" />
                    <div className="flex-1">
                      <strong className="font-bold text-gray-900 group-hover:text-white">
                        Includes:
                      </strong>
                      <ul className="mt-1 space-y-2 text-gray-800 group-hover:text-gray-200 leading-snug">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Optional Add-ons */}
                  {pkg.optionalAddOns && pkg.optionalAddOns.length > 0 && (
                    <div className="flex items-start space-x-2 pt-1">
                      <ArrowIcon className="mt-0.5 shrink-0 group-hover:text-white" />
                      <div className="flex-1">
                        <strong className="font-bold text-gray-900 group-hover:text-white">
                          Optional Add-ons:
                        </strong>
                        <ul className="mt-1 space-y-1.5 text-gray-800 group-hover:text-gray-200 leading-snug">
                          {pkg.optionalAddOns.map((addon, idx) => (
                            <li key={idx}>{addon}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Turnaround Time */}
                <div className="flex items-start space-x-2 pt-2 border-t border-black/10 group-hover:border-white/20">
                  <ArrowIcon className="mt-0.5 shrink-0 group-hover:text-white" />
                  <div>
                    <strong className="font-bold text-gray-900 group-hover:text-white">
                      Turnaround:
                    </strong>
                    <p className="text-gray-900 group-hover:text-gray-100 font-medium mt-0.5">
                      {pkg.turnaround}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width "Get a Free Quote" Button */}
        <div className="w-full text-center">
          <GetFreeQuoteButton/>
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
              onClick={() =>
                setActiveTestimonialPage((prev) => (prev === 0 ? 1 : 0))
              }
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors shrink-0"
              aria-label="Previous testimonial"
            >
              &#10094;
            </button>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {testimonialsData.map((item) => (
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
              onClick={() =>
                setActiveTestimonialPage((prev) => (prev === 0 ? 1 : 0))
              }
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors shrink-0"
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <span
              onClick={() => setActiveTestimonialPage(0)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                activeTestimonialPage === 0 ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
            <span
              onClick={() => setActiveTestimonialPage(1)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                activeTestimonialPage === 1 ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
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

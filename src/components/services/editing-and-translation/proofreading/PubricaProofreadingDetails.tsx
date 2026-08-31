"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

// ==========================================
// 1. REASONS ACCORDION DATA
// ==========================================
const reasonsList = [
  "20+ years of experience in professional proofreading services",
  "Trusted globally for scientific proofreading and research paper proofreading",
  "High accuracy in medical proofreading services",
  "Fast turnaround for online proofreading services",
  "Secure and confidential manuscript proofreading services for researchers",
];

// ==========================================
// 2. PACKAGES DATA
// ==========================================
const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/proofreading/Basic.webp",
    title: "Basic Package",
    subtitle: "At A Rate Of 0.08 Per Word With A Minimum Of 1000 Words",
    idealFor: "Draft documents, assignments, general content",
    includes: [
      "Grammar, spelling, punctuation corrections",
      "Basic formatting consistency",
    ],
    addOns: [
      "Structural feedback",
      "Basic style check",
    ],
    turnaround: "2–4 business days",
    cardBgColor: "#dce5e7",
    titleColor: "#003B46",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard Package",
    subtitle: "At A Rate Of 0.12 Per Word, With A Minimum Of 1000 Words",
    idealFor: "Academic papers, reports, manuscripts",
    includes: [
      "All Basic Package features",
      "Style and consistency improvements",
      "Minor clarity enhancements",
    ],
    addOns: ["Reference formatting", "Word count reduction"],
    turnaround: "3–5 business days",
    cardBgColor: "#e3d5ea",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Premium Package",
    subtitle: "At A Rate Of 0.16 Per Word, With A Minimum Of 1000 Words",
    idealFor: "Journal submissions, high-impact documents",
    includes: [
      "All Standard Package features",
      "Journal formatting compliance",
      "Multiple quality checks",
    ],
    addOns: ["Multiple revision rounds", "Submission support"],
    turnaround: "3–5 business days",
    cardBgColor: "#e5d5b7",
    titleColor: "#805826",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function PubricaProofreadingDetails() {
  const [reasonsOpen, setReasonsOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const sampleLinks = [
    {
      title: "Sample Work 1",
      href: "/insights/sample-work/alcohol-related-liver-disease-management/",
    },
    {
      title: "Sample Work 2",
      href: "/insights/sample-work/management-of-neurogenic-shock-outside-of-the-hospital/",
    },
    {
      title: "Sample Work 3",
      href: "/insights/sample-work/phenotypic-variations-of-atopic-dermatitis-a-systemic-review-of-dupilumab-efficacy-and-safety/",
    },
    {
      title: "Sample Work 4",
      href: "/insights/sample-work/skeletal-muscle-mass-index-versus-bioelectrical-impedance-analysis/",
    },
  ];
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: REASONS WHY AUTHORS CHOOSE   */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0a3233] text-white rounded-sm shadow-md overflow-hidden border border-[#062425]">
          {/* Accordion Header */}
          <button
            type="button"
            onClick={() => setReasonsOpen(!reasonsOpen)}
            className="w-full flex items-center justify-start p-4 text-left font-bold text-sm sm:text-base hover:bg-[#0d3f40] transition-colors cursor-pointer"
          >
            <span className="mr-3 text-lg font-mono leading-none">
              {reasonsOpen ? "−" : "+"}
            </span>
            <span>
              Reasons Why Authors Choose Pubrica's Proofreading Services
            </span>
          </button>

          {/* Collapsible Content */}
          {reasonsOpen && (
            <div className="p-6 bg-white text-slate-700 border-t border-slate-200">
              <ul className="space-y-2 text-sm sm:text-base font-medium">
                {reasonsList.map((reason, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-slate-800 rounded-full mt-2 mr-3 shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ======================================= */}
      {/* SECTION 2: SAMPLE WORK SHOWCASE         */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Proofreading Services Sample Work
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl mx-auto leading-relaxed">
            Explore our proofreading samples that demonstrate error correction,
            formatting consistency, and high-quality output for academic and
            professional documents.
          </p>
        </div>

        {/* Sample Paper Container */}
        <div className="bg-slate-100 rounded-md border border-slate-300 shadow-lg overflow-hidden">
          {/* Card Top Header */}
          <div className="bg-slate-200 p-4 sm:px-6 flex items-center justify-between border-b border-slate-300">
            <h3 className="text-lg sm:text-xl font-bold text-[#003B46]">
              A sample of our Proofreading services
            </h3>

            {/* Hover Menu Trigger Container */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="bg-[#003B46] hover:bg-[#002B33] text-white font-semibold px-6 py-2 rounded-full text-xs sm:text-sm transition-colors shadow-md inline-flex items-center gap-1 cursor-pointer focus:outline-none">
                View More
              </button>

              {/* Dropdown Box matching screenshot style */}
              {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 sm:w-64 bg-slate-100/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-2xl p-3 z-50">
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-slate-100/95 border-t border-l border-slate-200 rotate-45"></div>

                  <div className="relative space-y-2 z-10">
                    {sampleLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-center py-2.5 px-3 rounded-lg bg-white/80 hover:bg-white text-slate-700 hover:text-[#003B46] text-xs sm:text-sm font-medium transition-all shadow-sm border border-slate-200/50 hover:shadow"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sample Document Body Area */}
          <div className="bg-white p-4 sm:p-6 relative border-b border-slate-200">
            <div className="relative w-full min-h-[350px] sm:min-h-[480px] bg-white rounded-lg border border-slate-200 overflow-hidden">
              <Image
                src="/images/editing-and-translation/proofreading/Proofreading.webp"
                alt="Proofreading services sample work"
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Card Footer Copyright */}
          <div className="bg-white p-3 text-center text-[11px] text-slate-500">
            Copyright © 2026 pubrica. No part of this document may be published
            without permission of the author
          </div>
        </div>
      </section>
      {/* ======================================= */}
      {/* SECTION 3: OUR PACKAGES                */}
      {/* ======================================= */}
      {/* ======================================= */}
      {/* SECTION 3: OUR PACKAGES                */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <CommonPackages
          title="Proofreading Services – Our Packages"
          packages={packages}
        />

        {/* Extra Package Details List (Tighter Spacing) */}
        <ul className="mt-4 space-y-1 text-slate-800 text-sm sm:text-base font-medium">
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 bg-slate-800 rounded-full mt-2 mr-3 shrink-0" />
            <span>
              <strong>Fastest Delivery:</strong> Additional 20% of the total project cost
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 bg-slate-800 rounded-full mt-2 mr-3 shrink-0" />
            <span>
              <strong>Plagiarism Report:</strong> $ 100 extra
            </span>
          </li>
        </ul>

        {/* Centered CTA Button (Brought Closer) */}
        <div className="mt-4 flex justify-center">
          <GetFreeQuoteButton />
        </div>
      </section>
    </div>
  );
}

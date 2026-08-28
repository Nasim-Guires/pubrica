"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

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
interface PackageItem {
  id: string;
  badgeLetter: string;
  iconSrc: string;
  title: string;
  rateText: string;
  bgColor: string;
  borderColor: string;
  idealFor: string;
  includes: string[];
  addons: string[];
  turnaroundTime: string;
}

const packagesData: PackageItem[] = [
  {
    id: "basic",
    badgeLetter: "B",
    iconSrc: "/images/editing-and-translation/proofreading/Basic.webp",
    title: "Basic Package",
    rateText: "At A Rate Of 0.08 Per Word With A Minimum Of 1000 Words",
    bgColor: "bg-[#dce5e7]",
    borderColor: "border-[#b8c9cc]",
    idealFor: "Draft documents, assignments, general content",
    includes: [
      "Grammar, spelling, punctuation corrections",
      "Basic formatting consistency",
    ],
    addons: [
      "Grammar, spelling, punctuation corrections",
      "Basic formatting consistency",
    ],
    turnaroundTime: "2–4 business days",
  },
  {
    id: "standard",
    badgeLetter: "S",
    iconSrc: "/images/publication-support/poster-preparation/S.png",
    title: "Standard Package",
    rateText: "At A Rate Of 0.12 Per Word, With A Minimum Of 1000 Words",
    bgColor: "bg-[#e3d5ea]",
    borderColor: "border-[#cfb7db]",
    idealFor: "Academic papers, reports, manuscripts",
    includes: [
      "All Basic Package features",
      "Style and consistency improvements",
      "Minor clarity enhancements",
    ],
    addons: ["Reference formatting", "Word count reduction"],
    turnaroundTime: "3–5 business days",
  },
  {
    id: "premium",
    badgeLetter: "P",
    iconSrc: "/images/editing-and-translation/pro.webp",
    title: "Premium Package",
    rateText: "At A Rate Of 0.16 Per Word, With A Minimum Of 1000 Words",
    bgColor: "bg-[#e5d5b7]",
    borderColor: "border-[#d4bd94]",
    idealFor: "Journal submissions, high-impact documents",
    includes: [
      "All Standard Package features",
      "Journal formatting compliance",
      "Multiple quality checks",
    ],
    addons: ["Multiple revision rounds", "Submission support"],
    turnaroundTime: "3–5 business days",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function PubricaProofreadingDetails() {
  const [reasonsOpen, setReasonsOpen] = useState(true);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: REASONS WHY AUTHORS CHOOSE   */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0a3233] text-white rounded-xs shadow-md overflow-hidden border border-[#062425]">
          {/* Accordion Header */}
          <button
            type="button"
            onClick={() => setReasonsOpen(!reasonsOpen)}
            className="w-full flex items-center justify-start p-4 text-left font-bold text-sm sm:text-base hover:bg-[#0d3f40] transition-colors"
          >
            <span className="mr-3 text-lg font-mono">
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
            <Link
              href="/insights/sample-work"
              className="bg-[#b80000] hover:bg-[#9e0000] text-white font-bold px-5 py-2 rounded-md text-xs sm:text-sm transition-colors shadow-2xs"
            >
              View More
            </Link>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] text-center">
          Proofreading Services – Our Packages
        </h2>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.bgColor} border ${pkg.borderColor} rounded-xs p-6 shadow-xs flex flex-col justify-between space-y-6`}
            >
              <div className="space-y-5">
                {/* Package Header */}
                <div className="flex items-start space-x-3">
                  {/* Badge Letter Icon */}
                  <div className="w-12 h-12 rounded-full bg-white/70 border border-slate-300 flex items-center justify-center font-bold text-xl text-slate-700 shrink-0 shadow-2xs overflow-hidden">
                    <Image
                      src={pkg.iconSrc}
                      alt={`${pkg.title} icon`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-700 mt-1">
                      {pkg.rateText}
                    </p>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="space-y-1">
                  <div className="flex items-center text-xs font-bold text-slate-900">
                    <ArrowRightCircle className="w-4 h-4 mr-1.5 shrink-0 text-slate-900" />
                    <span>Ideal For:</span>
                  </div>
                  <p className="text-xs text-slate-700 pl-5.5">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Includes */}
                <div className="space-y-1.5">
                  <div className="flex items-center text-xs font-bold text-slate-900">
                    <ArrowRightCircle className="w-4 h-4 mr-1.5 shrink-0 text-slate-900" />
                    <span>Includes:</span>
                  </div>
                  <ul className="text-xs text-slate-700 pl-5.5 space-y-1">
                    {pkg.includes.map((inc, i) => (
                      <li key={i}>• {inc}</li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                <div className="space-y-1.5">
                  <div className="flex items-center text-xs font-bold text-slate-900">
                    <ArrowRightCircle className="w-4 h-4 mr-1.5 shrink-0 text-slate-900" />
                    <span>Add-ons:</span>
                  </div>
                  <ul className="text-xs text-slate-700 pl-5.5 space-y-1">
                    {pkg.addons.map((add, i) => (
                      <li key={i}>• {add}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Turnaround Time */}
              <div className="pt-4 border-t border-slate-400/30 flex items-center text-xs font-bold text-slate-900">
                <ArrowRightCircle className="w-4 h-4 mr-1.5 shrink-0 text-slate-900" />
                <span>Turnaround Time:</span>
                <span className="font-medium text-slate-800 ml-1">
                  {pkg.turnaroundTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Add-ons Notice Box */}
        <div className="bg-slate-200/80 border border-slate-300 p-4 rounded-xs text-xs text-slate-700 space-y-1">
          <p>
            <strong className="text-slate-900">• Fastest Delivery:</strong>{" "}
            Additional 20% of the total project cost
          </p>
          <p>
            <strong className="text-slate-900">• Plagiarism Report:</strong>{" "}
            $100 extra
          </p>
        </div>

        {/* Full-width Free Quote Banner CTA Button */}
        <div className="pt-2">
          <GetFreeQuoteButton/>
        </div>
      </section>
    </div>
  );
}

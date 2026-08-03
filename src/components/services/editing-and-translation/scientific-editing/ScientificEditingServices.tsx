"use client";

import React from "react";
import Link from "next/link";
import {
  FiBook,
  FiFileText,
  FiLayers,
  FiTv,
  FiEdit,
  FiSettings,
  FiCheckSquare,
  FiBookOpen,
  FiCrosshair,
  FiSearch,
  FiGrid,
  FiArrowRightCircle,
} from "react-icons/fi";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// DATA DEFINITIONS
// ==========================================

// 1. Document Types Grid
interface DocumentType {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const documentTypes: DocumentType[] = [
  {
    id: "journal-manuscripts",
    title: "Journal manuscripts",
    icon: <FiBook className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "grants",
    title: "Grants/NIH, NSF, and private foundation grants/grant revisions",
    icon: <FiFileText className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "proposals",
    title: "Proposals",
    icon: <FiLayers className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "ppt-slides",
    title: "PowerPoint slides",
    icon: <FiTv className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "theses",
    title: "Theses",
    icon: <FiEdit className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "technical-docs",
    title: "Technical documents",
    icon: <FiSettings className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "abstracts",
    title: "Abstracts",
    icon: <FiCheckSquare className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "book-chapters",
    title: "Book chapters",
    icon: <FiBookOpen className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "medical-editing",
    title: "Medical editing",
    icon: <FiCrosshair className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "medical-proofreading",
    title: "Medical manuscript proofreading",
    icon: <FiSearch className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "conference-posters",
    title: "Conference posters",
    icon: <FiGrid className="w-7 h-7 text-indigo-900" />,
  },
];

// 2. Packages Pricing Tiers
interface PricingPackage {
  id: string;
  badgeLetter: string;
  name: string;
  bgColor: string;
  headerBadgeBg: string;
  idealFor: string;
  includes: string[];
  turnaroundTime: string;
}

const packages: PricingPackage[] = [
  {
    id: "standard",
    badgeLetter: "S",
    name: "Standard",
    bgColor: "bg-slate-200/80 border-slate-300",
    headerBadgeBg: "bg-amber-100 text-amber-700 border-amber-300",
    idealFor: "Early-stage manuscripts, pre-submission refinement.",
    includes: [
      "Grammar, punctuation, and spelling corrections",
      "Sentence restructuring for clarity and readability",
      "Basic adherence to journal formatting",
    ],
    turnaroundTime: "5–7 business days",
  },
  {
    id: "advanced",
    badgeLetter: "A",
    name: "Advanced",
    bgColor: "bg-purple-100/70 border-purple-200",
    headerBadgeBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
    idealFor: "Manuscripts requiring in-depth scientific review.",
    includes: [
      "All features of the Standard Package",
      "Critical review of methodology, results, and discussion clarity",
      "Compliance with journal-specific guidelines and formatting",
      "Reference formatting and consistency checks",
    ],
    turnaroundTime: "7–10 business days",
  },
  {
    id: "premium",
    badgeLetter: "P",
    name: "Premium/Publication-Ready",
    bgColor: "bg-amber-100/60 border-amber-200",
    headerBadgeBg: "bg-sky-100 text-sky-700 border-sky-300",
    idealFor: "High-impact journals and rigorous peer-review submissions.",
    includes: [
      "All features of the Advanced Package",
      "Comprehensive scientific content editing for logic and flow",
      "Technical accuracy verification",
      "Formatting for figures, tables, and references per journal requirements",
      "Response-to-reviewer support (optional add-on)",
    ],
    turnaroundTime: "10–14 business days",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ScientificEditingServices() {
  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================== */}
      {/* SECTION 1: WHAT TYPES OF DOCUMENTS DO WE EDIT?             */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] text-center mb-10 tracking-tight">
          What Types of Documents Do We Edit?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {doc.icon}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0c373b] transition-colors leading-snug">
                {doc.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 2: OUR PACKAGES                                   */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] mb-3 tracking-tight">
            Scientific Editing Services – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Pubrica, we offer comprehensive scientific editing packages
            designed to enhance the clarity, accuracy, and impact of your
            manuscript. Whether you are preparing for submission to a
            high-impact journal or refining a thesis, our expert editors ensure
            your work meets international standards.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg border p-6 flex flex-col justify-between shadow-xs transition-shadow duration-300 hover:shadow-md ${pkg.bgColor}`}
            >
              <div>
                {/* Header Badge & Title */}
                <div className="bg-white rounded-md p-3 mb-6 shadow-xs flex items-center space-x-3 border border-slate-200">
                  <div
                    className={`w-9 h-9 rounded-full font-extrabold flex items-center justify-center text-lg border ${pkg.headerBadgeBg}`}
                  >
                    {pkg.badgeLetter}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900">
                    {pkg.name}
                  </h3>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6 flex items-start space-x-2">
                  <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                    <strong className="font-bold">Ideal For:</strong>{" "}
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Included Points */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      Includes:
                    </span>
                  </div>
                  <ul className="space-y-2.5 pl-7">
                    {pkg.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-700 leading-snug list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Turnaround Time */}
              <div className="pt-4 border-t border-slate-300/60 flex items-start space-x-2">
                <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-900">
                  <strong className="font-bold">Turnaround Time:</strong>{" "}
                  {pkg.turnaroundTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="w-full flex justify-center">
         <GetFreeQuoteButton/>
        </div>
      </section>
    </div>
  );
}

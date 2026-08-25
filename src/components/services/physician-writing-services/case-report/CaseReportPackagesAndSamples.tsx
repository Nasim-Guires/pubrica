"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// HELPER FUNCTIONS
// ==========================================
const getGridColsClass = (count: number) => {
  if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1";
};

// ==========================================
// DATA: PACKAGES (Exact colors from image 2)
// ==========================================
const packagesData = [
  {
    tierLetter: "S",
    title: "Starter",
    subtitle: "Ideal For First-Time Authors",
    circleBg: "bg-[#719999]", // Teal circle background
    bodyBg: "#bcd1cf",       // Sage/Teal background
    titleColor: "#1d4e4e",
    idealFor:
      "Interns, junior residents, and first-time writers aiming for local or institutional journals.",
    includes: [
      "Case report structure planning (as per CARE checklist)",
      "Basic literature support (5–7 references)",
      "Writing assistance (up to 1,000 words)",
      "Grammar check & language polishing",
      "Referencing in APA or Vancouver style",
      "1 round of revision",
    ],
    optionalAddOns: [
      "Plagiarism check report",
      "Consent form drafting",
      "Figure/table formatting",
      "Journal selection (3 options)",
    ],
    turnaround: "5–7 business days",
  },
  {
    tierLetter: "A",
    title: "Advanced",
    subtitle: "For Mid-Tier Or Indexed Journals",
    circleBg: "bg-[#836399]", // Purple circle background
    bodyBg: "#d5bfe3",       // Lavender/Purple background
    titleColor: "#582a73",
    idealFor:
      "Clinicians, faculty, or consultants submitting to Scopus- or PubMed-indexed journals with moderate editorial requirements.",
    includes: [
      "Complete case report writing (up to 2,000 words)",
      "In-depth literature review (10–15 references)",
      "Discussion section with scientific insights & data correlation",
      "Figure/image placement (client-provided)",
      "Journal-specific formatting (APA, AMA, Vancouver)",
      "2 revision rounds",
    ],
    optionalAddOns: [
      "Peer review by subject-matter expert (1 round)",
      "Journal submission support",
      "Response-to-reviewer preparation",
    ],
    turnaround: "7–10 business days",
  },
  {
    tierLetter: "E",
    title: "Elite",
    subtitle: "Comprehensive & Premium",
    circleBg: "bg-[#c49253]", // Gold circle background
    bodyBg: "#dcb98a",       // Warm Tan/Gold background
    titleColor: "#664013",
    idealFor:
      "Consultants, surgeons, or hospital units aiming to publish in high-impact journals (e.g., BMJ Case Reports, NEJM Case Reports) or requiring publication support end-to-end.",
    includes: [
      "Full case report development with CARE compliance",
      "Professional image editing, figure legends & placement",
      "Literature integration (15–20 references, high-impact sources)",
      "Plagiarism check via Turnitin",
      "Advanced reference management (EndNote, Mendeley, Zotero)",
      "Journal shortlisting & submission strategy",
      "Custom cover letter for journal editors",
      "Reviewer comment response drafting (if needed)",
      "Unlimited revisions within 30 days",
    ],
    optionalAddOns: [
      "End-to-end journal submission & correspondence",
      "Fast-track delivery (3–5 days)",
      "Slide deck creation for conference presentation",
    ],
    turnaround: "10–12 business days",
  },
];

export default function CaseReportPackagesAndSamples() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ==========================================
            1. SAMPLE WORK CALLOUT BANNER
           ========================================== */}
        <section className="bg-[#f0faf7] border border-[#e0f2fe] rounded-sm p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Left Image Column */}
            <div className="w-full md:w-2/5 shrink-0 flex justify-center">
              <div className="relative w-full max-w-[320px] h-[260px] sm:h-[300px] shadow-md rounded-xs overflow-hidden">
                <Image
                  src="/images/physician-writing-services/case-report/Case-Report-Writing-Sample-Work.webp"
                  alt="Case Report Writing Service Sample Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="w-full md:w-3/5 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  Case Report Writing Service Sample Work
                </h3>
                <button className="bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors shadow-xs">
                  Discover More
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  Download the full Report Now
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Explore our{" "}
                  <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                    case report writing samples
                  </Link>
                  , meticulously crafted to align with{" "}
                  <Link href="/services/publication-support/journal-submission" className="text-sky-600 hover:underline">
                    journal submission
                  </Link>{" "}
                  criteria, clinical accuracy standards, and expedited publication
                  timelines.
                </p>
                <div className="pt-1">
                  <button className="bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors shadow-xs">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            2. PACKAGES SECTION
           ========================================== */}
        <section className="py-16 px-4 md:px-8 bg-white w-full text-left font-sans">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b38] mb-3">
              Case Report Writing Packages
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
              Explore our case report manuscript writing samples aligned with journal
              requirements and clinical accuracy. Our three-tiered packages cater to
              first-time submitters, experienced clinicians, and high-impact journal
              targets. All reports follow CARE guidelines and are tailored to your
              chosen journal.
            </p>
          </div>

          {/* Packages Container */}
          <div className="relative max-w-7xl mx-auto pb-10">
            <div className={`grid ${getGridColsClass(packagesData.length)} gap-4 items-stretch`}>
              {packagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-300/60 transition-all hover:shadow-lg"
                  style={{ backgroundColor: pkg.bodyBg }}
                >
                  {/* White Header Bar */}
                  <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-100 min-h-[85px]">
                    <div
                      className={`w-10 h-10 rounded-full ${pkg.circleBg} text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {pkg.tierLetter}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base md:text-lg leading-tight"
                        style={{ color: pkg.titleColor }}
                      >
                        {pkg.title}
                      </h3>
                      {pkg.subtitle && (
                        <p className="text-xs text-gray-500 font-medium leading-tight mt-0.5">
                          {pkg.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Colored Package Content Body */}
                  <div className="p-5 flex flex-col flex-grow text-gray-900 text-xs md:text-sm">
                    {/* Ideal For */}
                    <div className="mb-4">
                      <div className="font-bold mb-1 flex items-start gap-1.5 text-gray-900">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                          ➔
                        </span>
                        <span>
                          Ideal for:{" "}
                          <span className="font-normal">{pkg.idealFor}</span>
                        </span>
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="mb-4 flex-grow">
                      <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                          ➔
                        </span>
                        <span>Includes:</span>
                      </div>
                      <ul className="pl-6 space-y-2 list-disc marker:text-gray-900">
                        {pkg.includes.map((item, iIdx) => (
                          <li key={iIdx} className="leading-snug text-gray-900 font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional Add-ons */}
                    {pkg.optionalAddOns && pkg.optionalAddOns.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-gray-900/20">
                        <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                            ➔
                          </span>
                          <span>Optional Add-ons:</span>
                        </div>
                        <ul className="pl-6 space-y-1.5 list-disc marker:text-gray-800">
                          {pkg.optionalAddOns.map((addon, aIdx) => (
                            <li key={aIdx} className="leading-snug text-gray-900 font-medium">
                              {addon}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Turnaround Time */}
                    {pkg.turnaround && (
                      <div className="pt-2 border-t border-gray-900/20">
                        <div className="font-bold flex items-start gap-1.5">
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                            ➔
                          </span>
                          <span>
                            Turnaround:{" "}
                            <span className="font-normal">{pkg.turnaround}</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 text-center">
              <GetFreeQuoteButton />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
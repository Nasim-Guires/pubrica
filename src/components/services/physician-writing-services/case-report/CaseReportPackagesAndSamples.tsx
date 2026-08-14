"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// DATA: PACKAGES
// ==========================================
const packagesData = [
  {
    tierLetter: "S",
    title: "Starter",
    subtitle: "Ideal For First-Time Authors",
    headerBg: "bg-[#7c9a96]", // Muted greenish-teal
    bodyBg: "bg-[#d8e3e1]",
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
    headerBg: "bg-[#8b76a6]", // Purple-lavender
    bodyBg: "bg-[#e2daeb]",
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
    headerBg: "bg-[#c4a163]", // Warm gold/brown
    bodyBg: "bg-[#f0e6d2]",
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
                  src="/images/physician-writing-services/case-report/Case-Report-Writing-Sample-Work.webp" // Replace with your image path
                  alt="Case Report Writing Service Sample Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="w-full md:w-3/5 space-y-6">
              {/* Block 1 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  Case Report Writing Service Sample Work
                </h3>
                <button className="bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors shadow-xs">
                  Discover More
                </button>
              </div>

              {/* Block 2 */}
              <div className="space-y-3">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  Download the full Report Now
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Explore our{" "}
                  <Link href="#" className="text-sky-600 hover:underline">
                    case report writing samples
                  </Link>
                  , meticulously crafted to align with{" "}
                  <Link href="#" className="text-sky-600 hover:underline">
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
        <section className="space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b38]">
              Case Report Writing Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 max-w-5xl leading-relaxed">
              Explore our case report manuscript writing samples aligned with journal
              requirements and clinical accuracy. Our three-tiered packages cater to
              first-time submitters, experienced clinicians, and high-impact journal
              targets. All reports follow CARE guidelines and are tailored to your
              chosen journal.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {packagesData.map((pkg, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-sm overflow-hidden shadow-sm border border-slate-200/80 bg-white"
              >
                {/* Header Badge & Title */}
                <div className={`${pkg.bodyBg} p-5 border-b border-slate-200/50`}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${pkg.headerBg} text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {pkg.tierLetter}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className={`flex-1 p-5 ${pkg.bodyBg} space-y-6 text-xs sm:text-[13px] text-slate-800 leading-snug`}>
                  
                  {/* Ideal For */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>Ideal for:</span>
                    </div>
                    <p className="pl-5 text-slate-700">{pkg.idealFor}</p>
                  </div>

                  {/* Includes */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>Includes:</span>
                    </div>
                    <ul className="pl-5 space-y-2.5 list-none">
                      {pkg.includes.map((item, iIdx) => (
                        <li key={iIdx} className="text-slate-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons */}
                  <div className="space-y-2 pt-2 border-t border-slate-300/40">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>Optional Add-ons:</span>
                    </div>
                    <ul className="pl-5 space-y-2 list-none text-slate-700">
                      {pkg.optionalAddOns.map((addon, aIdx) => (
                        <li key={aIdx}>{addon}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Turnaround */}
                  <div className="pt-2 border-t border-slate-300/40">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>Turnaround:</span>
                    </div>
                    <p className="pl-5 font-semibold text-slate-900 mt-0.5">
                      {pkg.turnaround}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center pt-6">
           <GetFreeQuoteButton/>
          </div>
        </section>

      </div>
    </div>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PackageFeature {
  text: string;
}

interface PackageItem {
  id: string;
  badgeLetter: string;
  badgeBgColor: string;
  badgeTextColor: string;
  title: string;
  subtitle: string;
  cardHeaderBg: string;
  cardBodyBg: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
}

const packages: PackageItem[] = [
  {
    id: "silver",
    badgeLetter: "S",
    badgeBgColor: "bg-amber-100 border-amber-300",
    badgeTextColor: "text-amber-800",
    title: "Silver",
    subtitle: "Budget Publication-Support Package",
    cardHeaderBg: "bg-slate-50",
    cardBodyBg: "bg-[#dbe3e3]",
    idealFor:
      "Students, early-career researchers, and authors submitting to institutional repositories or non-indexed journals.",
    includes: [
      "Plagiarism check using advanced detection software",
      "Similarity report with percentage breakdown",
      "Highlighted matched content",
      "General recommendations for revisions",
    ],
    optionalAddOns: [
      "Rewriting service for flagged sections",
      "Reference cross-verification",
      "Certificate of originality",
    ],
    turnaround: "2–3 working days",
  },
  {
    id: "gold",
    badgeLetter: "G",
    badgeBgColor: "bg-emerald-100 border-emerald-300",
    badgeTextColor: "text-emerald-800",
    title: "Gold",
    subtitle: "End-To-End Publication-Focused Support For Up To Two Journals",
    cardHeaderBg: "bg-slate-50",
    cardBodyBg: "bg-[#d4c3dc]",
    idealFor:
      "Researchers submitting to peer-reviewed, Scopus/WoS-indexed journals or preparing original research, case reports, or reviews.",
    includes: [
      "Comprehensive plagiarism screening",
      "Detailed similarity report with context-based interpretation",
      "Manual editorial review of flagged content",
      "Suggestions for rewriting and proper citation",
      "One free recheck after revisions",
    ],
    optionalAddOns: [
      "Language and grammar check",
      "Formatting as per journal guidelines",
      "Reference reformatting",
    ],
    turnaround: "3–4 working days",
  },
  {
    id: "premium",
    badgeLetter: "P",
    badgeBgColor: "bg-rose-100 border-rose-300",
    badgeTextColor: "text-rose-800",
    title: "Premium",
    subtitle:
      "High-End Publication Support, Including A Complete Technical Review",
    cardHeaderBg: "bg-slate-50",
    cardBodyBg: "bg-[#cdb78e]",
    idealFor:
      "Senior researchers, medical writers, and authors preparing manuscripts for high-impact factor journals (SCI, PubMed, Elsevier, Springer).",
    includes: [
      "In-depth plagiarism analysis (software + expert manual review)",
      "Contextual assessment of similarities",
      "Tracked changes with rewriting suggestions",
      "Citation corrections and formatting",
      "Summary report with journal compliance check",
      "Unlimited rechecks (within 10 days)",
    ],
    optionalAddOns: [
      "Technical editing (scientific content clarity)",
      "Journal recommendation report",
      "Response letter draft for ethical clearance",
    ],
    turnaround: "4–5 working days",
  },
];

export default function PlagiarismServicePackages() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* SECTION 1: Why Pubrica's Plagiarism Checker Report Service? */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
          Why Pubrica&apos;s Plagiarism Checker Report Service?
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
          Pubrica&apos;s journal plagiarism report and AI authorship detection
          eliminate accidental plagiarism from research manuscripts quickly,
          reducing the chances of desk rejection. Researchers choose
          Pubrica&apos;s plagiarism report because:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Bullet points */}
          <div className="lg:col-span-7">
            <ul className="space-y-4 list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed marker:text-red-600">
              <li className="pl-1">
                It provides fast and thorough{" "}
                <Link
                  href="#plagiarism-checking"
                  className="text-sky-600 hover:underline"
                >
                  plagiarism checking
                </Link>{" "}
                using iThenticate software across 82 million academic resources.
              </li>
              <li className="pl-1">
                Clear reports make identifying and correcting plagiarism easy,
                along with expert advice on next steps.
              </li>
              <li className="pl-1">
                The service can conduct single or bulk journal plagiarism checks
                for individual researchers, labs, university departments, and
                research groups.
              </li>
            </ul>
          </div>

          {/* Laptop Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-[220px] sm:h-[260px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/laptop-plagiarism-report.jpg"
                alt="Plagiarism Report Analysis on Laptop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Green Box: Sample Work & Download Report */}
        <div className="bg-[#f0faf5] rounded-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-emerald-100">
          {/* Left Medical/Research Image */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[240px] h-[220px] rounded overflow-hidden shadow-sm">
              <Image
                src="/images/researchers-review.jpg"
                alt="Researchers reviewing document"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text & CTA Content */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Plagiarism Check Service Sample Work
              </h3>
              <Link
                href="#sample-work"
                className="inline-block bg-black hover:bg-slate-800 text-white font-medium text-xs px-8 py-2.5 rounded-full transition-colors"
              >
                Discover More
              </Link>
            </div>

            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4 max-w-xl">
                Check out our plagiarism and AI detection sample reports built
                to meet your institution&apos;s originality standards, ethical
                guidelines, and submission deadlines.
              </p>
              <Link
                href="#download-report"
                className="inline-block bg-black hover:bg-slate-800 text-white font-medium text-xs px-8 py-2.5 rounded-full transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Packages Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
            Plagiarism Check and Algorithm-generated text detection Service
            Packages
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            Selecting the correct package will allow your manuscript to be
            evaluated comprehensively and ethically for journal submission,
            whether you need only a basic plagiarism report, machine-authored
            document analysis, or complete editorial support for rewriting,
            citation corrections. Pubrica provides tailor-made plagiarism check
            packages that are based on your manuscript complexity and your
            requirements for the journal.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-t-md overflow-hidden border border-slate-300 shadow-sm"
            >
              {/* Header Box */}
              <div
                className={`${pkg.cardHeaderBg} p-5 border-b border-slate-300 flex items-center space-x-4 min-h-[100px]`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 ${pkg.badgeBgColor} ${pkg.badgeTextColor} font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm`}
                >
                  {pkg.badgeLetter}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-snug mt-1">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Body Content Box */}
              <div
                className={`${pkg.cardBodyBg} p-5 flex-1 flex flex-col justify-between text-xs md:text-sm space-y-6 text-slate-900`}
              >
                <div className="space-y-4">
                  {/* Ideal for */}
                  <div>
                    <div className="flex items-start space-x-2 font-bold mb-1">
                      <span className="text-black font-bold">➔</span>
                      <span>Ideal for:</span>
                    </div>
                    <p className="pl-5 text-slate-800 leading-relaxed">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-start space-x-2 font-bold mb-1">
                      <span className="text-black font-bold">➔</span>
                      <span>Includes:</span>
                    </div>
                    <ul className="pl-5 space-y-2 list-disc marker:text-black">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons */}
                  <div>
                    <div className="flex items-start space-x-2 font-bold mb-1">
                      <span className="text-black font-bold">➔</span>
                      <span>Optional Add-ons:</span>
                    </div>
                    <ul className="pl-5 space-y-2 list-disc marker:text-black">
                      {pkg.optionalAddOns.map((item, idx) => (
                        <li key={idx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Turnaround Time */}
                <div className="pt-2 border-t border-black/10">
                  <div className="flex items-start space-x-2 font-bold">
                    <span className="text-black font-bold">➔</span>
                    <span>Turnaround:</span>
                  </div>
                  <p className="pl-5 font-medium">{pkg.turnaround}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below packages */}
        <div className="mt-8">
          <Link
            href="#get-quote"
            className="block w-full bg-[#b30000] hover:bg-[#8d0000] text-white font-bold text-center py-3 rounded-md transition-colors text-sm shadow"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* SECTION 3: Delivery and Pricing */}
      <section className="w-full pb-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0c373b] mb-6">
          Delivery and Pricing
        </h2>

        {/* Price & Turnaround Display Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-300 rounded-md overflow-hidden border border-slate-300 max-w-2xl mx-auto mb-8 shadow-sm">
          <div className="bg-[#f1f5f9] p-6 flex items-center justify-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-sky-500 text-white font-bold text-lg flex items-center justify-center">
              $
            </div>
            <span className="text-2xl font-bold text-slate-800">70</span>
          </div>

          <div className="bg-[#f1f5f9] p-6 flex items-center justify-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800">
              3 <span className="font-normal text-base">days</span>
            </span>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center">
          <Link
            href="#check-pricing"
            className="inline-block bg-[#0f3d3e] hover:bg-[#092627] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors shadow-md"
          >
            Check Pricing &amp; Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

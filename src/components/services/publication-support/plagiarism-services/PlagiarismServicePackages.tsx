"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageFeature {
  text: string;
}

interface PackageItem {
  id: string;
  icon: string;
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
    icon: "/images/publication-support/art-work-preparation/S.png",
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
    icon: "/images/publication-support/plagiarism-services/gold-icons.png",
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
    icon: "/images/publication-support/art-work-preparation/pa-icons-.png",
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
      <section className="w-full py-6 md:py-7 px-4 md:px-8 max-w-6xl mx-auto">
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
                  href="/services/publication-support/plagiarism-services/plagiarism-checking-in-publication"
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
                src="/images/publication-support/plagiarism-services/Plagiarism-Checker-Report-thumb.jpg"
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
                src="/images/publication-support/plagiarism-services/Plagiarism-Check-Service-Sample-Work.jpg"
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
                href="/insights/sample-work"
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
                href="/insights/sample-work"
                className="inline-block bg-black hover:bg-slate-800 text-white font-medium text-xs px-8 py-2.5 rounded-full transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Packages Section */}
      <section className="w-full py-6 md:py-7 px-4 md:px-8 max-w-6xl mx-auto">
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
                <Image
                  src={pkg.icon}
                  alt={`${pkg.title} package`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain shrink-0"
                />
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
        <div className="mt-3">
        <GetFreeQuoteButton/>
        </div>
      </section>

      {/* SECTION 3: Delivery and Pricing */}
      <section className="w-full pb-5 px-1 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0c373b] mb-6">
          Delivery and Pricing
        </h2>

        {/* Price & Turnaround Display Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-300 rounded-md overflow-hidden border border-slate-300 max-w-2xl mx-auto mb-8 shadow-sm">
          <div className="bg-[#f1f5f9] p-6 flex items-center justify-center space-x-3">
            <Image
              src="/images/publication-support/art-work-preparation/dollar-sign.png"
              alt="Price"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="text-2xl font-bold text-slate-800">70</span>
          </div>

          <div className="bg-[#f1f5f9] p-6 flex items-center justify-center space-x-3">
            <Image
              src="/images/publication-support/art-work-preparation/date.png"
              alt="Turnaround"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="text-xl font-bold text-slate-800">
              3 <span className="font-normal text-base">days</span>
            </span>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center">
          <Link
            href="/order-now"
            className="inline-block bg-[#0f3d3e] hover:bg-[#092627] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors shadow-md"
          >
            Check Pricing &amp; Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

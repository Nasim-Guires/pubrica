"use client";

import { PackageItem } from "@/components/common/CommonPackages";
import Link from "next/link";
import React from "react";

const packagesData: PackageItem[] = [
  {
    icon: "/images/publication-support/peer-review-pre-submission/advanced.webp",
    title: "Academic Author Package",
    subtitle: "(For Researchers, Clinicians, PhD Candidates)",
    idealFor:
      "Researchers preparing manuscripts for journal submission.",
    includes: [
      "Manuscript writing or polishing (based on raw data/draft)",
      "Journal selection support (SCI-indexed, Q1–Q3)",
      "Plagiarism check & correction",
      "Cover letter drafting",
      "Formatting per journal guidelines (APA, AMA, Vancouver, etc.)",
      "Response to reviewer comments (optional add-on)",
    ],
    addOns: [
      "Graphical abstract design",
      "Literature review",
      "Data analysis summary writing",
    ],
    cardBgColor: "#ccd5d5",
    titleColor: "#355252",
  },
  {
    icon: "",
    title: "Biotech Launch Content Bundle",
    subtitle: "(For Startups And Early-Stage Biotech Firms)",
    idealFor:
      "Companies preparing to raise funds, partner, or launch a new molecule or platform.",
    includes: [
      "Scientific white paper",
      "Executive summary / one-pager",
      "Scientific slide deck (for investors or KOLs)",
      "Website content (product + company overview)",
      "MoA narrative or storyboard",
      "Competitive landscape summary",
    ],
    addOns: [
      "Social media content calendar (scientific tone)",
      "Press release writing",
      "Pitch deck review/editing",
    ],
    cardBgColor: "#cfb9d8",
    titleColor: "#6a3b7d",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Regulatory Compliance Suite – Medical Devices",
    subtitle: "(For Class I–III Device Manufacturers)",
    idealFor:
      "Companies preparing regulatory submissions (EU MDR, US FDA, SFDA, etc.)",
    includes: [
      "Clinical Evaluation Report (CER)",
      "Risk-Benefit Analysis",
      "IFU (Instructions for Use) – ISO 20417",
      "Post-market surveillance (PMS) report",
      "Literature search & summary matrix",
      "Labelling content (package insert, outer label)",
    ],
    addOns: [
      "Device description & intended use drafting",
      "PMCF Plan & Report",
      "Usability test report write-up",
    ],
    cardBgColor: "#cbaf83",
    titleColor: "#705638",
  },
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "CER + IFU + Labelling Toolkit",
    subtitle: "(Focused Regulatory Writing Pack)",
    idealFor:
      "Companies needing clinical/scientific support for AI validation and compliance.",
    includes: [
      "CER (per MDR Annex XIV & MEDDEV 2.7/1 rev 4)",
      "IFU (user-friendly, compliant)",
      "Label text (claims, warnings, traceability)",
      "Regulatory consistency review",
      "Mock submission-ready formatting",
    ],
    addOns: [
      "SmPC writing (if applicable for combination products)",
      "Translation-ready text structure",
      "eIFU adaptation",
    ],
    cardBgColor: "#e8ebff",
    titleColor: "#3730a3",
  },
  {
    icon: "",
    title: "Digital Health Documentation Pack",
    subtitle: "(For AI/ML, SaMD, And Healthtech Platforms)",
    idealFor:
      "Companies needing clinical/scientific support for AI validation and compliance.",
    includes: [
      "Algorithm performance report (clinical lens)",
      "SaMD compliance narrative",
      "Data validation summary",
      "Scientific content for website/product page",
      "Clinical white paper for stakeholder trust",
    ],
    addOns: [
      "Software IFU",
      "Validation protocol summaries",
      "Real-world evidence documentation",
    ],
    cardBgColor: "#f48a58",
    titleColor: "#7c2d12",
  },
];

export default function OurPackages(): React.ReactElement {
  const topPackages = packagesData.slice(0, 3);
  const bottomPackages = packagesData.slice(3, 5);

  return (
    <section className="w-full bg-white font-sans text-slate-800 py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#09322e]">
            Our Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you require a clinical literature review, research
            peer-reviewed manuscript, regulatory documents, or patient-facing
            educational content, we deliver high-quality, thoroughly reviewed{" "}
            <Link
              href="/academy/medical-writing/parallel-structure-medical-writing"
              className="text-blue-600 underline-offset-2 transition-colors no-underline hover:no-underline"
            >
              medical writing
            </Link>
            . We offer a range of service packages (A to F) to support your end
            goals—whether it&apos;s academic manuscript submission, regulatory
            narrative development, product launch support, or interactive
            patient engagement materials.
          </p>
        </div>

        {/* Top 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {topPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        {/* Bottom 2 Column Cards Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {bottomPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        {/* CTA Banner Button */}
        <div className="pt-6 text-center max-w-2xl mx-auto">
          <Link href="/order-now/" className="inline-block w-full py-3.5 px-8 bg-[#ba0000] text-white font-bold text-base rounded-md shadow-md text-center">
            Starts From $ 130
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual Package Cards with proper structure matching the design layout
function PackageCard({ pkg }: { pkg: PackageItem }): React.ReactElement {
  const addOnsList = pkg.addOns || [];

  return (
    <div
      className="p-6 flex flex-col justify-between shadow-sm rounded-md transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: pkg.cardBgColor || "#f1f5f9" }}
    >
      <div>
        {/* White Card Title Block */}
        <div className="bg-white p-5 rounded-sm shadow-sm text-center mb-6 min-h-[100px] flex flex-col items-center justify-center">
          <h3 
            className="text-base sm:text-lg font-extrabold leading-snug"
            style={{ color: pkg.titleColor || "#09322e" }}
          >
            {pkg.title}
          </h3>
          <p className="text-xs font-semibold text-slate-700 mt-1">
            {pkg.subtitle}
          </p>
        </div>

        {/* Ideal For Section */}
        <div className="mb-5 space-y-1">
          <div className="flex items-start gap-2">
            <ArrowRightCircleIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-900" />
            <span className="font-extrabold text-sm text-slate-900">
              Ideal For:
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-900 pl-6 leading-relaxed">
            {pkg.idealFor}
          </p>
        </div>

        {/* Includes Section */}
        <div className="mb-5 space-y-1.5">
          <div className="flex items-start gap-2">
            <ArrowRightCircleIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-900" />
            <span className="font-extrabold text-sm text-slate-900">
              Services Included:
            </span>
          </div>
          <ul className="pl-6 space-y-1.5 text-xs sm:text-sm text-slate-900 list-disc">
            {pkg.includes.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Add-ons Section */}
        {addOnsList.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <div className="flex items-start gap-2">
              <ArrowRightCircleIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-900" />
              <span className="font-extrabold text-sm text-slate-900">
                Optional Add-ons:
              </span>
            </div>
            <ul className="pl-6 space-y-1.5 text-xs sm:text-sm text-slate-900 list-disc">
              {addOnsList.map((item, idx) => (
                <li key={idx} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Icon Helper for solid black right arrow inside circle
function ArrowRightCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}
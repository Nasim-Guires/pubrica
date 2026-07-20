"use client";

import React from "react";

interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
}

const packagesData: PackageItem[] = [
  {
    id: "academic",
    title: "Academic Author Package",
    subtitle: "(For Researchers, Clinicians, PhD Candidates)",
    bgColor: "bg-[#ccd5d5]", // Soft slate blue/gray
    idealFor: "Researchers preparing manuscripts for journal submission.",
    includes: [
      "Manuscript writing or polishing (based on raw data/draft)",
      "Journal selection support (SCI-indexed, Q1–Q3)",
      "Plagiarism check & correction",
      "Cover letter drafting",
      "Formatting per journal guidelines (APA, AMA, Vancouver, etc.)",
      "Response to reviewer comments (optional add-on)",
    ],
    optionalAddOns: [
      "Graphical abstract design",
      "Literature review",
      "Data analysis summary writing",
    ],
  },
  {
    id: "biotech",
    title: "Biotech Launch Content Bundle",
    subtitle: "(For Startups And Early-Stage Biotech Firms)",
    bgColor: "bg-[#cfb9d8]", // Soft purple
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
    optionalAddOns: [
      "Social media content calendar (scientific tone)",
      "Press release writing",
      "Pitch deck review/editing",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance Suite – Medical Devices",
    subtitle: "(For Class I–III Device Manufacturers)",
    bgColor: "bg-[#cbaf83]", // Warm tan/gold
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
    optionalAddOns: [
      "Device description & intended use drafting",
      "PMCF Plan & Report",
      "Usability test report write-up",
    ],
  },
  {
    id: "cer-toolkit",
    title: "CER + IFU + Labelling Toolkit",
    subtitle: "(Focused Regulatory Writing Pack)",
    bgColor: "bg-[#e8ebff]", // Very pale indigo/blue
    idealFor:
      "Companies needing clinical/scientific support for AI validation and compliance.",
    includes: [
      "CER (per MDR Annex XIV & MEDDEV 2.7/1 rev 4)",
      "IFU (user-friendly, compliant)",
      "Label text (claims, warnings, traceability)",
      "Regulatory consistency review",
      "Mock submission-ready formatting",
    ],
    optionalAddOns: [
      "SmPC writing (if applicable for combination products)",
      "Translation-ready text structure",
      "eIFU adaptation",
    ],
  },
  {
    id: "digital-health",
    title: "Digital Health Documentation Pack",
    subtitle: "(For AI/ML, SaMD, And Healthtech Platforms)",
    bgColor: "bg-[#f48a58]", // Warm coral/orange
    idealFor:
      "Companies needing clinical/scientific support for AI validation and compliance.",
    includes: [
      "Algorithm performance report (clinical lens)",
      "SaMD compliance narrative",
      "Data validation summary",
      "Scientific content for website/product page",
      "Clinical white paper for stakeholder trust",
    ],
    optionalAddOns: [
      "Software IFU",
      "Validation protocol summaries",
      "Real-world evidence documentation",
    ],
  },
];

export default function OurPackages(): React.ReactElement {
  const topPackages = packagesData.slice(0, 3);
  const bottomPackages = packagesData.slice(3, 5);

  return (
    <section className="w-full bg-white font-sans text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
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
            <a
              href="#medical-writing"
              className="text-[#008ba3] underline underline-offset-2 hover:text-[#09322e] transition-colors"
            >
              medical writing
            </a>
            . We offer a range of service packages (A to F) to support your end
            goals—whether it's academic manuscript submission, regulatory
            narrative development, product launch support, or interactive
            patient engagement materials.
          </p>
        </div>

        {/* Top 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {topPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Bottom 2 Column Cards Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {bottomPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CTA Banner Button */}
        <div className="pt-6 text-center max-w-2xl mx-auto">
          <a
            href="#pricing"
            className="inline-block w-full py-3.5 px-8 bg-[#ba0000] hover:bg-[#990000] text-white font-bold text-base rounded-md transition-colors shadow-md text-center"
          >
            Starts From $ 130
          </a>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual Package Cards
function PackageCard({ pkg }: { pkg: PackageItem }): React.ReactElement {
  return (
    <div
      className={`${pkg.bgColor} p-6 flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-1`}
    >
      <div>
        {/* White Card Title Block */}
        <div className="bg-white p-5 rounded-sm shadow-sm text-center mb-8 min-h-[100px] flex flex-col items-center justify-center">
          <h3 className="text-base sm:text-lg font-extrabold text-[#09322e] leading-snug">
            {pkg.title}
          </h3>
          <p className="text-xs font-semibold text-slate-700 mt-1">
            {pkg.subtitle}
          </p>
        </div>

        {/* Ideal For Section */}
        <div className="mb-6 space-y-1.5">
          <div className="flex items-start gap-2">
            <ArrowRightCircleIcon className="w-4 h-4 mt-1 flex-shrink-0 text-slate-900" />
            <span className="font-extrabold text-sm text-slate-900">
              Ideal for:
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-900 pl-6 leading-relaxed">
            {pkg.idealFor}
          </p>
        </div>

        {/* Includes Section */}
        <div className="mb-6 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRightCircleIcon className="w-4 h-4 mt-1 flex-shrink-0 text-slate-900" />
            <span className="font-extrabold text-sm text-slate-900">
              Includes:
            </span>
          </div>
          <ul className="pl-6 space-y-2.5 text-xs sm:text-sm text-slate-900">
            {pkg.includes.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Add-ons Section */}
        {pkg.optionalAddOns.length > 0 && (
          <div className="space-y-2 pt-2">
            <div className="flex items-start gap-2">
              <ArrowRightCircleIcon className="w-4 h-4 mt-1 flex-shrink-0 text-slate-900" />
              <span className="font-extrabold text-sm text-slate-900">
                Optional Add-ons:
              </span>
            </div>
            <ul className="pl-6 space-y-2 text-xs sm:text-sm text-slate-900">
              {pkg.optionalAddOns.map((item, idx) => (
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

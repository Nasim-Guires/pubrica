"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageTier {
  id: string;
  icon: string;
  cardBgColor: string;
  titleColor: string;
  title: string;
  subtitle: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
}

const packageData: PackageTier[] = [
  {
    id: "starter",
    icon: "/images/icons/S.png", // Replace extension (.png/.svg) to match your exact file name
    cardBgColor: "#cbd8d6",
    titleColor: "#004b5a",
    title: "Starter",
    subtitle: "Ideal For First-Time Authors",
    idealFor:
      "Medical students, early-career clinicians, and researchers at the preliminary stage of literature review.",
    includes: [
      "Clinical question framing (PICO)",
      "2-database search (e.g., PubMed, Cochrane)",
      "Title & abstract screening",
      "Narrative synthesis (up to 20 studies)",
      "Reference list (APA/AMA/Harvard)",
    ],
    optionalAddOns: [
      "Protocol registration (e.g., PROSPERO)",
      "PowerPoint summary deck",
      "Journal selection support",
    ],
    turnaround: "7 to 10 working days",
  },
  {
    id: "advanced",
    icon: "/images/icons/Basic.webp", // Or /icons/advanced-a.svg depending on your asset naming
    cardBgColor: "#d8c4e2",
    titleColor: "#6b2d82",
    title: "Advanced",
    subtitle: "For Mid-Tier Or Indexed Journals",
    idealFor:
      "Practicing physicians, postgraduate students, and PhD candidates conducting in-depth clinical reviews.",
    includes: [
      "Full protocol document",
      "Search across 4–5 databases",
      "Dual-reviewer screening",
      "Full-text analysis",
      "Risk of bias assessment",
      "Thematic synthesis or structured tabulation",
      "PRISMA 2020 flowchart",
    ],
    optionalAddOns: [
      "Statistical meta-analysis",
      "Infographic summary",
      "Journal formatting (targeted)",
    ],
    turnaround: "12 to 15 working days",
  },
  {
    id: "elite",
    icon: "/images/icons/pa-icons-.png", // File for P badge from your icons directory
    cardBgColor: "#d5bc8d",
    titleColor: "#805826",
    title: "Elite",
    subtitle: "Comprehensive & Premium",
    idealFor:
      "Hospital research teams, academic institutions, evidence-based guideline developers, and systematic review authors.",
    includes: [
      "Extensive review of 40+ articles across more than five databases, including Cochrane, Web of Science, Embase, and PubMed",
      "Custom protocol design adhering to PRISMA 2020 guidelines",
      "Full search strategy appendix",
      "Risk of bias assessment using tools such as RoB-2 or GRADE",
      "Tabular and narrative synthesis of findings",
      "High-level technical editing and end-to-end support for journal submission",
    ],
    optionalAddOns: [
      "Full manuscript submission service",
      "Conference abstract & poster design",
      "CER integration for medical devices",
    ],
    turnaround: "15 to 20 working days",
  },
];

export default function ClinicalLiteratureReviewPackages() {
  const getGridColsClass = (count: number) => {
    if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white w-full text-left font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c] mb-3">
          Clinical Literature Review for Evidence-Based Medicine – Packages
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
          Pubrica works with flexible, tiered plans to collect and report on a
          wide range of evidence synthesis needs across academic, clinical, and
          industry purposes. Each package meets international methodological
          standards (PRISMA, JBI, Cochrane) while reflecting the project&apos;s
          scope, depth, and urgency.
        </p>
      </div>

      {/* Packages Container */}
      <div className="relative max-w-7xl mx-auto pb-10">
        <div className={`grid ${getGridColsClass(packageData.length)} gap-4 items-stretch`}>
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg"
              style={{ backgroundColor: pkg.cardBgColor }}
            >
              {/* White Header Bar */}
              <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-100 min-h-[85px]">
                <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={pkg.icon}
                    alt={pkg.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
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

              {/* Package Content */}
              <div className="p-5 flex flex-col flex-grow text-gray-900 text-xs md:text-sm">
                {/* Ideal For */}
                <div className="mb-4">
                  <div className="font-bold mb-1 flex items-start gap-1.5 text-gray-900">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                      ➔
                    </span>
                    <span>
                      Ideal For:{" "}
                      <span className="font-normal">{pkg.idealFor}</span>
                    </span>
                  </div>
                </div>

                {/* Services / What's Included */}
                <div className="mb-4 flex-grow">
                  <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                      ➔
                    </span>
                    <span>Services Included:</span>
                  </div>
                  <ul className="pl-6 space-y-2 list-disc marker:text-gray-800">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="leading-snug text-gray-900">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Add-Ons */}
                {pkg.optionalAddOns && pkg.optionalAddOns.length > 0 && (
                  <div className="mb-4">
                    <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                        ➔
                      </span>
                      <span>Optional Add-ons:</span>
                    </div>
                    <ul className="pl-6 space-y-1.5 list-disc marker:text-gray-800">
                      {pkg.optionalAddOns.map((addon, i) => (
                        <li key={i} className="leading-snug text-gray-900">
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Turnaround Time */}
                {pkg.turnaround && (
                  <div className="mt-auto pt-2">
                    <div className="font-bold flex items-start gap-1.5">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                        ➔
                      </span>
                      <span>
                        Turnaround Time:{" "}
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
  );
}
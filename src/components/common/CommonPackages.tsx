"use client";

import React from "react";
import Image from "next/image";

interface PackageItem {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  idealFor: string;
  includes: string[];
  turnaround?: string;
  bestFor?: string;
  cardBgColor?: string;
  titleColor?: string;
}

interface PackagesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  packages?: PackageItem[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const defaultPackages: PackageItem[] = [
  {
    icon: "/icons/basic-b.svg",
    title: "Starter",
    subtitle: "For Early Discovery & Feasibility",
    idealFor: "Startups, pre-formulation R&D, early-stage evaluations",
    includes: [
      "PubMed literature review (efficacy/safety)",
      "Basic clinical trial mapping (relevant to compound/indication)",
      "Ingredient/compound background report",
      "1 therapeutic area overview",
      "Preliminary regulatory guidance (FSSAI, FDA, EMA, etc.)",
    ],
    cardBgColor: "#cbd8d6",
    titleColor: "#004b5a",
  },
  {
    icon: "/icons/advanced-a.svg",
    title: "Advanced",
    subtitle: "For Validation & Strategy Development",
    idealFor: "Teams preparing for formulation, R&D strategy, or investor discussions",
    includes: [
      "Includes everything in Starter, plus:",
      "Patent landscape & novelty/prior art search",
      "Safety, pharmacological & toxicological profile",
      "Mechanism-of-action evidence mapping",
      "Disease association & therapeutic positioning",
      "Regulatory classification (GRAS, AYUSH, 510(k), etc.)",
    ],
    cardBgColor: "#d8c4e2",
    titleColor: "#6b2d82",
  },
  {
    icon: "/icons/premium-p.svg",
    title: "Comprehensive",
    subtitle: "For Regulatory & Market-Ready Preparation",
    idealFor: "Teams near preclinical, market entry, or submission phase",
    includes: [
      "Includes everything in Advanced, plus:",
      "Full biomarker & pathway linkage analysis",
      "Competitive product benchmarking",
      "Regulatory landscape & dossier readiness report",
      "Claims substantiation matrix",
      "Drafting of white papers or regulatory briefs",
      "Optional: Biocompatibility literature review (for medical devices)",
    ],
    cardBgColor: "#d5bc8d",
    titleColor: "#805826",
  },
  {
    icon: "/icons/custom-c.svg",
    title: "Custom",
    subtitle: "Tailored Research & Intelligence Solutions",
    idealFor: "Clients with unique compound types, niche indications, or global compliance needs",
    includes: [
      "Veterinary or pet food ingredient analysis",
      "Cosmeceutical ingredient toxicity & INCI alignment",
      "Combination product (drug-device) compatibility studies",
      "Delivery system innovation mapping",
      "Sustainability & sourcing intelligence",
      "Post-market literature surveillance",
    ],
    cardBgColor: "#f3c299",
    titleColor: "#9a4300",
  },
];

export default function CommonPackages({
  title = "Digital Production QA – Our Packages",
  subtitle = "",
  description = "At Publica, our Digital Production QA packages are designed to meet varying production volumes and complexity levels.",
  packages = defaultPackages,
  buttonText = "Get a Free Quote",
  onButtonClick,
}: PackagesProps) {
  // Dynamically set grid columns depending on how many packages are passed
  const getGridColsClass = (count: number) => {
    if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <section className="py-7 px-4 md:px-8 bg-white w-full text-left font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c] mb-3">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
            {subtitle}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
            {description}
          </p>
        )}
      </div>

      {/* Packages Container */}
      <div className="relative max-w-7xl mx-auto pb-5">
        <div className={`grid ${getGridColsClass(packages.length)} gap-4 items-stretch`}>
          {packages.map((pkg, index) => (
            <div
              key={index}
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

                {/* Turnaround Time */}
                {pkg.turnaround && (
                  <div className="mb-3">
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

                {/* Best For */}
                {pkg.bestFor && (
                  <div>
                    <div className="font-bold flex items-start gap-1.5">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                        ➔
                      </span>
                      <span>
                        Best For:{" "}
                        <span className="font-normal">{pkg.bestFor}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Centered CTA Button */}
        <div className="mt-8 text-center">
          {/* <button
            onClick={onButtonClick}
            className="bg-[#b30000] hover:bg-[#8e0000] text-white font-bold py-3.5 px-12 rounded-full text-base transition-all shadow-md active:scale-95"
          >
            {buttonText}
          </button> */}
        </div>
      </div>
    </section>
  );
}
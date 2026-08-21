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
  cardBgColor?: string; // Made optional
  titleColor?: string;  // Made optional
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
    icon: "/icons/basic-b.svg", // Replace with your B badge icon path
    title: "Basic Assessment Review",
    idealFor: "Individual educators and small academic programs",
    includes: [
      "Review of question clarity and structure",
      "Alignment check with learning objectives",
      "Difficulty-level assessment",
      "Summary review report",
    ],
    turnaround: "3–5 business days",
    bestFor: "Quizzes, short exams, assignments",
    cardBgColor: "#cbd8d6", // Light slate-teal
    titleColor: "#004b5a",
  },
  {
    icon: "/icons/advanced-a.svg", // Replace with your A badge icon path
    title: "Advanced Assessment Validation",
    idealFor: "Universities and professional training programs",
    includes: [
      "All features from the Basic Package",
      "Rubric and marking scheme validation",
      "Bias and fairness review",
      "Cognitive level mapping (Bloom's taxonomy)",
      "Detailed improvement recommendations",
    ],
    turnaround: "5–7 business days",
    bestFor: "Course exams, certifications",
    cardBgColor: "#d8c4e2", // Light soft purple
    titleColor: "#6b2d82",
  },
  {
    icon: "/icons/premium-p.svg", // Replace with your P badge icon path
    title: "Premium Assessment Quality Assurance",
    idealFor: "Accrediting bodies, large institutions, and high-stakes examinations",
    includes: [
      "Everything in the Advanced Package",
      "Full assessment framework review",
      "Accreditation and compliance alignment",
      "Cross-course consistency checks",
      "Expert QA review and validation report",
    ],
    turnaround: "7–10 business days",
    bestFor: "Standardized tests, large-scale assessments",
    cardBgColor: "#d5bc8d", // Warm beige tone
    titleColor: "#805826",
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
  return (
    <section className="py-16 px-4 md:px-8 bg-white w-full text-left font-sans">
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
      <div className="relative max-w-7xl mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col rounded-t-xl overflow-hidden shadow-lg border border-gray-200"
              style={{ backgroundColor: pkg.cardBgColor }}
            >
              {/* White Header Bar */}
              <div className="bg-white p-5 flex items-center gap-4 border-b border-gray-100 min-h-[90px]">
                <div className="w-12 h-12 relative flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={pkg.icon}
                    alt={pkg.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3
                  className="font-bold text-lg md:text-xl leading-snug"
                  style={{ color: pkg.titleColor }}
                >
                  {pkg.title}
                </h3>
              </div>

              {/* Package Content */}
              <div className="p-6 flex flex-col flex-grow text-gray-900 text-sm md:text-base">
                {/* Ideal For */}
                <div className="mb-6">
                  <div className="font-bold mb-1 flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs shrink-0 mt-0.5">
                      ➔
                    </span>
                    <span>
                      Ideal For:{" "}
                      <span className="font-normal">{pkg.idealFor}</span>
                    </span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6 flex-grow">
                  <div className="font-bold mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs shrink-0">
                      ➔
                    </span>
                    <span>What&apos;s Included:</span>
                  </div>
                  <ul className="pl-7 space-y-2.5 list-disc marker:text-gray-800">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="leading-snug text-gray-900">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Turnaround Time */}
                {pkg.turnaround && (
                  <div className="mb-4">
                    <div className="font-bold flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs shrink-0 mt-0.5">
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
                    <div className="font-bold flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs shrink-0 mt-0.5">
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
          <button
            onClick={onButtonClick}
            className="bg-[#b30000] hover:bg-[#8e0000] text-white font-bold py-3.5 px-12 rounded-full text-base transition-all shadow-md active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
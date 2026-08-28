"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

interface PackageTier {
  id: string;
  letter: string;
  name: string;
  iconSrc: string;
  headerBg: string;
  badgeBg: string;
  cardBg: string;
  idealFor: string;
  included: string[];
  addOns: string[];
  turnaround: string;
}

export const PostEditingDetailsAndPricing: React.FC = () => {
  // Initialized to an empty array so cards start closed by default
  const [openCards, setOpenCards] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setOpenCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id],
    );
  };

  // Why Choose Features Data
  const features: FeatureCard[] = [
    {
      id: "expert-editors",
      title: "Expert Editors",
      description:
        "Work with field-specific PhD/Master’s editors who ensure accuracy, clarity, and consistency.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Expert-Editors.png",
    },
    {
      id: "enhanced-quality",
      title: "Enhanced Quality",
      description:
        "Improve readability, language, and overall manuscript presentation for maximum impact.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Enhanced-Quality.png",
    },
    {
      id: "guideline-compliance",
      title: "Guideline Compliance",
      description:
        "We format and edit your work according to journal, publisher, or institutional standards.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Guideline-Compliance.png",
    },
    {
      id: "time-efficient",
      title: "Time-Efficient",
      description:
        "Fast turnaround without compromising on quality, so your manuscript is publication-ready on schedule.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Time-Efficient.png",
    },
    {
      id: "personalized-support",
      title: "Personalized Support",
      description:
        "Receive detailed feedback and tailored recommendations to strengthen your manuscript.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Personalized-Support.png",
    },
  ];

  // Pricing Packages Data
  const packages: PackageTier[] = [
    {
      id: "standard",
      letter: "S",
      name: "Standard",
      iconSrc:
        "/images/publication-support/responding-to-reviewers/standard-logo.png",
      headerBg: "bg-[#d8e3e2]",
      badgeBg: "bg-[#b2c8c6] text-[#0d3b36]",
      cardBg: "bg-[#cfdedd]",
      idealFor:
        "Early-stage manuscripts, short articles, or conference papers.",
      included: [
        "Language and grammar correction",
        "Clarity and readability improvements",
        "Basic formatting per journal/publisher guidelines",
      ],
      addOns: ["Reference checking and formatting", "Plagiarism check"],
      turnaround: "3–5 business days",
    },
    {
      id: "advanced",
      letter: "A",
      name: "Advanced",
      iconSrc: "/images/publication-support/journal-selection/advanced.webp",
      headerBg: "bg-[#e2d5e8]",
      badgeBg: "bg-[#c9b3d4] text-[#4a235a]",
      cardBg: "bg-[#d8c3e2]",
      idealFor:
        "Journal submissions, book chapters, and research articles requiring detailed refinement.",
      included: [
        "All Standard Post-Editing features",
        "Structural improvements and logical flow enhancement",
        "Terminology and technical accuracy check",
        "Compliance with journal/publisher guidelines",
      ],
      addOns: [
        "Detailed editor comments and suggestions",
        "Figure/table formatting review",
        "Plagiarism report",
      ],
      turnaround: "5–7 business days",
    },
    {
      id: "premium",
      letter: "P",
      name: "Premium",
      iconSrc: "/images/editing-and-translation/pro.webp",
      headerBg: "bg-[#e8dec7]",
      badgeBg: "bg-[#d6c299] text-[#5c4314]",
      cardBg: "bg-[#decfae]",
      idealFor:
        "High-impact journal submissions, academic books, and manuscripts targeting international publications.",
      included: [
        "All Advanced Post-Editing features",
        "In-depth language polishing and stylistic improvements",
        "Comprehensive formatting and reference alignment",
        "Senior editor quality review",
      ],
      addOns: [
        "Pre-submission consultation",
        "Journal-specific submission support",
        "Additional rounds of editing",
      ],
      turnaround: "7–10 business days",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-6 space-y-20">
      {/* ------------------------------------------------------------- */}
      {/* 1. WHY CHOOSE OUR POST EDITING SERVICES SECTION               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] text-center mb-10">
          Why Choose Our Post Editing Services?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {features.map((feature) => {
            const isOpen = openCards.includes(feature.id);

            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md"
              >
                {/* Collapsible Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleCard(feature.id)}
                  className="w-full bg-[#f0fdf4] px-5 py-3.5 border-b border-emerald-100/60 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-[#e6f9ed]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 flex items-center justify-center shrink-0 overflow-hidden p-1">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Toggle Button (+ / -) */}
                  <span className="text-emerald-700 font-bold text-xl ml-2 w-6 h-6 flex items-center justify-center shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Card Body - Collapsible Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen
                    ? "max-h-48 opacity-100 p-5"
                    : "max-h-0 opacity-0 p-0"
                    }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. POST EDITING SERVICES SAMPLE WORK SECTION                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
          Post Editing Services Sample Work
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Experience the difference in quality with Pubrica’s post editing,
          refined manuscripts that meet rigorous publication standards, tailored
          to showcase your research excellence.
        </p>

        {/* Sample Work Manuscript Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-slate-200 py-3 px-4 font-bold text-slate-800 text-sm sm:text-base border-b border-slate-300">
            Checkout our Sample Work of Post Editing Service
          </div>

          <div className="p-4 sm:p-6 bg-slate-50">
            <div className="relative w-full min-h-[350px] sm:min-h-[480px] bg-white rounded-lg border border-slate-200 overflow-hidden">
              <Image
                src="/images/editing-and-translation/post-editing/post-editing-Sample-Work.webp"
                alt="Post Editing Service Sample Work Before and After Comparison"
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. OUR PACKAGES SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
            Post Editing Services – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We offer flexible post-editing packages designed to meet the diverse
            needs of authors, researchers, and academicians. Each package
            ensures high-quality editing, compliance with publication standards,
            and timely delivery.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col"
            >
              {/* Header Box */}
              <div
                className={`${pkg.headerBg} p-6 flex items-center justify-center space-x-3`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${pkg.badgeBg} flex items-center justify-center font-bold text-lg shadow-sm overflow-hidden`}
                >
                  <Image
                    src={pkg.iconSrc}
                    alt={`${pkg.name} package`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
              </div>

              {/* Package Content */}
              <div
                className={`${pkg.cardBg} p-6 flex-1 flex flex-col justify-between text-xs sm:text-sm text-slate-800 space-y-6`}
              >
                <div className="space-y-5">
                  {/* Ideal For */}
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-slate-900 shrink-0">➔</span>
                    <p className="leading-snug">
                      <strong className="font-bold text-slate-900">
                        Ideal For:
                      </strong>{" "}
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Included Items */}
                  <div>
                    <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                      <span>➔</span>
                      <span>Included:</span>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc marker:text-slate-700">
                      {pkg.included.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-Ons */}
                  <div>
                    <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                      <span>➔</span>
                      <span>Optional Add-Ons:</span>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc marker:text-slate-700">
                      {pkg.addOns.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Turnaround Time */}
                <div className="pt-4 border-t border-slate-400/30 flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">➔</span>
                  <p>
                    <strong className="font-bold text-slate-900">
                      Turnaround Time:
                    </strong>{" "}
                    {pkg.turnaround}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pricing Banner */}
        <Link
          href="/order-now/"
          className="block w-full bg-[#b80000] text-white py-4 px-6 rounded-xl text-center font-bold text-base sm:text-lg shadow-md tracking-wide hover:bg-[#980000] transition-colors cursor-pointer"
        >
          Starts from $ 200 for 1000 Words
        </Link>
      </section>
    </div>
  );
};
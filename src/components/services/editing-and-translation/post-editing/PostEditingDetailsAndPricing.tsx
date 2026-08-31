"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

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
  const packages: PackageItem[] = [
    {
      icon: "/images/publication-support/responding-to-reviewers/standard-logo.png",
      title: "Standard",
      subtitle: "Standard Post-Editing",
      idealFor: "Early-stage manuscripts, short articles, or conference papers.",
      includes: [
        "Language and grammar correction",
        "Clarity and readability improvements",
        "Basic formatting per journal/publisher guidelines",
      ],
      addOns: ["Reference checking and formatting", "Plagiarism check"],
      turnaround: "3–5 business days",
      cardBgColor: "#cfdedd",
      titleColor: "#0d3b36",
    },
    {
      icon: "/images/publication-support/journal-selection/advanced.webp",
      title: "Advanced",
      subtitle: "Advanced Post-Editing",
      idealFor:
        "Journal submissions, book chapters, and research articles requiring detailed refinement.",
      includes: [
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
      cardBgColor: "#d8c3e2",
      titleColor: "#4a235a",
    },
    {
      icon: "/images/editing-and-translation/pro.webp",
      title: "Premium",
      subtitle: "Premium Post-Editing",
      idealFor:
        "High-impact journal submissions, academic books, and manuscripts targeting international publications.",
      includes: [
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
      cardBgColor: "#decfae",
      titleColor: "#5c4314",
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
      <section className="bg-white py-8 px-4">
        <CommonPackages
          title="Post Editing Services – Our Packages"
          description="We offer flexible post-editing packages designed to meet the diverse needs of authors, researchers, and academicians. Each package ensures high-quality editing, compliance with publication standards, and timely delivery."
          packages={packages}
        />
        <div className="flex justify-center items-center mt-4">
          <Link
            href="/order-now/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-600/30"
          >
            Starts from $ 200 for 1000 Words
          </Link>
        </div>
      </section>
    </div>
  );
};
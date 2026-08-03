"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

interface PackageCardProps {
  letter: string;
  badgeBg: string;
  title: string;
  subtitle: string;
  bgColor: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
}

const packagesData: PackageCardProps[] = [
  {
    letter: "S",
    badgeBg: "bg-[#e8f1f5] text-[#d9a13b]",
    title: "Silver",
    subtitle: "Budget Publication-Support Package",
    bgColor: "bg-[#c8d6d5]",
    idealFor: "Early-stage researchers or first-time journal submitters.",
    includes: [
      "Basic figure formatting and resolution adjustments.",
      "Compliance with general submission guidelines.",
      "Image optimization for clarity and legibility.",
    ],
    optionalAddOns: ["Extra revisions", "Additional figures/illustrations"],
    turnaround: "5–7 business days",
  },
  {
    letter: "G",
    badgeBg: "bg-[#e3f0d8] text-[#5b9e38]",
    title: "Gold",
    subtitle: "End-To-End Publication-Focused Support For Up To Two Journals",
    bgColor: "bg-[#cbb8d7]",
    idealFor:
      "Researchers preparing manuscripts for mid-tier or specialty journals.",
    includes: [
      "Comprehensive figure formatting (e.g., colour mode, resolution, fonts).",
      "Layout and label adjustments as per journal-specific requirements.",
      "Metadata embedding and image compression for optimal submission",
    ],
    optionalAddOns: [
      "Additional formatting for complex data sets",
      "Creation of graphical abstractss",
    ],
    turnaround: "3–5 business days",
  },
  {
    letter: "P",
    badgeBg: "bg-[#fce8e8] text-[#e04848]",
    title: "Platinum",
    subtitle:
      "High-End Publication Support, Including A Complete Technical Review",
    bgColor: "bg-[#cca777]",
    idealFor:
      "High-impact journal submissions, including conferences and highly competitive publications.",
    includes: [
      "Advanced artwork preparation for multiple figures (graphs, charts, infographics).",
      "Detailed compliance with publisher-specific technical guidelines (e.g., Nature, Lancet, JAMA).",
      "High-resolution file optimization for both print and digital formats.",
    ],
    optionalAddOns: [
      "Multi-panel figure creation",
      "Scientific visualization and infographic design",
    ],
    turnaround: "2–3 business days",
  },
];

export default function ArtworkServicePackages() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
          Artwork Preparation Service Packages
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-10 max-w-5xl">
          Choose from our tailored Artwork Preparation Service packages,
          designed to meet your publication needs, whether you’re submitting to
          your first journal or aiming for high-impact journals.
        </p>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {packagesData.map((pkg, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-gray-200 shadow-sm rounded-t-sm overflow-hidden"
            >
              {/* Header Box */}
              <div className="bg-white p-6 border-b border-gray-200 flex items-start gap-4 min-h-[110px]">
                {/* Circle Letter Badge */}
                <div
                  className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl font-bold shadow-sm ${pkg.badgeBg}`}
                >
                  {pkg.letter}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5 leading-snug">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Colored Content Body */}
              <div
                className={`p-6 flex-1 text-slate-900 space-y-6 ${pkg.bgColor}`}
              >
                {/* Ideal For */}
                <div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-black">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-sm">Ideal for:</h4>
                      <p className="text-xs md:text-sm mt-0.5 leading-snug">
                        {pkg.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-black">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Includes:</h4>
                      <ul className="space-y-2 text-xs md:text-sm">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Optional Add-ons */}
                <div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-black">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-sm mb-1">
                        Optional Add-ons:
                      </h4>
                      <ul className="space-y-1 text-xs md:text-sm">
                        {pkg.optionalAddOns.map((addon, i) => (
                          <li key={i} className="leading-snug">
                            {addon}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Turnaround */}
                <div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-black">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-sm">Turnaround:</h4>
                      <p className="text-xs md:text-sm font-semibold mt-0.5">
                        {pkg.turnaround}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Red Banner CTA */}
        <div className="mb-12">
         <GetFreeQuoteButton/>
        </div>

        {/* Delivery and Pricing Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0c373b] mb-6">
            Delivery and Pricing
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#f2f2f2] border border-gray-300 rounded-sm overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-gray-300 mb-8">
            {/* Price block */}
            <div className="p-6 flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2b71c7] text-white flex items-center justify-center font-bold text-base">
                $
              </div>
              <span className="text-lg font-bold text-slate-800">
                15{" "}
                <span className="font-normal text-slate-700 text-base">
                  per image
                </span>
              </span>
            </div>

            {/* Delivery speed block */}
            <div className="p-6 flex items-center justify-center gap-3">
              <div className="w-8 h-8 text-[#2b71c7] flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-800">
                2{" "}
                <span className="font-normal text-slate-700 text-base">
                  images per day
                </span>
              </span>
            </div>
          </div>

          {/* Secondary CTA Button */}
          <a
            href="#pricing"
            className="inline-block bg-[#113b3b] hover:bg-[#092222] text-white font-bold text-sm md:text-base py-3 px-8 rounded-full transition-colors shadow-md"
          >
            Check Pricing & Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

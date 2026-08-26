"use client";

import React from "react";
import CommonPackages from "@/components/common/CommonPackages"; // Adjust import path as needed
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

const artworkPackages = [
  {
    icon: "/images/publication-support/art-work-preparation/S.png",
    title: "Silver",
    subtitle: "Budget Publication-Support Package",
    cardBgColor: "#c8d6d5",
    titleColor: "#004b5a",
    idealFor: "Early-stage researchers or first-time journal submitters.",
    includes: [
      "Basic figure formatting and resolution adjustments.",
      "Compliance with general submission guidelines.",
      "Image optimization for clarity and legibility.",
    ],
    addOns: ["Extra revisions", "Additional figures/illustrations"],
    turnaround: "5–7 business days",
  },
  {
    icon: "/images/publication-support/art-work-preparation/gold-icons.png",
    title: "Gold",
    subtitle: "End-To-End Publication-Focused Support For Up To Two Journals",
    cardBgColor: "#cbb8d7",
    titleColor: "#6b2d82",
    idealFor:
      "Researchers preparing manuscripts for mid-tier or specialty journals.",
    includes: [
      "Comprehensive figure formatting (e.g., colour mode, resolution, fonts).",
      "Layout and label adjustments as per journal-specific requirements.",
      "Metadata embedding and image compression for optimal submission",
    ],
    addOns: [
      "Additional formatting for complex data sets",
      "Creation of graphical abstracts",
    ],
    turnaround: "3–5 business days",
  },
  {
    icon: "/images/publication-support/art-work-preparation/pa-icons-.png",
    title: "Platinum",
    subtitle:
      "High-End Publication Support, Including A Complete Technical Review",
    cardBgColor: "#cca777",
    titleColor: "#805826",
    idealFor:
      "High-impact journal submissions, including conferences and highly competitive publications.",
    includes: [
      "Advanced artwork preparation for multiple figures (graphs, charts, infographics).",
      "Detailed compliance with publisher-specific technical guidelines (e.g., Nature, Lancet, JAMA).",
      "High-resolution file optimization for both print and digital formats.",
    ],
    addOns: [
      "Multi-panel figure creation",
      "Scientific visualization and infographic design",
    ],
    turnaround: "2–3 business days",
  },
];

export default function ArtworkServicePackages() {
  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Main Packages Section via CommonPackages */}
        <CommonPackages
          title="Artwork Preparation Service Packages"
          description="Choose from our tailored Artwork Preparation Service packages, designed to meet your publication needs, whether you’re submitting to your first journal or aiming for high-impact journals."
          packages={artworkPackages}
        />

        {/* Primary CTA Button */}
        <div className="my-10 px-4 md:px-8">
          <GetFreeQuoteButton />
        </div>

        {/* Delivery and Pricing Section */}
        <div className="text-center max-w-3xl mx-auto px-4 md:px-8">
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
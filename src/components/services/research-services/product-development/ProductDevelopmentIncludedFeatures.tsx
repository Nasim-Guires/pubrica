"use client";

import React from "react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export interface IncludedFeatureItem {
  id: string;
  title: string;
}

export interface ProductDevelopmentIncludedFeaturesProps {
  className?: string;
}

export default function ProductDevelopmentIncludedFeatures({
  className = "",
}: ProductDevelopmentIncludedFeaturesProps) {
  const features: IncludedFeatureItem[] = [
    {
      id: "experts-support",
      title: "Support from Pubrica’s 500+ domain experts",
    },
    {
      id: "regulatory-alignment",
      title:
        "Reports aligned with global regulatory authorities (FDA, EMA, EFSA, FSSAI, AYUSH, etc.)",
    },
    {
      id: "evidence-based",
      title:
        "Scientifically defensible evidence based on Level A research, clinical trials, and validated databases",
    },
  ];

  return (
    <section className={`w-full bg-white pt-0 pb-0 mt-6 text-slate-800 font-sans ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#0b3b2c] mt-0 mb-3">
          All Packages Include:
        </h2>

        {/* Bullet List */}
        <ul className="list-disc pl-5 space-y-2 mb-8 max-w-4xl text-gray-800">
          {features.map((item) => (
            <li key={item.id} className="text-sm sm:text-base leading-snug font-normal">
              {item.title}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="text-center">
          <GetFreeQuoteButton />
        </div>
      </div>
    </section>
  );
}
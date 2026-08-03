"use client";

import React from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export interface IncludedFeatureItem {
  id: string;
  title: string;
  iconPlaceholder: string;
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
      iconPlaceholder: "[ Icon: Domain Experts ]",
    },
    {
      id: "regulatory-alignment",
      title: "Reports aligned with global regulatory authorities (FDA, EMA, EFSA, FSSAI, AYUSH, etc.)",
      iconPlaceholder: "[ Icon: Regulatory Authorities ]",
    },
    {
      id: "evidence-based",
      title: "Scientifically defensible evidence based on Level A research, clinical trials, and validated databases",
      iconPlaceholder: "[ Icon: Level A Research ]",
    },
  ];

  return (
    <section className={`w-full bg-slate-50/70 py-12 text-slate-800 font-sans ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-3">
            All Packages Include
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Every product development solution is backed by our full suite of expert resources, regulatory oversight, and clinical-grade evidence.
          </p>
        </header>

        {/* Stacked Vertical Bullet Points List (No Cards) */}
        <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
          {features.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm"
            >
              {/* Bullet Icon Placeholder */}
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex-shrink-0 flex items-center justify-center border border-dashed border-emerald-300 mt-0.5">
                <span className="text-[8px] text-emerald-800 font-bold text-center">
                  {item.iconPlaceholder}
                </span>
              </div>

              {/* Text Content */}
              <span className="text-xs sm:text-sm font-semibold text-[#1b2b28] leading-relaxed pt-1">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="text-center">
         <GetFreeQuoteButton/>
        </div>
      </div>
    </section>
  );
}
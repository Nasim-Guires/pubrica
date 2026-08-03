"use client";

import React from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export interface VerticalItem {
  id: string;
  title: string;
  iconPlaceholder: string;
}

export interface IndustryVerticalsAndProcessProps {
  className?: string;
}

export default function IndustryVerticalsAndProcess({
  className = "",
}: IndustryVerticalsAndProcessProps) {
  const verticals: VerticalItem[] = [
    {
      id: "pharmaceuticals",
      title: "Pharmaceuticals",
      iconPlaceholder: "[ Icon: Medicine Bottle ]",
    },
    {
      id: "biotechnology",
      title: "Biotechnology",
      iconPlaceholder: "[ Icon: Microscope ]",
    },
    {
      id: "nutraceuticals",
      title: "Nutraceuticals & Dietary Supplements",
      iconPlaceholder: "[ Icon: Supplement Jar ]",
    },
    {
      id: "herbal-ayush",
      title: "Herbal/AYUSH products",
      iconPlaceholder: "[ Icon: Mortar & Pestle ]",
    },
    {
      id: "functional-foods",
      title: "Functional Foods & Beverages",
      iconPlaceholder: "[ Icon: Food & Bottle ]",
    },
    {
      id: "medical-devices",
      title: "Medical Devices",
      iconPlaceholder: "[ Icon: Medical Equipment ]",
    },
    {
      id: "cosmetics",
      title: "Cosmetics & Cosmeceuticals",
      iconPlaceholder: "[ Icon: Skincare Products ]",
    },
    {
      id: "pet-health",
      title: "Pet Health & Pet Food",
      iconPlaceholder: "[ Icon: Pet Food Bag ]",
    },
    {
      id: "life-sciences",
      title: "Life Sciences & Healthcare Research",
      iconPlaceholder: "[ Icon: Plant Flask ]",
    },
  ];

  return (
    <section className={`w-full bg-slate-50/50 py-12 text-slate-800 font-sans ${className}`}>
      {/* Top Tagline Sub-header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
          Whether you&apos;re launching a novel compound or validating an existing ingredient, Pubrica&apos;s Discovery & Intelligence Services are built to move you from research to regulatory-ready with clarity and scientific confidence.
        </p>
      </div>

      {/* Main Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28]">
            The Industry Vertical We Serve
          </h2>
        </header>

        {/* 3x3 Grid of Verticals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {verticals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Icon Placeholder Container */}
              <div className="w-16 h-16 mb-4 rounded-full bg-emerald-50/60 group-hover:bg-emerald-100/80 flex items-center justify-center border border-dashed border-emerald-300 transition-colors">
                <span className="text-[10px] text-emerald-800 font-semibold text-center leading-tight px-1">
                  {item.iconPlaceholder}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-[#1b2b28] group-hover:text-emerald-900 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="mt-10 text-center">
          <GetFreeQuoteButton/>
        </div>
      </div>
    </section>
  );
}
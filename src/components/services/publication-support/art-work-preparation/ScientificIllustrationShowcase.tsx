"use client";

import React, { useState } from "react";
import Image from "next/image";

type TabKey = "creation" | "enhancement" | "formatting";

interface ShowcaseTabContent {
  id: TabKey;
  label: string;
  descriptions: string[];
  beforeImage: string;
  afterImage: string;
}

const tabData: ShowcaseTabContent[] = [
  {
    id: "creation",
    label: "Illustration Creation",
    descriptions: [
      "Professional illustrators produce high-quality vector images specifically for your research.",
      "You just send your hand-drawn sketches or reference images in the desired style. We will provide you with editable, journal-compliant illustrations for publication or presentation.",
    ],
    beforeImage: "/images/showcase/creation-before.jpg",
    afterImage: "/images/showcase/creation-after.jpg",
  },
  {
    id: "enhancement",
    label: "Artwork Enhancement",
    descriptions: [
      "Not satisfied with your existing figure? We refines and enhances your visuals to ensure they align with your vision and meet publication standards.",
    ],
    beforeImage: "/images/showcase/enhancement-before.jpg",
    afterImage: "/images/showcase/enhancement-after.jpg",
  },
  {
    id: "formatting",
    label: "Artwork Formatting",
    descriptions: [
      "We makes precise adjustments to your figures based on the target journal's submission guidelines and ensure every visual is technically compliant and ready for submission.",
    ],
    beforeImage: "/images/showcase/formatting-before.jpg",
    afterImage: "/images/showcase/formatting-after.jpg",
  },
];

export default function ScientificIllustrationShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("creation");

  const currentContent =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-8 text-left leading-tight">
          See How Pubrica Creates Scientific Illustrations, Graphical Abstracts,
          and Publication-Ready Figures
        </h2>

        {/* Tab Selector Pill Bar */}
        <div className="mb-8">
          <div className="bg-[#115b5c] p-1.5 rounded-full flex flex-col sm:flex-row items-center justify-between gap-1 max-w-4xl mx-auto">
            {tabData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full sm:w-1/3 py-3 px-6 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#052b2b] text-white shadow-md"
                      : "text-white hover:text-emerald-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Description Text */}
        <div className="mb-8 max-w-5xl text-left space-y-3">
          {currentContent.descriptions.map((desc, idx) => (
            <p
              key={idx}
              className="text-sm md:text-base text-slate-700 leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>

        {/* Before / After Comparison Card Container */}
        <div className="bg-[#f2faf5] rounded-xl p-4 md:p-8 border border-emerald-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-stretch">
            {/* Divider Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-emerald-200/60 -translate-x-1/2 z-10" />

            {/* Before Image Side */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="bg-[#bd0a0a] text-white text-xs font-bold px-5 py-1 rounded-full uppercase tracking-wide">
                  Before
                </span>
              </div>
              <div className="relative w-full h-[320px] sm:h-[400px] bg-white rounded-lg p-2 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src={currentContent.beforeImage}
                  alt={`${currentContent.label} - Before`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* After Image Side */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="bg-[#052b2b] text-white text-xs font-bold px-5 py-1 rounded-full uppercase tracking-wide">
                  After
                </span>
              </div>
              <div className="relative w-full h-[320px] sm:h-[400px] bg-white rounded-lg p-2 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src={currentContent.afterImage}
                  alt={`${currentContent.label} - After`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

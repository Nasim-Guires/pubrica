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
    beforeImage: "/images/publication-support/art-work-preparation/Illustration-Creation-Images-Before.png",
    afterImage: "/images/publication-support/art-work-preparation/Illustration-Creation-after.jpg",
  },
  {
    id: "enhancement",
    label: "Artwork Enhancement",
    descriptions: [
      "Not satisfied with your existing figure? We refines and enhances your visuals to ensure they align with your vision and meet publication standards.",
    ],
    beforeImage: "/images/publication-support/art-work-preparation/Eye-min.jpg",
    afterImage: "/images/publication-support/art-work-preparation/Artwork-Enhancement-after.jpg",
  },
  {
    id: "formatting",
    label: "Artwork Formatting",
    descriptions: [
      "We makes precise adjustments to your figures based on the target journal's submission guidelines and ensure every visual is technically compliant and ready for submission.",
    ],
    beforeImage: "/images/publication-support/art-work-preparation/Artwork-Formatting.png",
    afterImage: "/images/publication-support/art-work-preparation/Artwork-Formatting-after.webp",
  },
];

export default function ScientificIllustrationShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("creation");
  const [mobileView, setMobileView] = useState<"before" | "after">("after");

  const currentContent =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <section className="w-full bg-white py-6 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Main Title */}
        <h2 className="text-xl md:text-3xl font-bold text-[#0c373b] mb-6 md:mb-8 text-left leading-tight">
          See How Pubrica Creates Scientific Illustrations, Graphical Abstracts,
          and Publication-Ready Figures
        </h2>

        {/* Tab Selector - Scrollable Horizontal Pills on Mobile */}
        <div className="mb-6 md:mb-8">
          <div className="flex md:inline-flex overflow-x-auto no-scrollbar bg-[#115b5c] p-1.5 rounded-2xl md:rounded-full gap-1.5 w-full md:max-w-4xl mx-auto shadow-inner">
            {tabData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex-1 py-2.5 px-4 md:py-3 md:px-6 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#052b2b] text-white shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Description Text */}
        <div className="mb-6 md:mb-8 max-w-5xl text-left space-y-2 md:space-y-3">
          {currentContent.descriptions.map((desc, idx) => (
            <p
              key={idx}
              className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>

        {/* --- MOBILE COMPARISON VIEW (< md) --- */}
        <div className="block md:hidden bg-[#f2faf5] rounded-2xl p-4 border border-emerald-100 shadow-sm">
          {/* Mobile Image Toggle Bar */}
          <div className="flex bg-slate-200/70 p-1 rounded-xl mb-4">
            <button
              type="button"
              onClick={() => setMobileView("before")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                mobileView === "before"
                  ? "bg-[#bd0a0a] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              BEFORE
            </button>
            <button
              type="button"
              onClick={() => setMobileView("after")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                mobileView === "after"
                  ? "bg-[#052b2b] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              AFTER
            </button>
          </div>

          {/* Mobile Active Image Display */}
          <div className="relative w-full h-[260px] sm:h-[320px] bg-white rounded-xl p-2 overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center">
            <Image
              src={
                mobileView === "before"
                  ? currentContent.beforeImage
                  : currentContent.afterImage
              }
              alt={`${currentContent.label} - ${mobileView}`}
              fill
              className="object-contain p-2 transition-opacity duration-300"
              sizes="100vw"
              priority
            />
          </div>

          {/* Quick Dual-Thumbnail Selector below main image */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-emerald-100/80">
            <button
              type="button"
              onClick={() => setMobileView("before")}
              className={`relative flex flex-col items-center p-1.5 rounded-lg border-2 transition-all ${
                mobileView === "before"
                  ? "border-[#bd0a0a] bg-red-50/40"
                  : "border-transparent opacity-70"
              }`}
            >
              <span className="text-[10px] font-bold text-[#bd0a0a] uppercase mb-1">
                Before Visual
              </span>
              <div className="relative w-full h-16 bg-white rounded overflow-hidden">
                <Image
                  src={currentContent.beforeImage}
                  alt="Before thumbnail"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMobileView("after")}
              className={`relative flex flex-col items-center p-1.5 rounded-lg border-2 transition-all ${
                mobileView === "after"
                  ? "border-[#052b2b] bg-emerald-50/40"
                  : "border-transparent opacity-70"
              }`}
            >
              <span className="text-[10px] font-bold text-[#052b2b] uppercase mb-1">
                After Visual
              </span>
              <div className="relative w-full h-16 bg-white rounded overflow-hidden">
                <Image
                  src={currentContent.afterImage}
                  alt="After thumbnail"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </button>
          </div>
        </div>

        {/* --- DESKTOP COMPARISON VIEW (>= md) --- */}
        <div className="hidden md:block bg-[#f2faf5] rounded-xl p-8 border border-emerald-50">
          <div className="grid grid-cols-2 gap-6 relative items-stretch">
            {/* Divider Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-emerald-200/60 -translate-x-1/2 z-10" />

            {/* Before Image Side */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="bg-[#bd0a0a] text-white text-xs font-bold px-5 py-1 rounded-full uppercase tracking-wide">
                  Before
                </span>
              </div>
              <div className="relative w-full h-[400px] bg-white rounded-lg p-2 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src={currentContent.beforeImage}
                  alt={`${currentContent.label} - Before`}
                  fill
                  className="object-contain p-2"
                  sizes="50vw"
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
              <div className="relative w-full h-[400px] bg-white rounded-lg p-2 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src={currentContent.afterImage}
                  alt={`${currentContent.label} - After`}
                  fill
                  className="object-contain p-2"
                  sizes="50vw"
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
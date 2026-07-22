"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ComplianceOrg {
  name: string;
  acronym: string;
  // SVG placeholder logos styled to match the organizations in the reference image
  logo: React.ReactNode;
}

const conferenceOrgs: ComplianceOrg[] = [
  {
    name: "American Society of Clinical Oncology",
    acronym: "ASCO",
    logo: (
      <div className="text-2xl font-black tracking-widest text-[#1a365d]">
        ASCO<span className="text-[#e53e3e] text-xs align-super">®</span>
      </div>
    ),
  },
  {
    name: "American Heart Association",
    acronym: "AHA",
    logo: (
      <div className="flex items-center space-x-2">
        <svg
          className="w-8 h-8 text-[#cc0000] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="text-left text-[11px] font-bold text-gray-800 leading-tight">
          American
          <br />
          Heart
          <br />
          Association<span className="text-xs">®</span>
        </div>
      </div>
    ),
  },
  {
    name: "American Diabetes Association",
    acronym: "ADA",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-2 border-[#b91c1c] rotate-45 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#b91c1c]"></div>
        </div>
        <div className="text-left text-[11px] font-bold text-[#1e3a8a] leading-tight">
          American
          <br />
          Diabetes
          <br />
          Association<span className="text-xs">®</span>
        </div>
      </div>
    ),
  },
  {
    name: "European Society for Medical Oncology",
    acronym: "ESMO",
    logo: (
      <div className="flex items-center space-x-1 font-black text-xl tracking-tight">
        <span className="text-[#15803d]">ES</span>
        <span className="text-[#b91c1c]">M</span>
        <span className="text-[#1d4ed8]">O</span>
      </div>
    ),
  },
  {
    name: "World Health Organization",
    acronym: "WHO",
    logo: (
      <div className="flex flex-col items-center">
        <svg
          className="w-10 h-10 text-[#0284c7]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18 14.5 14.5 0 000-18z" />
        </svg>
        <span className="text-[10px] font-bold text-[#0284c7] mt-1">
          World Health Organization
        </span>
      </div>
    ),
  },
  {
    name: "Indian Council of Medical Research",
    acronym: "ICMR",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-[8px] text-center font-bold text-[#1e3a8a]">
          icmr
        </div>
        <div className="text-left">
          <div className="text-xs font-extrabold text-[#1e3a8a]">icmr</div>
          <div className="text-[8px] text-gray-500 font-semibold uppercase leading-tight">
            Indian Council of
            <br />
            Medical Research
          </div>
        </div>
      </div>
    ),
  },
];

export default function ComplianceAndSampleSections() {
  const [activeTab, setActiveTab] = useState<"conference" | "clinical">(
    "conference",
  );

  return (
    <section className="w-full bg-white font-sans pt-12 pb-16">
      {/* ------------------------------------------------------------------ */}
      {/* 1. OUR COMPLIANCE AND GUIDELINE STANDARDS                          */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
          Our Compliance and Guideline Standards
        </h2>
        <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto mb-8 leading-relaxed">
          At Pubrica, we guarantee that each academic and scientific poster we
          create adheres to the required international, institutional, and
          conference-specific guidelines.
        </p>

        {/* Tab Toggle Pill Container */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#124e43] p-1.5 rounded-full inline-flex items-center shadow-inner max-w-2xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("conference")}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeTab === "conference"
                  ? "bg-[#062c24] text-[#4ade80] shadow"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Conference-Specific Compliance
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("clinical")}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeTab === "clinical"
                  ? "bg-[#062c24] text-[#4ade80] shadow"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Clinical and Ethical Compliance
            </button>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {conferenceOrgs.map((org, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 h-44 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                {org.logo}
              </div>
              <p className="font-bold text-xs text-gray-800 text-center leading-snug">
                {org.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. POSTER PREPARATION SAMPLE WORK & DOWNLOAD BANNER                */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-[#effbf5] py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs h-72 sm:h-80 rounded-sm overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
                alt="Man reviewing poster presentation on computer screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Text & Pill CTA Buttons */}
          <div className="md:col-span-7 space-y-6 text-left">
            {/* Upper Callout */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0c3830] mb-3">
                Poster Preparation Sample Work
              </h3>
              <Link
                href="/samples"
                className="inline-block text-center bg-black hover:bg-gray-800 text-white font-medium text-xs md:text-sm py-2.5 px-10 rounded-full transition-colors w-full sm:w-auto"
              >
                Discover More
              </Link>
            </div>

            {/* Lower Callout */}
            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#0c3830] mb-2">
                Download the full Report Now
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed max-w-xl">
                Explore our poster preparation sample work crafted to meet your
                conference&apos;s formatting requirements, visual standards, and
                presentation deadlines.
              </p>
              <Link
                href="/report-download"
                className="inline-block text-center bg-black hover:bg-gray-800 text-white font-medium text-xs md:text-sm py-2.5 px-10 rounded-full transition-colors w-full sm:w-auto"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

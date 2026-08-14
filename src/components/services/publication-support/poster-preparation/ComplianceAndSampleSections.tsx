"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ComplianceOrg {
  name: string;
  acronym: string;
  logo: string;
}

const PAGE_IMAGES = "/images/publication-support/poster-preparation";

const conferenceOrgs: ComplianceOrg[] = [
  {
    name: "American Society of Clinical Oncology",
    acronym: "ASCO",
    logo: `${PAGE_IMAGES}/ASCO-.png`,
  },
  {
    name: "American Heart Association",
    acronym: "AHA",
    logo: `${PAGE_IMAGES}/American-Heart-Association-1.png`,
  },
  {
    name: "American Diabetes Association",
    acronym: "ADA",
    logo: `${PAGE_IMAGES}/American-Diabetes-Association-1.png`,
  },
  {
    name: "European Society for Medical Oncology",
    acronym: "ESMO",
    logo: `${PAGE_IMAGES}/ESMO-.png`,
  },
  {
    name: "World Health Organization",
    acronym: "WHO",
    logo: `${PAGE_IMAGES}/World-Health-Organization-2.png`,
  },
  {
    name: "Indian Council of Medical Research",
    acronym: "ICMR",
    logo: `${PAGE_IMAGES}/Indian-Council-of-Medical-Research-1.png`,
  },
];

const clinicalOrgs: ComplianceOrg[] = [
  {
    name: "Consolidated Standards of Reporting Trials",
    acronym: "CONSORT",
    logo: `${PAGE_IMAGES}/consort-logo-.png`,
  },
  {
    name: "International Committee of Medical Journal Editors",
    acronym: "ICMJE",
    logo: `${PAGE_IMAGES}/ICMJE.png`,
  },
  {
    name: "Health Insurance Portability and Accountability Act",
    acronym: "HIPAA",
    logo: `${PAGE_IMAGES}/HIPAA-COMPILANCE-.png`,
  },
  {
    name: "General Data Protection Regulation",
    acronym: "GDPR",
    logo: `${PAGE_IMAGES}/GDPR.png`,
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
          {(activeTab === "conference" ? conferenceOrgs : clinicalOrgs).map(
            (org, index) => (
            <div
              key={org.acronym}
              className="bg-white border border-gray-200 rounded-xl p-6 h-44 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between"
            >
              <div className="relative flex-1 w-full max-w-[140px] h-20">
                <Image
                  src={org.logo}
                  alt={`${org.acronym} Logo`}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-xs text-gray-800 text-center leading-snug">
                {org.name}
              </p>
            </div>
            ),
          )}
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
                src="/images/publication-support/poster-preparation/sample-works-min.jpg"
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

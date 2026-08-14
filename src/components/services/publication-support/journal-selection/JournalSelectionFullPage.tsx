"use client";

import React, { useState } from "react";

// ==========================================
// DATA TYPES & CONFIG
// ==========================================

// Base image path constant
const CRITERIA_IMAGE_BASE_PATH = "/images/publication-support/journal-selection/";

interface AudienceCard {
  id: string;
  title: string;
  imageUrl: string;
}

interface StepItem {
  id: number;
  title: string;
  description: string;
  position: "top" | "bottom";
  iconUrl: string;
}

interface CriteriaTab {
  id: string;
  label: string;
  cards: {
    title: string;
    iconUrl: string;
  }[];
}

// 1. Audience Data
const audienceList: AudienceCard[] = [
  {
    id: "1",
    title: "Researchers & Academicians",
    imageUrl:
      "/images/publication-support/journal-selection/Researchers-Academicians.webp",
  },
  {
    id: "2",
    title: "PhD Scholars",
    imageUrl:
      "/images/publication-support/journal-selection/PhD-Scholars.webp",
  },
  {
    id: "3",
    title: "Research Institutions & Labs",
    imageUrl:
      "/images/publication-support/journal-selection/Research-Institutions-Labs.webp",
  },
  {
    id: "4",
    title: "Medical Writers & Life Science",
    imageUrl:
      "/images/publication-support/journal-selection/Medical-Writers-Life-Science.webp",
  },
];

// 2. Step-by-Step Data
const stepsList: StepItem[] = [
  {
    id: 1,
    title: "IDENTIFY JOURNAL SCOPE AND OBJECTIVES",
    description:
      "We start by understanding your manuscript and matching it with journals that align with your research domain and objectives.",
    position: "bottom",
    iconUrl: "/images/publication-support/journal-selection/scopeofthejournal.webp",
  },
  {
    id: 2,
    title: "REVIEW PREVIOUSLY PUBLISHED ARTICLES",
    description:
      "We evaluate journals that have published similar topics to ensure your work aligns with their editorial interests.",
    position: "top",
    iconUrl: "/images/publication-support/journal-selection/target-readership.webp",
  },
  {
    id: 3,
    title: "EVALUATE JOURNAL POLICIES & GUIDELINES",
    description:
      "Our team checks submission criteria, manuscript formatting, and open access policies to ensure compliance.",
    position: "bottom",
    iconUrl: "/images/publication-support/journal-selection/scopeofthejournal.webp",
  },
  {
    id: 4,
    title: "ANALYZE JOURNAL IMPACT & REPUTATION",
    description:
      "We assess metrics like Journal Impact Factor (JIF), Scopus rankings, and indexing databases.",
    position: "top",
    iconUrl: "/images/publication-support/journal-selection/visibilityquality.webp",
  },
  {
    id: 5,
    title: "ASSESS JOURNAL VISIBILITY AND REACH",
    description:
      "Choosing journals with wide readership and high discoverability improves your research visibility.",
    position: "bottom",
    iconUrl: "/images/publication-support/journal-selection/target-readership.webp",
  },
  {
    id: 6,
    title: "CONSIDER TIMEFRAMES AND COST FACTORS",
    description:
      "We provide insights into submission-to-publication timelines and APCs (if any), helping you plan effectively.",
    position: "top",
    iconUrl: "/images/publication-support/journal-selection/scopeofthejournal.webp",
  },
];

// 3. Criteria Tabs Data (Updated with Image Paths)
const criteriaTabs: CriteriaTab[] = [
  {
    id: "discipline",
    label: "By Discipline",
    cards: [
      {
        title: "Medical Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Medical-Science.png`,
      },
      {
        title: "Life Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Life-Science.png`,
      },
      {
        title: "Engineering & Technology",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Engineering-Technology.png`,
      },
      {
        title: "Social Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Social-science.png`,
      },
    ],
  },
  {
    id: "quality",
    label: "By Journal Quality",
    cards: [
     {
        title: "Medical Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Medical-Science.png`,
      },
      {
        title: "Life Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Life-Science.png`,
      },
      {
        title: "Engineering & Technology",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Engineering-Technology.png`,
      },
      {
        title: "Social Sciences",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Social-science.png`,
      },
    ],
  },
  {
    id: "indexing",
    label: "By Indexing & Accreditation",
    cards: [
      {
        title: "PubMed",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/PUBMED.png`,
      },
      {
        title: "Scopus",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Scopus.png`,
      },
       {
        title: "Web of Science",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Web-of-Science.png`,
      },
      {
        title: "DOAJ",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/DOAJ.png`,
      },
      
    ],
  },
  {
    id: "special",
    label: "By Special Criteria",
    cards: [
      {
        title: "Fast Track Publication",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/fast-track.webp`,
      },
      {
        title: "Open Access / Low APC",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/open-access.webp`,
      },
    ],
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function JournalSelectionFullPage() {
  const [activeTab, setActiveTab] = useState<string>("discipline");

  const currentTabObj =
    criteriaTabs.find((t) => t.id === activeTab) || criteriaTabs[0];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: WHO WE SERVE                              */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] text-left">
          Who We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceList.map((card) => (
            <div
              key={card.id}
              className="group relative h-56 rounded-sm overflow-hidden shadow-sm cursor-pointer border border-slate-200"
            >
              {/* Background Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Card Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xs sm:text-sm leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: HOW JOURNAL SELECTION WORKS (STEP-BY-STEP)*/}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto space-y-12 py-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            How a Journal Selection: Writing and Rewriting Works
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700">
            Our step-by-Step Process
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative py-10">
          {/* Main Horizontal Timeline Bar */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-[#008ba3] -translate-y-1/2 z-0" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {stepsList.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center justify-between min-h-[420px]"
              >
                {/* TOP SLOT */}
                <div className="w-full flex flex-col items-center justify-end min-h-[200px] pb-4">
                  {step.position === "top" ? (
                    <StepCard step={step} />
                  ) : (
                    <StepNumberCircle number={step.id} />
                  )}
                </div>

                {/* MIDDLE CONNECTOR (Desktop Line Connector) */}
                <div className="hidden lg:block h-8 w-0.5 bg-[#008ba3]" />

                {/* BOTTOM SLOT */}
                <div className="w-full flex flex-col items-center justify-start min-h-[200px] pt-4">
                  {step.position === "bottom" ? (
                    <StepCard step={step} />
                  ) : (
                    <StepNumberCircle number={step.id} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: JOURNAL SELECTION BY CRITERIA            */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto space-y-8">
        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Journal Selection by Criteria
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Organize journal matching by different decision-making filters:
          </p>
        </div>

        {/* Tab Pills Bar */}
        <div className="bg-[#0f4c5c] p-1.5 rounded-full flex flex-wrap items-center justify-between gap-1 max-w-4xl mx-auto shadow-inner">
          {criteriaTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 text-center ${
                  isActive
                    ? "bg-[#062c35] text-white shadow-md"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid for Selected Tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {currentTabObj.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4 min-h-[180px] justify-center"
            >
              {/* Image Icon Slot */}
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={card.iconUrl}
                  alt={card.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// HELPER COMPONENTS
// ==========================================

// Step Card with Bigger Dimensions & Dynamic Hover
function StepCard({ step }: { step: StepItem }) {
  return (
    <div className="group w-full bg-white border border-slate-200 hover:bg-[#333333] hover:border-[#333333] rounded-md p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer min-h-[160px] justify-center">
      {/* Icon Image */}
      <div className="mb-3 w-10 h-10 flex items-center justify-center">
        <img
          src={step.iconUrl}
          alt={step.title}
          className="max-h-full max-w-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
        />
      </div>

      {/* Card Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-white uppercase tracking-tight leading-tight mb-2 transition-colors">
        {step.title}
      </h3>

      {/* Card Description */}
      <p className="text-[11px] sm:text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
        {step.description}
      </p>
    </div>
  );
}

// Circle Indicator for Step Numbers
function StepNumberCircle({ number }: { number: number }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold text-base flex items-center justify-center shadow-md">
      {number}
    </div>
  );
}
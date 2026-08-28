"use client";

import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
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
const stepsList = [
  {
    stepNumber: 1,
    title: "IDENTIFY JOURNAL SCOPE AND OBJECTIVES",
    description:
      "We start by understanding your manuscript and matching it with journals that align with your research domain and objectives.",
    iconSrc: "/images/publication-support/journal-selection/scopeofthejournal.webp",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "REVIEW PREVIOUSLY PUBLISHED ARTICLES",
    description:
      "We evaluate journals that have published similar topics to ensure your work aligns with their editorial interests.",
    iconSrc: "/images/publication-support/journal-selection/target-readership.webp",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "EVALUATE JOURNAL POLICIES & GUIDELINES",
    description:
      "Our team checks submission criteria, manuscript formatting, and open access policies to ensure compliance.",
    iconSrc: "/images/publication-support/journal-selection/scopeofthejournal.webp",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "ANALYZE JOURNAL IMPACT & REPUTATION",
    description:
      "We assess metrics like Journal Impact Factor (JIF), Scopus rankings, and indexing databases.",
    iconSrc: "/images/publication-support/journal-selection/visibilityquality.webp",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "ASSESS JOURNAL VISIBILITY AND REACH",
    description:
      "Choosing journals with wide readership and high discoverability improves your research visibility.",
    iconSrc: "/images/publication-support/journal-selection/target-readership.webp",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "CONSIDER TIMEFRAMES AND COST FACTORS",
    description:
      "We provide insights into submission-to-publication timelines and APCs (if any), helping you plan effectively.",
    iconSrc: "/images/publication-support/journal-selection/scopeofthejournal.webp",
    position: "top",
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
        title: "Rapid Review",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Rapid-Review.png`,
      },
      {
        title: "Low APCs",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Low-APCs.png`,
      },
      {
        title: "Multilingual Support",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Multilingual-Support.png`,
      },
      {
        title: "Regional Journals",
        iconUrl: `${CRITERIA_IMAGE_BASE_PATH}/Regional-Journals.png`,
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
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">
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
              className="group relative h-56 rounded-sm overflow-hidden shadow-sm  border border-slate-200"
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
      <EditorialWorkflowSection
        heading="How a Journal Selection: Writing and Rewriting Works"
        subheading="Our Step-by-Step Process"
        steps={stepsList}
      />

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: JOURNAL SELECTION BY CRITERIA             */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto space-y-6 px-4 sm:px-6 font-poppins">
        {/* Heading */}
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b44]">
            Journal Selection by Criteria
          </h2>
          <p className="text-base text-slate-600">
            Organize journal matching by different decision-making filters:
          </p>
        </div>

        {/* Tab Bar Option 1: Underline Nav */}
        <div className="border-b border-slate-200">
          <div className="flex overflow-x-auto gap-4 sm:gap-8 no-scrollbar pb-px">
            {criteriaTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 text-base font-bold whitespace-nowrap transition-colors relative border-b-2 -mb-px ${isActive
                      ? "border-[#0f4c5c] text-[#0f4c5c]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {currentTabObj.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-3 min-h-[160px] sm:min-h-[180px] justify-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img
                  src={card.iconUrl}
                  alt={card.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-slate-800 leading-snug">
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
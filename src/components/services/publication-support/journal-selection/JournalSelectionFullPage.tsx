"use client";

import React, { useState } from "react";

// ==========================================
// DATA TYPES & CONFIG
// ==========================================

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
}

interface CriteriaTab {
  id: string;
  label: string;
  cards: {
    title: string;
    iconSvg: React.ReactNode;
  }[];
}

// 1. Audience Data
const audienceList: AudienceCard[] = [
  {
    id: "1",
    title: "Researchers & Academicians",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    title: "PhD Scholars",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    title: "Research Institutions & Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    title: "Medical Writers & Life Science",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    id: 2,
    title: "REVIEW PREVIOUSLY PUBLISHED ARTICLES",
    description:
      "We evaluate journals that have published similar topics to ensure your work aligns with their editorial interests.",
    position: "top",
  },
  {
    id: 3,
    title: "EVALUATE JOURNAL POLICIES & GUIDELINES",
    description:
      "Our team checks submission criteria, manuscript formatting, and open access policies to ensure compliance.",
    position: "bottom",
  },
  {
    id: 4,
    title: "ANALYZE JOURNAL IMPACT & REPUTATION",
    description:
      "We assess metrics like Journal Impact Factor (JIF), Scopus rankings, and indexing databases.",
    position: "top",
  },
  {
    id: 5,
    title: "ASSESS JOURNAL VISIBILITY AND REACH",
    description:
      "Choosing journals with wide readership and high discoverability improves your research visibility.",
    position: "bottom",
  },
  {
    id: 6,
    title: "CONSIDER TIMEFRAMES AND COST FACTORS",
    description:
      "We provide insights into submission-to-publication timelines and APCs (if any), helping you plan effectively.",
    position: "top",
  },
];

// 3. Criteria Tabs Data
const criteriaTabs: CriteriaTab[] = [
  {
    id: "discipline",
    label: "By Discipline",
    cards: [
      {
        title: "Medical Sciences",
        iconSvg: (
          <svg
            className="w-12 h-12 text-teal-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3h-6m9 1.5a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "Life Sciences",
        iconSvg: (
          <svg
            className="w-12 h-12 text-amber-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c-2.5 3-4 6.5-4 9s1.5 6 4 9m0-18c2.5 3 4 6.5 4 9s-1.5 6-4 9m-9-9h18"
            />
          </svg>
        ),
      },
      {
        title: "Engineering & Technology",
        iconSvg: (
          <svg
            className="w-12 h-12 text-cyan-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
            />
          </svg>
        ),
      },
      {
        title: "Social Sciences",
        iconSvg: (
          <svg
            className="w-12 h-12 text-purple-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M12 15a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    id: "quality",
    label: "By Journal Quality",
    cards: [
      {
        title: "High Impact Factor (JIF)",
        iconSvg: (
          <svg
            className="w-12 h-12 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28 2.126 5.94z"
            />
          </svg>
        ),
      },
      {
        title: "Q1 / Q2 Quartile Journals",
        iconSvg: (
          <svg
            className="w-12 h-12 text-yellow-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.421.875-.843.628l-4.69-2.744a.562.562 0 00-.542 0l-4.69 2.744c-.422.247-.959-.142-.843-.628l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        ),
      },
      {
        title: "Peer-Reviewed Excellence",
        iconSvg: (
          <svg
            className="w-12 h-12 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    id: "indexing",
    label: "By Indexing & Accreditation",
    cards: [
      {
        title: "Scopus / Web of Science",
        iconSvg: (
          <svg
            className="w-12 h-12 text-orange-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
            />
          </svg>
        ),
      },
      {
        title: "PubMed / Medline",
        iconSvg: (
          <svg
            className="w-12 h-12 text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    id: "special",
    label: "By Special Criteria",
    cards: [
      {
        title: "Fast Track Publication",
        iconSvg: (
          <svg
            className="w-12 h-12 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        ),
      },
      {
        title: "Open Access / Low APC",
        iconSvg: (
          <svg
            className="w-12 h-12 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        ),
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
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            How a Journal Selection: Writing and Rewriting Works
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700">
            Our step-by-Step Process
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative py-8">
          {/* Main Horizontal Timeline Bar */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-[#008ba3] -translate-y-1/2 z-0" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-3 relative z-10">
            {stepsList.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center justify-between min-h-[340px]"
              >
                {/* TOP SLOT */}
                <div className="w-full flex flex-col items-center justify-end h-[160px] pb-3">
                  {step.position === "top" ? (
                    <StepCard step={step} />
                  ) : (
                    <StepNumberCircle number={step.id} />
                  )}
                </div>

                {/* MIDDLE CONNECTOR (Desktop Line Connector) */}
                <div className="hidden lg:block h-6 w-0.5 bg-[#008ba3]" />

                {/* BOTTOM SLOT */}
                <div className="w-full flex flex-col items-center justify-start h-[160px] pt-3">
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
              {card.iconSvg}
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

// Step Card with Hover Effect (Default White -> Hover Dark Charcoal)
function StepCard({ step }: { step: StepItem }) {
  return (
    <div className="group w-full bg-white hover:bg-[#525252] border border-slate-200 hover:border-[#525252] rounded-xs p-3 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full justify-start cursor-pointer">
      {/* Icon */}
      <div className="mb-2 text-slate-700 group-hover:text-white transition-colors">
        {/* Book / Magnifying Glass SVG Icon */}
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
          />
        </svg>
      </div>

      {/* Card Title */}
      <h3 className="text-[10px] sm:text-xs font-black text-slate-800 group-hover:text-white uppercase tracking-tight leading-tight mb-1.5 transition-colors">
        {step.title}
      </h3>

      {/* Card Description */}
      <p className="text-[9px] sm:text-[10px] text-slate-500 group-hover:text-slate-200 leading-normal transition-colors">
        {step.description}
      </p>
    </div>
  );
}

// Circle Indicator for Step Numbers
function StepNumberCircle({ number }: { number: number }) {
  return (
    <div className="w-9 h-9 rounded-full bg-[#008ba3] text-white font-bold text-sm flex items-center justify-center shadow-sm">
      {number}
    </div>
  );
}

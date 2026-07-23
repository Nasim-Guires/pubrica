"use client";

import React, { useState } from "react";

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}

export const ThesisServiceWorkflow: React.FC = () => {
  // State for toggling individual highlight cards open/closed
  const [openHighlights, setOpenHighlights] = useState<Record<string, boolean>>(
    {
      sme: true,
      "track-revisions": true,
      "qa-editor": true,
      formatting: true,
      "multi-tier": true,
      "deadline-guarantee": true,
    },
  );

  const toggleHighlight = (id: string) => {
    setOpenHighlights((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 1. Service Highlights Data
  const serviceHighlights: HighlightItem[] = [
    {
      id: "sme",
      title: "Subject-Matter Experts",
      description:
        "Our in-house editor allocation system will assign your paper to a professional SME with experience in your subject. Get a free certificate of editing.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      id: "track-revisions",
      title: "Track revisions",
      description:
        "All editing is done with the track changes feature turned on. We share a copy of the revisions for your review and feedback.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "qa-editor",
      title: "Q&A with editor",
      description:
        "Have an unlimited question and answer session with your editor for free.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: "formatting",
      title: "Formatting and word count",
      description:
        "Formatting and word count reduction are done free of charge. If you want your thesis formatted according to a style guide, your editor will do it for you.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      id: "multi-tier",
      title: "Multi-tier editing",
      description:
        "We provide multi-tier editing of the thesis and assure you revisions at least once at a 54% discounted price. The Elite package offers you unlimited editing for one year.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: "deadline-guarantee",
      title: "Guarantee within the deadline",
      description:
        "Affordable thesis editing prices starting at $360. Flexi-swift plans and 24/7 customer support are available.",
      iconSvg: (
        <svg
          className="w-6 h-6 text-emerald-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  // 2. Process Steps Data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "UPLOAD YOUR MANUSCRIPT, SELECT A SERVICE, AND PLAN",
      description:
        "You start by selecting a service according to your target journal. We then analyze your document and recommend the best plans to choose from. You can choose same-day delivery or a flexible deadline with rates that can accommodate all budgets.",
      iconSvg: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      stepNumber: 2,
      title:
        "THE TWO-STEP EDIT PROCESS DELIVERS TOP-NOTCH QUALITY AND TIMELY DELIVERY",
      description:
        "2 best-suited native editors based on your subject area or past preferences will edit your paper, ensuring your quality requirements and journal guidelines are met. A native reviewer and our quality control algorithms ensure that stringent quality guidelines are met.",
      iconSvg: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      stepNumber: 3,
      title: "REVIEW FINAL FILES, ASK QUESTIONS, AND COLLABORATE.",
      description:
        "Make a payment to download the final files with track changes to review and accept. Ask unlimited questions to your editor till you are satisfied, or get any clarifications from our customer service team. Depending on your plan, you can also work on multiple re-edits based on feedback from your peers or the journal.",
      iconSvg: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* ============================================================= */}
      {/* SECTION 1: OUR SERVICE HIGHLIGHTS (OPENABLE & CLOSABLE CARDS) */}
      {/* ============================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-8">
          Our Service Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHighlights.map((item) => {
            const isOpen = !!openHighlights[item.id];
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-sm transition-all"
              >
                {/* Header Bar (Click to toggle) */}
                <button
                  type="button"
                  onClick={() => toggleHighlight(item.id)}
                  className="w-full bg-[#ebfef5] hover:bg-[#dff9ec] p-3.5 flex items-center justify-between text-left focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <div className="shrink-0">{item.iconSvg}</div>
                    <span className="font-bold text-slate-800 text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-700 font-extrabold text-xl leading-none ml-2 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Body Content */}
                {isOpen && (
                  <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[100px]">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2: HOW OUR THESIS EDITING SERVICE WORKS               */}
      {/* CARD HOVERS TO DARK CHARCOAL / BLACK WITH WHITE TEXT           */}
      {/* ============================================================= */}
      <section className="w-full bg-[#f4f6f8] py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Banner */}
          <div className="bg-[#042825] text-white rounded-sm p-6 text-center mb-10 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Thesis Editing Services at Pubrica
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Our team comprises physicians, PhDs, MDs, postgraduates,
              engineers, and even journal peer reviewers who bring in a high
              level of technical competency and an inclusive understanding of
              the finer nuances of your subject.
            </p>
          </div>

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-2">
              How Our Thesis Editing Service Works
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-[#0d3b36] mb-2">
              Our Step-by-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We make it easy to improve your research work. From the time you
              submit your order until you receive your revised manuscript, our
              team of specialists will ensure precision and quality every step
              of the way.
            </p>
          </div>

          {/* 3 Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
            {processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center group"
              >
                {/* Step Number Circle */}
                <div className="w-11 h-11 rounded-full bg-[#0080a0] text-white font-bold flex items-center justify-center text-base z-10 shadow-sm mb-3">
                  {step.stepNumber}
                </div>

                {/* Blue Connecting Line Indicator */}
                <div className="w-full h-1.5 bg-[#0080a0] mb-4" />

                {/* Card Container: Default state white -> Hover state dark charcoal/black (#424242 / #333333) with white text */}
                <div className="w-full bg-white border border-slate-200 rounded-sm p-6 min-h-[320px] flex flex-col transition-all duration-300 shadow-sm hover:bg-[#424242] hover:text-white hover:border-[#424242] hover:shadow-xl cursor-pointer">
                  {/* Step Icon */}
                  <div className="text-slate-600 group-hover:text-white transition-colors mb-4">
                    {step.iconSvg}
                  </div>

                  {/* Step Heading */}
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 leading-snug text-slate-800 group-hover:text-white transition-colors">
                    {step.title}
                  </h4>

                  {/* Step Text Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-200 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

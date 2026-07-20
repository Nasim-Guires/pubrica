"use client";

import React, { useState } from "react";

// --- Types ---
interface ReasonCard {
  number: string;
  title: string;
  description: string;
}

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const reasons: ReasonCard[] = [
  {
    number: "01",
    title: "Effectively share your research with peers and domain experts",
    description:
      "Did you know that 50% of published papers are never read, and 90% are never cited? Greater visibility helps your research reach more readers and increase citation potential.",
  },
  {
    number: "02",
    title: "Make your research accessible to the public through media outreach",
    description:
      "Research papers supported by press releases receive significantly more media coverage and citations, helping your work reach wider audiences beyond academia.",
  },
  {
    number: "03",
    title: "Convince the right people to fund your research",
    description:
      "A clear, concise, and compelling presentation enables you to communicate your research effectively to investors, funding agencies, and policymakers.",
  },
];

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "IMPACT GOAL DEFINITION",
    description:
      "We begin by identifying your research objectives, target stakeholders, and required impact metrics (e.g., REF, SDG, ARC).",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <path
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
        />
      </svg>
    ),
  },
  {
    stepNumber: 2,
    title: "RESEARCH ASSESSMENT",
    description:
      "Our team evaluates your publications, data, and project outputs to identify impact gaps and content needs.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    stepNumber: 3,
    title: "STRATEGY DEVELOPMENT",
    description:
      "We design a tailored impact strategy that defines dissemination channels, messaging formats, and stakeholder pathways.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"
        />
      </svg>
    ),
  },
  {
    stepNumber: 4,
    title: "CONTENT CREATION",
    description:
      "We develop high-quality, audience-specific materials—such as plain-language summaries, policy briefs, infographics, and video scripts.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    stepNumber: 5,
    title: "REVIEW & COMPLIANCE",
    description:
      "All deliverables undergo expert review for scientific accuracy, clarity, and compliance with institutional or funder guidelines.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    stepNumber: 6,
    title: "DISSEMINATION & IMPACT REPORTING",
    description:
      "We support strategic dissemination and provide tools to monitor, measure, and report the real-world influence of your research.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h18"
        />
      </svg>
    ),
  },
];

export default function ResearchPromotionAndProcess(): React.ReactElement {
  // Default step 2 active to mimic the screenshot demo
  const [activeHoverStep, setActiveHoverStep] = useState<number | null>(2);

  return (
    <div className="w-full font-sans bg-slate-100 text-slate-800">
      {/* ========================================================================= */}
      {/* SECTION 1: WHY SHOULD YOU PROMOTE YOUR RESEARCH?                           */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8">
          Why Should You Promote Your Research?
        </h2>

        {/* Gray Outer Frame Container */}
        <div className="bg-[#e7e8ea] p-6 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Person working with charts and laptop"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Right Cards Stack */}
            <div className="lg:col-span-7 space-y-4">
              {reasons.map((card) => (
                <div
                  key={card.number}
                  className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-bold text-[#09322e] leading-none pt-0.5">
                      {card.number}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#09322e] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="bg-[#0b2823] text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Research Impact Services at Pubrica
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto">
            Our experts craft clear, evidence-based content that highlights the
            significance of your research and supports its visibility, reach,
            and measurable impact.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HOW OUR RESEARCH IMPACT SERVICE WORKS (PROCESS)               */}
      {/* ========================================================================= */}
      <section className="bg-[#f2f3f5] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e]">
            How Our Research Impact Service Works
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-[#1e615e]">
            Our Step-By-Step Process
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Pubrica, our research impact services follow a structured,
            outcome-driven workflow designed to help researchers translate
            complex findings into measurable, real-world influence.
          </p>
        </div>

        {/* Process Cards Step Line Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-stretch relative">
            {processSteps.map((step) => {
              const isEven = step.stepNumber % 2 === 0;
              const isHovered = activeHoverStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col items-center relative group"
                  onMouseEnter={() => setActiveHoverStep(step.stepNumber)}
                  onMouseLeave={() => setActiveHoverStep(null)}
                >
                  {/* Top Step Number Circle (For Odd Steps) */}
                  {!isEven && (
                    <div className="mb-3 z-10">
                      <div className="w-10 h-10 rounded-full bg-[#0081a7] text-white font-bold text-base flex items-center justify-center shadow-sm">
                        {step.stepNumber}
                      </div>
                      {/* Vertical connector line */}
                      <div className="w-0.5 h-3 bg-[#0081a7] mx-auto" />
                    </div>
                  )}

                  {/* Top Line Segment (For Even Steps) */}
                  {isEven && (
                    <div className="w-full h-3 bg-[#0081a7] mb-0 rounded-t-sm" />
                  )}

                  {/* Main Card */}
                  <div
                    className={`w-full flex-1 p-5 rounded-sm shadow-sm transition-all duration-300 flex flex-col items-center text-center border cursor-pointer ${
                      isHovered
                        ? "bg-[#4e5154] text-white border-[#4e5154] shadow-xl scale-[1.02]"
                        : "bg-white text-slate-800 border-slate-200"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-3 ${
                        isHovered ? "text-white" : "text-slate-700"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-xs font-extrabold tracking-wide uppercase mb-3 ${
                        isHovered ? "text-white" : "text-[#09322e]"
                      }`}
                    >
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p
                      className={`text-[11px] leading-relaxed ${
                        isHovered ? "text-slate-100" : "text-slate-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Line Segment (For Odd Steps) */}
                  {!isEven && (
                    <div className="w-full h-3 bg-[#0081a7] mt-0 rounded-b-sm" />
                  )}

                  {/* Bottom Step Number Circle (For Even Steps) */}
                  {isEven && (
                    <div className="mt-3 z-10">
                      {/* Vertical connector line */}
                      <div className="w-0.5 h-3 bg-[#0081a7] mx-auto" />
                      <div className="w-10 h-10 rounded-full bg-[#0081a7] text-white font-bold text-base flex items-center justify-center shadow-sm">
                        {step.stepNumber}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

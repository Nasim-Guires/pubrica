"use client";

import Image from "next/image";
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
  iconSrc: string;
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
    iconSrc: "/images/research-impact/Impact-Goal-Definition.png",
  },
  {
    stepNumber: 2,
    title: "RESEARCH ASSESSMENT",
    description:
      "Our team evaluates your publications, data, and project outputs to identify impact gaps and content needs.",
    iconSrc: "/images/research-impact/Research-Assessment.png",
  },
  {
    stepNumber: 3,
    title: "STRATEGY DEVELOPMENT",
    description:
      "We design a tailored impact strategy that defines dissemination channels, messaging formats, and stakeholder pathways.",
    iconSrc: "/images/research-impact/Strategy-Development.png",
  },
  {
    stepNumber: 4,
    title: "CONTENT CREATION",
    description:
      "We develop high-quality, audience-specific materials—such as plain-language summaries, policy briefs, infographics, and video scripts.",
    iconSrc: "/images/research-impact/Content-Creation.png",
  },
  {
    stepNumber: 5,
    title: "REVIEW & COMPLIANCE",
    description:
      "All deliverables undergo expert review for scientific accuracy, clarity, and compliance with institutional or funder guidelines.",
    iconSrc: "/images/research-impact/Review-Compliance.png",
  },
  {
    stepNumber: 6,
    title: "DISSEMINATION & IMPACT REPORTING",
    description:
      "We support strategic dissemination and provide tools to monitor, measure, and report the real-world influence of your research.",
    iconSrc: "/images/research-impact/Dissemination-Impact-Reporting.png",
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
      <section className="max-w-6xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8">
          Why Should You Promote Your Research?
        </h2>

        {/* Gray Outer Frame Container */}
        <div className="bg-[#e7e8ea] p-6 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] rounded-md overflow-hidden">
              <Image
                src="/images/research-impact/why-promote-image-1.webp"
                alt="People discussing research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
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
      <section className="bg-[#f2f3f5] py-7 px-4 sm:px-6 lg:px-8">
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
                    <div className="mb-3 relative w-8 h-8">
                      <Image
                        src={step.iconSrc}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="32px"
                      />
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

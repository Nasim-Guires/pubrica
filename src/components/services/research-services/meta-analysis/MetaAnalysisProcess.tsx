"use client";

import React from "react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function MetaAnalysisProcess() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Initial Consultation & Requirement Gathering",
      description:
        "We begin by understanding your research goals, target journal, clinical or scientific focus, and any existing materials. Our team collects essential details, including your protocol, preferred databases, and inclusion/exclusion criteria.",
    },
    {
      number: 2,
      title: "Literature Search & Selection",
      description:
        "Our experts conduct a comprehensive, systematic literature search using databases such as PubMed, Scopus, Embase, and Cochrane Library. We follow a transparent selection process with inclusion and exclusion parameters clearly documented.",
    },
    {
      number: 3,
      title: "Data Extraction & Quality Assessment",
      description:
        "We extract relevant quantitative and qualitative data from the selected studies. Quality and bias assessments (e.g., using tools like GRADE, ROBINS-I, or Cochrane Risk of Bias) are performed to ensure data reliability.",
    },
    {
      number: 4,
      title: "Statistical Analysis",
      description:
        "Our biostatisticians perform meta-analytical computations using appropriate models (fixed-effect or random-effect) and tools such as RevMan, STATA, or R. Forest plots, funnel plots, and heterogeneity metrics are included to support your findings.",
    },
    {
      number: 5,
      title: "Manuscript Writing or Rewriting",
      description:
        "We prepare or refine the manuscript based on your requirements, whether it's a first draft, a journal resubmission, or rewriting for clarity and compliance. All content is structured according to PRISMA flow, with clearly defined objectives, methodology, results, and conclusions.",
    },
    {
      number: 6,
      title: "Review & Revisions",
      description:
        "You'll receive a draft for feedback. We provide unlimited revisions within the project scope to ensure your complete satisfaction and alignment with the target journal's expectations.",
    },
    {
      number: 7,
      title: "Final Delivery & Formatting",
      description:
        "Once approved, we deliver the finalized manuscript formatted per journal guidelines and ready for submission. Our service also includes reference management (e.g., EndNote, Mendeley) and figure/table formatting.",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] font-sans pb-16">
      {/* Dark Green Banner Header CTA */}
      <div className="bg-[#003820] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Accelerate Your Meta-Analysis Journey with Pubrica
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            Gain access to your assistant who will expertly guide you through
            intricate journal submission processes, shielding you from rejection
            and ensuring a faster path to getting your work published.
          </p>
          <GetFreeQuoteButton />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto py-12 px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#0c302d] mb-2">
            How Our Meta-Analyses Writing &amp; Rewriting Service Works
          </h2>
          <h3 className="text-sm md:text-base font-semibold text-[#1a403d]">
            Our Step-by-Step Process for High-Quality Meta-Analysis Support
          </h3>
        </div>

        {/* Desktop Process Flow (Matching Image Layout) */}
        <div className="hidden md:flex flex-col items-center">
          {/* ROW 1: Step 1 -> Step 2 -> Step 3 */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 w-full">
            <StepCard step={steps[0]} />
            <ArrowRight />
            <StepCard step={steps[1]} />
            <ArrowRight />
            <StepCard step={steps[2]} />
          </div>

          {/* Vertical Down Arrow from Step 3 to Step 4 */}
          <div className="grid grid-cols-3 w-full py-3">
            <div className="col-start-3 flex justify-center">
              <ArrowDown />
            </div>
          </div>

          {/* ROW 2: Step 6 <- Step 5 <- Step 4 */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 w-full">
            <StepCard step={steps[5]} />
            <ArrowLeft />
            <StepCard step={steps[4]} />
            <ArrowLeft />
            <StepCard step={steps[3]} />
          </div>

          {/* Vertical Down Arrow from Step 6 to Step 7 */}
          <div className="grid grid-cols-3 w-full py-3">
            <div className="col-start-1 flex justify-center">
              <ArrowDown />
            </div>
          </div>

          {/* ROW 3: Step 7 */}
          <div className="grid grid-cols-3 w-full">
            <div className="col-start-1">
              <StepCard step={steps[6]} />
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Stack */}
        <div className="flex md:hidden flex-col items-center space-y-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <StepCard step={step} />
              {index < steps.length - 1 && <ArrowDown />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Individual Step Card Component */}
function StepCard({ step }: { step: Step }) {
  return (
    <div className="bg-white border border-[#0c302d] rounded-lg p-5 flex flex-col items-center text-center shadow-xs h-full min-h-[260px] justify-start">
      {/* Circle Number Badge */}
      <div className="w-8 h-8 rounded-full bg-[#0c302d] text-white flex items-center justify-center font-bold text-sm mb-3 shrink-0">
        {step.number}
      </div>

      {/* Title */}
      <h4 className="text-sm font-extrabold text-[#0c302d] mb-2 leading-snug">
        {step.title}
      </h4>

      {/* Description */}
      <p className="text-[11px] text-gray-700 leading-relaxed font-normal">
        {step.description}
      </p>
    </div>
  );
}

{/* Right Arrow */}
function ArrowRight() {
  return (
    <div className="px-1 text-[#0c302d]">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
}

{/* Left Arrow */}
function ArrowLeft() {
  return (
    <div className="px-1 text-[#0c302d]">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
}

{/* Down Arrow */}
function ArrowDown() {
  return (
    <div className="text-[#0c302d]">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5L12 18m0 0l-7.5-7.5M12 18V3"
        />
      </svg>
    </div>
  );
}
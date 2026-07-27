"use client";

import React from "react";
import Link from "next/link";

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
    <section className="w-full bg-[#f8fafc] font-sans">
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
          <Link
            href="/contact-us"
            className="inline-block bg-[#cc0000] hover:bg-[#aa0000] text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2c3a] mb-3">
            How Our Meta-Analyses Writing &amp; Rewriting Service Works
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-[#0f2c3a] mb-4">
            Our Step-by-Step Process for High-Quality Meta-Analysis Support
          </h3>
          <p className="text-gray-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            At Pubrica, we follow a structured and evidence-based approach to
            deliver precise, transparent, and publication-ready meta-analysis.
            <br />
            Here&apos;s how our expert-driven process works:
          </p>
        </div>

        {/* Process Flow Cards Container */}
        <div className="flex flex-col items-center gap-8">
          {/* Row 1: Steps 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            <StepCard step={steps[0]} />
            <ArrowRight />
            <StepCard step={steps[1]} />
            <ArrowRight />
            <StepCard step={steps[2]} />
          </div>

          {/* Vertical Arrow Down (Step 3 to Step 4) */}
          <div className="hidden md:flex justify-end w-full pr-16">
            <ArrowDown />
          </div>

          {/* Row 2: Steps 6 <- 5 <- 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            <StepCard step={steps[5]} className="order-3 md:order-1" />
            <ArrowLeft className="order-2" />
            <StepCard step={steps[4]} className="order-2 md:order-2" />
            <ArrowLeft className="order-1" />
            <StepCard step={steps[3]} className="order-1 md:order-3" />
          </div>

          {/* Vertical Arrow Down (Step 6 to Step 7) */}
          <div className="hidden md:flex justify-start w-full pl-16">
            <ArrowDown />
          </div>

          {/* Row 3: Step 7 */}
          <div className="w-full md:w-1/3">
            <StepCard step={steps[6]} />
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* Individual Step Card Component */
}
function StepCard({
  step,
  className = "",
}: {
  step: Step;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-[#1b4332] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {/* Circle Number Badge */}
      <div className="w-12 h-12 rounded-full bg-[#0d2f2d] text-white flex items-center justify-center font-bold text-lg mb-4">
        {step.number}
      </div>

      {/* Title */}
      <h4 className="text-base font-bold text-[#0f2c3a] mb-3 leading-snug">
        {step.title}
      </h4>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

{
  /* Horizontal Right Arrow (Desktop) */
}
function ArrowRight() {
  return (
    <div className="hidden md:flex items-center justify-center text-gray-600">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
}

{
  /* Horizontal Left Arrow (Desktop) */
}
function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hidden md:flex items-center justify-center text-gray-600 ${className}`}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );
}

{
  /* Vertical Down Arrow */
}
function ArrowDown() {
  return (
    <div className="flex items-center justify-center text-gray-600 py-2">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

const IMG = "/images/editing-and-translation/scientific-editing";

interface Step {
  number: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choosing the most suitable experts",
    description:
      "A customer service executive understands your preferences and passes them on to our project managers",
    iconSrc: `${IMG}/Choosing-the-most-suitable-experts.png`,
    position: "bottom",
  },
  {
    number: 2,
    title: "Understanding your work",
    description:
      "Project managers then handpick the most suitable native English experts based on a subject area match",
    iconSrc: `${IMG}/Understanding-your-work.png`,
    position: "top",
  },
  {
    number: 3,
    title: "3 senior experts create a robust publication strategy for you",
    description:
      "A high-impact journal peer reviewer conducts a thorough technical review. Senior editors handle developmental and language edits. The managing editor ensures submission readiness.",
    iconSrc: `${IMG}/senior-experts-create-a-robust-publication-strategy-for-you.png`,
    position: "bottom",
  },
  {
    number: 4,
    title:
      "Unlimited review and rework based on your feedback for up to 365 days",
    description:
      "You review, suggest revisions, and resubmit. Request a discounted recheck by the same peer reviewer. Experts re-edit and reformat for free.",
    iconSrc: `${IMG}/Unlimited-review-and-rework-based-on-your-feedback-for-up-to-365-days.png`,
    position: "top",
  },
];

export default function ScientificProcessWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-6 md:py-8 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] mb-2 tracking-tight">
          How Our Scientific Editing Service Works
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
          Our Step-by-Step Process
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
          At Pubrica, we follow a structured and transparent workflow to ensure
          your manuscript meets the highest scientific and publication
          standards. Our process is designed to provide clarity, accuracy, and
          efficiency at every stage.
        </p>
      </div>

      {/* Workflow Diagram Grid */}
      <div className="max-w-6xl mx-auto relative mt-8">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 bg-[#0080a7] -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => {
            const isActive = activeStep === step.number;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
                className="flex flex-col items-center"
              >
                {/* Step Circle Badge */}
                <div className="w-10 h-10 rounded-full bg-[#0080a7] text-white font-bold flex items-center justify-center shadow-md mb-4 z-10 border-2 border-white">
                  {step.number}
                </div>

                {/* Card Container */}
                <div
                  className={`w-full p-6 rounded-lg border transition-all duration-300 min-h-[220px] flex flex-col items-center text-center ${
                    isActive
                      ? "bg-stone-700 text-white border-stone-800 shadow-xl"
                      : "bg-white text-slate-800 border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="mb-4">
                    <Image
                      src={step.iconSrc}
                      alt={step.title}
                      width={32}
                      height={32}
                      className={`w-8 h-8 object-contain ${isActive ? "invert brightness-200" : ""}`}
                    />
                  </div>
                  <h4
                    className={`font-bold text-sm mb-2 ${isActive ? "text-white" : "text-slate-900"}`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-xs leading-relaxed ${isActive ? "text-gray-300" : "text-slate-600"}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ============================================================ */
/* SECTION 1 DATA: STEP PROCESS                                */
/* ============================================================ */
const PAGE_IMAGES =
  "/images/publication-support/journal-manuscript-formatting-services";

const processSteps = [
  {
    stepNumber: 1,
    title: "UPLOAD YOUR MANUSCRIPT",
    description: "Submit your draft manuscript through our secure portal.",
    iconSrc: `${PAGE_IMAGES}/upload-your-manuscript-.png`,
  },
  {
    stepNumber: 2,
    title: "EXPERT MANUSCRIPT PREPARATION",
    description:
      "Our experts will prepare your document for submission based on journal guidelines.",
    iconSrc: `${PAGE_IMAGES}/expert-manuscript-preparation.png`,
  },
  {
    stepNumber: 3,
    title: "REFERENCE CHECK",
    description:
      "We verify and format every citation and reference correctly and consistently according to the specified style.",
    iconSrc: `${PAGE_IMAGES}/reference-check-.png`,
  },
  {
    stepNumber: 4,
    title: "LANGUAGE STYLE CHECK",
    description:
      "Ensure consistency in language, tone, and technical language throughout the manuscript.",
    iconSrc: `${PAGE_IMAGES}/language-style-check-.png`,
  },
  {
    stepNumber: 5,
    title: "TRACKED CHANGES",
    description:
      "Receive the formatted manuscript with all changes tracked for review.",
    iconSrc: `${PAGE_IMAGES}/tracked-changes.png`,
  },
  {
    stepNumber: 6,
    title: "PUBLISH READY MANUSCRIPT",
    description:
      "Get the final Document Layout Service and Scientific Paper Submission Formatting that meets all Manuscript Submission Requirements for easy journal submission.",
    iconSrc: `${PAGE_IMAGES}/publish-ready-manuscript-.png`,
  },
];

/* ============================================================ */
/* SECTION 2 DATA: BENEFITS CARDS                               */
/* ============================================================ */
const benefitsData = [
  {
    id: 1,
    title: "Meet layout guidelines and conventions",
    description:
      "Our Academic Formatting Service team will revise your Document Layout to comply with the Journal Submission Formatting guidelines and conventions of the journal you plan to submit to. They will also indicate if you need to make any revisions to ensure that your title, running head, abstract, main text, and figure legends follow Academic Paper Formatting Guidelines and the journal's word count limits.",
    image: `${PAGE_IMAGES}/Meet-layout-guidelines-and-conventions.jpg`,
  },
  {
    id: 2,
    title: "Match your journal's style guide",
    description:
      "Our formatters review each manuscript against your target journal's Academic Publishing Standards. We check that all of the images, figures, and tables are correctly placed using Professional Manuscript Layout and Research Paper Layout Design, ensuring figure titles and legends are standardized according to Journal Guidelines Compliance.",
    image: `${PAGE_IMAGES}/Match-your-journals-style-guide.jpg`,
  },
  {
    id: 3,
    title: "Follow your journal's reference guidelines",
    description:
      "We ensure that references meet APA/MLA/Chicago Formatting and other journal-specific requirements. Our experts also provide Manuscript Editing and Formatting Assistance to confirm that your manuscript complies with Manuscript Submission Requirements and is not over the maximum number of references allowed by the journal.",
    image: `${PAGE_IMAGES}/Follow-your-journals-reference-guidelines.jpg`,
  },
  {
    id: 4,
    title: "Save valuable time and effort",
    description:
      "Our Formatting Service for Scholarly Articles ensures every aspect of headings, title page information, and structure is aligned with Customized Manuscript Formatting Solutions. This saves you time while preparing a Publication-Ready Manuscript for submission.",
    image: `${PAGE_IMAGES}/Save-valuable-time-and-effort.jpg`,
  },
];

export default function ProcessAndBenefitsSections() {
  // Step 2 is highlighted by default (as seen in image)
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-16 space-y-24 antialiased">
      {/* ============================================================ */}
      {/* SECTION 1: HOW THE SCIENTIFIC DOCUMENT FORMATTING WORKS       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-2">
            How the Scientific document formatting Works
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Our step-by-Step Process
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            <a href="#" className="text-[#3b82f6] hover:underline">
              Journal Submission
            </a>{" "}
            Formatting and Research Paper Typesetting Services allow us to
            synthesize detailed research into a professional, Publication-Ready
            Manuscript. The process includes steps that guarantee Journal
            Guidelines Compliance, technical accuracy, and Academic Publishing
            Standards in line with your discipline and target publication.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="relative pt-8 pb-12">
          {/* Horizontal Connecting Blue Line */}
          <div className="hidden lg:block absolute top-[92px] left-[5%] right-[5%] h-2 bg-[#0082a6] -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step) => {
              const isEven = step.stepNumber % 2 === 0;
              const isHovered = activeStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  onMouseEnter={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                    isEven ? "lg:flex-col-reverse" : "lg:flex-col"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 z-20 ${
                      isHovered
                        ? "bg-[#0082a6] text-white scale-110 ring-4 ring-[#0082a6]/20"
                        : "bg-[#0082a6] text-white"
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Connecting Vertical Pointer Line */}
                  <div
                    className={`w-0.5 h-6 transition-colors duration-300 ${
                      isHovered ? "bg-[#0082a6]" : "bg-[#0082a6]/40"
                    }`}
                  ></div>

                  {/* Step Content Card */}
                  <div
                    className={`w-full p-4 rounded-xs border text-center transition-all duration-300 min-h-[260px] flex flex-col items-center justify-start ${
                      isHovered
                        ? "bg-[#4b5563] text-white border-[#4b5563] shadow-xl scale-[1.03]"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-300 shadow-2xs"
                    }`}
                  >
                    <div className="mb-3">
                      <Image
                        src={step.iconSrc}
                        alt={step.title}
                        width={40}
                        height={40}
                        className={`w-10 h-10 object-contain transition-all duration-300 ${
                          isHovered ? "invert brightness-200" : ""
                        }`}
                      />
                    </div>

                    <h4
                      className={`text-xs font-bold tracking-wider mb-2 uppercase leading-tight ${
                        isHovered ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p
                      className={`text-[11px] leading-relaxed ${
                        isHovered ? "text-gray-100" : "text-gray-600"
                      }`}
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

      {/* ============================================================ */}
      {/* SECTION 2: DARK BANNER                                        */}
      {/* ============================================================ */}
      <section className="w-full bg-[#053228] text-white py-8 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-lg md:text-xl font-bold tracking-wide">
            Focus on Your Research — We’ll Handle the Formatting
          </h3>
          <p className="text-xs md:text-sm text-gray-200">
            With the manuscript formatting service, you have a professionally
            structured, journal-compliant manuscript, stress-free. We support
            you from initial formatting to the final review
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: BENEFITS CARDS WITH HOVER EFFECTS                   */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-8 text-left">
          Benefits of Journal Submission Formatting
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container with Zoom effect on hover */}
              <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-3 group-hover:text-[#0082a6] transition-colors leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-left">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";

/* ============================================================ */
/* TYPES & EDITORIAL WORKFLOW COMPONENT                         */
/* ============================================================ */
export interface WorkflowStep {
  stepNumber: string | number;
  title: string;
  description: string;
  iconSrc?: string;
  position?: "top" | "bottom";
}

interface WorkflowStepInput {
  stepNumber: string | number;
  title: string;
  description: string;
  iconSrc?: string;
  position?: string;
}

interface EditorialWorkflowSectionProps {
  heading: string;
  subheading: string;
  description?: string;
  steps: WorkflowStepInput[];
}

export const EditorialWorkflowSection: React.FC<EditorialWorkflowSectionProps> = ({
  heading,
  subheading,
  description,
  steps,
}) => {
  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-10 px-4 md:px-8 bg-[#EAEAEA] w-full text-center font-sans overflow-hidden">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
        {heading}
      </h2>

      <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
        {subheading}
      </h3>

      {description && (
        <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-8 md:mb-12">
          {description}
        </p>
      )}

      {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
      <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex items-center w-full min-h-[160px]"
            >
              {/* Connecting Vertical Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                    }`}
                />
              )}

              {/* Step Number Badge */}
              <div
                className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                  }`}
              >
                {step.stepNumber}
              </div>

              {/* Step Card Container */}
              <div
                className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                  }`}
              >
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col items-center text-center w-full z-10">
                  {step.iconSrc && (
                    <div className="w-10 h-10 relative mb-2 flex items-center justify-center">
                      <Image
                        src={step.iconSrc}
                        alt={step.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-[#64748B] text-[11px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
      <div
        className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative mt-6 mb-0"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => {
          const isTop = step.position === "top";

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
            >
              {/* UPPER SECTION */}
              <div className="w-full flex flex-col items-center justify-end flex-1 pb-2">
                {isTop ? (
                  <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                    {step.iconSrc && (
                      <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={38}
                          height={38}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    )}

                    <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h4>

                    <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-end w-full">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                      {step.stepNumber}
                    </div>

                    <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                  </div>
                )}
              </div>

              {/* CENTER HORIZONTAL LINE SEGMENT */}
              <div className="w-full h-[8px] relative my-0 shrink-0">
                <div
                  className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${index === 0
                      ? "rounded-l-sm"
                      : index === steps.length - 1
                        ? "rounded-r-sm"
                        : ""
                    }`}
                />
              </div>

              {/* LOWER SECTION */}
              <div className="w-full flex flex-col items-center justify-start flex-1 pt-2">
                {!isTop ? (
                  <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                    {step.iconSrc && (
                      <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={38}
                          height={38}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    )}

                    <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h4>

                    <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />

                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                      {step.stepNumber}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ============================================================ */
/* SECTION DATA                                                 */
/* ============================================================ */
const PAGE_IMAGES =
  "/images/publication-support/journal-manuscript-formatting-services";

const processSteps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "UPLOAD YOUR MANUSCRIPT",
    description: "Submit your draft manuscript through our secure portal.",
    iconSrc: `${PAGE_IMAGES}/upload-your-manuscript-.png`,
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "EXPERT MANUSCRIPT PREPARATION",
    description:
      "Our experts will prepare your document for submission based on journal guidelines.",
    iconSrc: `${PAGE_IMAGES}/expert-manuscript-preparation.png`,
    position: "top",
  },
  {
    stepNumber: 3,
    title: "REFERENCE CHECK",
    description:
      "We verify and format every citation and reference correctly and consistently according to the specified style.",
    iconSrc: `${PAGE_IMAGES}/reference-check-.png`,
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "LANGUAGE STYLE CHECK",
    description:
      "Ensure consistency in language, tone, and technical language throughout the manuscript.",
    iconSrc: `${PAGE_IMAGES}/language-style-check-.png`,
    position: "top",
  },
  {
    stepNumber: 5,
    title: "TRACKED CHANGES",
    description:
      "Receive the formatted manuscript with all changes tracked for review.",
    iconSrc: `${PAGE_IMAGES}/tracked-changes.png`,
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "PUBLISH READY MANUSCRIPT",
    description:
      "Get the final Document Layout Service and Scientific Paper Submission Formatting that meets all Manuscript Submission Requirements for easy journal submission.",
    iconSrc: `${PAGE_IMAGES}/publish-ready-manuscript-.png`,
    position: "top",
  },
];

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

/* ============================================================ */
/* MAIN PAGE COMPONENT                                          */
/* ============================================================ */
export default function ProcessAndBenefitsSections() {
  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 pt-0 pb-16 antialiased">
      {/* SECTION 1: WORKFLOW */}
      <EditorialWorkflowSection
        heading="How the Scientific document formatting Works"
        subheading="Our Step-by-Step Process"
        description="Journal Submission Formatting and Research Paper Typesetting Services allow us to synthesize detailed research into a professional, Publication-Ready Manuscript. The process includes steps that guarantee Journal Guidelines Compliance, technical accuracy, and Academic Publishing Standards in line with your discipline and target publication."
        steps={processSteps}
      />

      {/* SECTION 2: DARK BANNER (ATTACHED TO WORKFLOW SECTION ABOVE) */}
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

      {/* SECTION 3: BENEFITS CARDS WITH HOVER EFFECTS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-8 text-left">
          Benefits of Journal Submission Formatting
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
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
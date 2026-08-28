"use client";

import React, { useState } from "react";
import Link from "next/link";

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface TherapeuticArea {
  name: string;
  iconUrl: string;
}

interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconUrl: string;
}

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  { name: "Oncology", iconUrl: "/images/publication-support/Oncology.png" },
  { name: "Cardiology", iconUrl: "/images/publication-support/Cardiology.png" },
  { name: "Neurology", iconUrl: "/images/publication-support/Neurology.png" },
  { name: "Psychiatry", iconUrl: "/images/publication-support/Psychiatry.png" },
  { name: "Pulmonology", iconUrl: "/images/publication-support/Pulmonology.png" },
  { name: "Nephrology", iconUrl: "/images/publication-support/Nephrology.png" },
  { name: "Infectious Diseases", iconUrl: "/images/publication-support/Infectious-Diseases.png" },
  { name: "Haematology", iconUrl: "/images/publication-support/Haematology.png" },
  { name: "Immunology", iconUrl: "/images/publication-support/Immunology.png" },
  { name: "Obstetrics & Gynaecology", iconUrl: "/images/publication-support/Obstetrics-Gynaecology.png" },
  { name: "Paediatrics", iconUrl: "/images/publication-support/Paediatrics.png" },
  { name: "Urology", iconUrl: "/images/publication-support/Urology.png" },
  { name: "General Medicine", iconUrl: "/images/publication-support/General-Medicine-.png" },
  { name: "Rheumatology", iconUrl: "/images/publication-support/Rheumatology.png" },
  { name: "Pharmacology & Toxicology", iconUrl: "/images/publication-support/Pharmacology-Toxicology.png" },
  { name: "Orthopaedics", iconUrl: "/images/publication-support/Orthopaedics.webp" },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "MANUSCRIPT FORMATTING",
    description: "Format your manuscript per each journal's specific guidelines, including layout, reference style (APA, Vancouver, MLA, etc.), formatting of figures, and word limits.",
    iconUrl: "/images/publication-support/scopeofthejournal.webp",
  },
  {
    stepNumber: 2,
    title: "COVER LETTER & SUBMISSION PACKAGE",
    description: "Compose an engaging cover letter and make sure you have prepared the required documents (author declaration, ethics statement, data availability statement, etc.) correctly.",
    iconUrl: "/images/publication-support/target-readership.webp",
  },
  {
    stepNumber: 3,
    title: "JOURNAL SUBMISSION ASSISTANCE",
    description: "Help completing the entire submission process: navigation of the submission portal, metadata completion, submission upload, and completion of conflict of interest disclosures.",
    iconUrl: "/images/publication-support/scopeofthejournal.webp",
  },
  {
    stepNumber: 4,
    title: "RESPONSE TO REVIEWER COMMENTS",
    description: "Provide support in drafting courteous, point-by-point responses to reviewer comments, as well as revising the manuscript.",
    iconUrl: "/images/publication-support/visibilityquality.webp",
  },
  {
    stepNumber: 5,
    title: "LANGUAGE EDITING & PROOFREADING",
    description: "Ensure your manuscript is clear, grammatically sound, and adheres to an academic tone through professional language editing and final proofreading.",
    iconUrl: "/images/publication-support/target-readership.webp",
  },
  {
    stepNumber: 6,
    title: "POST-SUBMISSION MONITORING",
    description: "Track the status of your manuscript, provide support with revisions, and assist with the journal editors as required to minimize delay and improve communication.",
    iconUrl: "/images/publication-support/visibilityquality.webp",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TherapeuticAndWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="w-full bg-[#f4f7f6] font-sans antialiased">
      {/* SECTION 1: THERAPEUTIC AREAS */}
      <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083a50]">
              Our Therapeutic Area We Cover
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-100">
            {THERAPEUTIC_AREAS.map((area, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-slate-100 transition-all duration-300 hover:bg-black hover:text-white group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fef5d9] shadow-sm mb-4 transform transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  <img
                    src={area.iconUrl}
                    alt={area.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#083a50] group-hover:text-white transition-colors duration-200">
                  {area.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR WORKFLOW PROCESS */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-[#f5f8f9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#083a50] mb-2">
              Our Workflow Process
            </h2>
            <p className="text-base text-[#103a45] font-semibold tracking-wide uppercase mb-4">
              Comprehensive. Research-Aligned. Compliance-Focused.
            </p>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
              At Pubrica, our academic{" "}
              <Link
                href="/academy/journal-submission/open-access-publishing-guide"
                className="text-blue-600 hover:text-blue-800"
              >
                scientific journal publication services
              </Link>{" "}
              are designed to ensure your manuscript is prepared to maximize the
              chance of a successful publication by making sure every submission
              component requested meets each journal's requirements. Our robust,
              research-led workflow assists authors from manuscript finalization to
              post-submission interaction, particularly regarding all aspects of
              scholarly publishing.
            </p>
          </div>

          {/* Staggered Timeline Grid (Desktop Layout) */}
          <div className="hidden lg:block relative my-8">
            {/* The Horizontal Cyan Connector Line */}
            <div className="absolute top-[128px] left-6 right-6 h-[8px] bg-[#0089b7] z-0" />

            <div className="grid grid-cols-6 gap-3 relative z-10">
              {WORKFLOW_STEPS.map((step) => {
                const isEven = step.stepNumber % 2 === 0;
                const isSelected = activeStep === step.stepNumber;

                return (
                  <div
                    key={step.stepNumber}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveStep(step.stepNumber)}
                  >
                    {/* Top Indicator Block (Odd Steps) */}
                    <div className="h-[128px] flex flex-col items-center justify-end pb-2">
                      {!isEven && (
                        <>
                          <div className="w-10 h-10 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-base shadow-md transition-transform duration-300 hover:scale-110">
                            {step.stepNumber}
                          </div>
                          <div className="h-[32px] w-[2px] bg-red-400/70 mt-1" />
                        </>
                      )}
                    </div>

                    {/* Card Container */}
                    <div
                      className={`w-full min-h-[260px] p-4 flex flex-col items-center text-center transition-all duration-300 group rounded-md ${isSelected
                        ? "bg-[#4a555a] text-white shadow-xl scale-105 z-20"
                        : "bg-white text-gray-700 shadow-sm hover:shadow-md hover:bg-black hover:text-white"
                        }`}
                    >
                      <div className="mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fef5d9] shadow-sm overflow-hidden">
                          <img
                            src={step.iconUrl}
                            alt={step.title}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      </div>

                      <h4
                        className={`text-[12px] font-bold tracking-wider mb-2 leading-tight transition-colors ${isSelected ? "text-white" : "text-[#4c565a] group-hover:text-white"
                          }`}
                      >
                        {step.title}
                      </h4>

                      <p
                        className={`text-[11px] leading-relaxed transition-colors ${isSelected ? "text-gray-200" : "text-gray-500 group-hover:text-gray-200"
                          }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Indicator Block (Even Steps) */}
                    <div className="h-[128px] flex flex-col items-center justify-start pt-2">
                      {isEven && (
                        <>
                          <div className="h-[32px] w-[2px] bg-red-400/70 mb-1" />
                          <div className="w-10 h-10 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-base shadow-md transition-transform duration-300 hover:scale-110">
                            {step.stepNumber}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-4">
            {WORKFLOW_STEPS.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col p-5 rounded-lg transition-all duration-300 cursor-pointer group ${isSelected
                    ? "bg-[#4a555a] text-white shadow-md"
                    : "bg-white text-gray-700 shadow-sm border border-gray-100 hover:bg-black hover:text-white"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#fef5d9] shadow-sm overflow-hidden shrink-0">
                      <img
                        src={step.iconUrl}
                        alt={step.title}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    </div>
                    <h4
                      className={`text-[13px] font-bold tracking-wider ${isSelected ? "text-white" : "text-[#4c565a] group-hover:text-white"
                        }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                  <p
                    className={`text-[12px] leading-relaxed ${isSelected ? "text-gray-200" : "text-gray-500 group-hover:text-gray-200"
                      }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: FOOTER ACCELERATION BAR */}
      <div className="w-full bg-[#011f11] py-4 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-start gap-5">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/publication-support/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            />
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
              Speed up your journey to publication with Pubrica
            </h3>
            <p className="text-slate-200 text-[11px] sm:text-xs leading-relaxed max-w-2xl font-normal">
              Gain access to your assistant who will expertly guide you through
              intricate journal submission processes, shielding you from rejection
              and ensuring a faster path to getting your work published.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
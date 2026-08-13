"use client";

import React, { useState } from "react";

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface TherapeuticArea {
  name: string;
  iconUrl: string;
  slug: string;
}

interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconUrl: string;
  slug: string;
}

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    name: "Oncology",
    iconUrl: "/images/publication-support/Oncology.png",
    slug: "",
  },
  {
    name: "Cardiology",
    iconUrl: "/images/publication-support/Cardiology.png",
    slug: "cardiology",
  },
  {
    name: "Neurology",
    iconUrl: "/images/publication-support/Neurology.png",
    slug: "neurology",
  },
  {
    name: "Psychiatry",
    iconUrl: "/images/publication-support/Psychiatry.png",
    slug: "",
  },
  {
    name: "Pulmonology",
    iconUrl: "/images/publication-support/Pulmonology.png",
    slug: "",
  },
  {
    name: "Nephrology",
    iconUrl: "/images/publication-support/Nephrology.png",
    slug: "",
  },
  {
    name: "Infectious Diseases",
    iconUrl: "/images/publication-support/Infectious-Diseases.png",
    slug: "",
  },
  {
    name: "Haematology",
    iconUrl: "/images/publication-support/Haematology.png",
    slug: "",
  },
  {
    name: "Immunology",
    iconUrl: "/images/publication-support/Immunology.png",
    slug: "",
  },
  {
    name: "Obstetrics & Gynaecology",
    iconUrl: "/images/publication-support/Obstetrics-Gynaecology.png",
    slug: "",
  },
  {
    name: "Paediatrics",
    iconUrl: "/images/publication-support/Paediatrics.png",
    slug: "",
  },
  {
    name: "Urology",
    iconUrl: "/images/publication-support/Urology.png",
    slug: "",
  },
  {
    name: "General Medicine",
    iconUrl: "/images/publication-support/General-Medicine-.png",
    slug: "",
  },
  {
    name: "Rheumatology",
    iconUrl: "/images/publication-support/Rheumatology.png",
    slug: "",
  },
  {
    name: "Pharmacology & Toxicology",
    iconUrl: "/images/publication-support/Pharmacology-Toxicology.png",
    slug: "",
  },
  {
    name: "Orthopaedics",
    iconUrl: "/images/publication-support/Orthopaedics.webp",
    slug: "",
  },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "MANUSCRIPT FORMATTING",
    description: "Format your manuscript per each journal's specific guidelines, including layout, reference style (APA, Vancouver, MLA, etc.), formatting of figures, and word limits.",
    iconUrl: "/images/publication-support/scopeofthejournal.webp",
    slug: "manuscript-formatting",
  },
  {
    stepNumber: 2,
    title: "COVER LETTER & SUBMISSION PACKAGE",
    description: "Compose an engaging cover letter and make sure you have prepared the required documents (author declaration, ethics statement, data availability statement, etc.) correctly.",
    iconUrl: "/images/publication-support/target-readership.webp",
    slug: "cover-letter-submission-package",
  },
  {
    stepNumber: 3,
    title: "JOURNAL SUBMISSION ASSISTANCE",
    description: "Help completing the entire submission process: navigation of the submission portal, metadata completion, submission upload, and completion of conflict of interest disclosures.",
    iconUrl: "/images/publication-support/scopeofthejournal.webp",
    slug: "journal-submission-assistance",
  },
  {
    stepNumber: 4,
    title: "RESPONSE TO REVIEWER COMMENTS",
    description: "Provide support in drafting courteous, point-by-point responses to reviewer comments, as well as revising the manuscript.",
    iconUrl: "/images/publication-support/visibilityquality.webp",
    slug: "response-to-reviewer-comments",
  },
  {
    stepNumber: 5,
    title: "LANGUAGE EDITING & PROOFREADING",
    description: "Ensure your manuscript is clear, grammatically sound, and adheres to an academic tone through professional language editing and final proofreading.",
    iconUrl: "/images/publication-support/target-readership.webp",
    slug: "language-editing-proofreading",
  },
  {
    stepNumber: 6,
    title: "POST-SUBMISSION MONITORING",
    description: "Track the status of your manuscript, provide support with revisions, and assist with the journal editors as required to minimize delay and improve communication.",
    iconUrl: "/images/publication-support/visibilityquality.webp",
    slug: "post-submission-monitoring",
  }
];

// ==========================================
// MAIN COMBINED COMPONENT
// ==========================================

export default function TherapeuticAndWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default Step 2 highlighted

  return (
    <div className="w-full bg-[#f4f7f6] font-sans antialiased">
      
      {/* ==========================================
          SECTION 1: THERAPEUTIC AREAS
          ========================================== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083a50]">
              Our Therapeutic Area We Cover
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-100">
            {THERAPEUTIC_AREAS.map((area, index) => {
              const areaUrl = area.slug 
                ? `/subject-matter-experts/${area.slug}` 
                : `/subject-matter-experts/`;

              return (
                <a
                  key={index}
                  href={areaUrl}
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-slate-100 transition-all duration-300 hover:bg-black hover:text-white group cursor-pointer block"
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
                </a>
              );
            })}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 2: OUR WORKFLOW PROCESS
          ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f8f9]">
        <div className="max-w-6xl mx-auto">
          
          {/* Workflow Header Group */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#083a50] mb-2">
              Our Workflow Process
            </h2>
            <p className="text-base text-[#103a45] font-semibold tracking-wide uppercase mb-6">
              Comprehensive. Research-Aligned. Compliance-Focused.
            </p>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
              At Pubrica, our academic{" "}
              <a href="/services/publication-support/" className="text-[#0ea5e9] underline cursor-pointer font-medium hover:opacity-80">
                scientific journal publication services
              </a>{" "}
              are designed to ensure your manuscript is prepared to maximize the
              chance of a successful publication by making sure every submission component
              requested meets each journal's requirements. Our robust, research-led
              workflow assists authors from manuscript finalization to post-submission
              interaction, particularly regarding all aspects of scholarly publishing.
            </p>
          </div>

          {/* Staggered Timeline Grid (Desktop Layout) */}
          <div className="hidden lg:block relative min-h-[580px] mt-12">
            
            {/* The Horizontal Cyan Connector Line */}
            <div className="absolute top-[165px] left-4 right-4 h-[11px] bg-[#0089b7] z-0" />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {WORKFLOW_STEPS.map((step) => {
                const isEven = step.stepNumber % 2 === 0;
                const isSelected = activeStep === step.stepNumber;
                const targetUrl = `/services/publication-support/${step.slug}`;

                return (
                  <div 
                    key={step.stepNumber} 
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveStep(step.stepNumber)}
                  >
                    {/* TOP HALF: Steps 1, 3, 5 indicator nodes */}
                    {!isEven ? (
                      <div className="flex flex-col items-center justify-end h-[165px] pb-5">
                        <div className="w-10 h-10 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-lg shadow-md transition-transform duration-300 hover:scale-110">
                          {step.stepNumber}
                        </div>
                        <div className="h-[40px] w-[1px] bg-red-400/60 mt-1" />
                      </div>
                    ) : (
                      <div className="h-[165px]" />
                    )}

                    {/* CARD CONTAINER */}
                    <a 
                      href={targetUrl}
                      className={`w-full min-h-[290px] p-5 flex flex-col items-center text-center transition-all duration-300 block group hover:bg-black hover:text-white ${
                        isSelected 
                          ? "bg-[#4a555a] text-white shadow-xl translate-y-[-8px] scale-105" 
                          : "bg-white text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-lg"
                      }`}
                    >
                      {/* Workflow Icon Container */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fef5d9] shadow-sm overflow-hidden">
                          <img
                            src={step.iconUrl}
                            alt={step.title}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      </div>

                      {/* Step Header */}
                      <h4 className={`text-[12px] font-bold tracking-wider mb-3 leading-tight group-hover:text-white transition-colors ${
                        isSelected ? "text-white" : "text-[#4c565a]"
                      }`}>
                        {step.title}
                      </h4>

                      {/* Step Description */}
                      <p className={`text-[11px] leading-relaxed group-hover:text-gray-200 ${
                        isSelected ? "text-gray-200" : "text-gray-500"
                      }`}>
                        {step.description}
                      </p>
                    </a>

                    {/* BOTTOM HALF: Steps 2, 4, 6 indicator nodes */}
                    {isEven ? (
                      <div className="flex flex-col items-center justify-start h-[165px] pt-5">
                        <div className="h-[40px] w-[1px] bg-red-400/60 mb-1" />
                        <div className="w-10 h-10 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-lg shadow-md transition-transform duration-300 hover:scale-110">
                          {step.stepNumber}
                        </div>
                      </div>
                    ) : (
                      <div className="h-[165px]" />
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* Responsive Mobile Layout (Stacked vertical steps) */}
          <div className="lg:hidden flex flex-col gap-6">
            {WORKFLOW_STEPS.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              const targetUrl = `/services/publication-support/${step.slug}`;
              return (
                <a
                  key={step.stepNumber}
                  href={targetUrl}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col p-6 rounded-lg transition-all duration-300 cursor-pointer block hover:bg-black hover:text-white group ${
                    isSelected
                      ? "bg-[#4a555a] text-white shadow-lg"
                      : "bg-white text-gray-700 shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fef5d9] shadow-sm overflow-hidden shrink-0">
                      <img
                        src={step.iconUrl}
                        alt={step.title}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <h4 className={`text-[13px] font-bold tracking-wider group-hover:text-white ${
                      isSelected ? "text-white" : "text-[#4c565a]"
                    }`}>
                      {step.title}
                    </h4>
                  </div>
                  <p className={`text-[12px] leading-relaxed group-hover:text-gray-200 ${
                    isSelected ? "text-gray-200" : "text-gray-500"
                  }`}>
                    {step.description}
                  </p>
                </a>
              );
            })}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 3: FOOTER ACCELERATION BAR
          ========================================== */}
      <footer className="bg-[#042817] py-12 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Guaranteed Batch Badge / Image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img 
              src="/images/publication-support/Satisfaction_Guarantee.webp" 
              alt="100% Satisfaction Guarantee" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Heading Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Speed up your journey to publication with Pubrica
            </h3>
            <p className="text-gray-300 text-[14px] leading-relaxed max-w-3xl">
              Gain access to your assistant who will expertly guide you through intricate journal submission 
              processes, shielding you from rejection and ensuring a faster path to getting your work published.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
"use client"

import React, { useState } from "react";

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface TherapeuticArea {
  name: string;
  iconType: string;
}

interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconType: "book" | "letter" | "binoculars" | "magnify" | "proof" | "monitor";
}

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  { name: "Oncology", iconType: "oncology" },
  { name: "Cardiology", iconType: "cardiology" },
  { name: "Neurology", iconType: "neurology" },
  { name: "Psychiatry", iconType: "psychiatry" },
  { name: "Pulmonology", iconType: "pulmonology" },
  { name: "Nephrology", iconType: "nephrology" },
  { name: "Infectious Diseases", iconType: "infectious" },
  { name: "Haematology", iconType: "haematology" },
  { name: "Immunology", iconType: "immunology" },
  { name: "Obstetrics & Gynaecology", iconType: "obstetrics" },
  { name: "Paediatrics", iconType: "paediatrics" },
  { name: "Urology", iconType: "urology" },
  { name: "General Medicine", iconType: "general" },
  { name: "Rheumatology", iconType: "rheumatology" },
  { name: "Pharmacology & Toxicology", iconType: "pharmacology" },
  { name: "Orthopaedics", iconType: "orthopaedics" },
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "MANUSCRIPT FORMATTING",
    description: "Format your manuscript per each journal's specific guidelines, including layout, reference style (APA, Vancouver, MLA, etc.), formatting of figures, and word limits.",
    iconType: "book"
  },
  {
    stepNumber: 2,
    title: "COVER LETTER & SUBMISSION PACKAGE",
    description: "Compose an engaging cover letter and make sure you have prepared the required documents (author declaration, ethics statement, data availability statement, etc.) correctly.",
    iconType: "letter"
  },
  {
    stepNumber: 3,
    title: "JOURNAL SUBMISSION ASSISTANCE",
    description: "Help completing the entire submission process: navigation of the submission portal, metadata completion, submission upload, and completion of conflict of interest disclosures.",
    iconType: "book"
  },
  {
    stepNumber: 4,
    title: "RESPONSE TO REVIEWER COMMENTS",
    description: "Provide support in drafting courteous, point-by-point responses to reviewer comments, as well as revising the manuscript.",
    iconType: "binoculars"
  },
  {
    stepNumber: 5,
    title: "LANGUAGE EDITING & PROOFREADING",
    description: "Ensure your manuscript is clear, grammatically sound, and adheres to an academic tone through professional language editing and final proofreading.",
    iconType: "letter"
  },
  {
    stepNumber: 6,
    title: "POST-SUBMISSION MONITORING",
    description: "Track the status of your manuscript, provide support with revisions, and assist with the journal editors as required to minimize delay and improve communication.",
    iconType: "binoculars"
  }
];

// ==========================================
// HELPER ICON COMPONENTS (SVGs)
// ==========================================

function TherapeuticIcon({ type }: { type: string }) {
  const baseClass = "w-14 h-14 text-[#103a45]";
  switch (type) {
    case "oncology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-3.5 0-5.5 3-5.5 6.5 0 2.5 1.5 5 4 8.5L12 21l1.5-4c2.5-3.5 4-6 4-8.5C17.5 5 15.5 2 12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v5M9.5 8.5h5" />
        </svg>
      );
    case "cardiology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12h1.5l1-2.5 1.5 4.5 1-2.5h1" />
        </svg>
      );
    case "neurology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5a2.5 2.5 0 015 0M9 13h6M12 9v6M10 22a8 8 0 01-5.24-14.053M14 22a8 8 0 005.24-14.053M12 2a6 6 0 016 6 4 4 0 01-1.5 3.1M12 2a6 6 0 00-6 6 4 4 0 001.5 3.1" />
        </svg>
      );
    case "psychiatry":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v2m-6 3h2m8 0h2M7 16h10M9 20h6" />
        </svg>
      );
    case "pulmonology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0-10C9 4 5 5 5 11c0 4 2.5 6 5 6s2-3 2-5m0-6c3-2 7-1 7 5 0 4-2.5 6-5 6s-2-3-2-5M8 21h8" />
        </svg>
      );
    case "nephrology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 5a3 3 0 016 0c0 3-4 6-4 9s1 5 1 5m7-14a3 3 0 00-6 0c0 3 4 6 4 9s-1 5-1 5" />
        </svg>
      );
    case "infectious":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 12h2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M5.636 18.364l1.414-1.414m9.9-9.9l1.414-1.414" />
        </svg>
      );
    case "haematology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c4-3.5 6.5-7 6.5-11C18.5 6 15.5 3.5 12 2 8.5 3.5 5.5 6 5.5 10.5c0 4 2.5 7.5 6.5 11z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 11.5h4M12 9.5v4" />
        </svg>
      );
    case "immunology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2a15.3 15.3 0 014 3 15.3 15.3 0 013 4" />
        </svg>
      );
    case "obstetrics":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5c0 .828-.672 1.5-1.5 1.5S9 10.328 9 9.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm1 4.5c0-1.5 2-1.5 2 0v1h-2v-1z" />
        </svg>
      );
    case "paediatrics":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="7" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-4a3 3 0 013-3h4a3 3 0 013 3v4M16 11h2m-10 0h2" />
        </svg>
      );
    case "urology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m-3-6h6m-5 9a2 2 0 104 0V11H10v3z" />
        </svg>
      );
    case "general":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-3.5 0-6.5 2-8 5.5 1.5 3.5 4.5 5.5 8 5.5s6.5-2 8-5.5c-1.5-3.5-4.5-5.5-8-5.5z" />
          <circle cx="12" cy="10" r="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" />
        </svg>
      );
    case "rheumatology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-13c0-2 1-3 4-3s4 1 4 3m-8 10c0 2 1 3 4 3s4-1 4-3" />
        </svg>
      );
    case "pharmacology":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10h2M17 14h4M9 5H5a2 2 0 00-2 2v10a2 2 0 002 2h4l4-8V5" />
          <circle cx="17" cy="7" r="1.5" />
        </svg>
      );
    case "orthopaedics":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M9 7h6m-5 5h4m-5 5h6" />
        </svg>
      );
    default:
      return null;
  }
}

// Added active boolean prop so icons can change color dynamically on selected/active cards
function WorkflowIcon({ type, isActive }: { type: string; isActive: boolean }) {
  const colorClass = isActive ? "text-[#5bb7d4]" : "text-[#4c565a]";
  const baseClass = `w-10 h-10 stroke-[1.25] transition-colors duration-300 ${colorClass}`;
  
  switch (type) {
    case "book":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "letter":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6" />
        </svg>
      );
    case "binoculars":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="7.5" cy="14.5" r="3.5" />
          <circle cx="16.5" cy="14.5" r="3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 11h2M7.5 11h9l-1-5H8.5l-1 5zM12 11v7" />
        </svg>
      );
    case "magnify":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
      );
    case "proof":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "monitor":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
        </svg>
      );
    default:
      return null;
  }
}

// ==========================================
// MAIN COMBINED COMPONENT
// ==========================================

export default function TherapeuticAndWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default Step 2 highlighted as in screenshot

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
            {THERAPEUTIC_AREAS.map((area, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-slate-100 transition-all duration-300 hover:bg-[#e6f2f7]/25 hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] group cursor-pointer"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <TherapeuticIcon type={area.iconType} />
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#083a50] group-hover:text-[#0ea5e9] transition-colors duration-200">
                  {area.name}
                </h3>
              </div>
            ))}
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
              <span className="text-[#0ea5e9] underline cursor-pointer font-medium">
                scientific journal publication services
              </span>{" "}
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
                      // Spacer so cards remain matching bottom grid position
                      <div className="h-[165px]" />
                    )}

                    {/* CARD CONTAINER */}
                    <div 
                      className={`w-full min-h-[290px] p-5 flex flex-col items-center text-center transition-all duration-300 ${
                        isSelected 
                          ? "bg-[#4a555a] text-white shadow-xl translate-y-[-8px] scale-105" 
                          : "bg-white text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-lg"
                      }`}
                    >
                      {/* Workflow Icon - Fixed contrast issue using isActive */}
                      <div className="mb-4">
                        <WorkflowIcon type={step.iconType} isActive={isSelected} />
                      </div>

                      {/* Step Header */}
                      <h4 className={`text-[12px] font-bold tracking-wider mb-3 leading-tight ${
                        isSelected ? "text-white" : "text-[#4c565a]"
                      }`}>
                        {step.title}
                      </h4>

                      {/* Step Description */}
                      <p className={`text-[11px] leading-relaxed ${
                        isSelected ? "text-gray-200" : "text-gray-500"
                      }`}>
                        {step.description}
                      </p>
                    </div>

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
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#4a555a] text-white shadow-lg"
                      : "bg-white text-gray-700 shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#0089b7] text-white flex items-center justify-center font-bold text-sm">
                      {step.stepNumber}
                    </div>
                    <h4 className={`text-[13px] font-bold tracking-wider ${
                      isSelected ? "text-white" : "text-[#4c565a]"
                    }`}>
                      {step.title}
                    </h4>
                  </div>
                  <p className={`text-[12px] leading-relaxed ${
                    isSelected ? "text-gray-200" : "text-gray-500"
                  }`}>
                    {step.description}
                  </p>
                </div>
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
          
          {/* Guaranteed Batch Badge */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-[3px] border-dashed border-[#5bb7d4] bg-[#02180d]">
              <div className="text-center">
                <span className="block text-[11px] font-semibold tracking-wider text-[#5bb7d4]">SATISFACTION</span>
                <span className="block text-2xl font-black text-white leading-none">100%</span>
                <span className="block text-[10px] font-semibold tracking-wider text-[#5bb7d4]">GUARANTEE</span>
              </div>
            </div>
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
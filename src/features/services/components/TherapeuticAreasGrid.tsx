"use client";

import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import React, { useState } from "react";

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
  // iconUrl: string;
  iconSrc?: string;
  position:string;
  

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
    description:
      "Format your manuscript per each journal's specific guidelines, including layout, reference style (APA, Vancouver, MLA, etc.), formatting of figures, and word limits.",
    iconSrc: "/images/publication-support/scopeofthejournal.webp",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "COVER LETTER & SUBMISSION PACKAGE",
    description:
      "Compose an engaging cover letter and make sure you have prepared the required documents (author declaration, ethics statement, data availability statement, etc.) correctly.",
    iconSrc: "/images/publication-support/target-readership.webp",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "JOURNAL SUBMISSION ASSISTANCE",
    description:
      "Help completing the entire submission process: navigation of the submission portal, metadata completion, submission upload, and completion of conflict of interest disclosures.",
    iconSrc: "/images/publication-support/scopeofthejournal.webp",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "RESPONSE TO REVIEWER COMMENTS",
    description:
      "Provide support in drafting courteous, point-by-point responses to reviewer comments, as well as revising the manuscript.",
    iconSrc: "/images/publication-support/visibilityquality.webp",
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "LANGUAGE EDITING & PROOFREADING",
    description:
      "Ensure your manuscript is clear, grammatically sound, and adheres to an academic tone through professional language editing and final proofreading.",
    iconSrc: "/images/publication-support/target-readership.webp",
    position: "top",
  },
  {
    stepNumber: 6,
    title: "POST-SUBMISSION MONITORING",
    description:
      "Track the status of your manuscript, provide support with revisions, and assist with the journal editors as required to minimize delay and improve communication.",
    iconSrc: "/images/publication-support/visibilityquality.webp",
    position: "bottom",
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
      <EditorialWorkflowSection
        heading="Our Workflow Process"
        subheading="Comprehensive. Research-Aligned. Compliance-Focused."
        description="At Pubrica, our academic scientific journal publication services are designed to ensure your manuscript is prepared to maximize the chance of a successful publication by making sure every submission component requested meets each journal's requirements. Our robust, research-led workflow assists authors from manuscript finalization to post-submission interaction, particularly regarding all aspects of scholarly publishing."
        steps={WORKFLOW_STEPS}
      />

      {/* SECTION 3: FOOTER ACCELERATION BAR */}
      <div className="w-full bg-[#022e1b] py-6 px-4 text-white">
        <div className="max-w-5xl mx-auto flex flex-row items-center justify-center gap-8 md:gap-10">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/publication-support/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
            />
          </div>

          <div className="flex-1 text-left max-w-xl">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 leading-tight">
              Speed up your journey to publication with Pubrica
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
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
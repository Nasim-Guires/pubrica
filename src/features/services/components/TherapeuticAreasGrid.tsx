"use client";

import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import Link from "next/link";
import React, { useState } from "react";

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface TherapeuticArea {
  name: string;
  iconUrl: string;
  href: string;
}

interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc?: string;
  position: string;
}

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    name: "Oncology",
    iconUrl: "/images/publication-support/Oncology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Cardiology",
    iconUrl: "/images/publication-support/Cardiology.png",
    href: "/subject-matter-experts/cardiology/",
  },
  {
    name: "Neurology",
    iconUrl: "/images/publication-support/Neurology.png",
    href: "/subject-matter-experts/neurology/",
  },
  {
    name: "Psychiatry",
    iconUrl: "/images/publication-support/Psychiatry.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Pulmonology",
    iconUrl: "/images/publication-support/Pulmonology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Nephrology",
    iconUrl: "/images/publication-support/Nephrology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Infectious Diseases",
    iconUrl: "/images/publication-support/Infectious-Diseases.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Haematology",
    iconUrl: "/images/publication-support/Haematology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Immunology",
    iconUrl: "/images/publication-support/Immunology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Obstetrics & Gynaecology",
    iconUrl: "/images/publication-support/Obstetrics-Gynaecology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Paediatrics",
    iconUrl: "/images/publication-support/Paediatrics.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Urology",
    iconUrl: "/images/publication-support/Urology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "General Medicine",
    iconUrl: "/images/publication-support/General-Medicine-.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Rheumatology",
    iconUrl: "/images/publication-support/Rheumatology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Pharmacology & Toxicology",
    iconUrl: "/images/publication-support/Pharmacology-Toxicology.png",
    href: "/subject-matter-experts/",
  },
  {
    name: "Orthopaedics",
    iconUrl: "/images/publication-support/Orthopaedics.webp",
    href: "/subject-matter-experts/",
  },
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
    <div className="w-full bg-[#EAEAEA] font-sans antialiased">
      {/* SECTION 1: THERAPEUTIC AREAS */}
      <section className="w-full bg-[#EAEAEA] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083a50]">
              Our Therapeutic Area We Cover
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-300">
            {THERAPEUTIC_AREAS.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-gray-300 transition-all duration-300 hover:bg-black hover:text-white group cursor-pointer"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR WORKFLOW PROCESS */}
      <section className="w-full bg-[#EAEAEA] py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#083a50] mb-2">
              Our Workflow Process
            </h2>

            {/* Subheading */}
            <h3 className="text-xl text-gray-600 mb-4 font-medium">
              Comprehensive. Research-Aligned. Compliance-Focused.
            </h3>

            {/* Description without underline on the link */}
            <p className="text-gray-700 leading-relaxed mb-8">
              At Pubrica, our academic{" "}
              <a
                href="/academy/journal-submission/open-access-publishing-guide/"
                className="text-blue-600 hover:text-blue-800 no-underline"
              >
                scientific journal publication services
              </a>{" "}
              are designed to ensure your manuscript is prepared to maximize the chance of a successful publication by making sure every submission component requested meets each journal's requirements. Our robust, research-led workflow assists authors from manuscript finalization to post-submission interaction, particularly regarding all aspects of scholarly publishing.
            </p>
          </div>

          {/* Workflow Component */}
          <div className="w-full bg-[#EAEAEA]">
            <EditorialWorkflowSection heading="" subheading="" description="" steps={WORKFLOW_STEPS} />
          </div>
        </div>
      </section>

      {/* SECTION 3: FOOTER ACCELERATION BAR */}
      <div className="w-full bg-[#022e1b] py-4 px-4 text-white font-['Poppins',sans-serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

          {/* Image Container */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/publication-support/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain mx-auto"
            />
          </div>

          {/* Text Container */}
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2.5 leading-tight">
              Speed up your journey to publication with Pubrica
            </h3>
            <p className="text-slate-200 text-[16px] leading-relaxed font-normal">
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
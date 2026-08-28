"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

// ==========================================
// 1. TYPES OF PROOFREADING DATA & TYPES
// ==========================================
interface ProofreadingType {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

const proofreadingTypes: ProofreadingType[] = [
  {
    id: "final",
    title: "Final Proofreading",
    description:
      "Concentrates on fixing grammatical, spelling, punctuation, and typo mistakes.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Final-Proofreading.webp",
  },
  {
    id: "consistency",
    title: "Consistency Proofreading",
    description:
      "Guarantees that all terms, abbreviations, and writing styles used are consistent.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Consistency-Proofreading.webp",
  },
  {
    id: "formatting",
    title: "Formatting Proofreading",
    description:
      "Makes sure there is consistency in formatting references, headings, tables, etc., as required.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Formatting-Proofreading.webp",
  },
  {
    id: "journal-formatting",
    title: "Journal Formatting Proofreading",
    description:
      "Make sure your manuscript is formatted per the specific journal's instructions.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Journal-Formatting-Proofreading.webp",
  },
  {
    id: "technical",
    title: "Technical Proofreading",
    description:
      "Accurate scientific proofreading and scientific paper proofreading service.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Technical-Proofreading.webp",
  },
  {
    id: "esl",
    title: "ESL Proofreading",
    description:
      "Enhances fluency without changing meaning for ESL students/writers.",
    iconSrc:
      "/images/editing-and-translation/proofreading/ESL-Proofreading.webp",
  },
];

// ==========================================
// 2. STEP-BY-STEP PROCESS DATA & TYPES
// ==========================================
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "PROJECT CONSULTATION & REQUIREMENT ANALYSIS",
    description:
      "We understand your needs for online proofreading services and document types.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Project-Consultation-Requirement-Analysis.webp",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "CONTENT ASSESSMENT",
    description:
      "Evaluation aligned with research paper proofreading service standards.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Content-Assessment.webp",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "EXPERT PROOFREADING",
    description:
      "Your document is reviewed by professionals to correct grammar, punctuation, and consistency errors.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Expert-Proofreading.webp",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "QUALITY ASSURANCE REVIEW",
    description:
      "Multi-level checks ensure accuracy, consistency, and adherence to standards.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Quality-Assurance-Review.webp",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "CLIENT FEEDBACK & REVISIONS",
    description:
      "Refinement aligned with best proofreading services for research papers expectations.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Client-Feedback-Revisions.webp",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "FINAL DELIVERY",
    description:
      "You receive a polished, error-free document ready for submission or use.",
    iconSrc:
      "/images/editing-and-translation/proofreading/Final-Delivery-1.webp",
    position: "top",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function ProofreadingProcessAndTypes() {
  const [activeType, setActiveType] = useState<string | null>("final");

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: TYPES OF PROOFREADING        */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-8">
          Types of Proofreading Services We Provide
        </h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {proofreadingTypes.map((item) => {
            const isOpen = activeType === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xs shadow-2xs overflow-hidden transition-all duration-200"
                onMouseEnter={() => setActiveType(item.id)}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActiveType(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base transition-colors ${isOpen
                      ? "bg-[#f0fdf4] text-slate-900"
                      : "bg-[#f0fdf4]/60 hover:bg-[#f0fdf4] text-slate-800"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-white rounded-md border border-emerald-100 shadow-2xs">
                      <Image
                        src={item.iconSrc}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="leading-snug">{item.title}</span>
                  </div>
                  <span className="text-xl font-medium text-slate-600 ml-2">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="p-4 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[75px] flex items-center">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BANNER: SATISFACTION GUARANTEE */}
      <section className="w-full bg-[#003B46] text-white py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
          {/* Badge Graphic */}
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/images/editing-and-translation/proofreading/Satisfaction_Guarantee_blue2.png"
              alt="100% satisfaction guarantee"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Proofreading Services at Pubrica
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
              Elevate your content with Pubrica’s meticulous Proofreading
              Services. Our experts ensure precision and professionalism,
              refining clarity and correctness.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW OUR SERVICE WORKS */}
      <EditorialWorkflowSection
        heading="How Our Proofreading Service Works"
        subheading="Our Step-by-Step Process"
        description=""
        steps={processSteps}
      />
    </div>
  );
}
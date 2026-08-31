"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import ServiceBanner from "@/components/common/ServiceBanner";

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
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
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
            // Check if current card ID exists in activeTypes array
            const isOpen = activeTypes.includes(item.id);

            const toggleCard = () => {
              if (isOpen) {
                // Remove ID to close this card
                setActiveTypes(activeTypes.filter((id) => id !== item.id));
              } else {
                // Add ID to open this card alongside others
                setActiveTypes([...activeTypes, item.id]);
              }
            };

            return (
              <div
                key={item.id}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-white border-emerald-500/40 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow"
                  }`}
              >
                {/* Accordion Header (Click Only) */}
                <button
                  type="button"
                  onClick={toggleCard}
                  className={`w-full flex items-center justify-between p-4 text-left font-semibold text-sm sm:text-base transition-colors duration-200 cursor-pointer ${isOpen
                    ? "bg-slate-50/80 text-emerald-950"
                    : "bg-white text-slate-800 hover:bg-slate-50/50"
                    }`}
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div
                      className={`p-2 rounded-lg border transition-colors shrink-0 ${isOpen
                        ? "bg-emerald-50 border-emerald-200/60"
                        : "bg-slate-100/70 border-slate-200/60 group-hover:bg-slate-100"
                        }`}
                    >
                      <Image
                        src={item.iconSrc}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="leading-tight truncate">{item.title}</span>
                  </div>

                  {/* + / − Toggle Button */}
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold transition-colors duration-200 shrink-0 ml-2 ${isOpen
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p className="pt-2">{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BANNER: SATISFACTION GUARANTEE */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% satisfaction guarantee"
        heading="Proofreading Services at Pubrica"
        description="Elevate your content with Pubrica’s meticulous Proofreading Services. Our experts ensure precision and professionalism, refining clarity and correctness."
      />

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
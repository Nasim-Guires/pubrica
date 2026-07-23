"use client";

import React, { useState } from "react";
import {
  FileCheck,
  Sliders,
  Layout,
  BookOpen,
  Cpu,
  Globe2,
  FileSearch,
  ClipboardList,
  UserCheck,
  CheckCircle2,
  MessageSquare,
  Send,
  Award,
} from "lucide-react";

// ==========================================
// 1. TYPES OF PROOFREADING DATA & TYPES
// ==========================================
interface ProofreadingType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const proofreadingTypes: ProofreadingType[] = [
  {
    id: "final",
    title: "Final Proofreading",
    description:
      "Concentrates on fixing grammatical, spelling, punctuation, and typo mistakes.",
    icon: <FileCheck className="w-5 h-5 text-teal-700" />,
  },
  {
    id: "consistency",
    title: "Consistency Proofreading",
    description:
      "Guarantees that all terms, abbreviations, and writing styles used are consistent.",
    icon: <Sliders className="w-5 h-5 text-teal-700" />,
  },
  {
    id: "formatting",
    title: "Formatting Proofreading",
    description:
      "Makes sure there is consistency in formatting references, headings, tables, etc., as required.",
    icon: <Layout className="w-5 h-5 text-teal-700" />,
  },
  {
    id: "journal-formatting",
    title: "Journal Formatting Proofreading",
    description:
      "Make sure your manuscript is formatted per the specific journal's instructions.",
    icon: <BookOpen className="w-5 h-5 text-teal-700" />,
  },
  {
    id: "technical",
    title: "Technical Proofreading",
    description:
      "Accurate scientific proofreading and scientific paper proofreading service.",
    icon: <Cpu className="w-5 h-5 text-teal-700" />,
  },
  {
    id: "esl",
    title: "ESL Proofreading",
    description:
      "Enhances fluency without changing meaning for ESL students/writers.",
    icon: <Globe2 className="w-5 h-5 text-teal-700" />,
  },
];

// ==========================================
// 2. STEP-BY-STEP PROCESS DATA & TYPES
// ==========================================
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "top" | "bottom";
}

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "PROJECT CONSULTATION & REQUIREMENT ANALYSIS",
    description:
      "We understand your needs for online proofreading services and document types.",
    icon: <FileSearch className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "CONTENT ASSESSMENT",
    description:
      "Evaluation aligned with research paper proofreading service standards.",
    icon: <ClipboardList className="w-8 h-8" />,
    position: "top",
  },
  {
    stepNumber: 3,
    title: "EXPERT PROOFREADING",
    description:
      "Your document is reviewed by professionals to correct grammar, punctuation, and consistency errors.",
    icon: <UserCheck className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "QUALITY ASSURANCE REVIEW",
    description:
      "Multi-level checks ensure accuracy, consistency, and adherence to standards.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    position: "top",
  },
  {
    stepNumber: 5,
    title: "CLIENT FEEDBACK & REVISIONS",
    description:
      "Refinement aligned with best proofreading services for research papers expectations.",
    icon: <MessageSquare className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "FINAL DELIVERY",
    description:
      "You receive a polished, error-free document ready for submission or use.",
    icon: <Send className="w-8 h-8" />,
    position: "top",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function ProofreadingProcessAndTypes() {
  // State for active expanded accordion in "Types of Proofreading"
  const [activeType, setActiveType] = useState<string | null>("final");

  // State for hover-active step card in "How Our Proofreading Service Works"
  const [activeStep, setActiveStep] = useState<number>(4); // Default Step 4 active as seen in screenshot

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 space-y-16">
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
                  className={`w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base transition-colors ${
                    isOpen
                      ? "bg-[#f0fdf4] text-slate-900"
                      : "bg-[#f0fdf4]/60 hover:bg-[#f0fdf4] text-slate-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-white rounded-md border border-emerald-100 shadow-2xs">
                      {item.icon}
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

      {/* ======================================= */}
      {/* BANNER: SATISFACTION GUARANTEE          */}
      {/* ======================================= */}
      <section className="w-full bg-[#003B46] text-white py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
          {/* Badge Graphic */}
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-sky-200 flex flex-col items-center justify-center bg-sky-600 text-white shadow-lg">
              <Award className="w-6 h-6 mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                Satisfaction
              </span>
              <span className="text-base font-extrabold leading-none my-0.5">
                100%
              </span>
              <span className="text-[9px] uppercase tracking-wider leading-none">
                Guarantee
              </span>
            </div>
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

      {/* ======================================= */}
      {/* SECTION 2: HOW OUR SERVICE WORKS       */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            How Our Proofreading Service Works
          </h2>
          <p className="text-slate-600 text-sm">Our Step-by-Step Process</p>
        </div>

        {/* Timeline Desktop Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-6 gap-4 items-center pt-8 pb-12">
          {/* Horizontal Teal Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-[#008099] -translate-y-1/2 z-0" />

          {processSteps.map((step) => {
            const isHovered = activeStep === step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                onMouseEnter={() => setActiveStep(step.stepNumber)}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
              >
                {/* Top Positioned Card */}
                {step.position === "top" && (
                  <div
                    className={`w-full p-4 rounded-xs border transition-all duration-300 mb-6 min-h-[180px] flex flex-col justify-between text-center ${
                      isHovered
                        ? "bg-[#4a4e51] text-white border-slate-700 shadow-lg"
                        : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      <div
                        className={isHovered ? "text-white" : "text-slate-700"}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-xs uppercase mb-2 ${isHovered ? "text-white" : "text-slate-800"}`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-[11px] leading-relaxed ${isHovered ? "text-slate-200" : "text-slate-500"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Step Circle Number Indicator */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-md transition-transform duration-300 ${
                    isHovered ? "scale-110 bg-[#00667e]" : "bg-[#008099]"
                  }`}
                >
                  {step.stepNumber}
                </div>

                {/* Bottom Positioned Card */}
                {step.position === "bottom" && (
                  <div
                    className={`w-full p-4 rounded-xs border transition-all duration-300 mt-6 min-h-[180px] flex flex-col justify-between text-center ${
                      isHovered
                        ? "bg-[#4a4e51] text-white border-slate-700 shadow-lg"
                        : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      <div
                        className={isHovered ? "text-white" : "text-slate-700"}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-xs uppercase mb-2 ${isHovered ? "text-white" : "text-slate-800"}`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-[11px] leading-relaxed ${isHovered ? "text-slate-200" : "text-slate-500"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

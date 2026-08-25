"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ribbon,
  Scissors,
  Brain,
  Sparkles,
  Smile,
  Baby,
  Dna,
  Scan,
  CheckCircle2,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// DATA: WHO WE SERVE
// ==========================================
const whoWeServeCards = [
  {
    title: "Medical Professionals",
    image: "/images/physician-writing-services/case-report/Medical-Professionals.jpg",
  },
  {
    title: "Hospitals and Healthcare Institutions",
    image: "/images/physician-writing-services/case-report/Hospitals-and-Healthcare-Institutions.jpg",
  },
  {
    title: "Pharmaceutical and Medical Device Companies",
    image: "/images/physician-writing-services/case-report/Pharmaceutical-and-Medical-Device-Companies.jpg",
  },
  {
    title: "Medical Postgraduates and Doctoral Candidates",
    image: "/images/physician-writing-services/case-report/Medical-Postgraduates-and-Doctoral-Candidates.jpg",
  },
  {
    title: "Early-Career Researchers and Medical Interns",
    image: "/images/physician-writing-services/case-report/Early-Career-Researchers-and-Medical-Interns.jpg",
  },
  {
    title: "Private Practitioners & Diagnostics Consultants",
    image: "/images/physician-writing-services/case-report/Private-Practitioners-Diagnostics-Consultants.jpg",
  },
];

// ==========================================
// DATA: STEP-BY-STEP PROCESS
// ==========================================
const processSteps = [
  {
    stepNumber: 1,
    title: "INITIAL CONSULTATION & CASE EVALUATION",
    description:
      "We start by having in-depth discussions to clarify the clinical case, objectives, and target journal. Our experts review the novelty of the case, ethics approvals, and patient consent",
    isDark: false,
    position: "top", // Number circle position (top/bottom) matching screenshot
  },
  {
    stepNumber: 2,
    title: "DATA COLLECTION & LITERATURE REVIEW",
    description:
      "We collect all relevant patient data, diagnostic reports, imaging, and treatment records. A focused literature review is conducted to place the case in the context of current clinical knowledge",
    isDark: true,
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "DRAFTING THE CASE REPORT (CARE/SCARE COMPLIANT)",
    description:
      "Our medical writers create a structured draft following the CARE/SCARE guidelines, which includes an Abstract, Introduction, Case Presentation, Discussion, and Conclusion",
    isDark: false,
    position: "top",
  },
  {
    stepNumber: 4,
    title: "SCIENTIFIC EDITING & JOURNAL FORMATTING",
    description:
      "The report is scientifically peer reviewed for clarity, accuracy, and technical depth. We format the manuscript following the journal submission criteria",
    isDark: false,
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "MEDICAL ILLUSTRATION & FIGURE INTEGRATION",
    description:
      "We create high-resolution images, clinical graphs, and charts with the correct annotations to improve the visual clarity of the diagnosis and outcomes",
    isDark: true,
    position: "top",
  },
  {
    stepNumber: 6,
    title: "FINAL REVIEW & SUBMISSION SUPPORT",
    description:
      "We perform a comprehensive quality check, plagiarism scan, and language polishing. Optional submission assistance is offered, including a cover letter and author guidelines",
    isDark: false,
    position: "bottom",
  },
];

// ==========================================
// DATA: DISCIPLINES WE SUPPORT
// ==========================================
const disciplines = [
  { title: "Oncology", icon: Ribbon },
  { title: "Clinical Medicine & Surgery", icon: Scissors },
  { title: "Neurology", icon: Brain },
  { title: "Dermatology", icon: Sparkles },
  { title: "Psychiatry", icon: Smile },
  { title: "Paediatrics & Neonatology", icon: Baby },
  { title: "Rare Genetic & Metabolic Disorders", icon: Dna },
  { title: "Radiology", icon: Scan },
  { title: "Dentistry & Oral Pathology", icon: CheckCircle2 },
];

export default function CaseReportWorkflowAndDisciplines() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans">
      {/* ========================================================= */}
      {/* 1. WHO WE SERVE SECTION                                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-3">
          Who We Serve
        </h2>
        <p className="text-sm sm:text-base text-slate-700 max-w-5xl leading-relaxed mb-8">
          Our{" "}
          <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
            case report writing services
          </Link>{" "}
          are designed for clinicians, researchers, and academic institutions
          aiming to publish rare or significant clinical cases. We can help you
          with the{" "}
          <Link href="/services/publication-support/journal-submission" className="text-sky-600 hover:underline">
            journal submission
          </Link>{" "}
          process, whether you are a physician, postgraduate, or medical
          educator.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeCards.map((card, idx) => (
            <div
              key={idx}
              className="relative group h-60 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. HOW THE CASE REPORT WRITING SERVICE WORKS             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-2">
            How the Case Report Writing Service Works
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-slate-700 mb-4">
            Our step-by-Step Process
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
            With Pubrica's{" "}
            <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
              case report writing service
            </Link>
            , our clinical experts and scientific writers collaborate to craft
            ethically sound, guideline-compliant case reports that align with
            journal-specific formatting and publication standards.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative pt-6">
          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col items-center relative group"
            >
              {/* Top Number Circle */}
              {step.position === "top" && (
                <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-base mb-4 shadow-sm z-10 transition-transform duration-200 group-hover:scale-110">
                  {step.stepNumber}
                </div>
              )}

              {/* Step Card (Turns Black on Hover) */}
              <div
                className={`w-full h-full p-5 flex flex-col rounded-sm border cursor-pointer transition-all duration-300 shadow-sm ${step.isDark
                    ? "bg-white text-slate-800 border-slate-200"
                    : "bg-white text-slate-800 border-slate-200"
                  } hover:bg-black hover:text-white hover:border-black hover:shadow-xl`}
              >
                <h4
                  className={`font-bold text-xs sm:text-sm uppercase mb-3 leading-snug tracking-tight transition-colors duration-300 ${step.isDark ? "text-[#0e3b38]" : "text-[#0e3b38]"
                    } group-hover:text-white`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${step.isDark ? "text-[#0e3b38]" : "text-slate-600"
                    } group-hover:text-slate-200`}
                >
                  {step.description}
                </p>
              </div>

              {/* Bottom Number Circle */}
              {step.position === "bottom" && (
                <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-base mt-4 shadow-sm z-10 transition-transform duration-200 group-hover:scale-110">
                  {step.stepNumber}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SPEED UP YOUR CASE REPORT / CALL TO ACTION BANNER     */}
      {/* ========================================================= */}
      <section className="w-full bg-[#0a2e2b] py-12 px-4 sm:px-6 lg:px-8 my-8 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Satisfaction Badge */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-dashed border-sky-200 bg-[#164e49] flex flex-col items-center justify-center text-center p-2 shadow-inner">
              <span className="text-[10px] tracking-wider uppercase font-semibold">
                SATISFACTION
              </span>
              <span className="text-2xl font-black text-white my-0.5">
                100%
              </span>
              <span className="text-[9px] tracking-wider uppercase font-semibold">
                GUARANTEE
              </span>
            </div>
          </div>

          {/* Text & Action */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Speed up your Case Report Writing Journey with Pubrica
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
              Access your assistant for case report writing through Pubrica,
              simplifying your submission process and preventing potential
              problems. Our service is meant to expedite publication so that
              your case reports are written accurately and professionally for
              easy acceptance.
            </p>
            <div>
              <GetFreeQuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DISCIPLINES WE SUPPORT                                 */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] text-center mb-10">
          Disciplines We Support
        </h2>

        {/* 3x3 Grid with subtle border separators matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b md:border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm">
          {disciplines.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors border-b md:border-b border-slate-100"
              >
                <div className="w-16 h-16 rounded-full bg-[#0e3b38] text-white flex items-center justify-center mb-4 shadow-sm">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="font-bold text-[#0e3b38] text-sm sm:text-base">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
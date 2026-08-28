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
    position: "top",
    iconSrc: "/images/icons/step1.png", // Add icon path here
  },
  {
    stepNumber: 2,
    title: "DATA COLLECTION & LITERATURE REVIEW",
    description:
      "We collect all relevant patient data, diagnostic reports, imaging, and treatment records. A focused literature review is conducted to place the case in the context of current clinical knowledge",
    isDark: true,
    position: "bottom",
    iconSrc: "/images/icons/step-2.png",
  },
  {
    stepNumber: 3,
    title: "DRAFTING THE CASE REPORT (CARE/SCARE COMPLIANT)",
    description:
      "Our medical writers create a structured draft following the CARE/SCARE guidelines, which includes an Abstract, Introduction, Case Presentation, Discussion, and Conclusion",
    isDark: false,
    position: "top",
    iconSrc: "/images/icons/step-3.png",
  },
  {
    stepNumber: 4,
    title: "SCIENTIFIC EDITING & JOURNAL FORMATTING",
    description:
      "The report is scientifically peer reviewed for clarity, accuracy, and technical depth. We format the manuscript following the journal submission criteria",
    isDark: false,
    position: "bottom",
    iconSrc: "/images/icons/step-4.png",
  },
  {
    stepNumber: 5,
    title: "MEDICAL ILLUSTRATION & FIGURE INTEGRATION",
    description:
      "We create high-resolution images, clinical graphs, and charts with the correct annotations to improve the visual clarity of the diagnosis and outcomes",
    isDark: true,
    position: "top",
    iconSrc: "/images/icons/step-5.png",
  },
  {
    stepNumber: 6,
    title: "FINAL REVIEW & SUBMISSION SUPPORT",
    description:
      "We perform a comprehensive quality check, plagiarism scan, and language polishing. Optional submission assistance is offered, including a cover letter and author guidelines",
    isDark: false,
    position: "bottom",
    iconSrc: "/images/icons/step-6.png",
  },
];

// ==========================================
// DATA: DISCIPLINES WE SUPPORT
// ==========================================
const disciplines = [
  {
    title: "Oncology",
    icon: Ribbon,
    url: "/subject-matter-experts/",
  },
  {
    title: "Clinical Medicine & Surgery",
    icon: Scissors,
    url: "/subject-matter-experts/",
  },
  {
    title: "Neurology",
    icon: Brain,
    url: "/subject-matter-experts/neurology",
  },
  {
    title: "Dermatology",
    icon: Sparkles,
    url: "/subject-matter-experts/dermatology",
  },
  {
    title: "Psychiatry",
    icon: Smile,
    url: "/subject-matter-experts/psychiatry",
  },
  {
    title: "Paediatrics & Neonatology",
    icon: Baby,
    url: "/subject-matter-experts/",
  },
  {
    title: "Rare Genetic & Metabolic Disorders",
    icon: Dna,
    url: "/subject-matter-experts/",
  },
  {
    title: "Radiology",
    icon: Scan,
    url: "/subject-matter-experts/radiology",
  },
  {
    title: "Dentistry & Oral Pathology",
    icon: CheckCircle2,
    url: "/subject-matter-experts/",
  },
];

export default function CaseReportWorkflowAndDisciplines() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans">
      {/* ========================================================= */}
      {/* 1. WHO WE SERVE SECTION                                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
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
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
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

        {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
        <div
          className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
          style={{
            gridTemplateColumns: `repeat(${processSteps.length}, minmax(0, 1fr))`,
          }}
        >
          {processSteps.map((step, index) => {
            const isTop = step.position === "top";

            return (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
              >
                {/* UPPER SECTION */}
                <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                  {!isTop ? (
                    /* Card placed at Top */
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
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
                    /* Badge + Vertical Connector Line */
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
                      : index === processSteps.length - 1
                        ? "rounded-r-sm"
                        : ""
                      }`}
                  />
                </div>

                {/* LOWER SECTION */}
                <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                  {isTop ? (
                    /* Card placed at Bottom */
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
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
                    /* Vertical Connector Line + Badge */
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
      {/* ========================================================= */}
      {/* 3. SPEED UP YOUR CASE REPORT / CALL TO ACTION BANNER     */}
      {/* ========================================================= */}
      <section className="w-full bg-[#0a2e2b] py-6 px-4 sm:px-6 lg:px-8 my-8 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Satisfaction Badge */}
          <div className="shrink-0 flex items-center justify-center">
            <Image
              src="/images/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              width={128}
              height={128}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
            />
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
      <section className="max-w-5xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] text-center mb-10">
          Disciplines We Support
        </h2>

        {/* 3x3 Grid with subtle border separators matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b md:border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm">
          {disciplines.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={idx}
                href={item.url}
                className="p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors border-b md:border-b border-slate-100 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0e3b38] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="font-bold text-[#0e3b38] text-sm sm:text-base">
                  {item.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
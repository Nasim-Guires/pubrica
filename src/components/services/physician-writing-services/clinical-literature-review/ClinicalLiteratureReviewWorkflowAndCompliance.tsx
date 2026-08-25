"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Target,
  FileText,
  Search,
  Filter,
  Database,
  FileSpreadsheet,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  position: "top" | "bottom";
}

const processSteps: StepItem[] = [
  {
    number: 1,
    title: "DEFINE RESEARCH OBJECTIVE",
    description:
      "We work with you to formulate a specific, clinically relevant research question using the PICO (Population, Intervention, Comparator, Outcome) or SPIDER methodology.",
    icon: Target,
    position: "bottom",
  },
  {
    number: 2,
    title: "PROTOCOL DEVELOPMENT",
    description: "Prepare review protocols based on PRISMA-P or the JBI guidelines.",
    icon: FileText,
    position: "top",
  },
  {
    number: 3,
    title: "COMPREHENSIVE LITERATURE SEARCH",
    description:
      "Conduct a systematic search of databases including PubMed, Embase, Cochrane, Scopus, and Web of Science.",
    icon: Search,
    position: "bottom",
  },
  {
    number: 4,
    title: "STUDY SCREENING & SELECTION",
    description:
      "Two-level screening (title/abstract followed by full-text) is performed using PRISMA-compliant flow diagrams.",
    icon: Filter,
    position: "top",
  },
  {
    number: 5,
    title: "DATA EXTRACTION AND QUALITY APPRAISAL",
    description:
      "Standardized templates to extract study characteristics, interventions, outcomes, and results. Quality assessment using validated tools (e.g., GRADE, Jadad Scale, or Newcastle-Ottawa Scale).",
    icon: Database,
    position: "bottom",
  },
  {
    number: 6,
    title: "EVIDENCE SYNTHESIS AND REPORTING",
    description:
      "Depending on the scope, we perform narrative synthesis, meta-analysis, or evidence mapping. Results are presented using forest plots, summary of findings tables, and clinical interpretation.",
    icon: FileSpreadsheet,
    position: "top",
  },
];

export default function ClinicalLiteratureReviewWorkflowAndCompliance() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "methodological"
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-12 text-slate-800 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* 1. How Our Clinical Literature Review Service Works */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#EAEAEA] rounded-xl text-center font-sans overflow-hidden">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
            How Our Clinical Literature Review Service Works
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
            Our step-by-Step Process
          </h3>
          <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
            Clinical literature reviews should use a protocol-driven and
            reproducible six-step process to ensure that they adhere to the
            highest standards of evidence-based medicine (EBM), regulatory
            compliance, and scientific integrity.
          </p>

          {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
          <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex items-center w-full min-h-[160px]"
                >
                  {/* Connecting Vertical Line */}
                  {index !== processSteps.length - 1 && (
                    <div
                      className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                        }`}
                    />
                  )}

                  {/* Step Number Badge */}
                  <div
                    className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                      }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Card Container */}
                  <div
                    className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                      }`}
                  >
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10">
                      <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[#0B353D]" />
                      </div>

                      <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug uppercase">
                        {step.title}
                      </h4>

                      <p className="text-[#64748B] text-[11px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
          <div
            className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
            style={{
              gridTemplateColumns: `repeat(${processSteps.length}, minmax(0, 1fr))`,
            }}
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isTop = step.position === "top";

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
                >
                  {/* UPPER SECTION */}
                  <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                    {!isTop ? (
                      /* Card placed at Top */
                      <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                          <IconComponent className="w-7 h-7 text-[#0B353D] group-hover:text-white transition-colors duration-300" />
                        </div>

                        <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug uppercase transition-colors duration-300 group-hover:text-white">
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
                          {step.number}
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
                        <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                          <IconComponent className="w-7 h-7 text-[#0B353D] group-hover:text-white transition-colors duration-300" />
                        </div>

                        <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug uppercase transition-colors duration-300 group-hover:text-white">
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
                          {step.number}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 2. Speed Up Guarantee Banner (Full-Bleed: hits left and right edges) */}
      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-[#053826] text-white my-16 py-8 px-6 md:px-12 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Guarantee Image direct & scaled up */}
            <div className="flex-shrink-0">
              <Image
                src="/images/publication-support/journal-selection/Satisfaction_Guarantee.webp"
                alt="100% Satisfaction Guarantee"
                width={180}
                height={180}
                className="w-40 h-40 md:w-48 md:h-48 object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold">
                Speed up your clinical literature review writing service with
                Pubrica
              </h3>
              <p className="text-xs md:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Pubrica provides a medical literature review service which
                provides a detailed guide to help you to identify the right
                journal for your paper. Our service provides comprehensive
                analysis based on scope, range of impact factor, indexing
                requirements, and more, based on your paper and your
                preferences.
              </p>
            </div>
          </div>

          <GetFreeQuoteButton />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* 3. Our Compliance and Guideline Standards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-5xl leading-relaxed">
              At Pubrica, all our clinical literature review services are rooted
              in accepted internationally recognized standards and frameworks to
              guarantee methodological rigor, transparency, scientific validity,
              and regulatory readiness. Our processes are guided by best
              practices in scientific research and industry-specific
              requirements.
            </p>
          </div>

          {/* Collapsible Accordion Sections */}
          <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200">
            {/* Methodological Guidelines */}
            <div>
              <button
                onClick={() => toggleAccordion("methodological")}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 text-sm"
              >
                <span>Methodological Guidelines</span>
                <span>{openAccordion === "methodological" ? "−" : "+"}</span>
              </button>

              {openAccordion === "methodological" && (
                <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* PRISMA */}
                  <div className="border border-slate-200 rounded-lg p-5 text-center flex flex-col items-center space-y-3 shadow-sm">
                    <div className="h-12 flex items-center justify-center">
                      <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
                        PRISMA
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">
                      PRISMA (Preferred Reporting Items for Systematic Reviews and
                      Meta-Analyses)
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      For transparent and standardized reporting of systematic
                      reviews.
                    </p>
                  </div>

                  {/* Cochrane */}
                  <div className="border border-slate-200 rounded-lg p-5 text-center flex flex-col items-center space-y-3 shadow-sm">
                    <div className="h-12 flex items-center justify-center">
                      <span className="font-bold text-sky-800 text-lg tracking-wide">
                        Cochrane
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Cochrane Handbook for Systematic Reviews of Interventions
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      For evidence-based methodology and quality assessment.
                    </p>
                  </div>

                  {/* JBI */}
                  <div className="border border-slate-200 rounded-lg p-5 text-center flex flex-col items-center space-y-3 shadow-sm">
                    <div className="h-12 flex items-center justify-center">
                      <span className="font-extrabold text-blue-900 text-lg">
                        JBI
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">
                      JBI (Joanna Briggs Institute) Guidelines
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      For scoping reviews, evidence summaries, and qualitative
                      syntheses.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Regulatory Compliance and Industry Standards */}
            <div>
              <button
                onClick={() => toggleAccordion("regulatory")}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 text-sm"
              >
                <span>Regulatory Compliance and Industry Standards</span>
                <span>{openAccordion === "regulatory" ? "−" : "+"}</span>
              </button>

              {openAccordion === "regulatory" && (
                <div className="p-6 md:p-8 bg-[#f8fafc] space-y-6">
                  {/* Top Row: 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/ICH-Guidelines-E6-E3-E9-etc.png"
                          alt="ICH Guidelines"
                          width={80}
                          height={80}
                          className="object-contain max-h-16 w-auto"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold text-[#1a2b49]">
                          ICH Guidelines (E6, E3, E9, etc.)
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          For clinical trial design, reporting, and statistical methods.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/FDA-and-EMA-Standards.png"
                          alt="FDA and EMA Standards"
                          width={100}
                          height={60}
                          className="object-contain max-h-14 w-auto"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold text-[#1a2b49]">
                          FDA and EMA Standards
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          For regulatory submissions including IND, NDA, BLA, and 510(k).
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/CE-Marking-MDR-EU-Medical-Device-Regulation.png"
                          alt="CE Marking & MDR"
                          width={100}
                          height={60}
                          className="object-contain max-h-14 w-auto"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold text-[#1a2b49]">
                          CE Marking & MDR (EU Medical Device Regulation)
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          For medical device literature reviews and clinical evaluation reports (CER).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: 2 Centered Cards */}
                  <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
                    {/* Card 4 */}
                    <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/CONSORT-STROBE-Guidelines.png"
                          alt="CONSORT & STROBE Guidelines"
                          width={70}
                          height={70}
                          className="object-contain max-h-16 w-auto"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold text-[#1a2b49]">
                          CONSORT & STROBE Guidelines
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          For assessing clinical trials and observational studies.
                        </p>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Good-Publication-Practice-GPP3.png"
                          alt="Good Publication Practice"
                          width={70}
                          height={70}
                          className="object-contain max-h-16 w-auto"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold text-[#1a2b49]">
                          Good Publication Practice (GPP3)
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          For ethical and transparent reporting of medical writing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Clinical Literature Review Sample Work */}
        <section className="bg-[#f0fdf4] rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Image */}
            <div className="md:col-span-4 relative h-56 w-full rounded-lg overflow-hidden shadow">
              <Image
                src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Clinical-Literature-Review-Sample-Work.jpg"
                alt="Person reviewing printed document"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Banner Text Actions */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-6 text-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Clinical Literature Review Sample Work
                </h3>
                <button className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-xs transition">
                  Discover More
                </button>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-xs text-slate-600 max-w-xl mx-auto mb-4 leading-relaxed">
                  Explore our clinical literature review samples, systematically
                  developed to meet journal submission standards, evidence-based
                  methodology, and stringent timelines for regulatory or academic
                  use.
                </p>
                <button className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-xs transition">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
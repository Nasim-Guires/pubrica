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
}

const processSteps: StepItem[] = [
  {
    number: 1,
    title: "DEFINE RESEARCH OBJECTIVE",
    description:
      "We work with you to formulate a specific, clinically relevant research question using the PICO (Population, Intervention, Comparator, Outcome) or SPIDER methodology.",
    icon: Target,
  },
  {
    number: 2,
    title: "PROTOCOL DEVELOPMENT",
    description: "Prepare review protocols based on PRISMA-P or the JBI guidelines.",
    icon: FileText,
  },
  {
    number: 3,
    title: "COMPREHENSIVE LITERATURE SEARCH",
    description:
      "Conduct a systematic search of databases including PubMed, Embase, Cochrane, Scopus, and Web of Science.",
    icon: Search,
  },
  {
    number: 4,
    title: "STUDY SCREENING & SELECTION",
    description:
      "Two-level screening (title/abstract followed by full-text) is performed using PRISMA-compliant flow diagrams.",
    icon: Filter,
  },
  {
    number: 5,
    title: "DATA EXTRACTION AND QUALITY APPRAISAL",
    description:
      "Standardized templates to extract study characteristics, interventions, outcomes, and results. Quality assessment using validated tools (e.g., GRADE, Jadad Scale, or Newcastle-Ottawa Scale).",
    icon: Database,
  },
  {
    number: 6,
    title: "EVIDENCE SYNTHESIS AND REPORTING",
    description:
      "Depending on the scope, we perform narrative synthesis, meta-analysis, or evidence mapping. Results are presented using forest plots, summary of findings tables, and clinical interpretation.",
    icon: FileSpreadsheet,
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
    <div className="w-full bg-[#f8fafc] py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* 1. How Our Clinical Literature Review Service Works */}
        <section className="space-y-10 text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b49] mb-2">
              How Our Clinical Literature Review Service Works
            </h2>
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Our step-by-Step Process
            </p>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Clinical literature reviews should use a protocol-driven and
              reproducible six-step process to ensure that they adhere to the
              highest standards of evidence-based medicine (EBM), regulatory
              compliance, and scientific integrity.
            </p>
          </div>

          {/* Staggered 6-Step Workflow Process */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-stretch pt-6 pb-4">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              const isEven = step.number % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center justify-between min-h-[360px] ${
                    isEven ? "flex-col-reverse" : "flex-col"
                  }`}
                >
                  {/* Step Number Circle Badge */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-9 h-9 rounded-full bg-[#0d82a4] text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="w-full h-1 my-2 bg-[#0d82a4]"></div>

                  {/* Content Card with Hover Effect */}
                  <div className="group w-full flex-1 flex flex-col items-center text-center p-4 rounded-sm border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm">
                    <div className="mb-3 mt-1">
                      <IconComponent className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-[11px] font-bold tracking-tight mb-2 leading-snug uppercase text-slate-900 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-[11px] leading-relaxed text-slate-600 group-hover:text-slate-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Speed Up Guarantee Banner */}
        <section className="bg-[#053826] text-white rounded-lg p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 relative flex-shrink-0">
                <div className="w-full h-full rounded-full border-2 border-dashed border-sky-300 flex flex-col items-center justify-center text-center p-1 bg-teal-950/40">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-sky-200">
                    SATISFACTION
                  </span>
                  <span className="text-base font-black text-white leading-tight">
                    100%
                  </span>
                  <span className="text-[7px] font-semibold uppercase text-sky-200 tracking-wider">
                    GUARANTEE
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-bold">
                  Speed up your clinical literature review writing service with
                  Pubrica
                </h3>
                <p className="text-xs text-slate-200 max-w-2xl leading-relaxed">
                  Pubrica provides a medical literature review service which
                  provides a detailed guide to help you to identify the right
                  journal for your paper. Our service provides comprehensive
                  analysis based on scope, range of impact factor, indexing
                  requirements, and more, based on your paper and your
                  preferences.
                </p>
              </div>
            </div>

           <GetFreeQuoteButton/>
          </div>
        </section>

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

            {/* Regulatory Compliance */}
            <div>
              <button
                onClick={() => toggleAccordion("regulatory")}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 text-sm"
              >
                <span>Regulatory Compliance and Industry Standards</span>
                <span>{openAccordion === "regulatory" ? "−" : "+"}</span>
              </button>

              {openAccordion === "regulatory" && (
                <div className="p-6 bg-white text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>
                    • FDA / EMA clinical evaluation guidelines for regulatory approval.
                  </p>
                  <p>
                    • ISO 14155 standards for clinical investigation of medical devices.
                  </p>
                  <p>
                    • ICMJE and EQUATOR Network publication principles.
                  </p>
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
                src="https://pubrica.com/wp-content/uploads/2023/04/clinical-sample-work.jpg"
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
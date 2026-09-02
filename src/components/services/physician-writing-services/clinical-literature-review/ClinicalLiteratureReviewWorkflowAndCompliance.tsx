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
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";
import ServiceBanner from "@/components/common/ServiceBanner";

interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  position: "top" | "bottom";
}

const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "DEFINE RESEARCH OBJECTIVE",
    description:
      "We work with you to formulate a specific, clinically relevant research question using the PICO (Population, Intervention, Comparator, Outcome) or SPIDER methodology.",
    iconSrc: "/images/icons/step1.png",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "PROTOCOL DEVELOPMENT",
    description:
      "Prepare review protocols based on PRISMA-P or the JBI guidelines.",
    iconSrc: "/images/icons/step-2.png",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "COMPREHENSIVE LITERATURE SEARCH",
    description:
      "Conduct a systematic search of databases including PubMed, Embase, Cochrane, Scopus, and Web of Science.",
    iconSrc: "/images/icons/step-3.png",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "STUDY SCREENING & SELECTION",
    description:
      "Two-level screening (title/abstract followed by full-text) is performed using PRISMA-compliant flow diagrams.",
    iconSrc: "/images/icons/step-4.png",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "DATA EXTRACTION AND QUALITY APPRAISAL",
    description:
      "Standardized templates to extract study characteristics, interventions, outcomes, and results. Quality assessment using validated tools (e.g., GRADE, Jadad Scale, or Newcastle-Ottawa Scale), depending on the study design",
    iconSrc: "/images/icons/step-5.png",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "EVIDENCE SYNTHESIS AND REPORTING",
    description:
      "Depending on the scope, we perform narrative synthesis, meta-analysis, or evidence mapping. Results are presented using forest plots, summary of findings tables, and clinical interpretation.",
    iconSrc: "/images/icons/step-6.png",
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
        <EditorialWorkflowSection
          heading="How Our Clinical Literature Review Service Works"
          subheading="Our Step-by-Step Process"
          description="Clinical literature reviews should use a protocol-driven and reproducible six-step process to ensure that they adhere to the highest standards of evidence-based medicine (EBM), regulatory compliance, and scientific integrity."
          steps={steps}
        />
      </div>

      {/* 2. Speed Up Guarantee Banner (Full-Bleed: hits left and right edges) */}
      <ServiceBanner
        imageSrc="/images/publication-support/journal-selection/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Speed up your clinical literature review writing service with Pubrica"
        description="Pubrica provides a medical literature review service which provides a detailed guide to help you to identify the right journal for your paper. Our service provides comprehensive analysis based on scope, range of impact factor, indexing requirements, and more, based on your paper and your preferences."
        showQuoteButton={true}
      />
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
        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Clinical-Literature-Review-Sample-Work.jpg",
            alt: "Person reviewing printed document",
            width: 600,
            height: 400,
          }}
          sections={[
            {
              heading: "Clinical Literature Review Sample Work",
              button: {
                label: "Discover More",
                url: "/insights/sample-work/patient-safety-culture-among-operating-theatre-nurses-in-operating-room/",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our clinical literature review samples, systematically developed to meet journal submission standards, evidence-based methodology, and stringent timelines for regulatory or academic use.",
                },
              ],
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
          ]}
          footerDisclaimerSegments={[]}
        />
      </div>
    </div>
  );
}
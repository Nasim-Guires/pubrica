"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const HIGHLIGHT_BASE = "/images/editing-and-translation/thesis-editing/";

export const ThesisServiceWorkflow: React.FC = () => {
  // All cards closed by default; supports opening multiple independent cards
  const [openHighlights, setOpenHighlights] = useState<Record<string, boolean>>({});

  const toggleHighlight = (id: string) => {
    setOpenHighlights((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 1. Service Highlights Data
  const serviceHighlights: HighlightItem[] = [
    {
      id: "sme",
      title: "Subject-Matter Experts",
      description:
        "Our in-house editor allocation system will assign your paper to a professional SME with experience in your subject. Get a free certificate of editing.",
      iconSrc: `${HIGHLIGHT_BASE}Subject-Matter-Experts.png`,
      iconAlt: "Subject-Matter Experts",
    },
    {
      id: "track-revisions",
      title: "Track revisions",
      description:
        "All editing is done with the track changes feature turned on. We share a copy of the revisions for your review and feedback.",
      iconSrc: `${HIGHLIGHT_BASE}Track-revisions.png`,
      iconAlt: "Track revisions",
    },
    {
      id: "qa-editor",
      title: "Q&A with editor",
      description:
        "Have an unlimited question and answer session with your editor for free.",
      iconSrc: `${HIGHLIGHT_BASE}QA-with-editor.png`,
      iconAlt: "Q&A with editor",
    },
    {
      id: "formatting",
      title: "Formatting and word count",
      description:
        "Formatting and word count reduction are done free of charge. If you want your thesis formatted according to a style guide, your editor will do it for you.",
      iconSrc: `${HIGHLIGHT_BASE}Formatting-and-word-count.png`,
      iconAlt: "Formatting and word count",
    },
    {
      id: "multi-tier",
      title: "Multi-tier editing",
      description:
        "We provide multi-tier editing of the thesis and assure you revisions at least once at a 54% discounted price. The Elite package offers you unlimited editing for one year.",
      iconSrc: `${HIGHLIGHT_BASE}Multi-tier-editing.png`,
      iconAlt: "Multi-tier editing",
    },
    {
      id: "deadline-guarantee",
      title: "Guarantee within the deadline",
      description:
        "Affordable thesis editing prices starting at $360. Flexi-swift plans and 24/7 customer support are available.",
      iconSrc: `${HIGHLIGHT_BASE}Guarantee-within-the-deadline.png`,
      iconAlt: "Guarantee within the deadline",
    },
  ];

  // 2. Process Steps Data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "UPLOAD YOUR MANUSCRIPT, SELECT A SERVICE, AND PLAN",
      description:
        "You start by selecting a service according to your target journal. We then analyze your document and recommend the best plans to choose from. You can choose same-day delivery or a flexible deadline with rates that can accommodate all budgets.",
      iconSrc: `${HIGHLIGHT_BASE}Upload-Your-Manuscript-Select-a-Service-and-Plan-1.png`,
      iconAlt: "Upload your manuscript, select a service, and plan",
    },
    {
      stepNumber: 2,
      title:
        "THE TWO-STEP EDIT PROCESS DELIVERS TOP-NOTCH QUALITY AND TIMELY DELIVERY",
      description:
        "2 best-suited native editors based on your subject area or past preferences will edit your paper, ensuring your quality requirements and journal guidelines are met. A native reviewer and our quality control algorithms ensure that stringent quality guidelines are met.",
      iconSrc: `${HIGHLIGHT_BASE}The-Two-Step-Edit-Process-Delivers-Top-Notch-Quality-and-Timely-Delivery-1.png`,
      iconAlt: "The two-step edit process",
    },
    {
      stepNumber: 3,
      title: "REVIEW FINAL FILES, ASK QUESTIONS, AND COLLABORATE.",
      description:
        "Make a payment to download the final files with track changes to review and accept. Ask unlimited questions to your editor till you are satisfied, or get any clarifications from our customer service team. Depending on your plan, you can also work on multiple re-edits based on feedback from your peers or the journal.",
      iconSrc: `${HIGHLIGHT_BASE}Review-Final-Files-Ask-Questions-and-Collaborate-1.png`,
      iconAlt: "Review final files, ask questions, and collaborate",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* ============================================================= */}
      {/* SECTION 1: OUR SERVICE HIGHLIGHTS                             */}
      {/* ============================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-6">
          Our Service Highlights
        </h2>

        {/* Note: items-start keeps each card's height independent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {serviceHighlights.map((item) => {
            const isOpen = !!openHighlights[item.id];
            return (
              <div
                key={item.id}
                className="border border-slate-200/80 rounded-lg overflow-hidden bg-white shadow-xs transition-all"
              >
                {/* Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleHighlight(item.id)}
                  className="w-full bg-[#eefbf4] hover:bg-[#e2f7eb] px-4 py-3 flex items-center justify-between text-left focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative w-5 h-5 shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt={item.iconAlt}
                        fill
                        sizes="20px"
                        className="object-contain"
                      />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-700 font-medium text-lg leading-none ml-2 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Body Content */}
                {isOpen && (
                  <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2: HOW OUR THESIS EDITING SERVICE WORKS               */}
      {/* ============================================================= */}
      <section className="w-full bg-[#f4f6f8] py-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Banner */}
          <div className="bg-[#042825] text-white rounded-sm p-6 text-center mb-10 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Thesis Editing Services at Pubrica
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Our team comprises physicians, PhDs, MDs, postgraduates,
              engineers, and even journal peer reviewers who bring in a high
              level of technical competency and an inclusive understanding of
              the finer nuances of your subject.
            </p>
          </div>

          <EditorialWorkflowSection
            heading="How Our Thesis Editing Service Works"
            subheading="Our Step-by-Step Process"
            description={
              <>
                We make it easy to improve your research work. From the time you submit
                your order until you receive your revised manuscript, our team of
                specialists will ensure precision and quality every step of the way.
              </>
            }
            steps={[
              {
                stepNumber: 1,
                title: "UPLOAD YOUR MANUSCRIPT, SELECT A SERVICE, AND PLAN",
                description:
                  "You start by selecting a service according to your target journal. We then analyze your document and recommend the best plans to choose from. You can choose same-day delivery or a flexible deadline with rates that can accommodate all budgets.",
                iconSrc: `${HIGHLIGHT_BASE}Upload-Your-Manuscript-Select-a-Service-and-Plan-1.png`,
                position: "top",
              },
              {
                stepNumber: 2,
                title:
                  "THE TWO-STEP EDIT PROCESS DELIVERS TOP-NOTCH QUALITY AND TIMELY DELIVERY",
                description:
                  "2 best-suited native editors based on your subject area or past preferences will edit your paper, ensuring your quality requirements and journal guidelines are met. A native reviewer and our quality control algorithms ensure that stringent quality guidelines are met.",
                iconSrc: `${HIGHLIGHT_BASE}The-Two-Step-Edit-Process-Delivers-Top-Notch-Quality-and-Timely-Delivery-1.png`,
                position: "bottom",
              },
              {
                stepNumber: 3,
                title: "REVIEW FINAL FILES, ASK QUESTIONS, AND COLLABORATE.",
                description:
                  "Make a payment to download the final files with track changes to review and accept. Ask unlimited questions to your editor till you are satisfied, or get any clarifications from our customer service team. Depending on your plan, you can also work on multiple re-edits based on feedback from your peers or the journal.",
                iconSrc: `${HIGHLIGHT_BASE}Review-Final-Files-Ask-Questions-and-Collaborate-1.png`,
                position: "top",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
};
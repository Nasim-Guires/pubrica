"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// TYPE DEFINITIONS
// ==========================================
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface HighlightCardItem {
  title: string;
  borderColorClass: string;
  content: ReactNode;
}
// ==========================================
// MAIN COMBINED COMPONENT
// ==========================================
export const ResearchServicesSections: React.FC = () => {
  // Accordion Items from the screenshot images
  const servicesList: AccordionItem[] = [
    {
      id: "1",
      title: "Evidence Synthesis & Review Services",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              Systematic Review Services:
            </strong>{" "}
            PRISMA-, Cochrane-, and PROSPERO-compliant reviews for academic,
            clinical, regulatory, and policy purposes.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Meta-analysis &amp; Network Meta-analysis:
            </strong>{" "}
            Statistical synthesis for clinical trials, pharma comparisons,
            nutrition interventions, and policy evaluations.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Scoping, Rapid, Umbrella &amp; Realist Reviews:
            </strong>{" "}
            Evidence mapping and targeted synthesis for public health, NGOs, and
            decision-makers.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Mixed-Methods &amp; Qualitative Evidence Synthesis:
            </strong>{" "}
            For complex social, behavioural, and clinical research questions.
          </p>
        </div>
      ),
    },
    {
      id: "2",
      title: "Research Design & Protocol Development",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              Protocol Development:
            </strong>{" "}
            PICO/
            <Link href="/academy/research-services/spider-framework-research-design-guide" className="text-blue-600 no-underline hover:no-underline">
              SPIDER framework
            </Link>{" "}
            design for clinical, academic, and policy research.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              PROSPERO Registration:
            </strong>{" "}
            Transparent registration for systematic reviews and meta-analyses.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Experimental Design:
            </strong>{" "}
            Robust design for laboratory, clinical, and field research.
          </p>
        </div>
      ),
    },
    {
      id: "3",
      title: "Data Collection & Management",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              Data Collection Services:
            </strong>{" "}
            Clinical, epidemiological, market, and social science datasets.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Survey Design &amp; Implementation:
            </strong>{" "}
            Online/offline data capture for quantitative &amp; qualitative
            research.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              AI &amp; Machine Learning Data Preparation:
            </strong>{" "}
            Annotation, labelling, and preprocessing for healthcare and life
            science AI projects.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Database Search &amp; Retrieval:
            </strong>{" "}
            PubMed, EMBASE, Cochrane, CINAHL, Scopus, and specialized sources.
          </p>
        </div>
      ),
    },
    {
      id: "4",
      title: "Data Analysis & Statistical Modelling",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              Biostatistical Programming:
            </strong>{" "}
            SAS, R, STATA, SPSS for healthcare and academic research.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              AI &amp; ML Analytics:
            </strong>{" "}
            Predictive modelling, NLP-based literature mining, algorithm
            validation.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Cost-effectiveness / Economic Evaluations:
            </strong>{" "}
            For HTA, policy, and market access.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Risk of Bias &amp; Quality Assessment:
            </strong>{" "}
            Cochrane RoB, NOS, JBI, AMSTAR 2, ROBINS-I.
          </p>
        </div>
      ),
    },
    {
      id: "5",
      title: "Clinical Trial Biostatistics & Programming",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              SAP (Statistical Analysis Plan) Development:
            </strong>{" "}
            For Phase I–IV clinical trials.
          </p>
        </div>
      ),
    },
    {
      id: "6",
      title: "Sample Size & Power Calculations",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              CRF (Case Report Form) Design &amp; EDC setup:
            </strong>{" "}
            (Medidata, Oracle Clinical, REDCap).
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Clinical Data Management:
            </strong>{" "}
            Data cleaning, validation, reconciliation.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              CDISC Standards Compliance:
            </strong>{" "}
            SDTM, ADaM datasets.
          </p>
        </div>
      ),
    },
    {
      id: "7",
      title: "Interim & Final Statistical Analysis",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              PK/PD Data Analysis:
            </strong>{" "}
            Pharmacokinetic/pharmacodynamic studies.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Generation of TLFs (Tables, Listings, Figures):
            </strong>{" "}
            for CSRs.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              ISS &amp; ISE Preparation:
            </strong>{" "}
            Integrated summaries for regulatory submissions.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              CSR (Clinical Study Report) Writing:
            </strong>{" "}
            ICH E3 compliant.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Clinical Protocol Writing:
            </strong>{" "}
            ICH E6/GCP standards.
          </p>
        </div>
      ),
    },
    {
      id: "8",
      title: "Manuscript Development & Publication Support",
      content: (
        <div className="space-y-3 pt-2">
          <p>
            <strong className="text-gray-900 font-semibold">
              Original Research Articles:
            </strong>{" "}
            Complete manuscript drafting from study data.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Literature Reviews:
            </strong>{" "}
            Narrative, integrative, and critical reviews.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Journal Selection &amp; Formatting:
            </strong>{" "}
            High-impact journal targeting (APA, AMA, Vancouver).
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Reviewer Comment Addressal:
            </strong>{" "}
            Revisions, rebuttals, and resubmission management.
          </p>
          <p>
            <strong className="text-gray-900 font-semibold">
              Conference Abstracts &amp; Posters:
            </strong>{" "}
            Academic and professional dissemination.
          </p>
        </div>
      ),
    },
  ];

  // Highlights Cards Data
  const highlightCards: HighlightCardItem[] = [
    {
      title: "The Anatomy of a Paper",
      borderColorClass: "border-l-[#f1c40f]",
      content: (
        <>
          At Pubrica, we follow the Introduction, Methods, Results, and Discussion
          (IMRAD) structure [released by the International Committee of Medical
          Journal Editors – ICMJE] of scientific papers, which was widely accepted
          (by over 500 biomedical journals) for retrospective/descriptive &amp;
          experimental studies.
        </>
      ),
    },
    {
      title: "Consolidated Standards",
      borderColorClass: "border-l-[#6c5ce7]",
      content: (
        <>
          Depending on your study type, the Pubrica medical writer will determine
          appropriate reporting guidelines based on the{" "}
          <a
            href="https://www.equator-network.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline "
          >
            EQUATOR
          </a>{" "}
          Network Checklist.{" "}
          <a
            href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline "
          >
            CONSORT
          </a>{" "}
          statement guidelines for Randomized controlled Clinical trials,{" "}
          <a
            href="https://www.strobe-statement.org/checklists/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline"
          >
            STROBE
          </a>{" "}
          for reporting of observational studies (Cohort, case-control, or
          cross-sectional studies), or{" "}
          <a
            href="https://www.prisma-statement.org/prisma-2020-checklist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline "
          >
            PRISMA
          </a>{" "}
          statement for systematic review, and{" "}
          <a
            href="https://www.equator-network.org/reporting-guidelines/stard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline "
          >
            STARD
          </a>{" "}
          for diagnostic studies.
        </>
      ),
    },
    {
      title: "Ethical Issues",
      borderColorClass: "border-l-[#00b894]",
      content: (
        <>
          Clinical reviews are based on a comprehensive assessment of a wide range
          of sources of evidence-based medicine. MEDLINE/PubMed wide range of
          libraries, Medica/EMBASE, Scopus, Thomson Reuters Web of Science, the
          Cochrane Collaboration Database, the Centre for{" "}
          <a
            href="/academy/research-services/gramms-guidelines-reporting-mixed-methods-research/"
            className="text-blue-600 no-underline hover:no-underline"
          >
            Research Support
          </a>
          , TRIP Database, DARE, CINAHL, Google Scholar. We follow{" "}
          <a
            href="https://publicationethics.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline "
          >
            COPE
          </a>{" "}
          guidelines on all aspects of publication ethics.
        </>
      ),
    },
  ];

  // State tracker for active accordion step (defaulted to "2" to display the highlighted link)
  const [openIndex, setOpenIndex] = useState<string | null>("2");

  return (
    <div className="w-full bg-[#f4f9fc] py-7 px-6 md:px-12 lg:px-24 font-sans selection:bg-blue-100 space-y-20">
      {/* SECTION 1: OUR SERVICES ACCORDION LAYOUT */}
      <section className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-gray-700 text-[15px] max-w-5xl leading-relaxed">
            We understand that impactful research requires precision, methodical
            integrity, and compliance with global science standards. At Pubrica,
            our cross-disciplinary teams manage the entire research cycle, from
            idea conception to data analysis and final publication, producing
            credible, reproducible, and publication-ready outputs for academia,
            healthcare, industry, and government.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Overlapping Circle / Image Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px] lg:sticky lg:top-8">
            {/* Soft Gray/Blue background shape circle */}
            <div className="absolute w-[280px] h-[280px] bg-[#e6eff4] rounded-full left-10 top-8 z-0" />

            <div className="relative z-10 w-full max-w-[420px] aspect-square shadow-lg rounded-xl overflow-hidden bg-white border-4 border-white">
              <Image
                src="/images/research-services/What-We-Do-1.png"
                alt="Pubrica research services overview collage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Bordered Menu List */}
          <div className="lg:col-span-7">
            <div className="border-t border-gray-300">
              {servicesList.map((service) => {
                const isOpen = openIndex === service.id;
                return (
                  <div key={service.id} className="border-b border-gray-300">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : service.id)}
                      className={`w-full text-left py-4 px-3 flex items-center justify-between transition-colors duration-150 group ${isOpen ? "bg-blue-50/60" : "hover:bg-gray-50"
                        }`}
                    >
                      <span className="text-[#083c4c] font-semibold text-base md:text-[17px] flex items-center gap-3">
                        <span className="text-gray-500 font-normal text-sm w-3">
                          {isOpen ? "−" : "+"}
                        </span>
                        {service.title}
                      </span>
                    </button>
                    {/* Collapsible Content wrapper */}
                    {isOpen && service.content && (
                      <div className="pl-9 pr-4 pb-5 text-sm text-gray-600 leading-relaxed">
                        {service.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MEDICAL WRITING HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto border-t border-gray-200 pt-7">
        <header className="text-center mb-12">
          <h2 className="text-[#083c4c] text-xl md:text-2xl font-bold tracking-tight mb-2">
            Pubrica Medical Writers Follow Best Practices for Research and
            Publication
          </h2>
          <h3 className="text-[#083c4c] text-lg font-bold">
            Our Medical Writing &amp; Editing Highlights
          </h3>
        </header>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightCards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg shadow-sm border border-gray-100 border-l-[6px] ${card.borderColorClass} p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200`}
            >
              <div>
                <h4 className="text-[#083c4c] text-lg font-bold mb-4">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchServicesSections;
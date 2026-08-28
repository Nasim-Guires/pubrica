"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import CommonUploadButton from "@/components/common/CommonUploadButton";

// Data structure for the "What We do" accordion based on screenshots
const whatWeDoServices = [
  {
    id: "s1",
    title: "Clinical Case Report Drafting",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>
          Writing structured, high-impact clinical case reports based on patient
          data.
        </li>
        <li>
          Follows{" "}
          <a
            href="/services/physician-writing-services/case-report/care-guidelines-case-reports/"
            className="text-[#3b82f6] "
          >
            CARE (CAse REport) guidelines
          </a>{" "}
          or target journal-specific formats.
        </li>
      </ul>
    ),
  },
  {
    id: "s2",
    title: "Case Report Rewriting & Refinement",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>
          Reworking existing drafts to improve clarity, logic, structure, and
          scientific language.
        </li>
        <li>Ensuring alignment with journal submission norms.</li>
      </ul>
    ),
  },
  {
    id: "s3",
    title: "Medical Literature Review Integration",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Integrating up-to-date, evidence-based literature to support clinical
          observations and outcomes.
        </p>
        {/* <li>
          Follows CARE (CAse REport) guidelines or target journal-specific
          formats.
        </li> */}
      </ul>
    ),
  },
  {
    id: "s4",
    title: "Diagnosis & Clinical Decision Discussion",
    content: (
      <p className="text-slate-700">
        Providing detailed explanation and justification of diagnosis,
        differential diagnosis, and treatment decisions.
      </p>
    ),
  },
  {
    id: "s5",
    title: "Imaging, Graphs & Table Preparation",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Designing supporting figures such as X-rays, scans, tables of
          vitals/lab reports, and timeline graphics per journal requirements.
        </p>
      </ul>
    ),
  },
  {
    id: "s6",
    title: "Journal Selection & Formatting Support",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>
          Identifying suitable Scopus, PubMed, or indexed journals for
          submission.
        </li>
        <li>Formatting the manuscript per author guidelines.</li>
      </ul>
    ),
  },
  {
    id: "s7",
    title: "Reference Management & Citation Style Compliance",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Accurate citation in APA, Vancouver, AMA, or journal-specific style
          using EndNote, Mendeley, or Zotero.
        </p>
      </ul>
    ),
  },
  {
    id: "s8",
    title: "Case Report Translation (Non-English to English)",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Translating clinical documents and case notes into academically
          appropriate English for international journals.
        </p>
      </ul>
    ),
  },
  {
    id: "s9",
    title: "Cover Letter & Author Declarations Preparation",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Drafting professional cover letters, conflict of interest statements,
          and author contribution summaries.
        </p>
      </ul>
    ),
  },
  {
    id: "s10",
    title: "Journal Submission & Resubmission Assistance",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Support with online submission portals (e.g., ScholarOne, Editorial
          Manager), including resubmission post peer-review comments
        </p>
      </ul>
    ),
  },
  {
    id: "s11",
    title: "Ethics & Consent Documentation Support",
    content: (
      <p className="text-slate-700">
        Guidance and templates for obtaining and including patient consent forms
        and ethics approvals as needed.
      </p>
    ),
  },
  {
    id: "s12",
    title: "Plagiarism & AI Content Check",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <p>
          Ensuring originality using Turnitin, Grammarly, and AI detection tools
          to clear journal-level scrutiny.
        </p>
      </ul>
    ),
  },
];

export default function CaseReportWritingService() {
  // Pre-opening specific sections to match the provided screenshots
  const [openItems, setOpenItems] = useState<string[]>([
    "s1",
    "s4",
    "s6",
    "s11",
  ]);

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="w-full bg-gradient-to-r from-[#1b2f2d] via-[#153a35] to-[#0a1e1b] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border border-white/30 p-8 sm:p-12 text-center shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Case Report Writing Service for Journal Publication
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl mx-auto">
            Crafting case reports that meet journal-specific standards is
            intricate. Pubrica's case report writing service ensures clinically
            relevant, well-structured manuscripts aligned with CARE guidelines
            and editorial expectations.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN INTRO SECTION                                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] leading-tight">
            Professional Journal-ready Case Report Writing Service: Clinically
            Document Your Findings with Accuracy and Clarity
          </h2>
          <p className="text-[#0e3b38] text-base sm:text-lg">
            Transform Unique Clinical Encounters into Structured, High-Impact
            Case Reports
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Transform unique clinical encounters into structured,{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                high-impact case reports
              </Link>
              . Enhance your publication profile with ethically prepared,
              journal- compliant case reports based on rare, educational, or
              challenging clinical experiences. Our{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                medical case report writing
              </Link>{" "}
              team ensures your case conforms to{" "}
              <a href="https://www.care-statement.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                CARE
              </a>
              ,{" "}
              <a href="https://www.icmje.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                ICMJE
              </a>
              , and target journal guidelines, while emphasising diagnostic
              reasoning, therapeutic innovations, and clinical relevance.
            </p>

            <p>
              With a focus on clarity, structure, and compliance, our{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                clinical case report writing service
              </Link>{" "}
              helps clinicians and researchers convert patient encounters into
              publishable contributions, strengthening visibility across
              speciality journals.
            </p>

            <p>
              At Pubrica, we provide{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                case report writing for journal publication
              </Link>{" "}
              to help researchers and healthcare professionals document and
              publish their clinical findings. Case studies highlight rare
              diseases, new treatments, unexpected outcomes, and important
              educational experiences in medical literature.
            </p>

            <div className="pt-4">
              <CommonUploadButton />
            </div>
          </div>

          {/* Right Column: Image with offset block */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Dark green decorative block */}
            <div className="absolute top-6 -left-6 w-full h-full bg-[#0e3b38] rounded-xl -z-10 hidden sm:block"></div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 w-full bg-slate-100">
              <Image
                src="/images/physician-writing-services/case-report/Professional-Journal-ready-Case-Report-Writing-intro.webp" // Note: Replace with the actual image path you intend to use
                alt="Hand writing a medical case report"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. WHAT WE DO SECTION                                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            What We do
          </h2>
          <p className="text-lg text-slate-700">
            Research Assistant Support CARE guidelines Case Report Writing and
            Publication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text & Image */}
          <div className="space-y-8">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We provide dedicated research assistant services to help
              clinicians, researchers, and scholars prepare high-quality{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                case reports
              </Link>{" "}
              for{" "}
              <Link href="/services/publication-support/journal-submission" className="text-sky-600 hover:underline">
                journal submission
              </Link>{" "}
              and academic purposes. Our clinical{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-sky-600 hover:underline">
                case report
              </Link>{" "}
              writers assist with{" "}
              <Link href="/services/physician-writing-services/literature-search-and-citation" className="text-sky-600 hover:underline">
                literature search
              </Link>
              , reference collection, data validation, structuring the report,{" "}
              <Link href="/services/research-services/scientific-writing" className="text-sky-600 hover:underline">
                scientific writing
              </Link>
              , editing, formatting, and aligning with specific journal
              guidelines.
            </p>

            <div className="relative rounded-xl overflow-hidden shadow-md h-64 sm:h-80 w-full max-w-md bg-slate-100">
              <Image
                src="/images/physician-writing-services/case-report/Case-Report-What-We-do.webp" // Note: Replace with the actual image path you intend to use
                alt="Doctor consulting with patient"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="space-y-1">
            {whatWeDoServices.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div key={item.id} className="border-b border-slate-300">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-4 flex items-center gap-3 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#0e3b38] shrink-0 font-light">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[1.5]" />
                      )}
                    </span>
                    <span
                      className={`text-[15px] sm:text-base font-medium transition-colors ${isOpen ? "text-[#0e3b38]" : "text-[#0e3b38]"
                        }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && item.content && (
                    <div className="pl-8 pb-4 text-sm">{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

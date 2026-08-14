"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Activity,
  UserPlus,
  FileCheck,
  Stethoscope,
  PlusSquare,
  ClipboardList,
  AlertTriangle,
  HelpCircle,
  Scale,
  GitFork,
  BookOpen,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

// Data for "Types of Case Reports We Handle" grid
const caseReportTypes = [
  {
    id: "classical",
    title: "Classical Case Reports",
    description:
      "Detailed description of a rare or unusual disease, symptom, or treatment outcome.",
    icon: FileText,
  },
  {
    id: "vignettes",
    title: "Clinical Vignettes",
    description:
      "Short, focused narratives emphasizing a unique clinical presentation or diagnostic challenge.",
    icon: Activity,
  },
  {
    id: "series",
    title: "Case Series Reports",
    description:
      "Reports of multiple similar clinical cases, highlighting a pattern or trend.",
    icon: UserPlus,
  },
  {
    id: "rare-disease",
    title: "Rare Disease Reports",
    description:
      "Case descriptions of uncommon genetic, infectious, or systemic diseases to inform medical literature.",
    icon: FileCheck,
  },
  {
    id: "surgical",
    title: "Surgical Case Reports",
    description:
      "Covers novel techniques, unexpected intraoperative findings, or innovative post-operative care strategies.",
    icon: Stethoscope,
  },
  {
    id: "novel-treatment",
    title: "Novel Treatment or Intervention Reports",
    description:
      "Documentation of a new therapeutic approach, device use, or surgical method with outcome assessment.",
    icon: PlusSquare,
  },
  {
    id: "diagnostic",
    title: "Diagnostic Challenge Reports",
    description:
      "Focused on complex or misleading diagnostic pathways and final resolution.",
    icon: ClipboardList,
  },
  {
    id: "adverse-event",
    title: "Adverse Event / Drug Reaction Reports",
    description:
      "Accounts of side effects, complications, or unexpected responses to treatment.",
    icon: AlertTriangle,
  },
  {
    id: "complication",
    title: "Unusual Complication Reports",
    description:
      "Unexpected or atypical complications arising during diagnosis, treatment, or recovery.",
    icon: HelpCircle,
  },
  {
    id: "ethics",
    title: "Medical Ethics & Legal Case Reports",
    description:
      "Case-based discussion involving ethical dilemmas or medico-legal issues in clinical practice.",
    icon: Scale,
  },
  {
    id: "multidisciplinary",
    title: "Multidisciplinary or Integrated Case Reports",
    description:
      "Reports involving collaboration across specialties (e.g., oncology and radiology), showing cross-disciplinary value.",
    icon: GitFork,
  },
  {
    id: "educational",
    title: "Educational Case Reports",
    description:
      "Designed to illustrate best practices, reinforce clinical guidelines, or teach a principle in evidence-based medicine.",
    icon: BookOpen,
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation Case Reports",
    description:
      "Tracks patient progress in physical therapy, neurorehabilitation, or long-term recovery plans.",
    icon: HeartPulse,
  },
  {
    id: "preventive",
    title: "Preventive & Community Medicine Case Reports",
    description:
      "Highlighting early detection, vaccination impact, or public health interventions on individual cases.",
    icon: ShieldCheck,
  },
];

// Data for "Structure of the Case Report" section
const caseReportStructure = [
  {
    title: "Abstract",
    text: "We organize the paper's details logically and succinctly into a story. We select from two main methods, such as the narrative style or the organized format, depending on your preferences. We strictly follow the recommendations of JCAA for all case studies. Introduction, case presentation, management, discussion, and outcome are the structure of a well-drafted abstract.",
  },
  {
    title: "Introduction",
    text: "Introductions familiarize the reader with the background of the case, highlighting the objectives that help them to understand the concept clearly.",
  },
  {
    title: "Case presentation",
    text: "The case presentation presents the patient's clinical information in a narrative format, summarizing findings and presenting them chronologically.",
  },
  {
    title: "Management and outcome",
    text: "It summarizes the plan to write the case and discusses the outcome.",
  },
  {
    title: "Discussion",
    text: "Discussion about questions raised from the cases and summarizing the lessons extracted from them.",
  },
  {
    title: "Acknowledgement and References",
    text: "Acknowledgement will provide details of the assistance in the preparation, and references that support the study will be cited in text and listed",
  },
];

export default function CaseReportDetails() {
  // Active highlight state for cards (defaults to "classical" as seen in image)
  const [activeCard, setActiveCard] = useState<string>("classical");

  return (
    <div className="w-full bg-[#f8f9fa] py-12 text-slate-800 font-sans">
      {/* ========================================================= */}
      {/* 1. TYPES OF CASE REPORTS WE HANDLE                        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-8">
          Types of Case Reports We Handle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caseReportTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = activeCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(item.id)}
                className={`p-6 rounded-lg transition-all duration-200 cursor-pointer flex flex-col ${
                  isSelected
                    ? "bg-[#e2edf3] border border-sky-200 shadow-sm"
                    : "bg-white border border-slate-100 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#0e3b38]" />
                  </div>
                  <h3 className="font-bold text-[#0e3b38] text-base leading-snug pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STRUCTURE OF THE CASE REPORT                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-4">
          Structure of the Case Report
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
          The case report is the initial method of{" "}
          <Link href="#" className="text-sky-600 hover:underline">
            medical communication
          </Link>
          . It is a way of developing new knowledge through clinical practices.
          Often, a report will discuss signs and symptoms of a disease, its
          diagnostic procedure, and the following treatment. For instance, a
          case complication of an existing disease with a new treatment
          procedure or unusual or adverse side effects will be reported as a
          clinical case report.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Structured Bullet Points */}
          <div className="lg:col-span-7 space-y-4">
            <ul className="space-y-4 text-sm sm:text-base text-slate-700">
              {caseReportStructure.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg leading-none mt-1">
                    •
                  </span>
                  <div>
                    <span className="font-bold text-slate-900">
                      {item.title}:{" "}
                    </span>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div className="relative w-full max-w-md h-80">
              {/* Back Image (Doctor talking to colleagues) */}
              <div className="absolute top-0 right-4 w-4/5 h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/physician-writing-services/case-report/Structure-of-the-Case-Report.webp" // Replace with actual image path
                  alt="Medical team discussing case"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Front Overlapping Image (Person analyzing charts) */}
              <div className="absolute bottom-0 left-4 w-3/4 h-52 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/physician-writing-services/case-report/Structure-of-the-Case-Report.webp" // Replace with actual image path
                  alt="Doctor reviewing charts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Paragraphs */}
        <div className="mt-12 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            At Pubrica, our expert professionals create clinical{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              case reports
            </Link>{" "}
            in a well-organised manner, following a standard format. Our
            experienced{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              medical writing
            </Link>{" "}
            team accurately categorizes your case and designs a study according to
            the requirements of clinicians and medical professionals. In
            addition, our experts ensure the case report is clear and concise,
            meeting all your requirements. Contact us today to craft a
            well-structured, journal-ready case report with clinical accuracy
            and ethical compliance.
          </p>

          <p>
            Pubrica ensures each case report is professional case report writing,
            clear, concise, and clinically accurate.
          </p>
        </div>
      </section>
    </div>
  );
}
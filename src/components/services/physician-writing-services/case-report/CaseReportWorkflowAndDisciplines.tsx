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
import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";
import ServiceBanner, { BannerProps } from "@/components/common/ServiceBanner";

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
const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "INITIAL CONSULTATION & CASE EVALUATION",
    description:
      "We start by having in-depth discussions to clarify the clinical case, objectives, and target journal. Our experts review the novelty of the case, ethics approvals, and patient consent.",
    position: "top",
    iconSrc: "/images/icons/step1.png",
  },
  {
    stepNumber: 2,
    title: "DATA COLLECTION & LITERATURE REVIEW",
    description:
      "We collect all relevant patient data, diagnostic reports, imaging, and treatment records. A focused literature review is conducted to place the case in the context of current clinical knowledge.",
    position: "bottom",
    iconSrc: "/images/icons/step-2.png",
  },
  {
    stepNumber: 3,
    title: "DRAFTING THE CASE REPORT (CARE/SCARE COMPLIANT)",
    description:
      "Our medical writers create a structured draft following the CARE/SCARE guidelines, which includes an Abstract, Introduction, Case Presentation, Discussion, and Conclusion.",
    position: "top",
    iconSrc: "/images/icons/step-3.png",
  },
  {
    stepNumber: 4,
    title: "SCIENTIFIC EDITING & JOURNAL FORMATTING",
    description:
      "The report is scientifically peer reviewed for clarity, accuracy, and technical depth. We format the manuscript following the journal submission criteria.",
    position: "bottom",
    iconSrc: "/images/icons/step-4.png",
  },
  {
    stepNumber: 5,
    title: "MEDICAL ILLUSTRATION & FIGURE INTEGRATION",
    description:
      "We create high-resolution images, clinical graphs, and charts with the correct annotations to improve the visual clarity of the diagnosis and outcomes.",
    position: "top",
    iconSrc: "/images/icons/step-5.png",
  },
  {
    stepNumber: 6,
    title: "FINAL REVIEW & SUBMISSION SUPPORT",
    description:
      "We perform a comprehensive quality check, plagiarism scan, and language polishing. Optional submission assistance is offered, including a cover letter and author guidelines.",
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

const serviceBannerData: BannerProps = {
  imageSrc: "/images/Satisfaction_Guarantee.webp",
  imageAlt: "100% Satisfaction Guarantee",
  heading: "Speed up your Case Report Writing Journey with Pubrica",
  description:
    "Access your assistant for case report writing through Pubrica, simplifying your submission process and preventing potential problems. Our service is meant to expedite publication so that your case reports are written accurately and professionally for easy acceptance.",
  showQuoteButton: true,
};

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
          <Link href="/insights/sample-work/dyskeratosis-congenita-rare-case-report/" className="text-blue-600">
            case report writing services
          </Link>{" "}
          are designed for clinicians, researchers, and academic institutions
          aiming to publish rare or significant clinical cases. We can help you
          with the{" "}
          <Link href="/services/publication-support/journal-submission/" className="text-blue-600">
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
            <Link href="/insights/sample-work/leigh-syndrome-infant-case-report/" className="text-blue-600">
              case report writing service
            </Link>
            , our clinical experts and scientific writers collaborate to craft
            ethically sound, guideline-compliant case reports that align with
            journal-specific formatting and publication standards.
          </p>
        </div>

        {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
        <EditorialWorkflowSection
          heading=""
          subheading=""
          description=""
          steps={steps}
        />
      </section>
      {/* ========================================================= */}
      {/* 3. SPEED UP YOUR CASE REPORT / CALL TO ACTION BANNER     */}
      {/* ========================================================= */}
      <ServiceBanner {...serviceBannerData} />

      {/* ========================================================= */}
      {/* 4. DISCIPLINES WE SUPPORT                                 */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] text-center mb-10">
          Disciplines We Support
        </h2>

        {/* 3x3 Grid with subtle border separators matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b md:border border-slate-200 bg-white  rounded-lg overflow-hidden shadow-sm">
          {disciplines.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={idx}
                href={item.url}
                className="p-8 flex flex-col items-center justify-center text-center transition-colors border-b md:border-b border-slate-100 cursor-pointer group hover:bg-green-200"
              >
                <div className="w-16 h-16 rounded-full bg-[#0e3b38] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform ">
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
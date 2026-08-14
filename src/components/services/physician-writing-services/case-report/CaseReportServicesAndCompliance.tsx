"use client";

import React, { useState } from "react";
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
  Plus,
  Minus,
} from "lucide-react";

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

// ==========================================
// DATA: WHY CHOOSE US ACCORDIONS
// ==========================================
const whyChooseItems = [
  {
    id: "expertise",
    title: "Expertise",
    content:
      "Our professional medical writers have advanced degrees and are specialists in writing clinical case reports with a comprehensive literature review and citation formatting.",
  },
  {
    id: "end-to-end",
    title: "End-to-end support",
    content:
      "Our service covers an array of aspects from data collection to manuscript submission; we will support end-to-end.",
  },
  {
    id: "bespoke",
    title: "Bespoke services",
    content:
      "Different journals like BMJ, AJCR, and IJSCR have different requirements; our bespoke writing services will provide outputs that match your journal choices.",
  },
  {
    id: "high-quality",
    title: "High-Quality",
    content:
      "Our evidence-based services ensure that your case report results are supported by strong and the latest research findings and help you create a relevant and impactful report.",
  },
  {
    id: "efficiency",
    title: "Efficiency",
    content:
      "Our streamlined process will help you focus on essential research objectives while presenting accurate details.",
  },
  {
    id: "credibility",
    title: "Credibility",
    content:
      "With our support, you can be assured of 100% professionalism and trustworthiness in terms of publishing your clinical case reports.",
  },
];

// ==========================================
// DATA: COMPLIANCE ACCORDIONS
// ==========================================
const complianceAccordionData = [
  {
    id: "clinical",
    title: "Clinical and Ethical Compliance",
    cards: [
      {
        title: "Case Report Guidelines (CARE)",
        logo: "/images/physician-writing-services/case-report/CARE-.png",
      },
      {
        title: "International Committee of Medical Journal Editors (ICMJE)",
        logo: "/images/physician-writing-services/case-report/icmje-vydfghj.png",
      },
      {
        title: "Health Insurance Portability and Accountability Act",
        logo: "/images/publication-support/poster-preparation/HIPAA-COMPILANCE-.png",
      },
    ],
  },
  {
    id: "journal",
    title: "Journal-Specific Guideline",
    cards: [
      {
        title: "Editorial Manager",
        logo: "/images/physician-writing-services/case-report/em-logo-.png",
      },
      {
        title: "Wiley",
        logo: "/images/publication-support/art-work-preparation/Wiley.png",
      },
      {
        title: "Springer",
        logo: "/images/publication-support/art-work-preparation/Springer.png",
      },
      {
        title: "Elsevier Portals",
        logo: "/images/publication-support/art-work-preparation/elsevier-.png",
      },
    ],
  },
  {
    id: "social",
    title: "Social Sciences",
    cards: [
      {
        title: "International Journal of Surgery Case Reports",
        logo: "/images/physician-writing-services/case-report/ijscs.png",
      },
      {
        title: "BMJ Case Reports",
        logo: "/images/physician-writing-services/case-report/bmj-case-report.png",
      },
      {
        title: "Journal of Medical Case Reports",
        logo: "/images/physician-writing-services/case-report/pa-icons-.png",
      },
      {
        title: "American Journal of Case Reports",
        logo: "/images/physician-writing-services/case-report/ajcr.png",
      },
    ],
  },
];

export default function CaseReportServicesAndCompliance() {
  const [openWhyChoose, setOpenWhyChoose] = useState<string | null>("expertise");
  const [openCompliance, setOpenCompliance] = useState<string | null>("clinical");

  const toggleWhyChoose = (id: string) => {
    setOpenWhyChoose(openWhyChoose === id ? null : id);
  };

  const toggleCompliance = (id: string) => {
    setOpenCompliance(openCompliance === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans">
      {/* 1. WHO WE SERVE SECTION */}
 
      {/* 2. HOW THE CASE REPORT WRITING SERVICE WORKS */}
   
      {/* 3. CTA BANNER */}
  

      {/* 4. DISCIPLINES WE SUPPORT */}
   
      {/* 5. WHY CHOOSE OUR CASE REPORT SERVICE? */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-3">
          Why Choose Our Case Report Service?
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 max-w-5xl leading-relaxed mb-8">
          Our physician case report writing services advance medical knowledge and
          communicate unique clinical experiences. We help publish in leading journals
          such as BMJ Case Report, Journal of Medical Case Reports, and the International
          Journal of Surgery Case Reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseItems.map((item) => {
            const isOpen = openWhyChoose === item.id;
            return (
              <div key={item.id} className="flex flex-col">
                <button
                  onClick={() => toggleWhyChoose(item.id)}
                  className="w-full flex items-center justify-between p-4 bg-[#eef7f6] border border-[#0e3b38]/30 rounded-md text-[#0e3b38] font-bold text-sm sm:text-base text-left hover:bg-[#e2f1ef] transition-colors"
                >
                  <span>{item.title}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 shrink-0 text-[#0e3b38]" />
                  ) : (
                    <Plus className="w-4 h-4 shrink-0 text-[#0e3b38]" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 mt-2 bg-white border border-slate-200 rounded-md shadow-xs text-xs sm:text-sm text-slate-600 leading-relaxed transition-all">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. OUR COMPLIANCE AND GUIDELINE STANDARDS */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-3">
          Our Compliance and Guideline Standards
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 max-w-5xl leading-relaxed mb-8">
          At Pubrica, we guarantee that each case report we produce complies with
          international standards and journal-specific guidance to provide clinically sound,
          ethically compliant, and publication-ready documents.
        </p>

        <div className="space-y-2">
          {complianceAccordionData.map((acc) => {
            const isOpen = openCompliance === acc.id;
            return (
              <div key={acc.id} className="w-full overflow-hidden rounded-xs">
                <button
                  onClick={() => toggleCompliance(acc.id)}
                  className="w-full flex items-center justify-between px-6 py-3.5 bg-[#0d3834] text-white font-semibold text-sm sm:text-base hover:bg-[#0a2e2b] transition-colors"
                >
                  <span>{acc.title}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 shrink-0 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 text-white" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-6 bg-[#f0f4f4] border-x border-b border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {acc.cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-white p-6 rounded-md shadow-sm border border-slate-200 flex flex-col items-center justify-between text-center min-h-[180px] hover:shadow-md transition-shadow"
                        >
                          <div className="relative w-full h-20 flex items-center justify-center mb-4">
                            <Image
                              src={card.logo}
                              alt={card.title}
                              fill
                              className="object-contain max-h-full"
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                            {card.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
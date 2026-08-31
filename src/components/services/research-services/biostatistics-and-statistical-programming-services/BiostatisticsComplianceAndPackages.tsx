"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

const IMG =
  "/images/research-services/biostatistics-and-statistical-programming-service/";

interface ComplianceCard {
  id: string;
  title: string;
  iconSrc: string;
  defaultOpen: boolean;
  content: string[];
}

const complianceItems: ComplianceCard[] = [
  {
    id: "cdisc",
    title: "CDISC Standards",
    iconSrc: `${IMG}CDISC-Standards.png`,
    defaultOpen: false, // Closed by default
    content: [
      "SDTM (Study Data Tabulation Model) – Organizing and formatting collected clinical trial data for submission.",
      "ADaM (Analysis Data Model) – Structuring analysis datasets to align with the statistical analysis plan.",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Authority Guidelines",
    iconSrc: `${IMG}Regulatory-Authority-Guidelines.png`,
    defaultOpen: false, // Closed by default
    content: [
      "FDA (Food and Drug Administration – USA) submission standards.",
      "EMA (European Medicines Agency) data submission guidelines.",
      "PMDA (Pharmaceuticals and Medical Devices Agency – Japan) compliance requirements.",
    ],
  },
  {
    id: "ich",
    title: "ICH Guidelines",
    iconSrc: `${IMG}ICH-Guidelines.png`,
    defaultOpen: false, // Closed by default
    content: [
      "ICH E9 – Statistical principles for clinical trials.",
      "ICH E3 – Structure and content of clinical study reports.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data Privacy & Security Compliance",
    iconSrc: `${IMG}Data-Privacy-Security-Compliance.png`,
    defaultOpen: false, // Closed by default
    content: [
      "HIPAA (Health Insurance Portability and Accountability Act – USA).",
      "GDPR (General Data Protection Regulation – EU).",
    ],
  },
  {
    id: "software-validation",
    title: "Software & Validation Standards",
    iconSrc: `${IMG}Software-Validation-Standards.png`,
    defaultOpen: false, // Closed by default
    content: [
      "SAS-compliant programming workflows with rigorous quality control (QC) and validation processes.",
      "Double programming and code review to minimize errors.",
    ],
  },
];

interface PackageCard {
  id: string;
  iconSrc: string;
  title: string;
  subtitle: string;
  bgColor: string;
  targetAudience: string;
  includes: string[];
  turnaroundTime: string;
}

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Data Preparation & Cleaning",
    idealFor: "Ideal for early-stage studies and exploratory research.",
    includes: [
      "Data import, cleaning, and transformation",
      "Basic descriptive statistical analysis",
      "Dataset structuring to CDISC SDTM format",
      "Data validation and QC checks",
    ],
    turnaround: "5–10 business days",
    cardBgColor: "#e2ece9",
    titleColor: "#0e3b38",
  },
  {
    icon: "/images/publication-support/art-work-preparation/S.png",
    title: "Standard",
    subtitle: "Statistical Programming & Analysis",
    idealFor:
      "Best for Phase I–III clinical trials and academic research projects.",
    includes: [
      "SDTM and ADaM dataset creation",
      "SAS programming for TLFs (Tables, Listings, Figures)",
      "Statistical Analysis Plan (SAP) implementation",
      "Quality control and double programming",
      "Regulatory-compliant reporting",
    ],
    turnaround: "10–20 business days",
    cardBgColor: "#d8c3df",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Premium",
    subtitle: "End-To-End Biostatistical Support",
    idealFor: "Comprehensive package for regulatory submission readiness.",
    includes: [
      "Complete data management & programming lifecycle",
      "SDTM, ADaM, Define.xml generation",
      "Advanced statistical modelling and analysis",
      "Submission-ready outputs for FDA, EMA, PMDA",
      "Continuous support until regulatory feedback is addressed",
    ],
    turnaround: "Based on project scope",
    cardBgColor: "#e2c7a0",
    titleColor: "#805826",
  },
  {
    icon: `${IMG}c-box-icons.png`,
    title: "Custom",
    subtitle: "Tailored Solutions",
    idealFor:
      "Designed for specialized projects or multi-country clinical trials.",
    includes: [
      "Customized programming scripts and algorithms",
      "Integration with the sponsor's existing workflows",
      "Therapeutic area-specific statistical methods",
      "On-demand reporting and visualization",
    ],
    turnaround: "Based on project scope",
    cardBgColor: "#fcd2d1",
    titleColor: "#9a4300",
  },
];

export default function BiostatisticsComplianceAndPackages() {
  // Manage state for open/close state of compliance cards (all false by default)
  const [openCards, setOpenCards] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    complianceItems.forEach((item) => {
      initialState[item.id] = false;
    });
    return initialState;
  });

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ========================================================= */}
      {/* 1. COMPLIANCE AND GUIDELINE STANDARDS                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            At Pubrica, we follow internationally recognized standards and
            regulatory guidelines to ensure our biostatistical programming
            services are accurate, transparent, and fully compliant for global
            submissions.
          </p>
        </div>

        {/* Collapsible Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceItems.map((item) => {
            const isOpen = !!openCards[item.id];

            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-sm bg-white overflow-hidden shadow-2xs flex flex-col justify-start"
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.id)}
                  className="w-full bg-[#edf8f5] hover:bg-[#e2f3ee] p-4 flex items-center justify-between transition-colors text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 p-1.5 bg-white rounded border border-emerald-200 shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[#0e3b38] leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[#0e3b38] ml-2 font-bold">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Expandable Content Area */}
                {isOpen && (
                  <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-2">
                    <ul className="space-y-2">
                      {item.content.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-800 font-bold">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-8">
          By integrating these compliance and guideline standards, we ensure
          that our clinical trial statistical programming, pharmaceutical{" "}
          <Link
            href="/services/research-services/biostatistics-and-statistical-programming-service"
            className="text-sky-600 hover:underline font-medium"
          >
            biostatistics
          </Link>{" "}
          services, and regulatory submission programming services meet the
          highest level of quality and integrity, enabling faster and smoother
          regulatory approvals.
        </p>
      </section>

      {/* ========================================================= */}
      {/* 2. SAMPLE WORK BANNER                                     */}
      {/* ========================================================= */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: `${IMG}Biostatistics-and-Statistical-Programming-Services-Sample-Work.png`,
          alt: "Biostatistics sample work document review",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading:
              "Biostatistics and Statistical Programming Services Sample Work",
            headingTag: "h3",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/assessing-evidence-based-practice-in-physical-therapy/",
            },
          },
          {
            heading: "Download the full Report Now",
            headingTag: "h3",
            descriptionSegments: [
              {
                text: "Explore our biostatistical programming sample work, meticulously developed to comply with regulatory standards (e.g., FDA, EMA, PMDA), CDISC guidelines (SDTM, ADaM), and clinical trial timelines, ensuring accurate, submission-ready outputs for academic, clinical, and pharmaceutical research.",
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
      {/* ========================================================= */}
      {/* 3. BIOSTATISTICAL PROGRAMMING SERVICE - OUR PACKAGES       */}
      {/* ========================================================= */}
      <section className=" sm:px-8 w-full bg-white">
        <div className="max-w-5xl mx-auto flex flex-col ">
          <CommonPackages
            title="Biostatistical Programming Service – Our Packages"
            description="At Pubrica, we offer flexible and scalable biostatistical programming packages designed to meet the diverse needs of pharmaceutical companies, CROs, academic researchers, and life science organizations. Our packages are tailored to support projects at every stage of the clinical research lifecycle, from study design to regulatory submission."
            packages={packages}
          />
          <div className="mt-0">
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>
    </div>
  );
}
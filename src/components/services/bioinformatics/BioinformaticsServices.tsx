"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

// 1. Compliance Standards Data
interface StandardItem {
  title: string;
  description: string;
}

const complianceStandardsData: StandardItem[] = [
  {
    title: "FAIR Data Principles (Findable, Accessible, Interoperable, Reusable)",
    description: "Applied to all biological dataset handling and bioinformatics workflows for maximum transparency and reproducibility.",
  },
  {
    title: "MIAME & MINSEQE Guidelines",
    description: "For microarray and next-generation sequencing (NGS) data reporting, ensure compliance with community-driven standards for experimental reproducibility.",
  },
  {
    title: "GATK Best Practices",
    description: "Applied for genomic variant discovery and analysis, ensuring high accuracy and reliability in SNP/indel calling.",
  },
  {
    title: "ICMJE & COPE Guidelines",
    description: "Following the International Committee of Medical Journal Editors (ICMJE) and Committee on Publication Ethics (COPE) principles for authorship, research integrity, and ethical publication practices.",
  },
  {
    title: "HIPAA & GDPR Standards",
    description: "Compliance with data privacy and security frameworks for handling clinical and patient-related data in healthcare bioinformatics projects.",
  },
  {
    title: "GCP & GLP Compliance",
    description: "We follow Good Clinical Practice (GCP) and Good Laboratory Practice (GLP) standards, ensuring that our clinical and laboratory bioinformatics analyses meet the highest quality, safety, and regulatory benchmarks.",
  },
  {
    title: "Regulatory Compliance (FDA, EMA, NIH, CRO Standards)",
    description: "Supporting drug discovery, clinical trials, and translational research in alignment with FDA, EMA, NIH, and CRO regulatory requirements.",
  },
];

// 2. Packages Data
interface PackageCard {
  badge: string;
  badgeBg: string;
  title: string;
  cardBg: string;
  borderColor: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaroundTime: string;
}

const packagesData: PackageItem[] = [
  {
    icon: "/images/icons/Basic.webp",
    title: "Basic",
    subtitle: "Preliminary Data Exploration & Simple Analyses",
    idealFor:
      "Researchers requiring preliminary data exploration and simple analyses.",
    includes: [
      "Data quality check and preprocessing",
      "Basic genomic/proteomic/transcriptomic analysis",
      "Summary reports with data visualization",
    ],
    addOns: [
      "Extended statistical validation",
      "Reference genome alignment",
      "Customized figure preparation for publications",
    ],
    turnaround: "2-3 weeks",
    cardBgColor: "#ecf8f3",
    titleColor: "#065f46",
  },
  {
    icon: "/images/icons/advanced-a.webp",
    title: "Advanced",
    subtitle: "In-Depth & Integrative Analysis",
    idealFor:
      "Academics and industry professionals seeking in-depth insights with integrative analysis.",
    includes: [
      "Comprehensive multi-omics integration",
      "Differential expression and pathway analysis",
      "Structural bioinformatics & molecular modeling",
      "Detailed technical report with publication-ready figures",
    ],
    addOns: [
      "Machine learning-based predictive modeling",
      "Clinical data integration",
      "Journal-specific formatting support",
    ],
    turnaround: "4-6 weeks",
    cardBgColor: "#faf5ff",
    titleColor: "#581c87",
  },
  {
    icon: "/images/icons/premium-p.png",
    title: "Premium",
    subtitle: "High-Impact & Translational Research",
    idealFor:
      "Researchers targeting high-impact publications, grant submissions, or translational research.",
    includes: [
      "End-to-end bioinformatics pipeline development",
      "Multi-layered omics integration (genomics, transcriptomics, proteomics, metabolomics, epigenomics)",
      "AI/ML-driven biomarker discovery",
      "Comprehensive manuscript support with supplementary materials",
    ],
    addOns: [
      "Regulatory & compliance check (FDA, EMA standards)",
      "Clinical trial dataset analysis",
      "Customized dashboards for interactive data exploration",
    ],
    turnaround: "8-10 weeks",
    cardBgColor: "#fffbeb",
    titleColor: "#92400e",
  },
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function BioinformaticsServices() {
  // State: All cards are CLOSED by default (null)
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 py-6 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ------------------------------------------------------------------
           1. HERO TOP BANNER (Banner text present, Get a Quote button removed)
           ------------------------------------------------------------------ */}

        {/* ------------------------------------------------------------------
           5. COMPLIANCE AND GUIDELINE STANDARDS
           ------------------------------------------------------------------ */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Pubrica, we ensure that all bioinformatics analyses and deliverables strictly adhere to globally recognized scientific, ethical, and data management standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {complianceStandardsData.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-5 text-center shadow-sm flex flex-col justify-start"
              >
                <h4 className="font-bold text-[#0b2b26] text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {complianceStandardsData.slice(4).map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-5 text-center shadow-sm flex flex-col justify-start"
              >
                <h4 className="font-bold text-[#0b2b26] text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------
           6. SAMPLE WORKS & REPORT DOWNLOAD
           ------------------------------------------------------------------ */}
        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/services/bio/Transforming-Biological-Data-into-Scientific-Discovery-Sample-Work.png",
            alt: "Bioinformatics Researcher with Microscope",
            width: 640,
            height: 640,
          }}
          sections={[
            {
              heading: "Bioinformatics Sample Works",
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our bioinformatics sample work, carefully designed to meet journal-specific guidelines, computational precision (e.g., Transcriptomics, proteomics), and research timelines, ensuring impactful academic or clinical publication.",
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

        {/* ------------------------------------------------------------------
           7. OUR PACKAGES
           ------------------------------------------------------------------ */}
        {/* SINGLE COMBINED SECTION WITH MINIMAL SPACING */}
        <section className="w-full bg-[#f8fafc] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

            {/* Packages Component */}
            <CommonPackages
              title="Bioinformatics Service – Our Packages"
              description="We provide end-to-end bioinformatics solutions tailored to your research needs. Our packages are designed to ensure accuracy, compliance, and faster turnaround, helping you achieve publication-ready results."
              packages={packagesData}
            />

            {/* CTA Button placed immediately below with tight top margin */}
            <div className="mt-2 text-center">
              <GetFreeQuoteButton />
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}
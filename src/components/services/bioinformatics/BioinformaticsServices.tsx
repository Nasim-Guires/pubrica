"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const packagesData: PackageCard[] = [
  {
    badge: "B",
    badgeBg: "bg-amber-100 text-amber-800",
    title: "Basic",
    cardBg: "bg-emerald-50/40",
    borderColor: "border-emerald-200",
    idealFor: "Researchers requiring preliminary data exploration and simple analyses.",
    includes: [
      "Data quality check and preprocessing",
      "Basic genomic/proteomic/transcriptomic analysis",
      "Summary reports with data visualization",
    ],
    optionalAddOns: [
      "Extended statistical validation",
      "Reference genome alignment",
      "Customized figure preparation for publications",
    ],
    turnaroundTime: "2-3 weeks",
  },
  {
    badge: "A",
    badgeBg: "bg-teal-100 text-teal-800",
    title: "Advanced",
    cardBg: "bg-purple-50/40",
    borderColor: "border-purple-200",
    idealFor: "Academics and industry professionals seeking in-depth insights with integrative analysis.",
    includes: [
      "Comprehensive multi-omics integration",
      "Differential expression and pathway analysis",
      "Structural bioinformatics & molecular modeling",
      "Detailed technical report with publication-ready figures",
    ],
    optionalAddOns: [
      "Machine learning-based predictive modeling",
      "Clinical data integration",
      "Journal-specific formatting support",
    ],
    turnaroundTime: "4-6 weeks",
  },
  {
    badge: "P",
    badgeBg: "bg-orange-100 text-orange-800",
    title: "Premium",
    cardBg: "bg-amber-50/40",
    borderColor: "border-amber-200",
    idealFor: "Researchers targeting high-impact publications, grant submissions, or translational research.",
    includes: [
      "End-to-end bioinformatics pipeline development",
      "Multi-layered omics integration (genomics, transcriptomics, proteomics, metabolomics, epigenomics)",
      "AI/ML-driven biomarker discovery",
      "Comprehensive manuscript support with supplementary materials",
    ],
    optionalAddOns: [
      "Regulatory & compliance check (FDA, EMA standards)",
      "Clinical trial dataset analysis",
      "Customized dashboards for interactive data exploration",
    ],
    turnaroundTime: "8-10 weeks",
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
        <div className="bg-emerald-50/50 rounded-lg p-6 sm:p-8 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-md overflow-hidden border border-slate-200 shadow-sm bg-white">
              <Image
                src="/images/services/bio/Transforming-Biological-Data-into-Scientific-Discovery-Sample-Work.png"
                alt="Bioinformatics Researcher with Microscope"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#0b2b26]">
                Bioinformatics Sample Works
              </h3>
              <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-slate-800 text-white font-medium px-6 py-2 rounded-full text-xs sm:text-sm shadow transition-colors">
                Discover More
              </Link>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-bold text-[#0b2b26]">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore our bioinformatics sample work, carefully designed to meet journal-specific guidelines, computational precision (e.g., Transcriptomics, proteomics), and research timelines, ensuring impactful academic or clinical publication.
              </p>
              <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-slate-800 text-white font-medium px-6 py-2 rounded-full text-xs sm:text-sm shadow transition-colors">
                Discover More
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------
           7. OUR PACKAGES
           ------------------------------------------------------------------ */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26]">
              Bioinformatics Service – Our Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide end-to-end bioinformatics solutions tailored to your research needs. Our packages are designed to ensure accuracy, compliance, and faster turnaround, helping you achieve publication-ready results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {packagesData.map((pkg, idx) => (
              <div
                key={idx}
                className={`${pkg.cardBg} border ${pkg.borderColor} rounded-lg p-6 flex flex-col justify-between shadow-sm relative`}
              >
                <div className="space-y-5">
                  {/* Package Title Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-200/60">
                    <span className={`w-9 h-9 rounded-full ${pkg.badgeBg} font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {pkg.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#0b2b26]">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs sm:text-sm text-slate-700">
                    <p className="font-semibold text-[#0b2b26] mb-1">➔ Ideal For:</p>
                    <p className="text-slate-600 leading-relaxed">{pkg.idealFor}</p>
                  </div>

                  {/* Includes */}
                  <div className="text-xs sm:text-sm text-slate-700">
                    <p className="font-semibold text-[#0b2b26] mb-1">➔ Includes:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      {pkg.includes.map((inc, i) => (
                        <li key={i}>{inc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-Ons */}
                  <div className="text-xs sm:text-sm text-slate-700">
                    <p className="font-semibold text-[#0b2b26] mb-1">➔ Optional Add-Ons:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      {pkg.optionalAddOns.map((addon, i) => (
                        <li key={i}>{addon}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Turnaround Time Footer */}
                <div className="pt-6 mt-4 border-t border-slate-200/60 text-xs sm:text-sm font-semibold text-[#0b2b26]">
                  ➔ Turnaround Time: <span className="font-normal text-slate-700">{pkg.turnaroundTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
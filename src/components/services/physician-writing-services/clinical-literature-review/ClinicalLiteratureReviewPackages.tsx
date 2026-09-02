"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

interface PackageTier {
  id: string;
  icon: string;
  cardBgColor: string;
  titleColor: string;
  title: string;
  subtitle: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
}

const packagesData: PackageItem[] = [
  {
    icon: "/images/icons/S.png",
    title: "Starter",
    subtitle: "Ideal For First-Time Authors",
    idealFor:
      "Medical students, early-career clinicians, and researchers at the preliminary stage of literature review.",
    includes: [
      "Clinical question framing (PICO)",
      "2-database search (e.g., PubMed, Cochrane)",
      "Title & abstract screening",
      "Narrative synthesis (up to 20 studies)",
      "Reference list (APA/AMA/Harvard)",
    ],
    addOns: [
      "Protocol registration (e.g., PROSPERO)",
      "PowerPoint summary deck",
      "Journal selection support",
    ],
    turnaround: "7 to 10 working days",
    cardBgColor: "#cbd8d6",
    titleColor: "#004b5a",
  },
  {
    icon: "/images/icons/Basic.webp",
    title: "Advanced",
    subtitle: "For Mid-Tier Or Indexed Journals",
    idealFor:
      "Practicing physicians, postgraduate students, and PhD candidates conducting in-depth clinical reviews.",
    includes: [
      "Full protocol document",
      "Search across 4–5 databases",
      "Dual-reviewer screening",
      "Full-text analysis",
      "Risk of bias assessment",
      "Thematic synthesis or structured tabulation",
      "PRISMA 2020 flowchart",
    ],
    addOns: [
      "Statistical meta-analysis",
      "Infographic summary",
      "Journal formatting (targeted)",
    ],
    turnaround: "12 to 15 working days",
    cardBgColor: "#d8c4e2",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/icons/pa-icons-.png",
    title: "Elite",
    subtitle: "Comprehensive & Premium",
    idealFor:
      "Hospital research teams, academic institutions, evidence-based guideline developers, and systematic review authors.",
    includes: [
      "Extensive review of 40+ articles across more than five databases, including Cochrane, Web of Science, Embase, and PubMed",
      "Custom protocol design adhering to PRISMA 2020 guidelines",
      "Full search strategy appendix",
      "Risk of bias assessment using tools such as RoB-2 or GRADE",
      "Tabular and narrative synthesis of findings",
      "High-level technical editing and end-to-end support for journal submission",
    ],
    addOns: [
      "Full manuscript submission service",
      "Conference abstract & poster design",
      "CER integration for medical devices",
    ],
    turnaround: "15 to 20 working days",
    cardBgColor: "#d5bc8d",
    titleColor: "#805826",
  },
];

export default function ClinicalLiteratureReviewPackages() {
  const getGridColsClass = (count: number) => {
    if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <>
      <section className="w-full py-12 md:py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <CommonPackages
            title="Clinical Literature Review for Evidence-Based Medicine – Packages"
            description={
              <>
                Pubrica works with flexible, tiered plans to collect and report on a
                wide range of evidence synthesis needs across academic, clinical, and
                industry purposes. Each package meets international methodological
                standards (PRISMA, JBI, Cochrane) while reflecting the project's scope,
                depth, and urgency.
              </>
            }
            packages={packagesData}
          />

          {/* Tight-fit container bringing the button close to the table */}
          <div className="-mt-4 sm:-mt-6 flex justify-center w-full z-10">
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>
    </>
  );
}
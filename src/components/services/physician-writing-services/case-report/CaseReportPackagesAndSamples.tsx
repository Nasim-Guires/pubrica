"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

// ==========================================
// HELPER FUNCTIONS
// ==========================================
const getGridColsClass = (count: number) => {
  if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1";
};

// ==========================================
// DATA: PACKAGES (Exact colors from image 2)
// ==========================================
const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Starter",
    subtitle: "Ideal For First-Time Authors",
    idealFor:
      "Interns, junior residents, and first-time writers aiming for local or institutional journals.",
    includes: [
      "Case report structure planning (as per CARE checklist)",
      "Basic literature support (5–7 references)",
      "Writing assistance (up to 1,000 words)",
      "Grammar check & language polishing",
      "Referencing in APA or Vancouver style",
      "1 round of revision",
    ],
    addOns: [
      "Plagiarism check report",
      "Consent form drafting",
      "Figure/table formatting",
      "Journal selection (3 options)",
    ],
    turnaround: "5–7 business days",
    cardBgColor: "#bcd1cf",
    titleColor: "#1d4e4e",
  },
  {
    icon: "/images/publication-support/journal-selection/advanced.webp",
    title: "Advanced",
    subtitle: "For Mid-Tier Or Indexed Journals",
    idealFor:
      "Clinicians, faculty, or consultants submitting to Scopus- or PubMed-indexed journals with moderate editorial requirements.",
    includes: [
      "Complete case report writing (up to 2,000 words)",
      "In-depth literature review (10–15 references)",
      "Discussion section with scientific insights & data correlation",
      "Figure/image placement (client-provided)",
      "Journal-specific formatting (APA, AMA, Vancouver)",
      "2 revision rounds",
    ],
    addOns: [
      "Peer review by subject-matter expert (1 round)",
      "Journal submission support",
      "Response-to-reviewer preparation",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#d5bfe3",
    titleColor: "#582a73",
  },
  {
    icon: "/images/physician-writing-services/ELITE-LOGO.png",
    title: "Elite",
    subtitle: "Comprehensive & Premium",
    idealFor:
      "Consultants, surgeons, or hospital units aiming to publish in high-impact journals (e.g., BMJ Case Reports, NEJM Case Reports) or requiring publication support end-to-end.",
    includes: [
      "Full case report development with CARE compliance",
      "Professional image editing, figure legends & placement",
      "Literature integration (15–20 references, high-impact sources)",
      "Plagiarism check via Turnitin",
      "Advanced reference management (EndNote, Mendeley, Zotero)",
      "Journal shortlisting & submission strategy",
      "Custom cover letter for journal editors",
      "Reviewer comment response drafting (if needed)",
      "Unlimited revisions within 30 days",
    ],
    addOns: [
      "End-to-end journal submission & correspondence",
      "Fast-track delivery (3–5 days)",
      "Slide deck creation for conference presentation",
    ],
    turnaround: "10–12 business days",
    cardBgColor: "#dcb98a",
    titleColor: "#664013",
  },
];

export default function CaseReportPackagesAndSamples() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ==========================================
            1. SAMPLE WORK CALLOUT BANNER
           ========================================== */}
        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/physician-writing-services/case-report/Case-Report-Writing-Sample-Work.webp",
            alt: "Case Report Writing Service Sample Work",
            width: 600,
            height: 500,
          }}
          sections={[
            {
              heading: "Case Report Writing Service Sample Work",
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our ",
                },
                {
                  text: "case report writing samples",
                  url: "/insights/neurosyphilis-anti-nmdar-antibody-case-report/",
                },
                {
                  text: ", meticulously crafted to align with ",
                },
                {
                  text: "journal submission",
                  url: "/services/publication-support/journal-submission/",
                },
                {
                  text: " criteria, clinical accuracy standards, and expedited publication timelines.",
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

        {/* ==========================================
            2. PACKAGES SECTION
           ========================================== */}
        <section className="bg-white py-6 my-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommonPackages
              title="Case Report Writing Packages"
              description="Explore our case report manuscript writing samples aligned with journal requirements and clinical accuracy. Our three-tiered packages cater to first-time submitters, experienced clinicians, and high-impact journal targets. All reports follow CARE guidelines and are tailored to your chosen journal."
              packages={packages}
            />
            <div className="-mt-4 flex justify-center">
              <GetFreeQuoteButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
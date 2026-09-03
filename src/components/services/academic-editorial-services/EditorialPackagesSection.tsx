"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

// ==========================================
// TYPES & DATA
// ==========================================

interface PackageTier {
  id: string;
  badgeSrc: string;
  badgeBg: string;
  headerTextColor: string;
  cardBg: string;
  title: string;
  subtitle?: string;
  idealFor: string;
  services: string[];
  turnaroundTime: string;
}

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic Editorial",
    idealFor:
      "Students, early-career researchers, or authors seeking basic language polishing for essays, theses, or manuscripts.",
    includes: [
      "Grammar and spelling corrections",
      "Sentence structure improvement",
      "Consistency checks (terminology, formatting)",
    ],
    turnaround: "3–5 business days",
    cardBgColor: "#cad5d8",
    titleColor: "#1e3a8a",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard Editorial",
    idealFor:
      "Researchers and academics preparing journal manuscripts, conference papers, or book chapters.",
    includes: [
      "All Basic Package services",
      "Clarity and readability enhancement",
      "Academic style and tone adjustment",
      "Reference and citation format check",
    ],
    turnaround: "5–7 business days",
    cardBgColor: "#d8c3e5",
    titleColor: "#6b21a8",
  },
  {
    icon: "/images/publication-support/peer-review-pre-submission/advanced.webp",
    title: "Advanced Editorial",
    idealFor:
      "Authors submitting to high-impact journals, publishers, or preparing complex academic content.",
    includes: [
      "All Standard Package services",
      "Structural and content review",
      "Subject-specific terminology refinement",
      "Consistency across figures, tables, and captions",
      "Manuscript formatting per target journal/publisher guidelines",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#ddc89e",
    titleColor: "#854d0e",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "Comprehensive",
    idealFor:
      "Comprehensive editorial support for books, theses, or multi-author publications requiring detailed review.",
    includes: [
      "All Advanced Package services",
      "In-depth developmental editing",
      "Localization and adaptation for international audiences",
      "Metadata, permissions, and reference cross-check",
      "Accessibility and visual editing (tables, charts, graphs)",
    ],
    turnaround: "10–14 business days",
    cardBgColor: "#fbcfe8",
    titleColor: "#be123c",
  },
];
// ==========================================
// MAIN COMPONENT
// ==========================================

export default function EditorialPackagesSection() {
  return (
    <section className="w-full bg-white text-slate-800 font-sans py-2 px-1 sm:px-6 lg:px-1">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}

        {/* Pricing Cards Container */}
        <div className="relative pb-1">
          <CommonPackages
            title="Academic Editorial Services – Our Packages"
            description="At Pubrica, we offer comprehensive academic editorial packages designed to meet the diverse needs of researchers, authors, and academic institutions. Each package is crafted to ensure clarity, accuracy, and publication readiness while maintaining the highest academic standards."
            packages={packages}
          />

          {/* Bottom Call To Action Button */}
          <div className="flex justify-center pt-8">
            <GetFreeQuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
}

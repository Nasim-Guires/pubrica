"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

interface PlanCard {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  bgColor: string;
  idealFor: string;
  includes: string[];
  turnaround: string;
}

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    idealFor: "Short manuscripts, abstracts, or conference papers",
    includes: [
      "Accurate translation of up to 2,000 words",
      "Basic editing for grammar, punctuation, and clarity",
      "Maintains original meaning and context",
    ],
    turnaround: "3–5 business days",
    cardBgColor: "#C3D2CE",
    titleColor: "#003B46",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Pro",
    idealFor: "Full-length research papers, theses, and journal articles",
    includes: [
      "Translation of up to 5,000 words",
      "Advanced editing for clarity, academic style, and consistency",
      "Terminology review to match discipline-specific standards",
      "Formatting to meet journal or thesis submission guidelines",
    ],
    turnaround: "5–10 business days",
    cardBgColor: "#D6BDD8",
    titleColor: "#6B2D82",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/T-icons.png",
    title: "Traditional",
    idealFor: "Large documents, multi-author collaborations, or books",
    includes: [
      "Translation of over 5,000 + words (customizable)",
      "Comprehensive editing, including style, tone, and readability",
      "Subject-matter expert review",
      "Final formatting and submission-ready document",
      "Optional consultation with editor/translator for queries",
    ],
    turnaround: "Depends on document size (custom timeline)",
    cardBgColor: "#CFB487",
    titleColor: "#805826",
  },
];

export default function TranslationPlansSection() {
  return (
    <CommonPackages
      title="Choose the Translation with Editing Plan You Need"
      description="Choose the Pubrica Translation with Editing plan that fits your research needs, whether it's a short manuscript, a full-length paper, or a comprehensive academic project. We ensure accurate translation, clear editing, and submission-ready quality."
      packages={packages}
    />
  );
}

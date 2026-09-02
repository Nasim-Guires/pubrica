import React from "react";
import Image from "next/image";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

const packagesData: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Essential HEOR Research Support",
    idealFor:
      "Early-stage researchers, academic submissions, and pilot projects.",
    includes: [
      "Literature review & evidence synthesis",
      "Basic cost analysis (cost-minimization, cost-description)",
      "Summary tables & graphs",
      "Draft manuscript/report preparation",
    ],
    addOns: [
      "Journal selection support",
      "Editing & proofreading",
    ],
    turnaround: "2–3 weeks",
    cardBgColor: "#cbd8d6",
    titleColor: "#134e4a",
  },
  {
    icon:
      "/images/publication-support/responding-to-reviewers/standard-logo.png",
    title: "Standard",
    subtitle: "Comprehensive HEOR Analysis",
    idealFor:
      "Research teams, healthcare providers, and industry professionals needing publication-ready outcomes.",
    includes: [
      "Full economic evaluation (CEA, CUA, CBA)",
      "Real-world data integration",
      "Patient-reported outcome (PRO) assessments",
      "Compliance with international HEOR guidelines (ISPOR, NICE, FDA/EMA)",
      "Detailed results interpretation & visualization",
    ],
    addOns: [
      "Statistical modeling support",
      "Budget impact analysis",
      "Peer review response assistance",
      "Journal submission management",
    ],
    turnaround: "3–5 weeks",
    cardBgColor: "#d8c8e3",
    titleColor: "#581c87",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "Strategic HEOR & Market Access Support",
    idealFor:
      "Pharma, biotech, and med-tech companies requiring strategic HEOR support for reimbursement and market access.",
    includes: [
      "Advanced modeling (Markov, decision-tree, survival analysis)",
      "Budget impact analysis & cost-effectiveness modeling",
      "Real-world evidence (RWE) generation",
      "Value dossiers & HTA submission support",
      "Publication-ready deliverables with regulatory alignment",
    ],
    addOns: [
      "Advisory board presentation materials",
    ],
    turnaround: "5–8 weeks",
    cardBgColor: "#d8c399",
    titleColor: "#78350f",
  },
];

export default function HealthEconomicsPackages() {
  return (
    <CommonPackages
      title="Health Economics & Outcome Research – Our Packages"
      description="At Pubrica, we offer tailored Health Economics & Outcome Research packages designed to meet the needs of researchers, pharmaceutical companies, healthcare providers, and policymakers. Our evidence-based solutions help demonstrate product value, inform decision-making, and improve patient outcomes."
      packages={packagesData}
    />
  );
}
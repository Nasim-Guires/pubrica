"use client";

import React from "react";
import Image from "next/image";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

export default function PatientJourneyPackagesSection() {
  const packagesData: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      subtitle: "Foundational Patient Journey Insights",
      idealFor:
        "Small research teams, startups, and early-stage clinical studies seeking foundational insights into patient journeys.",
      includes: [
        "Basic data extraction from EMR/EHR, surveys, and published sources",
        "Patient demographics & treatment patterns analysis",
        "Standard visualization dashboards",
        "Summary report of key patient journey insights",
      ],
      addOns: [
        "Custom data cleaning",
        "Advanced visualization modules",
        "Regulatory compliance alignment (FDA/EMA guidelines)",
      ],
      turnaround: "3–4 weeks",
      cardBgColor: "#D8E3E0",
      titleColor: "#004b5a",
    },
    {
      icon:
        "/images/publication-support/peer-review-pre-submission/advanced.webp",
      title: "Advanced",
      subtitle: "Predictive Patient Journey & Strategic Analysis",
      idealFor:
        "Mid-sized pharma, biotech, and healthcare providers needing deeper insights and predictive analysis.",
      includes: [
        "Comprehensive multi-source data integration (EHR, wearables, claims data, social media, etc.)",
        "Predictive modelling of treatment outcomes",
        "Sentiment & intent analysis from patient-reported data",
        "Detailed journey mapping with touchpoints and drop-off analysis",
        "Customized strategic insights report",
      ],
      addOns: [
        "Integration with digital health platforms",
        "Benchmarking against therapeutic area datasets",
        "Tailored stakeholder presentations",
      ],
      turnaround: "5–7 weeks",
      cardBgColor: "#E3D1E8",
      titleColor: "#6b2d82",
    },
    {
      icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
      title: "Premium",
      subtitle: "Advanced AI/ML & End-to-End Patient Insights",
      idealFor:
        "Large pharmaceutical companies, CROs, and global healthcare organizations requiring end-to-end patient journey insights with advanced ML capabilities.",
      includes: [
        "End-to-end patient journey mapping across multiple geographies and therapeutic areas",
        "Advanced machine learning & AI models (NLP, image recognition, deep learning)",
        "Real-time dashboards with interactive analytics",
        "Comparative analysis across competitors and treatment regimens",
        "Comprehensive reporting with strategic recommendations",
      ],
      addOns: [
        "Custom API integration with internal systems",
        "Ongoing monitoring & periodic updates (monthly/quarterly)",
        "Dedicated subject-matter expert consultations",
      ],
      turnaround: "8–10 weeks",
      cardBgColor: "#E6D4B2",
      titleColor: "#805826",
    },
  ];

  return (
    <CommonPackages
      title="Patient Journey & Insights – Machine Learning Packages"
      description="At Pubrica, we provide tailored packages to meet the diverse needs of healthcare organizations, researchers, and life science companies. Each package combines data-driven insights with regulatory-compliant machine learning solutions to optimize patient outcomes, treatment strategies, and market intelligence."
      packages={packagesData}
    />
  );
}
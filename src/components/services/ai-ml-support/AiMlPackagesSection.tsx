"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";
import Image from "next/image";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

const packagesData: PackageItem[] = [
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Starter",
    subtitle: "Essential AI & ML Support",
    idealFor:
      "Early-stage researchers, small datasets, academic assignments, proof-of-concept projects",
    includes: [
      "Data preprocessing & cleaning",
      "Exploratory Data Analysis (EDA)",
      "Basic ML model development (classification/regression)",
      "Model validation & performance summary",
      "Concise reporting with insights",
    ],
    addOns: [
      "Visualization dashboards",
      "Extended statistical analysis",
      "Literature support for AI methodology",
    ],
    turnaround: "2–3 weeks",
    cardBgColor: "#c5d5d5",
    titleColor: "#004b5a",
  },
  {
    icon:
      "/images/publication-support/peer-review-pre-submission/advanced.webp",
    title: "Advanced",
    subtitle: "Advanced AI & ML Analysis",
    idealFor:
      "Mid-scale projects, PhD research, applied studies, journal-ready outputs",
    includes: [
      "Advanced dataset preparation & feature engineering",
      "ML algorithms (classification, clustering, regression, ensemble methods)",
      "Hyperparameter tuning for higher accuracy",
      "Intermediate-level AI model comparisons",
      "Detailed result interpretation aligned with academic standards",
    ],
    addOns: [
      "Manuscript-ready figures & tables",
      "Code documentation for reproducibility",
      "Extended statistical & sensitivity analysis",
    ],
    turnaround: "3–5 weeks",
    cardBgColor: "#d2c1d8",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "Advanced AI/ML & Predictive Solutions",
    idealFor:
      "High-impact academic publications, industry research, enterprise AI models",
    includes: [
      "End-to-end AI/ML pipeline development",
      "Deep learning & neural network implementation",
      "Predictive & prescriptive analytics",
      "Model deployment strategies",
      "Comprehensive visualizations & publication-ready documentation",
    ],
    addOns: [
      "Continuous model monitoring & updates",
      "Integration with real-time APIs",
      "Domain-specific simulations (e.g., healthcare, pharma, genomics)",
    ],
    turnaround: "6–8 weeks",
    cardBgColor: "#d8c399",
    titleColor: "#805826",
  },
  {
    icon: "/images/editing-and-translation/book-editing/E-pa-icons-1.png",
    title: "Enterprise & Custom",
    subtitle: "Tailored & Scalable AI/ML Solutions",
    idealFor:
      "Organizations, large-scale research labs, and cross-domain AI solutions",
    includes: [
      "Tailored AI/ML workflows for your domain",
      "Scalable big data solutions",
      "Multimodal data integration (text, image, genomic, etc.)",
      "Dedicated support team & ongoing consultation",
      "Compliance with ethical AI & regulatory standards",
    ],
    addOns: [
      "Long-term collaboration & training workshops",
      "Cloud-based deployment & automation",
      "Customized dashboards for business intelligence",
    ],
    turnaround: "Flexible",
    cardBgColor: "#f8c8c8",
    titleColor: "#be123c",
  },
];

// Reusable Right Arrow Icon
function ArrowIcon() {
  return (
    <div className="shrink-0 w-4 h-4 mt-0.5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">
      →
    </div>
  );
}

export default function AiMlPackagesSection() {
  return (
    <>
      <CommonPackages
        title="AI and ML Service – Our Packages"
        description="At Pubrica, we provide tailored AI and ML solutions designed to accelerate innovation, enhance decision-making, and deliver measurable outcomes for researchers, healthcare, academia, and industry leaders. Our packages are flexible, ensuring you get the right level of support based on your project scope, complexity, and timelines."
        packages={packagesData}
      />
      <GetFreeQuoteButton/>
    </>
  );
}

import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

const packagesData: PackageItem[] = [
  {
    icon: "/images/icons/Basic.webp",
    title: "Machine Learning Model Development",
    subtitle: "Custom ML Models & Publication-Ready Analysis",
    idealFor:
      "Research or business projects requiring custom machine learning models and structured data analysis.",
    includes: [
      "Cleaned and structured datasets ready for modeling.",
      "Custom-built ML models (classification, prediction, clustering).",
      "A Machine Learning Analysis Report with results and insights.",
      "Publication-ready graphs, charts, and figures.",
      "Methods/results sections written based on observations.",
    ],
    addOns: [
      "Objective of the research/business study.",
      "Short description of the dataset and data collection method.",
      "Raw data.",
      "Specific requirements, references, or use cases (if any).",
    ],
    turnaround: "15 – 30 days",
    cardBgColor: "#e0eceb",
    titleColor: "#0c313a",
  },
  {
    icon: "/images/icons/advanced-a.webp",
    title: "Machine Learning Insights & Recommendations",
    subtitle: "Actionable Insights from AI/ML Analysis",
    idealFor:
      "Research and business teams looking for clear insights, predictive reports, and actionable recommendations from AI/ML analysis.",
    includes: [
      "Key findings and actionable insights from AI/ML analysis.",
      "Predictive reports with charts, graphs, and tables.",
      "Summary of ML model performance and recommendations.",
    ],
    addOns: [
      "Research/business objective and hypothesis.",
      "Clean and labelled data.",
      "Sample distribution or metadata (if available).",
    ],
    turnaround: "8 – 15 days",
    cardBgColor: "#efe5f4",
    titleColor: "#581c87",
  },
  {
    icon: "/images/icons/premium-p.png",
    title: "Advanced ML Methods & Techniques",
    subtitle: "Advanced Analysis, Visualization & Technical Support",
    idealFor:
      "Research and business projects requiring advanced ML techniques, customized visualizations, and detailed technical outputs.",
    includes: [
      "In-depth ML findings & results.",
      "Modified/custom visualizations and dashboards.",
      "Detailed ML output files (Python/R/TensorFlow logs).",
      "Methods/results sections tailored for research or publication.",
    ],
    addOns: [
      "Research/business objectives.",
      "The dataset or pre-processed data files.",
      "Preferred ML technique/tool (e.g., regression, NLP, deep learning).",
      "Any references or benchmarks.",
    ],
    turnaround: "7–14 days",
    cardBgColor: "#e9dcc0",
    titleColor: "#78350f",
  },
];

export const ServiceMatrix: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <CommonPackages
        title="Struggling with Data Analytics and Machine Learning for Your Research or Business? Let Us Help You"
        description="Overcome data challenges with our expert Data Analytics and Machine Learning services, tailored to transform raw datasets into clear, actionable, and publication-ready insights."
        packages={packagesData}
      />
      <div className="-mt-6 mb-10 flex justify-center">
        <GetFreeQuoteButton />
      </div>
    </div>
  );
};
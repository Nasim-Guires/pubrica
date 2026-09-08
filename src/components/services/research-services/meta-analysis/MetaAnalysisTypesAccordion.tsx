"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function MetaAnalysisTypesAccordion() {
  // All cards closed by default for both mobile and desktop
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const accordionData: AccordionItem[] = [
    {
      id: "classical",
      title: "Classical (Frequentist) Meta-Analysis",
      content:
        "Combines effect sizes across studies using fixed-effect or random-effects models, ideal for summarizing clinical trials and intervention effects.",
    },
    {
      id: "bayesian",
      title: "Bayesian Meta-Analysis",
      content: (
        <span>
          Uses{" "}
          <Link
            href="/services/research-services/meta-analysis/introduction-to-bayesian-statistics"
            className="text-blue-600"
          >
            Bayesian statistical
          </Link>{" "}
          methods to incorporate prior information and provide probabilistic
          interpretations of effects.
        </span>
      ),
    },
    {
      id: "network",
      title: "Network Meta-Analysis (NMA)",
      content:
        "Allows comparison of multiple interventions simultaneously, even if some comparisons are not directly studied in head-to-head trials.",
    },
    {
      id: "ipd",
      title: "Individual Participant Data (IPD) Meta-Analysis",
      content: (
        <span>
          The{" "}
          <Link
            href="/services/research-services/meta-analysis/individual-participant-data-meta-analysis"
            className="text-blue-600"
          >
            Individual Participant Data Meta-Analysis
          </Link>{" "}
          entails the analysis and re-analysis of the individual participant
          data obtained from various studies. It is a method that gives more
          accurate results compared to conventional meta-analyses since it
          enables standardized analysis as well as sub-group analysis.
        </span>
      ),
    },
    {
      id: "diagnostic",
      title: "Diagnostic Test Accuracy Meta-Analysis",
      content:
        "Focuses on combining sensitivity, specificity, and likelihood ratios across diagnostic studies to assess test performance.",
    },
    {
      id: "prognostic",
      title: "Prognostic Meta-Analysis",
      content:
        "Aggregate data on prognostic factors or models across studies to estimate their predictive accuracy in different populations.",
    },
    {
      id: "regression",
      title: "Meta-Regression Analysis",
      content:
        "Explores the impact of study-level characteristics (moderators) on effect sizes to explain heterogeneity among study results.",
    },
    {
      id: "cumulative",
      title: "Cumulative Meta-Analysis",
      content:
        "Updates results over time as new studies are published, showing trends and changes in evidence accumulation.",
    },
    {
      id: "subgroup",
      title: "Subgroup Meta-Analysis",
      content:
        "Analyses specific subgroups within a dataset (e.g., age, sex, region) to detect differential effects.",
    },
    {
      id: "doseresponse",
      title: "Dose–Response Meta-Analysis",
      content:
        "Examines the relationship between the dose of an intervention/exposure and the corresponding effect size across studies.",
    },
    {
      id: "qualitative",
      title: "Qualitative & Mixed-Methods Meta-Synthesis",
      content:
        "Integrates findings from qualitative studies or combines quantitative and qualitative research systematically.",
    },
  ];

  // Split items for mobile image sandwiching (First 5 above image, rest below)
  const firstHalf = accordionData.slice(0, 5);
  const secondHalf = accordionData.slice(5);

  const renderAccordionItem = (item: AccordionItem) => {
    const isOpen = openId === item.id;
    return (
      <div key={item.id} className="border-b border-[#1f3b38]">
        <button
          onClick={() => toggleAccordion(item.id)}
          className="w-full py-4 bg-transparent border-none flex items-center gap-3 cursor-pointer text-left"
        >
          <span className="text-[1.1rem] font-semibold color-[#0d3b38] w-4 text-[#0d3b38]">
            {isOpen ? "–" : "+"}
          </span>
          <span className="text-[0.95rem] font-bold text-[#0f2c3a]">
            {item.title}
          </span>
        </button>

        {isOpen && (
          <div className="pr-0 pb-[18px] pl-[28px] text-[0.875rem] text-gray-700 leading-relaxed">
            {item.content}
          </div>
        )}
      </div>
    );
  };

  const renderGraphic = () => (
    <div className="relative w-full min-h-[380px] flex justify-center items-center">
      {/* Background Light Circle Graphic Accent */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-[#f0f4f8] top-[10%] left-[15%] z-0" />

      {/* Top-Left Card (Chart / Data Analysis Image) */}
      <div className="relative z-10 w-[280px] overflow-hidden mr-[60px] mb-[60px]">
        <Image
          src="/images/research-services/meta-analysis/Types-of-Meta-Analysis-That-We-Offer.png"
          alt="Types of meta-analysis that we offer"
          width={280}
          height={200}
          className="w-full h-[200px] object-cover block"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white px-5 py-[60px] md:pb-[80px] font-sans text-gray-900">
      <div className="max-w-[1150px] mx-auto">
        {/* Header Title */}
        <h2 className="text-[1.85rem] font-bold text-[#0f2c3a] mb-4">
          Types of Meta-Analysis That We Offer
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-[40px] max-w-[1050px]">
          At Pubrica, we specialize in{" "}
          <Link
            href="/services/research-services/meta-analysis/meta-analysis-role-evidence-based-research"
            className="text-blue-600"
          >
            meta-analysis
          </Link>{" "}
          writing services tailored for academic, clinical, and scientific
          research. Our professional meta-analysis experts deliver comprehensive
          solutions, from data extraction and statistical analysis to
          publication-ready documentation. Whether you need support for grant
          applications or journal submissions, our meta-analysis{" "}
          <Link
            href="/services/publication-support"
            className="text-blue-600"
          >
            publication support
          </Link>{" "}
          ensures your work meets the highest standards.
        </p>

        {/* Desktop View: Left Graphic, Right Accordion */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-[40px] items-start">
          {renderGraphic()}
          <div className="flex flex-col">
            {accordionData.map(renderAccordionItem)}
          </div>
        </div>

        {/* Mobile View: First Half Accordion -> Image Graphic -> Second Half Accordion */}
        <div className="flex flex-col lg:hidden gap-6">
          <div className="flex flex-col">
            {firstHalf.map(renderAccordionItem)}
          </div>

          <div className="my-2">{renderGraphic()}</div>

          <div className="flex flex-col">
            {secondHalf.map(renderAccordionItem)}
          </div>
        </div>
      </div>
    </section>
  );
}
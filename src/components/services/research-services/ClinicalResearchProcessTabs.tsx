"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
  imageUrl: string;
}

export const ClinicalResearchProcessTabs: React.FC = () => {
  const tabsData: TabContent[] = [
    {
      id: "topic",
      tabLabel: "Importance of the Topic",
      title: "Importance of the Topic",
      description:
        "Our medical writers conduct a comprehensive literature review to identify research gaps, formulate clear objectives, research questions, and hypotheses.",
      bullets: [
        "We structure introductions to move from a broad context to a focused hypothesis.",
        "Prior studies (preferably within the last 5 years) are reviewed to establish the current state of knowledge.",
        "We highlight shortcomings in the field and explain how your study will address them.",
      ],
      imageUrl: "/images/research-services/Importance-of-the-Topic.png",
    },
    {
      id: "methodology",
      tabLabel: "Clear Methodology Data Collection",
      title: "Clear Methodology Data Collection",
      description:
        "We help authors document methodology with clarity, reproducibility, and compliance:",
      bullets: [
        "Study design, population, sampling strategy, interventions, and confounder control",
        "Variables, instruments, equipment (with model numbers), and software used",
        "Ethical approvals, subject handling, control groups, and data collection techniques",
        "Statistical methods applied for analysis",
      ],
      imageUrl: "/images/research-services/Clear-Methodology-Data-Collection.png",
    },
    {
      id: "statistical",
      tabLabel: "Statistical Analyses & Results",
      title: "Statistical Analyses & Results",
      description: "Our biostatistics team helps you present findings effectively:",
      bullets: [
        "Summarizing results in tables and figures for quick comprehension",
        "Avoiding raw data dumps, focusing instead on interpreted outcomes",
        "Discussing results in context with prior research to validate the hypothesis",
      ],
      imageUrl: "/images/research-services/Statistical-Analyses-Results.png",
    },
    {
      id: "conclusion",
      tabLabel: "Conclusion & Discussion",
      title: "Conclusion & Discussion",
      description: "We ensure your discussion:",
      bullets: [
        "Compares findings with previous literature",
        "Justifies the research hypothesis",
        "Outlines applications and future research directions",
      ],
      imageUrl: "/images/research-services/Conclusion-Discussion.png",
    },
    {
      id: "formatting",
      tabLabel: "Formatting Copyediting",
      title: "Formatting Copyediting",
      description: "Our scientific copyediting services ensure:",
      bullets: [
        "Plagiarism-free, accurate, and compliant manuscripts",
        "References formatted per target journal guidelines (APA, Vancouver, etc.)",
        "High-quality figures and tables that meet publication standards",
      ],
      imageUrl: "/images/research-services/Formatting-Copyediting.png",
    },
    {
      id: "journal",
      tabLabel: "Journal Selection & Submission",
      title: "Journal Selection & Submission",
      description:
        "We help you choose the right journal to maximize acceptance potential:",
      bullets: [
        "Matching the scope, audience, and impact factor to your study",
        "Formatting per submission requirements",
        "Managing the submission process and addressing reviewer comments",
      ],
      imageUrl: "/images/research-services/Journal-Selection-Submission.png",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("topic");
  const currentData = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  return (
    <section className="w-full bg-white py-7 px-6 md:px-12 lg:px-24 font-sans text-[#111827]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Clinical Research Process – Guidance Across All Phases
        </h2>
        <p className="text-gray-700 text-[15px] max-w-4xl mx-auto leading-relaxed">
          At Pubrica, we provide end-to-end clinical research support to ensure
          your study meets the highest scientific and ethical standards from topic
          selection to final journal submission.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start mt-6">
        {/* Left Navigation Buttons */}
        <div className="md:col-span-4 flex flex-col space-y-2">
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left py-3 px-4 font-bold text-sm md:text-[15px] transition-all duration-200 border-b border-gray-100 ${isActive
                    ? "border-2 border-black rounded-lg text-[#083c4c] bg-white shadow-sm"
                    : "text-gray-800 hover:text-[#083c4c] border-b-gray-200"
                  }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Right Content Area */}
        <div className="md:col-span-8 space-y-6 md:pl-4">
          {/* Main Top Visual Header */}
          <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-none bg-gray-100">
            <Image
              src={currentData.imageUrl}
              alt={currentData.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Text & Bullets */}
          <div>
            <h3 className="text-[#083c4c] text-xl font-bold mb-3">
              {currentData.title}
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              {currentData.description}
            </p>

            {currentData.bullets.length > 0 && (
              <ul className="space-y-2.5 mb-6">
                {currentData.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-[15px] leading-relaxed"
                  >
                    <span className="text-black font-bold text-base leading-none mt-1">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-2">
              <Link
                href="/order-now"
                className="inline-block bg-[#083c4c] hover:bg-[#052833] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResearchProcessTabs;
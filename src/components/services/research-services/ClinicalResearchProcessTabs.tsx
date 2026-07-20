"use client"
import React, { useState } from "react";

interface TabContent {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
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
    },
    {
      id: "methodology",
      tabLabel: "Clear Methodology Data Collection",
      title: "Clear Methodology & Data Collection",
      description:
        "Providing frameworks for solid, reproducible methodology and regulatory alignment parameters.",
      bullets: [
        "Step-by-step optimization structures.",
        "Data verification matrix setups.",
      ],
    },
    {
      id: "statistical",
      tabLabel: "Statistical Analyses & Results",
      title: "Statistical Analyses & Results",
      description: "Comprehensive analytics frameworks.",
      bullets: [],
    },
    {
      id: "conclusion",
      tabLabel: "Conclusion & Discussion",
      title: "Conclusion & Discussion",
      description: "Strategic synthesis of analytical vectors.",
      bullets: [],
    },
    {
      id: "formatting",
      tabLabel: "Formatting Copyediting",
      title: "Formatting & Copyediting",
      description: "Final structural and stylistic polish.",
      bullets: [],
    },
    {
      id: "journal",
      tabLabel: "Journal Selection & Submission",
      title: "Journal Selection & Submission",
      description: "End-to-end strategic dispatch guidelines.",
      bullets: [],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("topic");
  const currentData = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Clinical Research Process – Guidance Across All Phases
        </h2>
        <p className="text-gray-600 text-[15px] max-w-4xl mx-auto leading-relaxed">
          At Pubrica, we provide end-to-end clinical research support to ensure
          your study meets the highest scientific and ethical standards from
          topic selection to final journal submission.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8">
        {/* Left Side Vertical Tabs Menu */}
        <div className="md:col-span-4 flex flex-col border-l border-gray-200">
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left py-3.5 px-4 font-semibold text-sm transition-all duration-150 border-l-2 -ml-[2px] ${
                  isActive
                    ? "border-l-[#083c4c] text-[#083c4c] bg-gray-50"
                    : "border-l-transparent text-gray-800 hover:text-[#083c4c] hover:bg-gray-50/50"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Right Side Content Pane Display */}
        <div className="md:col-span-8 space-y-6 md:pl-6 animate-fadeIn">
          <div>
            <h3 className="text-[#083c4c] text-xl font-bold mb-3">
              {currentData.title}
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
              {currentData.description}
            </p>
          </div>

          {currentData.bullets.length > 0 && (
            <ul className="space-y-3">
              {currentData.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                >
                  <span className="text-gray-900 mt-1.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="pt-4">
            <button className="bg-[#0b3434] hover:bg-[#072424] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded shadow transition-colors">
              Request A Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

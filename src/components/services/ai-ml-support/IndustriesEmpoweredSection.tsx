"use client";

import React, { useState } from "react";

const industryCards = [
  {
    id: "fintech",
    title: "FinTech",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    summary:
      "AI makes lending decisions fairer, catches fraud sooner, and cuts down on manual work.",
    bullets: [
      "Develop dynamic credit scoring based on behavioural and transactional ML inputs",
      "Determine fraud before transaction using predictive machine models",
      "Automate compliance processes to minimize manual reviews",
      "Benefit from AI and ML development services for secure, real-time innovations",
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    summary:
      "Streamline risk assessment, automated claims processing, and policy pricing precision.",
    bullets: [
      "Automated claims image analysis and rapid loss estimation",
      "Actuarial risk profiling using historical and live data",
      "Customer churn prediction and personalized policy recommendations",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    summary:
      "Enhance patient outcomes with diagnostic assistance, predictive care, and operational optimization.",
    bullets: [
      "Medical imaging diagnostic support algorithms",
      "Patient readmission risk modeling",
      "Electronic Health Record (EHR) data structuring",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    ),
    summary:
      "Optimize supply chain logistics, equipment maintenance, and quality control.",
    bullets: [
      "Predictive maintenance for industrial machinery",
      "Computer vision for assembly line defect detection",
      "Inventory demand forecasting models",
    ],
  },
  {
    id: "banking",
    title: "Banking",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
    summary:
      "Empower core banking with real-time analytics, automated portfolio management, and anti-money laundering.",
    bullets: [
      "Real-time Anti-Money Laundering (AML) monitoring",
      "Automated customer service intelligent bots",
      "Algorithmic portfolio rebalancing",
    ],
  },
  {
    id: "telecom",
    title: "Telecom",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M2.929 8.586a15 15 0 0121.214 0"
        />
      </svg>
    ),
    summary:
      "Improve network reliability, bandwidth allocation, and customer retention strategies.",
    bullets: [
      "Network congestion prediction and automated traffic routing",
      "Customer churn reduction through behavioral analytics",
      "5G infrastructure deployment optimization",
    ],
  },
];

export default function IndustriesEmpoweredSection() {
  const [openId, setOpenId] = useState("fintech");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. Dark Top Banner */}
      <section className="w-full bg-[#08221c] text-white py-12 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            Accelerate Your AI and ML Modeling with Pubrica
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            Gain access to your dedicated AI and ML expert, who will design,
            train, and validate models tailored to your research or business
            goals, ensuring accurate, scalable, and data-driven outcomes.
          </p>
        </div>
      </section>

      {/* 2. Industries Accordion Section */}
      <section className="w-full bg-[#f8f9f9] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-3">
              Industries We Empower Through Our Tailored AI and ML Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              AI/ML solutions tailored to industry realities, not just
              innovation, but execution where it matters most.
            </p>
          </div>

          {/* 3-Column Accordion Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {industryCards.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-slate-300 shadow-md"
                      : "bg-[#f0f9f6] border-slate-200/60 hover:bg-[#e8f5f1]"
                  }`}
                >
                  {/* Card Header / Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-[#09322e]"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="p-1.5 bg-emerald-100/60 rounded-md">
                        {item.icon}
                      </span>
                      <span className="text-sm sm:text-base">{item.title}</span>
                    </div>
                    <span className="text-xl font-bold text-slate-600">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expanded Content Box */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 space-y-4 border-t border-slate-100 bg-white">
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {item.summary}
                      </p>
                      <ul className="space-y-2 text-slate-600 list-disc pl-4">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

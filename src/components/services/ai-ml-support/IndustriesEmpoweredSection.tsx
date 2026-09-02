"use client";

import React, { useState } from "react";
import Image from "next/image";

const industryCards = [
  {
    id: "fintech",
    title: "FinTech",
    iconSrc: "/images/ai-ml-support/FinTech.png",
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
    iconSrc: "/images/ai-ml-support/Insurance.png",
    summary:
      "AI speeds up claims, spots fraud early, and helps teams focus on decisions, not paperwork.",
    bullets: [
      "Accelerate claims with AI that flags anomalies and auto-prioritizes clean reports",
      "Detect fraud patterns early with trained ML models",
      "Release adjusters from paperwork tasks to devote time to actual decision-making",
      "Accomplish faster outcomes with scalable AI & ML solutions",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    iconSrc: "/images/ai-ml-support/Healthcare.png",
    summary:
      "From booking appointments to reading clinical notes, AI helps healthcare work faster and better.",
    bullets: [
      "Make sense of unstructured clinical notes and lab work through applying NLP",
      "Scheduling appointments and FAQ responses via AI chatbots",
      "Reduce staff load while improving patient experience",
      "Employ AI and ML support services for life sciences that can scale with requirements for compliance and care",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    iconSrc: "/images/ai-ml-support/Manufacturing.png",
    summary:
      "AI predicts breakdowns, checks quality in real time, and helps make faster decisions on the floor.",
    bullets: [
      "Predict equipment failure before downtime occurs.",
      "Use computer vision to inspect defects in real time.",
      "Empower edge AI for real-time decision-making without depending on the cloud.",
      "Take advantage of robust AI & ML services optimized for industrial performance",
    ],
  },
  {
    id: "banking",
    title: "Banking",
    iconSrc: "/images/ai-ml-support/Banking.png",
    summary: "",
    bullets: [
      "Disease Surveillance Studies",
      "Community Health Assessments",
      "Behavioral Risk Factor Surveys",
      "Health Policy Impact Studies",
      "Cross-national or Demographic Comparative Research",
    ],
  },
  {
    id: "telecom",
    title: "Telecom",
    iconSrc: "/images/ai-ml-support/Telecom.png",
    summary:
      "AI spots churn risks, manages networks better, and sorts support requests in seconds.",
    bullets: [
      "Predict churn and take proactive retention actions.",
      "Use reinforcement learning to optimize network traffic allocation.",
      "Classify and triage support tickets with NLP at scale.",
      "Create a difference with enterprise-class AI and ML offerings",
    ],
  },
];

export default function IndustriesEmpoweredSection() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. Dark Top Banner */}
      <section className="w-full bg-[#08221c] text-white py-6 px-4 sm:px-6 lg:px-12 text-center">
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
      <section className="w-full bg-[#f8f9f9] py-7 px-4 sm:px-6 lg:px-12">
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
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${isOpen
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
                        <Image
                          src={item.iconSrc}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
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
                      {item.summary && (
                        <p className="text-slate-800 font-medium leading-relaxed">
                          {item.summary}
                        </p>
                      )}
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
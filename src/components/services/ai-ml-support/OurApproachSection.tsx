"use client";

import React, { useState } from "react";
import Image from "next/image";

const approachItems = [
  {
    id: "advisory",
    title: "AI/ML Advisory",
    content:
      "Get expert guidance, an AI application feasibility study, design thinking workshops, and personalized training that fit specific business cases.",
  },
  {
    id: "responsible",
    title: "Responsible AI",
    content:
      "Implement robust frameworks for fairness, transparency, and ethics in AI models to ensure regulatory compliance and trustworthiness.",
  },
  {
    id: "mlops",
    title: "MLOps",
    content:
      "Streamline machine learning pipelines from experimentation and testing to continuous integration and operational deployment.",
  },
  {
    id: "assessment",
    title: "Data & AI Maturity Assessment",
    content:
      "Evaluate your organization’s current infrastructure, data readiness, and AI capability gaps to build a clear transformation roadmap.",
  },
  {
    id: "governance",
    title: "AI Governance",
    content:
      "Establish comprehensive governance models, policy controls, and risk mitigation strategies tailored to enterprise requirements.",
  },
  {
    id: "managed",
    title: "Managed Services for AI",
    content:
      "End-to-end management, continuous monitoring, and optimization of deployed machine learning models and data pipelines.",
  },
  {
    id: "engineering",
    title: "AI/ML Engineering",
    content:
      "Custom algorithm development, high-performance data processing, and scalable infrastructure integration.",
  },
  {
    id: "generative",
    title: "Generative AI",
    content:
      "Harness cutting-edge large language models and generative architectures tailored to specialized industry use cases.",
  },
  {
    id: "edge",
    title: "Edge AI",
    content:
      "Deploy optimized machine learning models directly onto edge devices for real-time processing and minimal latency.",
  },
];

export default function OurApproachSection() {
  const [openId, setOpenId] = useState<string | null>("advisory");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#f8f9f9] py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Title & Subheading */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-4">
            Our Approach: Helping You At Every Stage Of Your AI Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We map your actual challenges and business context to practical AI
            solutions, providing AI consulting services, implementation, and
            ongoing operations with a focus on security and governance.
            Everything we do begins with the user thanks to a combination of
            design thinking, in-depth user research, domain expertise, and
            iterative development.
          </p>
        </div>

        {/* Content Grid: Visual Graphic Left + Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Layered Visual Graphic */}
          <div className="lg:col-span-5 relative flex justify-center py-4">
            <div className="relative w-full max-w-md h-[340px] sm:h-[380px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <Image
                  src="/images/ai-ml-support/Our-Approach-Helping-You-At-Every-Stage-Of-Your-AI-Journey.webp"
                  alt="Our Approach: Helping You At Every Stage Of Your AI Journey"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 border-t border-[#09322e]/20 divide-y divide-[#09322e]/20">
            {approachItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-3.5 flex items-center justify-start text-left font-semibold text-[#09322e] text-sm sm:text-base hover:opacity-80 transition-opacity"
                  >
                    <span className="w-6 text-slate-700 text-lg font-normal flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span>{item.title}</span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

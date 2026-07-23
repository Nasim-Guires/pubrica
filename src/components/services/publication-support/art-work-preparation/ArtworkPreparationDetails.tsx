"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- Types & Data ---
interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ComplianceItem {
  id: string;
  name: string;
  imageSrc: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "SUBMIT YOUR FILES",
    description:
      "Send us your final editable artwork files and other relevant information",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "PRECISION FORMATTING & TECHNICAL REVIEW",
    description:
      "Check the files and resend for revisions (as many times as required, within 60 days)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "OUR EXPERTS WORK ON YOUR ARTWORK",
    description:
      "Our designers will format/revise your artwork to meet the journal's technical requirements, while an expert editor checks your artwork for consistency and technical accuracy",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const clinicalItems: ComplianceItem[] = [
  { id: "cope", name: "Committee on Publication Ethics (COPE)", imageSrc: "/images/compliance/cope.png" },
  { id: "consort", name: "Consolidated Standards of Reporting Trials (CONSORT)", imageSrc: "/images/compliance/consort.png" },
  { id: "hipaa", name: "Health Insurance Portability and Accountability Act", imageSrc: "/images/compliance/hipaa.png" },
  { id: "icmje", name: "International Committee of Medical Journal Editors (ICMJE)", imageSrc: "/images/compliance/icmje.png" },
];

const journalItems: ComplianceItem[] = [
  { id: "elsevier", name: "Elsevier", imageSrc: "/images/compliance/elsevier.png" },
  { id: "springer", name: "Springer", imageSrc: "/images/compliance/springer.png" },
  { id: "wiley", name: "Wiley", imageSrc: "/images/compliance/wiley.png" },
  { id: "nejm", name: "New England Journal of Medicine", imageSrc: "/images/compliance/nejm.png" },
];

export default function ArtworkPreparationDetails() {
  // State for Step Cards Hover (Defaults to step 1 as active black)
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);
  
  // State for Compliance Tab Switch
  const [activeTab, setActiveTab] = useState<"clinical" | "journal">("clinical");

  const activeItems = activeTab === "clinical" ? clinicalItems : journalItems;

  return (
    <div className="w-full font-sans">
      
      {/* ---------------- SECTION 1: PROCESS STEPS ---------------- */}
      <section className="w-full bg-[#f8faf9] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            How our Article Artwork Preparation Service works
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Our step-by-Step Process
          </h3>
          <p className="max-w-4xl mx-auto text-sm md:text-base text-slate-600 mb-16 leading-relaxed">
            With Pubrica’s artwork preparation service, our skilled designers and
            scientific editors collaborate to ensure your figures adhere to
            journal-specific technical standards, seamlessly and accurately.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Horizontal Connecting Teal Line */}
            <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-2 bg-[#0a7a94] z-0" />

            {steps.map((step, idx) => {
              const isTop = idx % 2 === 0; // Steps 1 and 3 render badge on top, Step 2 on bottom
              const isHovered = hoveredCard === step.number;

              return (
                <div key={step.number} className="relative z-10 flex flex-col items-center">
                  {/* Number Badge */}
                  <div
                    className={`w-10 h-10 rounded-full bg-[#0a7a94] text-white font-bold text-lg flex items-center justify-center mb-3 shadow-md ${
                      isTop ? "order-1" : "order-3"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Vertical Connector */}
                  <div className="w-0.5 h-8 bg-[#0a7a94] order-2" />

                  {/* Card Container */}
                  <div
                    onMouseEnter={() => setHoveredCard(step.number)}
                    className={`w-full p-6 text-left border border-gray-200 transition-all duration-300 cursor-pointer min-h-[220px] shadow-sm ${
                      isTop ? "order-3" : "order-1"
                    } ${
                      isHovered
                        ? "bg-[#525252] text-white"
                        : "bg-white text-slate-800"
                    }`}
                  >
                    <div className={`mb-4 ${isHovered ? "text-white" : "text-[#0a7a94]"}`}>
                      {step.icon}
                    </div>
                    <h4 className={`font-bold text-sm tracking-wide uppercase mb-3 ${isHovered ? "text-white" : "text-black"}`}>
                      {step.title}
                    </h4>
                    <p className={`text-xs md:text-sm leading-relaxed ${isHovered ? "text-gray-200" : "text-slate-600"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: DARK CTA BANNER ---------------- */}
      <section className="w-full bg-[#032d1f] text-white py-10 px-4 text-center">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Focus on Your Research — We’ll Handle the Artwork
          </h3>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
            With Pubrica, get professionally formatted, journal-compliant figures
            and illustrations, ensuring they meet submission standards without
            the hassle.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 3: COMPLIANCE STANDARDS ---------------- */}
      <section className="w-full bg-white py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-8 max-w-5xl leading-relaxed">
            At Pubrica, we ensure that every figure and illustration we prepare
            meets international and journal-specific artwork guidelines to
            provide you with high-quality, submission-ready visuals for your
            manuscript.
          </p>

          {/* Toggle Pills */}
          <div className="mx-auto max-w-3xl mb-12">
            <div className="bg-[#115b5c] p-1.5 rounded-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab("clinical")}
                className={`w-1/2 py-3 px-4 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeTab === "clinical"
                    ? "bg-[#052b2b] text-white shadow-inner"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Clinical and Ethical Compliance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("journal")}
                className={`w-1/2 py-3 px-4 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeTab === "journal"
                    ? "bg-[#052b2b] text-white shadow-inner"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Journal-specific Guideline
              </button>
            </div>
          </div>

          {/* Logo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeItems.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-between text-center bg-white shadow-sm hover:shadow-md transition-shadow h-[220px]"
              >
                <div className="relative w-full h-24 my-auto flex items-center justify-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={160}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#0c373b] mt-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: SAMPLE REPORT DOWNLOAD ---------------- */}
      <section className="w-full bg-[#f0fbf5] py-12 px-4 md:px-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-[220px] h-[300px] border border-gray-200 shadow-md rounded-sm overflow-hidden bg-white">
              <Image
                src="/images/sample-artwork-preview.jpg"
                alt="Artwork Preparation Sample Work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                Artwork Preparation Sample Work
              </h3>
              <a
                href="#discover-sample"
                className="inline-block w-full sm:w-auto text-center bg-black hover:bg-slate-800 text-white font-medium text-sm py-3 px-12 rounded-full transition-colors"
              >
                Discover More
              </a>
            </div>

            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4 max-w-xl">
                Explore our artwork preparation sample work crafted to meet your
                conference's formatting requirements, visual standards, and
                presentation deadlines.
              </p>
              <a
                href="#download-report"
                className="inline-block w-full sm:w-auto text-center bg-black hover:bg-slate-800 text-white font-medium text-sm py-3 px-12 rounded-full transition-colors"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
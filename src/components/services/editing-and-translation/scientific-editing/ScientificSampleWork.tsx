"use client";

import React, { useState } from "react";
import Image from "next/image";

// ==========================================
// DATA DEFINITIONS
// ==========================================

// 1. Sample Work Tabs Data
interface SampleWork {
  id: string;
  tabLabel: string;
  imageSrc: string;
  altText: string;
}

const IMG = "/images/editing-and-translation/scientific-editing";

const sampleWorks: SampleWork[] = [
  {
    id: "dermatology",
    tabLabel: "Dermatology",
    imageSrc: `${IMG}/Editing-and-Translation-Services-sample-work-2.jpg`,
    altText: "Scientific editing sample for Dermatology research manuscript",
  },
  {
    id: "neuroscience",
    tabLabel: "Neuroscience and Neurology",
    imageSrc: `${IMG}/Editing-and-Translation-Services-sample-work-1-.jpg`,
    altText: "Scientific editing sample for Neuroscience and Neurology research manuscript",
  },
];

// 2. Journal Covers Data (for moving infinite carousel)
interface Journal {
  id: string;
  title: string;
  imageSrc: string;
}

const journalCovers: Journal[] = [
  { id: "nature", title: "Nature", imageSrc: `${IMG}/1.jpg` },
  { id: "cell", title: "Cell", imageSrc: `${IMG}/2.jpg` },
  { id: "bmj", title: "BMJ", imageSrc: `${IMG}/Picture3.jpg` },
  { id: "protein-science", title: "Protein Science", imageSrc: `${IMG}/Picture4.jpg` },
  { id: "translational-medicine", title: "Translational Medicine", imageSrc: `${IMG}/Picture5.jpg` },
  { id: "biomaterials-science", title: "Biomaterials Science", imageSrc: `${IMG}/Picture6.jpg` },
  { id: "nejm", title: "NEJM", imageSrc: `${IMG}/Picture7.jpg` },
  { id: "science", title: "Science", imageSrc: `${IMG}/Picture8.jpg` },
  { id: "nature-chemical-biology", title: "Nature Chemical Biology", imageSrc: `${IMG}/Picture9.jpg` },
  { id: "acs-chemical-biology", title: "ACS Chemical Biology", imageSrc: `${IMG}/Picture10.jpg` },
  { id: "acs-catalysis", title: "ACS Catalysis", imageSrc: `${IMG}/Picture11.jpg` },
  { id: "healthcare-science", title: "Health Care Science", imageSrc: `${IMG}/Picture12.jpg` },
];

// 3. Accordion Standards Data
interface AccordionItem {
  id: string;
  title: string;
  content: Array<{ boldText: string; description: string }>;
}

const standardsData: AccordionItem[] = [
  {
    id: "ethical",
    title: "Ethical Standards",
    content: [
      {
        boldText: "COPE (Committee on Publication Ethics):",
        description: "We follow COPE guidelines to maintain transparency, originality, and ethical authorship practices.",
      },
      {
        boldText: "ICMJE (International Committee of Medical Journal Editors):",
        description: "Adherence to authorship and conflict-of-interest policies for biomedical and clinical research manuscripts.",
      },
      {
        boldText: "GPP (Good Publication Practice):",
        description: "Ensuring integrity in reporting and avoiding bias in industry-sponsored research.",
      },
    ],
  },
  {
    id: "editorial",
    title: "Editorial & Formatting Standards",
    content: [
      {
        boldText: "Journal-Specific Requirements:",
        description: "Manuscripts are tailored to the target journal's scope, instructions for authors, and formatting styles.",
      },
      {
        boldText: "Language & Style:",
        description: "Edited to meet AMA, APA, MLA, or Vancouver referencing guidelines as required.",
      },
      {
        boldText: "Clarity & Precision:",
        description: "Focused on improving readability, logical flow, and scientific accuracy without altering the author's intended meaning.",
      },
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory & Quality Standards",
    content: [
      {
        boldText: "ICMJE & CONSORT:",
        description: "Compliance with reporting standards for clinical trials and systematic reviews.",
      },
      {
        boldText: "PRISMA, STROBE, ARRIVE:",
        description: "Adherence to specialized guidelines for review articles, observational studies, and animal research.",
      },
      {
        boldText: "Data Integrity:",
        description: "All edits respect the accuracy of data, research outcomes, and authorial ownership.",
      },
    ],
  },
];

// ==========================================
// MAIN COMPONENT: ScientificEditingPage
// ==========================================

export default function ScientificSampleWork() {
  // State for Sample Work Active Tab
  const [activeTab, setActiveTab] = useState<string>("dermatology");

  // State for Accordions (Store open item IDs)
  const [openAccordions, setOpenAccordions] = useState<string[]>([
    "ethical",
    "editorial",
    "regulatory",
  ]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeSample = sampleWorks.find((s) => s.id === activeTab) || sampleWorks[0];

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      
      {/* ========================================================== */}
      {/* SECTION 1: SAMPLE WORK SHOWCASE                            */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] tracking-tight mb-3">
            Scientific Editing Services Sample Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pubrica's Scientific Editing service ensures impeccable manuscripts by refining clarity, grammar, and structure while preserving scientific rigor. Trust our experienced editors to elevate your research with precise language and adherence to publication standards.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center border-b border-slate-200 mb-6">
          <div className="inline-flex space-x-2">
            {sampleWorks.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-md transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-100/70 text-indigo-900 border-b-2 border-indigo-600 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sample Image Showcase Container */}
        <div className="border border-dashed border-indigo-200 rounded-lg p-2 sm:p-4 bg-slate-50/50 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-md bg-white border border-slate-200 shadow-inner">
            <Image
              src={activeSample.imageSrc}
              alt={activeSample.altText}
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="text-center mt-3">
            <p className="text-[11px] text-slate-400">
              Copyright © 2026 pubrica. No part of this document may be published without permission of the author.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 2: TOP-TIER JOURNALS (MOVING AUTO-SCROLL CAROUSEL)  */}
      {/* ========================================================== */}
      <section className="py-12 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c373b] mb-2 tracking-tight">
            Pubrica Have Been Published in Top-Tier Journals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            Publishing your manuscripts in peer-reviewed journals such as PLOS, Wiley, Elsevier, etc., may be a daunting task; however, with the help of Pubrica's scientific editing services, you not only improve the quality of your work but also have a higher chance of publishing your manuscript.
          </p>
        </div>

        {/* CSS Infinite Moving Carousel */}
        <div className="relative w-full overflow-hidden group">
          {/* Duplicate loop array to create seamless infinite scrolling */}
          <div className="flex space-x-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...journalCovers, ...journalCovers, ...journalCovers].map((journal, idx) => (
              <div
                key={`${journal.id}-${idx}`}
                className="flex-none w-40 sm:w-48 h-56 sm:h-64 relative rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={journal.imageSrc}
                  alt={journal.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 3: COMPLIANCE & GUIDELINE STANDARDS (ACCORDIONS)   */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c373b] mb-3 tracking-tight">
            Our Compliance and Guideline Standards for Scientific Editing Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            At Pubrica, we uphold the highest ethical, editorial, and regulatory standards to ensure your manuscript is accurate, credible, and ready for publication in high-impact journals. Our scientific editing services comply with globally recognized guidelines and best practices, ensuring both quality and integrity in research communication.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {standardsData.map((item) => {
            const isOpen = openAccordions.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-sm overflow-hidden border border-[#0a2e32] shadow-xs"
              >
                {/* Dark Green Banner Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full bg-[#0c373b] hover:bg-[#09292c] text-white px-5 py-3.5 flex items-center justify-between transition-colors duration-200 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-base sm:text-lg w-4">
                      {isOpen ? "–" : "+"}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="bg-white p-5 sm:p-6 border-t border-slate-100 animate-fadeIn">
                    <ul className="space-y-3">
                      {item.content.map((point, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <span className="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 mr-3 shrink-0" />
                          <span>
                            <strong className="font-bold text-slate-900 mr-1.5">
                              {point.boldText}
                            </strong>
                            {point.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Tailored Tailwind Marquee Animation Style Rule */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
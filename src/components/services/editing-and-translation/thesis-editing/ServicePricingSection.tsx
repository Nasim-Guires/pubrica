"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightCircle, Minus, Plus } from "lucide-react";

interface PricingTier {
  title: string;
  subtitle: string;
  iconSrc: string;
  iconAlt: string;
  description: string;
  bgColor: string;
  includes: {
    category?: string;
    items?: string[];
  }[];
  addons: string[];
}

const pricingData: PricingTier[] = [
  {
    title: "Thesis Essentials",
    subtitle: "Make Your Thesis Error-Free And Submission-Ready",
    iconSrc: "/images/editing-and-translation/thesis-editing/t-icons.png",
    iconAlt: "Thesis Essentials",
    bgColor: "bg-[#CFD8DC]", // Soft slate gray
    description:
      "Suitable for writers who need editing and proofreading to eliminate grammar and spelling mistakes in their thesis and ensure stylistic consistency.",
    includes: [
      {
        category: "Grammar and Punctuation",
        items: [
          "Correction of spelling errors",
          "Grammatical accuracy",
          "Precise punctuation",
        ],
      },
      {
        category: "Academic Style",
        items: [
          "Stylistic consistency",
          "US/UK English style",
          "Style guide adherence (APA, MLA, CMOS)",
        ],
      },
      {
        category: "Expert Commentary",
        items: ["Expert tips on academic style and conventions"],
      },
    ],
    addons: [
      "One Round of Revision",
      "Reference Formatting",
      "Thesis Formatting",
      "iThenticate Plag-Check",
    ],
  },
  {
    title: "Thesis Pro",
    subtitle: "Improve The Overall Presentation Of Your Thesis",
    iconSrc: "/images/editing-and-translation/thesis-editing/t-icons.png",
    iconAlt: "Thesis Pro",
    bgColor: "bg-[#D1C4E9]", // Soft purple
    description:
      "A thorough thesis editing with a deeper intervention to improve clarity and coherence. Recommended for writers who need help enhancing their writing.",
    includes: [
      {
        category: "Everything in Thesis Essentials +",
      },
      {
        category: "Clarity Check",
        items: [
          "Accurate word/phrase choice",
          "Paraphrasing for clarity and concision",
          "Smooth transition at paragraph and section levels",
        ],
      },
      {
        category: "Structure Check",
        items: [
          "Smooth transitions at sentence and paragraph levels",
          "Elimination of redundancy",
        ],
      },
      {
        category: "Advanced Commentary",
        items: [
          "Advanced tips on content, style, and conventions",
          "Commentary on content placement, transition, and logical consistency",
        ],
      },
    ],
    addons: [
      "One Round of Revision",
      "Reference Formatting",
      "Thesis Formatting",
      "iThenticate Plag-Check",
    ],
  },
];

interface GuaranteeItem {
  id: string;
  title: string;
  content: string[];
}

const guarantees: GuaranteeItem[] = [
  {
    id: "quality",
    title: "Guaranteed Quality",
    content: [
      "In the rare case our work fails to delight you, we'll re-work on it till you're 100% happy.",
      "Our commitment to excellence ensures reliable results and impactful outcomes in medical research.",
    ],
  },
  {
    id: "ontime",
    title: "On Time Always",
    content: [
      "We always help you meet your deadlines, often by turning around work in just 8 hours.",
      "Pubrica's punctuality ensures your projects stay on track, meeting deadlines with efficiency and reliability.",
    ],
  },
  {
    id: "security",
    title: "Advanced Security",
    content: [
      "We work hard to protect your work and make all our experts and employees honour a strict NDA.",
      "Ensuring utmost data security through advanced encryption and strict protocols, offering peace of mind to all clients.",
    ],
  },
];

export default function ServicePricingSection() {
  // 1. Updated State: Closed by default ({}) and tracks individual open/close state per card
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 text-slate-800 font-sans">
      {/* Title & Subtitle */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
          Choose the Thesis Editing Service You Need
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Take a pick based on your unique requirements, including the level of
          editor intervention your manuscript requires, your thesis submission
          deadline, and other details.
        </p>
      </div>

      {/* Pricing Cards Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-stretch">
        {pricingData.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.bgColor} rounded-xl shadow-md p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg`}
          >
            <div>
              {/* Header Badge */}
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-4 mb-6">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={plan.iconSrc}
                    alt={plan.iconAlt}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {plan.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                {plan.description}
              </p>

              {/* Includes List */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-slate-900 font-bold mb-3">
                  <ArrowRightCircle className="w-5 h-5 shrink-0" />
                  <span className="text-base">Includeds:</span>
                </div>

                <ul className="space-y-4 pl-3 text-xs sm:text-sm text-slate-800">
                  {plan.includes.map((inc, iIdx) => (
                    <li key={iIdx} className="space-y-1">
                      {inc.category && (
                        <div className="font-bold list-disc list-inside">
                          {inc.category}
                        </div>
                      )}
                      {inc.items && (
                        <ul className="pl-6 space-y-1 list-disc">
                          {inc.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add-ons List */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-slate-900 font-bold mb-3">
                  <ArrowRightCircle className="w-5 h-5 shrink-0" />
                  <span className="text-base">Add-ons:</span>
                </div>
                <ul className="pl-6 space-y-2 list-disc text-xs sm:text-sm text-slate-800 font-medium">
                  {plan.addons.map((addon, aIdx) => (
                    <li key={aIdx}>{addon}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner Bar */}
      <div className="w-full bg-[#B70000] text-white font-bold text-center py-3.5 px-4 rounded-lg shadow-md mb-12 text-sm sm:text-base tracking-wide">
        Starts from $ 180 for 1000 Words
      </div>

      {/* 2. Accordions / Feature Cards Section */}
      {/* items-start prevents adjacent row cards from expanding/stretching */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-start">
        {guarantees.map((item) => {
          const isOpen = !!openSections[item.id];
          return (
            <div
              key={item.id}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col"
            >
              <button
                type="button"
                onClick={() => toggleSection(item.id)}
                className="w-full bg-[#0E3B3E] text-white p-4 font-bold text-sm sm:text-base flex items-center justify-between transition-colors hover:bg-[#0a2e30] cursor-pointer"
              >
                <span>{item.title}</span>
                {isOpen ? (
                  <Minus className="w-4 h-4 shrink-0 text-white" />
                ) : (
                  <Plus className="w-4 h-4 shrink-0 text-white" />
                )}
              </button>

              {isOpen && (
                <div className="p-5 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 bg-white">
                  {item.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Testimonials Header Placeholder */}
      <section className="pt-8 border-t border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
          Testimonials
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Learn how Pubrica&apos;s Thesis Editing Services have helped
          Master&apos;s and Ph.D. scholars refine their research, enhance
          clarity, and meet academic standards. Our expert editors improve
          readability, maintain your academic voice, and strengthen the overall
          impact of your thesis, making it submission-ready and academically
          sound. Here is what our clients say:
        </p>
      </section>
    </div>
  );
}
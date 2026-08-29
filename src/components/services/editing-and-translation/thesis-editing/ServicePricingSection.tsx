"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightCircle, Minus, Plus } from "lucide-react";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

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

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/thesis-editing/t-icons.png",
    title: "Thesis Essentials",
    subtitle: "Make Your Thesis Error-Free And Submission-Ready",
    idealFor:
      "Writers who need editing and proofreading to eliminate grammar and spelling mistakes in their thesis and ensure stylistic consistency.",
    includes: [
      "Grammar and Punctuation: Correction of spelling errors, grammatical accuracy, precise punctuation",
      "Academic Style: Stylistic consistency, US/UK English style, style guide adherence (APA, MLA, CMOS)",
      "Expert Commentary: Expert tips on academic style and conventions",
    ],
    addOns: [
      "One Round of Revision",
      "Reference Formatting",
      "Thesis Formatting",
      "iThenticate Plag-Check",
    ],
    cardBgColor: "#CFD8DC",
    titleColor: "#003B46",
  },
  {
    icon: "/images/editing-and-translation/thesis-editing/t-icons.png",
    title: "Thesis Pro",
    subtitle: "Improve The Overall Presentation Of Your Thesis",
    idealFor:
      "Writers who need deeper thesis editing to improve clarity, coherence, and the overall quality of their academic writing.",
    includes: [
      "Everything in Thesis Essentials +",
      "Clarity Check: Accurate word/phrase choice, paraphrasing for clarity and concision, smooth transition at paragraph and section levels",
      "Structure Check: Smooth transitions at sentence and paragraph levels, elimination of redundancy",
      "Advanced Commentary: Advanced tips on content, style, and conventions; commentary on content placement, transition, and logical consistency",
    ],
    addOns: [
      "One Round of Revision",
      "Reference Formatting",
      "Thesis Formatting",
      "iThenticate Plag-Check",
    ],
    cardBgColor: "#D1C4E9",
    titleColor: "#5E3A8C",
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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 text-slate-800 ">
      {/* Title & Subtitle */}
      <CommonPackages
        title="Choose the Thesis Editing Service You Need"
        description="Take a pick based on your unique requirements, including the level of editor intervention your manuscript requires, your thesis submission deadline, and other details."
        packages={packages}
      />
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
      {/* <section className="pt-8 border-t border-slate-200">
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
      </section> */}
    </div>
  );
}
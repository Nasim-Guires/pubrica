"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PlanCard {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  bgColor: string;
  idealFor: string;
  includes: string[];
  turnaround: string;
}

const plansData: PlanCard[] = [
  {
    id: "basic",
    iconSrc: "/images/editing-and-translation/basic-pacakge.png",
    iconAlt: "Basic package",
    title: "Basic",
    bgColor: "bg-[#C3D2CE]", // Sage Green
    idealFor: "Short manuscripts, abstracts, or conference papers",
    includes: [
      "Accurate translation of up to 2,000 words",
      "Basic editing for grammar, punctuation, and clarity",
      "Maintains original meaning and context",
    ],
    turnaround: "3–5 business days",
  },
  {
    id: "pro",
    iconSrc: "/images/editing-and-translation/pro.webp",
    iconAlt: "Pro package",
    title: "Pro",
    bgColor: "bg-[#D6BDD8]", // Muted Purple/Lavender
    idealFor: "Full-length research papers, theses, and journal articles",
    includes: [
      "Translation of up to 5,000 words",
      "Advanced editing for clarity, academic style, and consistency",
      "Terminology review to match discipline-specific standards",
      "Formatting to meet journal or thesis submission guidelines",
    ],
    turnaround: "5–10 business days",
  },
  {
    id: "traditional",
    iconSrc:
      "/images/editing-and-translation/translation-with-editing/T-icons.png",
    iconAlt: "Traditional package",
    title: "Traditional",
    bgColor: "bg-[#CFB487]", // Warm Tan/Gold
    idealFor: "Large documents, multi-author collaborations, or books",
    includes: [
      "Translation of over 5,000 + words (customizable)",
      "Comprehensive editing, including style, tone, and readability",
      "Subject-matter expert review",
      "Final formatting and submission-ready document",
      "Optional consultation with editor/translator for queries",
    ],
    turnaround: "Depends on document size (custom timeline)",
  },
];

export default function TranslationPlansSection() {
  return (
    <section className="w-full bg-white font-sans py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Choose the Translation with Editing Plan You Need
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Choose the Pubrica Translation with Editing plan that fits your
            research needs, whether it&apos;s a short manuscript, a full-length
            paper, or a comprehensive academic project. We ensure accurate
            translation, clear editing, and submission-ready quality.
          </p>
        </div>

        {/* Pricing/Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.bgColor} rounded-xl shadow-md p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="space-y-6">
                {/* Plan Header Card Box */}
                <div className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-sm">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src={plan.iconSrc}
                      alt={plan.iconAlt}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {plan.title}
                  </h3>
                </div>

                {/* Ideal For Section */}
                <div className="space-y-1">
                  <div className="flex items-start space-x-2 text-slate-900 font-bold text-sm">
                    <ArrowRightCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Ideal For:</span>
                    <span className="font-normal text-slate-800">
                      {plan.idealFor}
                    </span>
                  </div>
                </div>

                {/* Included Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <ArrowRightCircle className="w-4 h-4 text-black shrink-0" />
                    <span>Includeds:</span>
                  </div>

                  <ul className="space-y-2.5 pl-6 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {plan.includes.map((item, index) => (
                      <li key={index} className="list-disc list-outside">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Turnaround Footer */}
              <div className="pt-6 mt-6 border-t border-black/10">
                <div className="flex items-start space-x-2 text-slate-900 text-xs sm:text-sm">
                  <ArrowRightCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Turnaround: </span>
                    <span className="text-slate-800 font-medium">
                      {plan.turnaround}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-6 text-center">
         <GetFreeQuoteButton/>
        </div>
      </div>
    </section>
  );
}

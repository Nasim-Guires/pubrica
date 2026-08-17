"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// TYPES & DATA
// ==========================================

interface PackageTier {
  id: string;
  badgeSrc: string;
  badgeBg: string;
  headerTextColor: string;
  cardBg: string;
  title: string;
  subtitle?: string;
  idealFor: string;
  services: string[];
  turnaroundTime: string;
}

const packagesData: PackageTier[] = [
  {
    id: "basic",
    badgeSrc: "/images/editing-and-translation/basic-pacakge.png",
    badgeBg: "bg-[#e2e8f0]",
    headerTextColor: "text-[#1e3a8a]",
    cardBg: "bg-[#cad5d8]",
    title: "Basic Editorial",
    idealFor:
      "Students, early-career researchers, or authors seeking basic language polishing for essays, theses, or manuscripts.",
    services: [
      "Grammar and spelling corrections",
      "Sentence structure improvement",
      "Consistency checks (terminology, formatting)",
    ],
    turnaroundTime: "3–5 business days",
  },
  {
    id: "standard",
    badgeSrc: "/images/publication-support/poster-preparation/S.png",
    badgeBg: "bg-[#fef08a]",
    headerTextColor: "text-[#6b21a8]",
    cardBg: "bg-[#d8c3e5]",
    title: "Standard Editorial",
    idealFor:
      "Researchers and academics preparing journal manuscripts, conference papers, or book chapters.",
    services: [
      "All Basic Package services",
      "Clarity and readability enhancement",
      "Academic style and tone adjustment",
      "Reference and citation format check",
    ],
    turnaroundTime: "5–7 business days",
  },
  {
    id: "advanced",
    badgeSrc: "/images/publication-support/peer-review-pre-submission/advanced.webp",
    badgeBg: "bg-[#bfdbfe]",
    headerTextColor: "text-[#854d0e]",
    cardBg: "bg-[#ddc89e]",
    title: "Advanced Editorial",
    idealFor:
      "Authors submitting to high-impact journals, publishers, or preparing complex academic content.",
    services: [
      "All Standard Package services",
      "Structural and content review",
      "Subject-specific terminology refinement",
      "Consistency across figures, tables, and captions",
      "Manuscript formatting per target journal/publisher guidelines",
    ],
    turnaroundTime: "7–10 business days",
  },
  {
    id: "premium",
    badgeSrc: "/images/editing-and-translation/translation-with-editing/pro.webp",
    badgeBg: "bg-[#fbcfe8]",
    headerTextColor: "text-[#be123c]",
    cardBg: "bg-[#fbcfe8]",
    title: "Premium",
    subtitle: "Comprehensive",
    idealFor:
      "Comprehensive editorial support for books, theses, or multi-author publications requiring detailed review.",
    services: [
      "All Advanced Package services",
      "In-depth developmental editing",
      "Localization and adaptation for international audiences",
      "Metadata, permissions, and reference cross-check",
      "Accessibility and visual editing (tables, charts, graphs)",
    ],
    turnaroundTime: "10–14 business days",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function EditorialPackagesSection() {
  return (
    <section className="w-full bg-white text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Academic Editorial Services – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Pubrica, we offer comprehensive academic editorial packages
            designed to meet the diverse needs of researchers, authors, and
            academic institutions. Each package is crafted to ensure clarity,
            accuracy, and publication readiness while maintaining the highest
            academic standards.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`${pkg.cardBg} rounded-md p-5 flex flex-col justify-between shadow-sm relative border border-black/5`}
              >
                <div className="space-y-5">
                  {/* Card Header (Badge + Title) */}
                  <div className="bg-white/80 rounded-md p-3 flex items-center gap-3 shadow-xs min-h-[68px]">
                    <div className={`relative w-9 h-9 ${pkg.badgeBg} rounded-full shrink-0 shadow-inner overflow-hidden`}>
                      <Image
                        src={pkg.badgeSrc}
                        alt={`${pkg.title} package`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold leading-tight ${pkg.headerTextColor}`}
                      >
                        {pkg.title}
                      </h3>
                      {pkg.subtitle && (
                        <span
                          className={`block text-xs font-bold leading-tight ${pkg.headerTextColor}`}
                        >
                          {pkg.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Ideal For Section */}
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-900 leading-snug">
                        <span className="font-extrabold">Ideal For:</span>{" "}
                        {pkg.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Services List Section */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5">
                      <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                      <span className="text-xs font-extrabold text-slate-900">
                        Services include:
                      </span>
                    </div>

                    <ul className="space-y-2 pl-6 text-xs text-slate-800 leading-snug list-disc">
                      {pkg.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Turnaround Time Section */}
                <div className="pt-6 mt-4 border-t border-slate-900/10">
                  <div className="flex items-start gap-1.5">
                    <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-900 leading-snug">
                      <span className="font-extrabold">Turnaround time:</span>{" "}
                      {pkg.turnaroundTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call To Action Button */}
          <div className="flex justify-center pt-8">
            <GetFreeQuoteButton/>
          </div>
        </div>
      </div>
    </section>
  );
}

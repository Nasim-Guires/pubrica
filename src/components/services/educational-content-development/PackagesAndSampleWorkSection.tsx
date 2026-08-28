"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRightCircle,
  PlusCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// ==========================================
// DATA STRUCTURES
// ==========================================

interface PackageData {
  id: string;
  badge: string;
  badgeSrc: string;
  name: string;
  headerBg: string;
  badgeColor: string;
  badgeBg: string;
  cardBg: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string;
  turnaroundTime: string;
}

const packagesData: PackageData[] = [
  {
    id: "basic",
    badge: "B",
    badgeSrc: "/images/editing-and-translation/basic-pacakge.png",
    name: "Basic",
    headerBg: "bg-white text-slate-800",
    badgeColor: "text-[#b28b48]",
    badgeBg: "bg-[#f4ebe1]",
    cardBg: "bg-[#cad3d2]",
    idealFor:
      "Small-scale projects, introductory courses, or awareness programs.",
    includes: [
      "Core educational content for 1–2 modules",
      "Simple visual aids (charts, diagrams)",
      "Basic instructional design",
    ],
    optionalAddOns: "Quizzes, infographics, or additional modules",
    turnaroundTime: "5–7 business days",
  },
  {
    id: "standard",
    badge: "S",
    badgeSrc: "/images/publication-support/poster-preparation/S.png",
    name: "Standard",
    headerBg: "bg-white text-slate-800",
    badgeColor: "text-[#9c7811]",
    badgeBg: "bg-[#f8f0d8]",
    cardBg: "bg-[#c7b5d6]",
    idealFor:
      "Mid-sized courses, professional training, or multi-module programs.",
    includes: [
      "Comprehensive content for 3–5 modules",
      "Interactive elements (case studies, exercises)",
      "Professional instructional design and review",
      "Basic assessment tools",
    ],
    optionalAddOns: "Multimedia content, gamification, or advanced assessments",
    turnaroundTime: "10–14 business days",
  },
  {
    id: "premium",
    badge: "P",
    badgeSrc: "/images/editing-and-translation/translation-with-editing/pro.webp",
    name: "Premium",
    headerBg: "bg-white text-slate-800",
    badgeColor: "text-[#2b6d7a]",
    badgeBg: "bg-[#e0f1f4]",
    cardBg: "bg-[#cbaf83]",
    idealFor:
      "Large-scale programs, e-learning courses, or certification modules.",
    includes: [
      "Full course content (6+ modules)",
      "Interactive multimedia (videos, animations)",
      "Advanced instructional design and subject-matter expert review",
      "Detailed assessments and feedback mechanisms",
    ],
    optionalAddOns:
      "Custom branding, translation/localization, ongoing support",
    turnaroundTime: "20+ business days",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function PackagesAndSampleWorkSection() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ==========================================
            SECTION 1: EDUCATIONAL PACKAGES
        ========================================== */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Educational Content Development – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Pubrica offers tailored educational content development packages
            designed to meet diverse learning needs, ensuring quality,
            engagement, and effective knowledge transfer. Our packages are
            categorized as Basic, Standard, and Premium, each crafted to provide
            value according to your objectives, audience, and depth of content
            required.
          </p>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`group cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between border border-transparent hover:bg-[#1a1a1a] hover:border-neutral-800 hover:shadow-2xl hover:-translate-y-1 ${pkg.cardBg}`}
              >
                {/* Header Tile */}
                <div className="bg-white p-5 flex items-center gap-4 border-b border-gray-100 transition-colors duration-300 group-hover:bg-[#262626]">
                  <div className="relative w-12 h-12">
                    <Image src={pkg.badgeSrc} alt={pkg.name} fill className="object-contain" sizes="48px" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors duration-300">
                    {pkg.name}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 text-left space-y-6 flex-1 text-slate-900 group-hover:text-gray-200 transition-colors duration-300">
                  {/* Ideal For */}
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 font-bold text-xs uppercase tracking-wider text-slate-900 group-hover:text-white">
                      <ArrowRightCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-800 group-hover:text-white" />
                      <span>Ideal For:</span>
                    </div>
                    <p className="text-xs leading-relaxed pl-6 text-slate-800 group-hover:text-gray-300">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 font-bold text-xs uppercase tracking-wider text-slate-900 group-hover:text-white">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-slate-800 group-hover:text-white" />
                      <span>Includes:</span>
                    </div>
                    <ul className="space-y-2 text-xs pl-6 list-disc marker:text-slate-700 group-hover:marker:text-gray-300 text-slate-800 group-hover:text-gray-300">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons */}
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 font-bold text-xs uppercase tracking-wider text-slate-900 group-hover:text-white">
                      <PlusCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-800 group-hover:text-white" />
                      <span>Optional Add-ons:</span>
                    </div>
                    <p className="text-xs leading-relaxed pl-6 text-slate-800 group-hover:text-gray-300">
                      {pkg.optionalAddOns}
                    </p>
                  </div>

                  {/* Turnaround Time */}
                  <div className="space-y-1 pt-2 border-t border-black/10 group-hover:border-white/10">
                    <div className="flex items-start gap-2 font-bold text-xs uppercase tracking-wider text-slate-900 group-hover:text-white">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5 text-slate-800 group-hover:text-white" />
                      <span>Turnaround Time:</span>
                    </div>
                    <p className="text-xs font-semibold pl-6 text-slate-900 group-hover:text-white">
                      {pkg.turnaroundTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <GetFreeQuoteButton/>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: SAMPLE WORK INFOGRAPHIC
        ========================================== */}
        <section className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
              Education Content Development Service Sample Work
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of knowledge with Pubrica’s bespoke educational
              content development services. From curriculum design to engaging
              learning materials, we ensure every piece inspires and educates,
              delivering evidence-based, interactive, and learner-focused
              content that drives understanding, retention, and real-world
              application.
            </p>
          </div>

          {/* Medical Infographic Card Reproduction */}
          <div className="max-w-4xl mx-auto relative w-full min-h-[280px] h-[420px] rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg">
            <Image
              src="/images/educational-content-development/Educational-Content-Development-Service.webp"
              alt="Education Content Development Service sample work"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

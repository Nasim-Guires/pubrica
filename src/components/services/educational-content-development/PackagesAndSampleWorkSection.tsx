"use client";

import React from "react";
import {
  ArrowRightCircle,
  PlusCircle,
  Clock,
  CheckCircle2,
  Activity,
  UserX,
  AlertTriangle,
  TrendingUp,
  Heart,
  Skull,
} from "lucide-react";

// ==========================================
// DATA STRUCTURES
// ==========================================

interface PackageData {
  id: string;
  badge: string;
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
    <div className="w-full bg-white text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
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
                  <div
                    className={`w-12 h-12 rounded-full font-bold text-2xl flex items-center justify-center border-2 border-dashed border-gray-300 ${pkg.badgeBg} ${pkg.badgeColor}`}
                  >
                    {pkg.badge}
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
            <button className="w-full sm:w-auto px-12 py-3 bg-[#b30000] hover:bg-[#8e0000] text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all duration-200 shadow-md hover:shadow-lg">
              Get a Free quote
            </button>
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
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-6 bg-white shadow-lg space-y-6">
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#133036] text-white p-4 rounded-md gap-4">
              <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase">
                PERIPHERAL ARTERY DISEASE & Chronic Wounds
              </h3>
              <div className="text-right">
                <span className="text-lg font-black tracking-widest text-teal-400">
                  PUBRICA
                </span>
                <span className="block text-[10px] text-gray-300 uppercase -mt-1">
                  Knowledge Works
                </span>
              </div>
            </div>

            {/* Introductory Text */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed border-l-4 border-red-800 pl-4 bg-red-50/50 py-2">
              Peripheral artery disease (PAD) arises when{" "}
              <strong className="text-red-700">
                plaque accumulation narrows the arteries
              </strong>{" "}
              and reduces blood flow to the limbs, which can lead to leg ulcers,
              gangrene, and potential limb loss. This condition develops as the
              arteries carrying{" "}
              <strong className="text-red-700">
                blood to the legs become clogged with plaque
              </strong>
              , restricting circulation.
            </p>

            {/* Stat Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center pt-2">
              <div className="p-3 bg-neutral-50 rounded border border-gray-100 flex flex-col items-center">
                <UserX className="w-8 h-8 text-red-700 mb-1" />
                <span className="text-base font-extrabold text-slate-900">
                  1 in 5
                </span>
                <span className="text-[10px] text-gray-600">
                  people over age 60 have PAD
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-gray-100 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-4 border-red-700 text-red-700 font-bold text-xs flex items-center justify-center mb-1">
                  40%
                </div>
                <span className="text-[10px] text-gray-600">
                  of those living with PAD may not experience symptoms or leg
                  pain
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-gray-100 flex flex-col items-center col-span-2 sm:col-span-1">
                <Activity className="w-8 h-8 text-red-700 mb-1" />
                <span className="text-[10px] text-gray-600">
                  Restricted artery blood flow illustration
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-gray-100 flex flex-col items-center">
                <span className="text-xl font-black text-red-700">82%</span>
                <span className="text-[10px] text-gray-600">
                  of leg amputations are due to poor circulation of affected
                  limb
                </span>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-gray-100 flex flex-col items-center">
                <span className="text-lg font-extrabold text-slate-900">
                  8 to 12 MIL
                </span>
                <span className="text-[10px] text-gray-600">
                  people in the US living with PAD
                </span>
              </div>
            </div>

            {/* Stat Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center pt-2">
              <div className="p-4 bg-red-800 text-white rounded flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 shrink-0 text-amber-300" />
                <div className="text-left">
                  <span className="text-lg font-bold">25%</span>
                  <p className="text-[11px] text-red-100">
                    of people with late stage PAD may require an amputation
                    within one year
                  </p>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded border border-gray-200 flex items-center gap-4">
                <TrendingUp className="w-10 h-10 shrink-0 text-red-700" />
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block uppercase">
                    Obstructed Blood Flow
                  </span>
                  <p className="text-[11px] text-gray-600">
                    Decreased blood flow hinders delivery of oxygen & nutrients
                    needed for proper wound healing
                  </p>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 text-white rounded flex items-center gap-4">
                <Skull className="w-10 h-10 shrink-0 text-gray-400" />
                <div className="text-left">
                  <span className="text-lg font-bold text-red-400">
                    Nearly 50%
                  </span>
                  <p className="text-[11px] text-gray-300">
                    of individuals who have an amputation due to vascular
                    disease will die within 5 years
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Takeaway */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-xs font-bold text-[#0d3b44]">
                Don't let PAD limit your mobility. Consult an advanced wound
                care expert today and restore circulation with hyperbaric oxygen
                therapy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

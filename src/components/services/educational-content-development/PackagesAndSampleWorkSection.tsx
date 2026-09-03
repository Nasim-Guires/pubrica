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
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

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

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Core Educational Content",
    idealFor:
      "Small-scale projects, introductory courses, or awareness programs.",
    includes: [
      "Core educational content for 1–2 modules",
      "Simple visual aids (charts, diagrams)",
      "Basic instructional design",
    ],
    addOns: [
      "Quizzes",
      "Infographics",
      "Additional modules",
    ],
    turnaround: "5–7 business days",
    cardBgColor: "#cad3d2",
    titleColor: "#0d3b44",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard",
    subtitle: "Enhanced Educational Development",
    idealFor:
      "Mid-sized courses, professional training, or multi-module programs.",
    includes: [
      "Comprehensive content for 3–5 modules",
      "Interactive elements (case studies, exercises)",
      "Professional instructional design and review",
      "Basic assessment tools",
    ],
    addOns: [
      "Multimedia content",
      "Gamification",
      "Advanced assessments",
    ],
    turnaround: "10–14 business days",
    cardBgColor: "#c7b5d6",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "Advanced & Comprehensive Learning Solutions",
    idealFor:
      "Large-scale programs, e-learning courses, or certification modules.",
    includes: [
      "Full course content (6+ modules)",
      "Interactive multimedia (videos, animations)",
      "Advanced instructional design and subject-matter expert review",
      "Detailed assessments and feedback mechanisms",
    ],
    addOns: [
      "Custom branding",
      "Translation/localization",
      "Ongoing support",
    ],
    turnaround: "20+ business days",
    cardBgColor: "#cbaf83",
    titleColor: "#805826",
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
          <CommonPackages
            title="Educational Content Development – Our Packages"
            description="Pubrica offers tailored educational content development packages designed to meet diverse learning needs, ensuring quality, engagement, and effective knowledge transfer. Our packages are categorized as Basic, Standard, and Premium, each crafted to provide value according to your objectives, audience, and depth of content required."
            packages={packages}
          />

          {/* CTA Button */}
          <div className="">
            <GetFreeQuoteButton />
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

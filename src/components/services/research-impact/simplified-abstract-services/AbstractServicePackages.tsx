'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

// --- DATA TYPES & CONSTANTS ---

interface PackageTier {
  letter: string;
  badgeSrc: string;
  badgeBg: string;
  badgeColor: string;
  cardHeaderBg: string;
  title: string;
  idealFor: string;
  features: string[];
  delivery: string;
}
const packagesData: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic Package",
    subtitle: "For Thesis & Student Submissions",
    idealFor:
      "Thesis summaries, student submissions, internal reports",
    includes: [
      "Unstructured abstract (150–200 words)",
      "Summary of objectives, methods, and results",
      "Up to 5 keywords",
      "No revisions",
    ],
    turnaround: "Delivery: 3 working days",
    cardBgColor: "#d8e3e1",
    titleColor: "#355252",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard Package",
    subtitle: "For Academic Journal Submissions",
    idealFor:
      "Academic journal submissions, repositories",
    includes: [
      "Structured abstract (IMRaD or journal-specific)",
      "Domain expert writing",
      "Keyword optimization",
      "1 revision",
      "Formatting",
    ],
    turnaround: "Delivery: 4 working days",
    cardBgColor: "#e5d8eb",
    titleColor: "#6a3b7d",
  },
  {
    icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
    title: "Premium Package",
    subtitle: "For High-Impact Research",
    idealFor:
      "High-impact journals, research grants, conferences",
    includes: [
      "Senior expert review",
      "Enhanced readability",
      "Keyword indexing support",
      "2 revisions",
      "Optional cover note for submission",
    ],
    turnaround: "Delivery: 5 working days",
    cardBgColor: "#ebd8bd",
    titleColor: "#8b4513",
  },
  {
    icon: "/images/physician-writing-services/ELITE-LOGO.png",
    title: "Express Add-On Package",
    subtitle: "For Urgent Submissions",
    idealFor:
      "For urgent submissions (add-on to any package)",
    includes: [
      "24-hour delivery",
      "Priority handling and quality check",
    ],
    turnaround: "Delivery: 24 hours (extra)",
    cardBgColor: "#f4c8c5",
    titleColor: "#be185d",
  },
];

export default function AbstractServicePackages() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 bg-white">

      {/* Header Info */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
          Simplified Abstract Service &ndash; Our Packages
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Choose from our tailored abstract writing packages designed to meet a range of research needs from student projects and internal reports to grant proposals and high-impact journal submissions. Each service is crafted by{' '}
          <Link href="/subject-matter-experts" className="text-blue-600 no-underline hover:no-underline">
            subject-matter experts
          </Link>{' '}
          to ensure clarity, accuracy, and submission-ready formatting.
        </p>
      </div>

      {/* 4 Package Cards */}
      <CommonPackages
        title="Simplified Abstract Service – Our Packages"
        description="Choose from our tailored abstract writing packages designed to meet a range of research needs from student projects and internal reports to grant proposals and high-impact journal submissions. Each service is crafted by subject-matter experts to ensure clarity, accuracy, and submission-ready formatting."
        packages={packagesData}
      />

      {/* Delivery and Pricing Callout Bar */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-2.5 px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
              $
            </span>
            <span>Starts from $ 200</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>5 days</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="/order-now"
          className="inline-block bg-[#033c2a] text-white hover:bg-[#02281c] font-bold text-xs sm:text-sm py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Check Pricing & Get a Quote
        </Link>
      </div>

    </section>
  );
}
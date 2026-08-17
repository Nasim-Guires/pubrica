'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const packagesData: PackageTier[] = [
  {
    letter: 'B',
    badgeSrc: '/images/editing-and-translation/basic-pacakge.png',
    badgeBg: 'bg-amber-100',
    badgeColor: 'text-amber-700 border-amber-300',
    cardHeaderBg: 'bg-[#d8e3e1]',
    title: 'Basic Package',
    idealFor: 'Thesis summaries, student submissions, internal reports',
    features: [
      'Unstructured abstract (150–200 words)',
      'Summary of objectives, methods, and results',
      'Up to 5 keywords',
      'No revisions',
    ],
    delivery: 'Delivery: 3 working days',
  },
  {
    letter: 'S',
    badgeSrc: '/images/publication-support/poster-preparation/S.png',
    badgeBg: 'bg-purple-100',
    badgeColor: 'text-purple-700 border-purple-300',
    cardHeaderBg: 'bg-[#e5d8eb]',
    title: 'Standard Package',
    idealFor: 'Academic journal submissions, repositories',
    features: [
      'Structured abstract (IMRaD or journal-specific)',
      'Domain expert writing',
      'Keyword optimization',
      '1 revision',
      'Formatting',
    ],
    delivery: 'Delivery: 4 working days',
  },
  {
    letter: 'P',
    badgeSrc: '/images/publication-support/responding-to-reviewers/pa-icons-.png',
    badgeBg: 'bg-red-100',
    badgeColor: 'text-red-700 border-red-300',
    cardHeaderBg: 'bg-[#ebd8bd]',
    title: 'Premium Package',
    idealFor: 'High-impact journals, research grants, conferences',
    features: [
      'Senior expert review',
      'Enhanced readability',
      'Keyword indexing support',
      '2 revisions',
      'Optional cover note for submission',
    ],
    delivery: 'Delivery: 5 working days',
  },
  {
    letter: 'E',
    badgeSrc: '/images/physician-writing-services/ELITE-LOGO.png',
    badgeBg: 'bg-pink-100',
    badgeColor: 'text-pink-700 border-pink-300',
    cardHeaderBg: 'bg-[#f4c8c5]',
    title: 'Express Add-On Package',
    idealFor: 'For urgent submissions (add-on to any package)',
    features: [
      '24-hour delivery',
      'Priority handling and quality check',
    ],
    delivery: 'Delivery: 24 hours (extra)',
  },
];

export default function AbstractServicePackages() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8 bg-slate-50">
      
      {/* Header Info */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
          Simplified Abstract Service &ndash; Our Packages
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Choose from our tailored abstract writing packages designed to meet a range of research needs from student projects and internal reports to grant proposals and high-impact journal submissions. Each service is crafted by{' '}
          <Link href="#" className="text-sky-600 hover:underline">
            subject-matter experts
          </Link>{' '}
          to ensure clarity, accuracy, and submission-ready formatting.
        </p>
      </div>

      {/* 4 Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative">
        {packagesData.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Card Header */}
              <div className={`${pkg.cardHeaderBg} p-5 relative flex items-center gap-3`}>
                <div className="relative w-9 h-9 shrink-0">
                  <Image src={pkg.badgeSrc} alt={pkg.title} fill className="object-contain" sizes="36px" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {pkg.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                    <span className="text-teal-600">&rarr;</span> Ideal For:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                    {pkg.idealFor}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                    <span className="text-teal-600">&rarr;</span> Features:
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-slate-600 list-disc list-inside">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="leading-tight">
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card Footer Delivery Time */}
            <div className="p-5 pt-0">
              <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1 border-t border-slate-100 pt-3">
                <span className="text-teal-600">&rarr;</span> {pkg.delivery}
              </p>
            </div>
          </div>
        ))}
      </div>

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
        <button className="bg-[#033c2a] text-white hover:bg-[#02281c] font-bold text-xs sm:text-sm py-3 px-8 rounded-full transition-colors shadow-md">
          Check Pricing & Get a Quote
        </button>
      </div>

    </section>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';

interface PackageTier {
    id: string;
    badge: string;
    badgeSrc: string;
    title: string;
    idealFor: string;
    includes: string[];
    format: string;
    turnaround: string;
    headerBg: string;
    cardBg: string;
    borderColor: string;
    badgeBg: string;
    badgeTextColor: string;
}

const packagesData: PackageTier[] = [
    {
        id: 'basic-package',
        badge: 'B',
        badgeSrc: '/images/editing-and-translation/basic-pacakge.png',
        title: 'Basic Package',
        idealFor: 'Individual researchers needing a simplified media summary for general outreach.',
        includes: [
            'One scientific news report (400–500 words)',
            'Audience: General public or science-interested readers',
            'Language editing by a native English editor',
            '1 round of revision',
        ],
        format: 'News article summary',
        turnaround: '5–7 business days',
        headerBg: 'bg-purple-100/70',
        cardBg: 'bg-purple-50/40',
        borderColor: 'border-purple-200',
        badgeBg: 'bg-amber-100',
        badgeTextColor: 'text-amber-800',
    },
    {
        id: 'standard-package',
        badge: 'S',
        badgeSrc: '/images/publication-support/poster-preparation/S.png',
        title: 'Standard Package',
        idealFor: 'Research teams or universities looking for media-ready summaries for websites and PR.',
        includes: [
            'One structured news report (600–700 words)',
            'Highlights and key messages section',
            'Aligned with journal media style (e.g., Nature, PLOS, Elsevier)',
            '2 rounds of revision',
        ],
        format: 'Press release + News story format',
        turnaround: '7 business days',
        headerBg: 'bg-[#d8e6d2]',
        cardBg: 'bg-[#f2f7f0]',
        borderColor: 'border-[#c1d7ba]',
        badgeBg: 'bg-amber-100',
        badgeTextColor: 'text-amber-800',
    },
    {
        id: 'premium-package',
        badge: 'P',
        badgeSrc: '/images/publication-support/responding-to-reviewers/pa-icons-.png',
        title: 'Premium Package',
        idealFor: 'Institutions, funded projects, or research groups with outreach and policy goals.',
        includes: [
            'One in-depth scientific news report (700–900 words)',
            'Custom-tailored for policymakers, journalists, or institutional communications',
            'Key messages, impact statement, and simplified abstract',
            'Media pitch draft for journal publishing + institutional news',
            'Optional summary graphic (at additional cost)',
        ],
        format: 'News article + PR release + web-ready HTML (on request)',
        turnaround: '7–10 business days',
        headerBg: 'bg-[#f4e2d2]',
        cardBg: 'bg-[#faf3ec]',
        borderColor: 'border-[#ebd1bb]',
        badgeBg: 'bg-rose-100',
        badgeTextColor: 'text-rose-800',
    },
];

export default function ScientificNewsReportPackages() {
    return (
        <section className="w-full bg-slate-50 text-slate-800 font-sans py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Scientific News Report Packages
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Pubrica's scientific news report solutions deliver accurate, concise, and reader-aligned summaries of current research, tailored for academic institutions, clinical departments, and research communication teams. We offer three service tiers to suit your dissemination strategy and target audience.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
                    {packagesData.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`rounded-2xl border ${pkg.borderColor} ${pkg.cardBg} flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div>
                                {/* Package Card Header */}
                                <div className={`p-4 border-b ${pkg.borderColor} ${pkg.headerBg} flex items-center justify-center gap-3`}>
                                    <span className={`relative w-8 h-8 rounded-full ${pkg.badgeBg} overflow-hidden shadow-sm`}>
                                        <Image src={pkg.badgeSrc} alt={pkg.title} fill className="object-contain" sizes="32px" />
                                    </span>
                                    <h3 className="text-lg font-bold text-[#033c2a]">
                                        {pkg.title}
                                    </h3>
                                </div>

                                {/* Package Card Body */}
                                <div className="p-5 sm:p-6 space-y-4">
                                    {/* Ideal For */}
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-700 leading-relaxed">
                                            <span className="font-bold text-slate-900">Ideal for: </span>
                                            {pkg.idealFor}
                                        </p>
                                    </div>

                                    {/* Includes List */}
                                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                                        <p className="text-xs font-bold text-slate-900">Includes:</p>
                                        <ul className="space-y-1.5">
                                            {pkg.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                                                    <span className="text-slate-400 mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Format & Turnaround Details */}
                                    <div className="space-y-1.5 pt-3 border-t border-slate-200/60 text-xs text-slate-700">
                                        <p>
                                            <span className="font-bold text-slate-900">Format: </span>
                                            {pkg.format}
                                        </p>
                                        <p>
                                            <span className="font-bold text-slate-900">Turnaround: </span>
                                            {pkg.turnaround}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Floating Banner Bar Over Bottom Center */}
                    <div className="md:col-span-3 mt-4 bg-white border border-slate-200 rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto w-full">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-800 text-sm font-semibold">
                                <div className="relative w-6 h-6">
                                    <Image src="/images/publication-support/journal-manuscript-formatting-services/dollar-sign.png" alt="" fill className="object-contain" sizes="24px" />
                                </div>
                                <span>Starts from <strong className="text-slate-900 font-bold">350</strong></span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-800 text-sm font-semibold">
                                <div className="relative w-6 h-6">
                                    <Image src="/images/publication-support/journal-manuscript-formatting-services/date.png" alt="" fill className="object-contain" sizes="24px" />
                                </div>
                                <span>7 days</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full sm:w-auto px-6 py-2.5 bg-[#0e3b2e] text-white text-xs font-bold rounded-lg hover:bg-emerald-900 transition-colors shadow-sm"
                        >
                            Check Pricing & Get a Quote
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
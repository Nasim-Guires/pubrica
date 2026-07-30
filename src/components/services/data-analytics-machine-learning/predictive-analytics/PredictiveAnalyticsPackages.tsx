'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';

interface PackageItem {
    id: string;
    badgeLetter: string;
    name: string;
    badgeBg: string;
    badgeColor: string;
    cardBg: string;
    headerBorder: string;
    textColor: string;
    idealFor: string;
    features: string[];
    timeline?: string;
}

const packagesData: PackageItem[] = [
    {
        id: 'basic',
        badgeLetter: 'B',
        name: 'Basic',
        badgeBg: 'bg-amber-100',
        badgeColor: 'text-amber-700',
        cardBg: 'bg-[#dce6e4]',
        headerBorder: 'border-slate-300',
        textColor: 'text-[#1c3a34]',
        idealFor: 'Researchers and small teams starting with predictive analysis.',
        features: [
            'Data cleaning and preprocessing',
            'Descriptive statistics and initial data exploration',
            'Simple predictive modeling (e.g., linear regression, decision trees)',
            'Basic visualization and reporting',
            'Guidance on interpreting results',
        ],
        timeline: '1 - 2 weeks',
    },
    {
        id: 'standard',
        badgeLetter: 'S',
        name: 'Standard',
        badgeBg: 'bg-purple-100',
        badgeColor: 'text-purple-700',
        cardBg: 'bg-[#e5d9eb]',
        headerBorder: 'border-purple-200',
        textColor: 'text-[#3d2352]',
        idealFor: 'Mid-sized research projects or business applications.',
        features: [
            'All features of the Basic Package',
            'Advanced predictive modeling (e.g., logistic regression, random forest, SVM)',
            'Feature selection and dimensionality reduction',
            'Model evaluation and validation',
            'Comprehensive reporting with actionable insights',
        ],
    },
    {
        id: 'advanced',
        badgeLetter: 'A',
        name: 'Advanced',
        badgeBg: 'bg-emerald-100',
        badgeColor: 'text-emerald-700',
        cardBg: 'bg-[#e7d8b8]',
        headerBorder: 'border-amber-200/80',
        textColor: 'text-[#483818]',
        idealFor: 'Complex research studies or enterprise-level predictive projects.',
        features: [
            'All features of the Standard Package',
            'Time-series forecasting and survival analysis',
            'Ensemble modeling and advanced machine learning techniques',
            'Hyperparameter tuning and cross-validation',
            'Publication-ready reports for journals or regulatory compliance',
        ],
    },
    {
        id: 'custom',
        badgeLetter: 'C',
        name: 'Custom',
        badgeBg: 'bg-sky-100',
        badgeColor: 'text-sky-700',
        cardBg: 'bg-[#fcdede]',
        headerBorder: 'border-rose-200',
        textColor: 'text-[#5c2424]',
        idealFor: 'Projects with unique or highly specialized requirements.',
        features: [
            'Tailored predictive modeling based on your specific objectives',
            'Integration with your existing data systems and workflows',
            'Multi-source data analysis and predictive strategy consultation',
            'End-to-end support from data preparation to final deployment',
        ],
        timeline: '4+ weeks (project-dependent)',
    },
];

export default function PredictiveAnalyticsPackages() {
    return (
        <section className="py-16 px-4 bg-white font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-3">
                    Predictive Analytics Service – Our Packages
                </h2>
                <p className="text-xs md:text-sm text-gray-600 mb-10 max-w-5xl leading-relaxed">
                    At Pubrica, we offer comprehensive Predictive Analytics Services designed to help researchers, healthcare professionals, and businesses make data-driven decisions with confidence. Our packages are structured to cater to diverse needs, from exploratory data analysis to advanced predictive modeling.
                </p>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {packagesData.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`${pkg.cardBg} rounded-t-xl rounded-b-md shadow-xs flex flex-col overflow-hidden border border-black/5`}
                        >
                            {/* Card Header Top */}
                            <div className={`bg-white/75 backdrop-blur-xs py-4 px-5 flex items-center gap-3 border-b ${pkg.headerBorder}`}>
                                <div
                                    className={`w-9 h-9 rounded-full ${pkg.badgeBg} ${pkg.badgeColor} flex items-center justify-center font-bold text-base shadow-xs shrink-0`}
                                >
                                    {pkg.badgeLetter}
                                </div>
                                <h3 className={`text-lg font-bold ${pkg.textColor}`}>
                                    {pkg.name}
                                </h3>
                            </div>

                            {/* Card Content Body */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-5 text-xs md:text-sm">
                                    {/* Ideal For */}
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-800 font-bold mt-0.5 text-base leading-none">
                                            ➔
                                        </span>
                                        <p className="text-slate-800 font-medium leading-tight">
                                            <strong className="font-bold">Ideal For:</strong> {pkg.idealFor}
                                        </p>
                                    </div>

                                    {/* Includes List */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 font-bold text-slate-800">
                                            <span className="text-base leading-none">➔</span>
                                            <span>Includes:</span>
                                        </div>

                                        <ul className="space-y-2.5 pl-6 list-disc text-slate-700 leading-snug">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="marker:text-slate-800">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Optional Timeline Footer */}
                                {pkg.timeline && (
                                    <div className="pt-2 flex items-center gap-2 text-xs md:text-sm font-bold text-slate-800 border-t border-black/5">
                                        <span className="text-base leading-none">➔</span>
                                        <span>Timeline: {pkg.timeline}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <GetFreeQuoteButton/>
        </section>
    );
}
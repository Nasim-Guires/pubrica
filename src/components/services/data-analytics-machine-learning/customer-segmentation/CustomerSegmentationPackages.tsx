'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';
import Image from 'next/image';

interface PackageItem {
    id: string;
    badgeLetter?: string;
    badgeSrc: string;
    badgeBg: string;
    title: string;
    subtitle: string;
    topBarBg: string;
    cardBg: string;
    textColor: string;
    idealFor: string;
    includes: string[];
    delivery: string;
}

const packagesData: PackageItem[] = [
    {
        id: 'basic',
        badgeSrc: '/images/editing-and-translation/basic-pacakge.png',
        badgeBg: 'bg-amber-100 text-amber-700 border-amber-300',
        title: 'Basic',
        subtitle: 'Segment Starter',
        topBarBg: 'bg-slate-300',
        cardBg: 'bg-slate-200/80',
        textColor: 'text-slate-900',
        idealFor: 'Small businesses or startups looking to understand their customer base.',
        includes: [
            'Analysis of up to 5,000 customer records',
            'Segmentation based on basic demographics (age, gender, location)',
            'Simple behavioral insights (purchase frequency, product preference)',
            'Visual segmentation map (PDF)',
            'One consultation session',
        ],
        delivery: '1–2 weeks',
    },
    {
        id: 'standard',
        badgeSrc: '/images/publication-support/poster-preparation/S.png',
        badgeBg: 'bg-amber-100 text-amber-700 border-amber-300',
        title: 'Standard',
        subtitle: 'Growth Segments',
        topBarBg: 'bg-purple-300',
        cardBg: 'bg-purple-200/70',
        textColor: 'text-purple-950',
        idealFor: 'Medium-sized businesses seeking deeper insights.',
        includes: [
            'Analysis of up to 50,000 customer records',
            'Demographic + behavioral segmentation',
            'Psychographic insights (interests, lifestyle, preferences)',
            'Customer value scoring & priority segment identification',
            'Interactive segmentation dashboard',
            'Two consultation sessions for strategy recommendations',
        ],
        delivery: '2–3 weeks',
    },
    {
        id: 'premium',
        badgeSrc: '/images/editing-and-translation/translation-with-editing/pro.webp',
        badgeBg: 'bg-amber-100 text-amber-700 border-amber-300',
        title: 'Premium',
        subtitle: 'Strategic Segmentation',
        topBarBg: 'bg-amber-300',
        cardBg: 'bg-[#d8c399]/70',
        textColor: 'text-amber-950',
        idealFor: 'Enterprises aiming to optimize marketing and product strategy.',
        includes: [
            'Analysis of unlimited customer records',
            'Advanced demographic, behavioral, and psychographic segmentation',
            'Predictive analytics for future customer behavior',
            'Segment-specific targeting recommendations',
            'Full interactive dashboard with filters and drill-down capabilities',
            'Detailed report with actionable insights',
            'Up to five consultation sessions for strategic planning',
        ],
        delivery: '4–6 weeks',
    },
];

export default function CustomerSegmentationPackages() {
    return (
        <section className="w-full bg-white py-16 px-4 font-sans text-slate-800">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Customer Segmentation Service – Our Packages
                    </h2>
                    <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
                        Unlock the power of your customer data with Pubrica’s customer segmentation services. Turn complex information into clear, actionable insights to drive growth, optimize marketing, and enhance customer engagement.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packagesData.map((pkg) => (
                        <div key={pkg.id} className="flex flex-col rounded-lg overflow-hidden">
                            {/* Header Card */}
                            <div className="bg-white p-5 border border-slate-100 rounded-t-lg shadow-sm">
                                <div className={`h-2.5 w-full rounded-full ${pkg.topBarBg} mb-4`} />
                                <div className="flex items-center gap-3">
                                    {/* Badge Circle */}
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image src={pkg.badgeSrc} alt={`${pkg.title} package`} fill className="object-contain" />
                                    </div>
                                    {/* Title & Subtitle */}
                                    <div>
                                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium">
                                            {pkg.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Body Card */}
                            <div
                                className={`flex-1 p-6 ${pkg.cardBg} ${pkg.textColor} rounded-b-lg space-y-5 text-sm`}
                            >
                                {/* Ideal For */}
                                <div>
                                    <div className="flex items-start gap-2 font-bold mb-1">
                                        <span className="text-base leading-none mt-0.5">➔</span>
                                        <span>Ideal For:</span>
                                    </div>
                                    <p className="pl-6 text-xs md:text-sm leading-relaxed opacity-90">
                                        {pkg.idealFor}
                                    </p>
                                </div>

                                {/* Includes List */}
                                <div>
                                    <div className="flex items-start gap-2 font-bold mb-2">
                                        <span className="text-base leading-none mt-0.5">➔</span>
                                        <span>Includes:</span>
                                    </div>
                                    <ul className="pl-6 space-y-2.5 text-xs md:text-sm leading-relaxed opacity-90">
                                        {pkg.includes.map((item, idx) => (
                                            <li key={idx} className="list-none relative pl-0">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Delivery */}
                                <div className="pt-2">
                                    <div className="flex items-center gap-2 font-bold">
                                        <span className="text-base leading-none">➔</span>
                                        <span>
                                            Delivery: <span className="font-normal">{pkg.delivery}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <GetFreeQuoteButton/>
        </section>
    );
}
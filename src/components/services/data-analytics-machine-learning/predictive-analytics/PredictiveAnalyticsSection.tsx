'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Link from 'next/link';

interface ReasonItem {
    id: string;
    title: string;
    description: string;
}

const reasonsData: ReasonItem[] = [
    {
        id: 'informed-decision',
        title: 'Informed Decision-Making',
        description:
            'By anticipating future trends and outcomes, businesses and organizations can make more strategic decisions. Imagine being able to predict customer churn (when a customer stops using your service) or equipment failure before it happens. This allows for proactive measures to retain customers or prevent costly downtime.',
    },
    {
        id: 'risk-management',
        title: 'Risk Management',
        description:
            'Predictive analytics helps identify and mitigate potential risks. For example, financial institutions can use it to detect fraudulent transactions, while healthcare providers can predict the spread of diseases.',
    },
    {
        id: 'optimization-efficiency',
        title: 'Optimization and Efficiency',
        description:
            'Predictive models can optimize processes and resource allocation. Businesses can forecast demand and optimize inventory levels, or predict equipment maintenance needs to avoid disruptions.',
    },
    {
        id: 'personalized-experiences',
        title: 'Personalized Experiences',
        description:
            'Predictive analytics allows for personalization and customization. Retailers can use it to recommend products to customers based on their past purchases and browsing behavior.',
    },
    {
        id: 'innovation-competitive-advantage',
        title: 'Innovation and Competitive Advantage',
        description:
            'Predictive analytics empowers organizations to identify new opportunities and develop innovative products and services. By understanding customer needs and market trends, businesses can stay ahead of the competition.',
    },
];

export default function PredictiveAnalyticsSection() {
    const [activeReason, setActiveReason] = useState<string>('');

    return (
        <div className="w-full bg-white font-sans text-slate-800">
            {/* ========================================================= */}
            {/* HERO BANNER SECTION                                       */}
            {/* ========================================================= */}
            <HeroBanner
                title="Predictive Analytics"
                description="Our data scientists use machine learning techniques to evaluate historical and real-time data to analyse and identify trends or red flags that may lead to improved diagnoses and treatment."
                headingAs="h1"
            />

            {/* ========================================================= */}
            {/* MAIN OVERVIEW & KEY APPLICATIONS                          */}
            {/* ========================================================= */}
            <section className="py-7 px-4 max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-2 leading-tight">
                    Expert Predictive Analytics Services for Research, Clinical, and Business Insights
                </h2>

                <p className="text-sm md:text-base font-medium text-emerald-800 mb-6">
                    Determining future performance based on current and historical data
                </p>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8 max-w-5xl">
                    <Link
                        href="/academy/predictive-analysis/predictive-analysis-in-research/"
                        className="!text-blue-600 no-underline"
                    >
                        Predictive analytics
                    </Link>{' '}
                    uses statistical modeling, machine learning, and advanced data science techniques to predict future outcomes, trends, and facilitate evidence-based decision-making. At Pubrica, we combine domain expertise with cutting-edge analytical tools to help researchers, clinicians, and businesses uncover patterns in data and forecast future possibilities with precision.
                </p>

                {/* Content & Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h3 className="text-lg font-bold text-slate-800">
                            Scientific Predictive Analytics
                        </h3>

                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Our scientific predictive analytics solutions support healthcare providers, payers, and researchers by offering actionable insights for improved operations, diagnostics, and treatment. We specialize in healthcare predictive analytics, medical predictive analytics, pharmaceutical predictive analytics, and epidemiology predictive analytics, providing a full spectrum of predictive modeling for research, clinical, and business applications.
                        </p>

                        <div className="pt-2">
                            <p className="text-xs md:text-sm font-bold text-slate-800 mb-3">
                                Key applications include:
                            </p>

                            <ul className="space-y-2.5 text-xs md:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Aiding diagnosis through predictive modeling</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Personalized medicine predictive analytics for individualized treatment plans</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Advising on surgical risk based on patient-specific predictive models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Optimizing elective healthcare processes using advanced analytics</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Epidemiology predictive analytics to assess and mitigate population-level health risks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-base leading-none">•</span>
                                    <span>Pharmaceutical predictive analytics for drug development, trial outcomes, and market insights</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    {/* Right Offset Image Frame */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md h-[280px] md:h-[320px]">
                            {/* Background dark frame container offset */}
                            <div className="absolute top-4 left-4 w-full h-full rounded-2xl" />
                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
                                <Image
                                    src="/images/data-analytics-machine-learning/predictive-analytics/poster-presentation-1-1.webp"
                                    alt="Predictive analytics laptop dashboard displaying charts"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION: WHY IS PREDICTIVE ANALYTICS IMPORTANT?           */}
            {/* ========================================================= */}
            <section className="py-7 px-4 bg-slate-50/50 border-t border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-1">
                        Why is Predictive Analytics Important?
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mb-10">
                        Predictive analytics is important for several reasons:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Decorative Image Collage */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-sm h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                                <Image
                                    src="/images/data-analytics-machine-learning/predictive-analytics/Why-is-Predictive-Analytics-Important.webp"
                                    alt="Why is Predictive Analytics Important"
                                    fill
                                    className="object-cover"
                                    sizes="300px"
                                />
                            </div>
                        </div>

                        {/* Right Accordion List */}
                        <div className="lg:col-span-7 space-y-1">
                            {reasonsData.map((item) => {
                                const isOpen = activeReason === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className="border-b border-slate-300 transition-colors"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveReason(isOpen ? '' : item.id)
                                            }
                                            className="w-full py-3.5 flex items-center justify-start gap-3 text-left focus:outline-none group"
                                        >
                                            <span className="text-slate-600 font-medium text-sm leading-none">
                                                {isOpen ? '–' : '+'}
                                            </span>
                                            <span
                                                className={`text-sm md:text-base font-bold transition-colors ${isOpen ? 'text-[#1a3832]' : 'text-slate-700 group-hover:text-[#1a3832]'
                                                    }`}
                                            >
                                                {item.title}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="pb-4 pl-6 pr-2">
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
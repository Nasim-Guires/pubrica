'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

const whatWeDoItems: AccordionItem[] = [
    {
        id: 'expert-news-writing',
        title: 'Expert News Writing',
        content:
            'We are science communicators with experience and expertise in developing news reports that highlight the significance and impact of your research. Our work entails breaking down complex information into concise content that encompasses your research discoveries.',
    },
    {
        id: 'engagement-outreach',
        title: 'Engagement and Outreach',
        content:
            'Scientific news reports are an excellent medium for increasing the visibility and understanding of your work. By presenting your research in a format that is engaging and easy to understand, we help you reach not only the academic community but also the general public.',
    },
    {
        id: 'professional-collaboration',
        title: 'Professional Collaboration',
        content:
            'We work closely with you to ensure that every news report accurately reflects your research while making it interesting and relevant to a broad audience. This collaborative approach ensures that the final product is both scientifically accurate and newsworthy.',
    },
    {
        id: 'customized-content-delivery',
        title: 'Customized Content Delivery',
        content:
            'Each news report is tailored to suit the specific needs of different media outlets, whether it’s online platforms, print media, or broadcast. We adapt the style and content according to the target audience and publication requirements.',
    },
    {
        id: 'enhanced-impact-citations',
        title: 'Enhanced Impact and Citations',
        content:
            'By broadening the reach of your research through scientific news reports, you increase the potential for citations and foster opportunities for collaboration and funding. ',
    },
];

export default function ScientificNewsReportServices() {
    // Set initial state to null so NO card/accordion is open by default
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full bg-white text-slate-800 font-sans">

            {/* 1. Top Hero Header */}
            <section className="w-full bg-[#033c2a] text-white py-6 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Scientific News Report
                    </h1>
                    <div className="max-w-3xl mx-auto border border-emerald-500/40 bg-emerald-950/30 p-4 rounded-lg">
                        <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                            Pubrica's Scientific News Report service transforms your manuscript into a press release tailored for media exposure, enhancing your prospects for coverage and manuscript citations.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#033c2a] leading-snug">
                            A scientific news report involves the transformation of your manuscript into a media-ready news story to boost your chances of coverage and manuscript citations.
                        </h2>

                        <p className="text-sm sm:text-base font-medium text-emerald-900">
                            Transform your research into engaging news that resonates with the research community.
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Effective media coverage can significantly enhance your research. It is one of the most effective ways to expand the reach and accrue citations.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                                Key Features of the Service:
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                                    <span>Shareable abstracts</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                                    <span>Highlighting unique aspects of the research</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                                    <span>Review by a native English language expert</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                                    <span>A media-ready press release</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Intro Hero Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-64 sm:h-72 bg-emerald-900 rounded-2xl overflow-hidden p-2 shadow-lg">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/research-impact/scientific-news-report/scientific-news-report-involves-the-transformation-of-your-manuscript.webp"
                                    alt="Researcher preparing scientific news story"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. What We Do Accordion Section */}
            <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
                <div className="space-y-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#033c2a]">
                        What We Do
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                        Pubrica's{' '}
                        <Link href="/services/research-impact/scientific-news-report" className="text-blue-600 font-medium no-underline hover:no-underline">
                            scientific news report services
                        </Link>{' '}
                        provide the complete solution needed to change complex research findings into clear, attractive news reports. Our service is designed to make your scientific discoveries accessible and appealing to a wider audience, including the general public, journalists, and fellow researchers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Compound Collage Images */}
                    <div className="lg:col-span-5 relative flex justify-center py-4">
                        <div className="relative w-full max-w-sm h-72">
                            <div className="absolute top-0 left-0 w-3/5 h-48 rounded-xl overflow-hidden shadow-md border-2 border-white z-10">
                                <Image
                                    src="/images/research-impact/scientific-news-report/What-We-Do.png"
                                    alt="Doctor writing report"
                                    fill
                                    sizes="300px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3/5 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white z-20 hidden" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Accordion List - Default Closed */}
                    <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                        {whatWeDoItems.map((item, index) => {
                            const isOpen = openAccordionIndex === index;
                            return (
                                <div key={item.id} className="py-3.5">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-emerald-800 transition-colors flex items-center gap-2">
                                            <span className="text-slate-400 font-normal">
                                                {isOpen ? <Minus className="w-4 h-4 text-emerald-600" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                            {item.title}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="mt-3 pl-6 pr-2 text-xs sm:text-sm text-slate-600 leading-relaxed transition-all">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Footer Note */}
                <p className="mt-10 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                    Utilize Pubrica's Scientific news report services to effectively communicate your research findings to a global audience. Contact us today to learn how we can assist you in crafting compelling news reports that promote your scientific work and enhance its impact.
                </p>
            </section>

        </div>
    );
}
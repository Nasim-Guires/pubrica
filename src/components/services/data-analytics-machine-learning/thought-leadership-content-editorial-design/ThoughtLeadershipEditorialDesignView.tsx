'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- DATA STRUCTURES ---

interface OfferCard {
    title: string;
    borderColor: string;
    points: string[];
}

// --- DATA DEFINITIONS ---

const offerCardsData: OfferCard[] = [
    {
        title: 'Strategic Content Development',
        borderColor: 'border-l-amber-400',
        points: [
            'Creation of research-backed whitepapers, opinion pieces, and expert commentaries.',
            'Tailored content for academic journals, professional networks, and industry platforms.',
            'Evidence-driven storytelling that aligns with your organizational objectives.',
        ],
    },
    {
        title: 'Editorial Design & Visual Communication',
        borderColor: 'border-l-purple-500',
        points: [
            'Professionally crafted layouts for reports, publications, and digital content.',
            'Infographics, tables, and visual summaries to simplify complex data.',
            'Design cohesion that enhances readability and reinforces messaging.',
        ],
    },
    {
        title: 'Brand & Voice Integration',
        borderColor: 'border-l-orange-400',
        points: [
            'Consistent tone and messaging across all content platforms.',
            'Alignment of brand values with thought leadership communication.',
            'Adaptive editorial support for both print and digital publications.',
        ],
    },
];

export default function ThoughtLeadershipEditorialDesignView() {
    return (
        <main className="w-full bg-white text-slate-800 font-sans pb-24">

            {/* ==================== 1. HERO BANNER ==================== */}
            <section className="bg-[#033c2a] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-slate-300/40 p-8 sm:p-12 rounded-sm space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        Thought Leadership Content &amp; Editorial Design
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Pubrica offers thought leadership content creation and editorial design services, crafting engaging narratives and visually appealing layouts to elevate your brand and captivate your audience.
                    </p>
                </div>
            </section>


            {/* ==================== 2. OVERVIEW & FEATURED LIST SECTION ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a] leading-tight">
                    Position Your Brand as an Industry Leader with Strategic Content &amp; Engaging Editorial Design
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">

                    {/* Left Column: Descriptive Text & Bullet Points */}
                    <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                            At Pubrica, we understand that thought leadership content writing is more than sharing insights about establishing authority, fostering trust, and creating impact. Our Thought Leadership Content &amp; Editorial Design services are designed to help researchers, healthcare professionals, and organizations communicate their expertise effectively, reaching the right audience with clarity and credibility.
                        </p>

                        <p>
                            Our{' '}
                            <Link href="/subject-matter-experts" className="text-sky-600 hover:underline font-medium">
                                subject matter experts
                            </Link>{' '}
                            create curated editorial content creation services to translate rich insights into concrete growth. Our experts create unique content based on the audience. Our thought leadership content support includes:
                        </p>

                        <ul className="space-y-3 pt-1 pl-1">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Executive Reports for Investors</span>
                                    <span className="text-slate-600"> &ndash; Concise, data-driven insights to support informed decision-making.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Strategic Reports for Decision Making</span>
                                    <span className="text-slate-600"> &ndash; Actionable intelligence for business and research strategies.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">White Papers</span>
                                    <span className="text-slate-600"> &ndash; In-depth research-backed content to establish expertise and influence industry discussions.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Blogs &amp; Articles</span>
                                    <span className="text-slate-600"> &ndash; Engaging and authoritative content that communicates complex ideas clearly.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Ghost Writing Services</span>
                                    <span className="text-slate-600"> &ndash; Professional writing on behalf of executives, researchers, and thought leaders.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Customized Content &amp; Reports</span>
                                    <span className="text-slate-600"> &ndash; Tailored solutions to meet unique communication objectives.</span>
                                </div>
                            </li>
                        </ul>

                        <p className="pt-3">
                            At Pubrica, our{' '}
                            <Link href="/services/medical-writing" className="text-sky-600 hover:underline font-medium">
                                medical writing
                            </Link>{' '}
                            associates engage in conferences and forums, offering fresh insights on clinical, medical, and regulatory topics. We provide support for both secondary desk-based{' '}
                            <Link href="/services/research-services/literature-review-and-gap" className="text-sky-600 hover:underline font-medium">
                                literature reviews
                            </Link>{' '}
                            and white papers derived from primary sources like interviews and surveys. Our experienced team aids in all stages of report development, from storyboard creation to editorial design and promotion.
                        </p>
                    </div>

                    {/* Right Column: Hero Graphic Image */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2 lg:pt-0">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-2 bg-[#033c2a] rounded-2xl transform -rotate-1 opacity-90" />
                            <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-lg bg-slate-100 aspect-[4/3]">
                                <Image
                                    src="/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Strategic-Content-Engaging-Editorial-Design.webp"
                                    alt="Team surrounding table discussing strategy"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ==================== 3. WHAT WE OFFER CARDS SECTION ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                    What We Offer
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {offerCardsData.map((card, idx) => (
                        <div
                            key={idx}
                            className={`border border-slate-200 border-l-4 ${card.borderColor} p-6 rounded-r-md bg-white shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow`}
                        >
                            <div className="space-y-4">
                                <h3 className="text-base font-bold text-slate-900 leading-snug">
                                    {card.title}
                                </h3>
                                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                                    {card.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2">
                                            <span className="text-slate-900 font-bold leading-none">&bull;</span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
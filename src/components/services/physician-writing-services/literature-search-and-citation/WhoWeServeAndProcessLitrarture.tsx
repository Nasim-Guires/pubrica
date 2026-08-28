'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

export default function WhoWeServeAndProcessLiterature() {
    /* ------------------- DATA ARRAYS ------------------- */

    const whoWeServeCards = [
        {
            id: 1,
            title: 'PhD Scholars & Academic Researchers',
            bullets: [
                'Systematic and narrative literature reviews',
                'Reference sourcing for theses, dissertations, and journal submissions',
                'Support with reviewer comments requiring additional citations',
            ],
            imageUrl: '/images/publication-support/plagiarism-services/PhD-Scholars-and-Doctoral-Candidates.jpg',
        },
        {
            id: 2,
            title: 'Clinical & Healthcare Professionals',
            bullets: [
                'Evidence summaries for clinical decision making',
                'Literature support for medical research & guidelines',
                'Publication-ready citation formatting',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Clinical-Healthcare-Professionals.jpg',
        },
        {
            id: 3,
            title: 'Product Development & R&D Teams',
            bullets: [
                'Scientific validation for product claims',
                'Technology and competitor research reviews',
                'Patent & safety literature sourcing',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Product-Development-RD-Teams.jpg',
        },
        {
            id: 4,
            title: 'Universities & Institutions',
            bullets: [
                'Institutional research database support',
                'Faculty publication assistance',
                'Curriculum reference research',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Universities-Institutions.jpg',
        },
        {
            id: 5,
            title: 'Global Scholars & International Students',
            bullets: [
                'Cross-language reference compilation',
                'Academic integrity & anti-plagiarism checks',
                'Formatting according to APA, Vancouver, IEEE, etc.',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Global-Scholars-International-Students.jpg',
        },
    ];

    const processSteps = [
        {
            step: 1,
            title: 'LITERATURE SEARCH',
            desc: 'The specialist will search databases to discover relevant references and craft concise summaries.',
            badgePosition: 'top',
        },
        {
            step: 2,
            title: 'REFERENCE CITATION',
            desc: 'The professional will make slight adjustments to the manuscript to incorporate pertinent in-text citations.',
            badgePosition: 'bottom',
        },
        {
            step: 3,
            title: 'AFTER-SALES SUPPORT',
            desc: 'At Pubrica, we provide support for two revision rounds and can allow an additional five revisions upon request.',
            badgePosition: 'top',
        },
    ];

    const packages = [
        {
            id: 'starter',
            badgeLetter: 'S',
            badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            headerBg: 'bg-[#d8e3df]',
            cardBg: 'bg-[#e2e9e6]',
            title: 'Starter',
            subtitle: 'Basic Citation Support',
            idealFor: 'Short manuscripts, essays, or case reports',
            includes: [
                'Targeted literature search (up to 10 references)',
                'Citation insertion and formatting (APA, Vancouver, etc.)',
                'Reference list compilation',
                'One round of formatting revision',
            ],
            turnaround: '3–4 working days',
            deliverables: '.docx file with citations + formatted reference list',
        },
        {
            id: 'standard',
            badgeLetter: 'S',
            badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
            headerBg: 'bg-[#e1d3e8]',
            cardBg: 'bg-[#e8dce2]',
            title: 'Standard',
            subtitle: 'Structured Literature Review',
            idealFor: 'Journal articles, postgraduate theses',
            includes: [
                'Domain-specific literature search (15–25 recent and relevant sources)',
                'Summary matrix/table of key articles',
                'In-text citation integration and formatting',
                'Reference list creation in the target journal style',
                'Journal guideline alignment',
            ],
            turnaround: '5–7 working days',
            deliverables: 'Summary document + citation-integrated manuscript',
        },
        {
            id: 'advanced',
            badgeLetter: 'A',
            badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
            headerBg: 'bg-[#ebdec8]',
            cardBg: 'bg-[#efe5d4]',
            title: 'Advanced',
            subtitle: 'Systematic/Narrative Review Support',
            idealFor: 'Review articles, PhD literature reviews, grant proposals',
            includes: [
                'Comprehensive multi-database search (PubMed, Scopus, Embase, etc.)',
                'Search protocol documentation (PRISMA, inclusion/exclusion criteria)',
                'Literature synthesis and a thematically organized summary',
                'EndNote/Mendeley reference library (if requested)',
                'Journal-compliant citation formatting',
            ],
            turnaround: '7–10 working days',
            deliverables: 'Structured review summary + search log + citations',
        },
        {
            id: 'premium',
            badgeLetter: 'P',
            badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
            headerBg: 'bg-[#fad7d7]',
            cardBg: 'bg-[#fbe1e1]',
            title: 'Premium',
            subtitle: 'End-To-End Citation & Journal Preparation',
            idealFor: 'Manuscripts targeting high-impact journals',
            includes: [
                'Full literature search across databases (30+ curated references)',
                'Evidence synthesis linked to manuscript sections',
                'Detailed citation audit and style compliance',
                'Reviewer support (reference cross-verification)',
                'Plagiarism screening report (Turnitin/iThenticate)',
                'Reference file delivery (Word + RIS format)',
            ],
            turnaround: '10–12 working days',
            deliverables: 'All formatted files + reference manager library + report',
        },
    ];

    const valueDeliverables = [
        {
            id: 1,
            title: 'A screened list of 50 published articles from validated databases',
            iconDesc: 'Database Network',
        },
        {
            id: 2,
            title: 'Best-suited subject area experts to help identify the most relevant literature for your study',
            iconDesc: 'Subject Experts',
        },
        {
            id: 3,
            title: 'Expert views regarding the novelty of your research from published authors with advanced degrees',
            iconDesc: 'Expert Review',
        },
        {
            id: 4,
            title: 'Supporting rationale by experts on how the curated literature will strengthen your research',
            iconDesc: 'Research Rationale',
        },
    ];

    return (
        <div className="w-full bg-white text-gray-800 font-sans antialiased overflow-x-hidden">

            {/* ---------------- SECTION 1: WHO WE SERVE ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3c36] mb-3">
                    Who We Serve
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-5xl leading-relaxed">
                    At Pubrica, we provide literature search and citation services that are trusted by a range of clients across academia, industry, and health sectors. Whether you are developing a thesis, launching a product, or validating an ingredient claim, we provide precise and evidence-based support specific to your needs.
                </p>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {whoWeServeCards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer bg-black shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image & Default Title Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-5">
                                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Hover Overlay - Solid Black BG with White Text */}
                            <div className="absolute inset-0 bg-black p-5 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto overflow-y-auto">
                                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                                    {card.title}
                                </h3>
                                <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-200">
                                    {card.bullets.map((bullet, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- SECTION 2: HOW IT WORKS ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
                    How a Patient Education Content Development Service Works
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#1c4d50] mb-3">
                    Our step-by-Step Process
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-10 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
                    With Pubrica&apos;s patient education content service, our medical experts and{' '}
                    <span className="text-cyan-600 underline">scientific writing</span> team work together to develop clear,
                    accurate, and guideline-compliant educational materials that are tailored to specific patient needs and aligned with healthcare communication standards.
                </p>

                {/* Process Flow Timeline Container */}
                <div className="relative max-w-5xl mx-auto min-h-[320px] flex flex-col justify-center">

                    {/* Continuous Teal Horizontal Line in Background (Desktop Only) */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#008ba3] -translate-y-1/2 z-0 hidden md:block" />

                    {/* 3 Step Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10 items-stretch md:items-center">

                        {/* STEP 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-lg shadow-md mb-2">
                                1
                            </div>
                            <div className="w-0.5 h-6 bg-[#008ba3] mb-1 hidden md:block" />

                            <div className="w-full bg-[#f9f9f9] hover:bg-[#525252] text-gray-800 hover:text-white p-6 rounded shadow-md border border-gray-200 transition-colors duration-300 min-h-[220px] flex flex-col items-center justify-center text-center group cursor-pointer">
                                <div className="mb-3 text-gray-600 group-hover:text-gray-300 transition-colors">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-[#143234] group-hover:text-white transition-colors">
                                    {processSteps[0].title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                    {processSteps[0].desc}
                                </p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="flex flex-col items-center md:flex-col-reverse">
                            <div className="w-full bg-[#f9f9f9] hover:bg-[#525252] text-gray-800 hover:text-white p-6 rounded shadow-md border border-gray-200 transition-colors duration-300 min-h-[220px] flex flex-col items-center justify-center text-center group cursor-pointer">
                                <div className="mb-3 text-gray-600 group-hover:text-gray-300 transition-colors">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-[#143234] group-hover:text-white transition-colors">
                                    {processSteps[1].title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                    {processSteps[1].desc}
                                </p>
                            </div>

                            <div className="w-0.5 h-6 bg-[#008ba3] mt-1 hidden md:block" />
                            <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-lg shadow-md mt-2 md:mt-2 mb-2 md:mb-0 order-first md:order-last">
                                2
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-lg shadow-md mb-2">
                                3
                            </div>
                            <div className="w-0.5 h-6 bg-[#008ba3] mb-1 hidden md:block" />

                            <div className="w-full bg-[#f9f9f9] hover:bg-[#525252] text-gray-800 hover:text-white p-6 rounded shadow-md border border-gray-200 transition-colors duration-300 min-h-[220px] flex flex-col items-center justify-center text-center group cursor-pointer">
                                <div className="mb-3 text-gray-600 group-hover:text-gray-300 transition-colors">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 010-7.072m0 0l2.829 2.829m-4.243-2.829L3 3m0 0l2.829 2.829" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-[#143234] group-hover:text-white transition-colors">
                                    {processSteps[2].title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                    {processSteps[2].desc}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------- SECTION 3: GREEN BANNER CTA ---------------- */}
            <section className="bg-[#0b3c2d] text-white py-8 sm:py-6 px-4 sm:px-6 lg:px-8 my-8">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-dashed border-emerald-400 bg-[#07281e] flex flex-col items-center justify-center text-center p-2">
                            <span className="text-[10px] font-bold text-emerald-300 leading-tight uppercase">
                                100% Satisfaction Guarantee
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            Speed up your Literature Review and Citation with Pubrica
                        </h2>
                        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Gain access to your dedicated literature and citation expert, who will systematically identify relevant sources and ensure precise referencing aligned with your research scope.
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <GetFreeQuoteButton/>
                    </div>
                </div>
            </section>



            {/* ---------------- SECTION 5: WHAT YOU GET ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143234] text-center mb-8 sm:mb-10">
                    What You Get with Pubrica&apos;s Scientific Literature Search Service
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {valueDeliverables.map((item) => (
                        <div
                            key={item.id}
                            className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-slate-50 hover:bg-black hover:text-white transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-lg cursor-pointer"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-slate-200 group-hover:bg-slate-800 rounded-lg border border-dashed border-gray-400 flex items-center justify-center p-1 transition-colors">
                                <span className="text-[10px] text-gray-600 group-hover:text-gray-300 text-center font-medium">
                                    {item.iconDesc}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-gray-100 transition-colors leading-relaxed pt-1">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- SECTION 6: SAMPLE WORK ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
                <div className="bg-[#f0faf6] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-emerald-100">
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-inner">
                            <Image
                                src="/images/physician-writing-services/literature-search-and-citation/Literature-Search-and-Citation-Service-Sample-Work.webp"
                                alt="Literature Search and Citation Service Sample Work"
                                fill
                                className="object-cover"
                                sizes="320px"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-[#143234] mb-3">
                                Literature Search and Citation Service Sample Work
                            </h2>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium px-8 py-2.5 rounded-full text-sm transition-colors shadow">
                                Discover More
                            </Link>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-lg sm:text-xl font-bold text-[#143234] mb-2">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Check out our literature search and citation samples created specifically to show domain relevance, accurate referencing styles, and adherence to journal submission formats.
                            </p>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium px-8 py-2.5 rounded-full text-sm transition-colors shadow">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------- SECTION 4: PACKAGES SECTION ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
                        Literature Search and Citation Packages
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                        Strengthen your manuscript with evidence-based literature and error-free citations tailored to your research scope and target journal.
                    </p>
                </div>

                {/* Responsive Grid for Packages (Stacks cleanly on Mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`rounded-t-xl overflow-hidden flex flex-col border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${pkg.cardBg}`}
                        >
                            {/* Header Box */}
                            <div className={`p-5 text-center ${pkg.headerBg} border-b border-gray-200/50`}>
                                <div className={`w-12 h-12 rounded-full border-2 ${pkg.badgeBg} flex items-center justify-center font-bold text-xl mx-auto mb-3 shadow-sm`}>
                                    {pkg.badgeLetter}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
                                <p className="text-xs text-gray-600 font-medium mt-1">{pkg.subtitle}</p>
                            </div>

                            {/* Package Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs sm:text-sm text-gray-700">

                                {/* Ideal For */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Ideal for:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600 leading-tight">{pkg.idealFor}</p>
                                </div>

                                {/* Includes List */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Includes:</span>
                                    </div>
                                    <ul className="pl-4 space-y-1.5 text-gray-600">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="leading-snug">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Turnaround */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Turnaround:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600">{pkg.turnaround}</p>
                                </div>

                                {/* Deliverables */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Deliverables:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600 leading-tight">{pkg.deliverables}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Banner */}
                <div className="mt-8 bg-[#c00000] text-white text-center py-3 rounded-md font-bold text-sm sm:text-base shadow">
                    Starts From $ 15 / Search
                </div>
            </section>
        </div>
    );
}
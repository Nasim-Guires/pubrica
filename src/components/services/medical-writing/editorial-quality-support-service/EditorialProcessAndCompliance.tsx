'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// --- Types & Data ---

// 1. Process Steps Data
interface Step {
    num: number;
    title: string;
    desc: string;
    iconSvg: React.ReactNode;
}

const stepsData: Step[] = [
    {
        num: 1,
        title: 'MANUSCRIPT SUBMISSION & EVALUATION',
        desc: 'You submit your manuscript, and our editorial team performs an initial assessment to identify language, structure, and formatting needs.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        num: 2,
        title: 'EXPERT EDITOR ASSIGNMENT',
        desc: 'We assign your manuscript to an SME with experience in your academic or scientific field for focused editing.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
    },
    {
        num: 3,
        title: 'LANGUAGE & STRUCTURAL EDITING',
        desc: 'The editor refines grammar, clarity, sentence flow, and logical structure while preserving the integrity of your scientific content.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        num: 4,
        title: 'JOURNAL FORMATTING & REFERENCING',
        desc: 'We format your manuscript as per the guidelines of your target journal, including references, figures, tables, and overall layout.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
    },
    {
        num: 5,
        title: 'QUALITY CHECK & AUTHOR REVISIONS',
        desc: 'A senior editor reviews the document for consistency and compliance. You’ll receive the edited version for feedback or revisions.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        num: 6,
        title: 'FINAL PROOFREADING & SUBMISSION SUPPORT',
        desc: 'A final proofreading ensures readiness for submission. If requested, we assist with cover letters, submission, and reviewer response.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

// 2. Compliance Categories Data
interface ComplianceCategory {
    id: string;
    title: string;
    items: {
        logoUrl: string;
        title: string;
        desc: string;
    }[];
}

const complianceData: ComplianceCategory[] = [
    {
        id: 'reporting-guidelines',
        title: 'Reporting Guidelines Based on Study Type',
        items: [
            {
                logoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80',
                title: 'Consolidated Standards of Reporting Trials – CONSORT',
                desc: 'For randomized controlled trials',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=300&q=80',
                title: 'Strengthening the Reporting of Observational Studies in Epidemiology – STROBE',
                desc: 'For observational studies',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=300&q=80',
                title: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses – PRISMA',
                desc: 'For systematic reviews and meta-analyses',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80',
                title: 'Case Report Guidelines – CARE',
                desc: 'Designed to improve the completeness and transparency of case reports',
            },
        ],
    },
    {
        id: 'ethical-standards',
        title: 'Ethical Research and Publication Standards',
        items: [
            {
                logoUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80',
                title: 'International Committee of Medical Journal Editors',
                desc: 'ICMJE Recommendations for manuscript preparation and ethics',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
                title: 'Committee on Publication Ethics',
                desc: 'COPE guidelines for publication integrity and author standards',
            },
        ],
    },
    {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        items: [
            {
                logoUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
                title: 'FDA (Food and Drug Administration)',
                desc: 'US regulatory standards compliance for medical dossiers',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
                title: 'EMA (European Medicines Agency)',
                desc: 'European regulatory guidelines for pharmaceutical products',
            },
            {
                logoUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80',
                title: 'Good Clinical Practice (GCP)',
                desc: 'International ethical and scientific quality standard for clinical trials',
            },
        ],
    },
];

// 3. Packages Data
interface EditorialPackage {
    id: string;
    badgeLetter: string;
    badgeBg: string;
    badgeTextColor: string;
    title: string;
    titleBg?: string;
    titleTextColor?: string;
    bodyBg: string;
    idealFor: string;
    includes: string[];
}

const packagesData: EditorialPackage[] = [
    {
        id: 'pkg-standard',
        badgeLetter: 'S',
        badgeBg: 'bg-[#fce5c8]',
        badgeTextColor: 'text-[#d97706]',
        title: 'Standard',
        bodyBg: 'bg-[#cfdedc]', // Sage Gray / Teal
        idealFor: 'Early-stage researchers looking for basic language and formatting checks.',
        includes: [
            'Language and grammar correction',
            'Spelling, punctuation, and syntax check',
            'Basic formatting based on journal guidelines',
        ],
    },
    {
        id: 'pkg-advanced',
        badgeLetter: 'A',
        badgeBg: 'bg-[#dcfce7]',
        badgeTextColor: 'text-[#16a34a]',
        title: 'Advanced',
        titleBg: 'bg-[#3b82f6]',
        titleTextColor: 'text-white',
        bodyBg: 'bg-[#e4d5e8]', // Soft Purple
        idealFor: 'Authors preparing manuscripts for mid- to high-tier journals.',
        includes: [
            'All services in the Standard Package',
            'Technical editing by subject matter experts (SMEs)',
            'In-depth journal formatting',
            'Figure, table, and reference styling',
        ],
    },
    {
        id: 'pkg-premium',
        badgeLetter: 'P',
        badgeBg: 'bg-[#e0e7ff]',
        badgeTextColor: 'text-[#4f46e5]',
        title: 'Premium',
        bodyBg: 'bg-[#dec8a5]', // Warm Tan / Gold
        idealFor: 'Researchers targeting Q1 or high-impact journals requiring end-to-end editorial support.',
        includes: [
            'All services in the Advanced Package',
            'Critical review and scientific feedback by PhD-level editors',
            'Manuscript structure and content enhancement',
        ],
    },
];

export default function EditorialProcessAndCompliance() {
    // All compliance accordions closed by default
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800 pb-20">

            {/* 1. TOP GREEN BANNER */}
            <section className="bg-[#052C28] text-white py-8 px-4 text-center">
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                    Enhance Your Editorial and Quality Standards with Pubrica
                </h1>
                <p className="text-xs md:text-sm text-gray-200">
                    Partner with our expert editorial team to deliver publication-ready, scientifically accurate, and journal-compliant manuscripts.
                </p>
            </section>

            {/* 2. STEP-BY-STEP PROCESS SECTION */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-lg md:text-xl font-bold text-[#0F3836] mb-2">
                        How The Editorial & Quality Support Service Works
                    </h2>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        Our Step-By-Step Process
                    </h3>
                    <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        At Pubrica, our editorial & quality support service follows a rigorous, structured workflow to ensure that your manuscript meets the highest standards of academic and scientific publishing. Here’s how our process works:
                    </p>
                </div>

                {/* 6 Step Columns with Interlocking Number Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-stretch">
                    {stepsData.map((step) => {
                        const isTopNumber = step.num % 2 !== 0; // Steps 1, 3, 5 top badge; 2, 4, 6 bottom badge

                        return (
                            <div
                                key={step.num}
                                className="group flex flex-col justify-between items-center relative"
                            >
                                {/* Badge Top */}
                                {isTopNumber && (
                                    <div className="w-9 h-9 rounded-full bg-[#008ba3] text-white font-bold text-sm flex items-center justify-center mb-2 z-10 shadow-sm">
                                        {step.num}
                                    </div>
                                )}

                                {/* Card Container: White default, Black on Cursor Hover */}
                                <div className="w-full flex-1 bg-white border border-gray-200 p-4 rounded-sm flex flex-col items-center text-center transition-all duration-300 group-hover:bg-[#2b2b2b] group-hover:border-[#2b2b2b] group-hover:shadow-lg">
                                    <div className="text-[#008ba3] group-hover:text-white mb-3 transition-colors">
                                        {step.iconSvg}
                                    </div>
                                    <h4 className="text-[11px] font-bold text-gray-800 group-hover:text-white mb-2 leading-snug uppercase tracking-tight transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-200 leading-relaxed transition-colors">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Badge Bottom */}
                                {!isTopNumber && (
                                    <div className="w-9 h-9 rounded-full bg-[#008ba3] text-white font-bold text-sm flex items-center justify-center mt-2 z-10 shadow-sm">
                                        {step.num}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. COMPLIANCE AND GUIDELINE STANDARDS SECTION */}
            <section className="max-w-5xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-lg md:text-xl font-bold text-[#0F3836] mb-2">
                        Our Compliance and Guideline Standards
                    </h2>
                    <p className="text-xs text-gray-600 max-w-3xl mx-auto">
                        At Pubrica, we strictly adhere to international editorial and publication standards to ensure the highest level of quality, transparency, and scientific integrity. Our services comply with:
                    </p>
                </div>

                {/* Accordions (All Closed by Default) */}
                <div className="space-y-4">
                    {complianceData.map((category) => {
                        const isOpen = openAccordion === category.id;

                        return (
                            <div key={category.id} className="border border-gray-200 rounded-sm overflow-hidden">
                                {/* Accordion Bar Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(category.id)}
                                    className="w-full bg-[#0a312f] text-white py-2.5 px-4 flex items-center gap-3 text-xs font-bold text-left hover:bg-[#072422] transition-colors"
                                >
                                    <span className="text-sm font-semibold">{isOpen ? '−' : '+'}</span>
                                    <span>{category.title}</span>
                                </button>

                                {/* Accordion Content Grid */}
                                {isOpen && (
                                    <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {category.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center hover:border-gray-400 transition-colors shadow-xs"
                                            >
                                                {/* Logo / Image Box */}
                                                <div className="relative w-24 h-12 mb-3">
                                                    <Image
                                                        src={item.logoUrl}
                                                        alt={`${item.title} logo standard`}
                                                        title={item.title}
                                                        fill
                                                        sizes="100px"
                                                        className="object-contain"
                                                    />
                                                </div>

                                                <h4 className="text-xs font-bold text-gray-800 mb-1 leading-snug">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 leading-normal">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. SAMPLE WORK & DOWNLOAD REPORT BANNER */}
            <section className="max-w-5xl mx-auto px-4 mt-12 mb-16">
                <div className="bg-[#f0f9f8] border border-[#d2ebe7] rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                    {/* Left Sample Graphic Image */}
                    <div className="md:col-span-4 relative h-56 rounded-md overflow-hidden shadow-sm border border-gray-200">
                        <Image
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                            alt="Quality Assurance report sample for medical writing"
                            title="Editorial Sample Work"
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                            <span className="text-white font-bold text-lg tracking-wider border-2 border-white px-3 py-1 text-center">
                                QUALITY ASSURANCE
                            </span>
                        </div>
                    </div>

                    {/* Right Action Buttons & Text */}
                    <div className="md:col-span-8 flex flex-col items-center text-center space-y-4">
                        <h3 className="text-sm font-bold text-gray-800">
                            Editorial & Quality Support Service Sample Work
                        </h3>

                        <button
                            type="button"
                            className="w-full max-w-sm bg-black hover:bg-gray-800 text-white font-semibold text-xs py-2 rounded-full transition-colors"
                        >
                            Discover More
                        </button>

                        <div className="pt-2">
                            <h4 className="text-xs font-bold text-gray-900 mb-1">
                                Download the full Report Now
                            </h4>
                            <p className="text-[11px] text-gray-600 max-w-lg leading-relaxed mb-4">
                                Discover our editorial support samples, meticulously edited to align with journal guidelines, author objectives, and scientific reporting standards, delivered on time and backed by peer-reviewed, validated content to ensure accuracy, clarity, and publication success.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="w-full max-w-sm bg-black hover:bg-gray-800 text-white font-semibold text-xs py-2 rounded-full transition-colors"
                        >
                            Discover More
                        </button>
                    </div>

                </div>
            </section>

            {/* 5. EDITORIAL & QUALITY SUPPORT SERVICE – OUR PACKAGES */}
            <section className="max-w-5xl mx-auto px-4 mt-8">
                <div className="mb-8">
                    <h2 className="text-lg md:text-xl font-bold text-[#0F3836] mb-2">
                        Editorial & Quality Support Service – Our Packages
                    </h2>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        At Pubrica, we offer flexible and comprehensive editorial support packages tailored to meet the diverse needs of researchers, clinicians, and academic authors. Each package ensures high-quality, publication-ready content with full compliance with journal and ethical standards.
                    </p>
                </div>

                {/* 3 Packages Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packagesData.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="rounded-t-lg overflow-hidden flex flex-col border border-gray-200 shadow-sm"
                        >
                            {/* White Header Top with Badge & Title */}
                            <div className="bg-white p-4 border-t-4 border-gray-300 flex items-center gap-3">
                                <div
                                    className={`w-8 h-8 rounded-full ${pkg.badgeBg} ${pkg.badgeTextColor} font-extrabold text-sm flex items-center justify-center shadow-xs`}
                                >
                                    {pkg.badgeLetter}
                                </div>
                                {pkg.titleBg ? (
                                    <span className={`${pkg.titleBg} ${pkg.titleTextColor} px-3 py-1 rounded-md text-sm font-bold`}>
                                        {pkg.title}
                                    </span>
                                ) : (
                                    <h3 className="text-base font-bold text-[#0F3836]">
                                        {pkg.title}
                                    </h3>
                                )}
                            </div>

                            {/* Colored Body */}
                            <div
                                className={`${pkg.bodyBg} p-5 flex-1 flex flex-col justify-between text-xs text-gray-800 space-y-4`}
                            >
                                {/* Ideal For */}
                                <div className="flex items-start gap-2">
                                    <span className="font-bold text-sm leading-none mt-0.5">➔</span>
                                    <p className="leading-snug">
                                        <span className="font-bold">Ideal For: </span>
                                        {pkg.idealFor}
                                    </p>
                                </div>

                                {/* Includes List */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2 font-bold">
                                        <span>➔</span>
                                        <span>Includes:</span>
                                    </div>
                                    <ul className="space-y-2 pl-4">
                                        {pkg.includes.map((item, idx) => (
                                            <li key={idx} className="leading-tight text-[11px]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
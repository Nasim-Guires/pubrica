'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- DATA TYPES & CONSTANTS ---

interface ServiceTypeRow {
    serviceType: string;
    idealFor: string;
    features: string[];
}

const serviceTypesData: ServiceTypeRow[] = [
    {
        serviceType: 'Research abstract writing, entry-level abstract',
        idealFor: 'Student projects, internal reports, non-peer-reviewed content',
        features: [
            'Unstructured abstract (150–200 words)',
            'Summary of objectives, methodology, and key findings',
        ],
    },
    {
        serviceType: 'Journal Submission-ready Abstract',
        idealFor: 'Submissions to academic journals and conferences',
        features: [
            'Structured (IMRaD or journal-specific format)',
            'Focus on precision and clarity for interdisciplinary audiences',
            'Keyword optimization for indexing',
        ],
    },
    {
        serviceType: 'Grant Proposal Abstract',
        idealFor: 'Abstract for funding application, proposal abstract writing',
        features: [
            'Concise and impactful abstract focusing on research goals and outcomes',
            'Tailored to grant body requirements, with emphasis on significance, innovation, and impact',
        ],
    },
    {
        serviceType: 'Systematic Review & PRISMA compliance Abstract',
        idealFor: 'Systematic reviews and meta-analyses',
        features: [
            'PRISMA-aligned structure',
            'Summarizes inclusion/exclusion criteria, data analysis, and findings',
            'Focus on clarity and reproducibility',
        ],
    },
    {
        serviceType: 'Medical abstract writing, clinical abstract services',
        idealFor: 'Medical research papers, clinical trials, epidemiological studies',
        features: [
            'Clear, structured summary of clinical data, results, and outcomes',
            'Focus on public health relevance and statistical significance',
            'Meets medical journal standards (e.g., The Lancet, BMJ)',
            'Keyword optimization for medical indexing',
        ],
    },
    {
        serviceType: 'Thesis abstract service, dissertation abstract writing',
        idealFor: 'PhD students or scholars submitting a thesis/dissertation',
        features: [
            'Comprehensive yet concise summary of entire research',
            'IMRaD format or as per university guidelines',
            'Focus on contribution, methodology, and findings',
        ],
    },
    {
        serviceType: 'Multilingual research abstracts, translated abstracts',
        idealFor: 'For global audiences',
        features: [
            'Simplified summaries translated into other languages for accessibility to non-English-speaking audiences.',
        ],
    },
    {
        serviceType: 'Executive Summaries',
        idealFor: 'For business or policy leaders',
        features: [
            'Tailored for decision-makers.',
            'Focus on high-level findings, implications, and recommendations without technical detail.',
        ],
    },
    {
        serviceType: 'Layman Abstracts',
        idealFor: 'General Public',
        features: [
            'Designed for a general audience.',
            'Translates complex research into easy-to-understand language.',
        ],
    },
    {
        serviceType: 'Podcast-Ready Abstracts',
        idealFor: 'For audio content delivery',
        features: [
            'Scripted summaries optimized for podcasts.',
            'Balancing brevity with informativeness.',
        ],
    },
    {
        serviceType: 'Investor-Focused Abstracts',
        idealFor: 'VCs, industry stakeholders',
        features: [
            'Highlights commercial potential.',
            'Market relevance and ROI aspects of research.',
        ],
    },
    {
        serviceType: 'Policy Brief Abstracts',
        idealFor: 'Government, NGOs',
        features: [
            'Informs policymakers and advocacy groups.',
            'Focuses on societal relevance and policy recommendations.',
        ],
    },
];

interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    iconSvg: React.ReactNode;
}

const workflowSteps: WorkflowStep[] = [
    {
        id: 1,
        title: 'MANUSCRIPT SUBMISSION',
        description:
            'You submit your full-length research manuscript, thesis chapter, or academic paper, along with any specific journal formatting guidelines or institutional requirements.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "INITIAL REVIEW BY PUBRICA'S DOMAIN EXPERTS",
        description:
            "Our subject-matter experts thoroughly review your study's objectives, methodology, results, and conclusions. We extract the core scientific message that forms the basis of your research abstract.",
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'ABSTRACT STRUCTURING & DRAFTING',
        description:
            'A clear, coherent, and structured abstract is drafted using formats like IMRaD or unstructured formats, depending on your target journal. This step ensures effective scientific communication.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'KEYWORD IDENTIFICATION & OPTIMIZATION',
        description:
            'We integrate high-impact, SEO-optimized keywords to improve visibility on platforms like PubMed, Scopus, and Web of Science. This helps your abstract reach the right scholarly audience.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'INTERNAL REVIEW & QUALITY CHECK BY THE PUBRICA TEAM',
        description:
            'Your abstract undergoes internal peer review for scientific accuracy, clarity, and language precision. This includes editing and proofreading by experienced editors to maintain publication standards.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'FINAL DELIVERY',
        description:
            'You receive a submission-ready abstract, customized to your target audience, platform, or publication outlet, ensuring alignment with both technical content and readability expectations.',
        iconSvg: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

const publishers = [
    { name: 'WILEY', fontStyle: 'font-serif tracking-widest font-bold text-xl sm:text-2xl' },
    { name: 'Springer', fontStyle: 'font-sans tracking-tight font-semibold text-xl sm:text-2xl text-slate-700' },
    { name: 'BMJ', fontStyle: 'font-sans font-black tracking-wider text-2xl sm:text-3xl text-sky-600' },
    { name: 'ELSEVIER', fontStyle: 'font-serif font-bold tracking-widest text-lg sm:text-xl text-orange-600' },
];

export default function SimplifiedAbstractPage() {
    // State set to null so NO workflow card is active/black by default
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <main className="w-full bg-slate-50 text-slate-800 font-sans pb-20">

            {/* 1. HERO BANNER */}
            <section className="bg-[#033c2a] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                        Accelerate Your Research with Pubrica's SIMPLIFIED ABSTRACT SERVICE
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-4xl mx-auto">
                        Get tailored assistance in crafting a clear, concise abstract that effectively summarizes your research. Our service ensures clarity and accuracy while making your manuscript easily understandable to diverse academic audiences, helping you meet journal submission standards efficiently.
                    </p>
                </div>
            </section>

            {/* 2. SIMPLIFIED ABSTRACT EXAMPLE */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                    Simplified Abstract Example by Pubrica
                </h2>

                {/* Abstract Card Container */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 text-left space-y-4">
                    {/* Top Journal Badges */}
                    <div className="bg-emerald-50/80 rounded-lg p-3 sm:p-4 flex flex-wrap justify-between items-center text-xs sm:text-sm border border-emerald-100">
                        <div>
                            <span className="font-bold text-slate-900 block sm:inline">Nature</span>
                            <span className="text-slate-600 sm:ml-4">Journal Impact Factor: 50.5</span>
                        </div>
                        <div className="font-semibold text-slate-700 mt-1 sm:mt-0">
                            Journal Cite Score: 78.1
                        </div>
                    </div>

                    {/* Article Abstract Diagram Mockup */}
                    <div className="border border-slate-200 rounded-lg p-4 sm:p-8 bg-white space-y-4 relative">
                        <div className="border-b pb-2">
                            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-slate-900">
                                ARTICLE
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-400 float-right mt-2">doi:10.1038/nature13814</span>
                        </div>

                        <h3 className="text-lg sm:text-2xl font-serif font-bold text-slate-900">
                            Clonal dynamics of native haematopoiesis
                        </h3>

                        <p className="text-[11px] text-slate-500 font-serif">
                            Jianlong Sun<sup>1,2</sup>, Azucena Ramos<sup>1</sup>, Brad Chapman<sup>1</sup>, Jonathan B. Johnnidis<sup>1</sup>, Linda Lei<sup>1</sup>, Yu-Jui Ho<sup>1</sup>, Allon Klein<sup>1</sup>, Oliver Hofmann<sup>1</sup> & Fernando D. Camargo<sup>1,2</sup>
                        </p>

                        {/* Simulated Annotations Box */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 text-xs">
                            <div className="md:col-span-1 space-y-6 text-right hidden md:block text-slate-600 font-sans italic text-[11px]">
                                <div className="pt-2">general background &rarr;</div>
                                <div className="pt-8">here we show &rarr;</div>
                            </div>

                            <div className="md:col-span-2 space-y-2 text-[11px] leading-relaxed font-serif bg-slate-50 p-3 rounded border border-slate-200">
                                <p className="bg-emerald-100/70 p-1 rounded">
                                    It is currently thought that life-long blood cell production is driven by the action of a small number of multipotent haematopoietic stem cells. Evidence supporting this view has been largely acquired through the use of functional assays involving transplantation. <span className="bg-sky-200/80 font-semibold">However, whether these mechanisms also govern native non-transplant haematopoiesis is entirely unclear.</span>
                                </p>
                                <p className="bg-pink-100/80 p-1 rounded">
                                    Here we have established a novel experimental model in mice where cells can be uniquely and genetically labelled in situ to address this question.
                                </p>
                                <p className="p-1">
                                    Using this approach, we have performed longitudinal analyses of clonal dynamics in adult mice that reveal unprecedented features of native haematopoiesis...
                                </p>
                            </div>

                            <div className="md:col-span-1 space-y-4 text-left hidden md:block text-slate-600 font-sans italic text-[11px]">
                                <div>&larr; specific background</div>
                                <div>&larr; knowledge gap</div>
                                <div>&larr; results & methodology</div>
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-400 text-center pt-2">
                            All rights reserved by Nature. Reproduced here for educational purposes only.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. TYPES OF SERVICES TABLE */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Types of Simplified Abstract Services We Offer
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                        Our{' '}
                        <Link href="#" className="text-sky-600 hover:underline font-medium">
                            simplified abstract
                        </Link>{' '}
                        writing services are tailored to diverse academic, clinical, policy, and public communication needs. Whether you're preparing a journal-ready abstract, a grant submission, or a lay summary, our professional abstract writers ensure clarity, structure, and impact across formats.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-bold">
                                <th className="py-3.5 px-4 sm:px-6 w-1/4">Service Type</th>
                                <th className="py-3.5 px-4 sm:px-6 w-1/4">Ideal For</th>
                                <th className="py-3.5 px-4 sm:px-6 w-2/4">Features</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {serviceTypesData.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 1 ? 'bg-[#eef5f8]/60' : 'bg-white'}>
                                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 align-top">
                                        {row.serviceType}
                                    </td>
                                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top">
                                        {row.idealFor}
                                    </td>
                                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top">
                                        <ul className="space-y-1.5 list-disc list-inside">
                                            {row.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="leading-relaxed">
                                                    <span className="text-slate-800">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 4. WORKFLOW PROCESS (INTERACTIVE - LACK CARDS BY DEFAULT) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#033c2a]">
                        How Our Simplified Abstract Service Works
                    </h2>
                    <p className="text-lg font-semibold text-slate-700">
                        Our Step-By-Step Process
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Pubrica's{' '}
                        <Link href="#" className="text-sky-600 hover:underline">
                            simplified abstract writing service
                        </Link>{' '}
                        is designed to be structured, expert-led, and process-driven. Each step ensures scientific clarity, accuracy, and full compliance with{' '}
                        <Link href="#" className="text-sky-600 hover:underline">
                            journal submission
                        </Link>{' '}
                        requirements.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
                    <div className="hidden lg:block absolute top-[5.2rem] left-6 right-6 h-1 bg-teal-600 z-0" />

                    {workflowSteps.map((step) => {
                        const isHovered = activeStep === step.id;
                        const isEven = step.id % 2 === 0;

                        return (
                            <div
                                key={step.id}
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                                className={`relative z-10 flex flex-col items-center ${isEven ? 'lg:flex-col-reverse' : 'lg:flex-col'
                                    }`}
                            >
                                <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-md my-3">
                                    {step.id}
                                </div>

                                <div
                                    className={`w-full p-5 rounded-xl border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-start min-h-[300px] shadow-sm ${isHovered
                                            ? 'bg-neutral-800 text-white border-neutral-800 shadow-xl scale-105'
                                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <div className="space-y-3 flex flex-col items-center">
                                        <div className={isHovered ? 'text-teal-400' : 'text-slate-700'}>
                                            {step.iconSvg}
                                        </div>
                                        <h3 className={`text-xs font-bold uppercase tracking-wide leading-snug ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-[11px] sm:text-xs leading-relaxed ${isHovered ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. GETTING STARTED WITH THIS SERVICE IS EASY */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Getting Started With This Service is Easy!
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We offer fast turnaround times on our{' '}
                        <Link href="#" className="text-sky-600 hover:underline">
                            simplified abstract writing service
                        </Link>
                        , helping you meet tight journal submission deadlines without compromising on quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1 */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                        <div className="bg-[#033c2a] text-white font-bold py-2.5 px-4 rounded-md text-xs sm:text-sm flex items-center gap-2">
                            <span>&mdash;</span> What we need from you
                        </div>
                        <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed pl-1">
                            <li>The most recent version of your manuscript</li>
                            <li>Any relevant figures, tables, or charts</li>
                            <li>Your chosen journal or publisher requirements</li>
                        </ol>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                        <div className="bg-[#033c2a] text-white font-bold py-2.5 px-4 rounded-md text-xs sm:text-sm flex items-center gap-2">
                            <span>+</span> What you receive
                        </div>
                        <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed pl-1">
                            <li>A professionally formatted Word document (.docx) of your structured abstract.</li>
                            <li>A list of SEO-optimized keywords used to improve discoverability in platforms like PubMed, Scopus, and Web of Science.</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* 6. YOUR FINAL ABSTRACT WILL INCLUDE */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                            Your Final Abstract Will Include
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Our team will create a submission-ready abstract that communicates your study's purpose and impact. It will cover:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                            <li><span className="text-slate-800 font-medium">The research problem and why the study is needed</span></li>
                            <li><span className="text-slate-800 font-medium">The significance and originality of your research</span></li>
                            <li><span className="text-slate-800 font-medium">The aim and objectives of your study</span></li>
                            <li><span className="text-slate-800 font-medium">Your study design, methodology, and key techniques</span></li>
                            <li><span className="text-slate-800 font-medium">A summary of your main findings and outcomes</span></li>
                        </ul>
                    </div>

                    {/* Image Placeholder Frame */}
                    <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                            alt="Researcher analyzing manuscript"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 7. TRUSTED BY TOP PUBLISHERS */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-8">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Trusted by Top Publishers
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Pubrica has successfully developed journal-ready abstracts for submissions to leading publishers, including Elsevier, Springer Nature, Wiley, Taylor & Francis, and more. Our abstract writing and{' '}
                        <Link href="#" className="text-sky-600 hover:underline">
                            publication support services
                        </Link>{' '}
                        are designed to meet the highest standards of academic publishing.
                    </p>
                </div>

                {/* Publisher Logos Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {publishers.map((pub, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className={pub.fontStyle}>{pub.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. SAMPLE WORK & DOWNLOAD REPORT */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-[#f2faf6] rounded-2xl border border-emerald-100 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Sample Work Left Image Block */}
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-80 bg-white">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team discussing research report"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Text Block */}
                    <div className="space-y-6 text-left">
                        <div className="space-y-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                                Simplified Abstract Services Sample Work
                            </h3>
                            <Link
                                href="#"
                                className="inline-block bg-black text-white hover:bg-neutral-800 font-semibold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-colors"
                            >
                                Discover More
                            </Link>
                        </div>

                        <div className="space-y-3 border-t border-emerald-200/60 pt-4">
                            <h4 className="text-lg font-bold text-slate-900">
                                Download the full Report Now
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Experience the quality of Pubrica's{' '}
                                <Link href="#" className="text-sky-600 hover:underline">
                                    simplified abstract writing services
                                </Link>{' '}
                                firsthand. Our research summaries extract complex scientific content into clear, concise, and structured abstracts tailored for academic, scientific, and professional use.
                            </p>
                            <Link
                                href="#"
                                className="inline-block bg-black text-white hover:bg-neutral-800 font-semibold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-colors"
                            >
                                Discover More
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}
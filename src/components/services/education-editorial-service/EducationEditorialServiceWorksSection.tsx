'use client';

import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { workflowData, workflowSectionData } from '@/lib/education-editorial-service/education-editorial-service';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Education Editorial Services | Academic Editorial Services | Pubrica',
    description:
        'Enhance the clarity, quality, and credibility of your educational manuscripts, theses, books, and academic resources with Pubrica\'s specialized editorial support.',
};

export default function EducationEditorialServicePage() {
    // State for interactive workflow cards hover effect
    const [hoveredWorkflowCard, setHoveredWorkflowCard] = useState<number | null>(null);
    // State for interactive services grid cards hover effect
    const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

    const servicesList = [
        {
            title: 'Accessibility Compliance',
            desc: 'Ensure your educational content meets global accessibility standards such as WCAG, ADA, and Section 508.',
            icon: '/images/education-editorial-service/Accessibility-Compliance.webp',
        },
        {
            title: 'Learning Design and Pedagogy',
            desc: 'Transform instructional content with research-backed learning design principles. We refine frameworks to boost student engagement.',
            icon: '/images/education-editorial-service/Learning-Design-and-Pedagogy.webp',
        },
        {
            title: 'Assessment and Exam Review',
            desc: 'We develop, review, validate, and refine assessments with precision and fairness. Our experts ensure question validity and reliable testing outcomes.',
            icon: '/images/education-editorial-service/Assessment-and-Exam-Review.webp',
        },
        {
            title: 'Digital Production QA',
            desc: 'Maintain exceptional quality across digital learning products. We conduct meticulous QA checks for interactive media, e-books, and platforms.',
            icon: '/images/education-editorial-service/Digital-Production-QA.webp',
        },
        {
            title: 'AI and Data Preparation',
            desc: 'We prepare, structure, label, and quality-check data for AI-driven educational solutions. Our team supports machine learning models with accurate annotations.',
            icon: '/images/education-editorial-service/AI-and-Data-Preparation.webp',
        },
    ];

    const workflowSteps = [
        {
            num: 1,
            title: 'UNDERSTANDING YOUR REQUIREMENTS',
            desc: 'We begin by reviewing the document type, target audience, publishing guidelines, academic framework, and project objectives. This ensures we fully understand your needs and assign the most suitable editor for your work.',
        },
        {
            num: 2,
            title: 'ASSIGNMENT TO SUBJECT-EXPERT EDITORS',
            desc: 'Your work is matched with editors specialized in pedagogy, educational psychology, curriculum development, and more. This guarantees domain-specific accuracy and alignment with educational standards.',
        },
        {
            num: 3,
            title: 'MULTI-LAYER EDITING AND QUALITY CHECKS',
            desc: 'Each project undergoes primary editing, secondary review, and final QA by senior editors. This layered approach ensures clarity, consistency, and an error-free final document.',
        },
        {
            num: 4,
            title: 'AUTHOR FEEDBACK AND REVISION SUPPORT',
            desc: 'We provide track-changes files, editorial comments, and actionable suggestions for improvement. Authors can request revisions to refine arguments, learning design, or overall readability.',
        },
        {
            num: 5,
            title: 'FINAL DELIVERY AND PUBLISHING SUPPORT',
            desc: 'You receive a polished, publication-ready document formatted to journal or institutional guidelines. Optional services include similarity checks, reference validation, and final formatting support.',
        },
    ];

    const packages = [
        {
            badge: 'B',
            title: 'Basic Editorial',
            theme: {
                headerText: 'text-[#2C3E50]',
                badgeBg: 'bg-[#F2D0A9]',
                cardBg: 'bg-[#C2D3CD]',
                bodyText: 'text-[#1A2E28]',
            },
            idealFor: 'Draft manuscripts, curriculum content, or initial academic documents.',
            services: [
                'Grammar, spelling, and punctuation correction',
                'Clarity and flow improvement',
                'Basic formatting and style alignment with academic standards',
                'Feedback on readability and coherence',
            ],
            turnaroundTime: '3–5 business days',
        },
        {
            badge: 'S',
            title: 'Standard Editorial',
            theme: {
                headerText: 'text-[#8A4A90]',
                badgeBg: 'bg-[#F9E2AF]',
                cardBg: 'bg-[#CDB5D8]',
                bodyText: 'text-[#3D1A45]',
            },
            idealFor: 'Research papers, journal submissions, or developed educational manuscripts.',
            services: [
                'Comprehensive language editing (grammar, style, and tone)',
                'Structural and logical flow enhancement',
                'Formatting for journal or publisher requirements',
                'Reference and citation check (APA, MLA, Chicago, or other styles)',
                'Constructive feedback for content improvement',
            ],
            turnaroundTime: '5–7 business days',
        },
        {
            badge: 'P',
            title: 'Premium Editorial',
            theme: {
                headerText: 'text-[#7C4312]',
                badgeBg: 'bg-[#BCE3ED]',
                cardBg: 'bg-[#C8AD7F]',
                bodyText: 'text-[#3B2507]',
            },
            idealFor: 'High-impact publications, textbooks, or advanced academic materials.',
            services: [
                'All features of the Standard Package',
                'In-depth subject-matter review by education experts',
                'Curriculum alignment and pedagogical evaluation',
                'Plagiarism check and originality assessment',
                'Detailed feedback report and revision suggestions',
            ],
            turnaroundTime: '7–10 business days',
        },
    ];
    return (
        <article className="w-full bg-white text-gray-800 font-sans">

            {/* ------------------- DRIVING ACADEMIC QUALITY SECTION ------------------- */}


            {/* ------------------- FULL WIDTH SUB-BANNER ------------------- */}
            <section className="w-full bg-[#0b3b2c] py-12 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
                        Enhance Your Educational Content with Pubrica
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                        Access your personal editorial assistant who will expertly guide you through the complexities of educational editing and content refinement, ensuring clarity, quality, and a smoother path to publishing success.
                    </p>
                </div>
            </section>

            {/* ------------------- HOW OUR EDUCATION EDITORIAL SERVICE WORKS ------------------- */}
            <section className="py-14 px-4 bg-white border-b border-gray-100" aria-labelledby="workflow-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="workflow-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                        How Our Education Editorial Service Works
                    </h2>
                    <h3 className="text-xs md:text-sm font-bold text-gray-700 mb-2">
                        A Streamlined, Expert-Driven Editorial Workflow
                    </h3>
                    <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our Education Editorial Service follows a structured, transparent, and quality-focused process to ensure every document we handle meets the highest standards of pedagogical effectiveness. Here&apos;s a step-by-step overview of how we work:
                    </p>

                    {/* Workflow Cards Grid (No default black cards, pure hover effect) */}
                    <EditorialWorkflowSection
                        heading={workflowSectionData.heading}
                        subheading={workflowSectionData.subheading}
                        description={workflowSectionData.description}
                        steps={workflowData}
                    />
                </div>
            </section>

            {/* ------------------- EDUCATION EDITORIAL SERVICES SAMPLE WORK ------------------- */}
            <section className="py-14 px-4 bg-[#f0fdf4]" aria-labelledby="sample-work-heading">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left: Image / Mockup */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="bg-white p-3 rounded-xl shadow-md border border-emerald-100 w-full max-w-xs">
                            <div className="h-64 rounded-lg relative overflow-hidden">
                                <Image
                                    src="/images/education-editorial-service/Education-Editorial-Services-Sample-Work.webp"
                                    alt="Education Editorial Services Sample Work"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:768px)100vw,320px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content & Action Buttons */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div>
                            <h2 id="sample-work-heading" className="text-lg md:text-xl font-bold text-[#0b3b2c] mb-2">
                                Education Editorial Services Sample Work
                            </h2>
                            <div className="pt-1">
                                <Link
                                    href="/insights/individual-patient-data-from-randomized-trials"
                                    className="inline-block bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                Explore our education editorial sample work, crafted to meet high academic standards, curriculum-aligned frameworks, and publisher-specific guidelines. We deliver accurate, polished, and publication-ready educational content that enhances teaching, learning, and research outcomes.
                            </p>
                            <Link
                                href="/insights/sample-work"
                                className="inline-block bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow transition-colors"
                            >
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="py-16 px-4 bg-white text-gray-800"
                aria-labelledby="packages-heading"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2
                            id="packages-heading"
                            className="text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-4"
                        >
                            Education Editorial Services – Our Packages
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            At Pubrica, we understand that educational content requires precision, clarity, and pedagogical expertise. Our editorial packages are designed to support educators, academic writers, institutions, and curriculum developers in producing high-quality, polished content that meets global standards.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {packages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col rounded-sm overflow-hidden shadow-lg border border-gray-100"
                            >
                                {/* Card Header (White Background) */}
                                <div className="bg-white p-6 flex items-center justify-center gap-4 border-b border-gray-100">
                                    <div className={`w-12 h-12 rounded-full ${pkg.theme.badgeBg} flex items-center justify-center font-bold text-2xl text-gray-700 shadow-inner shrink-0`}>
                                        {pkg.badge}
                                    </div>
                                    <h3 className={`text-base md:text-lg font-bold ${pkg.theme.headerText}`}>
                                        {pkg.title}
                                    </h3>
                                </div>

                                {/* Card Body (Colored Background) */}
                                <div className={`flex-1 p-6 ${pkg.theme.cardBg} ${pkg.theme.bodyText} flex flex-col justify-between space-y-6`}>
                                    <div className="space-y-6 text-xs md:text-sm">
                                        {/* Ideal For */}
                                        <div className="flex items-start gap-2.5">
                                            <span className="shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <p className="leading-snug">
                                                <strong>Ideal For:</strong> {pkg.idealFor}
                                            </p>
                                        </div>

                                        {/* Services List */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2.5 font-bold">
                                                <span className="shrink-0">
                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span>Services Include:</span>
                                            </div>
                                            <ul className="pl-7 space-y-2.5 list-disc leading-snug">
                                                {pkg.services.map((item, serviceIdx) => (
                                                    <li key={serviceIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Turnaround Time */}
                                    <div className="pt-4 border-t border-black/10 flex items-center gap-2.5 text-xs md:text-sm font-bold">
                                        <span className="shrink-0">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span>Turnaround Time : {pkg.turnaroundTime}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <GetFreeQuoteButton/>
        </article>
    );
}
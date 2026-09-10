'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Development Editing Service | Academic Editorial Services | Pubrica',
    description:
        'Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.',
};

export default function DevelopmentEditingServiceComplete() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(1);

    const processSteps = [
        {
            num: 1,
            title: 'Initial Manuscript Review',
            desc: 'Our editors conduct a comprehensive assessment of your research manuscript, evaluating overall structure, narrative flow, argument consistency, and readiness for SCI journal standards.',
        },
        {
            num: 2,
            title: 'Structural & Thematic Reorganization',
            desc: 'We reorganize sections, headings, and paragraphs to establish a compelling academic storyline, ensuring logical progression from introduction to conclusion.',
        },
        {
            num: 3,
            title: 'Content & Argument Refinement',
            desc: 'Complex ideas, hypotheses, and scientific arguments are meticulously refined for maximum clarity and scholarly impact without diluting technical rigor.',
        },
        {
            num: 4,
            title: 'Cohesion, Consistency & Tone Check',
            desc: 'We eliminate redundancies, align terminology, standardize academic tone, and create seamless transitions across all chapters or sections.',
        },
        {
            num: 5,
            title: 'Final Publication-Ready Manuscript',
            desc: 'The finalized document undergoes a rigorous quality check to ensure absolute compliance with target journal guidelines, ready for peer review submission.',
        },
    ];

    const whyChooseCards = [
        {
            title: 'SCI Journal Alignment',
            desc: 'Specialized editing tailored specifically to meet the high standards of top-tier SCI, Scopus, and international peer-reviewed journals.',
            icon: '🎯',
        },
        {
            title: 'Comprehensive Content Enhancement',
            desc: 'We go beyond superficial corrections, deep-diving into the core structure, logic, and presentation of your research arguments.',
            icon: '💡',
        },
        {
            title: 'Experienced Academic Editors',
            desc: 'Our team comprises subject-matter experts and native English editors with extensive publishing and peer-review experience.',
            icon: '👥',
        },
        {
            title: 'Enhanced Scholarly Impact',
            desc: 'Transform complex data and dense findings into a clear, engaging, and persuasive narrative that resonates with reviewers and readers.',
            icon: '📈',
        },
        {
            title: 'End-to-End Support',
            desc: 'From initial structural critique to final submission preparation, we guide you through every stage of the developmental revision process.',
            icon: '🛡️',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <HeroBanner
                title="Development Editing Services"
                description="Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support."
                headingAs="h1"
            />

            {/* ------------------- MAIN INTRO & KEY ASPECTS SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto">
                <div className="space-y-6">
                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b2c] leading-tight">
                        Enhance Clarity &amp; Improve Your Manuscript with Expert Development
                        Editing Services
                    </h2>

                    <div className="flow-root">
                        {/* Right-Floated Image */}
                        <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
                            <div className="relative w-full max-w-md h-64 sm:h-80 overflow-hidden">
                                <Image
                                    src="/images/academic-editorial-services/development-editing-service/Enhance-Clarity-Improve-Your-Manuscript-with-Expert-Development-Editing-Services.webp"
                                    alt="Development Editing Services"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                        </div>

                        {/* Flowing Content */}
                        <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                Ensure your manuscript is well structured, coherent, and impactful
                                with our expert development editing services. Our professional
                                editors refine your research by enhancing clarity, improving logical
                                flow, and ensuring academic rigor.
                            </p>

                            <p>
                                Development editing, also known as substantive or structural editing,
                                is a comprehensive approach that focuses on the overall content and
                                organization of a manuscript. Unlike{" "}
                                <Link
                                    href="/services/editing-and-translation/"
                                    className="text-blue-600 no-underline hover:no-underline"
                                >
                                    copy editing services
                                </Link>
                                , which address grammar, punctuation, and formatting, development
                                editing delves deeper into the logic, structure, and presentation of
                                ideas. It ensures that your manuscript tells a clear, coherent story,
                                aligns with the target audience&apos;s expectations, and meets the
                                rigorous standards of scholarly publication.
                            </p>

                            <p>
                                At Pubrica, we understand that publishing high-quality research
                                requires more than just groundbreaking findings; it demands clear,
                                coherent, and compelling writing. Our development editing service is
                                meticulously designed for researchers, academicians, and scholars who
                                aim to transform their manuscripts into polished, publication-ready
                                documents that resonate with reviewers, readers, and the global
                                scientific community.
                            </p>

                            {/* Key Aspects */}
                            <div className="pt-2">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
                                    Key aspects of development editing include:
                                </h3>

                                <ul className="space-y-3 pl-4 list-disc marker:text-red-600">
                                    <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-900 font-semibold">
                                            Structure and Organization:
                                        </strong>{" "}
                                        Ensuring that your manuscript flows logically, with clear
                                        sections, headings, and subheadings that guide the reader.
                                    </li>

                                    <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-900 font-semibold">
                                            Content Clarity:
                                        </strong>{" "}
                                        Refining complex ideas, hypotheses, and arguments to make them
                                        understandable without oversimplifying scientific rigor.
                                    </li>

                                    <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-900 font-semibold">
                                            Consistency:
                                        </strong>{" "}
                                        Maintaining consistent terminology, tone, and presentation of
                                        ideas throughout the manuscript.
                                    </li>

                                    <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-900 font-semibold">
                                            Cohesion and Coherence:
                                        </strong>{" "}
                                        Linking sections and paragraphs seamlessly, so that every part
                                        contributes to the overall narrative.
                                    </li>

                                    <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-900 font-semibold">
                                            Alignment with Publication Standards:
                                        </strong>{" "}
                                        Tailoring your manuscript to meet the expectations of specific
                                        journals, funding agencies, or academic institutions.
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-2">
                                <GetFreeQuoteButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
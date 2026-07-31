'use client';

import React, { useState } from 'react';

export const metadata = {
    title: 'Development Editing Service | Academic Editorial Services | Pubrica',
    description:
        'Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.',
};

export default function DevelopmentEditingServiceComplete() {
    // State to handle hover for the "Why Choose" grid cards (matching the interactive pattern used previously)
    const [hoveredCard, setHoveredCard] = useState<number | null>(1); // Default card 1 has hover effect

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

    const packages = [
        {
            badge: 'B',
            title: 'Basic',
            idealFor: 'Early-stage drafts requiring structural overview and basic reorganization.',
            included: [
                'High-level structural audit',
                'Guidance on section flow and logical sequencing',
                'Basic argument clarity feedback',
                'Reviewer-readiness checklist',
            ],
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-300',
        },
        {
            badge: 'S',
            title: 'Standard',
            idealFor: 'Research papers and manuscripts preparing for high-impact journal submission.',
            included: [
                'Includes everything in Basic, plus:',
                'Full substantive and developmental editing',
                'Paragraph and heading reorganization',
                'Tone, consistency, and terminology alignment',
                'Detailed editor commentary and improvement notes',
            ],
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-300',
        },
        {
            badge: 'P',
            title: 'Premium',
            idealFor: 'Complex research articles, thesis conversions, and resubmissions needing deep rewriting.',
            included: [
                'Includes everything in Standard, plus:',
                'Extensive content rewriting and narrative enhancement',
                'Rigorous defense of scientific arguments and hypotheses',
                'Target journal guideline customization',
                'Post-editing consultation and priority support',
            ],
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-300',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Development Editing Services
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.
                    </p>
                </div>
            </section>

            {/* ------------------- MAIN INTRO & KEY ASPECTS SECTION ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Enhance Clarity & Improve Your Manuscript with Expert Development Editing Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Ensure your manuscript is well structured, coherent, and impactful with our expert development editing services. Our professional editors refine your research by enhancing clarity, improving logical flow, and ensuring academic rigor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                        <p>
                            Development editing, also known as substantive or structural editing, is a comprehensive approach that focuses on the overall content and organization of a manuscript. Unlike copy editing services, which address grammar, punctuation, and formatting, development editing delves deeper into the logic, structure, and presentation of ideas. It ensures that your manuscript tells a clear, coherent story, aligns with the target audience&apos;s expectations, and meets the rigorous standards of scholarly publication.
                        </p>
                        <p>
                            At Pubrica, we understand that publishing high-quality research requires more than just groundbreaking findings; it demands clear, coherent, and compelling writing. Our development editing service is meticulously designed for researchers, academicians, and scholars who aim to transform their manuscripts into polished, publication-ready documents that resonate with reviewers, readers, and the global scientific community.
                        </p>
                    </div>

                    <div className="bg-[#0b3b2c] p-3 rounded-xl shadow-md flex justify-center items-center">
                        <div className="bg-white rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center shadow-inner">
                            <span className="text-4xl mb-3">💻</span>
                            <span className="text-xs font-bold text-gray-800">Development Editing Preview</span>
                            <span className="text-[10px] text-gray-500 mt-1">Structural & Substantive Manuscript Enhancement</span>
                        </div>
                    </div>
                </div>

                {/* Key Aspects List */}
                <div className="bg-[#f9fafb] border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-sm md:text-base font-bold text-[#0b3b2c] mb-4">
                        Key aspects of development editing include:
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-red-700 font-bold">•</span>
                            <span><strong className="text-gray-900">Structure and Organization:</strong> Ensuring that your manuscript flows logically, with clear sections, headings, and subheadings that guide the reader.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-700 font-bold">•</span>
                            <span><strong className="text-gray-900">Content Clarity:</strong> Refining complex ideas, hypotheses, and arguments to make them understandable without oversimplifying scientific rigor.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-700 font-bold">•</span>
                            <span><strong className="text-gray-900">Consistency:</strong> Maintaining consistent terminology, tone, and presentation of ideas throughout the manuscript.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-700 font-bold">•</span>
                            <span><strong className="text-gray-900">Cohesion and Coherence:</strong> Linking sections and paragraphs seamlessly, so that every part contributes to the overall narrative.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-700 font-bold">•</span>
                            <span><strong className="text-gray-900">Alignment with Publication Standards:</strong> Tailoring your manuscript to meet the expectations of specific journals, funding agencies, or academic institutions.</span>
                        </li>
                    </ul>

                    <div className="mt-8 text-left">
                        <button className="bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-bold px-8 py-3 rounded shadow-md transition-colors uppercase tracking-wider">
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </section>
        </article>
    );
}
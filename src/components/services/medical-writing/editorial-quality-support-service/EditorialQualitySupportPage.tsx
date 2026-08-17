'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItem {
    id: string;
    title: string;
    bullets: string[];
}

const whatWeDoData: AccordionItem[] = [
    {
        id: 'item-1',
        title: 'Scientific Editing',
        bullets: [
            'Native English editors enhance readability and fluency',
            'Correction of grammar, syntax, punctuation, and spelling',
            'Focus on tone, clarity, and professional language suitable for academic or regulatory settings',
        ],
    },
    {
        id: 'item-2',
        title: 'Language & Grammar Editing',
        bullets: [
            'Adherence to specific journal styles (e.g., AMA, APA, Vancouver, MLA)',
            'Custom formatting for grant proposals, clinical trial reports, or regulatory submissions',
            'Reference style standardization using EndNote, Mendeley, or manual formatting',
        ],
    },
    {
        id: 'item-3',
        title: 'Formatting & Style Compliance',
        bullets: [
            'Comprehensive plagiarism screening using industry-standard tools',
            'Rewriting and paraphrasing support to maintain originality and citation integrity',
        ],
    },
    {
        id: 'item-4',
        title: 'Plagiarism Check & Reduction',
        bullets: [
            'Multiple-round quality checks for factual accuracy, consistency, and completeness',
            'Alignment with Good Publication Practice (GPP3/GPP4) and ICMJE guidelines',
            'QC of graphics, tables, and supplementary material for accuracy and compliance',
        ],
    },
    {
        id: 'item-5',
        title: 'Editorial Quality Control (QC)',
        bullets: [
            'Cover letter drafting, response-to-reviewers editing, and final submission formatting',
            'Pre-submission peer review and feedback to maximize acceptance potential',
        ],
    },
    {
        id: 'item-6',
        title: 'Journal Submission Support',
        bullets: [
            'Preparation of cover letters and submission packages',
            'Assistance with peer review response letters',
            'End-to-end guidance through the submission portal process',
        ],
    },
];

export default function EditorialQualitySupportPage() {
    const [openAccordions, setOpenAccordions] = useState<string[]>(['item-1']);

    const toggleAccordion = (id: string) => {
        setOpenAccordions((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-[#f8faf9] text-[#2c3e50] font-sans pb-20">

            {/* 1. HERO BANNER */}
            <section className="w-full bg-[#072421] text-white py-12 px-4">
                <div className="max-w-4xl mx-auto text-center border border-gray-700/60 rounded-sm p-8 bg-[#0a2e2b]/50 shadow-inner">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                        Editorial & Quality Support Service
                    </h1>
                    <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Pubrica offers expert editorial and quality support to ensure your scientific documents are clear, consistent, and publication-ready, meeting global standards for accuracy and compliance.
                    </p>
                </div>
            </section>

            {/* 2. ELEVATE YOUR SCIENTIFIC DOCUMENTS SECTION */}
            <section className="max-w-5xl mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B3C3D] leading-snug">
                            Editorial & Quality Support Services: Elevate Your Scientific Documents with Precision and Clarity
                        </h2>
                        <p className="text-xs font-semibold text-[#0B3C3D]/80">
                            Refine Your Scientific Communication with Expert Editorial and Quality Oversight
                        </p>

                        <p className="text-xs text-gray-600 leading-relaxed">
                            At Pubrica, our editorial & quality support services are designed to elevate the precision, clarity, and compliance of your scientific documents. We specialize in editing, formatting, and quality reviewing content for <span className="text-[#0B3C3D] underline cursor-pointer">pharmaceutical</span>, biotech, and <span className="text-[#0B3C3D] underline cursor-pointer">life sciences</span> organizations, ensuring alignment with global publication and regulatory standards.
                        </p>

                        <p className="text-xs text-gray-600 leading-relaxed">
                            We support researchers, authors, and regulatory teams at every stage, from <span className="text-[#0B3C3D] underline cursor-pointer">pre-submission peer review</span> and regulatory filing, helping transform technical drafts into polished, impactful documents.
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-2 text-xs text-gray-700 pt-2">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Comprehensive editing services for grammar, style, consistency, and technical accuracy</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Expertise in <span className="text-[#0B3C3D] font-semibold">ICH, GCP, CONSORT</span>, and other international editorial standards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Formatting and quality checks aligned with <span className="text-[#0B3C3D] underline cursor-pointer">journal submission</span> requirements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Customized solutions for research papers, clinical trial documents, and regulatory dossiers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Support for multilingual authors to ensure clarity in scientific communication</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image Container (Next.js SEO Image) */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm h-[320px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#0d312e]">
                            <Image
                                src="/images/medical-writing/editorial-quality-support-service/Editorial-Quality-Support-Services-1.webp"
                                alt="Professional editorial customer support specialist reviewing scientific documents"
                                title="Pubrica Editorial and Quality Support Services"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. WHAT WE DO SECTION */}
            <section className="max-w-5xl mx-auto px-4 mt-20">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#0B3C3D] mb-2">
                        What We Do
                    </h2>
                    <p className="text-xs text-gray-600 max-w-4xl leading-relaxed">
                        At Pubrica, our editorial & quality support services are designed to elevate the clarity, coherence, and scientific accuracy of your research documents. Whether you're submitting to high-impact journals, regulatory bodies, or internal review boards, our team of experienced editors and quality experts ensures your content meets the highest editorial and ethical standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Overlapping/Offset Images Column */}
                    <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
                        <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/medical-writing/editorial-quality-support-service/What-We-Do.png"
                                alt="What we do"
                                fill
                                sizes="400px"
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Accordion Column */}
                    <div className="lg:col-span-7 border-t border-gray-300">
                        {whatWeDoData.map((item) => {
                            const isOpen = openAccordions.includes(item.id);

                            return (
                                <div key={item.id} className="border-b border-gray-300">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex items-center gap-3 py-3.5 text-xs font-bold text-gray-800 hover:text-[#0B3C3D] transition-colors text-left focus:outline-none"
                                    >
                                        <span className="text-gray-500 font-semibold text-sm">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                        <span>{item.title}</span>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden pl-6">
                                            <ul className="space-y-1.5 text-xs text-gray-600">
                                                {item.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-red-500 mr-2">•</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

        </div>
    );
}
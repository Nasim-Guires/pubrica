'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/common/HeroBanner';

interface AccordionItem {
    id: string;
    title: string;
    bullets: React.ReactNode[];
}

const whatWeDoData: AccordionItem[] = [
    {
        id: 'item-1',
        title: 'Scientific Editing',
        bullets: [
            <>In-depth editing by <Link href="/subject-matter-experts/" className="text-blue-600">subject matter experts</Link> (SMEs)</>,
            'Ensures logical flow, technical accuracy, and consistency',
            <>Aligns your manuscript with the target journal's author guidelines and <Link href="/services/publication-support/journal-manuscript-formatting-services/" className="text-blue-600">formatting requirements</Link></>,
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
            <>Comprehensive <Link href="/services/publication-support/plagiarism-services/" className="text-blue-600">plagiarism</Link> screening using industry-standard tools</>,
            'Rewriting and paraphrasing support to maintain originality and citation integrity',
        ],
    },
    {
        id: 'item-5',
        title: 'Editorial Quality Control (QC)',
        bullets: [
            'Multiple-round quality checks for factual accuracy, consistency, and completeness',
            <>Alignment with Good Publication Practice (GPP3/GPP4) and <a href="https://www.icmje.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">ICMJE</a> guidelines</>,
            'QC of graphics, tables, and supplementary material for accuracy and compliance',
        ],
    },
    {
        id: 'item-6',
        title: 'Journal Submission Support',
        bullets: [
            <>Cover letter drafting, <Link href="/services/publication-support/responding-to-reviewers/" className="text-blue-600">response-to-reviewers</Link> editing, and final submission formatting</>,
            <><Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600">Pre-submission peer review</Link> and feedback to maximize acceptance potential</>,
        ],
    },
];

export default function EditorialQualitySupportPage() {
    const [openAccordion, setOpenAccordion] = useState<string | null>('item-1');

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen bg-[#f8faf9] text-[#2c3e50] font-sans pb-12">

            {/* 1. HERO BANNER */}
            <HeroBanner
                title="Editorial & Quality Support Service"
                description="Pubrica offers expert editorial and quality support to ensure your scientific documents are clear, consistent, and publication-ready, meeting global standards for accuracy and compliance."
                headingAs="h1"
            />

            {/* 2. ELEVATE YOUR SCIENTIFIC DOCUMENTS SECTION */}
            <section className="max-w-5xl mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C3D] leading-snug">
                            Editorial & Quality Support Services: Elevate Your Scientific Documents with Precision and Clarity
                        </h2>
                        <p className="text-sm md:text-base font-semibold text-[#0B3C3D]/80">
                            Refine Your Scientific Communication with Expert Editorial and Quality Oversight
                        </p>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            At Pubrica, our editorial & quality support services are designed to elevate the precision, clarity, and compliance of your scientific documents. We specialize in editing, formatting, and quality reviewing content for <Link href="/industries/pharmaceutical/" className="text-blue-600">pharmaceutical</Link>, biotech, and <Link href="/subject-matter-experts/life-sciences/" className="text-blue-600">life sciences</Link> organizations, ensuring alignment with global publication and regulatory standards.
                        </p>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            We support researchers, authors, and regulatory teams at every stage, from <Link href="/services/publication-support/journal-submission/" className="text-blue-600">pre-submission peer review</Link> and regulatory filing, helping transform technical drafts into polished, impactful documents.
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-2 text-sm md:text-base text-gray-700 pt-2">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Comprehensive editing services for grammar, style, consistency, and technical accuracy</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Expertise in <a href="https://www.ich.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">ICH</a>, GCP, <a href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">CONSORT</a>, and other international editorial standards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Formatting and quality checks aligned with <Link href="/services/publication-support/journal-submission/" className="text-blue-600">journal submission</Link> requirements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Customized solutions for research papers, clinical trial documents, and regulatory dossiers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">•</span>
                                <span>Support for multilingual authors to ensure clarity in <Link href="/services/scientific-communication/" className="text-blue-600">scientific communication</Link></span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image Container (Next.js SEO Image) */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm h-[340px] overflow-hidden">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C3D] mb-3">
                        What We Do
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-4xl leading-relaxed">
                        At Pubrica, our editorial & quality support services are designed to elevate the clarity, coherence, and scientific accuracy of your research documents. Whether you're submitting to high-impact journals, regulatory bodies, or internal review boards, our team of experienced editors and quality experts ensures your content meets the highest editorial and ethical standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Overlapping/Offset Images Column */}
                    <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
                        <div className="relative w-full max-w-sm h-72 rounded-lg overflow-hidden shadow-md border border-gray-200">
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
                            const isOpen = openAccordion === item.id;

                            return (
                                <div key={item.id} className="border-b border-gray-300">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex items-center gap-3 py-4 text-base md:text-lg font-medium text-gray-800 hover:text-[#0B3C3D] transition-colors text-left focus:outline-none"
                                    >
                                        <span className="text-gray-500 font-normal text-base">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                        <span>{item.title}</span>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden pl-6">
                                            <ul className="space-y-2 text-sm md:text-base text-gray-600">
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
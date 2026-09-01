'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- SEO Metadata (Extractable for Next.js App Router metadata export if split into page/client component) ---
export const metadata = {
    title: 'Graphical Abstract Service | Boost Research Visibility',
    description: 'Deliver targeted, evidence-based strategies to increase the visibility, credibility, and citation of your research with expert graphical abstract services.',
    keywords: ['Graphical Abstract', 'Research Visualization', 'Scientific Illustration', 'Manuscript Design'],
};

interface AccordionItem {
    id: number;
    title: string;
    content: string;
}

const accordionData: AccordionItem[] = [
    {
        id: 1,
        title: 'Creative Content Design',
        content: 'We take your published manuscript and turn it into a graphical abstract, summarizing your rigorous research into a one, clear, informative image for your audience.',
    },
    {
        id: 2,
        title: 'Professional Design Collaboration',
        content: 'Our team of graphic designers and scientific experts works closely with you to develop a graphical abstract that not only encapsulates the core findings of your research but also underscores its significance and broader implications. ',
    },
    {
        id: 3,
        title: 'Broader Audience Engagement',
        content: 'Graphical abstracts serve as powerful tools for reaching a diverse audience, making complex information more accessible and easier to understand. This format is ideal for use in presentations, on social media, and for enhancing the visual appeal of your publications. ',
    },
    {
        id: 4,
        title: 'Increased Research Visibility',
        content: 'Presenting your findings through a graphical abstract can significantly boost research visibility, enhance your publication’s reach, and attract citations, collaborators, and funding opportunities, thus boosting opportunities for citations and academic collaboration.',
    },
    {
        id: 5,
        title: 'Tailored Visual Representation',
        content: 'Each graphical abstract is custom-designed to convey the key points of your research while meeting the specific stylistic and formatting requirements of your target journal or conference. ',
    },
];

export default function GraphicalAbstractPage() {
    // All accordion items closed by default as requested
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="w-full min-h-screen bg-white text-slate-800 font-sans">
            {/* Header Banner Section */}
            <section className="w-full bg-[#122828] text-white py-6 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-slate-600 p-8 rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                        Graphical Abstract Service
                    </h1>
                    <p className="text-sm md:text-base text-slate-300">
                        Boost Research Visibility Through Engaging Graphical Abstracts
                    </p>
                </div>
            </section>

            {/* Main Content & Feature Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Text Block */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#122828]">
                            Transform Your Research into an Engaging Visual Summary
                        </h2>
                        <p className="text-base font-medium text-slate-700">
                            Deliver targeted, evidence-based strategies to increase the visibility, credibility, and citation of your research.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Many top publishers require you to submit a{' '}
                            <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                                graphical abstract
                            </Link>{' '}
                            along with your manuscript. These publishers include Elsevier, Springer, Nature, IOPscience, and ACS. Pubrica's{' '}
                            <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                                graphical abstract design service
                            </Link>{' '}
                            can turn your data into an intuitive, scientifically reliable visual representation. Our animator and science specialists will work with you to create a high-resolution, journal-compliant{' '}
                            <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                                graphical abstract
                            </Link>{' '}
                            that fits all journal specifications while accurately and truly representing your research.
                        </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:col-span-5 flex justify-center">
                        {/* Image Section Container */}
                        <div className="relative w-full max-w-md h-64 sm:h-72 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center">
                            <Image
                                src="/images/research-impact/graphical-abstract/Transform-Your-Research-into-an-Engaging-Visual-Summary.webp"
                                alt="Graphical Abstract Service Illustration - Targeted In-vivo mRNA delivery"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* What We Do Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#122828] mb-4">
                    What We Do
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mb-10">
                    Enhance your academic visibility, improve research discoverability, and drive higher engagement with our expert-led{' '}
                    <Link href="/services/research-impact/graphical-abstract/research-visualization" className="text-blue-600 no-underline hover:no-underline">
                        research visualization
                    </Link>{' '}
                    services. Our professional team will develop reader-friendly and visually appealing{' '}
                    <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                        graphical abstracts
                    </Link>{' '}
                    that summarize your research findings and make the greatest impact on the scientific community.
                </p>

                {/* Interactive Accordion + Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Collapsible Image Preview */}
                    <div className="lg:col-span-5 flex justify-center">
                        {/* Image Section Container */}
                        <div className="relative w-full max-w-md h-80 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                            <Image
                                src="/images/research-impact/graphical-abstract/what-we-do-.png"
                                alt="Research team collaborating on graphical abstract designs"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Accordion List */}
                    <div className="lg:col-span-7 space-y-2">
                        {accordionData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={item.id} className="border-b border-slate-300">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                        className="w-full text-left py-3 flex items-center justify-between text-slate-800 font-semibold hover:text-teal-900 transition-colors focus:outline-none"
                                    >
                                        <span className="flex items-center gap-2 text-base md:text-lg">
                                            <span className="text-lg font-bold">
                                                {isOpen ? '-' : '+'}
                                            </span>
                                            {item.title}
                                        </span>
                                    </button>

                                    {/* Expandable Panel */}
                                    {isOpen && (
                                        <div className="pb-4 pt-1 px-4 text-sm text-slate-600 leading-relaxed transition-all">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Closing Paragraph */}
                <div className="mt-12 max-w-4xl">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Choose Pubrica's{' '}
                        <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                            graphical abstract
                        </Link>{' '}
                        services to translate your research into a powerful visual format that communicates effectively and stands out in the crowded academic landscape. Contact us today to discover how we can help elevate the presentation and impact of your research findings.
                    </p>
                </div>
            </section>
        </main>
    );
}
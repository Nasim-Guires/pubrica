'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import HeroBanner from '@/components/common/HeroBanner';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

const whatWeDoItems: AccordionItem[] = [
    {
        id: 'clear-concise-summaries',
        title: 'Clear and Concise Research Summaries',
        content:
            'We specialize in simplifying scientific writing without sacrificing accuracy. Our custom research abstracts present your study\'s aims, methods, results, and conclusions in plain, understandable language for broader engagement.',
    },
    {
        id: 'expert-scientific-communicators',
        title: 'Expert Scientific Communicators',
        content:
            'Our team of professional abstract writers and science communicators is skilled at transforming technical research into clear, compelling summaries ideal for both technical and non-technical readers.',
    },
    {
        id: 'increased-accessibility-reach',
        title: 'Increased Accessibility and Reach',
        content:
            'Simplified abstracts broaden the accessibility of scientific content that can deter audiences from engaging with technical language and terminology. Researchers can also communicate their work to non-specialist audiences such as funders, policymakers, and early-career scholars.',
    },
    {
        id: 'platform-specific-customization',
        title: 'Platform-Specific Customization',
        content:
            'We tailor each abstract for journal submission, conference proceedings, online repositories, or grant applications, meeting formatting and content requirements across platforms.',
    },
    {
        id: 'boosted-engagement-visibility',
        title: 'Boosted Engagement and Visibility',
        content:
            'A well-written, simplified abstract increases your chances of citation, readership, and cross-disciplinary recognition. It creates a strong first impression that leads to more impactful communication.',
    },
];

export default function SimplifiedAbstractServices() {
    // State to support multiple open accordion items
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <div className="w-full bg-white text-slate-800 font-sans">

            {/* 1. Top Hero Header */}
            <HeroBanner
                title="Simplified Abstract Services"
                description="Create a strong first impression with a clear, concise, and journal-ready abstract. Our professional abstract writing service helps researchers transform complex manuscripts into simplified, publication-ready summaries, perfect for academic publishing, journal submission, and scientific communication."
                headingAs="h1"
            />

            {/* 2. Intro Section */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#033c2a] leading-snug">
                            Make Your Research Stand Out: Start with a Clear, Concise, and Simplified Abstract
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Researchers spend countless hours on complex studies, ensuring rigorous methodology and valuable outcomes. But transforming that into a submission-ready abstract for academic journals can be difficult, especially when clarity, word limits, and formatting guidelines matter.
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            That's where Pubrica's{' '}
                            <Link href="/insights/sample-work/clonal-dynamics-native-haematopoiesis/" className="text-blue-600 font-medium no-underline hover:no-underline">
                                Simplified Abstract
                            </Link>{' '}
                            Writing Service comes in. Our team of domain experts provides custom abstract writing and scientific summary services designed specifically for academic publishing. We convert your full manuscript into a structured, publication-ready abstract that meets{' '}
                            <Link href="/services/publication-support/journal-submission/" className="text-blue-600 font-medium no-underline hover:no-underline">
                                journal submission
                            </Link>{' '}
                            standards, without compromising on scientific accuracy or depth.
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Whether you're submitting to a peer-reviewed journal, applying for funding, or preparing a research abstract for a repository, our professional abstract writers ensure your work is concise, compelling, and discoverable.
                        </p>
                    </div>

                    {/* Intro Hero Image Box */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-64 sm:h-72 rounded-2xl p-2">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/research-impact/simplified-abstract-services/Make-Your-Research-Stand-Out-Start-with-a-Clear-Concise-and-Simplified-Abstract.webp"
                                    alt="Team reviewing simplified research abstracts"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. What We Do Accordion Section */}
            <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
                <div className="space-y-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#033c2a]">
                        What We Do
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                        Pubrica's{' '}
                        <Link href="/services/research-impact/simplified-abstract-services/sglt2i-phimosis-risk-men-diabetes/" className="text-blue-600 font-medium no-underline hover:no-underline">
                            simplified abstract
                        </Link>{' '}
                        writing services provide a one-stop solution for researchers who need assistance in converting complex manuscripts into precise, succinct, and publishable abstracts. We help to make your research accessible to a broader academic audience, including interdisciplinary scientists, journal editors, and grant reviewers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Compound Collage Images - Fixed Larger Size & Mobile Centering */}
                    <div className="lg:col-span-5 relative flex justify-center py-6">
                        <div className="relative w-full max-w-md h-80 sm:h-96 lg:h-[420px] mx-auto flex items-center justify-center">
                            <div className="absolute w-4/5 sm:w-3/4 h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 bg-slate-100">
                                <Image
                                    src="/images/research-impact/simplified-abstract-services/What-We-Do.png"
                                    alt="Researcher giving presentation"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Accordion List - Multiple Open Support */}
                    <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                        {whatWeDoItems.map((item, index) => {
                            const isOpen = openIndices.includes(index);
                            return (
                                <div key={item.id} className="py-3.5">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-emerald-800 transition-colors flex items-center gap-2">
                                            <span className="text-slate-400 font-normal">
                                                {isOpen ? <Minus className="w-4 h-4 text-emerald-600" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                            {item.title}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="mt-3 pl-6 pr-2 text-xs sm:text-sm text-slate-600 leading-relaxed transition-all">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Callout Paragraph */}
                <p className="mt-10 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                    Choose Pubrica for academic abstract writing services that ensure your research is clear, credible, and publication-ready. Contact us today to learn how our{' '}
                    <Link href="/services/publication-support/" className="text-blue-600 font-medium no-underline hover:no-underline">
                        publication support services
                    </Link>{' '}
                    can elevate your manuscript.
                </p>
            </section>
        </div>
    );
}
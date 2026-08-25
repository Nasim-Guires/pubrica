'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

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
    // Set initial state to null so NO card/accordion is open by default
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full bg-white text-slate-800 font-sans">

            {/* 1. Top Hero Header */}
            <section className="w-full bg-[#033c2a] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Simplified Abstract Services
                    </h1>
                    <div className="max-w-3xl mx-auto border border-emerald-500/40 bg-emerald-950/30 p-4 rounded-lg">
                        <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                            Create a strong first impression with a clear, concise, and journal-ready abstract. Our professional abstract writing service helps researchers transform complex manuscripts into simplified, publication-ready summaries, perfect for academic publishing, journal submission, and scientific communication.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                            <Link href="/services/research-impact/simplified-abstract-services" className="text-emerald-700 font-medium hover:underline">
                                Simplified Abstract
                            </Link>{' '}
                            Writing Service comes in. Our team of domain experts provides custom abstract writing and scientific summary services designed specifically for academic publishing. We convert your full manuscript into a structured, publication-ready abstract that meets{' '}
                            <Link href="/services/publication-support/journal-submission" className="text-emerald-700 font-medium hover:underline">
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
                        <div className="relative w-full max-w-md h-64 sm:h-72 bg-[#033c2a] rounded-2xl p-2 shadow-lg">
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
                        <Link href="/services/research-impact/simplified-abstract-services" className="text-emerald-700 font-medium hover:underline">
                            simplified abstract
                        </Link>{' '}
                        writing services provide a one-stop solution for researchers who need assistance in converting complex manuscripts into precise, succinct, and publishable abstracts. We help to make your research accessible to a broader academic audience, including interdisciplinary scientists, journal editors, and grant reviewers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Compound Collage Images */}
                    <div className="lg:col-span-5 relative flex justify-center py-4">
                        <div className="relative w-full max-w-sm h-72">
                            <div className="absolute top-0 left-0 w-3/5 h-48 rounded-xl overflow-hidden shadow-md border-2 border-white z-10 bg-slate-100">
                                <Image
                                    src="/images/research-impact/simplified-abstract-services/What-We-Do.png"
                                    alt="Researcher giving presentation"
                                    fill
                                    sizes="300px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3/5 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white z-20 hidden" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Accordion List - Default Closed */}
                    <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                        {whatWeDoItems.map((item, index) => {
                            const isOpen = openAccordionIndex === index;
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
                    <Link href="/services/publication-support" className="text-emerald-700 font-medium hover:underline">
                        publication support services
                    </Link>{' '}
                    can elevate your manuscript.
                </p>
            </section>

        </div>
    );
}
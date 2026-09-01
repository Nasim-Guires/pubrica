'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- DATA STRUCTURES ---

interface AccordionItem {
    id: string;
    title: string;
    points: {
        label: string;
        description: string;
    }[];
}

const servicesAccordionData: AccordionItem[] = [
    {
        id: 'cme-content-development',
        title: 'CME Content Development Services',
        points: [
            {
                label: 'Evidence-Based Medical Courses',
                description:
                    'We develop courses grounded in evidence-based medicine and clinical review articles to ensure that healthcare professionals receive the latest and most reliable information.',
            },
            {
                label: 'Medical Infographics',
                description:
                    'Our team creates engaging and informative infographics that summarize complex medical data and research findings, making them easily accessible and understandable.',
            },
            {
                label: 'Manuscript Review',
                description:
                    'We provide thorough manuscript review services to ensure the accuracy and quality of medical writings.',
            },
            {
                label: 'Internet Searching and Learning',
                description:
                    'Our services include the development of online learning modules that utilize the latest internet research to enhance the educational experience.',
            },
            {
                label: 'Journal-Based Activities',
                description:
                    'We create educational activities based on recent journal publications, facilitating up-to-date learning based on the latest research.',
            },
            {
                label: 'Clinical Practice Guidelines Summarization',
                description:
                    'We summarize the most recent clinical practice guidelines to keep healthcare providers informed about current standards of care.',
            },
            {
                label: 'Research and Scientific Writing',
                description:
                    'Our team offers comprehensive research and writing services to produce detailed scientific content for CME programs.',
            },
            {
                label: 'Clinical Case Reports',
                description:
                    'We develop case reports that detail patient complaints and feedback, offering real-world insights into patient care.',
            },
            {
                label: 'Compilation of Practice Difficulties',
                description:
                    'We compile challenges and difficulties arising in practice to help professionals understand and navigate common obstacles in healthcare settings.',
            },
        ],
    },
    {
        id: 'instructional-educational-formats',
        title: 'Instructional Educational Formats',
        points: [
            {
                label: 'Live Conference Content',
                description:
                    'We prepare content for live educational events such as workshops, symposia, and courses, designed to engage and educate in a dynamic setting.',
            },
            {
                label: 'PowerPoint Decks and Simulations',
                description:
                    'Our team designs PowerPoint presentations and interactive simulations that provide practical, scenario-based learning experiences.',
            },
            {
                label: 'Supplemental Checklists and Materials',
                description:
                    'We create supplemental checklists, patient education materials, and other resources to support comprehensive learning and application of knowledge.',
            },
            {
                label: 'Website Resources and Follow-Up Surveys',
                description:
                    'We develop online resources and conduct follow-up surveys to measure the effectiveness of the educational activities and ensure continuous improvement.',
            },
        ],
    },
];

export default function CMEContentDevelopmentPage() {
    // State set to null so NO accordion card is opened by default
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <main className="w-full bg-white text-slate-800 font-sans pb-8">

            {/* 1. HERO BANNER */}
            <section className="bg-[#033c2a] text-white py-6 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-slate-300/40 p-8 sm:p-12 rounded-sm space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        Continuing Medical Education
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Pubrica's Continuing Medical Education services offer personalized guidance and support for navigating academic publishing in the medical field, ensuring optimal outcomes for your research.
                    </p>
                </div>
            </section>

            {/* 2. OVERVIEW SECTION WITH IMAGE */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Continuing Medical Education Content Creation and Support for Healthcare Professionals
                    </h2>
                    <p className="text-sm font-semibold text-slate-600">
                        Advancing Knowledge. Enhancing Practice. Improving Patient Care.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
                    {/* Left Side: Content Points */}
                    <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                            Pubrica's team of experts specializes in developing{' '}
                            <Link href="/services/continuing-medical-education-cme-content-development" className="text-blue-600 no-underline hover:no-underline">
                                continuing medical education content
                            </Link>{' '}
                            that is scholarly, peer-reviewed, and tailored to meet the diverse educational needs of healthcare professionals across various disciplines. Our dedicated CME module writing services ensure the delivery of high-quality educational resources. Here's how we support your CME content development services needs:
                        </p>

                        <ul className="space-y-3 pl-2">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Expert Content Development:</span> Our team is adept at creating engaging and informative CME content that addresses the specific learning objectives of doctors, nurses, pharmacists, dentists, and other allied healthcare professionals. This meticulous content preparation is essential for meeting the continuing education requirements of various specialties.
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Tailored Educational Materials:</span> We customize the scope of CME content to match the specific educational needs and specialties of the audience. This personalized approach not only enhances the educational value of the content but also ensures that it is relevant and directly applicable to the audience's daily professional activities.
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Comprehensive Peer Review:</span> Benefit from our rigorous{' '}
                                    <Link href="/services/publication-support/peer-review-pre-submission" className="text-blue-600 no-underline hover:no-underline">
                                        peer review
                                    </Link>{' '}
                                    process, which ensures that all CME materials are accurate, up-to-date, and reflect the latest clinical practices and guidelines. Our content undergoes thorough reviews by{' '}
                                    <Link href="/subject-matter-experts" className="text-blue-600 no-underline hover:no-underline">
                                        subject matter experts
                                    </Link>
                                    , enhancing its credibility and educational impact.
                                </div>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold text-base leading-none">&bull;</span>
                                <div>
                                    <span className="font-bold text-slate-900">Multimedia Content Production:</span> Our team leverages both traditional and innovative multimedia tools to create dynamic CME materials. This includes written content, interactive modules, video lectures, and visual aids such as charts and infographics, which facilitate engaging and effective learning experiences.
                                </div>
                            </li>
                        </ul>

                        <p className="pt-2">
                            Pubrica guarantees that your CME content is backed by robust research and best educational practices, making significant contributions to the ongoing education of healthcare professionals. Our comprehensive approach ensures that CME materials not only meet but also exceed the expectations and requirements of both educational institutions and professional bodies.
                        </p>
                    </div>

                    {/* Right Side: Visual Graphic Frame */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            {/* Back Decorative Block */}
                            <div className="absolute -inset-2 bg-[#033c2a] rounded-2xl transform -rotate-1 opacity-90" />
                            {/* Image Container */}
                            <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-lg bg-slate-100 aspect-[4/3]">
                                <Image
                                    src="/images/continuing-medical-education-cme-content-development/Continuing-Medical-Education-Content-.webp"
                                    alt="Doctors reviewing medical notes"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OUR SERVICES (ACCORDION SECTION) */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Our Services
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-5xl">
                        At Pubrica, we specialize in creating comprehensive Continuing Medical Education (CME) activities tailored to a wide range of healthcare professionals. Our services are designed to support ongoing education across various therapeutic areas, including{' '}
                        <Link href="/subject-matter-experts/radiology" className="text-blue-600 no-underline hover:no-underline">radiology</Link>,{' '}
                        <Link href="/subject-matter-experts/cardiology" className="text-blue-600 no-underline hover:no-underline">cardiology</Link>, orthopedics, emergency medicine,{' '}
                        <Link href="/subject-matter-experts/neurology" className="text-blue-600 no-underline hover:no-underline">neurology</Link>, internal medicine, nuclear medicine, oncology, OB-GYN, otolaryngology, and more. Here's how we ensure high-quality CME content:
                    </p>
                </div>

                {/* Accordion Stack */}
                <div className="space-y-3 pt-2">
                    {servicesAccordionData.map((item) => {
                        const isOpen = openAccordion === item.id;

                        return (
                            <div key={item.id} className="border border-slate-200 rounded-sm overflow-hidden shadow-sm">
                                {/* Accordion Header Bar */}
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full bg-[#033c2a] hover:bg-[#022a1d] text-white px-4 py-3 sm:px-6 sm:py-3.5 flex items-center gap-3 transition-colors text-left"
                                >
                                    <span className="font-mono text-base font-bold w-4 text-center">
                                        {isOpen ? '&minus;' : '+'}
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                                        {item.title}
                                    </span>
                                </button>

                                {/* Accordion Content Drawer */}
                                {isOpen && (
                                    <div className="bg-white p-5 sm:p-6 border-t border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                        <ul className="space-y-2.5">
                                            {item.points.map((pt, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2">
                                                    <span className="text-slate-900 font-bold text-base leading-none">&bull;</span>
                                                    <div>
                                                        <span className="font-bold text-slate-900">{pt.label}:</span>{' '}
                                                        <span>{pt.description}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-4">
                    Pubrica has established a unique process for developing instructional content that precisely meets client needs with the requisite quality. As a leading provider of CME medical writing support, we maintain excellent relationships with subject matter experts, content authors, and educators who are esteemed scientists and physicians. This network and our rigorous approach ensure that our CME writing services are not only educational but also impactful and aligned with professional development goals.
                </p>
            </section>

        </main>
    );
}
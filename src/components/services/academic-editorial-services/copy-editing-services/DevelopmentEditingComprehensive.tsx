'use client';

import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import ExpertsSection, { Expert } from '@/components/common/ExpertsSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import ServiceBanner from '@/components/common/ServiceBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Development Editing Services & Key Features | Pubrica',
    description:
        'Explore Pubrica’s Development Editing Services, featuring our expert editors, packages, step-by-step process, document types, and sample work.',
};

export default function AcademicDevelopmentEditingService() {
    const [activeTab, setActiveTab] = useState<'Medicine' | 'Science' | 'Engineering'>('Medicine');

    // State to track which accordion items are open (by index). Default is empty (all closed).
    const [openWhyChooseIndices, setOpenWhyChooseIndices] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        'Citation formatting per journal requirements',
        'Adherence to the requirements of the concerned journal/publisher or style guide',
        'Proper use of terminology',
        'Correct use of capitalization or italics for industry/scientific terms',
        'Consistency in presentation of data',
        'Adjustments depending on the topic and journal readership',
    ];

    const toggleWhyChooseItem = (idx: number) => {
        if (openWhyChooseIndices.includes(idx)) {
            setOpenWhyChooseIndices(openWhyChooseIndices.filter(i => i !== idx));
        } else {
            setOpenWhyChooseIndices([...openWhyChooseIndices, idx]);
        }
    };

    const whyChooseUsItems = [
        {
            title: 'Expertise in your subject',
            description: 'Your document will be edited by a native English speaker who is an expert in your subject area.',
            icon: '/images/academic-editorial-services/copy-editing-services/Expertise-in-your-subject.webp',
        },
        {
            title: 'Two pairs of eyes',
            description: 'Every edited document is reviewed by a senior editor to eliminate errors in grammar and language.',
            icon: '/images/academic-editorial-services/copy-editing-services/Two-pairs-of-eyes.webp',
        },
        {
            title: '100% quality guarantee',
            description: 'We are confident that our work will meet your expectations. If, however, you are not fully satisfied, we will re-edit your paper for free or return its fee, no questions asked.',
            icon: '/images/academic-editorial-services/copy-editing-services/100-quality-guarantee.webp',
        },
        {
            title: 'One-stop solution',
            description: 'We offer a range of publication solutions designed to offer end-to-end support, including translation, responses to peer reviewer comments, typesetting, book editing and design, and more.',
            icon: '/images/academic-editorial-services/copy-editing-services/One-stop-solution.webp',
        },
    ];

    const packages = [
        {
            letter: 'B',
            badgeSrc: '/images/publication-support/peer-review-pre-submission/Basic-480x480.webp',
            title: 'Basic',
            headerBg: 'bg-[#d8e2e0]',
            bodyBg: 'bg-[#e5edeb]',
            borderColor: 'border-[#cbd6d3]',
            titleColor: 'text-[#2b4c44]',
            idealFor: 'Early drafts, non-technical manuscripts',
            servicesInclude: 'Grammar, spelling, punctuation corrections; minor sentence restructuring',
            turnaroundTime: '3–5 business days',
        },
        {
            letter: 'S',
            badgeSrc: '/images/publication-support/poster-preparation/S.png',
            title: 'Standard',
            headerBg: 'bg-[#e2d6ec]',
            bodyBg: 'bg-[#ede5f4]',
            borderColor: 'border-[#d4c2e3]',
            titleColor: 'text-[#4a2e5d]',
            idealFor: 'Research papers, scholarly articles',
            servicesInclude: 'All Basic services + clarity improvements, flow and readability enhancement, adherence to journal style',
            turnaroundTime: '5–7 business days',
        },
        {
            letter: 'A',
            badgeSrc: '/images/publication-support/peer-review-pre-submission/advanced.webp',
            title: 'Advanced',
            headerBg: 'bg-[#dfcead]',
            bodyBg: 'bg-[#ebdcb9]',
            borderColor: 'border-[#d0bc93]',
            titleColor: 'text-[#5e4414]',
            idealFor: 'High-impact journals, technical manuscripts',
            servicesInclude: 'All Standard services + consistency checks, reference formatting, style guide alignment, language refinement for scientific tone',
            turnaroundTime: '7–10 business days',
        },
        {
            letter: 'P',
            badgeSrc: '/images/editing-and-translation/translation-with-editing/pro.webp',
            title: 'Premium',
            headerBg: 'bg-[#f7d6d6]',
            bodyBg: 'bg-[#fce5e5]',
            borderColor: 'border-[#f0c2c2]',
            titleColor: 'text-[#7a2828]',
            idealFor: 'Complex, multidisciplinary manuscripts',
            servicesInclude: 'All Advanced services + extensive structural editing, cross-checking of data and terminology, detailed feedback for author improvement',
            turnaroundTime: '10–14 business days',
        },
    ];

    const steps: WorkflowStep[] = [
        {
            stepNumber: 1,
            title: "REQUIREMENT ANALYSIS & PROJECT SCOPING",
            description:
                "We begin by understanding your manuscript type, target journal or publisher guidelines, discipline-specific requirements, and the level of editing needed. This helps us tailor the editorial approach to your objectives.",
            iconSrc: "/images/icons/step1.png",
            position: "top",
        },
        {
            stepNumber: 2,
            title: "ASSIGNMENT TO SUBJECT-MATTER EXPERTS",
            description:
                "Your document is assigned to a qualified editor with expertise in your research area, life sciences, medicine, engineering, social sciences, or humanities. This ensures accurate terminology, contextual understanding, and discipline-aligned language.",
            iconSrc: "/images/icons/step-2.png",
            position: "bottom",
        },
        {
            stepNumber: 3,
            title: "COMPREHENSIVE LANGUAGE & STYLE EDITING",
            description:
                "Our editors refine grammar, syntax, sentence structure, clarity, coherence, tone, and consistency. We ensure adherence to international styles such as AMA, APA, MLA, Chicago, or journal-specific standards.",
            iconSrc: "/images/icons/step-3.png",
            position: "top",
        },
        {
            stepNumber: 4,
            title: "TECHNICAL & STRUCTURAL IMPROVEMENTS",
            description:
                "We check for logical flow, readability, jargon reduction, paragraph transitions, data interpretation clarity, and consistency in terminology, tables, figures, and citations.",
            iconSrc: "/images/icons/step-4.png",
            position: "bottom",
        },
        {
            stepNumber: 5,
            title: "EDITORIAL QUALITY REVIEW",
            description:
                "A senior editor conducts a second-level review to ensure the manuscript meets Pubrica’s quality benchmarks for accuracy, clarity, formatting, and style consistency.",
            iconSrc: "/images/icons/step-5.png",
            position: "top",
        },
        {
            stepNumber: 6,
            title: "FINAL PROOFREADING & COMPLIANCE CHECK",
            description:
                "We run a final proofreading cycle to correct residual errors. This includes spelling, punctuation, formatting, cross-checks, and journal compliance verification.",
            iconSrc: "/images/icons/step-6.png",
            position: "bottom",
        },
    ];

    const experts: Expert[] = [
        {
            id: "sneha-kapoor",
            name: "Dr. Sneha Kapoor",
            title: "PhD in Molecular Biology",
            institution: "Indian Institute of Science, India",
            experience: "7+ Years Experience",
            papersEdited: "800+ Papers Edited",
            avatarUrl:
                "/images/academic-editorial-services/copy-editing-services/sneha-kapoor-.webp",
            flagUrl: "/images/country/india.png",
            bio: "Dr. Kapoor specializes in refining scientific manuscripts for clarity, style, and journal compliance.",
            expertise: "Genetics, molecular biology, biochemistry",
            journals: "Nature, Cell, PLOS ONE",
        },
        {
            id: "rohit-sharma",
            name: "Dr. Rohit Sharma",
            title: "PhD in Pharmacology",
            institution: "All India Institute of Medical Sciences, India",
            experience: "6+ Years Experience",
            papersEdited: "650+ Papers Edited",
            avatarUrl:
                "/images/academic-editorial-services/copy-editing-services/rohith-sharama.webp",
            flagUrl: "/images/country/india.png",
            bio: "Dr. Sharma focuses on enhancing manuscript readability, scientific accuracy, and adherence to submission guidelines.",
            expertise: "Drug development, pharmacokinetics, clinical pharmacology",
            journals:
                "British Journal of Pharmacology, The Lancet, Clinical Pharmacology & Therapeutics",
        },
        {
            id: "ananya-reddy",
            name: "Dr. Ananya Reddy",
            title: "PhD in Neuroscience",
            institution: "National Brain Research Centre, India",
            experience: "5+ Years Experience",
            papersEdited: "550+ Papers Edited",
            avatarUrl:
                "/images/academic-editorial-services/copy-editing-services/Dr.-ananya-reddy-.webp",
            flagUrl: "/images/country/india.png",
            bio: "Dr. Reddy provides detailed copy editing to ensure clarity, flow, and publication readiness for neuroscience manuscripts.",
            expertise: "Neurodegenerative disorders, cognitive neuroscience, neuroimaging",
            journals: "Neuron, Brain, Journal of Neuroscience",
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- SECTION 1: WORKFLOW ------------------- */}
            <EditorialWorkflowSection
                heading="How Our Copy Editing Service Works"
                subheading="Our Step-by-Step Process"
                description="Our copy editing workflow is designed to ensure clarity, accuracy, and publication-ready quality at every stage. With a structured, transparent, and research-driven approach, Pubrica guarantees seamless collaboration and superior editorial outcomes."
                steps={steps}
            />

            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Copy Editing Services at Pubrica"
                description="Our expert copy editors refine your content for clarity, accuracy, and consistency, ensuring your manuscript is polished, publication-ready, and aligned with global editorial standards."
            />

            {/* ------------------- SECTION 2: WHY CHOOSE US ACCORDION ------------------- */}
            <section className="py-6 px-4 max-w-5xl mx-auto" aria-labelledby="why-choose-us-heading">
                <h2 id="why-choose-us-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] text-center mb-10">
                    Why Should You Use Pubrica’s Professional Copy Editing Services?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {whyChooseUsItems.map((item, idx) => {
                        const isAccordionOpen = openWhyChooseIndices.includes(idx);
                        return (
                            <div
                                key={idx}
                                className="bg-[#f0f7f4] border border-emerald-100 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all"
                            >
                                <button
                                    onClick={() => toggleWhyChooseItem(idx)}
                                    className="w-full p-4 flex items-center justify-between text-left focus:outline-none bg-[#e8f2ee]/50 hover:bg-[#e2ece7] transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-6 h-6 flex-shrink-0">
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-bold text-[#0b3b2c]">{item.title}</span>
                                    </div>
                                    <span className="text-lg font-bold text-[#0b3b2c] w-6 h-6 flex items-center justify-center rounded bg-white border border-emerald-200 shadow-xs">
                                        {isAccordionOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {isAccordionOpen && (
                                    <div className="p-4 bg-white border-t border-emerald-100 text-xs text-gray-700 leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- SECTION 3: SAMPLE WORK ------------------- */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3542] tracking-tight">
                        Explore Sample Work From Our Professional Copy Editing Service
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        See how our expert editors refine language, enhance clarity, and ensure your manuscript is polished, publication-ready, and perfectly tailored to your audience.
                    </p>

                    <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 text-left">
                        <div className="border-b border-gray-200 pb-3">
                            <button
                                type="button"
                                className="px-5 py-2 text-sm font-semibold text-indigo-900 bg-indigo-50 border-b-2 border-indigo-600 rounded-t-md transition-colors"
                            >
                                Medicine
                            </button>
                        </div>

                        <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/20">
                            <div className="w-full h-[400px] overflow-auto rounded-lg shadow-md">
                                <iframe
                                    src="https://pubrica.com/wp-content/uploads/2025/12/v1-Copy-Editing-Service-sample-work.pdf"
                                    title="Sample editing work preview"
                                    className="w-full h-[350px] border-none rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- SECTION 4: EXPERTS SECTION (FIXED LAYOUT WRAPPER) ------------------- */}
            <div className="w-full py-2">
                <ExpertsSection
                    heading="Meet Our Copy Editing Experts"
                    subheading=""
                    experts={experts}
                />
            </div>
        </article>
    );
}
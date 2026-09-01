'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Development Editing Services & Key Features | Pubrica',
    description:
        'Explore Pubrica’s Development Editing Services, featuring our expert editors, packages, step-by-step process, document types, and sample work.',
};

interface Expert {
    name: string;
    qualification: string;
    institution: string;
    experience: string;
    papers: string;
}

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
            badgeSrc: '/images/publication-support/poster-preparation/B.png',
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

    const steps = [
        {
            id: 1,
            title: 'REQUIREMENT ANALYSIS & PROJECT SCOPING',
            description: 'We begin by understanding your manuscript type, target journal or publisher guidelines, discipline-specific requirements, and the level of editing needed. This helps us tailor the editorial approach to your objectives.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'ASSIGNMENT TO SUBJECT-MATTER EXPERTS',
            description: 'Your document is assigned to a qualified editor with expertise in your research area, life sciences, medicine, engineering, social sciences, or humanities. This ensures accurate terminology, contextual understanding, and discipline-aligned language.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'COMPREHENSIVE LANGUAGE & STYLE EDITING',
            description: 'Our editors refine grammar, syntax, sentence structure, clarity, coherence, tone, and consistency. We ensure adherence to international styles such as AMA, APA, MLA, Chicago, or journal-specific standards.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'TECHNICAL & STRUCTURAL IMPROVEMENTS',
            description: 'We check for logical flow, readability, jargon reduction, paragraph transitions, data interpretation clarity, and consistency in terminology, tables, figures, and citations.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            id: 5,
            title: 'EDITORIAL QUALITY REVIEW',
            description: 'A senior editor conducts a second-level review to ensure the manuscript meets Pubrica’s quality benchmarks for accuracy, clarity, formatting, and style consistency.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 6,
            title: 'FINAL PROOFREADING & COMPLIANCE CHECK',
            description: 'We run a final proofreading cycle to correct residual errors. This includes spelling, punctuation, formatting, cross-checks, and journal compliance verification.',
            icon: (
                <svg className="w-8 h-8 text-[#0b3b2c] mb-3 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },

    ];


    const publications = [
        {
            title: 'International Journal of Pharmacy and Pharmaceutical Sciences',
            journalTitle: 'International Journal of Pharmacy & Biotechnology',
            articleTitle: 'Algae Review',
            author: 'Jinu Medhi',
            publisher: 'Innovare Academic Sciences',
            impactFactor: 'NA',
            image: '/images/placeholder-cover.png',
            link: 'https://journals.innovareacademics.in/index.php/ijpps/article/view/39739',
        },
        {
            title: 'Journal of Clinical Dermatology & Therapy',
            journalTitle: 'Journal of Clinical Dermatology & Therapy',
            articleTitle: 'Dupilumab Systemic Review',
            author: 'Piyu Parth Naik',
            publisher: 'Herald Open Access',
            impactFactor: '0.68',
            image: '/images/placeholder-cover.png',
            link: 'https://www.heraldopenaccess.us/openaccess/a-systemic-review-of-dupilumab-efficacy-and-safety-by-phenotypic-variations-of-atopic-dermatitis',
        },
        {
            title: 'World Journal of Oncology',
            journalTitle: 'World Journal of Oncology',
            articleTitle: 'Cutaneous Malignant Melanoma',
            author: 'Piyu Parth Naik',
            publisher: 'Elmer Press Inc.',
            impactFactor: '2.2',
            image: '/images/placeholder-cover.png',
            link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7935621/',
        },
        // Add more publication items here to maintain continuous flow
    ];
    const documents = [
        'Research reports',
        'Abstracts',
        'Case studies',
        'Thesis manuscripts',
        'Cover letters',
        'Interviews',
        'Dissertations',
        'Case reports',
        'Technical reports and other academic documents',
        'Book chapters',
        'Grant proposals',
    ];

    const helpItems = [
        'Address big-picture elements to elevate your manuscript as a whole.',
        'Refine your argument for seamless flow throughout the text.',
        'Organise sections to logically support your argument.',
        'Strengthen your evidence for a compelling argument.',
        'Respond to peer reviewer or reader feedback.',
        'Ensure your tone and voice are targeted to your audience.',
        'Make large word count cuts without compromising clarity.',
        'Suggest ways to expand your content while maintaining quality.',
    ];

    const docTypes = [
        'Research manuscripts',
        'Thesis & dissertations',
        'Book chapters',
        'Academic textbooks',
        'Grants and funding proposals',
        'Systematic reviews & meta-analyses',
        'White papers and technical documents',
        'Reports, policy drafts, and educational materials',
    ];

    const experts: (Expert & { photo: string })[] = [
        {
            name: 'Dr. Sneha Kapoor',
            qualification: 'PhD in Molecular Biology',
            institution: 'Indian Institute of Science, India',
            experience: '7+',
            papers: '800+',
            photo: '/images/academic-editorial-services/copy-editing-services/sneha-kapoor-.webp',
        },
        {
            name: 'Dr. Rohit Sharma',
            qualification: 'PhD in Pharmacology',
            institution: 'All India Institute of Medical Sciences, India',
            experience: '+6',
            papers: '650+',
            photo: '/images/academic-editorial-services/copy-editing-services/rohith-sharama.webp',
        },
        {
            name: 'Dr. Ananya Reddy',
            qualification: 'PhD in Neuroscience',
            institution: 'National Brain Research Centre, India',
            experience: '5+',
            papers: '550+',
            photo: '/images/academic-editorial-services/copy-editing-services/Dr.-ananya-reddy-.webp',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">

            {/* ------------------- SECTION 2: STEP-BY-STEP PROCESS (INTERACTIVE TIMELINE) ------------------- */}
            <section className="py-7 px-4 bg-[#f8faf9] border-y border-gray-100 text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-1">
                    How Our Copy Editing Service Works
                </h2>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Our Step-by-Step Process
                </h3>
                <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Our copy editing workflow is designed to ensure clarity, accuracy, and publication-ready quality at every stage. With a structured, transparent, and research-driven approach, Pubrica guarantees seamless collaboration and superior editorial outcomes.
                </p>

                <div className="max-w-7xl mx-auto relative px-4">
                    <div className="hidden md:block absolute top-[50%] left-[5%] right-[5%] h-[4px] bg-[#0088cc] -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center relative z-10">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <div key={step.id} className="flex flex-col items-center group">
                                    {!isEven ? (
                                        <>
                                            <div className="w-full bg-white border border-gray-300 rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[300px] transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:text-white shadow-sm group-hover:shadow-xl cursor-pointer mb-6">
                                                {step.icon}
                                                <h4 className="text-[11px] font-bold mb-2 text-gray-900 group-hover:text-white transition-colors leading-snug">
                                                    {step.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>

                                            <div className="w-9 h-9 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center text-xs group-hover:bg-[#0088cc] transition-colors shadow-md z-10">
                                                {step.id}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-9 h-9 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center text-xs group-hover:bg-[#0088cc] transition-colors shadow-md z-10 mb-6">
                                                {step.id}
                                            </div>

                                            <div className="w-full bg-white border border-gray-300 rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[300px] transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:text-white shadow-sm group-hover:shadow-xl cursor-pointer">
                                                {step.icon}
                                                <h4 className="text-[11px] font-bold mb-2 text-gray-900 group-hover:text-white transition-colors leading-snug">
                                                    {step.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------- UPDATED WHY CHOOSE US ACCORDION SECTION ------------------- */}
            <section className="py-6 px-4 max-w-5xl mx-auto" aria-labelledby="why-choose-us-heading">
                <h2 id="why-choose-us-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] text-center mb-10">
                    Why Should You Use Pubrica’s Professional Copy Editing Services?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {whyChooseUsItems.map((item, idx) => {
                        const isOpen = openWhyChooseIndices.includes(idx);
                        return (
                            <div
                                key={idx}
                                className="bg-[#f0f7f4] border border-emerald-100 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all"
                            >
                                {/* Accordion Header */}
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
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {/* Accordion Content Panel (conditionally rendered or animated) */}
                                {isOpen && (
                                    <div className="p-4 bg-white border-t border-emerald-100 text-xs text-gray-700 leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- SECTION 3: HOW OUR EDITORS CAN HELP ------------------- */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Header Content */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3542] tracking-tight">
                        Explore Sample Work From Our Professional Copy Editing Service
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        See how our expert editors refine language, enhance clarity, and ensure your manuscript is polished, publication-ready, and perfectly tailored to your audience.
                    </p>

                    {/* Card Container */}
                    <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 text-left">
                        {/* Tab Button */}
                        <div className="border-b border-gray-200 pb-3">
                            <button
                                type="button"
                                className="px-5 py-2 text-sm font-semibold text-indigo-900 bg-indigo-50 border-b-2 border-indigo-600 rounded-t-md transition-colors"
                            >
                                Medicine
                            </button>
                        </div>

                        {/* PDF Preview Frame Container */}
                        <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/20">
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/path-to-your-sample-preview.jpg"
                                    alt="Sample editing work preview"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- SECTION 4: TYPES OF DOCUMENTS WE EDIT (WITH IMAGE ICONS) ------------------- */}

            {/* ------------------- SECTION 5: EXPERTS & SAMPLE WORK ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto text-center" aria-labelledby="experts-heading">
                <h2 id="experts-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-10">
                    Meet Our Copy Editing Experts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {experts.map((exp, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                            <div className="relative w-16 h-16 rounded-full mb-4 overflow-hidden">
                                <Image src={exp.photo} alt={exp.name} fill className="object-cover" sizes="64px" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">{exp.name}</h3>
                            <p className="text-xs text-gray-600 mt-1">{exp.qualification}</p>
                            <p className="text-[11px] text-gray-500 mt-0.5">{exp.institution}</p>
                            <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-between text-[11px] text-gray-600">
                                <span>{exp.experience} Years Experience</span>
                                <span>{exp.papers} Papers Edited</span>
                            </div>
                            <Link href="/about-us/our-editors" className="mt-4 text-xs font-bold text-blue-600 no-underline hover:no-underline">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
                <section className="w-full max-w-4xl mx-auto py-6 px-4">
                    {/* Accordion Header */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-start gap-4 px-6 py-4 bg-[#0A3231] hover:bg-[#072423] text-white text-left font-medium text-lg transition-colors duration-200"
                        aria-expanded={isOpen}
                    >
                        <span className="text-xl font-normal leading-none select-none">
                            {isOpen ? '−' : '+'}
                        </span>
                        <span>Fundamentals of the Copy Editing Process</span>
                    </button>

                    {/* Accordion Content */}
                    {isOpen && (
                        <div className="bg-white py-6 px-8 border-x border-b border-gray-100 shadow-sm">
                            <ul className="space-y-3 list-disc pl-5 text-gray-700 text-base leading-relaxed">
                                {items.map((item, index) => (
                                    <li key={index} className="pl-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section className="w-full bg-[#f2f4f3] py-7 px-4 sm:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto text-center">
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3542]">
                            Copy Editing Services Can Benefit A Range Of Documents
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Each subject area and associated journals have varying requirements for manuscript format. Pubrica supports every type of manuscript. Here are the most popular manuscript types Pubrica covers.
                        </p>

                        {/* Document Grid List */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 text-left">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#0F3542] flex items-center justify-center text-white">
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-[#0F3542] font-semibold text-sm sm:text-base leading-snug">
                                        {doc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-6 bg-white overflow-hidden" aria-labelledby="recent-publications-heading">
                    {/* Embedded styles for the marquee animation */}
                    <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

                    <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
                        <h2 id="recent-publications-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c]">
                            Recent Publications
                        </h2>
                    </div>

                    {/* Moving Marquee Container */}
                    <div className="relative w-full overflow-hidden">
                        <div className="animate-marquee gap-6">
                            {/* Render list twice to create a seamless infinite loop */}
                            {[...publications, ...publications].map((pub, idx) => (
                                <div
                                    key={idx}
                                    className="w-[350px] md:w-[380px] bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between flex-shrink-0"
                                >
                                    <div className="flex gap-4 items-start">
                                        {/* Journal Cover Image Thumbnail */}
                                        <div className="relative w-20 h-28 flex-shrink-0 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                                            <Image
                                                src={pub.image}
                                                alt={pub.journalTitle}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Publication Details */}
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                                                {pub.journalTitle}
                                            </h3>
                                            <p className="text-[11px] text-gray-600 mb-0.5">
                                                <strong className="text-gray-800">Title:</strong> {pub.articleTitle}
                                            </p>
                                            <p className="text-[11px] text-gray-600 mb-0.5">
                                                <strong className="text-gray-800">Author:</strong> {pub.author}
                                            </p>
                                            <p className="text-[11px] text-gray-600 mb-0.5">
                                                <strong className="text-gray-800">Publisher:</strong> {pub.publisher}
                                            </p>
                                            <p className="text-[11px] text-gray-600">
                                                <strong className="text-gray-800">Impact Factor:</strong> {pub.impactFactor}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Visit Button */}
                                    <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-1.5 bg-[#0b3b2c] hover:bg-[#07261d] text-white text-xs font-semibold rounded transition-colors shadow-sm"
                                        >
                                            Visit
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Sample Work Section */}

                {/* ------------------- SECTION 1.5: DEVELOPMENT EDITING SERVICES - PACKAGES ------------------- */}
                <section className="py-6 px-4 max-w-6xl mx-auto text-center" aria-labelledby="packages-heading">
                    <div className="max-w-4xl mx-auto mb-12">
                        <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                            Development Editing Services – Our Packages
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Explore our comprehensive Development Editing packages designed to strengthen your manuscript's structure, flow, and overall narrative quality. Each package is tailored to address the unique needs of authors, ensuring clarity, coherence, and impactful presentation at every stage of writing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-white border ${pkg.borderColor} rounded-lg shadow-sm flex flex-col overflow-hidden`}>
                                {/* Header */}
                                <div className={`${pkg.headerBg} p-5 border-b ${pkg.borderColor} flex items-center gap-3`}>
                                    <div className="relative w-10 h-10 flex-shrink-0">
                                        <Image src={pkg.badgeSrc} alt={`${pkg.title} package`} fill className="object-contain" />
                                    </div>
                                    <h3 className={`text-base font-bold ${pkg.titleColor || 'text-gray-900'}`}>{pkg.title}</h3>
                                </div>

                                {/* Body */}
                                <div className={`${pkg.bodyBg || 'bg-gray-50'} p-6 flex flex-col justify-between flex-grow space-y-4`}>
                                    {/* Ideal For */}
                                    <div className="flex items-start gap-2">
                                        <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                                            ➔
                                        </span>
                                        <p className="text-xs text-gray-800 leading-relaxed">
                                            <strong className="font-bold text-gray-900">Ideal For:</strong> {pkg.idealFor}
                                        </p>
                                    </div>

                                    {/* Services Include / Includes */}
                                    <div className="flex items-start gap-2">
                                        <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                                            ➔
                                        </span>
                                        <p className="text-xs text-gray-800 leading-relaxed">
                                            <strong className="font-bold text-gray-900">Services Include:</strong> {pkg.servicesInclude}                                        </p>
                                    </div>

                                    {/* Turnaround Time (if applicable) */}
                                    {pkg.turnaroundTime && (
                                        <div className="flex items-start gap-2">
                                            <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                                                ➔
                                            </span>
                                            <p className="text-xs text-gray-800 leading-relaxed">
                                                <strong className="font-bold text-gray-900">Turnaround Time:</strong> {pkg.turnaroundTime}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <GetFreeQuoteButton />
                </section>
            </section>

        </article>
    );
}
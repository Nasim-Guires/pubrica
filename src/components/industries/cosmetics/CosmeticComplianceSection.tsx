"use client"


import React, { useState } from 'react';
import Image from 'next/image';

interface ComplianceItem {
    title: string;
    description: string;
    iconSrc?: string;
}

interface PublicationDetails {
    title: string;
    author: string;
    journal: string;
    publisher: string;
    impactFactor: string;
    image: string;
}

interface ExpertEditor {
    name: string;
    role: string;
    experience: string;
    manuscripts: string;
    avatar: string;
    flag: string;
}

interface CosmeticsAuthorsAndComplianceProps {
    sectionTitle?: string;
    sectionSubtitle?: string;
    items?: ComplianceItem[];
    authorsSectionTitle?: string;
    authorsSectionSubtitle?: string;
    publication?: PublicationDetails;
    editorsSectionTitle?: string;
    editorsSectionSubtitle?: string;
    editors?: ExpertEditor[];
}

const defaultComplianceItems: ComplianceItem[] = [
    {
        title: 'Sustainability & Ethical Practices',
        iconSrc: '/images/industries/cosmetics/sustainability-and-ethical-practices.webp',
        description: 'Support for natural, organic, and cruelty-free certifications to align with consumer expectations and regulatory norms.'
    },
    {
        title: 'Clinical & Dermatological Guidelines',
        iconSrc: '/images/industries/cosmetics/clinical-and-dermatological-guidelines.webp',
        description: 'Conduct and document studies following Good Clinical Practice (GCP) and ethical standards for skin and hair care products.'
    },
    {
        title: 'Labelling & Claims Substantiation',
        iconSrc: '/images/industries/cosmetics/labeling-and-claims-substantiation.webp',
        description: 'Review and validation of product labels, marketing claims, and advertising materials to ensure compliance with legal and ethical requirements.'
    },
    {
        title: 'Regulatory Adherence',
        iconSrc: '/images/industries/cosmetics/regulatory-adherence.webp',
        description: 'Guidance on FDA (US), EU Cosmetics Regulation, ASEAN Cosmetic Directives, and other regional standards.'
    },
    {
        title: 'Safety & Quality Standards',
        iconSrc: '/images/industries/cosmetics/safety-and-quality-standarad.webp',
        description: 'Comprehensive assessment of ingredients, formulations, and finished products to ensure consumer safety.'
    }
];

const defaultPublication: PublicationDetails = {
    title: 'Dermoscopy of Facial Dermatoses: An Updated Review',
    author: 'Filipović Mioč, N., Negovetić, P., Gačina, K., & Buljan, M',
    journal: 'Cosmetics',
    publisher: 'MDPI',
    impactFactor: '3.2',
    image: '/images/industries/cosmetics/sample-works-2-2.webp'
};

const defaultEditors: ExpertEditor[] = [
    {
        name: 'Dr. Ananya Mehta',
        role: 'PhD, MSc - Cosmetic Science & Dermatology',
        experience: '15 years of experience',
        manuscripts: '80+ manuscripts edited',
        avatar: '/images/industries/nutraceutical-research/Dr.-Ananya-Mehta-2.webp',
        flag: ''
    },
    {
        name: 'Dr. Priya Nair',
        role: 'PhD, M Pharm - Cosmeceuticals & Skincare Research',
        experience: '12 years of Experience',
        manuscripts: '70+ manuscripts edited',
        avatar: '/images/industries/nutraceutical-research/Dr.-Priya-Nair-1.webp',
        flag: ''
    },
    {
        name: 'Dr. Kiran Sharma',
        role: 'PhD, MD - Dermatology & Aesthetic Medicine',
        experience: '18 Years of Experience',
        manuscripts: '95+ manuscripts edited',
        avatar: '/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp',
        flag: ''
    }
];

export default function CosmeticsAuthorsAndCompliance({
    sectionTitle = 'Our Compliance And Guidelines For Cosmetics',
    sectionSubtitle = 'At Pubrica, we ensure that every cosmetic product you develop, market, or publish adheres to the highest standards of safety, efficacy, and regulatory compliance. Our team combines scientific expertise with in-depth knowledge of global cosmetic regulations to help your brand succeed confidently.',
    items = defaultComplianceItems,
    authorsSectionTitle = 'Where Our Authors Publish',
    authorsSectionSubtitle = "Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.",
    publication = defaultPublication,
    editorsSectionTitle = 'Our Expert Cosmetic Editors',
    editorsSectionSubtitle = "Pubrica's team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.",
    editors = defaultEditors
}: CosmeticsAuthorsAndComplianceProps) {
    // Use a single number state to track only the currently open card index, or null if all are closed
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

            {/* Compliance And Guidelines Section */}
            <section className="py-7 px-6 max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{sectionTitle}</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {sectionSubtitle}
                    </p>
                </div>

                {/* Grid layout matching the exact design reference (3 top cards, 2 centered bottom cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        const isCenteredBottomRow = index >= 3;

                        return (
                            <div
                                key={index}
                                className={`bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all ${isCenteredBottomRow ? 'lg:col-span-1 lg:mx-auto lg:w-full max-w-md' : ''
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 pr-2">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            {item.iconSrc ? <Image src={item.iconSrc} alt="" fill className="object-contain" sizes="32px" /> : null}
                                        </div>
                                        <span className="font-bold text-sm sm:text-base text-[#0f2824] leading-snug">{item.title}</span>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 pt-1 text-gray-600 text-xs sm:text-sm border-t border-gray-100 bg-gray-50/30 leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Where Our Authors Publish Section */}
            <section className="py-7 px-6 max-w-6xl mx-auto border-t border-gray-100">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{authorsSectionTitle}</h2>
                    <div className="w-12 h-1 bg-[#0f2824] mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {authorsSectionSubtitle}
                    </p>
                </div>

                {/* Publication Showcase Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-full md:w-[280px] h-[340px] flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                        <Image
                            src={publication.image}
                            alt={publication.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 280px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="flex-1 space-y-3 text-left">
                        <div>
                            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Featured Paper</span>
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f2824] mt-2 mb-3 leading-snug">
                                Paper Title: <span className="font-normal text-gray-800">{publication.title}</span>
                            </h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            <strong className="text-[#0f2824]">Author:</strong> {publication.author}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong className="text-[#0f2824]">Journal Name:</strong> {publication.journal}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong className="text-[#0f2824]">Publisher:</strong> {publication.publisher}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong className="text-[#0f2824]">Impact factor:</strong> {publication.impactFactor}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Expert Cosmetic Editors Section */}
            <section className="py-7 px-6 max-w-6xl mx-auto border-t border-gray-100">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{editorsSectionTitle}</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {editorsSectionSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editors.map((editor, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-b from-[#eaf2ef] to-[#d4e6e0] border border-[#bcdad0] rounded-2xl p-6 shadow-sm flex flex-col justify-between text-center relative overflow-hidden"
                        >
                            <div>
                                <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <Image
                                        src={editor.avatar}
                                        alt={editor.name}
                                        fill
                                        sizes="64px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <h3 className="font-bold text-base text-[#0f2824]">{editor.name}</h3>
                                    {editor.flag ? <span className="text-sm">{editor.flag}</span> : null}
                                </div>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium mb-6 leading-relaxed">
                                    {editor.role}
                                </p>
                            </div>

                            <div className="border-t border-[#b2d3c7] pt-4 grid grid-cols-2 gap-2 text-center">
                                <div>
                                    <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Experience</p>
                                    <p className="text-xs sm:text-sm font-bold text-[#0f2824] mt-0.5">{editor.experience}</p>
                                </div>
                                <div className="border-l border-[#b2d3c7]">
                                    <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Edited</p>
                                    <p className="text-xs sm:text-sm font-bold text-[#0f2824] mt-0.5">{editor.manuscripts}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
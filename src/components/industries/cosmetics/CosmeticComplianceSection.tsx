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
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index) // Close if already open
                : [...prev, index]             // Open alongside other open cards
        );
    };

    return (
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

            {/* Compliance And Guidelines Section */}
            <section className="py-7 px-6 max-w-6xl mx-auto">
                <div className="text-left max-w-3xl mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{sectionTitle}</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {sectionSubtitle}
                    </p>
                </div>

                {/* Grid layout matching the exact design reference (3 top cards, 2 centered bottom cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
                    {items.map((item, index) => {
                        const isOpen = openIndices.includes(index);
                        const isCenteredBottomRow = index >= 3;

                        return (
                            <div
                                key={index}
                                className={`bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all self-start ${isCenteredBottomRow ? 'lg:col-span-1 lg:mx-auto lg:w-full max-w-md' : ''
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

            <section className="py-12 max-w-5xl mx-auto px-4 border-t border-gray-100">
                <div className="text-left max-w-2xl mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
                        {authorsSectionTitle}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {authorsSectionSubtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
                        <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
                            <Image
                                src={publication.image}
                                alt={publication.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 200px"
                                className="object-contain p-1"
                            />
                        </div>

                        <div className="space-y-3 text-sm md:text-base text-gray-700">
                            <div>
                                <span className="font-bold text-gray-900">Paper Title: </span>
                                <span className="text-gray-800">
                                    {publication.title}
                                </span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Author: </span>
                                <span>{publication.author}</span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Journal Name: </span>
                                <span className="text-[#1b3b32] font-semibold">
                                    {publication.journal}
                                </span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Publisher: </span>
                                <span>{publication.publisher}</span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Impact factor: </span>
                                <span>{publication.impactFactor}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Expert Cosmetic Editors Section */}

            <section className="py-12 max-w-6xl mx-auto px-4 border-t border-gray-100">
                <div className="text-left max-w-2xl mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
                        {editorsSectionTitle}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {editorsSectionSubtitle}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editors.map((editor, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
                        >
                            <div className="flex items-center space-x-4 mb-4 w-full">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                                    <Image
                                        src={editor.avatar}
                                        alt={editor.name}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-gray-900 text-base">
                                            {editor.name}
                                        </h3>

                                        {editor.flag ? (
                                            <span className="text-sm">{editor.flag}</span>
                                        ) : null}
                                    </div>

                                    <p className="text-xs text-[#1b3b32] font-semibold">
                                        {editor.role}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                                <p>{editor.experience}</p>
                                <p>{editor.manuscripts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
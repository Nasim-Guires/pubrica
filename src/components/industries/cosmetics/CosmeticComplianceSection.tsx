"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

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

const expertEditors: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Mehta",
        degree: "PhD, MSc – Cosmetic Science & Dermatology",
        experience: "15 years of experience",
        manuscripts: "80+ manuscripts edited",
        avatar: "/images/industries/nutraceutical-research/Dr.-Ananya-Mehta-2.webp",
        flag: "/images/country/gb.png",
    },
    {
        name: "Dr. Priya Nair",
        degree: "PhD, M Pharm – Cosmeceuticals & Skincare Research",
        experience: "12 Years of Experience",
        manuscripts: "70+ manuscripts edited",
        avatar: "/images/industries/nutraceutical-research/Dr.-Priya-Nair-1.webp",
        flag: "/images/country/us.png",
    },
    {
        name: "Dr. Kiran Sharma",
        degree: "PhD, MD – Dermatology & Aesthetic Medicine",
        experience: "18 Years of Experience",
        manuscripts: "95+ manuscripts",
        avatar: "/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp",
        flag: "/images/country/us.png",
    },
];

export default function CosmeticsAuthorsAndCompliance({
    sectionTitle = 'Our Compliance And Guidelines For Cosmetics',
    sectionSubtitle = 'At Pubrica, we ensure that every cosmetic product you develop, market, or publish about adheres to the highest standards of safety, efficacy, and regulatory compliance. Our team combines scientific expertise with in-depth knowledge of global cosmetic regulations to help your brand succeed confidently.',
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
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden space-y-2">

            {/* Compliance And Guidelines Section */}
            <section className="py-4 px-6 w-full bg-sky-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-4">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824]">{sectionTitle}</h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {sectionSubtitle}
                        </p>
                    </div>

                    {/* Grid layout (Top 3 full-width cards, Bottom 2 reduced size cards centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 items-start">
                        {items.map((item, index) => {
                            const isOpen = openIndices.includes(index);

                            // Top row: 3 cards taking 2 columns each (lg:col-span-2)
                            // Bottom row: 2 cards taking 3 columns each with reduced maximum width (max-w-md)
                            const gridClass =
                                index < 3
                                    ? 'lg:col-span-2 w-full'
                                    : 'lg:col-span-3 max-w-md w-full justify-self-center';

                            return (
                                <div
                                    key={index}
                                    className={`bg-white border border-sky-100 rounded-2xl shadow-sm overflow-hidden transition-all self-start ${gridClass}`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-2.5 px-4 flex items-center justify-between text-left focus:outline-none hover:bg-sky-50/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-2.5 pr-2 w-full min-w-0">
                                            <div className="relative w-7 h-7 flex-shrink-0">
                                                {item.iconSrc ? (
                                                    <Image
                                                        src={item.iconSrc}
                                                        alt=""
                                                        fill
                                                        className="object-contain"
                                                        sizes="28px"
                                                    />
                                                ) : null}
                                            </div>
                                            <span className="font-bold text-sm sm:text-base text-[#0f2824] leading-snug whitespace-normal break-words w-full">
                                                {item.title}
                                            </span>
                                        </div>
                                        <svg
                                            className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {isOpen && (
                                        <div className="px-4 pb-3 pt-1 text-gray-600 text-xs sm:text-sm border-t border-sky-100 bg-sky-50/20 leading-relaxed whitespace-normal break-words w-full">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Where Our Authors Publish Section */}

            <section className="py-2 max-w-5xl mx-auto px-4 border-t border-gray-100">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={{
                        imageSrc:
                            "/images/industries/cosmetics/sample-works-2-2.webp",
                        imageAlt: "Cosmetics Journal Cover",
                        paperTitle: "Dermoscopy of Facial Dermatoses: An Updated Review",
                        author: "Filipović Mioč, N., Negovetić, P., Gaćina, K., & Buljan, M",
                        journalName: "Cosmetics",
                        publisher: "MDPI",
                        impactFactor: "3.2",
                    }}
                />
            </section>

            {/* Our Expert Cosmetic Editors Section */}

            <section className="py-2 max-w-6xl mx-auto px-4 border-t border-gray-100">
                <ExpertEditorsSection
                    title="Our Expert Cosmeceutical Editors"
                    description="Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
                    editors={expertEditors}
                />
            </section>
        </div>
    );
}
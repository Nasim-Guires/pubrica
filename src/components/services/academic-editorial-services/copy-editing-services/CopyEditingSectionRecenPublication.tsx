'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

// TypeScript Interfaces for Props and Data
export interface PublicationItem {
    id: string;
    title: string;
    articleTitle: string;
    author: string;
    publisher: string;
    impactFactor: string | number;
    coverImage?: string;
    linkUrl: string;
}

interface Publication {
    id: string;
    journalTitle: string;
    paperTitle: string;
    author: string;
    publisher: string;
    impactFactor: string;
    coverImage: string;
    linkUrl: string;
}

const recentPublications: Publication[] = [
    {
        id: "pub-1",
        journalTitle: "World Journal of Oncology",
        paperTitle:
            "Cutaneous Malignant Melanoma: A Review of Early Diagnosis and Management",
        author: "Piyu Parth Naik",
        publisher: "Elmer Press Inc.",
        impactFactor: "2.2",
        coverImage:
            "/images/editing-and-translation/manuscript-editing/JOURNAL-TEMPLATE-COVER-IMAGE-.png",
        linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7935621/",
    },
    {
        id: "pub-2",
        journalTitle: "The Journal of laryngology and otology",
        paperTitle:
            "Regenerative Medicine for End-Stage Fibrosis and Tissue Loss in the Upper Aerodigestive Tract: A Twenty-First Century Review",
        author: "F R Green, N M Shubber, F S Koumpa, N J I Hamilton",
        publisher: "Cambridge University Press",
        impactFactor: "0.8",
        coverImage:
            "/images/editing-and-translation/manuscript-editing/JOURNAL-TEMPLATE-COVER-IMAGE-2.png",
        linkUrl: "https://pubmed.ncbi.nlm.nih.gov/33988100/",
    },
    {
        id: "pub-3",
        journalTitle: "Journal of Applied Biology & Biotechnology",
        paperTitle:
            "Astaxanthin: An alga-based natural compound with a potential role in human health-promoting effects: An Updated Comprehensive Review",
        author: "Jinu Medhi and Mohan Chandra Kalita",
        publisher: "Open Science Publishers LLP",
        impactFactor: "NA",
        coverImage:
            "/images/editing-and-translation/manuscript-editing/JOURNAL-TEMPLATE-COVER-IMAGE-3.png",
        linkUrl: "https://www.jabonline.in/admin/php/uploads/510_pdf.pdf",
    },
    {
        id: "pub-4",
        journalTitle:
            "International Journal of Pharmacy and Pharmaceutical Sciences",
        paperTitle:
            "An Emerging Aquatic Green Gold for Food and Medicine: A Review of Algae from North East India",
        author: "Jinu Medhi and Mohan Chandra Kalita",
        publisher: "Innovare Academic Sciences Pvt. Ltd.",
        impactFactor: "NA",
        coverImage:
            "/images/editing-and-translation/manuscript-editing/JOURNAL-TEMPLATE-COVER-IMAGE-4.png",
        linkUrl:
            "https://journals.innovareacademics.in/index.php/ijpps/article/view/39739",
    },
    {
        id: "pub-5",
        journalTitle: "Journal of Clinical Dermatology & Therapy",
        paperTitle:
            "A Systemic Review on Psoriasis Management by Phenotypic Variations and Targeted Therapies",
        author: "Piyu Parth Naik",
        publisher: "Herald Scholarly Open Access",
        impactFactor: "0.68",
        coverImage:
            "/images/editing-and-translation/manuscript-editing/JOURNAL-TEMPLATE-COVER-IMAGE-5.png",
        linkUrl: "#",
    },
];

const packages: PackageItem[] = [
    {
        icon: "/images/editing-and-translation/basic-pacakge.png",
        title: "Basic",
        idealFor: "Early drafts, non-technical manuscripts",
        includes: [
            "Grammar, spelling, and punctuation corrections",
            "Minor sentence restructuring",
        ],
        turnaround: "3–5 business days",
        cardBgColor: "#e2e8f0",
        titleColor: "#1e3a8a",
    },
    {
        icon: "/images/publication-support/art-work-preparation/S.png",
        title: "Standard",
        idealFor: "Research papers, scholarly articles",
        includes: [
            "All Basic services",
            "Clarity improvements",
            "Flow and readability enhancement",
            "Adherence to journal style",
        ],
        turnaround: "5–7 business days",
        cardBgColor: "#dab9e0",
        titleColor: "#1e3a8a",
    },
    {
        icon: "/images/icons/advanced.webp",
        title: "Advanced",
        idealFor: "High-impact journals, technical manuscripts",
        includes: [
            "All Standard services",
            "Consistency checks",
            "Reference formatting",
            "Style guide alignment",
            "Language refinement for scientific tone",
        ],
        turnaround: "7–10 business days",
        cardBgColor: "#d8bc83",
        titleColor: "#1e3a8a",
    },
    {
        icon: "/images/editing-and-translation/pro.webp",
        title: "Premium",
        idealFor: "Complex, multidisciplinary manuscripts",
        includes: [
            "All Advanced services",
            "Extensive structural editing",
            "Cross-checking of data and terminology",
            "Detailed feedback for author improvement",
        ],
        turnaround: "10–14 business days",
        cardBgColor: "#d8bc83",
        titleColor: "#1e3a8a",
    },
];

export interface CopyEditingSectionProps {
    manuscriptTypes?: string[];
    fundamentalsList?: string[];
    publications?: PublicationItem[];
}

const defaultManuscriptTypes = [
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

const defaultFundamentals = [
    'Citation formatting per journal requirements',
    'Adherence to the requirements of the concerned journal/publisher or style guide',
    'Proper use of terminology',
    'Correct use of capitalization or italics for industry/scientific terms',
    'Consistency in presentation of data',
    'Adjustments depending on the topic and journal readership',
];

export default function CopyEditingSectionRecenPublication({
    manuscriptTypes = defaultManuscriptTypes,
    fundamentalsList = defaultFundamentals,
}: CopyEditingSectionProps) {
    // State to manage accordion open/closed state (default is false/closed)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full bg-[#f8f9fa] text-gray-800 font-sans overflow-hidden">

            {/* 1. Fundamentals of the Copy Editing Process (Interactive Accordion, Green Color, Reduced Width, Centered) */}
            <div className="flex justify-center my-8 px-4">
                <div className="w-full max-w-4xl bg-[#0E3238] text-white rounded-lg shadow-md overflow-hidden">
                    {/* Accordion Header (Clickable) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-[#0b282d]"
                    >
                        <h3 className="text-lg md:text-xl font-medium tracking-wide flex items-center gap-3">
                            <span className="text-xl font-bold">{isOpen ? '—' : '+'}</span> Fundamentals of the Copy Editing Process
                        </h3>
                        <svg
                            className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Accordion Content (Shows only when open) */}
                    {isOpen && (
                        <div className="bg-white text-gray-700 px-6 py-6 border-t border-[#0b282d]/20 transition-all">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {fundamentalsList.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-[#0E3238] font-bold mt-1">•</span>
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* 2. Copy Editing Services Can Benefit A Range Of Documents */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0E3238] mb-4">
                    Copy Editing Services Can Benefit A Range Of Documents
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
                    Each subject area and associated journals have varying requirements for manuscript format.
                    Pubrica supports every type of manuscript. Here are the most popular manuscript types Pubrica covers.
                </p>

                {/* Manuscript Types Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {manuscriptTypes.map((type, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-7 h-7 rounded-full bg-[#0E3238] text-white flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <span className="text-sm md:text-base font-medium text-gray-800">{type}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Recent Publications (Centered, Reduced Width Marquee Container) */}
            <section className="text-center pt-4 pb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-8">
                    Recent Publications
                </h2>

                {/* Section container widened to max-w-5xl / 6xl */}
                <div className="max-w-3xl sm:max-w-5xl lg:max-w-6xl mx-auto px-4">
                    <div className="overflow-hidden w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div className="flex w-max animate-[publicationMarquee_60s_linear_infinite] hover:[animation-play-state:paused]">
                            {[...recentPublications, ...recentPublications].map((pub, index) => (
                                <div
                                    key={`${pub.id}-${index}`}
                                    className="w-[340px] sm:w-[420px] px-3 flex-shrink-0"
                                >
                                    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-shadow h-full">
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-3 leading-snug line-clamp-2">
                                                {pub.journalTitle}
                                            </h3>

                                            <div className="flex gap-4 mb-4 items-start">
                                                {/* Publication Journal Cover */}
                                                <div className="w-20 h-28 relative flex-shrink-0 border border-slate-200 bg-slate-100 rounded overflow-hidden">
                                                    <Image
                                                        src={pub.coverImage}
                                                        alt={pub.journalTitle}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Metadata details */}
                                                <div className="text-xs space-y-1.5 text-slate-600">
                                                    <p className="line-clamp-2">
                                                        <strong className="text-slate-800">Title:</strong>{" "}
                                                        {pub.paperTitle}
                                                    </p>

                                                    <p className="truncate">
                                                        <strong className="text-slate-800">Author:</strong>{" "}
                                                        {pub.author}
                                                    </p>

                                                    <p className="truncate">
                                                        <strong className="text-slate-800">Publisher:</strong>{" "}
                                                        {pub.publisher}
                                                    </p>

                                                    <p>
                                                        <strong className="text-slate-800">
                                                            Impact Factor:
                                                        </strong>{" "}
                                                        {pub.impactFactor}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visit Link Button */}
                                        <Link
                                            href={pub.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block w-fit px-6 py-1.5 bg-[#121c4e] text-white font-medium text-xs rounded hover:bg-[#0a1236] transition-colors text-center"
                                        >
                                            Visit
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
        @keyframes publicationMarquee {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-50%);
            }
        }
    `}</style>
            </section>

            {/* Tailwind Custom Keyframe Styles for Slow Marquee */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>

            <section className="bg-white">
                <CommonPackages
                    title="Copy Editing Services – Our Packages"
                    description="At Pubrica, we offer tailored copy editing services to ensure your manuscript is polished, clear, and publication-ready. Our packages cater to different levels of editing needs, from basic language refinement to comprehensive editorial support. Each package is designed to improve readability, grammar, style, and formatting while maintaining the integrity of your original research."
                    packages={packages}
                />
                <div className="pb-6 text-center">
                    <GetFreeQuoteButton />
                </div>
            </section>
        </section>
    );
}
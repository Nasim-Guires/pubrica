'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import ServiceBanner from '@/components/common/ServiceBanner';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';





export default function WhoWeServeAndProcessLiterature() {
    /* ------------------- DATA ARRAYS ------------------- */

    const [activeCardId, setActiveCardId] = useState<string | number | null>(null);
    const handleCardClick = (id: string | number) => {
        // Toggles the card overlay open/close on touch/click
        setActiveCardId((prev) => (prev === id ? null : id));
    };
    const whoWeServeCards = [
        {
            id: 1,
            title: 'PhD Scholars & Academic Researchers',
            bullets: [
                'Systematic and narrative literature reviews',
                'Reference sourcing for theses, dissertations, and journal submissions',
                'Support with reviewer comments requiring additional citations',
            ],
            imageUrl: '/images/publication-support/plagiarism-services/PhD-Scholars-and-Doctoral-Candidates.jpg',
        },
        {
            id: 2,
            title: 'Clinical & Healthcare Professionals',
            bullets: [
                'Evidence mapping for treatment protocols',
                'Literature support for case studies, audits, or clinical guidelines',
                'Identification of peer-reviewed clinical outcomes',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Clinical-Healthcare-Professionals.jpg',
        },
        {
            id: 3,
            title: 'Product Development & R&D Teams',
            bullets: [
                'Literature support for nutraceutical, food, pharma, ayurveda, and biotech products',
                'Ingredient intelligence backed by clinical and preclinical studies',
                'Research insights for product positioning and regulatory compliance',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Product-Development-RD-Teams.jpg',
        },
        {
            id: 4,
            title: 'Universities & Institutions',
            bullets: [
                'Citation and literature services for faculty-led research and grant proposals',
                'Support for research centres and ethics submissions',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Universities-Institutions.jpg',
        },
        {
            id: 5,
            title: 'Global Scholars & International Students',
            bullets: [
                'Region-specific literature sourcing (e.g., UK, US, EU, India, Australia)',
                'Citation formatting to match institutional styles (APA, MLA, Vancouver, etc.)',
                'Research support for scholars writing in English as a second language',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Global-Scholars-International-Students.jpg',
        },
    ];

    const heading = "How a Patient Education Content Development Service Works";
    const subheading = "Our Step-by-Step Process";
    const description = (
        <>
            With Pubrica&apos;s patient education content service, our medical experts and{" "}
            <Link href="/services/research-services/scientific-writing/" className="text-blue-600">
                scientific writing
            </Link>{" "}
            team work together to develop clear, accurate, and guideline-compliant educational materials that are tailored to specific patient needs and aligned with healthcare communication standards.
        </>
    );

    const steps: WorkflowStep[] = [
        {
            stepNumber: 1,
            title: "LITERATURE SEARCH",
            description:
                "The specialist will search databases to discover relevant references and craft concise summaries.",
            iconSrc: "/images/icons/Literature-Search.png",
            position: "bottom",
        },
        {
            stepNumber: 2,
            title: "REFERENCE CITATION",
            description:
                "The professional will make slight adjustments to the manuscript to incorporate pertinent in-text citations.",
            iconSrc: "/images/icons/reference-and-citation.png",
            position: "top",
        },
        {
            stepNumber: 3,
            title: "AFTER-SALES SUPPORT",
            description:
                "At Pubrica, we provide support for two revision rounds and can allow an additional five revisions upon request.",
            iconSrc: "/images/icons/After-sales-support.png",
            position: "bottom",
        },
    ];

    const packages: PackageItem[] = [
        {
            icon: "/images/editing-and-translation/basic-pacakge.png",
            title: "Starter",
            subtitle: "Basic Citation Support",
            idealFor: "Short manuscripts, essays, or case reports",
            includes: [
                "Targeted literature search (up to 10 references)",
                "Citation insertion and formatting (APA, Vancouver, etc.)",
                "Reference list compilation",
                "One round of formatting revision",
            ],
            turnaround: "3–4 working days",
            bestFor: ".docx file with citations + formatted reference list",
            cardBgColor: "#e2e9e6",
            titleColor: "#0f5132",
        },
        {
            icon: "/images/publication-support/poster-preparation/S.png",
            title: "Standard",
            subtitle: "Structured Literature Review",
            idealFor: "Journal articles, postgraduate theses",
            includes: [
                "Domain-specific literature search (15–25 recent and relevant sources)",
                "Summary matrix/table of key articles",
                "In-text citation integration and formatting",
                "Reference list creation in the target journal style",
                "Journal guideline alignment",
            ],
            turnaround: "5–7 working days",
            bestFor: "Summary document + citation-integrated manuscript",
            cardBgColor: "#e8dce2",
            titleColor: "#6b2d82",
        },
        {
            icon: "/images/publication-support/journal-selection/advanced.webp",
            title: "Advanced",
            subtitle: "Systematic/Narrative Review Support",
            idealFor: "Review articles, PhD literature reviews, grant proposals",
            includes: [
                "Comprehensive multi-database search (PubMed, Scopus, Embase, etc.)",
                "Search protocol documentation (PRISMA, inclusion/exclusion criteria)",
                "Literature synthesis and a thematically organized summary",
                "EndNote/Mendeley reference library (if requested)",
                "Journal-compliant citation formatting",
            ],
            turnaround: "7–10 working days",
            bestFor: "Structured review summary + search log + citations",
            cardBgColor: "#efe5d4",
            titleColor: "#92400e",
        },
        {
            icon: "/images/editing-and-translation/pro.webp",
            title: "Premium",
            subtitle: "End-To-End Citation & Journal Preparation",
            idealFor: "Manuscripts targeting high-impact journals",
            includes: [
                "Full literature search across databases (30+ curated references)",
                "Evidence synthesis linked to manuscript sections",
                "Detailed citation audit and style compliance",
                "Reviewer support (reference cross-verification)",
                "Plagiarism screening report (Turnitin/iThenticate)",
                "Reference file delivery (Word + RIS format)",
            ],
            turnaround: "10–12 working days",
            bestFor: "All formatted files + reference manager library + report",
            cardBgColor: "#fbe1e1",
            titleColor: "#9f1239",
        },
    ];
    const valueDeliverables = [
        {
            id: 1,
            title: 'A screened list of 50 published articles from validated databases',
            iconUrl: '/images/icons/data-base.png',
        },
        {
            id: 2,
            title: 'Best-suited subject area experts to help identify the most relevant literature for your study',
            iconUrl: '/images/icons/literature-for-your-study.png',
        },
        {
            id: 3,
            title: 'Expert views regarding the novelty of your research from published authors with advanced degrees',
            iconUrl: '/images/icons/published-authors-.png',
        },
        {
            id: 4,
            title: 'Supporting rationale by experts on how the curated literature will strengthen your research',
            iconUrl: '/images/icons/Supporting-rationale.png',
        },
    ];

    return (
        <div className="w-full bg-white text-gray-800 font-sans antialiased overflow-x-hidden">

            {/* ---------------- SECTION 1: WHO WE SERVE ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3c36] mb-3">
                    Who We Serve
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-5xl leading-relaxed">
                    At Pubrica, we provide literature search and citation services that are trusted by a range of clients across academia, industry, and health sectors. Whether you are developing a thesis, launching a product, or validating an ingredient claim, we provide precise and evidence-based support specific to your needs.
                </p>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {whoWeServeCards.map((card) => {
                        const isActive = activeCardId === card.id;

                        return (
                            <div
                                key={card.id}
                                onClick={() => handleCardClick(card.id)}
                                className="group relative h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer bg-black shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image & Default Title Overlay */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0 ${isActive ? "opacity-0" : "opacity-100"
                                        }`}
                                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-5">
                                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Hover/Tap Overlay - Solid Black BG with White Text */}
                                <div
                                    className={`absolute inset-0 bg-black p-5 flex flex-col justify-start transition-opacity duration-300 overflow-y-auto group-hover:opacity-100 group-hover:pointer-events-auto ${isActive
                                            ? "opacity-100 pointer-events-auto"
                                            : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                                        {card.title}
                                    </h3>
                                    <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-200">
                                        {card.bullets.map((bullet, idx) => (
                                            <li key={idx} className="leading-relaxed">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ---------------- SECTION 2: HOW IT WORKS ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
                    How a Patient Education Content Development Service Works
                </h2>

                <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
                    {subheading}
                </h3>

                {description && (
                    <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
                        {description}
                    </p>
                )}

                {/* ============================================================ */}
                {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
                {/* =============================F=============================== */}
                <EditorialWorkflowSection
                    heading=""
                    subheading=""
                    description=""
                    steps={steps}
                />
            </section>
            {/* ---------------- SECTION 3: GREEN BANNER CTA ---------------- */}
            <ServiceBanner
                imageSrc="/images/icons/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Speed up your Literature Review and Citation with Pubrica"
                description="Gain access to your dedicated literature and citation expert, who will systematically identify relevant sources and ensure precise referencing aligned with your research scope."
                showQuoteButton={true}
            />



            {/* ---------------- SECTION 5: WHAT YOU GET ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143234] text-center mb-8 sm:mb-10">
                    What You Get with Pubrica&apos;s Scientific Literature Search Service
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {valueDeliverables.map((item) => (
                        <div
                            key={item.id}
                            className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-slate-50 hover:bg-black hover:text-white transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-lg cursor-pointer"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white group-hover:bg-slate-800 rounded-lg border border-gray-200 flex items-center justify-center p-2 transition-colors relative">
                                <Image
                                    src={item.iconUrl}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="object-contain w-full h-full group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-gray-100 transition-colors leading-relaxed pt-1">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* ---------------- SECTION 6: SAMPLE WORK ---------------- */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/physician-writing-services/literature-search-and-citation/Literature-Search-and-Citation-Service-Sample-Work.webp",
                    alt: "Literature Search and Citation Service Sample Work",
                    width: 320,
                    height: 400,
                }}
                sections={[
                    {
                        heading: "Literature Search and Citation Service Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Check out our literature search and citation samples created specifically to show domain relevance, accurate referencing styles, and adherence to journal submission formats for timely acceptance.",
                            },
                        ],
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                ]}
                footerDisclaimerSegments={[]}
            />
            {/* ---------------- SECTION 4: PACKAGES SECTION ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="text-center mb-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-1">
                        Literature Search and Citation Packages
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                        Strengthen your manuscript with evidence-based literature and error-free citations tailored to your research scope and target journal.
                    </p>
                </div>

                {/* Responsive Grid for Packages */}
                <CommonPackages
                    title=""
                    packages={packages}
                />

                {/* Centered Pricing Banner with Reduced Top Margin */}
                <div className="flex justify-center mt-3">
                    <Link
                        href="/order-now"
                        className="inline-block bg-red-600 text-white text-center py-2 px-6 rounded-md font-bold text-sm sm:text-base shadow"
                    >
                        Starts From $ 15 / Search
                    </Link>
                </div>
            </section>
        </div>
    );
}
'use client';

import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import ServiceBanner from '@/components/common/ServiceBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Permission and Metadata Services | Pubrica',
    description:
        'Comprehensive support to secure content permissions and optimize metadata accuracy, ensuring your manuscript meets global publishing, indexing, and copyright compliance standards.',
};

export default function PermissionAndMetadataComplete() {
    // State to handle hover for the "Why Choose" grid cards.
    // Index 1 corresponds to "Comprehensive Solutions". Setting it to 1 by default means it has the hover/active effect on load.
    const [hoveredCard, setHoveredCard] = useState<number | null>(1);

    const processSteps = [
        {
            num: 1,
            title: 'Manuscript Audit',
            desc: 'Our team conducts a thorough audit of your manuscript to identify all third-party materials, including images, graphs, tables, maps, and textual extracts. Every element is reviewed for copyright status, source requirements, potential reuse restrictions, and publisher-specific guidelines. This ensures complete clarity before the permission process begins.',
        },
        {
            num: 2,
            title: 'Metadata Creation & Optimization',
            desc: 'Once permissions are secured, we create a complete metadata package for your manuscript. This includes standardized captions, attribution statements, licensing details, DOI/URL references, and structured metadata for publisher systems.',
        },
        {
            num: 3,
            title: 'Rights Request & Coordination',
            desc: 'Pubrica manages the entire communication cycle with rights holders. We draft formal request letters, submit applications on your behalf, negotiate terms when needed, and follow up until approval is granted.',
        },
        {
            num: 4,
            title: 'Permissions Assessment',
            desc: 'Each identified element is evaluated and categorized into:\n• Public domain or free-to-use content\n• Fair-use eligible items\n• Materials requiring copyright permission\n• Assets requiring licensing or special reuse approval\n\nWe cross-check publisher policies, copyright databases, Creative Commons licenses, and rights-holder rules to ensure full compliance with global copyright standards.',
        },
        {
            num: 5,
            title: 'Final Submission-Ready Pack',
            desc: 'We deliver a fully organized Permission & Metadata Pack, containing:\n• Approved permission letters\n• Rights clearance summary\n• Optimized metadata sheets\n• Source documentation\n• A clean, publisher-ready version of your manuscript\n\nThis ensures your submission meets all copyright, ethical, and technical requirements.',
        },
    ];

    const whyChooseCards = [
        {
            title: 'Global Compliance',
            desc: 'We ensure that your work meets international copyright regulations and publishing standards, reducing legal and ethical risks.',
            iconSrc: '/images/academic-editorial-services/permission-and-metadata-services/Global-Compliance.png',
        },
        {
            title: 'Comprehensive Solutions',
            desc: 'From manuscript audit and permissions assessment to metadata creation and submission-ready packages, we manage every step of the process.',
            iconSrc: '/images/academic-editorial-services/permission-and-metadata-services/Comprehensive-Solutions.png',
        },
        {
            title: 'Time-Saving & Efficient',
            desc: 'We streamline communication with copyright holders, handle all formal requests, and ensure timely completion, so you can focus on your research.',
            iconSrc: '/images/academic-editorial-services/permission-and-metadata-services/Time-Saving-Efficient.png',
        },
        {
            title: 'Expertise in Copyright & Permissions',
            desc: 'Our team is well-versed in copyright laws, licensing agreements, and intellectual property rights across academic, medical, and scientific publications. We handle all correspondence with copyright holders, ensuring your work complies with legal and ethical standards.',
            iconSrc: '/images/academic-editorial-services/permission-and-metadata-services/Global-Compliance.png',
        },
        {
            title: 'Tailored Services',
            desc: 'Whether you are a researcher, institution, or publisher, our solutions are customized to meet your unique needs and publication goals.',
            iconSrc: '/images/academic-editorial-services/permission-and-metadata-services/Make-large-word-count-cuts-without-compromising-clarity-1.png',
        },
    ];
    const packages: PackageItem[] = [
        {
            icon: "/images/editing-and-translation/basic-pacakge.png",
            title: "Basic",
            idealFor:
                "Authors and small research teams with limited permissions needs.",
            includes: [
                "Manuscript audit to identify copyrighted material.",
                "Permissions assessment for images, tables, figures, and charts.",
                "Guidance on public domain and fair-use items.",
                "Creation of basic metadata records.",
            ],
            turnaround: "5–7 business days.",
            cardBgColor: "#cbe0de",
            titleColor: "#0b3b2c",
        },
        {
            icon: "/images/publication-support/poster-preparation/S.png",
            title: "Standard",
            idealFor: "Researchers, thesis authors, and small publishers.",
            includes: [
                "Includes everything in Basic, plus:",
                "Drafting and sending permission requests to copyright holders.",
                "Follow-up and tracking of permissions until approval.",
                "Metadata optimization for indexing and discoverability.",
            ],
            turnaround: "7–10 business days.",
            cardBgColor: "#d8c5e6",
            titleColor: "#8b5cf6",
        },
        {
            icon:
                "/images/editing-and-translation/translation-with-editing/pro.webp",
            title: "Premium",
            idealFor: "Large publishers, journals, and research institutions.",
            includes: [
                "Includes everything in Standard, plus:",
                "Comprehensive rights management for complex materials.",
                "Licensing fee negotiations and cost tracking.",
                "Detailed metadata creation with DOI, ORCID, and other identifiers.",
                "Submission-ready package for journals and publishers.",
            ],
            turnaround: "10–14 business days.",
            cardBgColor: "#d8be8a",
            titleColor: "#854d0e",
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Permission & Metadata Services at Pubrica"
                description="Our experts ensure your manuscript meets all copyright, licensing, and metadata standards by securing required permissions and creating accurate, optimized metadata, making your submission fully compliant and seamlessly publication-ready."
            />

            {/* ------------------- STEP BY STEP PROCESS ------------------- */}
            <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    How Our Permission and Metadata Service Works
                </h2>
                <h3 className="text-xs md:text-sm font-bold text-gray-700 mb-2">Our Step-by-Step Process</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
                    Our Permission & Metadata Service ensures your manuscript is fully compliant with copyright, licensing, and publisher requirements. We audit your content, secure all necessary reuse rights, and create optimized metadata that enhances discoverability and supports a seamless submission process.
                </p>

                {/* Grid Layout for Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {processSteps.map((step) => (
                        <div
                            key={step.num}
                            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-4">
                                    {step.num}
                                </div>
                                <h4 className="text-xs md:text-sm font-bold text-[#0b3b2c] mb-2 leading-snug">{step.title}</h4>
                                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------- WHY CHOOSE PUBRICA ------------------- */}
            <section className="py-6 px-4 bg-[#f9fafb] border-y border-gray-100" aria-labelledby="why-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="why-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Why Choose Pubrica For Permission & Metadata Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                        At Pubrica, we understand that securing permissions and managing metadata is a critical part of the publication process. Our specialized Permission & Metadata Services are designed to save you time, ensure compliance, and streamline your path to publication. Here&apos;s why researchers, authors, and publishers trust Pubrica:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {whyChooseCards.map((card, idx) => {
                            const isHovered = hoveredCard === idx;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredCard(idx)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className={`p-6 rounded-xl border transition-all duration-300 bg-white flex flex-col justify-between ${isHovered
                                        ? 'border-[#0b3b2c] shadow-lg scale-105 bg-emerald-50/40'
                                        : 'border-gray-200 shadow-sm'
                                        }`}
                                >
                                    <div>
                                        <div className="relative w-10 h-10 rounded-full bg-emerald-100 mb-4 overflow-hidden">
                                            {card.iconSrc ? (
                                                <Image src={card.iconSrc} alt="" fill className="object-contain p-1" />
                                            ) : null}
                                        </div>
                                        <h3 className="text-xs font-bold text-gray-900 mb-2">
                                            <Link
                                                href="/services/research-services/medical-writing/"
                                                className=" cursor-pointer"
                                            >
                                                {card.title}
                                            </Link>
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-relaxed">{card.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/academic-editorial-services/permission-and-metadata-services/Permission-and-Metadata-Services.png",
                    alt: "Permission and Metadata Services sample work",
                    width: 600,
                    height: 800,
                }}
                sections={[
                    {
                        heading: "Academic Editorial Services Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our Permission & Metadata Services sample work, meticulously managed to ensure full copyright compliance, accurate rights documentation, and adherence to journal-specific requirements. We ensure your manuscript is legally cleared, properly attributed, and publication-ready, enhancing credibility, compliance, and seamless acceptance by top-tier journals.",
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

            {/* ------------------- PACKAGES SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
                <CommonPackages
                    title="Permission & Metadata Services – Our Packages"
                    description="At Pubrica, our Permission & Metadata Services are designed to simplify and streamline the often complex process of securing rights and optimizing metadata for academic content. Whether you are an author, researcher, or publisher, our packages cater to every level of need, ensuring compliance, accuracy, and publication readiness."
                    packages={packages}
                />

                <div className="mt-1 text-center">
                    <GetFreeQuoteButton />
                </div>
            </section>
        </article>
    );
}
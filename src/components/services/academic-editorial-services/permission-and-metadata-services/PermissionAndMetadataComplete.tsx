'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
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
            icon: '🌐',
        },
        {
            title: 'Comprehensive Solutions',
            desc: 'From manuscript audit and permissions assessment to metadata creation and submission-ready packages, we manage every step of the process.',
            icon: '💡',
        },
        {
            title: 'Time-Saving & Efficient',
            desc: 'We streamline communication with copyright holders, handle all formal requests, and ensure timely completion, so you can focus on your research.',
            icon: '⏱️',
        },
        {
            title: 'Expertise in Copyright & Permissions',
            desc: 'Our team is well-versed in copyright laws, licensing agreements, and intellectual property rights across academic, medical, and scientific publications. We handle all correspondence with copyright holders, ensuring your work complies with legal and ethical standards.',
            icon: '⚖️',
        },
        {
            title: 'Tailored Services',
            desc: 'Whether you are a researcher, institution, or publisher, our solutions are customized to meet your unique needs and publication goals.',
            icon: '⚙️',
        },
    ];

    const packages = [
        {
            badge: 'B',
            title: 'Basic',
            idealFor: 'Authors and small research teams with limited permissions needs.',
            included: [
                'Manuscript audit to identify copyrighted material',
                'Permissions assessment for images, tables, and graphs',
                'Basic metadata structuring',
                'Guidance on standard licensing options',
            ],
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-300',
        },
        {
            badge: 'S',
            title: 'Standard',
            idealFor: 'Researchers, thesis authors, and small publishers.',
            included: [
                'Includes everything in Basic, plus:',
                'Drafting and sending permission requests',
                'Follow-up and tracking of permissions until approval',
                'Comprehensive metadata optimization (DOIs, abstracts, keywords)',
                'Attestation and attribution formatting',
            ],
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-300',
        },
        {
            badge: 'P',
            title: 'Premium',
            idealFor: 'Large publishers, journals, and research institutions.',
            included: [
                'Includes everything in Standard, plus:',
                'Comprehensive rights management for complex materials',
                'Licensing fee negotiations and cost management',
                'Complete metadata package compliance for major indexing databases (Scopus, PubMed, Crossref)',
                'Dedicated rights manager and priority support',
            ],
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-300',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Permission & Metadata Services at Pubrica
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Our experts ensure your manuscript meets all copyright, licensing, and metadata standards by securing required permissions and creating accurate, optimized metadata, making your submission fully compliant and seamlessly publication-ready.
                    </p>
                </div>
            </section>

            {/* ------------------- STEP BY STEP PROCESS ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    How Our Permission and Metadata Service Works
                </h2>
                <h3 className="text-xs md:text-sm font-bold text-gray-700 mb-2">Our Step-by-Step Process</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                    Our Permission & Metadata Service ensures your manuscript is fully compliant with copyright, licensing, and publisher requirements. We audit your content, secure all necessary reuse rights, and create optimized metadata that enhances discoverability and supports a seamless submission process.
                </p>

                {/* Grid Layout for Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {processSteps.map((step) => (
                        <div
                            key={step.num}
                            className={`p-6 rounded-lg border bg-white border-gray-200 shadow-sm flex flex-col justify-between`}
                        >
                            <div>
                                <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-3">
                                    {step.num}
                                </div>
                                <h4 className="text-xs font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-[11px] text-gray-600 leading-relaxed whitespace-pre-line">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------- WHY CHOOSE PUBRICA ------------------- */}
            <section className="py-14 px-4 bg-[#f9fafb] border-y border-gray-100" aria-labelledby="why-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="why-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Why Choose Pubrica For Permission & Metadata Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                        At Pubrica, we understand that securing permissions and managing metadata is a critical part of the publication process. Our specialized Permission & Metadata Services are designed to save you time, ensure compliance, and streamline your path to publication. Here&apos;s why researchers, authors, and publishers trust Pubrica:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {whyChooseCards.map((card, idx) => {
                            // First card (index 0) has NO hover effect.
                            // The second card (index 1 - "Comprehensive Solutions") has hover effect by default.
                            const isFirstCard = idx === 0;
                            const isHovered = hoveredCard === idx;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => !isFirstCard && setHoveredCard(idx)}
                                    onMouseLeave={() => !isFirstCard && setHoveredCard(null)}
                                    className={`p-6 rounded-xl border transition-all duration-300 bg-white ${isFirstCard
                                            ? 'border-gray-200 shadow-sm'
                                            : isHovered
                                                ? 'border-[#0b3b2c] shadow-lg scale-105 bg-emerald-50/40'
                                                : 'border-gray-200 shadow-sm'
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0b3b2c] flex items-center justify-center text-lg mb-4">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-900 mb-2">{card.title}</h3>
                                    <p className="text-[11px] text-gray-600 leading-relaxed">{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <section className="py-14 px-4 max-w-5xl mx-auto text-center" aria-labelledby="sample-heading">
                <div className="bg-[#f4faf7] border border-emerald-100 rounded-xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[#0b3b2c] p-3 rounded-lg shadow-md flex justify-center items-center">
                            <div className="bg-white rounded p-4 w-full h-48 flex flex-col items-center justify-center">
                                <span className="text-3xl mb-2">📄</span>
                                <span className="text-xs font-bold text-gray-800">Permission & Metadata Sample</span>
                                <span className="text-[10px] text-gray-500 mt-1">Compliance & Rights Preview</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <h2 id="sample-heading" className="text-base md:text-lg font-bold text-[#0b3b2c] mb-2">
                                Academic Editorial Services Sample Work
                            </h2>
                            <div className="mb-4">
                                <button className="bg-black hover:bg-gray-800 text-white text-xs font-bold py-2 px-6 rounded-full transition-colors shadow">
                                    Discover More
                                </button>
                            </div>
                            <h3 className="text-xs font-bold text-[#0b3b2c] mb-2">Download the full Report Now</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                                Explore our Permission & Metadata Services sample work, meticulously managed to ensure full copyright compliance, accurate rights documentation, and adherence to journal-specific requirements. We ensure your manuscript is legally cleared, properly attributed, and publication-ready, enhancing credibility, compliance, and seamless acceptance by top-tier journals.
                            </p>
                            <button className="bg-black hover:bg-gray-800 text-white text-xs font-bold py-2 px-6 rounded-full transition-colors shadow">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- PACKAGES SECTION ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Permission & Metadata Services – Our Packages
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        At Pubrica, our Permission & Metadata Services are designed to simplify and streamline the often complex process of securing rights and optimizing metadata for academic content. Whether you are an author, researcher, or publisher, our packages cater to every level of need, ensuring compliance, accuracy, and publication readiness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`bg-white border-2 ${pkg.borderColor} rounded-xl shadow-sm overflow-hidden flex flex-col justify-between`}>
                            <div className={`${pkg.bgColor} p-6 border-b ${pkg.borderColor} text-center`}>
                                <div className="w-10 h-10 mx-auto rounded-full bg-white font-bold flex items-center justify-center text-sm shadow-sm mb-2 text-gray-900">
                                    {pkg.badge}
                                </div>
                                <h3 className="text-sm font-bold text-gray-900">{pkg.title}</h3>
                            </div>

                            <div className="p-6 space-y-4 text-xs">
                                <div>
                                    <span className="font-bold text-gray-900 block mb-1">➜ Ideal For:</span>
                                    <p className="text-gray-600 leading-relaxed">{pkg.idealFor}</p>
                                </div>

                                <div>
                                    <span className="font-bold text-gray-900 block mb-2">➜ Includes:</span>
                                    <ul className="space-y-2">
                                        {pkg.included.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <span className="text-emerald-600 font-bold">•</span>
                                                <span className="leading-relaxed">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                   <GetFreeQuoteButton/>
                </div>
            </section>
        </article>
    );
}
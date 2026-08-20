'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import React from 'react';

export default function PermissionAndMetadataServices() {
    const servicesList = [
        'Avoid copyright-related legal issues',
        'Provide accurate citations and licences for third-party content',
        'Ensure compliance with publisher, funder, and repository guidelines',
        'Improve article discoverability in indexing platforms',
        'Enhance the credibility and transparency of your research',
    ];

    const serviceTypes = [
        {
            title: 'Copyright & Permission Clearance',
            desc: 'We help secure the legal rights to reuse published content, including text, figures, tables, and images, ensuring compliance with copyright laws and journal requirements.',
            icon: '/images/academic-editorial-services/permission-and-metadata-services/icon-1.png',
        },
        {
            title: 'Licensing Support',
            desc: 'Guidance is provided on selecting appropriate licenses (e.g., Creative Commons) for publications, data, and supplementary materials. This ensures proper rights management and enhances the visibility and reuse of research outputs.',
            icon: '/images/academic-editorial-services/permission-and-metadata-services/icon-2.png',
        },
        {
            title: 'Metadata Management',
            desc: 'Organizing and standardizing metadata for publications, including author details, keywords, abstracts, and indexing information for journals and databases.',
            icon: '/images/academic-editorial-services/permission-and-metadata-services/icon-3.png',
        },
        {
            title: 'DOI Registration & Management',
            desc: 'We manage Digital Object Identifier (DOI) registration and updates, ensuring persistent, reliable identification and easy citation of your scholarly content.',
            icon: '/images/academic-editorial-services/permission-and-metadata-services/icon-4.png',
        },
        {
            title: 'Copyright Clearance Documentation',
            desc: 'We provide official documentation and records of all permissions obtained, helping maintain compliance and supporting manuscript submission.',
            icon: '/images/academic-editorial-services/permission-and-metadata-services/icon-5.png',
        },
    ];

    return (
        <article className="w-full bg-[#f4f5f5] text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-12 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Permission and Metadata Services
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive support to secure content permissions and optimize metadata accuracy, ensuring your manuscript meets global publishing, indexing, and copyright compliance standards.
                    </p>
                </div>
            </section>

            {/* ------------------- MAIN INTRO & DETAILS ------------------- */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-6 max-w-2xl">
                    Ensure Seamless Publishing Compliance with Pubrica’s Expert Permission & Metadata Services
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                    {/* Left Column: Flowing Text */}
                    <div className="flex-1 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                        <p>
                            In today’s competitive academic publishing landscape, ensuring that your manuscript is ethically compliant, properly licensed, and accurately indexed is just as important as high-quality content. Publishers, journals, and academic institutions are increasingly stringent about permissions, copyright usage, and metadata standards. Any oversight, such as using third-party material without permission or submitting a manuscript with incomplete metadata, can lead to delayed publication, ethical concerns, or manuscript rejection.
                        </p>
                        <p>
                            At Pubrica, our Permission and Metadata Services are designed to safeguard your research from copyright challenges, ensure smooth <span className="text-blue-600 font-medium">journal submission</span>, and strengthen the visibility and accessibility of your academic outputs across global platforms. With our expert team of editorial specialists, rights managers, and metadata professionals, we provide end-to-end support for permissions acquisition, attribution, licensing, metadata creation, metadata structuring, and compliance documentation.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2">Our services help you:</h3>
                            <ul className="space-y-1.5">
                                {servicesList.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                                        <span className="text-[#cc0000] font-bold leading-none mt-0.5">•</span>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    {/* Right Column: Image with offset green border card frame */}
                    {/* Right Column: Image with Offset Dark Green Background Accent */}
                    <div className="w-full md:w-[420px] shrink-0 relative p-4">
                        {/* Dark Green Offset Background Block (shifted left and down) */}
                        <div className="absolute inset-0 top-6 left-0 right-6 bottom-0 bg-[#0b3b2c] rounded-2xl z-0" />

                        {/* Main Image Container (positioned slightly top-right) */}
                        <div className="relative z-10 w-full h-[260px] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/images/academic-editorial-services/permission-and-metadata-services/Ensure-Seamless-Publishing-Compliance-with-Pubricas-Expert-Permission-Metadata-Services.webp"
                                alt="Permission and Metadata Services"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 420px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- TYPES OF PERMISSION AND METADATA SERVICES ------------------- */}
            <section className="py-14 px-4 bg-white border-t border-gray-100" aria-labelledby="types-heading">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 id="types-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                            Types of Permission and Metadata Services We Offer
                        </h2>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            At Pubrica, we understand that obtaining proper permissions and ensuring accurate metadata are crucial for successful publication and compliance in the academic and scientific research landscape. Our services are designed to streamline this complex process and help researchers, authors, and publishers focus on producing high-quality work.
                        </p>
                    </div>

                    {/* Grid Container */}
                    <div className="flex flex-col gap-5">
                        {/* Top Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {serviceTypes.slice(0, 3).map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative flex items-start gap-4 min-h-[140px]"
                                >
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 pr-3">
                                        <h3 className="text-xs font-bold text-[#0b3b2c] mb-1.5 leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-4">
                                            {service.desc}
                                        </p>
                                    </div>
                                    {/* Right Accent Line */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-[#0b3b2c] rounded-full" />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row: 2 Cards Centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[68%] mx-auto w-full">
                            {serviceTypes.slice(3, 5).map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative flex items-start gap-4 min-h-[140px]"
                                >
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 pr-3">
                                        <h3 className="text-xs font-bold text-[#0b3b2c] mb-1.5 leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-4">
                                            {service.desc}
                                        </p>
                                    </div>
                                    {/* Right Accent Line */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-[#0b3b2c] rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
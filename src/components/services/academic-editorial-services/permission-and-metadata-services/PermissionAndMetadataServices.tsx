'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';

export const metadata = {
    title: 'Permission and Metadata Services | Pubrica',
    description:
        'Comprehensive support to secure content permissions and optimize metadata accuracy, ensuring your manuscript meets global publishing, indexing, and copyright compliance standards.',
};

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
            desc: 'We help secure the legal rights to reuse published content, including text, figures, tables, and images.',
            icon: '📝',
        },
        {
            title: 'Licensing Support',
            desc: 'Guidance is provided on selecting appropriate licenses (e.g., Creative Commons) for publications.',
            icon: '📄',
        },
        {
            title: 'Metadata Management',
            desc: 'Organizing and standardizing metadata for publications, including author details, keywords, abstracts, and...',
            icon: '📊',
        },
        {
            title: 'DOI Registration & Management',
            desc: 'We manage Digital Object Identifier (DOI) registration and updates, ensuring persistent, reliable...',
            icon: '🔗',
        },
        {
            title: 'Copyright Clearance Documentation',
            desc: 'We provide official documentation and records of all permissions obtained, helping maintain compliance',
            icon: '💻',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
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
            <section className="py-14 px-4 max-w-5xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-6">
                    Ensure Seamless Publishing Compliance with Pubrica’s Expert Permission & Metadata Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                    <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                        <p>
                            In today’s competitive academic publishing landscape, ensuring that your manuscript is ethically compliant, properly licensed, and accurately indexed is just as important as high-quality content. Publishers, journals, and academic institutions are increasingly stringent about permissions, copyright usage, and metadata standards. Any oversight, such as using third-party material without permission or submitting a manuscript with incomplete metadata, can lead to delayed publication, ethical concerns, or manuscript rejection.
                        </p>
                        <p>
                            At Pubrica, our Permission and Metadata Services are designed to safeguard your research from copyright challenges, ensure smooth journal submission, and strengthen the visibility and accessibility of your academic outputs across global platforms. With our expert team of editorial specialists, rights managers, and metadata professionals, we provide end-to-end support for permissions acquisition, attribution, licensing, metadata creation, metadata structuring, and compliance documentation.
                        </p>
                    </div>

                    <div className="bg-[#0b3b2c] p-4 rounded-xl shadow-md flex justify-center items-center">
                        <div className="bg-white rounded p-4 w-full h-56 flex flex-col items-center justify-center text-center">
                            <span className="text-4xl mb-2">📊</span>
                            <span className="text-xs font-bold text-gray-800">Permission & Metadata Support</span>
                            <span className="text-[10px] text-gray-500 mt-1">Ensuring Global Publishing Compliance</span>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-4">Our services help you:</h3>
                    <ul className="space-y-2">
                        {servicesList.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                                <span className="text-[#cc0000] font-bold text-sm leading-none">•</span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <GetFreeQuoteButton/>
                </div>
            </section>

            {/* ------------------- TYPES OF PERMISSION AND METADATA SERVICES ------------------- */}
            <section className="py-14 px-4 bg-[#f9fafb] border-t border-gray-100" aria-labelledby="types-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="types-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Types of Permission and Metadata Services We Offer
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                        At Pubrica, we understand that obtaining proper permissions and ensuring accurate metadata are crucial for successful publication and compliance in the academic and scientific research landscape. Our services are designed to streamline this complex process and help researchers, authors, and publishers focus on producing high-quality work.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
                        {serviceTypes.map((service, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <div className="w-10 h-10 rounded bg-emerald-50 text-[#0b3b2c] flex items-center justify-center text-lg mb-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-[11px] text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const metadata = {
    title: 'Marketing Communication Content Development Services | Pubrica',
    description:
        'Pubrica offers marketing communication content development services, creating persuasive messaging and visually compelling materials to strengthen your brand presence.',
};

interface AccordionItem {
    id: string;
    title: string;
    content: Array<{
        label: string;
        description: string;
    }>;
}

export default function MarketingCommunicationContentDevelopment() {
    const [openAccordion, setOpenAccordion] = useState<string | null>('accordion-1');

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const servicesData: AccordionItem[] = [
        {
            id: 'accordion-1',
            title: 'Print and Digital Collateral',
            content: [
                {
                    label: 'Product Brochures, Flyers, and Indication Sheets',
                    description:
                        'Custom-designed materials that provide essential information about your products and services.',
                },
                {
                    label: 'Booklets and eBooks',
                    description:
                        'Comprehensive guides and digital publications that delve deeper into your offerings and industry insights.',
                },
                {
                    label: 'Newsletters',
                    description:
                        'Regular updates that keep your audience informed about the latest developments, innovations, and news in your field.',
                },
            ],
        },
        {
            id: 'accordion-2',
            title: 'Content Creation',
            content: [
                {
                    label: 'Scientific Blog Posts',
                    description:
                        'Engaging and informative articles that highlight key industry topics and advancements.',
                },
                {
                    label: 'Conference Summaries',
                    description:
                        'Detailed overviews of major points and discussions from industry conferences.',
                },
                {
                    label: 'Interviews and Testimonials',
                    description:
                        'Personal insights and endorsements that add credibility and a human touch to your brand narrative.',
                },
            ],
        },
        {
            id: 'accordion-3',
            title: 'Visual and Interactive Media',
            content: [
                {
                    label: 'PowerPoint Presentations',
                    description:
                        'Dynamic presentations designed for educational and sales purposes, ensuring impactful delivery of information.',
                },
                {
                    label: 'Press Releases and White Papers',
                    description:
                        'Formal announcements and in-depth reports that establish thought leadership and industry expertise.',
                },
                {
                    label: 'Video Scripts and E-detailing',
                    description:
                        'Engaging scripts for video content and digital marketing communication content to enhance user engagement.',
                },
                {
                    label: 'Visual Aids and Infographics',
                    description:
                        'Visually striking tools that simplify complex data, making it easily accessible and understandable.',
                },
            ],
        },
        {
            id: 'accordion-4',
            title: 'SEO Optimization and Content Strategy',
            content: [
                {
                    label: 'Strategic Content Roadmaps',
                    description:
                        'Each piece of content is optimized for search engines to ensure maximum visibility and reach. Our approach integrates SEO best practices to drive traffic and engagement. This is part of our marketing and branding content services and integrated marketing content development approach.',
                },
            ],
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <header className="bg-[#0b3b2c] text-white py-6 px-4 text-center">
                <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 rounded-sm bg-[#0b3b2c]/80 backdrop-blur-sm">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide text-white">
                        Marketing Communication Content Development Services
                    </h1>
                    <p className="text-xs md:text-sm max-w-3xl mx-auto text-gray-200 leading-relaxed">
                        Pubrica offers marketing communication content development services, creating persuasive messaging and visually compelling materials to strengthen your brand presence and engage your audience effectively.
                    </p>
                </div>
            </header>

            {/* ------------------- MAIN SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="main-heading">
                <h2 id="main-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    Marketing Communication Content Development – Crafting Impactful Messages for Your Brand
                </h2>

                <h3 className="text-sm md:text-base font-semibold text-gray-700 mb-6">
                    Engaging Audiences. Amplifying Reach. Driving Results.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left Text Content */}
                    <div className="md:col-span-7 space-y-4">
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Pubrica offers specialized marketing communication content development services tailored for a diverse range of clients within the healthcare and life sciences industries. Our expertise spans pharmaceutical companies, medical device manufacturers, clinics, private practices, Contract Research Organizations (CROs), healthcare systems, biotechnology firms, nutraceutical and dietary supplement companies, as well as health and wellness product providers. Here's how we ensure that your marketing communications resonate with your target audience:
                        </p>

                        <ul className="space-y-3 text-xs md:text-sm text-gray-700 pt-2">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold min-w-[6px]">•</span>
                                <span>
                                    <strong className="text-gray-900">Targeted Audience Engagement:</strong> We develop marketing content writing services aimed at a wide range of healthcare professionals, from doctors to dentists and other allied healthcare workers, ensuring relevance and precision.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold min-w-[6px]">•</span>
                                <span>
                                    <strong className="text-gray-900">Customized Marketing Strategies:</strong> Our projects are tailored to meet your promotional needs and budget constraints, enhancing engagement with your target audience.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold min-w-[6px]">•</span>
                                <span>
                                    <strong className="text-gray-900">Advanced Content Presentation:</strong> We use advanced graphic design and content structuring, such as infographics and interactive presentations, to make complex information accessible and visually appealing.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold min-w-[6px]">•</span>
                                <span>
                                    <strong className="text-gray-900">Comprehensive Campaign Support:</strong> From concept development to execution, we align all content with your brand identity and business goals, enhancing customer engagement and decision-making.
                                </span>
                            </li>
                        </ul>

                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">
                            Pubrica's professional marketing communication services are designed to support your commercial success in the competitive healthcare and life sciences markets with impactful, scientifically grounded marketing strategies.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/marketing-communication-content-development-service/Marketing-Communication-Content-Development.webp"
                                    alt="Marketing communication content development"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 28rem"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full bg-[#0b3b2c] rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- OUR SERVICES SECTION ------------------- */}
            <section className="py-5 px-4 max-w-6xl mx-auto border-t border-gray-100" aria-labelledby="services-heading">
                <h2 id="services-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-6">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left image */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-inner">
                            <Image
                                src="/images/marketing-communication-content-development-service/Our-Services.png"
                                alt="Our services"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 28rem"
                            />
                        </div>
                    </div>

                    {/* Right Accordion Content */}
                    <div className="md:col-span-7 space-y-4">
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
                            Pubrica offers a comprehensive range of content development for marketing campaigns tailored to meet the diverse needs of the healthcare and life sciences industries. Our offerings are meticulously crafted to enhance visibility and engagement across various therapeutic areas, including radiology, cardiology, orthopaedics, emergency medicine, neurology, internal medicine, nuclear medicine, oncology, OB-GYN, otolaryngology, and more. Here's a detailed overview of our services:
                        </p>

                        {/* Accordion List */}
                        <div className="space-y-3">
                            {servicesData.map((item) => {
                                const isOpen = openAccordion === item.id;
                                return (
                                    <div key={item.id} className="border-b border-gray-300 pb-3">
                                        <button
                                            onClick={() => toggleAccordion(item.id)}
                                            className="w-full flex items-center justify-start gap-3 py-2 text-left font-semibold text-xs md:text-sm text-gray-800 hover:text-[#0b3b2c] transition-colors focus:outline-none"
                                        >
                                            <span className="text-base font-bold text-gray-700">
                                                {isOpen ? '−' : '+'}
                                            </span>
                                            <span>{item.title}</span>
                                        </button>

                                        {isOpen && (
                                            <div className="pl-6 pt-2 space-y-3">
                                                <ul className="space-y-3">
                                                    {item.content.map((sub, idx) => (
                                                        <li key={idx} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                                            <strong className="text-gray-900">• {sub.label}:</strong> {sub.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
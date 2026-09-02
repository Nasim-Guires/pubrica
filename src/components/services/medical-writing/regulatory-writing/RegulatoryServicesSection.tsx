'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import ServiceBanner from '@/components/common/ServiceBanner';

const RW = '/images/medical-writing/regulatory-writing';

interface CardData {
    id: string;
    title: string;
    bullets: string[];
    iconSrc: string;
}

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

// Tab 1 Cards
const productDevCards: CardData[] = [
    {
        id: 'pd-1',
        title: 'Clinical & Nonclinical Documentation',
        iconSrc: `${RW}/Clinical-Nonclinical-Documentation-1.png`,
        bullets: [
            'Clinical Study Protocols (Phases I–IV)',
            'Investigator Brochures (IBs)',
            'Clinical Study Reports (CSRs)',
            'Nonclinical Study Reports & Summaries',
            'Patient Narratives',
        ],
    },
    {
        id: 'pd-2',
        title: 'Regulatory Dossier Preparation',
        iconSrc: `${RW}/Regulatory-Dossier-Preparation-1.png`,
        bullets: [
            'Common Technical Document (CTD) Modules 2–5',
            'Investigational New Drug Applications (IND)',
            'New Drug Applications (NDA)',
            'Biologics License Applications (BLA)',
        ],
    },
    {
        id: 'pd-3',
        title: 'Applications (MAA) Agency Communication Documents',
        iconSrc: `${RW}/Applications-MAA-Agency-Communication-Documents-1.png`,
        bullets: [
            'Briefing Documents (FDA, EMA, etc.)',
            'Meeting Packages & Backgrounders',
            'Orphan Drug Designation Applications',
            'Paediatric Investigation Plans (PIPs)',
        ],
    },
    {
        id: 'pd-4',
        title: 'Medical Device Regulatory Writing',
        iconSrc: `${RW}/Medical-Device-Regulatory-Writing-1.png`,
        bullets: [
            'Clinical Evaluation Reports (CERs)',
            'Performance Evaluation Reports (PERs)',
            'Technical Files & 510(k) Submissions',
            'Risk Management & Benefit-Risk Reports',
        ],
    },
    {
        id: 'pd-5',
        title: 'Submission Strategy & Support',
        iconSrc: `${RW}/Submission-Strategy-Support-1.png`,
        bullets: [
            'Regulatory Pathway Consulting',
            'Submission Project Management',
            'Gap Analysis & Document Audits',
            'Submission Portal Assistance (eCTD, ESG)',
        ],
    },
];

// Tab 2 Cards
const complianceCards: CardData[] = [
    {
        id: 'cm-1',
        title: 'Safety and Pharmacovigilance Documentation',
        iconSrc: `${RW}/Safety-and-Pharmacovigilance-Documentation.png`,
        bullets: [
            'Risk Management Plans (RMPs)',
            'Periodic Safety Update Report (PSURs)',
            'Development Safety Update Report (DSURs)',
            'Summary of Product Characteristics (SmPCs)',
        ],
    },
    {
        id: 'cm-2',
        title: 'Post Marketing Support',
        iconSrc: `${RW}/Post-Marketing-Support.png`,
        bullets: [
            'Variations and Renewals Documentation',
            'Post Marketing Study Report',
            'Labelling Updates & Review',
            'Risk Communication Documents',
        ],
    },
    {
        id: 'cm-3',
        title: 'Quality and Regulatory Compliance',
        iconSrc: `${RW}/Quality-and-Regulatory-Compliance.png`,
        bullets: [
            'ICH and GCP Compliance Review',
            'QC of Regulatory Documents',
            'Internal SOP Development Support',
            'Health Authority Query Response Support',
        ],
    },
    {
        id: 'cm-4',
        title: 'Specialized Document Services',
        iconSrc: `${RW}/Specialized-Document-Services.png`,
        bullets: [
            'Layperson Summaries, per EU Regulation',
            'Plain Language Summaries (PLS)',
        ],
    },
];

const accordionData: AccordionItem[] = [
    {
        id: 'disc-1',
        title: 'Life Sciences',
        content:
            'We support life sciences companies with writing that connects innovative research and regulatory expectations, in fields like molecular biology, genomics, proteomics, cell therapy, and biotechnology. We ensure your documents are scientifically acceptable and compliant with ICH and international standards.',
    },
    {
        id: 'disc-2',
        title: 'Medical & Health Sciences',
        content:
            'Our regulatory writers have significant experience drafting documents related to clinical trials, pharmacovigilance, and health authority submissions in many therapeutic areas – everything from clinical study reports (CSR) to risk management plans (RMP). Our team prepares complex documents and adheres to regulations set forth by FDA, EMA, MHRA, and PMDA.',
    },
    {
        id: 'disc-3',
        title: 'Pharmaceutical Sciences',
        content:
            'From drug discovery to lifecycle management, we support pharmaceutical companies with submission-ready documentation including INDs, NDAs, MAAs, CTD modules and other documentation that are published in accordance with regulatory and scientific expectations.',
    },
    {
        id: 'disc-4',
        title: 'Medical Devices & Diagnostics',
        content:
            'We supply regulatory writing for medical device manufacturers including Clinical Evaluation Reports (CERs), Technical Documentation, 510(k) submissions, and Post-Market Surveillance (PMS) reports. Our experts are very familiar with EU MDR, FDA, and other global regulations.',
    },
    {
        id: 'disc-5',
        title: 'Biotechnology & Advanced Therapies',
        content:
            'We provide regulatory writing for products such as cell and gene therapies, biologics, biosimilars, and RNA-based therapeutics. Our writers ensure innovative biotech submissions meet increasing global regulatory requirements and scientific standards..',
    },
    {
        id: 'disc-6',
        title: 'Public Health & Epidemiology',
        content:
            'We write documentation for public health studies, vaccines, and population-level interventions, including study protocols, safety summaries, and briefing books for regulatory advisory meetings.',
    },
];

export default function RegulatoryWritingPage() {
    const [activeTab, setActiveTab] = useState<'product' | 'compliance'>('product');
    const [openAccordions, setOpenAccordions] = useState<string[]>([]);

    const toggleAccordion = (id: string) => {
        setOpenAccordions((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const currentCards = activeTab === 'product' ? productDevCards : complianceCards;

    return (
        <div className="min-h-screen bg-[#f7faf9] text-[#2c3e50] font-sans">

            {/* HEADER SECTION */}
            <div className="max-w-5xl mx-auto pt-6 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C3D] mb-3">
                    Our Regulatory Writing Services
                </h2>
                <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We appreciate the value of regulatory writing in obtaining product approval and market access, and for ongoing compliance. Our services can assist life science companies at every stage of product development—from early-stage clinical documentation to post-marketing commitments.
                </p>

                {/* TAB SWITCHER PILL */}
                <div className="inline-flex mt-8 p-1 bg-[#0b3c3d] rounded-full text-xs font-medium text-white shadow-inner">
                    <button
                        type="button"
                        onClick={() => setActiveTab('product')}
                        className={`px-5 py-2 rounded-full transition-all duration-200 ${activeTab === 'product'
                            ? 'bg-[#062627] text-white shadow-sm font-semibold'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Product Development & Regulatory Submission Services
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('compliance')}
                        className={`px-5 py-2 rounded-full transition-all duration-200 ${activeTab === 'compliance'
                            ? 'bg-[#062627] text-white shadow-sm font-semibold'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Compliance & Lifecycle Management Services
                    </button>
                </div>
            </div>

            {/* SERVICE CARDS GRID */}
            <div className="max-w-5xl mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCards.map((card) => (
                        <div
                            key={card.id}
                            className="group bg-white rounded-md p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#0B3C3D] hover:border-[#0B3C3D] hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Card Icon Container */}
                            <div className="w-12 h-12 mb-4 relative">
                                <Image src={card.iconSrc} alt="" fill className="object-contain" sizes="48px" />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug transition-colors duration-300 group-hover:text-white">
                                {card.title}
                            </h3>

                            {/* Bullet List */}
                            <ul className="space-y-1.5 text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
                                {card.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-1.5">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* DISCIPLINES WE SUPPORT SECTION (Two-Column Layout with Image Space) */}
            <div className="max-w-6xl mx-auto px-4 mt-20">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B3C3D] mb-2">
                        Disciplines We Support
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        With our regulatory writing services, we work across a broad range of scientific, clinical, and technical disciplines.
                        Whether you are developing a new therapy, applying for a medical device, or need safety documents, our subject matter expertise indicates your regulatory documents will be accurate, compliant, and purposefully constructed for specific global health authority requirement.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Image Space */}
                    <div className="lg:col-span-5 relative w-full h-[380px] rounded-lg overflow-hidden shadow-sm">
                        <Image
                            src="/images/medical-writing/Pharmaceutical-Sciences.webp" // Update filename if needed
                            alt="Disciplines We Support"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 border-t border-gray-200">
                        {accordionData.map((item) => {
                            const isOpen = openAccordions.includes(item.id);

                            return (
                                <div key={item.id} className="border-b border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex justify-between items-center py-4 text-xs md:text-sm font-semibold text-gray-800 hover:text-[#0B3C3D] transition-colors focus:outline-none"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="text-[#0B3C3D] font-bold text-sm">{isOpen ? '-' : '+'}</span>
                                            <span>{item.title}</span>
                                        </span>
                                    </button>

                                    {/* Animated Height Container */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden text-xs md:text-sm text-gray-600 leading-relaxed pl-5">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* WRITING BY REGULATORY NEED / TYPE SECTION (Larger Text) */}
            <div className="max-w-4xl mx-auto px-4 mt-20 mb-20">
                <h2 className="text-2xl font-bold text-[#0B3C3D] text-center mb-3">
                    Writing by Regulatory Need / Type
                </h2>
                <p className="text-sm text-gray-700 text-center max-w-2xl mx-auto mb-3">
                    Choose a regulatory writing service based on your development phase, type of document, submission model, or worldwide regulatory authority.
                </p>
                <p className="text-sm text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                    At Pubrica, we recognize that regulatory writing is not a cookie-cutter approach. While you may be preparing for a first-in-human trial or responding to post-marketing commitments, our solutions are framed within the exact regulatory, clinical, and scientific context of what you are making. Our services are based upon global standards such as ICH, FDA, EMA, MHRA, PMDA, and others. Whether you need a clinical study protocol, CTD module, or risk management plan, we get it submission-ready, scientifically accurate, and regulatory compliant.
                </p>

                {/* 3 COLUMNS WITH COLOR ACCENT BORDERS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Box 1 */}
                    <div className="bg-white border-t-4 border-t-amber-300 border border-gray-200 p-5 rounded-b-md shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-3">By Regulatory Stage</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Preclinical activities to post-marketing documents</li>
                            <li>• Phase I – IV clinical trial support</li>
                            <li>• NDA, MAA, and BLA submissions</li>
                        </ul>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white border-t-4 border-t-purple-300 border border-gray-200 p-5 rounded-b-md shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-3">By Document Type</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Protocols, CSRs, IBs, CTDs, RMPs, CERs</li>
                            <li>• Briefing books and regulatory responses</li>
                        </ul>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white border-t-4 border-t-teal-300 border border-gray-200 p-5 rounded-b-md shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-3">By Regulatory Model & Standards</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• FDA, EMA, PMDA, TGA, Health Canada, EU MDR</li>
                            <li>• eCTD format and ICH & GVP guidelines</li>
                            <li>• Dossier harmonization, where applicable, to support cross regional submissions</li>
                        </ul>
                    </div>
                </div>

                {/* ADD-ONS AND TAILORED SERVICES 2-COLUMN BLOCK */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* (Optional Add-Ons) */}
                    <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-3">(Optional Add-Ons)</h4>
                        <p className="font-semibold text-gray-800 text-sm mb-2">Advantages of Tailored Writing:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Guaranteed to be compliant with current regulatory guidelines</li>
                            <li>• Enhances quality of submissions and expedites approval timelines</li>
                            <li>• Minimizes chances of rejection / resubmission</li>
                        </ul>
                    </div>

                    {/* Our services are tailored to: */}
                    <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-3">Our services are tailored to:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• The stage of the product development life cycle (from preclinical to post-market)</li>
                            <li>• Type of regulatory document being submitted (IND, CSR, CER, etc.)</li>
                            <li>• Requirements of the regulatory authority (FDA, EMA, etc.)</li>
                            <li>• Regional requirements (eCTD, EU MDR, etc.)</li>
                        </ul>
                    </div>
                </div>

                {/* SAMPLE WORK CALLOUT CARD */}
                <PubricaSampleWorkCard
                    bookCoverImage={{
                        src: `${RW}/Regulatory-writing-Sample-Work.png`,
                        alt: "Regulatory Writing Sample Work",
                        width: 600,
                        height: 400,
                    }}
                    sections={[
                        {
                            heading: "Regulatory Writing Sample Work",
                            button: {
                                label: "Discover more",
                                url: "/contact-us/",
                            },
                        },
                        {
                            heading: "Download the full Report Now",
                            descriptionSegments: [
                                { text: "• Literature review\n" },
                                { text: "• Manuscript (with journal formatting)\n" },
                                { text: "• Systematic review with PRISMA\n" },
                                { text: "• Thesis chapter" },
                            ],
                            button: {
                                label: "Discover More",
                                url: "/contact-us/",
                            },
                        },
                    ]}
                    footerDisclaimerSegments={[]}
                />
            </div>

            {/* BOTTOM CTA BANNER */}
            <ServiceBanner
                imageSrc="/images/icons/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Speed Up Your Regulatory Writing with Pubrica"
                description="Gain access to your dedicated regulatory writing expert, ensuring high-quality, fully compliant documentation tailored to agency requirements and your development objectives."
                showQuoteButton={false}
            />
        </div>
    );
}
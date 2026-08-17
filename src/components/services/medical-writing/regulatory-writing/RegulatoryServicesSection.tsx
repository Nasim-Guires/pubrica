'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
            <div className="max-w-5xl mx-auto pt-12 px-4 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#0B3C3D] mb-3">
                    Our Regulatory Writing Services
                </h1>
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

            {/* DISCIPLINES WE SUPPORT ACCORDION SECTION */}
            <div className="max-w-4xl mx-auto px-4 mt-20">
                <h2 className="text-xl font-bold text-[#0B3C3D] text-center mb-2">
                    Disciplines We Support
                </h2>
                <p className="text-xs text-gray-600 text-center max-w-2xl mx-auto mb-8">
                    With our regulatory writing services, we work across a broad range of scientific, clinical, and technical disciplines.
                    Whether you are developing a new therapy, applying for a medical device, or need safety documents, our subject matter expertise indicates your regulatory documents will be accurate, compliant, and purposefully constructed for specific global health authority requirement.
                </p>

                <div className="border-t border-gray-200">
                    {accordionData.map((item) => {
                        const isOpen = openAccordions.includes(item.id);

                        return (
                            <div key={item.id} className="border-b border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full flex justify-between items-center py-3.5 text-xs font-semibold text-gray-800 hover:text-[#0B3C3D] transition-colors focus:outline-none"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-gray-400 font-normal">{isOpen ? '-' : '+'}</span>
                                        <span>{item.title}</span>
                                    </span>
                                </button>

                                {/* Animated Height Container */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden text-xs text-gray-600 leading-relaxed pl-4">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* WRITING BY REGULATORY NEED / TYPE SECTION */}
            <div className="max-w-4xl mx-auto px-4 mt-20 mb-20">
                <h2 className="text-xl font-bold text-[#0B3C3D] text-center mb-2">
                    Writing by Regulatory Need / Type
                </h2>
                <p className="text-xs text-gray-600 text-center max-w-2xl mx-auto mb-8">
                    Choose a regulatory writing service based on your development phase, type of document, submission model, or worldwide regulatory authority.
                </p>

                {/* 3 COLUMNS WITH COLOR ACCENT BORDERS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Box 1 */}
                    <div className="bg-white border-t-2 border-t-amber-300 border border-gray-200 p-4 rounded-b-md shadow-sm text-xs">
                        <h4 className="font-bold text-gray-800 mb-2">By Regulatory Stage</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li>• Preclinical activities to post-marketing documents</li>
                            <li>• Phase I – IV clinical trial support</li>
                            <li>• NDA, MAA, and BLA submissions</li>
                        </ul>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white border-t-2 border-t-purple-300 border border-gray-200 p-4 rounded-b-md shadow-sm text-xs">
                        <h4 className="font-bold text-gray-800 mb-2">By Document Type</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li>• Protocols, IB/PB, IBs, CTDs, RMPs, CSRs</li>
                            <li>• Briefing books and regulatory responses</li>
                        </ul>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white border-t-2 border-t-teal-300 border border-gray-200 p-4 rounded-b-md shadow-sm text-xs">
                        <h4 className="font-bold text-gray-800 mb-2">By Regulatory Model & Standards</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li>• FDA, EMA, PMDA, TGA, Health Canada, EU MDR</li>
                            <li>• eCTD format and ICH & GCP guidelines</li>
                            <li>• Dossier harmonization, where applicable, to support cross-regional submissions</li>
                        </ul>
                    </div>
                </div>

                {/* SAMPLE WORK CALLOUT CARD */}
                <div className="bg-[#f0f7f6] rounded-xl p-6 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
                    <div className="relative w-full md:w-1/3 h-40 rounded-lg overflow-hidden bg-gray-200">
                        <Image
                            src={`${RW}/Regulatory-writing-Sample-Work.png`}
                            alt="Regulatory Writing Sample Work"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                        <div>
                            <h3 className="text-sm font-bold text-[#0B3C3D] mb-2">Regulatory Writing Sample Work</h3>
                            <button
                                type="button"
                                className="w-full bg-black text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Discover more
                            </button>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-[#0B3C3D] mb-1">Download the full Report Now</h3>
                            <ul className="text-xs text-gray-600 space-y-0.5 mb-3">
                                <li>• Literature review</li>
                                <li>• Manuscript (with journal formatting)</li>
                                <li>• Systematic review with PRISMA</li>
                                <li>• Thesis chapter</li>
                            </ul>
                            <button
                                type="button"
                                className="w-full bg-black text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM CTA BANNER */}
            <div className="w-full bg-[#03231B] text-white py-8 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-2">
                    <h2 className="text-lg md:text-xl font-bold">
                        Speed Up Your Regulatory Writing with Pubrica
                    </h2>
                    <p className="text-xs text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Gain access to your dedicated regulatory writing expert, ensuring high-quality, fully compliant documentation tailored to agency requirements and your development objectives.
                    </p>
                </div>
            </div>

        </div>
    );
}
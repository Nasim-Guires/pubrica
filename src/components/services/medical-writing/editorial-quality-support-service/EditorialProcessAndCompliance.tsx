'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ServiceBanner from '@/components/common/ServiceBanner';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

// --- Types & Data ---

// 1. Process Steps Data
interface Step {
    num: number;
    title: string;
    desc: string;
    iconSrc: string;
}

const EQ = '/images/medical-writing/editorial-quality-support-service';

const steps: WorkflowStep[] = [
    {
        stepNumber: 1,
        title: "MANUSCRIPT SUBMISSION & EVALUATION",
        description:
            "You submit your manuscript, and our editorial team performs an initial assessment to identify language, structure, and formatting needs.",
        iconSrc: `${EQ}/Manuscript-Submission-Evaluation.png`,
        position: "top",
    },
    {
        stepNumber: 2,
        title: "EXPERT EDITOR ASSIGNMENT",
        description:
            "We assign your manuscript to an SME with experience in your academic or scientific field for focused editing.",
        iconSrc: `${EQ}/Expert-Editor-Assignment.png`,
        position: "bottom",
    },
    {
        stepNumber: 3,
        title: "LANGUAGE & STRUCTURAL EDITING",
        description:
            "The editor refines grammar, clarity, sentence flow, and logical structure while preserving the integrity of your scientific content.",
        iconSrc: `${EQ}/Language-Structural-Editing.png`,
        position: "top",
    },
    {
        stepNumber: 4,
        title: "JOURNAL FORMATTING & REFERENCING",
        description:
            "We format your manuscript as per the guidelines of your target journal, including references, figures, tables, and overall layout.",
        iconSrc: `${EQ}/Journal-Formatting-Referencing.png`,
        position: "bottom",
    },
    {
        stepNumber: 5,
        title: "QUALITY CHECK & AUTHOR REVISIONS",
        description:
            "A senior editor reviews the document for consistency and compliance. You’ll receive the edited version for feedback or revisions.",
        iconSrc: `${EQ}/Quality-Check-Author-Revisions.png`,
        position: "top",
    },
    {
        stepNumber: 6,
        title: "FINAL PROOFREADING & SUBMISSION SUPPORT",
        description:
            "A final proofreading ensures readiness for submission. If requested, we assist with cover letters, submission, and reviewer response.",
        iconSrc: `${EQ}/Final-Proofreading-Submission-Support.png`,
        position: "bottom",
    },
];

// 2. Compliance Categories Data
interface ComplianceCategory {
    id: string;
    title: string;
    items: {
        logoUrl: string;
        title: string;
        desc: string;
    }[];
}

const complianceData: ComplianceCategory[] = [
    {
        id: 'reporting-guidelines',
        title: 'Reporting Guidelines Based on Study Type',
        items: [
            {
                logoUrl: '/images/publication-support/responding-to-reviewers/Consort-Logo.webp',
                title: 'Consolidated Standards of Reporting Trials – CONSORT',
                desc: 'For randomized controlled trials',
            },
            {
                logoUrl: '/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/CONSORT-STROBE-Guidelines.png',
                title: 'Strengthening the Reporting of Observational Studies in Epidemiology – STROBE',
                desc: 'For observational studies',
            },
            {
                logoUrl: '/images/publication-support/peer-review-pre-submission/prisma_logo.png',
                title: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses – PRISMA',
                desc: 'For systematic reviews and meta-analyses',
            },
            {
                logoUrl: '/images/physician-writing-services/case-report/CARE-.png',
                title: 'Case Report Guidelines – CARE',
                desc: 'Designed to improve the completeness and transparency of case reports',
            },
        ],
    },
    {
        id: 'ethical-standards',
        title: 'Ethical Research and Publication Standards',
        items: [
            {
                logoUrl: '/images/physician-writing-services/case-report/icmje-vydfghj.png',
                title: 'International Committee of Medical Journal Editors',
                desc: 'ICMJE Recommendations for manuscript preparation and ethics',
            },
            {
                logoUrl: '/images/medical-writing/editorial-quality-support-service/copelogo.webp',
                title: 'Committee on Publication Ethics',
                desc: 'COPE guidelines for publication integrity and author standards',
            },
        ],
    },
    {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        items: [
            {
                logoUrl: '/images/medical-writing/editorial-quality-support-service/FDA-and-EMA-Standards.png',
                title: 'FDA (Food and Drug Administration)',
                desc: 'US regulatory standards compliance for medical dossiers',
            },
            {
                logoUrl: '/images/medical-writing/editorial-quality-support-service/EMA-European-Medicines-Agency.png',
                title: 'EMA (European Medicines Agency)',
                desc: 'European regulatory guidelines for pharmaceutical products',
            },
            {
                logoUrl: '/images/medical-writing/editorial-quality-support-service/International-Council-for-Harmonisation-Good-Clinical-Practice.png',
                title: 'Good Clinical Practice (GCP)',
                desc: 'International ethical and scientific quality standard for clinical trials',
            },
        ],
    },
];

// 3. Packages Data
interface EditorialPackage {
    id: string;
    badgeLetter: string;
    logoSrc: string;
    badgeBg: string;
    badgeTextColor: string;
    title: string;
    titleBg?: string;
    titleTextColor?: string;
    bodyBg: string;
    idealFor: string;
    includes: string[];
}

const packagesData: PackageItem[] = [
    {
        icon: "/images/publication-support/poster-preparation/S.png",
        title: "Standard",
        subtitle: "Essential Editorial & Formatting Support",
        idealFor:
            "Early-stage researchers looking for basic language and formatting checks.",
        includes: [
            "Language and grammar correction",
            "Spelling, punctuation, and syntax check",
            "Basic formatting based on journal guidelines",
            "Reference check (basic consistency)",
        ],
        turnaround: "3–5 working days",
        cardBgColor: "#cfdedc",
        titleColor: "#0f3836",
    },
    {
        icon:
            "/images/publication-support/peer-review-pre-submission/advanced.webp",
        title: "Advanced",
        subtitle: "Technical Editing & Journal-Ready Support",
        idealFor:
            "Authors preparing manuscripts for mid- to high-tier journals.",
        includes: [
            "All services in the Standard Package",
            "Technical editing by subject matter experts (SMEs)",
            "In-depth journal formatting",
            "Figure, table, and reference styling",
            "Letter to the editor (if required)",
        ],
        turnaround: "5–7 working days",
        cardBgColor: "#e4d5e8",
        titleColor: "#3b82f6",
    },
    {
        icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
        title: "Premium",
        subtitle: "Comprehensive Scientific Editorial Support",
        idealFor:
            "Researchers targeting Q1 or high-impact journals requiring end-to-end editorial support.",
        includes: [
            "All services in the Advanced Package",
            "Critical review and scientific feedback by PhD-level editors",
            "Manuscript structure and content enhancement",
            "Journal selection assistance",
            "Plagiarism check and revision support",
            "Unlimited post-editing support for the same manuscript",
        ],
        turnaround: "7–10 working days",
        cardBgColor: "#dec8a5",
        titleColor: "#705638",
    },
];
export default function EditorialProcessAndCompliance() {
    // All compliance accordions closed by default
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800 pb-8">

            {/* 1. TOP GREEN BANNER */}
            <ServiceBanner
                imageSrc="/images/icons/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Enhance Your Editorial and Quality Standards with Pubrica"
                description="Partner with our expert editorial team to deliver publication-ready, scientifically accurate, and journal-compliant manuscripts."
            />
            {/* 2. STEP-BY-STEP PROCESS SECTION */}
            <EditorialWorkflowSection
                heading="How The Editorial & Quality Support Service Works"
                subheading="Our Step-By-Step Process"
                description="At Pubrica, our editorial & quality support service follows a rigorous, structured workflow to ensure that your manuscript meets the highest standards of academic and scientific publishing. Here’s how our process works:"
                steps={steps}
            />

            {/* 3. COMPLIANCE AND GUIDELINE STANDARDS SECTION */}
            <section className="max-w-5xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-lg md:text-xl font-bold text-[#0F3836] mb-2">
                        Our Compliance and Guideline Standards
                    </h2>
                    <p className="text-xs text-gray-600 max-w-3xl mx-auto">
                        At Pubrica, we strictly adhere to international editorial and publication standards to ensure the highest level of quality, transparency, and scientific integrity. Our services comply with:
                    </p>
                </div>

                {/* Accordions (All Closed by Default) */}
                <div className="space-y-4">
                    {complianceData.map((category) => {
                        const isOpen = openAccordion === category.id;

                        return (
                            <div key={category.id} className="border border-gray-200 rounded-sm overflow-hidden">
                                {/* Accordion Bar Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(category.id)}
                                    className="w-full bg-[#0a312f] text-white py-2.5 px-4 flex items-center gap-3 text-xs font-bold text-left hover:bg-[#072422] transition-colors"
                                >
                                    <span className="text-sm font-semibold">{isOpen ? '−' : '+'}</span>
                                    <span>{category.title}</span>
                                </button>

                                {/* Accordion Content Grid */}
                                {isOpen && (
                                    <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {category.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center hover:border-gray-400 transition-colors shadow-xs"
                                            >
                                                {/* Logo / Image Box */}
                                                <div className="relative w-24 h-12 mb-3">
                                                    <Image
                                                        src={item.logoUrl}
                                                        alt={`${item.title} logo standard`}
                                                        title={item.title}
                                                        fill
                                                        sizes="100px"
                                                        className="object-contain"
                                                    />
                                                </div>

                                                <h4 className="text-xs font-bold text-gray-800 mb-1 leading-snug">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 leading-normal">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. SAMPLE WORK & DOWNLOAD REPORT BANNER */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/medical-writing/editorial-quality-support-service/image-5.webp",
                    alt: "Quality Assurance report sample for medical writing",
                    width: 600,
                    height: 400,
                }}
                sections={[
                    {
                        heading: "Editorial & Quality Support Service Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work/assessing-evidence-based-practice-in-physical-therapy/",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Discover our editorial support samples, meticulously edited to align with journal guidelines, author objectives, and scientific reporting standards, delivered on time and backed by peer-reviewed, validated content to ensure accuracy, clarity, and publication success.",
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

            {/* 5. EDITORIAL & QUALITY SUPPORT SERVICE – OUR PACKAGES */}
            <CommonPackages
                title="Editorial & Quality Support Service – Our Packages"
                description="At Pubrica, we offer flexible and comprehensive editorial support packages tailored to meet the diverse needs of researchers, clinicians, and academic authors. Each package ensures high-quality, publication-ready content with full compliance with journal and ethical standards."
                packages={packagesData}
            />
        </div>
    );
}
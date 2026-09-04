'use client';

import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import { workflowData, workflowSectionData } from '@/lib/education-editorial-service/education-editorial-service';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Education Editorial Services | Academic Editorial Services | Pubrica',
    description:
        'Enhance the clarity, quality, and credibility of your educational manuscripts, theses, books, and academic resources with Pubrica\'s specialized editorial support.',
};

export default function EducationEditorialServicePage() {
    // State for interactive workflow cards hover effect
    const [hoveredWorkflowCard, setHoveredWorkflowCard] = useState<number | null>(null);
    // State for interactive services grid cards hover effect
    const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

    const servicesList = [
        {
            title: 'Accessibility Compliance',
            desc: 'Ensure your educational content meets global accessibility standards such as WCAG, ADA, and Section 508.',
            icon: '/images/education-editorial-service/Accessibility-Compliance.webp',
        },
        {
            title: 'Learning Design and Pedagogy',
            desc: 'Transform instructional content with research-backed learning design principles. We refine frameworks to boost student engagement.',
            icon: '/images/education-editorial-service/Learning-Design-and-Pedagogy.webp',
        },
        {
            title: 'Assessment and Exam Review',
            desc: 'We develop, review, validate, and refine assessments with precision and fairness. Our experts ensure question validity and reliable testing outcomes.',
            icon: '/images/education-editorial-service/Assessment-and-Exam-Review.webp',
        },
        {
            title: 'Digital Production QA',
            desc: 'Maintain exceptional quality across digital learning products. We conduct meticulous QA checks for interactive media, e-books, and platforms.',
            icon: '/images/education-editorial-service/Digital-Production-QA.webp',
        },
        {
            title: 'AI and Data Preparation',
            desc: 'We prepare, structure, label, and quality-check data for AI-driven educational solutions. Our team supports machine learning models with accurate annotations.',
            icon: '/images/education-editorial-service/AI-and-Data-Preparation.webp',
        },
    ];

    const workflowSteps = [
        {
            num: 1,
            title: 'UNDERSTANDING YOUR REQUIREMENTS',
            desc: 'We begin by reviewing the document type, target audience, publishing guidelines, academic framework, and project objectives. This ensures we fully understand your needs and assign the most suitable editor for your work.',
        },
        {
            num: 2,
            title: 'ASSIGNMENT TO SUBJECT-EXPERT EDITORS',
            desc: 'Your work is matched with editors specialized in pedagogy, educational psychology, curriculum development, and more. This guarantees domain-specific accuracy and alignment with educational standards.',
        },
        {
            num: 3,
            title: 'MULTI-LAYER EDITING AND QUALITY CHECKS',
            desc: 'Each project undergoes primary editing, secondary review, and final QA by senior editors. This layered approach ensures clarity, consistency, and an error-free final document.',
        },
        {
            num: 4,
            title: 'AUTHOR FEEDBACK AND REVISION SUPPORT',
            desc: 'We provide track-changes files, editorial comments, and actionable suggestions for improvement. Authors can request revisions to refine arguments, learning design, or overall readability.',
        },
        {
            num: 5,
            title: 'FINAL DELIVERY AND PUBLISHING SUPPORT',
            desc: 'You receive a polished, publication-ready document formatted to journal or institutional guidelines. Optional services include similarity checks, reference validation, and final formatting support.',
        },
    ];

    const educationEditorialPackages: PackageItem[] = [
        {
            icon: "/images/editing-and-translation/basic-pacakge.png",
            title: "Basic Editorial",
            idealFor:
                "Draft manuscripts, curriculum content, or initial academic documents.",
            includes: [
                "Grammar, spelling, and punctuation correction",
                "Clarity and flow improvement",
                "Basic formatting and style alignment with academic standards",
                "Feedback on readability and coherence",
            ],
            turnaround: "3–5 business days",
            cardBgColor: "#C2D3CD",
            titleColor: "#2C3E50",
        },
        {
            icon: "/images/editing-and-translation/advanced.png",
            title: "Standard Editorial",
            idealFor:
                "Research papers, journal submissions, or developed educational manuscripts.",
            includes: [
                "Comprehensive language editing (grammar, style, and tone)",
                "Structural and logical flow enhancement",
                "Formatting for journal or publisher requirements",
                "Reference and citation check (APA, MLA, Chicago, or other styles)",
                "Constructive feedback for content improvement",
            ],
            turnaround: "5–7 business days",
            cardBgColor: "#CDB5D8",
            titleColor: "#8A4A90",
        },
        {
            icon: "/images/editing-and-translation/pro.webp",
            title: "Premium Editorial",
            idealFor:
                "High-impact publications, textbooks, or advanced academic materials.",
            includes: [
                "All features of the Standard Package",
                "In-depth subject-matter review by education experts",
                "Curriculum alignment and pedagogical evaluation",
                "Plagiarism check and originality assessment",
                "Detailed feedback report and revision suggestions",
            ],
            turnaround: "7–10 business days",
            cardBgColor: "#C8AD7F",
            titleColor: "#7C4312",
        },
    ];
    return (
        <article className="w-full bg-white text-gray-800 font-sans">

            {/* ------------------- DRIVING ACADEMIC QUALITY SECTION ------------------- */}


            {/* ------------------- FULL WIDTH SUB-BANNER ------------------- */}
            <section className="w-full bg-[#0b3b2c] py-6 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
                        Enhance Your Educational Content with Pubrica
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                        Access your personal editorial assistant who will expertly guide you through the complexities of educational editing and content refinement, ensuring clarity, quality, and a smoother path to publishing success.
                    </p>
                </div>
            </section>

            {/* ------------------- HOW OUR EDUCATION EDITORIAL SERVICE WORKS ------------------- */}
            {/* Workflow Cards Grid (No default black cards, pure hover effect) */}
            <EditorialWorkflowSection
                heading={workflowSectionData.heading}
                subheading={workflowSectionData.subheading}
                description={workflowSectionData.description}
                steps={workflowData}
            />

            {/* ------------------- EDUCATION EDITORIAL SERVICES SAMPLE WORK ------------------- */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/education-editorial-service/Education-Editorial-Services-Sample-Work.webp",
                    alt: "Education Editorial Services Sample Work",
                    width: 600,
                    height: 450,
                }}
                sections={[
                    {
                        heading: "Education Editorial Services Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/individual-patient-data-from-randomized-trials",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our education editorial sample work, crafted to meet high academic standards, curriculum-aligned frameworks, and publisher-specific guidelines. We deliver accurate, polished, and publication-ready educational content that enhances teaching, learning, and research outcomes.",
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
            <CommonPackages
                title="Education Editorial Services – Our Packages"
                description="At Pubrica, we understand that educational content requires precision, clarity, and pedagogical expertise. Our editorial packages are designed to support educators, academic writers, institutions, and curriculum developers in producing high-quality, polished content that meets global standards."
                packages={educationEditorialPackages}
            />
            <GetFreeQuoteButton />
        </article>
    );
}
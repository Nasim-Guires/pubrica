'use client';

import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import ServiceBanner from '@/components/common/ServiceBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Forensic & Quality Audit Services | Pubrica',
    description:
        'Pubrica provides meticulous forensic and quality audits designed to detect inconsistencies, ensure transparency, and uphold the highest ethical and technical standards in scholarly publishing.',
};

export default function ForensicAndQualityAuditComplete() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const processSteps = [
        {
            num: 1,
            title: 'Initial Consultation and Scoping',
            desc: 'We begin by understanding your organization’s specific needs, objectives, and potential areas of risk. During this phase, we define the scope of the audit, set clear objectives, and establish timelines. This ensures that our efforts are aligned with your priorities and that the audit focuses on critical areas requiring attention.',
        },
        {
            num: 2,
            title: 'Preliminary Assessment',
            desc: 'Our team conducts an initial review of the available data, documentation, and internal processes. This preliminary assessment helps identify high-risk areas, potential gaps, and inconsistencies, forming the foundation for a detailed audit plan.',
        },
        {
            num: 3,
            title: 'Detailed Audit Planning',
            desc: 'Based on the preliminary assessment, we design a comprehensive audit plan tailored to your organization. This includes selecting audit methodologies, defining control points, and determining the tools and techniques to be used. Our planning ensures a systematic approach, minimizing disruption to your regular operations.',
        },
        {
            num: 4,
            title: 'Evidence Collection and Examination',
            desc: 'Our forensic auditors gather and examine evidence from financial records, operational workflows, digital systems, and other relevant sources. This step involves applying rigorous forensic techniques to detect irregularities, errors, or potential fraud.',
        },
        {
            num: 5,
            title: 'Data Analysis and Verification',
            desc: 'Collected data is analysed using advanced analytical tools and methodologies. Our experts cross-verify findings, ensuring accuracy and completeness. This step allows us to uncover hidden risks, patterns of non-compliance, or inefficiencies in processes.',
        },
        {
            num: 6,
            title: 'Reporting and Recommendations',
            desc: 'After completing the audit, we compile a detailed report highlighting our findings, risk areas, and evidence-based recommendations. Our reports are clear, actionable, and designed to help management make informed decisions, mitigate risks, and strengthen governance.',
        },
        {
            num: 7,
            title: 'Follow-Up and Support',
            desc: 'We provide ongoing support to implement corrective actions and monitor progress toward improvements. Our team can assist in revising policies, enhancing internal controls, and conducting follow-up audits to ensure lasting compliance and process efficiency.',
        },
    ];

    const packages: PackageItem[] = [
        {
            icon: "/images/editing-and-translation/basic-pacakge.png",
            title: "Basic Compliance Check",
            idealFor:
                "Startups, small businesses, or teams need a quick health check of processes and documentation.",
            includes: [
                "Preliminary review of documents and workflows",
                "Identification of red flags and compliance gaps",
                "Basic quality check of operational procedures",
                "Summary report with priority recommendations",
            ],
            turnaround: "3–5 business days",
            cardBgColor: "#ecfdf5",
            titleColor: "#0b3b2c",
        },
        {
            icon: "/images/publication-support/poster-preparation/S.png",
            title: "Standard Forensic & Quality Review",
            idealFor:
                "Medium-sized organisations require deeper analysis for quality, risk, and operational accuracy.",
            includes: [
                "Detailed review of financial and operational records",
                "Verification of processes, transactions, and documentation",
                "Identification of inconsistencies or quality deviations",
                "Risk assessment with corrective action roadmap",
            ],
            turnaround: "5–7 business days",
            cardBgColor: "#faf5ff",
            titleColor: "#7e22ce",
        },
        {
            icon:
                "/images/publication-support/peer-review-pre-submission/advanced.webp",
            title: "Advanced Forensic Investigation",
            idealFor:
                "Businesses facing suspected fraud, misconduct, major quality lapses, or needing high-level accuracy checks.",
            includes: [
                "In-depth forensic investigation of processes, data, and transactions",
                "Evidence-based assessment with chain-of-custody controls",
                "Root-cause and gap analysis",
                "Quality assurance audit across all critical functions",
                "Detailed forensic report with legal/compliance readiness",
                "Recommendations for remediation",
            ],
            turnaround: "7–10 business days",
            cardBgColor: "#fffbeb",
            titleColor: "#92400e",
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Forensic and Quality Audit Services at Pubrica"
                description="Our expert auditors meticulously examine and evaluate your processes, records, and compliance measures to ensure accuracy, integrity, and regulatory adherence, providing actionable insights that safeguard your organization and enhance operational quality."
            />

            {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
            <section className="py-12 px-4 max-w-5xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-1">
                    How Our Forensic and Quality Audit Service Works
                </h2>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-3">Our Step-by-Step Process</p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                    At Pubrica, our forensic and quality audit services are designed to uncover hidden risks, ensure compliance, and enhance operational transparency. Our systematic approach combines investigative rigor with quality assurance to deliver actionable insights.
                </p>

                {/* Desktop View: Snake Flow Matching Image */}
                <div className="hidden md:flex flex-col items-center space-y-6 max-w-4xl mx-auto">
                    {/* Row 1: Steps 1, 2, 3 (Left to Right) */}
                    <div className="flex items-center justify-between w-full">
                        {processSteps.slice(0, 3).map((step, idx) => (
                            <React.Fragment key={step.num}>
                                <div className="w-64 bg-[#f8faf9] border border-gray-300 rounded-lg p-5 flex flex-col items-center min-h-[220px]">
                                    <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-3">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                                    <p className="text-[11px] text-gray-600 leading-relaxed text-center">{step.desc}</p>
                                </div>
                                {idx < 2 && <span className="text-gray-500 font-bold text-lg px-2">→</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Down Arrow from Step 3 to 4 */}
                    <div className="w-full flex justify-end pr-28">
                        <span className="text-gray-500 font-bold text-lg">↓</span>
                    </div>

                    {/* Row 2: Steps 6, 5, 4 (Right to Left flow matching image order) */}
                    <div className="flex items-center justify-between w-full">
                        {[processSteps[5], processSteps[4], processSteps[3]].map((step, idx) => (
                            <React.Fragment key={step.num}>
                                <div className="w-64 bg-[#f8faf9] border border-gray-300 rounded-lg p-5 flex flex-col items-center min-h-[220px]">
                                    <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-3">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                                    <p className="text-[11px] text-gray-600 leading-relaxed text-center">{step.desc}</p>
                                </div>
                                {idx < 2 && <span className="text-gray-500 font-bold text-lg px-2">←</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Down Arrow from Step 6 to 7 */}
                    <div className="w-full flex justify-start pl-28">
                        <span className="text-gray-500 font-bold text-lg">↓</span>
                    </div>

                    {/* Row 3: Step 7 */}
                    <div className="w-full flex justify-start pl-3">
                        <div className="w-64 bg-[#f8faf9] border border-gray-300 rounded-lg p-5 flex flex-col items-center min-h-[220px]">
                            <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-3">
                                {processSteps[6].num}
                            </div>
                            <h3 className="text-xs font-bold text-gray-900 mb-2 text-center">{processSteps[6].title}</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed text-center">{processSteps[6].desc}</p>
                        </div>
                    </div>
                </div>

                {/* Mobile View: Clean Vertical Timeline Stack */}
                <div className="flex md:hidden flex-col items-center space-y-4">
                    {processSteps.map((step, idx) => (
                        <React.Fragment key={step.num}>
                            <div className="w-full bg-[#f8faf9] border border-gray-300 rounded-lg p-5 flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white flex items-center justify-center font-bold text-xs mb-3">
                                    {step.num}
                                </div>
                                <h3 className="text-xs font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                                <p className="text-[11px] text-gray-600 leading-relaxed text-center">{step.desc}</p>
                            </div>
                            {idx < processSteps.length - 1 && (
                                <span className="text-gray-500 font-bold text-base">↓</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/academic-editorial-services/forensic-and-quality-audit-service/Forensic-Quality-Audit-Services-sample-work-.webp",
                    alt: "Forensic and Quality Audit Services sample work",
                    width: 600,
                    height: 450,
                }}
                sections={[
                    {
                        heading: "Forensic and Quality Audit Service Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our forensic and quality audit sample work, designed to deliver accurate insights, ensure regulatory compliance, and strengthen your organization’s operational integrity.",
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
                    title="Forensic and Quality Audit Service – Our Packages"
                    description="At Pubrica, our Forensic and Quality Audit Services are designed to provide organisations, research teams, academic institutions, and healthcare entities with comprehensive, evidence-driven, and compliance-focused audit solutions. Each package is tailored to the complexity of your project, the depth of investigation required, and the level of reporting essential for decision-making."
                    packages={packages}
                />
                {/* Bottom CTA Button */}
                <div className=" text-center">
                    <GetFreeQuoteButton />
                </div>
            </section>
        </article>
    );
}
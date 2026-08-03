'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
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

    const packages = [
        {
            badge: 'B',
            title: 'Basic Compliance Check',
            idealFor: 'Startups, small businesses, or teams need a quick health check of processes and documentation.',
            included: [
                'Preliminary review of documents and workflows',
                'Identification of red flags and compliance gaps',
                'Basic quality check of operational procedures',
                'Summary report with priority recommendations',
            ],
            turnaround: '3–5 business days',
            borderColor: 'border-emerald-300',
            headerBg: 'bg-emerald-50',
        },
        {
            badge: 'S',
            title: 'Standard Forensic & Quality Review',
            idealFor: 'Medium-sized organisations require deeper analysis for quality, risk, and operational accuracy.',
            included: [
                'Detailed review of financial and operational records',
                'Verification of processes, transactions, and documentation',
                'Identification of inconsistencies or quality deviations',
                'Risk assessment with corrective action roadmap',
            ],
            turnaround: '5–7 business days',
            borderColor: 'border-purple-300',
            headerBg: 'bg-purple-50',
        },
        {
            badge: 'A',
            title: 'Advanced Forensic Investigation',
            idealFor: 'Businesses facing suspected fraud, misconduct, major quality lapses, or needing high-level accuracy checks.',
            included: [
                'In-depth forensic investigation of processes, data, and transactions',
                'Evidence-based assessment with chain-of-custody controls',
                'Root-cause and gap analysis',
                'Quality assurance audit across all critical functions',
                'Detailed forensic report with legal/compliance readiness',
                'Recommendations for remediation',
            ],
            turnaround: '7–10 business days',
            borderColor: 'border-amber-300',
            headerBg: 'bg-amber-50',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Forensic and Quality Audit Services at Pubrica
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Our expert auditors meticulously examine and evaluate your processes, records, and compliance measures to ensure accuracy, integrity, and regulatory adherence, providing actionable insights that safeguard your organization and enhance operational quality.
                    </p>
                </div>
            </section>

            {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    How Our Forensic and Quality Audit Service Works
                </h2>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-6">Our Step-by-Step Process</p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                    At Pubrica, our forensic and quality audit services are designed to uncover hidden risks, ensure compliance, and enhance operational transparency. Our systematic approach combines investigative rigor with quality assurance to deliver actionable insights. Here’s how:
                </p>

                {/* Timeline / Steps Grid (7 steps arranged cleanly) */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
                    {processSteps.map((step, idx) => {
                        const isHovered = activeStep === step.num;
                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveStep(step.num)}
                                onMouseLeave={() => setActiveStep(null)}
                                className={`p-6 rounded-xl transition-all duration-300 flex flex-col items-center cursor-pointer border ${isHovered
                                        ? 'bg-[#333333] text-white border-[#333333] shadow-lg scale-105 z-10'
                                        : 'bg-white text-gray-800 border-gray-200'
                                    }`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-3 ${isHovered ? 'bg-white text-[#333333]' : 'bg-[#007791] text-white'
                                    }`}>
                                    {step.num}
                                </div>
                                <h3 className="text-xs font-bold mb-2 text-center">{step.title}</h3>
                                <p className={`text-[10px] leading-relaxed text-center ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <section className="py-14 px-4 bg-[#f4faf7] text-center" aria-labelledby="sample-heading">
                <div className="max-w-4xl mx-auto bg-white border border-emerald-100 rounded-xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[#0b3b2c] p-3 rounded-lg shadow-md flex justify-center items-center">
                            <div className="bg-white rounded p-4 w-full h-48 flex flex-col items-center justify-center">
                                <span className="text-3xl mb-2">📋</span>
                                <span className="text-xs font-bold text-gray-800">Forensic & Quality Audit Sample</span>
                                <span className="text-[10px] text-gray-500 mt-1">Audit Compliance Report Preview</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <h2 id="sample-heading" className="text-base md:text-lg font-bold text-[#0b3b2c] mb-4">
                                Forensic and Quality Audit Service Sample Work
                            </h2>
                            <div className="space-y-3 mb-6">
                                <button className="w-full bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
                                    Discover More
                                </button>
                            </div>
                            <h3 className="text-sm font-bold text-[#0b3b2c] mb-2">Download the full Report Now</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
                                Explore our forensic and quality audit sample work, designed to deliver accurate insights, ensure regulatory compliance, and strengthen your organization’s operational integrity.
                            </p>
                            <button className="w-full bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
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
                        Forensic and Quality Audit Service – Our Packages
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        At Pubrica, our Forensic and Quality Audit Services are designed to provide organisations, research teams, academic institutions, and healthcare entities with comprehensive, evidence-driven, and compliance-focused audit solutions. Each package is tailored to the complexity of your project, the depth of investigation required, and the level of reporting essential for decision-making.
                    </p>
                </div>

                {/* 3 Packages Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`bg-white border-2 ${pkg.borderColor} rounded-xl shadow-sm overflow-hidden flex flex-col justify-between`}
                        >
                            {/* Card Header */}
                            <div className={`${pkg.headerBg} p-6 border-b ${pkg.borderColor} text-center`}>
                                <div className="w-10 h-10 mx-auto rounded-full bg-white font-bold flex items-center justify-center text-sm shadow-sm mb-2 text-gray-900">
                                    {pkg.badge}
                                </div>
                                <h3 className="text-sm font-bold text-gray-900">{pkg.title}</h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4 text-xs">
                                <div>
                                    <span className="font-bold text-gray-900 block mb-1">➜ Ideal For:</span>
                                    <p className="text-gray-600 leading-relaxed">{pkg.idealFor}</p>
                                </div>

                                <div>
                                    <span className="font-bold text-gray-900 block mb-2">➜ Include:</span>
                                    <ul className="space-y-2">
                                        {pkg.included.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <span className="text-emerald-600 font-bold">•</span>
                                                <span className="leading-relaxed">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">➜ Turnaround time:</strong> {pkg.turnaround}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-12 text-center">
                    <GetFreeQuoteButton/>
                </div>
            </section>
        </article>
    );
}
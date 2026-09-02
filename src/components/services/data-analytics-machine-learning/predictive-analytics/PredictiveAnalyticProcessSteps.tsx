'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceBanner from '@/components/common/ServiceBanner';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';

// Step interface for Section 1
interface Step {
    id: number;
    title: string;
    description: string;
    icon: string;
}

// Compliance item interface for Section 3
interface ComplianceItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

const steps: WorkflowStep[] = [
    {
        stepNumber: 1,
        title: "DATA COLLECTION & PREPARATION",
        description:
            "We begin by gathering structured and unstructured datasets from diverse sources such as clinical trials, electronic health records, research repositories, or market databases. Data is cleaned, standardized, and validated to ensure reliability.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Data-Collection-Preparation.png",
        position: "top",
    },
    {
        stepNumber: 2,
        title: "EXPLORATORY DATA ANALYSIS (EDA)",
        description:
            "Our experts conduct a thorough analysis to identify trends, patterns, and hidden variables that influence future outcomes. This step ensures that modeling is grounded in strong, data-driven insights.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Exploratory-Data-Analysis-EDA.png",
        position: "bottom",
    },
    {
        stepNumber: 3,
        title: "MODEL VALIDATION & TESTING",
        description:
            "Every model undergoes rigorous validation and cross-checking against real-world datasets to ensure high accuracy, reproducibility, and generalizability.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Model-Validation-Testing.png",
        position: "top",
    },
    {
        stepNumber: 4,
        title: "MODEL DEVELOPMENT & SELECTION",
        description:
            "We design predictive models tailored to your objectives, using methods such as regression, classification, time-series forecasting, survival analysis, and advanced machine learning algorithms. The most suitable model is selected based on accuracy and robustness.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Model-Development-Selection.png",
        position: "bottom",
    },
    {
        stepNumber: 5,
        title: "SCENARIO SIMULATION & FORECASTING",
        description:
            "Through simulations and forecasting, we anticipate multiple outcomes and provide actionable insights that enable better decision-making and risk management.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Scenario-Simulation-Forecasting.png",
        position: "top",
    },
    {
        stepNumber: 6,
        title: "EVIDENCE-BASED REPORTING",
        description:
            "We deliver detailed, publication-ready reports with clear interpretations, visual dashboards, and strategic recommendations aligned with global research and industry standards.",
        iconSrc:
            "/images/data-analytics-machine-learning/predictive-analytics/Evidence-Based-Reporting.png",
        position: "bottom",
    },
];

const complianceData: ComplianceItem[] = [
    {
        id: 'research-guidelines',
        title: 'Research and Clinical Guidelines',
        content: (
            <div className="space-y-2 text-xs md:text-sm text-gray-700">
                <p>
                    <strong className="text-slate-900">CONSORT & SPIRIT</strong> – for predictive modeling in clinical trials and protocol development.
                </p>
                <p>
                    <strong className="text-slate-900">PRISMA & PROSPERO</strong> – for systematic reviews that integrate predictive analytics evidence.
                </p>
                <p>
                    <strong className="text-slate-900">TRIPOD & STROBE</strong> – for transparent reporting of predictive models and observational studies.
                </p>
            </div>
        ),
    },
    {
        id: 'data-privacy',
        title: 'Data Privacy & Ethical Standards',
        content: (
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                <strong className="text-slate-900">HIPAA</strong> (Health Insurance Portability and Accountability Act) – ensuring protection of patient health data in healthcare research.<br />
                <strong className="text-slate-900">GDPR</strong> (General Data Protection Regulation) – compliance with global data privacy standards for handling sensitive datasets.<br />
                <strong className="text-slate-900">Institutional Review Board (IRB) & Ethics Committees</strong> – alignment with ethical approval processes.
            </p>
        ),
    },
    {
        id: 'industry-frameworks',
        title: 'Industry & Regulatory Frameworks',
        content: (
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                <strong className="text-slate-900">ICH-GCP</strong> (International Council for Harmonisation – Good Clinical Practice) – for predictive analytics in drug development and trials.<br />
                <strong className="text-slate-900">FDA & EMA Guidelines</strong> – adherence to predictive modeling standards for regulatory submissions.<br />
                <strong className="text-slate-900">ISO Standards (ISO/IEC 27001, 27701)</strong> – for data security, governance, and information management.
            </p>
        ),
    },
];

export default function PredictiveAnalyticProcessSteps() {
    // Section 3 Accordion State: Default is NULL so NO card is open by default
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full bg-white font-sans text-slate-800">
            {/* Top Banner */}
            <ServiceBanner
                imageSrc="/images/icons/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Speed up your Predictive Analytics with Pubrica"
                description="Receive tailored support in applying advanced predictive models, ensuring accuracy, foresight, and clarity in transforming complex data into actionable insights that drive impactful decisions."
            />

            {/* ========================================================= */}
            {/* SECTION 1: Step-by-Step Process                           */}
            {/* ========================================================= */}
            <EditorialWorkflowSection
                heading="How Our Predictive Analytics Service Works"
                subheading="Our Step-by-Step Process"
                description="At Pubrica, we follow a structured, evidence-driven workflow to transform raw data into powerful predictive insights. Our process ensures transparency, accuracy, and applicability across clinical, healthcare, and business domains."
                steps={steps}
            />

            {/* ========================================================= */}
            {/* SECTION 2: Benefits Of Using Our Predictive Analytics    */}
            {/* ========================================================= */}
            <section className="py-7 px-4 bg-slate-50/60 border-t border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-10">
                        Benefits Of Using Our Predictive Analytics
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Left Image Column */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-md h-[280px] md:h-[340px] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/data-analytics-machine-learning/predictive-analytics/Benefits-of-Using-Our-Predictive-Analytics.webp"
                                    alt="Predictive analytics dashboard showing charts on laptop screen"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                        </div>

                        {/* Right Bullet Points Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-start gap-2.5">
                                <span className="text-slate-900 font-bold text-base mt-0.5">•</span>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                    <strong className="text-slate-900 font-bold">Improved Decision Making:</strong> Predictive analytics enables businesses to make informed decisions by analysing trends and patterns in historical data. This allows organizations to develop market strategies tailored to the insights gained from data analysis, leading to more effective decision-making processes.
                                </p>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <span className="text-slate-900 font-bold text-base mt-0.5">•</span>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                    <strong className="text-slate-900 font-bold">Enhanced Efficiency and Resource Allocation:</strong> By leveraging predictive analytics, businesses can optimize their operational processes and allocate resources more efficiently. This leads to cost savings, improved productivity, and better utilization of available resources.
                                </p>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <span className="text-slate-900 font-bold text-base mt-0.5">•</span>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                    <strong className="text-slate-900 font-bold">Enhanced Customer Experience:</strong> Predictive analytics enables businesses to enhance the customer experience by providing personalized product recommendations based on user behavior. By analysing customer data, businesses can understand individual preferences and tailor their offerings accordingly, leading to increased customer satisfaction and loyalty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION 3: Compliance & Guideline Standards & Sample Work */}
            {/* ========================================================= */}
            <section className="py-7 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-3">
                        Our Compliance and Guideline Standards
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mb-8 leading-relaxed">
                        At Pubrica, we ensure that every predictive analytics project adheres to internationally recognized compliance frameworks and guideline standards. Our focus is on transparency, reproducibility, and ethical use of data to build trust and credibility in research, healthcare, and business outcomes.
                    </p>

                    {/* Accordions List (NONE OPEN BY DEFAULT) */}
                    <div className="space-y-3 mb-16">
                        {complianceData.map((item) => {
                            const isOpen = activeAccordion === item.id;

                            return (
                                <div key={item.id} className="rounded-xs overflow-hidden border border-emerald-950">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full bg-[#0d3b33] hover:bg-[#072923] text-white px-5 py-3.5 flex items-center justify-between text-left transition-colors font-semibold text-sm md:text-base"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="font-mono text-base">{isOpen ? '–' : '+'}</span>
                                            <span>{item.title}</span>
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="bg-slate-50 p-5 border-t border-emerald-900/20">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Sample Work & Download Callout Block */}
                    <PubricaSampleWorkCard
                        bookCoverImage={{
                            src: "/images/data-analytics-machine-learning/predictive-analytics/Predictive-Analytics-Sample-Work.webp",
                            alt: "Predictive analytics sample work report display",
                            width: 600,
                            height: 520,
                        }}
                        sections={[
                            {
                                heading: "Predictive Analytics Sample Work",
                                button: {
                                    label: "Discover More",
                                    url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
                                },
                            },
                            {
                                heading: "Download the full Report Now",
                                descriptionSegments: [
                                    {
                                        text: "Explore our predictive analytics sample work, meticulously developed to meet journal-specific formatting requirements, rigorous methodological standards (e.g., TRIPOD, CONSORT), and project timelines, ensuring accurate, publication-ready, and actionable insights for research or business applications.",
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
                </div>
            </section>
        </div>
    );
}
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const stepsData: Step[] = [
    {
        id: 1,
        title: 'DATA COLLECTION & PREPARATION',
        description:
            'We begin by gathering structured and unstructured datasets from diverse sources such as clinical trials, electronic health records, research repositories, or market databases. Data is cleaned, standardized, and validated to ensure reliability.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Data-Collection-Preparation.png',
    },
    {
        id: 2,
        title: 'EXPLORATORY DATA ANALYSIS (EDA)',
        description:
            'Our experts conduct a thorough analysis to identify trends, patterns, and hidden variables that influence future outcomes. This step ensures that modeling is grounded in strong, data-driven insights.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Exploratory-Data-Analysis-EDA.png',
    },
    {
        id: 3,
        title: 'MODEL VALIDATION & TESTING',
        description:
            'Every model undergoes rigorous validation and cross-checking against real-world datasets to ensure high accuracy, reproducibility, and generalizability.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Model-Validation-Testing.png',
    },
    {
        id: 4,
        title: 'MODEL DEVELOPMENT & SELECTION',
        description:
            'We design predictive models tailored to your objectives, using methods such as regression, classification, time-series forecasting, survival analysis, and advanced machine learning algorithms. The most suitable model is selected based on accuracy and robustness.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Model-Development-Selection.png',
    },
    {
        id: 5,
        title: 'SCENARIO SIMULATION & FORECASTING',
        description:
            'Through simulations and forecasting, we anticipate multiple outcomes and provide actionable insights that enable better decision-making and risk management.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Scenario-Simulation-Forecasting.png',
    },
    {
        id: 6,
        title: 'EVIDENCE-BASED REPORTING',
        description:
            'We deliver detailed, publication-ready reports with clear interpretations, visual dashboards, and strategic recommendations aligned with global research and industry standards.',
        icon: '/images/data-analytics-machine-learning/predictive-analytics/Evidence-Based-Reporting.png',
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
            <div className="bg-[#05382b] text-white text-center py-8 px-4">
                <h2 className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
                    Speed up your Predictive Analytics with Pubrica
                </h2>
                <p className="text-xs md:text-sm text-emerald-100/80 mt-2 max-w-3xl mx-auto leading-relaxed">
                    Receive tailored support in applying advanced predictive models, ensuring accuracy, foresight, and clarity in transforming complex data into actionable insights that drive impactful decisions.
                </p>
            </div>

            {/* ========================================================= */}
            {/* SECTION 1: Step-by-Step Process                           */}
            {/* ========================================================= */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3832] mb-1">
                    How Our Predictive Analytics Service Works
                </h2>
                <h3 className="text-lg font-semibold text-slate-600 mb-3">
                    Our Step-by-Step Process
                </h3>
                <p className="max-w-4xl mx-auto text-gray-600 mb-12 text-xs md:text-sm leading-relaxed">
                    At Pubrica, we follow a structured, evidence-driven workflow to transform raw data into powerful predictive insights. Our process ensures transparency, accuracy, and applicability across clinical, healthcare, and business domains.
                </p>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start max-w-7xl mx-auto">
                    {stepsData.map((step) => {
                        const isEven = step.id % 2 === 0;

                        {/* Step Card: All start WHITE, turn DARK GRAY/BLACK on HOVER */ }
                        const processCard = (
                            <div className="group relative w-full bg-white hover:bg-neutral-800 p-5 rounded-xs border border-slate-200 hover:border-neutral-800 shadow-xs hover:shadow-xl transition-all duration-300 text-left flex flex-col min-h-[300px] cursor-pointer">
                                <div className="relative w-10 h-10 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                                    <Image src={step.icon} alt="" fill className="object-contain" />
                                </div>
                                <h4 className="font-bold text-slate-900 group-hover:text-white text-xs md:text-sm mb-3 leading-snug transition-colors duration-300 uppercase tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-xs text-gray-600 group-hover:text-neutral-300 leading-relaxed transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>
                        );

                        return (
                            <div key={step.id} className="flex flex-col items-center w-full">
                                {/* ODD STEPS (1, 3, 5): Circle TOP -> Stem -> Bar -> Card BOTTOM */}
                                {!isEven && (
                                    <>
                                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
                                            {step.id}
                                        </div>
                                        <div className="w-0.5 h-6 bg-cyan-600" />
                                        <div className="w-full h-1.5 bg-cyan-600 mb-4" />
                                        {processCard}
                                    </>
                                )}

                                {/* EVEN STEPS (2, 4, 6): Card TOP -> Bar -> Stem -> Circle BOTTOM */}
                                {isEven && (
                                    <>
                                        {processCard}
                                        <div className="w-full h-1.5 bg-cyan-600 mt-4" />
                                        <div className="w-0.5 h-6 bg-cyan-600" />
                                        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
                                            {step.id}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION 2: Benefits Of Using Our Predictive Analytics    */}
            {/* ========================================================= */}
            <section className="py-16 px-4 bg-slate-50/60 border-t border-slate-100">
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
            <section className="py-16 px-4 bg-white">
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
                    <div className="bg-[#f2faf6] border border-emerald-100 rounded-lg p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            {/* Left Image */}
                            <div className="md:col-span-5 flex justify-center">
                                <div className="relative w-full max-w-xs h-[220px] md:h-[260px] rounded-md overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/data-analytics-machine-learning/predictive-analytics/Predictive-Analytics-Sample-Work.webp"
                                        alt="Predictive analytics sample work report display"
                                        fill
                                        className="object-cover"
                                        sizes="300px"
                                    />
                                </div>
                            </div>

                            {/* Right Callouts */}
                            <div className="md:col-span-7 space-y-6">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                        Predictive Analytics Sample Work
                                    </h3>
                                    <Link href="/insights/sample-work" className="block w-full text-center bg-black hover:bg-neutral-800 text-white font-medium py-2 px-6 rounded-full transition-colors text-xs md:text-sm">
                                        Discover More
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                        Download the full Report Now
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                                        Explore our predictive analytics sample work, meticulously developed to meet journal-specific formatting requirements, rigorous methodological standards (e.g., TRIPOD, CONSORT), and project timelines, ensuring accurate, publication-ready, and actionable insights for research or business applications.
                                    </p>
                                    <Link href="/insights/sample-work" className="block w-full text-center bg-black hover:bg-neutral-800 text-white font-medium py-2 px-6 rounded-full transition-colors text-xs md:text-sm">
                                        Discover More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
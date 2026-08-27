'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Plus,
    Minus,
    ArrowRight,
    ArrowDown,
    ArrowLeft,
} from 'lucide-react';

// --- DATA ARRAYS ---

const approachData = [
    {
        id: 1,
        title: 'Evidence-Based Methodologies',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Evidence-Based-Methodologies.png',
        content: 'We apply advanced econometric models, cost-effectiveness analysis, budget impact analysis (BIA), Pharmacoeconomics, comparative effectiveness research (CER), and real-world evidence generation to uncover the clinical and economic value of healthcare interventions.',
    },
    {
        id: 2,
        title: 'Patient-Centred Focus',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Patient-Centred-Focus.png',
        content: 'We integrate patient-reported outcomes (PROs), patient journey mapping, and quality-of-life assessments, ensuring healthcare decisions reflect what matters most to patients.',
    },
    {
        id: 3,
        title: 'Collaborative Engagement',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Collaborative-Engagement.png',
        content: 'Our team works closely with clients, payers, clinicians, and policy makers to align HEOR research with stakeholder needs and expectations.',
    },
    {
        id: 4,
        title: 'Global Standards & Compliance',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Global-Standards-Compliance.png',
        content: 'All research adheres to ISPOR, NICE, ICER, and HTA body guidelines, ensuring credibility, regulatory acceptance, and successful HTA submissions across global markets.',
    },
    {
        id: 5,
        title: 'Data-Driven Insights',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Data-Driven-Insights.png',
        content: 'Leveraging real-world data, clinical trial results, and predictive modeling, we transform complex healthcare data into actionable strategies for decision-making.',
    },
    {
        id: 6,
        title: 'Value Demonstration',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Value-Demonstration.png',
        content: 'We translate evidence into clear value stories that support market access, reimbursement approvals, and peer-reviewed publications, driving value-based care initiatives.',
    },
];

const processSteps = [
    {
        step: 1,
        title: 'Understanding Your Needs',
        description: 'We begin by analyzing your product profile, therapeutic area, and market access challenges, defining clear HEOR objectives aligned with publication, funding, and reimbursement goals.',
    },
    {
        step: 2,
        title: 'Data Collection & Validation',
        description: 'We collect and validate data from clinical trials, real-world evidence (RWE), patient-reported outcomes (PROs), healthcare resource utilization studies, and large healthcare databases.',
    },
    {
        step: 3,
        title: 'Model Development & Analysis',
        description: 'Our experts apply advanced health economic models including cost-effectiveness analysis, budget impact analysis (BIA), cost-utility analysis, and comparative effectiveness research (CER) to assess value.',
    },
    {
        step: 4,
        title: 'Evidence Synthesis',
        description: 'We integrate findings through systematic literature reviews (SLRs), meta-analyses, and evidence synthesis frameworks to support HTA and payer submissions.',
    },
    {
        step: 5,
        title: 'Value Communication',
        description: 'We transform complex evidence into clear value dossiers, payer submissions, health technology assessments, and peer-reviewed publications tailored to global stakeholders.',
    },
    {
        step: 6,
        title: 'Regulatory & Market Alignment',
        description: 'All outputs are aligned with international HEOR guidelines (ISPOR, NICE, ICER, and HTA bodies), ensuring credibility, acceptance, and strong market access strategies.',
    },
    {
        step: 7,
        title: 'Actionable Insights Delivery',
        description: 'We deliver evidence-driven recommendations that support coverage decisions, reimbursement strategies, and value-based healthcare initiatives.',
    },
];

const complianceData = [
    {
        title: 'International Guidelines',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/International-Guidelines.png',
        description: 'We align with ISPOR, CHEERS 2022, PRISMA (for systematic reviews), and HTA body requirements including NICE (UK), CADTH (Canada), ICER (US), HAS (France), and IQWiG (Germany).',
    },
    {
        title: 'Regulatory Compliance',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Regulatory-Compliance.png',
        description: 'Our deliverables adhere to FDA, EMA, and other regional authority guidelines, ensuring acceptance in submissions, approvals, and market access strategies.',
    },
    {
        title: 'Ethical Standards',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Ethical-Standards.png',
        description: 'We follow Good Publication Practice (GPP), ICMJE, and data transparency requirements to guarantee ethical integrity and scientific credibility in all research outputs.',
    },
    {
        title: 'Data Privacy & Security',
        iconSrc: '/images/data-analytics-machine-learning/health-economics-outcome-research/Data-Privacy-Security.png',
        description: 'We strictly comply with GDPR (EU), HIPAA (US), and other local data protection regulations, safeguarding patient information and sensitive healthcare data.',
    },
];

// --- COMPONENT ---

export default function OurApproachSectionHealthEconomicsOutcomeResearch() {
    const [openCards, setOpenCards] = useState<Record<number, boolean>>({});

    const toggleCard = (id: number) => {
        setOpenCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800">

            {/* =========================================
            SECTION 1: OUR APPROACH
      ========================================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#0A322C] mb-4">
                        Our Approach
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
                        At Pubrica, we combine scientific rigor with real-world insights to deliver meaningful Health Economics & Outcomes Research (HEOR) solutions. Our approach is built on:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {approachData.map((card) => {
                        const isOpen = Boolean(openCards[card.id]);

                        return (
                            <div
                                key={card.id}
                                className={`border transition-all duration-300 rounded-lg overflow-hidden bg-[#F4FAF7] ${isOpen ? 'border-[#0A322C] shadow-sm' : 'border-gray-200'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleCard(card.id)}
                                    className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="relative w-8 h-8 shrink-0">
                                            <Image src={card.iconSrc} alt="" fill className="object-contain" />
                                        </div>
                                        <h3 className="font-semibold text-[#0A322C] text-sm sm:text-base">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <div className="text-[#0A322C] ml-2 flex-shrink-0">
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100/50">
                                        {card.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================
            SECTION 2: PROCESS FLOWCHART
      ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-[#0A322C] mb-2 uppercase tracking-wide">
                        How Our Health Economics & Outcome Research Service Works
                    </h2>
                    <h3 className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
                        Our Step-By-Step Process For Evidence-Based And Actionable Insights
                    </h3>
                    <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
                        At Pubrica, our Health Economics & Outcomes Research (HEOR) services follow a structured, evidence-driven process designed to deliver scientific rigor, real-world insights, and actionable outcomes. From early strategy development to advanced health economic modeling and regulatory-compliant reporting, every project is aligned with global healthcare and HTA standards.
                    </p>
                </div>

                {/* Desktop Snake Layout / Mobile Vertical List */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">

                        {/* Row 1: 1 -> 2 -> 3 */}
                        {[processSteps[0], processSteps[1], processSteps[2]].map((step, index) => (
                            <div key={step.step} className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200">
                                <div className="w-10 h-10 bg-[#0A322C] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                                    {step.step}
                                </div>
                                <h4 className="font-bold text-[#0A322C] mb-3">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.description}</p>
                                {/* Arrow Right (Only on Desktop, except last item) */}
                                {index < 2 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-400">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                                {/* Arrow Down (Under Card 3 on Desktop) */}
                                {index === 2 && (
                                    <div className="hidden md:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                                        <ArrowDown className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Row 2: 6 <- 5 <- 4 (Reversed order in grid mapping, placed dynamically) */}
                        <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 md:col-start-3">
                            <div className="w-10 h-10 bg-[#0A322C] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                                {processSteps[3].step}
                            </div>
                            <h4 className="font-bold text-[#0A322C] mb-3">{processSteps[3].title}</h4>
                            <p className="text-sm text-gray-600">{processSteps[3].description}</p>
                            {/* Arrow Left (Pointing to 5) */}
                            <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-400">
                                <ArrowLeft className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 md:col-start-2 md:row-start-2">
                            <div className="w-10 h-10 bg-[#0A322C] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                                {processSteps[4].step}
                            </div>
                            <h4 className="font-bold text-[#0A322C] mb-3">{processSteps[4].title}</h4>
                            <p className="text-sm text-gray-600">{processSteps[4].description}</p>
                            {/* Arrow Left (Pointing to 6) */}
                            <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-400">
                                <ArrowLeft className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 md:col-start-1 md:row-start-2">
                            <div className="w-10 h-10 bg-[#0A322C] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                                {processSteps[5].step}
                            </div>
                            <h4 className="font-bold text-[#0A322C] mb-3">{processSteps[5].title}</h4>
                            <p className="text-sm text-gray-600">{processSteps[5].description}</p>
                            {/* Arrow Down (Under Card 6) */}
                            <div className="hidden md:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                                <ArrowDown className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Row 3: 7 */}
                        <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 md:col-start-1 md:row-start-3">
                            <div className="w-10 h-10 bg-[#0A322C] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                                {processSteps[6].step}
                            </div>
                            <h4 className="font-bold text-[#0A322C] mb-3">{processSteps[6].title}</h4>
                            <p className="text-sm text-gray-600">{processSteps[6].description}</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
            SECTION 3: GREEN BANNER
      ========================================= */}
            <section className="bg-[#0A322C] text-white py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        Accelerate Your Health Economics & Outcome Research Modeling with Pubrica
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-100 max-w-5xl mx-auto">
                        Pubrica's HEOR modeling services deliver comprehensive analysis, refinement, optimization, and quality assurance, ensuring precision and reliability. Our experts specialize in cost-effectiveness models, budget impact analyses, Markov and decision-analytic models, and other advanced frameworks to generate robust insights. With scientifically validated models, we help stakeholders drive strategic healthcare outcomes, value demonstration, and informed economic decision-making.
                    </p>
                </div>
            </section>

            {/* =========================================
            SECTION 4: COMPLIANCE STANDARDS
      ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50/50">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A322C] mb-4">
                        Our Compliance And Guideline Standards
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-base">
                        At Pubrica, we ensure every Health Economics & Outcomes Research (HEOR) project meets the highest standards of scientific integrity, transparency, and global compliance. Our work is guided by internationally recognized frameworks and best practices, including:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {complianceData.map((item, index) => {
                        return (
                            <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                <div className="mb-4 relative w-12 h-12">
                                    <Image src={item.iconSrc} alt="" fill className="object-contain" />
                                </div>
                                <h3 className="font-bold text-[#0A322C] mb-3 text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================
            SECTION 5: SAMPLE WORK / REPORT DOWNLOAD
      ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-[#EBF7F2] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-5/12 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/data-analytics-machine-learning/health-economics-outcome-research/Health-Economics-Outcome-Research.png"
                            alt="Health Economics & Outcome Research Sample Work"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-7/12 flex flex-col space-y-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                Health Economics & Outcome Research Sample Work
                            </h3>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors duration-200">
                                Discover More
                            </Link>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                Download the full Report Now
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                                Explore our Health Economics & Outcome Research samples, designed to showcase evidence-based models, rigorous data analysis, and alignment with scientific and regulatory standards, delivering meaningful, decision-ready insights for publications and healthcare value assessment.
                            </p>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors duration-200">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
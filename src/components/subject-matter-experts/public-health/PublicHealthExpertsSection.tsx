"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'precision-personalisation',
        title: 'Precision and personalisation of public health',
        description: 'interventions by using information from genetics, behaviour and environment to optimise the overall health outcomes of communities and populations.'
    },
    {
        id: 'global-health-security',
        title: 'Global Health Security and Pandemic Preparedness',
        description: 'Strengthening of the surveillance systems, managing outbreaks, and preparation for disasters.'
    },
    {
        id: 'mental-health-wellbeing',
        title: 'Mental Health and Well-Being Research',
        description: "Enhancing the mental health of our community's citizens by developing prevention and promotion strategies including community-based approaches."
    },
    {
        id: 'climate-change-environmental',
        title: 'Climate Change and Environmental Health',
        description: 'Investigating how climate change, pollution, and environmental degradation affect health.'
    },
    {
        id: 'health-equity-social-determinants',
        title: 'Health Equity and Social Determinants of Health',
        description: 'Acknowledging and addressing the Health Disparities (including but not limited to) income, education, access to care, and social justice.'
    },
    {
        id: 'community-based-participatory',
        title: 'Community-Based and Participatory Research',
        description: 'Transitioning from the traditional top-down method of communicating with communities, to working directly with community members to develop culturally relevant and sustainable health solutions.'
    }
];

const whyTrustTabsData = [
    {
        id: 'expertise-led',
        title: 'Expertise-Led Support',
        description: 'Our company has an array of seasoned public health research experts, editors and statisticians who are well-versed in the intricacies of epidemiology, health policy, and population health research.'
    },
    {
        id: 'full-service',
        title: 'Full-Service Research Support',
        description: 'We provide comprehensive support from study design to data analysis, manuscript writing, and submitting to journals, covering all aspects of the research process.'
    },
    {
        id: 'high-standards',
        title: 'High Standards of Quality and Ethics',
        description: 'We adhere to the highest ethical standards, and are committed to providing researchers with accuracy, transparency, and compliance with guidelines for international publication.'
    },
    {
        id: 'expertise-publishing',
        title: 'Expertise in Publishing Worldwide',
        description: 'Having an in-depth knowledge of the most prestigious journals and the expectations of their editors will lead researchers to successful publication outcomes.'
    },
    {
        id: 'individualized-assistance',
        title: 'Individualized Assistance for Researchers',
        description: 'Projects will receive individualized assistance tailored to meet research goals, publication needs, and timelines, to help researchers achieve their objectives as efficiently as possible.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Disease prevention and management',
        description: 'about disease outbreaks'
    },
    {
        title: 'Health promotion and education',
        description: 'on healthy lifestyles and awareness'
    },
    {
        title: 'Protection of our environment',
        description: '(air, water, and food quality)'
    },
    {
        title: 'Improved health',
        description: 'for mothers and children'
    },
    {
        title: 'Tracking of diseases',
        description: 'and health trends'
    },
    {
        title: 'The development and implementation of effective health care policies/effective health policy planning',
        description: ''
    },
    {
        title: 'Worker\'s health',
        description: 'and safety'
    },
    {
        title: 'Global Health initiatives',
        description: '(i.e., Responding to global health challenges)'
    },
    {
        title: 'Mental Health promotion',
        description: 'and support for mental health'
    },
    {
        title: 'Emergency/disaster management',
        description: '- Preparedness for emergencies and responding to health emergency situations.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ananya Rao',
        degree: 'PhD in Public Health',
        experience: '15 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/genomics/Dr.-Maria-Oliveira.webp"
    },
    {
        name: 'Dr. Michael Thompson',
        degree: 'PhD in Epidemiology',
        experience: '17 years of experience',
        manuscripts: '210+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-M.-Chen.webp"
    },
    {
        name: 'Dr. Ritu Sharma',
        degree: 'PhD in Community & Preventive Medicine',
        experience: '12 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp"
    }
];

export default function PublicHealthExpertsSection() {
    // Accordion State: Default closed (-1)
    const [openTrendAccordion, setOpenTrendAccordion] = useState<number | null>(null);

    // Why Trust Pubrica Tab State
    const [activeTrustTab, setActiveTrustTab] = useState(0);

    const toggleTrendAccordion = (index: number) => {
        setOpenTrendAccordion(openTrendAccordion === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Public health Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Public health Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Public health research continues to evolve in response to global health challenges, technological advancements, and changing population needs. Key emerging trends include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
                    {/* Left Collapsible Accordion List */}
                    <div className="lg:col-span-7 space-y-3">
                        {emergingTrendsData.map((item, idx) => {
                            const isOpen = openTrendAccordion === idx;
                            return (
                                <div key={item.id} className="border-b border-gray-200 pb-3">
                                    <button
                                        onClick={() => toggleTrendAccordion(idx)}
                                        className="w-full flex items-center justify-between text-left py-2 text-sm sm:text-base font-semibold text-[#0e3b32] hover:text-[#185c4f] transition-colors"
                                    >
                                        <span className="flex items-center gap-2">
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 shrink-0 text-[#0e3b32]" />
                                            ) : (
                                                <Plus className="w-4 h-4 shrink-0 text-[#0e3b32]" />
                                            )}
                                            {item.title}
                                        </span>
                                    </button>

                                    {/* Collapsible Panel */}
                                    {isOpen && (
                                        <div className="mt-2 pl-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Images Container - Adjusted sizing to prevent overflow */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[360px]">
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-gray-200">
                                <Image
                                    src="/images/subject-matter-experts/public-health/Emerging-Trends-in-Public-health-Research.webp"
                                    alt="Medical research digital interface"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 360px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Paragraph explicitly positioned beneath grid with proper spacing */}
                <div className="pt-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        These trends highlight the importance of continuous research and knowledge dissemination to drive innovation and improve global health systems.
                    </p>
                </div>
            </section>


            {/* SECTION 2: Why Public health Researchers Trust Pubrica */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Public health Researchers Trust Pubrica
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Public health researchers choose Pubrica for our commitment to quality, integrity, and scientific excellence. We understand the complexities of public health research and provide tailored support to help researchers communicate their findings with clarity and impact.
                    </p>
                </div>

                {/* Tab Navigation Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 border-b border-gray-200">
                        {whyTrustTabsData.map((tab, idx) => {
                            const isActive = activeTrustTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrustTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                        ? 'bg-[#0e3b32] text-white shadow-sm'
                                        : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {whyTrustTabsData[activeTrustTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {whyTrustTabsData[activeTrustTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Applications of Public health */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Public health
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Public health plays a vital role in improving population well-being through prevention, protection, and promotion of healthy living. Key applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Public Health Points */}
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title} </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Hand Image */}
                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/public-health/Applications-of-Public-health.webp"
                            alt="Public health digital analytics tablet"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Public Health Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Public Health Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <img
                                            src={editor.avatar}
                                            alt={editor.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                <div className="space-y-2 text-xs sm:text-sm font-semibold text-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.manuscripts}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Journal Publication */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* The Lancet Journal Cover */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/public-health/sample-works-13-4.webp"
                            alt="The Lancet Public Health Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Closing the mortality gap for people with disabilities
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Hannah Kuper hannah. Sara Rotenberg.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            The lancet public health
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier Ltd.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            29.8(2025)
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
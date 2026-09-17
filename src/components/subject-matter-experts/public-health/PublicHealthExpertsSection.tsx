"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "expertise-led",
        title: "Expertise-Led Support",
        description:
            "Our company has an array of seasoned public health research experts, editors and statisticians who are well-versed in the intricacies of epidemiology, health policy, and population health research.",
    },
    {
        id: "full-service",
        title: "Full-Service Research Support",
        description:
            "We provide comprehensive support from study design to data analysis, manuscript writing, and submitting to journals, covering all aspects of the research process.",
    },
    {
        id: "high-standards",
        title: "High Standards of Quality and Ethics",
        description:
            "We adhere to the highest ethical standards, and are committed to providing researchers with accuracy, transparency, and compliance with guidelines for international publication.",
    },
    {
        id: "expertise-publishing",
        title: "Expertise in Publishing Worldwide",
        description:
            "Having an in-depth knowledge of the most prestigious journals and the expectations of their editors will lead researchers to successful publication outcomes.",
    },
    {
        id: "individualized-assistance",
        title: "Individualized Assistance for Researchers",
        description:
            "Projects will receive individualized assistance tailored to meet research goals, publication needs, and timelines, to help researchers achieve their objectives as efficiently as possible.",
    },
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

const applicationsData = [
    {
        title: "Disease prevention and management",
        desc: "about disease outbreaks",
        iconSrc:
            "/images/subject-matter-experts/public-health/Disease-prevention.webp",
    },
    {
        title: "Health promotion and education",
        desc: "on healthy lifestyles and awareness",
        iconSrc:
            "/images/subject-matter-experts/public-health/Health-promotion-and-education.webp",
    },
    {
        title: "Protection of our environment",
        desc: "(air, water, and food quality)",
        iconSrc:
            "/images/subject-matter-experts/public-health/Protection-of-our-environment.webp",
    },
    {
        title: "Improved health",
        desc: "for mothers and children",
        iconSrc:
            "/images/subject-matter-experts/public-health/Improved-health.webp",
    },
    {
        title: "Tracking of diseases",
        desc: "and health trends",
        iconSrc:
            "/images/subject-matter-experts/public-health/Tracking-of-diseases.webp",
    },
    {
        title: "The development and implementation of effective health care policies/effective health policy planning",
        desc: "",
        iconSrc:
            "/images/subject-matter-experts/public-health/health-care-policies.webp",
    },
    {
        title: "Worker's health",
        desc: "and safety",
        iconSrc:
            "/images/subject-matter-experts/public-health/Workers-health-and-safety.webp",
    },
    {
        title: "Global Health initiatives",
        desc: "(i.e., Responding to global health challenges)",
        iconSrc:
            "/images/subject-matter-experts/public-health/Global-Health-initiatives.webp",
    },
    {
        title: "Mental Health promotion",
        desc: "and support for mental health",
        iconSrc:
            "/images/subject-matter-experts/public-health/Mental-Health-promotion.webp",
    },
    {
        title: "Emergency/disaster management",
        desc: "- Preparedness for emergencies and responding to health emergency situations.",
        iconSrc:
            "/images/subject-matter-experts/public-health/Emergency_disaster-management.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Rao",
        degree: "PhD in Public Health",
        experience: "15 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/genomics/Dr.-Maria-Oliveira.webp",
    },
    {
        name: "Dr. Michael Thompson",
        degree: "PhD in Epidemiology",
        experience: "17 years of experience",
        manuscripts: "210+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-M.-Chen.webp",
    },
    {
        name: "Dr. Ritu Sharma",
        degree: "PhD in Community & Preventive Medicine",
        experience: "12 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp",
    },
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
                            <div className="relative w-full aspect-[4/3] overflow-hidden ">
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
                <ApplicationsSection
                    title="Applications of Public health"
                    description="Public health plays a vital role in improving population well-being through prevention, protection, and promotion of healthy living. Key applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/public-health/Applications-of-Public-Health.webp"
                    imageAlt="Applications of Public Health"
                />
            </section>

            {/* SECTION 4: Our Expert Public Health Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Public Health Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

            {/* SECTION 5: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/public-health/sample-works-13-4.webp",
                    imageAlt: "The Lancet Public Health Cover",
                    paperTitle: "Closing the mortality gap for people with disabilities",
                    author: "Hannah Kuper hannah. Sara Rotenberg.",
                    journalName: "The lancet public health",
                    publisher: "Elsevier Ltd.",
                    impactFactor: "29.8(2025)",
                }}
            />

        </div>
    );
}
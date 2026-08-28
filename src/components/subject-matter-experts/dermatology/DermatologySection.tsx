"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'teledermatology',
        title: 'Teledermatology',
        description: 'Enhancing remote diagnosis and management through digital imaging and AI-based tools.'
    },
    {
        id: 'personalized-dermatology',
        title: 'Personalized Dermatology',
        description: 'Utilizing genomic, proteomic, and biomarker research for individualized treatment approaches.'
    },
    {
        id: 'regenerative-dermatology',
        title: 'Regenerative Dermatology',
        description: 'Advances in stem cell therapy, wound healing, and tissue engineering for skin regeneration.'
    },
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence and Machine Learning',
        description: 'Applying AI for diagnostic accuracy, image analysis, and predictive modelling in dermatology research.'
    },
    {
        id: 'cosmeceutical-research',
        title: 'Cosmeceutical and Dermatocosmetic Research',
        description: 'Scientific validation of cosmetic products, natural formulations, and novel dermatological interventions.'
    }
];

const applicationsData = [
    {
        title: 'Clinical Applications',
        description: 'Enhancing patient outcomes by supporting dermatologists in diagnosis, treatment planning, and post-treatment monitoring.'
    },
    {
        title: 'Research Applications',
        description: 'Guiding in designing studies, conducting clinical trials, and publishing research findings in high-impact journals.'
    },
    {
        title: 'Educational Support',
        description: 'Assisting in the creation of educational materials, training modules, and CME (Continuing Medical Education) content for healthcare professionals.'
    },
    {
        title: 'Regulatory and Compliance Support',
        description: 'Offering expertise in navigating ethical approvals, clinical protocols, and regulatory guidelines for dermatology studies.'
    },
    {
        title: 'Cosmetic and Aesthetic Innovations',
        description: 'Supporting studies and publications related to anti-aging, skincare formulations, and aesthetic procedures.'
    }
];

const editorsData = [
    {
        name: 'Dr. Priya Sharma',
        degree: 'PhD in Clinical Dermatology',
        experience: '10 years of experience',
        manuscripts: '90+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/dermatology/Dr.-Priya-Sharma-1.webp"
    },
    {
        name: 'Dr. Rohan Kapoor',
        degree: 'MD in Dermatology',
        experience: '15 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/dermatology/Dr.-Rohan-Kapoor.webp"
    },
    {
        name: 'Dr. Ananya Mehra',
        degree: 'PhD in Dermatology',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/dermatology/Dr.-Ananya-Mehra.webp"
    }
];

export default function DermatologySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Supporting Emerging Dermatology Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Supporting Emerging Dermatology Research Trends
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Dermatology is witnessing rapid innovation through the integration of new technologies and research methodologies. Pubrica helps researchers stay ahead of emerging trends such as:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
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

                    {/* Active Tab Content Box */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {emergingTrendsData[activeTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTab].description}
                        </p>
                    </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed pt-2">
                    Pubrica's team is well-equipped to guide researchers in designing studies that align with these innovations, providing methodological support, regulatory guidance, and publication strategies.
                </p>
            </section>

            {/* SECTION 2: Applications of Dermatology Services */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Dermatology Services
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Pubrica's dermatology services have multiple applications that impact clinical practice, research, and education:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        {applicationsData.map((app, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{app.title}: </strong>
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/dermatology/Applications-of-Dermatology-Services.webp"
                            alt="Applications of Dermatology Services"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/dermatology/sample-works-4.webp"
                            alt="International Journal of Dermatology Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Review: Ultraviolet radiation and skin cancer
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Narayanan, D. L., Saladi, R. N., & Fox, J. L.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            International Journal of Dermatology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Wiley
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Dermatology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Dermatology Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                {/* Header with Avatar and Flags */}
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

                                {/* Editor Stats */}
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

        </div>
    );
}
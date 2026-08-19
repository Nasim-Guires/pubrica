"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'industry-4.0',
        title: 'Industry 4.0',
        description: 'Use of internet of things and data analytics to create intelligent factories.'
    },
    {
        id: 'ai-ml',
        title: 'AI & ML',
        description: 'Use of artificial intelligence and machine learning to improve production processes through intelligent optimization.'
    },
    {
        id: 'digital-twin',
        title: 'Digital Twin',
        description: 'Virtual simulation of actual production systems.'
    },
    {
        id: 'additive-manufacturing',
        title: 'Additive Manufacturing',
        description: 'Production methods that employ a layer-based approach for flexibility and customization.'
    },
    {
        id: 'sustainability',
        title: 'Sustainability',
        description: 'Eco-friendly methods that are energy efficient.'
    },
    {
        id: 'robotics',
        title: 'Robotics',
        description: 'Automated production systems that are flexible.'
    },
    {
        id: 'human-machine',
        title: 'Human-Machine',
        description: 'A relationship that enables operators to work with intelligent machines collaboratively.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Making products in large quantities in an efficient manner',
        description: ''
    },
    {
        title: 'Production Planning Controls (PPC):',
        description: 'Scheduling and inventory planning'
    },
    {
        title: 'Quality Assurance:',
        description: 'Reduce defects and ensure quality'
    },
    {
        title: 'Automation:',
        description: 'Use robots and automated production processes'
    },
    {
        title: 'Logistics:',
        description: 'Providing an economical way of managing logistics'
    },
    {
        title: 'Maintenance:',
        description: 'Increased reliability, reduced downtime'
    },
    {
        title: 'Sustainability:',
        description: 'Environmentally friendly manufacturing processes.'
    }
];

const editorsData = [
    {
        name: 'Dr. Evelyn Carter',
        degree: 'PhD in Production Engineering',
        experience: '12 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/production-engineering/Dr.-Evelyn-Carter-2.webp"
    },
    {
        name: 'Dr. Maya Chen',
        degree: 'PhD in Robotic Engineering',
        experience: '10 years of experience',
        manuscripts: '145+ manuscripts edited',
        countryFlag: '🇨🇳',
        avatar: "/images/subject-matter-experts/biomedical-imaging/Dr.-Maya-Chen-3.webp"
    },
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Manufacturing Engineering',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/algorithm/Dr.-David-Chen.webp"
    }
];

export default function ProductionEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Production Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Production Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field is rapidly evolving, driven by breakthroughs in technology and multidisciplinary research. Major emerging trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-b border-gray-200 flex items-center justify-center text-center ${isActive
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
                            {emergingTrendsData[activeTrendTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTrendTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Applications of Production Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Production Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Production engineering has wide-ranging applications that contribute to solutions to major global challenges:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    {item.title && <strong className="text-gray-900 font-bold">{item.title} </strong>}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/production-engineering/Applications-of-Production-Engineering.webp"
                            alt="Production Engineering Specialist operating automated machinery"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    These applications reflect the multidisciplinary potential of Production engineering in shaping the future of science and technology.
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/production-engineering/sample-works-11-9.webp"
                            alt="Recent Trends in Industrial and Production Engineering Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Manufacturing multi-material ceramics by sinterjoining based on vat photopolymerization (VPP)
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Johannes Schubert, Michael Schott & Frederik Zanger
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Production Engineering
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Springer Nature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Production Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Production Engineering Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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
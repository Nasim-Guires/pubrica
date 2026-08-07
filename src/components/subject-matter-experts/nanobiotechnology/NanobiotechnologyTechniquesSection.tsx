"use client";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'nanomedical-science',
        title: 'Nanomedical Science',
        description: 'Development of Precision Medicine Using Targeted Therapeutics'
    },
    {
        id: 'intelligent-nanoscale-materials',
        title: 'Intelligent Nanoscale Materials',
        description: 'A New Class of Materials That Respond to Stimuli and Are Used for Therapeutic and Diagnostic Applications'
    },
    {
        id: 'nano-sensor-technology',
        title: 'Nano sensor Technology',
        description: 'Detection of Disease at Early-Stage Using Nano sensors'
    },
    {
        id: 'gene-manipulation-technology',
        title: 'Gene Manipulation Technology',
        description: 'Efficient Delivery of CRISPR Using Nanocarriers'
    },
    {
        id: 'nanotechnology-environmental-remediation',
        title: 'Nanotechnology For Environmental Remediation',
        description: 'Purification of Water and Management of Environmental Pollution Through Use of Nanosized Materials'
    },
    {
        id: 'optimisation-vaccines-nanotech',
        title: 'Optimisation Of Vaccines Using Nanotech',
        description: 'Enhanced Efficacy of Vaccines, Increased Stability and New Ways for Prophylaxis Against Infectious Disease'
    },
    {
        id: 'nanostructured-biomaterials',
        title: 'Nanostructured Biomaterials',
        description: 'Tissue Engineering and Regeneration Using Nanostructured Materials'
    },
    {
        id: 'artificial-intelligence-nanotechnology',
        title: 'Artificial Intelligence and Nanotechnology',
        description: 'AI Optimisation of Drug Discovery and Medicine.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Diagnostics',
        description: 'Detection of diseases earlier using nano sensor technology.'
    },
    {
        title: 'Gene Therapy',
        description: 'Faster and more accurate way of delivering genetic material for the purpose of gene editing and modification.'
    },
    {
        title: 'Cancer Therapy',
        description: 'Delivery of nanoparticles targeted at cancer selectively.'
    },
    {
        title: 'Implants',
        description: 'Improvement in the functional performance and operational longevity of medical implant devices.'
    },
    {
        title: 'Pollution',
        description: 'Improved detection and monitoring of environmental contaminants.'
    },
    {
        title: 'Removal of Chemicals from Water',
        description: 'Nanomaterials designed to remove hazardous waste chemicals from the water.'
    },
    {
        title: 'Energy Sources',
        description: 'Use of nanomaterials to enhance biodiesel and other chemical conversion and energy storage processes.'
    },
    {
        title: 'Cosmetic Chemistry',
        description: 'Improved ability to absorb active cosmetic products.'
    }
];

const editorsData = [
    {
        name: 'Dr. Isabella Zhang',
        degree: 'PhD in Nanobiotechnology',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Oliver Patel',
        degree: 'PhD in Nanomedicine and Nanomaterials',
        experience: '11 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Priya Sharma',
        degree: 'PhD in Nanoengineering and Biotechnology',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
];

export default function NanobiotechnologyTechniquesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nano Biotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Nano Biotechnology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Nanobiotechnology are revolutionizing healthcare, environmental sustainability, and industry by enabling precise, targeted solutions at the nanoscale.
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-b border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                        ? 'bg-[#0e3b32] text-white shadow-sm'
                                        : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-250'
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

            {/* SECTION: Applications of Nano Biotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Nano Biotechnology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Nano Biotechnology has wide-ranging applications that contribute to solutions to major global challenges: Targeting, accuracy and speed in transporting drugs while minimising side effects.
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
                                    <strong className="text-gray-900 font-bold">{item.title} - </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600"
                            alt="Nanobiotechnology research setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Where Our Authors Publish */}
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
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
                            alt="Nature Nanotechnology Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Progress in cancer vaccines enabled by nanotechnology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            B. J. Kim, Nouran S. Abdelfattah, Alexander Hostetler & Darrell J. Irvine
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nature Nanotechnology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Nature Portfolio
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.9 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Nano Biotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Nano Biotechnology Editors
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
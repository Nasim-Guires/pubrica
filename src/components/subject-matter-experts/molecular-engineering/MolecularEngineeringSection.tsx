"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'precision-medicine',
        title: 'Precision Medicine',
        description: 'Using Genetic Information to Customize Treatment Choices and Improve Treatment Response.'
    },
    {
        id: 'synthetic-biology',
        title: 'Synthetic Biology',
        description: 'Engineering Biological Systems to Develop Biobased Products.'
    },
    {
        id: 'nanotechnology',
        title: 'Nanotechnology',
        description: 'Researching nanomaterials for medical and energy-related applications.'
    },
    {
        id: 'gene-therapy',
        title: 'Gene Therapy',
        description: 'Precision Gene Editing (CRISPR) is being utilized for Health and Agricultural applications.'
    },
    {
        id: 'ai-in-drug-discovery',
        title: 'Artificial Intelligence (AI) in Drug Discovery',
        description: 'Utilizing AI in the Discovery of New Drugs and Molecular Design.'
    },
    {
        id: 'computational-modelling',
        title: 'Computational Modelling',
        description: 'Creating Complex Simulations and Analyses of Molecular Behaviour.'
    },
    {
        id: 'environmental-solutions',
        title: 'Environmental Solutions',
        description: 'Developing Molecular Solutions to tackle Environmental Challenges.'
    },
    {
        id: 'quantum-computing',
        title: 'Quantum Computing',
        description: 'Using Quantum Technologies to Enhance Molecular Simulations.'
    }
];

const applicationsOfLifeScienceData = [
    {
        title: 'Materials',
        description: 'Different types of smart materials and specialized polymers'
    },
    {
        title: 'Biotechnology',
        description: 'Engineering organisms, gene-editing techniques, (e.g. CRISPR).'
    },
    {
        title: 'Quantum Technologies',
        description: 'Development of quantum dots and quantum computing materials.'
    },
    {
        title: 'Energy',
        description: 'Improved battery technologies and improved solar technologies (e.g. solar cells)'
    },
    {
        title: 'Environment',
        description: 'Actions taken to control pollution and to capture carbon dioxide'
    },
    {
        title: 'Sensors',
        description: 'Detection and measurement of specific types of molecules to monitor human health and the environment.'
    },
    {
        title: 'Artificial Intelligence',
        description: 'Molecular data storage/coding and drug discovery processes that are driven by artificial intelligence.'
    },
    {
        title: 'Robotics',
        description: 'The use of molecular motors for performing jobs at the nanoscale.'
    },
    {
        title: 'Food Engineering',
        description: 'crops to be resistant to disease and the production of synthetic foods.'
    }
];

const editorsData = [
    {
        name: 'Dr. Evelyn Carter',
        degree: 'PhD in Biomolecular Engineering',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/medical-animation/John-Miller.webp"
    },
    {
        name: 'Dr. Maya Chen',
        degree: 'PhD in Chemical & Biomolecular Engineering',
        experience: '10 years of experience',
        manuscripts: '145+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp"
    },
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Biomolecular Engineering',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/environmental-science/Dr.-Michael-Taylor.webp"
    }
];

export default function MolecularEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Molecular Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Molecular Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Trends in Health Care, Biotechnology, and Sustainability through Cutting-Edge Molecular Engineering.
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

            {/* SECTION: Applications of Molecular Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Molecular Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Molecular engineering is an interdisciplinary field that involves designing and manipulating molecules to create new materials, devices, and systems with specific functions. It applies principles from chemistry, physics, biology, and engineering to control molecular properties at the atomic and molecular levels. Here are some of its key applications:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {applicationsOfLifeScienceData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/molecular-engineering/Applications-of-Molecular-Engineering.webp"
                            alt="Molecular engineering research setup"
                            className="w-full h-full object-cover"
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
                            src="/images/subject-matter-experts/molecular-engineering/sample-works-13.webp"
                            alt="Journal of Cardiovascular Development and Disease Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Areca Plant Extracts as a Green Corrosion Inhibitor of Carbon Steel Metal in 3 M Hydrochloric Acid: Gasometric, Colorimetry and Atomic Absorption Spectroscopy Views
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Narasimha Raghavendra
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Cardiovascular Development and Disease
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            World Scientific Publishing Co. Pte. Ltd.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.0
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Molecular Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Molecular Engineering Editors
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
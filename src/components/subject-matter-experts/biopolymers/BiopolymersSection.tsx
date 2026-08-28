"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'biodegradable-plastics',
        title: 'Biodegradable Plastics for the Circular Economy',
        description:
            'Growing concerns about plastic accumulation have accelerated the demand for PLA, PHAs, starch blends, and other biodegradable materials. Research emphasizes enhancing mechanical strength, degradation rates, and competitive manufacturing costs.'
    },
    {
        id: 'nano-structured-biopolymers',
        title: 'Nano-Structured Biopolymers',
        description:
            'Nanocomposites, nano-cellulose, chitosan nanoparticles, and polymer nanocarriers are paving the way for new material functionalities in environmental cleanup, tissue engineering, drug delivery, and military applications.'
    },
    {
        id: 'microbial-enzymatic-production',
        title: 'Microbial and Enzymatic Polymer Production',
        description:
            'Microbiological synthesis is gaining prominence due to low energy input and high scalability. Novel microbial strains are being engineered to produce tailor-made biopolymers using fermentation waste, agricultural residues, and industrial by-products.'
    },
    {
        id: 'bio-inspired-material-design',
        title: 'Bio-Inspired Material Design',
        description:
            'Researchers are adapting polymer structures from nature, such as spider silk and plant fibres, to develop strong, lightweight, and multifunctional materials.'
    },
    {
        id: 'smart-responsive-biopolymers',
        title: 'Smart and Responsive Biopolymers',
        description:
            'Hydrogels and shape-memory polymers that respond to pH, temperature, light, or biological triggers are becoming critical in wearable electronics, biosensors, regenerative medicine, and controlled drug release.'
    },
    {
        id: 'ai-computational-engineering',
        title: 'AI and Computational Engineering in Biopolymer Design',
        description:
            'Machine learning and molecular simulation tools now accelerate the prediction of polymer properties, biodegradation behaviour, and optimal synthesis pathways, shortening development cycles and improving performance outcomes'
    }
];

const editorsData = [
    {
        name: 'Dr. Ananya Krishnan',
        degree: 'PhD in Biopolymers',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biopolymers/Dr.-Ananya-Krishnan-1.webp"
    },
    {
        name: 'Dr. Aarav Mehta',
        degree: 'PhD in Biopolymer Science',
        experience: '11 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Ananya-Patel.webp"
    },
    {
        name: 'Dr. Shreya Nambiar',
        degree: 'PhD in Biomedical Polymers',
        experience: '9 years of experience',
        manuscripts: '80 manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biopolymers/Dr.-Shreya-Nambiar.webp"
    }
];

export default function BiopolymersSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Biopolymer Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Biopolymer Research Trends
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of biopolymers is evolving rapidly due to technological advancements, environmental policies, and increased investment in sustainable manufacturing. Key emerging trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
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
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
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
                            src="/images/subject-matter-experts/biopolymers/sample-works-8-2.webp"
                            alt="Biopolymers Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Emerging Roles of Biopolymers in Seed Science and Technology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Anu, Velusamy, M., Rathinavelu, S., Shanmugam, V., Gnanadhas, P., &amp; Karre, S
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Biopolymers
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            3.2
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            Wiley
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Biopolymers Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biopolymers Editors
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
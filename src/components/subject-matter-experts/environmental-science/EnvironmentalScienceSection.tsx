"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'sustainable-agriculture',
        title: 'Sustainable Agriculture and Food Security',
        description: 'Precision Farming, and Vertical Farming, these advances are creating an agricultural revolution by enhancing crop yields with lower amounts of water and supporting sustainable food production, which also addresses some of the global Food Security Problems.'
    },
    {
        id: 'circular-economies',
        title: 'Circular Economies',
        description: 'The circular economy reduces the amount of waste being produced, maximizes material reuse and increases the reuse of products materials which leads to increased sustainability of both production and consumption throughout all sectors of the world.'
    },
    {
        id: 'environmental-biotechnology',
        title: 'Environmental Biotechnology',
        description: 'is being utilized to provide bioremediation, biofuels, and waste-to-energy processes to allow for a cleaner manufacturing process.'
    },
    {
        id: 'green-infrastructure',
        title: 'Green Infrastructure',
        description: 'utilizes different urban tools, such as "green" roofs, permeable pavement, and stormwater management systems to improve the urban environment.'
    },
    {
        id: 'ai-in-monitoring',
        title: 'AI in Monitoring',
        description: 'Artificial Intelligence (AI) technology is being used in conjunction with environmental data collection and analysis.'
    },
    {
        id: 'plastic-pollution',
        title: 'Plastic Pollution',
        description: 'Biodegradable Plastics and advances in plastic recycling methods can reduce plastic pollution.'
    }
]

const applicationsData = [
    {
        title: 'Conserve Biodiversity and Restore Ecosystems',
        description: 'Conserve Biodiversity and Restore Ecosystems'
    },
    {
        title: 'Reduce Greenhouse Gas Emissions and Adapt to Climate Change',
        description: 'Reduce Greenhouse Gas Emissions and Adapt to Climate Change'
    },
    {
        title: 'Develop Eco-Friendly Agricultural Practices',
        description: 'Develop Eco-Friendly Agricultural Practices'
    },
    {
        title: 'Control Air, Water and Soil Pollution',
        description: 'Control Air, Water and Soil Pollution'
    },
    {
        title: 'Support the Research and Development of Wind, Solar and Bioenergy Sources',
        description: 'Support the Research and Development of Wind, Solar and Bioenergy Sources'
    },
    {
        title: 'Manage Water by Using the Latest Technologies',
        description: 'Manage Water by Using the Latest Technologies'
    },
    {
        title: 'Promote Recycling and Waste for Energy Solutions',
        description: 'Promote Recycling and Waste for Energy Solutions'
    },
    {
        title: 'Provide a Healthy Environment by Reducing Pollution Exposure to Human Health',
        description: 'Provide a Healthy Environment by Reducing Pollution Exposure to Human Health'
    },
    {
        title: 'Develop Environmental Policies to Preserve Natural Resources',
        description: 'Develop Environmental Policies to Preserve Natural Resources'
    },
    {
        title: 'Build Sustainable Urban Areas with Green Infrastructure',
        description: 'Build Sustainable Urban Areas with Green Infrastructure'
    }
];

const editorsData = [
    {
        name: 'Dr. Rajesh Kumar',
        degree: 'Ph.D. in Climate Change and Policy',
        experience: '9 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/dentistry/Dr.-Rajesh-Kumar.webp"
    },
    {
        name: 'Dr. Neha Gupta',
        degree: 'Ph.D. in Conservation Biology',
        experience: '7 years of experience',
        manuscripts: '80+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp"
    },
    {
        name: 'Dr. Maya Desai',
        degree: 'Ph.D. in Environmental Science',
        experience: '11 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp"
    }
];

export default function EnvironmentalScienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Environmental Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Environmental Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The agricultural sector is witnessing rapid technological evolution. Some emerging trends include:
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

            {/* SECTION 2: Applications of Environmental Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Environmental Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Environmental Science addresses many of the world&apos;s most pressing issues such as global development, global health and natural resource management. Environmental Science is applied in virtually every industry to promote clean, sustainable solutions and reduce our negative impact on Ecological Balance/Ecological Limits. Environmental Science can be applied in several areas of focus:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {applicationsData.map((app, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/environmental-science/Environmental-Science.webp"
                            alt="Environmental Science sprouts in petri dish setup"
                            className="w-full h-auto object-cover"
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
                        Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/environmental-science/Ecological.webp"
                            alt="Journal of Environmental Sciences Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Prohexadione-Calcium Mitigates the Overgrowth of Corn Seedlings
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Duong MV, Chung J-W, Ha VG, Moon H, Yu J-K, So Y-S
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Environmental Sciences
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            6.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Agrotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Agrotechnology Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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
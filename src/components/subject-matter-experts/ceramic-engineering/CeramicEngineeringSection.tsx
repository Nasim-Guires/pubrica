"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { 
    Briefcase, 
    FileText, 
    Rocket, 
    Zap, 
    Cpu, 
    HeartPulse, 
    Car, 
    Factory, 
    Leaf 
} from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'additive-manufacturing',
        title: 'Additive Manufacturing 3D Printing',
        description: 'Custom-made ceramic components with intricate shapes and minimal material waste.'
    },
    {
        id: 'nanostructured-ceramics',
        title: 'Nanostructured Functional Ceramics',
        description: 'Engineering ceramics at the nanoscale to improve mechanical strength, electrical conductivity, and thermal resistance.'
    },
    {
        id: 'high-temperature-materials',
        title: 'High Temperature Heat Resistant Materials',
        description: 'Developing advanced ultra-high-temperature ceramics capable of withstanding extreme aerospace and industrial environments.'
    },
    {
        id: 'bio-ceramics',
        title: 'Bio-Ceramics Biomedical Applications',
        description: 'Biocompatible ceramic materials designed for medical implants, bone grafts, and dental restorations.'
    },
    {
        id: 'computational-models',
        title: 'Computational Predictive Simulation Models',
        description: 'Using molecular simulations and predictive modeling to accelerate material design and microstructural analysis.'
    },
    {
        id: 'eco-friendly-processes',
        title: 'Eco-Friendly and Sustainable Manufacturing Processes',
        description: 'Adopting sustainable synthesis methods and lower sintering temperatures to reduce environmental impact during production.'
    },
    {
        id: 'smart-multifunctional-ceramics',
        title: 'Smart Multifunctional Ceramics',
        description: 'Integrating sensing, piezoelectric, and self-healing properties into structural ceramic systems.'
    }
];

const applicationsData = [
    {
        icon: Rocket,
        title: "Aerospace and Defense",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Aerospace-and-Defense.webp",
        description: "heat resistant components, thermal barrier materials, and lightweight structural components."
    },
    {
        icon: Zap,
        title: "Energy and Power",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Energy-and-Power.webp",
        description: "fuel cells, batteries, solar panels, and nuclear reactors."
    },
    {
        icon: Cpu,
        title: "Electrical and Electronics",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Electrical-and-Electronics.webp",
        description: "capacitors, insulators, semiconductors, and sensors."
    },
    {
        icon: HeartPulse,
        title: "Health and Biomedical",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Health-and-Biomedical.webp",
        description: "implants, prosthetics, dental ceramics, and bioactive ceramics."
    },
    {
        icon: Car,
        title: "Automobile and Transportation",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Automobile-and-Transportation.webp",
        description: "engine parts, wear-resistant coatings for brakes."
    },
    {
        icon: Factory,
        title: "Industrial Manufacturing",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Industrial-Manufacturing.webp",
        description: "cutting tools, select refractory materials, and various chemical processing equipment."
    },
    {
        icon: Leaf,
        title: "Environmental and Sustainable Applications",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Environmental-and-Sustainable-Applications.webp",
        description: "ceramic filters, environmental catalysts, and environmental ceramic materials."
    }
];

const editorsData = [
    {
        name: 'Dr. Rajesh Kumar',
        degree: 'PhD in Ceramic Engineering',
        experience: '15 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/animal-science/warvien.png"
    },
    {
        name: 'Dr. Priya Desai',
        degree: 'PhD in Materials & Ceramic Engineering',
        experience: '10 years of experience',
        manuscripts: '145+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp"
    },
    {
        name: 'Dr. Michael Thompson',
        degree: 'PhD in Advanced Ceramics & Engineering',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp"
    }
];

export default function CeramicEngineeringSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Ceramic Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Ceramic Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of Ceramic Engineering is ever evolving, as new materials develop at an increasingly rapid pace due to advances in materials science and manufacturing technologies, as well as improvements in computational tools.
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-2 py-3 text-xs font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center pt-2">
                    These trends are shaping the future of ceramic engineering, enabling high-performance, durable, and innovative solutions across industries.
                </p>
            </section>

            {/* SECTION 2: Applications of Ceramic Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Ceramic Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Ceramic Engineering serves diverse industries because of the special characteristics of ceramic materials (example: high temperature resistance, strength, and insulation). The major applications of ceramic materials include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                    {/* Applications List */}
                    <div className="lg:col-span-7 space-y-4">
                        {applicationsData.map((app, idx) => {
                            const IconComp = app.icon;
                            return (
                                <div key={idx} className="flex items-start space-x-3">
                                    <div className="p-2 bg-[#f0f4f3] rounded-lg shrink-0 text-[#0e3b32] mt-0.5">
                                        <IconComp className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                        <strong className="font-bold text-gray-900">{app.title}: </strong>
                                        {app.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right-side Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-[340px] sm:h-[420px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/ceramic-engineering/Processing-Fabrication-Engineering.webp"
                                alt="Pottery and Ceramic Engineering Manufacturing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                    Ceramic Engineering supports innovation and durability in a variety of high-performance applications across a wide range of industries.
                </p>
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
                            src="/images/subject-matter-experts/ceramic-engineering/Microstructural-analysis-and-characterization.webp"
                            alt="Ceramic Science and Engineering Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            4 – Bio ceramics: materials, properties, and applications
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Wei Cui, Lei Cao, Xing Zhang
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Ceramic Science and Engineering
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Ceramic Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Ceramic Engineering Editors
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
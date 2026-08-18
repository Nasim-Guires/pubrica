"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, PawPrint, Pill, Utensils, Fuel, Leaf } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'next-gen-enzyme-discovery',
        title: 'Next-Generation Enzyme Discovery',
        description:
            'Mining novel enzymes from extremophiles and microbial diversity to expand reaction capabilities.'
    },
    {
        id: 'synthetic-biology-integration',
        title: 'Synthetic Biology Integration',
        description:
            'Designing artificial pathways for efficient biocatalytic synthesis of complex molecules.'
    },
    {
        id: 'biocatalyst-immobilization',
        title: 'Biocatalyst Immobilization',
        description:
            'Enhancing enzyme reusability and process stability for industrial applications.'
    },
    {
        id: 'sustainable-green-chemistry',
        title: 'Sustainable and Green Chemistry',
        description:
            'Leveraging biocatalysts to reduce waste, energy consumption, and reliance on hazardous chemicals.'
    },
    {
        id: 'computational-enzyme-design',
        title: 'Computational Enzyme Design',
        description:
            'Utilizing AI and molecular modelling to predict enzyme-substrate interactions and improve catalytic efficiency.'
    },
    {
        id: 'animal-nutrition-applications',
        title: 'Animal Nutrition Applications',
        description:
            'Innovating enzyme formulations to improve feed digestibility, gut health, and nutrient bioavailability.'
    }
];

const applicationsData = [
    {
        title: "Animal Science",
        description: "Enzyme supplementation in feed improves nutrient digestibility, promotes animal health, and reduces environmental nitrogen load.",
        icon: PawPrint
    },
    {
        title: "Pharmaceuticals",
        description: "Biocatalysts enable stereoselective drug synthesis, lowering costs and minimizing hazardous by-products.",
        icon: Pill
    },
    {
        title: "Food Industry",
        description: "Enzymatic processing enhances food quality, flavour, and shelf-life while reducing chemical additives.",
        icon: Utensils
    },
    {
        title: "Biofuels and Green Chemistry",
        description: "Microbial and enzymatic catalysis convert biomass into biofuels and fine chemicals, reducing carbon footprints.",
        icon: Fuel
    },
    {
        title: "Environmental Remediation",
        description: "Biocatalysts degrade pollutants, detoxify waste streams, and contribute to cleaner ecosystems.",
        icon: Leaf
    }
];

const editorsData = [
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Biocatalysis',
        experience: '8 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biocatalysts/Dr.-Arjun-Mehta-2.webp"
    },
    {
        name: 'Dr. Ethan Li',
        degree: 'PhD in Biocatalytic Engineering',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biomedical-engineering/Dr.-Ethan-Varghese-1.webp"
    },
    {
        name: 'Dr. Priya Kapoor',
        degree: 'PhD in Biocatalyst Development',
        experience: '7 years of experience',
        manuscripts: '95 manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biocatalysts/Dr.-Priya-Kapoor.webp"
    }
];

export default function BiocatalystsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Biocatalyst Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Biocatalyst Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biocatalysis is at the forefront of innovation in biotechnology. Staying ahead requires awareness of emerging trends, including:
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

            {/* NEW SECTION: Applications of Biocatalyst Research */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Biocatalyst Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biocatalysts impact multiple industries, driving innovation and sustainability:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left List of Applications */}
                    <div className="lg:col-span-7 space-y-6">
                        {applicationsData.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="p-2.5 rounded-lg bg-[#eef2f1] text-[#0e3b32] shrink-0 mt-1">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm sm:text-base leading-relaxed text-gray-700">
                                        <span className="font-bold text-gray-900">{item.title}: </span>
                                        {item.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Image Display */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/subject-matter-experts/biocatalysts/Applications-of-Biocatalyst-Research.webp"
                                alt="Laboratory Beakers and Biocatalysts"
                                fill
                                sizes="(max-width: 1024px) 100vw, 360px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg max-w-6xl leading-relaxed mt-4">
                    By leveraging these applications, Pubrica empowers researchers to produce work that not only advances science but also contributes to sustainable development.
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
                            src="/images/subject-matter-experts/biocatalysts/sample-works-7-4.webp"
                            alt="ACS Catalysis Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            A Chimera between Particulate and Soluble Methane Monooxygenases Produces Methanol Using Endogenous NADH in <em>Escherichia coli</em>
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Yu, Y., Choi, Y., Kwon, Y. W., &amp; Lee, J
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            ACS Catalysis
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            American Chemical Society
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.1
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Biocatalyst Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biocatalyst Editors
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
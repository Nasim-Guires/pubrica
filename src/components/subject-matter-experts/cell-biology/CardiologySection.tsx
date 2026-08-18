"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    Microscope,
    Dna,
    Syringe,
    FlaskConical,
    Stethoscope,
    Activity
} from 'lucide-react';

// Tabbed Data for Emerging Research Trends in Cell Biology
const conditionsTabs = [
    {
        id: 'single-cell-omics',
        label: 'Single-Cell Omics',
        title: 'Single-Cell Omics',
        description: 'High-throughput sequencing and analysis of individual cells reveal cellular heterogeneity and lineage relationships.'
    },
    {
        id: 'organoid-technology',
        label: 'Organoid Technology',
        title: 'Organoid Technology',
        description: 'Development of 3D cell cultures that mimic organ structure and function, facilitating disease modeling and drug screening.'
    },
    {
        id: 'systems-cell-biology',
        label: 'Systems Cell Biology',
        title: 'Systems Cell Biology',
        description: 'Integrating computational modeling and bioinformatics to understand complex cellular networks.'
    },
    {
        id: 'cell-mechanics',
        label: 'Cell Mechanics and Biophysics',
        title: 'Cell Mechanics and Biophysics',
        description: 'Investigating how physical forces and mechanical properties influence cellular behavior.'
    },
    {
        id: 'ai-cell-imaging',
        label: 'Artificial Intelligence (AI) in Cell Imaging',
        title: 'Artificial Intelligence (AI) in Cell Imaging',
        description: 'Using AI-based algorithms for automated image analysis, pattern recognition, and predictive modeling.'
    },
    {
        id: 'synthetic-biology',
        label: 'Synthetic Biology',
        title: 'Synthetic Biology',
        description: 'Engineering cells to perform novel functions for therapeutic and industrial applications.'
    }
];

// Applications List Data (2-Column Icon + Text layout matching screenshot)
const applicationsList = [
    {
        icon: Stethoscope,
        title: "Disease Mechanism Elucidation",
        iconSrc: "/images/subject-matter-experts/cardiology/Interventional-Car-diology.png",
        description: "Understanding how cellular dysfunction leads to diseases such as cancer, neurodegenerative disorders, diabetes, and cardiovascular conditions."
    },
    {
        icon: Microscope,
        title: "Drug Discovery and Development",
        iconSrc: "/images/subject-matter-experts/cardiology/Electrophysiology.png",
        description: "Utilizing cellular assays and models to identify drug targets, assess efficacy, and predict toxicity."
    },
    {
        icon: Activity,
        title: "Regenerative Medicine",
        iconSrc: "/images/subject-matter-experts/cardiology/Heart-Failure-and-Transplantation.png",
        description: "Harnessing stem cell biology to regenerate damaged tissues and organs."
    },
    {
        icon: Dna,
        title: "Genetic Engineering",
        iconSrc: "/images/subject-matter-experts/cardiology/Cardiac-Surgery.png",
        description: "Applying cellular-level insights for gene editing using CRISPR-Cas9 and other molecular tools."
    },
    {
        icon: Syringe,
        title: "Vaccine Development",
        iconSrc: "/images/subject-matter-experts/cardiology/Paediatric-Cardiology.png",
        description: "Exploring cellular immune responses to design effective vaccines against infectious diseases."
    },
    {
        icon: FlaskConical,
        title: "Tissue Engineering",
        iconSrc: "/images/subject-matter-experts/cardiology/Cardiovascular-Imaging.png",
        description: "Integrating cell biology with materials science to develop biomimetic scaffolds for tissue reconstruction."
    }
];

// Cell Biology Editors Data
const editorsData = [
    {
        name: 'Dr. Sarah Mitchell',
        degree: 'PhD in Cell Biology',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: '/images/subject-matter-experts/cardiology/Empowering-Research-Excellence-in-Cardiology-through-Expert-Guidance.webp'
    },
    {
        name: 'Dr. Emily Carter',
        degree: 'PhD in Developmental Cell Biology',
        experience: '10 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cardiology/Dr.-Emily-Carter.webp"
    },
    {
        name: 'Dr. Jonathan Reed',
        degree: 'PhD in Molecular and Cellular Physiology',
        experience: '15 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: '/images/subject-matter-experts/cardiology/Dr.-Samuel-Hart.webp'
    }
];

export default function CardiologySection() {
    // Active Tab State for Emerging Research Trends in Cell Biology
    const [activeTab, setActiveTab] = useState('single-cell-omics');

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cell Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Research Trends in Cell Biology
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        With the advent of advanced tools and technologies, Cell Biology is transforming precision and integration. Key emerging trends include:
                    </p>
                </div>

                {/* Tabbed Component Box */}
                <div className="border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                    {/* Tabs Navigation Header */}
                    <div className="grid grid-cols-2 md:grid-cols-6 border-b border-gray-200 text-center text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100">
                        {conditionsTabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-3.5 px-3 transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center ${isActive
                                            ? 'bg-[#0e3b32] text-white'
                                            : 'hover:bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Panel */}
                    <div className="p-6 bg-white min-h-[140px] space-y-2">
                        {conditionsTabs.map((tab) => {
                            if (tab.id !== activeTab) return null;
                            return (
                                <div key={tab.id} className="space-y-2 transition-opacity duration-200">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                        {tab.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        {tab.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Applications of Cell Biology Research (Exact Match Design) */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Cell Biology Research
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        The applications of Cell Biology extend across medical, pharmaceutical, and biotechnological industries. Some notable areas include:
                    </p>
                </div>

                {/* Grid Layout: Left List + Right Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                    {/* Left Side: Icon List */}
                    <div className="lg:col-span-7 space-y-5">
                        {applicationsList.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-1.5 rounded-md text-[#0e3b32] shrink-0 mt-0.5">
                                        {(item as { iconSrc?: string }).iconSrc ? (
                                            <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain shrink-0" />
                                        ) : (
                                            <IconComponent className="w-6 h-6 stroke-[1.5]" />
                                        )}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        <strong className="font-bold text-gray-900">{item.title}: </strong>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Featured Cell Image */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/subject-matter-experts/cell-biology/Applications-of-Cell-Biology-Research.webp"
                                alt="Cell Biology Microscopic View"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover"
                            />
                        </div>
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
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <Image
                            src="/images/subject-matter-experts/cell-biology/sample-works-6.webp"
                            alt="Nature Cell Biology Journal Cover"
                            width={224}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-xs sm:text-sm leading-relaxed pt-2">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Cholesterol sensing by the SCAP-FAM134B complex regulates ER-phagy and STING innate immunity
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Li, B., Zhou, D., Wang, X. et al
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nature Cell Biology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Nature Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            19.1 (2025)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Cell Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cell Biology Editors
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
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
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            width={56}
                                            height={56}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-xs bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                                    <div className="flex items-center space-x-1.5">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <FileText className="w-4 h-4 text-[#0e3b32] shrink-0" />
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
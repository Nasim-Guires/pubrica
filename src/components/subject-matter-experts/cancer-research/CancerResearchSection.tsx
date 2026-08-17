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
    Leaf,
    ChevronRight
} from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence and Machine Learning',
        description: 'AI enhances early detection, tumour classification, treatment response prediction, and drug discovery. Machine learning models assist in image-based diagnostics and clinical decision support systems.'
    },
    {
        id: 'liquid-biopsies',
        title: 'Liquid Biopsies and Minimal Residual Disease (MRD)',
        description: 'Enables non-invasive detection of circulating tumor DNA and biomarkers to track disease progression and treatment effectiveness.'
    },
    {
        id: 'multi-omics',
        title: 'Multi-Omics Integration',
        description: 'Combining genomics, transcriptomics, proteomics, and metabolomics for deeper biological insight into tumor microenvironments.'
    },
    {
        id: 'organoid-3d',
        title: 'Organoid and 3D Bioprinting Models',
        description: 'Utilizing patient-derived organoid cultures and bioprinted models to test drug sensitivities in personalized medicine.'
    },
    {
        id: 'next-gen-immuno',
        title: 'Next-Generation Immunotherapies',
        description: 'Advancing CAR-T cell therapies, immune checkpoint inhibitors, and cancer vaccines to target resistant tumor types.'
    }
];

const researchTypesData = [
    "Breast Cancer",
    "Lung Cancer",
    "Prostate Cancer",
    "Colorectal Cancer",
    "Brain Tumours",
    "Pancreatic Cancer",
    "Ovarian & Cervical Cancers",
    "Hematological Malignancies"
];

const applicationsData = [
    {
        icon: Rocket,
        title: "Aerospace and Defense",
        description: "heat resistant components, thermal barrier materials, and lightweight structural components."
    },
    {
        icon: Zap,
        title: "Energy and Power",
        description: "fuel cells, batteries, solar panels, and nuclear reactors."
    },
    {
        icon: Cpu,
        title: "Electrical and Electronics",
        description: "capacitors, insulators, semiconductors, and sensors."
    },
    {
        icon: HeartPulse,
        title: "Health and Biomedical",
        description: "implants, prosthetics, dental ceramics, and bioactive ceramics."
    },
    {
        icon: Car,
        title: "Automobile and Transportation",
        description: "engine parts, wear-resistant coatings for brakes."
    },
    {
        icon: Factory,
        title: "Industrial Manufacturing",
        description: "cutting tools, select refractory materials, and various chemical processing equipment."
    },
    {
        icon: Leaf,
        title: "Environmental and Sustainable Applications",
        description: "ceramic filters, environmental catalysts, and environmental ceramic materials."
    }
];

const editorsData = [
    {
        name: 'Dr. Priya Sharma',
        degree: 'PhD in Oncology',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/agrotechnology/Dr.-Priya-Sharma.webp"
    },
    {
        name: 'Dr. Sanjay Verma',
        degree: 'MD in Radiology',
        experience: '12 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biocomputing/Dr.-Sanjay-Verma.webp"
    },
    {
        name: 'Dr. Kavita Reddy',
        degree: 'PhD in Molecular Oncology',
        experience: '8 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/agrotechnology/Dr.-Kavita-Reddy.webp"
    }
];

export default function CancerResearchSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Cancer Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Cancer Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The oncology landscape is rapidly evolving, with several emerging trends shaping the future of cancer research:
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
                                    className={`px-3 py-4 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

            {/* SECTION 2: Types of Cancer Research We Cover (MISSING FROM PREVIOUS CODE) */}
            <section className="w-full bg-[#0e3b32] text-white py-12 px-6 rounded-xl overflow-hidden shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Text Overlay Column */}
                    <div className="lg:col-span-5 relative min-h-[220px] flex items-center justify-center rounded-lg overflow-hidden bg-black/30 p-6 border border-white/10">
                        <div className="text-left space-y-4 z-10">
                            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                                Pubrica offers support for a wide range of cancer types, including but not limited to:
                            </p>
                        </div>
                    </div>

                    {/* Right Grid Column: Cancers Covered */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                                Types of Cancer Research We Cover
                            </h2>
                            <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                            {researchTypesData.map((type, idx) => (
                                <div key={idx} className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-2.5 rounded-md shadow-xs border border-gray-100">
                                    <div className="border border-[#0e3b32] rounded-full p-0.5 text-[#0e3b32]">
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold truncate">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Why Cancer Research Is Important */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Why Cancer Research Is Important
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Cancer research is important because the better we understand these diseases, the more progress we will make toward diminishing the tremendous human and economic tolls of cancer. Research has helped us accumulate extensive knowledge about the biological processes involved in cancer onset, growth, and spread in the body. Those discoveries have led to more effective and targeted treatments and prevention strategies.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Breakthroughs in prevention, early detection, screening, diagnosis, and treatment are often the result of research and discoveries made by scientists in a wide array of disciplines over decades and even generations. Ultimately, cancer research requires partnerships and collaborations involving researchers, clinicians, patients, and others to translate yesterday's discoveries into today's advances and tomorrow's cures.
                        </p>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm h-[300px] sm:h-[350px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/cancer-research/Cancer-Research.webp"
                                alt="Cancer Research ribbon awareness"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
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
                            src="/images/subject-matter-experts/cancer-research/Molecular-and-Cellular-Oncology.webp"
                            alt="Cancer Research Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Mismatch Repair as a Dynamic and Clinically Actionable Vulnerability in Cancer
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Piumatti, E., Vitiello, P. P., Amodio, V., Bardelli, A., & Germano, G.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Cancer Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            American Association for Cancer Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            16.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Expert Cancer Research Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cancer Research Editors
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
                                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
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
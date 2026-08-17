"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'omics-integration',
        title: 'Omics Integration',
        description: 'Multi-omics profiling (genomics, transcriptomics, proteomics, and metabolomics) helps in mapping complex regulatory networks in cardiac diseases.'
    },
    {
        id: 'microrna-epigenetic',
        title: 'MicroRNA and Epigenetic Regulation',
        description: 'Understanding non-coding RNA and epigenetic modifications in cardiac hypertrophy and heart failure.'
    },
    {
        id: 'cardiac-regeneration',
        title: 'Cardiac Regeneration',
        description: 'Use of pluripotent stem cells and biomaterials to restore damaged myocardium.'
    },
    {
        id: 'cardiovascular-immunology',
        title: 'Cardiovascular Immunology',
        description: 'Investigating immune cell-mediated inflammation in atherosclerosis and myocardial infarction.'
    },
    {
        id: 'wearable-health-tech',
        title: 'Wearable Health Technologies',
        description: 'Continuous cardiovascular monitoring through digital biosensors and smart devices.'
    }
];

const applicationsData = [
    {
        title: 'Drug Discovery',
        description: 'Development of new cardiovascular drugs and biologics.'
    },
    {
        title: 'Biomarker Identification',
        description: 'Identification of diagnostic biomarkers for early disease detection.'
    },
    {
        title: 'Pathophysiology Mechanisms',
        description: 'Understanding pathophysiological mechanisms underlying hypertension, diabetes, and obesity-linked cardiac conditions.'
    },
    {
        title: 'Medical Devices & Implants',
        description: 'Creation of biocompatible implants, stents, and artificial heart tissues.'
    },
    {
        title: 'Personalized Medicine',
        description: 'Personalized treatment protocols for cardiac patients using genetic and molecular profiling.'
    }
];

const editorsData = [
    {
        name: 'Dr. Jonathan Myers',
        degree: 'PhD in Cardiovascular Physiology',
        experience: '14 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/animal-science/warvien.png"
    },
    {
        name: 'Dr. Rajesh Nair',
        degree: 'PhD in Vascular Biology',
        experience: '13 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/animal-science/victor.png"
    },
    {
        name: 'Dr. Emily Carter',
        degree: 'PhD in Molecular Cardiology',
        experience: '11 years of experience',
        manuscripts: '90+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp"
    }
];

export default function CardiovascularBiologySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cardiovascular Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Research Trends in Cardiovascular Biology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Recent advancements continue to reshape cardiovascular research. Precision medicine approaches and machine learning algorithms are revolutionizing disease prediction and patient stratification. For example, AI-driven analysis of echocardiographic and ECG data offers early detection of cardiac dysfunctions. Similarly, CRISPR-Cas9 gene editing provides potential avenues for correcting inherited cardiovascular defects. Other prominent trends include:
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
            </section>

            {/* SECTION 2: Applications of Cardiovascular Biology Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Cardiovascular Biology Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Cardiovascular biology research has broad clinical and translational applications, including:
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
                                    {app.description}
                                </p>
                            </div>
                        ))}
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                            Such innovations contribute to improved healthcare delivery and global efforts to reduce cardiovascular mortality.
                        </p>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/cardiovascular-biology/Applications-of-Cardiovascular-Biology-Research.webp"
                            alt="Applications of Cardiovascular Biology Research"
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
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/cell-biology/sample-works-6.webp"
                            alt="Journal of Cardiovascular Development and Disease Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            The Ross Procedure in Children with Congenital Heart Disease
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Dib N, Poirier N, Bouhout I, Khairy P
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Cardiovascular Development and Disease
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            MDPI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Cardiovascular Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cardiovascular Biology Editors
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
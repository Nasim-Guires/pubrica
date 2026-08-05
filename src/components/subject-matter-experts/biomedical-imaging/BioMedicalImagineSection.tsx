"use client";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'Single-Molecule Techniques',
        title: 'Artificial Intelligence & Machine Learning',
        description:
            'AI algorithms support early diagnosis, automate segmentation, assist in anomaly detection, and enhance image quality. Deep learning models are particularly impactful in radiomics and quantitative imaging.'
    },
    {
        id: 'quantum-materials',
        title: 'Radiomics & Quantitative Imaging',
        description:
            'Radiomics converts images into high-dimensional data, enabling advanced tumour characterization, personalized treatment prediction, and biomarker development.'
    },
    {
        id: 'ai-materials',
        title: 'Hybrid Imaging Systems',
        description:
            'Technologies like PET/CT, PET/MRI, and SPECT/CT combine structural and functional data in a single scan, offering better disease characterization and higher diagnostic confidence, particularly in neurology and oncology.'
    },
    {
        id: 'sustainable-materials',
        title: 'Portable & Point-of-Care Imaging Devices',
        description:
            'Handheld ultrasound, portable MRI systems, and wearable imaging sensors are expanding access to underserved regions..'
    },
    {
        id: 'smart-materials',
        title: '3D & 4D Imaging',
        description:
            'High-resolution 4D imaging allows visualization of dynamic physiological processes such as cardiac motion and blood flow.'
    }
];

const editorsData = [
    {
        name: 'Dr. Evelyn Carter',
        degree: 'PhD in Biomedical Imaging',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Maya Chen',
        degree: 'PhD in Radiological Sciences',
        experience: '10 years of experience',
        manuscripts: '145+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Medical Imaging',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
];

export default function BioMedicalImagineSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Material Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                      Emerging Trends in Biomedical Imaging
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biomedical imaging is rapidly advancing with new technologies that improve diagnostic accuracy, treatment planning, and patient outcomes. Some of the most important emerging trends include:</p>
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
                                    className={`px-4 py-3 text-sm sm:text-base font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.                 </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
                            alt="Advanced Materials Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Typical and Local Diagnostic Reference Levels for Chest and Abdomen Radiography Examinations in Dubai Health Sector
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                           Dalah EZ, Zarooni MMA, Binismail FY, Beevi HA, Siraj M, Pottybindu S
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                           Journal of Imaging
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                           MDPI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                           3.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Material Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biomedical Imaging Editors
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
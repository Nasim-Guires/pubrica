"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'Single-Molecule Techniques',
        title: 'Single-Molecule Techniques',
        description:
            'Advanced microscopy and spectroscopy methods allow researchers to observe individual biomolecules in real time, revealing previously inaccessible mechanistic details'
    },
    {
        id: 'quantum-materials',
        title: 'Cryo-Electron Microscopy (Cryo-EM)',
        description:
            'Revolutionizing structural biology, Cryo-EM enables high-resolution visualization of proteins and complexes without crystallization.'
    },
    {
        id: 'ai-materials',
        title: 'Integrative Computational Models',
        description:
            'Combining AI, machine learning, and molecular simulations accelerates the prediction of protein structures, drug interactions, and cellular responses.'
    },
    {
        id: 'sustainable-materials',
        title: 'Optogenetics and Mechanobiology',
        description:
            'Techniques that control and measure biological processes with light or mechanical forces are providing novel insights into cell signaling, development, and disease mechanisms.'
    },
    {
        id: 'smart-materials',
        title: 'Biomedical Imaging and Spectroscopy',
        description:
            'Innovations in imaging modalities, including super-resolution microscopy and functional MRI, continue to deepen our understanding of complex biological systems.'
    }
];

const editorsData = [
    {
        name: 'Dr. Emily Harrison',
        degree: 'PhD in Biophysics',
        experience: '16 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Emily-Harrison.webp"
    },
    {
        name: 'Dr. Priya Ramanathan',
        degree: 'PhD in Computational Biophysics',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Priya-Ramanathan.webp"
    },
    {
        name: 'Dr. Alexander Weiss',
        degree: 'PhD in Biological Physics',
        experience: '18 years of experience',
        manuscripts: '230+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp"
    }
];

export default function BioPhysicsScienceSections() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Material Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Biophysics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of biophysics is rapidly evolving, driven by technological innovations and interdisciplinary collaborations. Key emerging trends include:                    </p>
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
                        Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/biophysics/sample-works-10.webp"
                            alt="Advanced Materials Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Molecular origins of high viscosity in concentrated solutions of monoclonal antibodies
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Valiya Parambathu, A., Rosenman, D. J., Yadav, S., & Lenhoff, A. M
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Biophysical Journal
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Cell Press, Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.1
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Material Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biophysics Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
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
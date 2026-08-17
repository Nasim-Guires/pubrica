"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'precision-medicine',
        title: 'Precision Medicine',
        description: 'Individualised medical care based on the molecular or genetic makeup of each patient.'
    },
    {
        id: 'genomics-crispr-technology',
        title: 'Genomics/CRISPR Technology',
        description: 'A more advanced way to perform genetic research using Gene Editing technology.'
    },
    {
        id: 'artificial-intelligence-in-healthcare',
        title: 'Artificial Intelligence (AI) in Healthcare',
        description: 'The ability of AI to increase accuracy in diagnosis and predict the outcome of drug therapies using AI-powered technology.'
    },
    {
        id: 'regenerative-medicine',
        title: 'Regenerative Medicine',
        description: 'Advancements in the use of stem cells as a source for regeneration, and the growth of manufactured tissues and organs.'
    },
    {
        id: 'vaccine-development',
        title: 'Vaccine Development',
        description: 'New biotechnological methods for developing vaccines have made the vaccine development process quicker.'
    },
    {
        id: 'digital-health-telemedicine',
        title: 'Digital Health/Telemedicine',
        description: 'Delivering healthcare services remotely.'
    },
    {
        id: 'microbiome-research',
        title: 'Microbiome Research',
        description: 'The study of the microbiome, which is the combined design of all the different microbes that inhabit a person, and their effect on an individual’s state of health.'
    },
    {
        id: 'sustainable-biotechnology',
        title: 'Sustainable Biotechnology',
        description: 'The use of biological methods to develop sustainable solutions to meet the demands of the environment'
    }
];

const applicationsOfLifeScienceData = [
    {
        title: 'Healthcare',
        description: 'Diagnosing, treating, and preventing disease'
    },
    {
        title: 'Pharmaceuticals',
        description: 'Finding and developing new drugs'
    },
    {
        title: 'Biotechnology Industry',
        description: 'Making biologic and bio-based products'
    },
    {
        title: 'Agriculture',
        description: 'Improving crops and managing pests'
    },
    {
        title: 'Environmental Science',
        description: 'Conserving biodiversity and controlling pollution'
    },
    {
        title: 'Food Science',
        description: 'Analysing nutrition and ensuring food safety'
    },
    {
        title: 'Research and Development',
        description: 'Increasing scientific knowledge about biology and medicine'
    },
    {
        title: 'Public Health',
        description: 'Evaluating epidemiology and developing disease prevention programs'
    }
];

const editorsData = [
    {
        name: 'Dr. Emily Carter',
        degree: 'PhD in Molecular Biology',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/cardiology/Dr.-Emily-Carter.webp"
    },
    {
        name: 'Dr. Rajesh Menon',
        degree: 'PhD in Biotechnology',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Praveen-R-1.webp"
    },
    {
        name: 'Dr. Laura Smith',
        degree: 'PhD in Biomedical Sciences',
        experience: '10 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Hiroko-S-1.webp"
    }
];

export default function LifeSciencesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Life Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Life Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Healthcare, biotechnology, and scientific innovation are advancing rapidly with improvements in the Life Science field, including:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${
                                        isActive
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

            {/* SECTION: Applications of Life Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Life Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The life sciences encompass an interdisciplinary area of science that applies biological and scientific concepts in a variety of fields. The main applications of life sciences include:
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
                                    <strong className="text-gray-900 font-bold">{item.title} – </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/life-sciences/Applications-of-Life-Science.webp"
                            alt="Life science research setup"
                            className="w-full h-auto object-cover"
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
                        Our authors publish in top-tier journals, conferences, and platforms, ensuring global visibility and impact.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/life-sciences/sample-works-15.webp"
                            alt="Journal of Biomedical Sciences Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Advances in Precision Medicine and Genomic Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Sarah M. Johnson
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Biomedical Science
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Springer
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            5.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Life Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Life Science Editors
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
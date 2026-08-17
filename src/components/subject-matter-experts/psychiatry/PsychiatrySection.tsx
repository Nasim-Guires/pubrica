"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'digital-psychiatry',
        title: 'Digital Psychiatry',
        description: 'Telepsychiatry and mental health care through apps.'
    },
    {
        id: 'ai-in-mental-health',
        title: 'Artificial Intelligence in Mental Health',
        description: 'AI-based diagnosis and predictive analysis'
    },
    {
        id: 'personalised-psychiatry',
        title: 'Personalised Psychiatry',
        description: 'Personalised treatment approaches based on genetic and biological factors'
    },
    {
        id: 'neuroimaging-advancements',
        title: 'Neuroimaging Advancements',
        description: 'Brain mapping for better diagnosis and treatment'
    },
    {
        id: 'psychedelic-assisted-therapy',
        title: 'Psychedelic-Assisted Therapy',
        description: 'New approaches for depression and PTSD treatment'
    },
    {
        id: 'integrative-mental-health',
        title: 'Integrative Mental Health',
        description: 'Combination of pharmacological and psychotherapeutic approaches'
    },
    {
        id: 'mental-health-awareness',
        title: 'Mental Health Awareness',
        description: 'Increasing global focus on mental health care'
    },
    {
        id: 'preventive-psychiatry',
        title: 'Preventive Psychiatry',
        description: 'Preventive approaches for mental health disorders.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Mental Health Treatment:',
        description: 'The treatment of psychiatric conditions'
    },
    {
        title: 'Healthcare Systems:',
        description: 'The integration of mental health services into the general healthcare system'
    },
    {
        title: 'Rehabilitation:',
        description: 'Recovery from mental illness'
    },
    {
        title: 'Workplace Mental Health:',
        description: 'Managing stress in the workplace'
    },
    {
        title: 'Forensic Psychiatry:',
        description: 'The legal aspect of psychiatry'
    },
    {
        title: 'Public Health:',
        description: 'Promoting awareness of mental health, including the prevention of mental illness'
    },
    {
        title: 'Education:',
        description: 'Behavioural support in the classroom'
    },
    {
        title: 'Research and Development:',
        description: 'Developing new forms of treatment in psychiatry.'
    }
];

const editorsData = [
    {
        name: 'Dr. Michael Roberts',
        degree: 'PhD in Psychiatry',
        experience: '15 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/computer-science/Dr.-Kevin-Marshall.webp"
    },
    {
        name: 'Dr. Priya Narayanan',
        degree: 'PhD in Clinical Psychology',
        experience: '12 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/psychiatry/Dr.-Priya-Narayanan.webp"
    },
    {
        name: 'Dr. Daniel Lee',
        degree: 'PhD in Neuropsychiatry',
        experience: '11 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/chemical-engineering/Dr.-David-Lee.webp"
    }
];

export default function PsychiatrySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Psychiatry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Psychiatry
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Trends in the future of mental health care and research:
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
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-b border-gray-200 flex items-center justify-center text-center ${
                                        isActive
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
                            {emergingTrendsData[activeTrendTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTrendTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Applications of Psychiatry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Psychiatry
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The field of psychiatry uses clinical and scientific knowledge to enhance the outcomes of mental health in various fields, including:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title} </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/psychiatry/Applications-of-Psychiatry.webp"
                            alt="Psychiatry consultation and documentation"
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
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/psychiatry/sample-works-14-1.webp"
                            alt="Journal of Psychiatric Research Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Advances in Digital Psychiatry and AI-Based Mental Health Interventions
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Dr Sarah Williams
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Psychiatric Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            5.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Psychiatry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Psychiatry Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialisation, they ensure excellence in every project they undertake.
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
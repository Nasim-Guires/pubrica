"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Accelerating drug discovery through predictive modeling, virtual screening, and real-world data analysis.'
    },
    {
        id: 'personalized-medicine',
        title: 'Personalized Medicine',
        description: 'Designing tailored drug regimens based on genetic and molecular profiling.'
    },
    {
        id: 'nanotechnology',
        title: 'Nanotechnology In Drug Delivery',
        description: 'Developing nanoscale systems for targeted, controlled drug release.'
    },
    {
        id: 'sustainable-practices',
        title: 'Sustainable Pharmaceutical Practices',
        description: 'Adopting eco-friendly synthesis, packaging, and waste management processes.'
    },
    {
        id: 'pharmacogenomics',
        title: 'Pharmacogenomics',
        description: 'Understanding how genetic variations influence drug response, enabling safer and more effective therapies.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Artificial Intelligence and Machine Learning:',
        description: 'Accelerating drug discovery through predictive modeling, virtual screening, and real-world data analysis.'
    },
    {
        title: 'Personalized Medicine:',
        description: 'Designing tailored drug regimens based on genetic and molecular profiling.'
    },
    {
        title: 'Nanotechnology in Drug Delivery:',
        description: 'Developing nanoscale systems for targeted, controlled drug release.'
    },
    {
        title: 'Sustainable Pharmaceutical Practices:',
        description: 'Adopting eco-friendly synthesis, packaging, and waste management processes.'
    },
    {
        title: 'Pharmacogenomics:',
        description: 'Understanding how genetic variations influence drug response, enabling safer and more effective therapies.'
    }
];

const editorsData = [
    {
        name: 'Dr. Rahul Mehta',
        degree: 'PhD in Pharmacology',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/medicinal-chemistry/Dr.-Rahul-Mehta.webp"
    },
    {
        name: 'Dr. Jessie',
        degree: 'PhD in Pharmaceutical Sciences',
        experience: '8 years of experience',
        manuscripts: '100+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/pharmaceuticals/Dr.-jessica.webp"
    },
    {
        name: 'Dr. Sofia Hernandez',
        degree: 'PhD in Pharmaceutical Sciences',
        experience: '8 years of experience',
        manuscripts: '100+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/pharmaceuticals/Dr.-Sofia-Hernandezul.webp"
    }
];

export default function PharmaceuticalsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Pharmaceutical Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Pharmaceutical Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Pharmaceutical science is constantly evolving, driven by technological innovation, regulatory changes, and patient-centric approaches. Some of the most prominent emerging trends include:
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
                                    {item.title && <strong className="text-gray-900 font-bold">{item.title} </strong>}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/pharmaceuticals/Emerging-Trends-in-Pharmaceutical-Research.webp"
                            alt="Pharmaceutical Research"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed mt-4">
                    Pharmaceutical science is constantly evolving, driven by technological innovation, regulatory changes, and patient-centric approaches. Some of the most prominent emerging trends include:
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/pharmaceuticals/sample-works-7-1.webp"
                            alt="Pharmacological Research Journal Cover"
                            className="w-25 h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            S-glutathionylation in cancer: from fundamental mechanisms to clinical applications
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Dong, S., Linghu, L., Xiao, D., Liu, S., & Tao, Y
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Pharmacological Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            10.5
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Pharmaceuticals Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Pharmaceuticals Editors
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
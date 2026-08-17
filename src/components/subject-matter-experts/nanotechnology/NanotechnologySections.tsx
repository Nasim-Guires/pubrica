

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, Cpu, BookOpen, Layers, ShieldCheck, Zap } from 'lucide-react';

const emergingTrendsData = [
    {
        title: "Nanomedicine and Targeted Delivery of Drugs",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanomaterials-and-Nanostructures.webp",
        desc: "Using nanoparticle-based systems will enable precise drug delivery, improved therapeutic effectiveness, and fewer adverse effects on patients.",
        icon: Cpu
    },
    {
        title: "Nanoelectronics and Quantum Technology",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanoelectronics-and-Nanophononics.webp",
        desc: "The new generation of nanoscale electronic and quantum technologies is paving the way for advancements in the fields of computing, telecommunications, and sensors.",
        icon: BookOpen
    },
    {
        title: "Nanoengineered Materials Functional Coatings",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanobiotechnology-and-Nanomedicine.webp",
        desc: "Applying engineered nanomaterials will create stronger, lighter, less-costly-to-manufacture materials for use in energy, building, and manufacturing.",
        icon: Layers
    },
    {
        title: "Nano sensors and Diagnostic Devices",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Computational-and-Theoretical-Nanotechnology.webp",
        desc: "Nanoscale sensors will offer significant advantages in the medical diagnostics, environmental monitoring, and industrial applications by being able to detect small amounts of chemicals with speed and accuracy.",
        icon: FileText
    },
    {
        title: "Sustainable & Environmentally Friendly Nanotechnology",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nano-energy-and-Environmental-Nanotechnology.webp",
        desc: "Advancements in nanotechnology will create environmentally sustainable solutions to address pollution, provide purified water or create renewable energy sources that will help provide a cleaner planet.",
        icon: Zap
    }
];

const editorsData = [
    {
        name: 'Dr. Ananya Verma',
        degree: 'PhD in Nanomedicine',
        experience: '12 years of experience',
        manuscripts: '100+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp"
    },
    {
        name: 'Dr. Michael Thompson',
        degree: 'PhD in Nanoengineering',
        experience: '16 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp"
    },
    {
        name: 'Dr. Sofia Martinez',
        degree: 'PhD in Nanomaterials',
        experience: '14 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biotechnology/Dr.-Sofia-Martinez.webp"
    }
];

export default function NanotechnologySections() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Nanotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Nanotechnology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        At Pubrica Key trends include nanoparticle-based drug delivery, nano sensors for diagnostics, advanced nanomaterials for energy, quantum devices, and sustainable nanotechnology for environmental solutions.
                    </p>
                </div>

                {/* Interactive Tabs / Cards Container matching the screenshot */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                        {emergingTrendsData.map((trend, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`p-4 text-left text-xs sm:text-sm font-semibold transition-all border-b sm:border-b-0 sm:border-r border-gray-200 last:border-r-0 ${
                                    activeTab === i
                                        ? "bg-[#0e3b32] text-white shadow-inner"
                                        : "bg-white text-gray-800 hover:bg-gray-100"
                                }`}
                            >
                                {trend.title}
                            </button>
                        ))}
                    </div>

                    <div className="bg-[#fafafa] border border-gray-200 p-6 sm:p-8 rounded-lg shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-2">
                            {emergingTrendsData[activeTab].title}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            {emergingTrendsData[activeTab].desc}
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
                        Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white relative h-[280px]">
                        <Image
                            src="/images/subject-matter-experts/nanotechnology/sample-works-11-8.webp"
                            alt="Nature Nanotechnology Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Machine perception liquid biopsy identifies brain tumours via systemic immune and tumour microenvironment signature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Dana Goerzen, Mijin Kim, Chanel Schraff
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nature Nanotechnology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Nature Portfolio
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.83
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Nanotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Nanotechnology Editors
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
                                    <div className="relative w-14 h-14 shrink-0">
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            fill
                                            className="rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-1 shadow-xs z-10">
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
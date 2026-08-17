"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const trustItemsData = [
    {
        title: 'PhD Subject-Matter Experts',
        description: 'Specialists with deep expertise across food science, biotechnology, microbiology, nutrition, and food engineering.'
    },
    {
        title: 'Journal-Compliant Deliverables',
        description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top food science journals.'
    },
    {
        title: '15+ Years of Research Excellence',
        description: 'Trusted globally by researchers, academicians, and industry professionals.'
    },
    {
        title: '100% Confidential & Secure',
        description: 'Your data, research results, and manuscripts remain fully protected.'
    },
    {
        title: 'End-to-End Support',
        description: 'From ideation to publication, we assist at every stage with consistency and precision.'
    }
];

const emergingTrendsData = [
    {
        id: 'modelling-ai',
        title: 'Modelling Created with Artificial Intelligence',
        description: 'Machine Learning/Artificial Intelligence Predictive Models & Process Optimisation Applications'
    },
    {
        id: 'digital-twins',
        title: 'Digital Twins of Food Processes',
        description: 'Virtual Simulations for Real-time Monitoring/Control of Food Processing Systems'
    },
    {
        id: 'sustainable-processing',
        title: 'Sustainable Processing',
        description: 'Model Development Energy Efficient Environmentally Friendly Food Processing Technologies'
    },
    {
        id: 'smart-processing-systems',
        title: 'Smart Processing Systems',
        description: 'Through the development of Real-time Sensor/Automation Systems to allow for Quality Control of Food Products'
    },
    {
        id: 'advanced-thermal',
        title: 'Advanced Thermal/Non-thermal',
        description: 'Models of Innovation Examples Include High-pressure Processing, Pulsed Electric Fields, and Cold Plasma Technologies'
    }
];

const applicationsData = [
    {
        title: 'Food Industry',
        description: 'to make sure that food products are produced according to the best methods (for example, by utilising the best procedures and equipment for creating quality food products, producing safe foods, etc.).'
    },
    {
        title: 'Public Health',
        description: 'to make sure that foods produced for consumption are safe by using predictive microbial and thermal models.'
    },
    {
        title: 'Sustainable Practices',
        description: 'to reduce energy use and food waste, while improving the performance of food processing systems.'
    },
    {
        title: 'Research and Innovation',
        description: 'to promote the development of new technologies and intelligent systems for food processing.'
    },
    {
        title: 'Policy and Regulation',
        description: 'to assist with compliance with food safety standards and laws.'
    }
];

const areasOfStudyData = [
    { title: 'Food Process Engineering' },
    { title: 'Thermal and Non-Thermal Processing' },
    { title: 'Food Rheology and Texture' },
    { title: 'Mathematical Modeling and Simulation' },
    { title: 'Predictive Microbiology' },
    { title: 'Food Packaging Technology' },
    { title: 'Enzyme Technology in Food' },
    { title: 'Fermentation and Bioprocesses' },
    { title: 'Post-Harvest Technology' },
    { title: 'Nanotechnology in Food' },
    { title: 'Waste Valorization and Sustainability' },
    { title: 'Quality Control and Automation' }
];

const editorsData = [
    {
        name: 'Dr. Daniel Fischer',
        degree: 'PhD in Food Processing & Engineering',
        experience: '16 years of experience',
        manuscripts: '210+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/food-processing/Dr.-Daniel-Fischer.webp"
    },
    {
        name: 'Dr. Priya Nair',
        degree: 'PhD in Food Process Engineering',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp"
    },
    {
        name: 'Dr. Michael Chen',
        degree: 'PhD in Thermal Food Processing',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biomedical-imaging/Dr.-Miguel-Torres.webp"
    }
];

export default function FoodProcessingSection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Why Researchers Trust Pubrica for Food Processing Models */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Researchers Trust Pubrica for Food Processing Models
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Researchers choose Pubrica for its expert-driven approach to food
                        processing models, backed by experienced PhD specialists and a strong
                        track record of research excellence.
                    </p>
                </div>

                {/* Added items-start here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {trustItemsData.map((item, index) => {
                        const isOpen = openTrustIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-[#0e3b32] text-white rounded-md border border-[#0e3b32] shadow-sm self-start"
                            >
                                <button
                                    onClick={() => toggleTrustItem(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-base sm:text-lg hover:bg-[#124b3f] transition-colors"
                                >
                                    <span>{item.title}</span>

                                    {isOpen ? (
                                        <Minus className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 shrink-0" />
                                    )}
                                </button>

                                {isOpen && item.description && (
                                    <div className="px-6 pb-4 pt-2 border-t border-[#1a5548] text-gray-200 text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION: Emerging Trends in Food Processing Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Food Processing Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Food Technology has experienced rapid growth with the introduction of new technologies, such as data-driven technologies. Here are three important trends in food processing:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
                    In the field of food processing, there have also been advancements in technology, and therefore, it is important to implement new approaches to improve Sustainability, Efficiency, and Innovation.
                </p>
            </section>

            {/* SECTION: Applications of Food Processing */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Food Processing
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Food processing models are used in many different fields:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {applicationsData.map((app, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{app.title}: </strong>
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/food-processing/Food-Processing.webp"
                            alt="Food processing facility setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Areas of Study */}
            <section className="max-w-6xl mx-auto space-y-8 bg-[#0e3b32] text-white p-8 sm:p-12 rounded-xl">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Areas of Study
                    </h2>
                    <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {areasOfStudyData.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-900 px-4 py-3 rounded-md shadow-xs flex items-center space-x-3 font-semibold text-sm sm:text-base"
                        >
                            <ChevronRight className="w-4 h-4 text-[#0e3b32] shrink-0" />
                            <span>{area.title}</span>
                        </div>
                    ))}
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
                        Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/food-processing/Heat-Transfer-Models.webp"
                            alt="Journal of Food Processing and Preservation Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Optimisation of Cassava Starch-Based Biodegradable Films with Garcinia kola Oil and Cocos nucifera L. Microfibers Using Response Surface Methodology.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Yao Désiré Adjouman, Amenan Aline Doh, Charlemagne Nindjin, Dekker Matthis, Kouamé Alfred Kahi, Fabrice Achille Tetchi, N&apos;Guessan Georges Amani
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Food Processing and Preservation
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Wiley
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.5
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Food Processing Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Food Processing Editors
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
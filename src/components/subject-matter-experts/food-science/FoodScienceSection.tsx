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
        title: '100% Confidential & Secure',
        description: 'Your data, research results, and manuscripts remain fully protected.'
    },
    {
        title: '15+ Years of Research Excellence',
        description: 'Trusted globally by researchers, academicians, and industry professionals.'
    },
    {
        title: 'End-to-End Support',
        description: 'From ideation to publication, we assist at every stage with consistency and precision.'
    },
    {
        title: 'Journal-Compliant Deliverables',
        description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top food science journals.'
    }
];

const emergingTrendsData = [
    {
        id: 'alternative-proteins',
        title: 'Alternative Proteins',
        description: 'Development of plant-based proteins, lab-grown meats, and insect proteins to meet sustainability goals.'
    },
    {
        id: 'food-nanotechnology',
        title: 'Food Nanotechnology',
        description: 'Application of nanomaterials for enhanced food safety, packaging, and nutrient delivery.'
    },
    {
        id: 'personalized-nutrition',
        title: 'Personalized Nutrition',
        description: 'Tailoring diets based on genetic, microbiome, and lifestyle data.'
    },
    {
        id: 'sustainable-packaging',
        title: 'Sustainable Packaging',
        description: 'Innovative biodegradable and recyclable packaging solutions to reduce environmental impact.'
    },
    {
        id: 'functional-fortified-foods',
        title: 'Functional and Fortified Foods',
        description: 'Foods designed to provide specific health benefits, including immunity boosters and cognitive enhancers.'
    }
];

const applicationsData = [
    {
        title: 'Food Industry',
        description: 'From product formulation to processing, packaging, and distribution, food science ensures products are safe, high-quality, and appealing to consumers.'
    },
    {
        title: 'Public Health',
        description: 'Research in food safety, fortification, and nutritional interventions contributes to preventing malnutrition, obesity, and diet-related diseases.'
    },
    {
        title: 'Sustainable Practices',
        description: 'Food scientists develop eco-friendly packaging, reduce food waste, and innovate alternative protein sources to meet global sustainability goals.'
    },
    {
        title: 'Research and Innovation',
        description: 'Advancements in molecular gastronomy, sensory science, and food nanotechnology continue to redefine the way we produce, consume, and enjoy food.'
    },
    {
        title: 'Policy and Regulation',
        description: 'Food scientists provide critical insights for policy-making, food labelling, and regulatory compliance, ensuring public trust in the food supply.'
    }
];

const areasOfStudyData = [
    { title: 'Food Chemistry and Biochemistry' },
    { title: 'Food Microbiology and Safety' },
    { title: 'Food Processing and Preservation' },
    { title: 'Nutritional Science and Dietetics' },
    { title: 'Food Packaging Technology' },
    { title: 'Sensory Evaluation and Consumer Science' },
    { title: 'Dairy and Meat Science' },
    { title: 'Cereal Science and Technology' },
    { title: 'Food Biotechnology and Enzymes' },
    { title: 'Quality Assurance and Control' },
    { title: 'Functional Foods and Nutraceuticals' },
    { title: 'Food Supply Chain Management' }
];

const editorsData = [
    {
        name: 'Dr. Sophia Bennett',
        degree: 'PhD in Food Science & Technology',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biomedical-imaging/Dr.-Evelyn-Carter-3.webp"
    },
    {
        name: 'Dr. Elena Garcia',
        degree: 'PhD in Food Microbiology',
        experience: '15 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biocatalysts/Dr.-Amanda-Lee.webp"
    },
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Nutrition & Functional Foods',
        experience: '11 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/animal-science/karrel.png"
    }
];

export default function FoodScienceSection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Why Food Science Researchers Trust Pubrica */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Food Science Researchers Trust Pubrica
                    </h2>
                </div>

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

            {/* SECTION: Emerging Trends in Food Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Food Science Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of food science is evolving rapidly, driven by technological advancements and consumer demands. Some emerging trends include:
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
                    These trends highlight the importance of continuous research and knowledge dissemination to drive innovation and improve global food systems.
                </p>
            </section>

            {/* SECTION: Applications of Food Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Food Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Food science plays a pivotal role across various sectors:
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
                            src="/images/subject-matter-experts/food-science/Food-Chemistry.webp"
                            alt="Food science laboratory setup"
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
                        Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/food-science/Food-Microbiology.webp"
                            alt="Journal of Food Science Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            A review of taste-active compounds in meat: Identification, influencing factors, and taste transduction mechanism.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            You, Z., Bai, Y., Bo, D., Feng, Y., Shen, J., Wang, Y., Li, J., & Bai, Y.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Food Science
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Wiley
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.4
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Food Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Food Science Editors
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
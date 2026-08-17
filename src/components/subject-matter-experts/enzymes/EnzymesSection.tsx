"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const commonEnzymesConditionsData = [
    {
        id: 'enzyme-deficiency-disorders',
        title: 'Enzyme Deficiency Disorders',
        description: 'G6PD deficiency: Causes red blood cells to break down under stress (certain foods, infections, drugs). Leads to jaundice and haemolytic anaemia.'
    },
    {
        id: 'metabolic-enzyme-disorders',
        title: 'Metabolic Enzyme Disorders',
        description: 'Glycogen Storage Diseases (e.g., GSD I, III, V): Enzyme deficiencies affecting glycogen metabolism; cause low blood sugar, muscle pain, or liver enlargement.'
    },
    {
        id: 'digestive-enzyme-disorders',
        title: 'Digestive Enzyme Disorders',
        description: 'Exocrine pancreatic enzyme deficiency (Chronic pancreatitis): Reduced amylase, lipase, protease → indigestion and nutrient deficiencies.'
    },
    {
        id: 'mitochondrial-enzyme-defects',
        title: 'Mitochondrial Enzyme Defects',
        description: 'Mitochondrial myopathy: Deficient oxidative phosphorylation enzymes → muscle weakness, exercise intolerance, and lactic acidosis.'
    },
    {
        id: 'liver-enzyme-imbalance-conditions',
        title: 'Liver Enzyme Imbalance Conditions',
        description: 'Hepatitis: Inflammation of the liver → elevated ALT and AST, jaundice, fatigue.'
    },
    {
        id: 'lysosomal-enzyme-disorders',
        title: 'Lysosomal Enzyme Disorders',
        description: 'Deficiency of glucocerebrosidase → accumulation of glucocerebroside in organs, causing enlarged liver/spleen and bone problems.'
    }
];

const emergingTrendsData = [
    {
        id: 'therapeutic-enzyme-inhibitors',
        title: 'Therapeutic Enzyme Inhibitors',
        description: 'Researching Enzyme Inhibitors for possible treatment of cancer, diabetes, neurodegenerative disorders, etc.'
    },
    {
        id: 'enhancing-enzyme-production',
        title: 'Enhancing Enzyme Production and Activity with CRISPR-Cas9 Gene Editing Tools',
        description: 'The ability to enhance enzyme production and enzyme activity will allow the list of Industrial/Biotechnology applications to greatly expand (Example- enzyme produced by yeast vs Enzyme produced by CRISPR).'
    },
    {
        id: 'medical-diagnostics-biosensors',
        title: 'Medical Diagnostics biosensors',
        description: '(driven by enzymes) that allow rapid and low-cost check-ups for a variety of diseases.'
    },
    {
        id: 'biofuel-chemical-metabolic',
        title: 'Biofuel and Chemical Metabolic Engineering',
        description: 'Developing enzymes and improving chemical production efficiency, to further enable the development of sustainable biotechnology solutions (i.e. Enzymes and Biofuels).'
    },
    {
        id: 'reusing-enzymes',
        title: 'Reusing Enzymes',
        description: 'Using enzymes multiple times during production, to reduce the overall cost and environmental impact of production.'
    },
    {
        id: 'improving-enzymes-engineered',
        title: 'Improving Enzymes Engineered (customised) Enzymes via Synthetic Biology',
        description: 'to create more stable zymes with higher efficiency, for use in chemicals (biobased fuels) and pharmaceutical industries.'
    }
];

const areasOfStudyData = [
    { title: 'Molecular Biology' },
    { title: 'Enzyme Engineering' },
    { title: 'Pharmacology' },
    { title: 'Gene Expression' },
    { title: 'Enzyme Design' },
    { title: 'Enzyme Synthesis' },
    { title: 'Enzyme Mutagenesis' },
    { title: 'Enzyme Bioremediation' },
    { title: 'Biomarkers' },
    { title: 'Enzyme as Drug Targets' },
    { title: 'Industrial Applications of Enzymes' },
    { title: 'Enzyme Replacement Therapy' }
];

const editorsData = [
    {
        name: 'Dr. Ethan Matthews',
        degree: 'PhD in Biochemistry',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp"
    },
    {
        name: 'Dr. Olivia Harris',
        degree: 'PhD in Enzyme Engineering',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/ceramic-engineering/Dr.-Olivia-Harris.webp"
    },
    {
        name: 'Dr. Lucas Carter',
        degree: 'MD, Biotechnology',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/enzymes/Dr.-Lucas-Carter.webp"
    }
];

export default function EnzymesSection() {
    const [activeConditionTab, setActiveConditionTab] = useState(0);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Common Enzymes Conditions */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Common Enzymes Conditions
                    </h2>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
                        {commonEnzymesConditionsData.map((tab, idx) => {
                            const isActive = activeConditionTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveConditionTab(idx)}
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
                            {commonEnzymesConditionsData[activeConditionTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {commonEnzymesConditionsData[activeConditionTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Emerging Trends in Enzymes Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Enzymes Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Improving Enzymes Engineered (customised) Enzymes via Synthetic Biology to create more stable zymes with higher efficiency, for use in chemicals (biobased fuels) and pharmaceutical industries:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {emergingTrendsData.map((app, index) => (
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
                            src="/images/subject-matter-experts/enzymes/Enzymes.webp"
                            alt="Enzyme research molecular setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Areas of Study */}
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

            {/* SECTION 4: Where Our Authors Publish */}
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
                            src="/images/subject-matter-experts/enzymes/Enzyme-Discovery-and-Characterization.webp"
                            alt="Nature Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Structure of the ATP-driven methyl-coenzyme M reductase activation complex
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Ramirez-Amador, F., Paul, S., Kumar, A., Lorent, C., Keller, S., Bohn, S., Nguyen, T., Lometto, S., Viegels, D., Kahnt, J., Deobald, D., Abendroth, F., Vázquez, O., Hochberg, G., Scheller, S., Stripp, S. T., & Schuller, J. M. (2025)
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Springer Nature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            48.5 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Expert Enzymes Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Enzymes Editors
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
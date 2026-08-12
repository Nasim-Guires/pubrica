"use client";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Proteins can now be designed more quickly and with improved accuracy by using Artificial Intelligence (AI) and Machine Learning (ML) to predict how the proteins will look, how they will work, and how they will be used.'
    },
    {
        id: 'crispr-gene-editing',
        title: 'CRISPR-Cas9 & Gene Editing',
        description: 'CRISPR-Cas9 technology allows scientists to change proteins precisely, producing therapeutic proteins or proteins for bioengineering applications.'
    },
    {
        id: 'synthetic-de-novo',
        title: 'Synthetic Biology & De Novo Design',
        description: 'Synthetic biologists have developed techniques to make completely new proteins with unique properties. These new proteins are used in medicine and sustainable energy.'
    },
    {
        id: 'protein-drug-conjugates',
        title: 'Protein-Drug Conjugates',
        description: 'Protein-drug conjugates target specific disease areas and are designed as combination therapies; they provide a safer and more effective method for treating cancer.'
    },
    {
        id: 'directed-evolution',
        title: 'Directed Evolution',
        description: 'Directed evolution uses high-throughput screening methods to develop proteins with specific functions to meet therapeutic and industrial requirements.'
    },
    {
        id: 'in-vivo-engineering',
        title: 'In Vivo Protein Engineering',
        description: 'Creating functional proteins directly inside the human body provides efficient and authentic solutions for proteins in drug design.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Therapeutic Proteins:',
        description: 'Creating bioengineered therapeutics such as Recombinant Antibodies and Enzymes used in treating various illnesses/diseases.'
    },
    {
        title: 'Enzyme Engineering:',
        description: 'Developing more efficient and effective use of Enzymes for Industrial Applications (e.g., Biofuels, Food, and Detergents).'
    },
    {
        title: 'Protein-Based Vaccines:',
        description: 'Design proteins to provide a safer and more effective way of Vaccination.'
    },
    {
        title: 'Gene Therapy:',
        description: 'Modify proteins to carry and implant target genes.'
    },
    {
        title: 'Diagnostic Proteins:',
        description: 'Design proteins for accurate diagnostic purposes.'
    },
    {
        title: 'Protein-Drug Conjugate:',
        description: 'Targeted delivery of anticancer drugs to cancerous cells; reducing the side effects associated with chemotherapeutic agents.'
    },
    {
        title: 'Biodegradable Polymer:',
        description: 'Create biodegradable polymers to provide renewable and sustainable materials that are eco-friendly.'
    },
    {
        title: 'Bioremediation:',
        description: 'Engineering proteins to break down Pollutants from the Environment.'
    },
    {
        title: 'Agricultural Biotechnology:',
        description: 'Increase the strength, Mitigating Stress Passing, etc.. of Crops, and improve Nutritional Value, etc. of Crops.'
    }
];

const editorsData = [
    {
        name: 'Dr. Evelyn Carter',
        degree: 'PhD in Protein Engineering',
        experience: '12 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Maya Chen',
        degree: 'PhD in Molecular Biotechnology',
        experience: '10 years of experience',
        manuscripts: '145+ manuscripts edited',
        countryFlag: '🇨🇳',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Arjun Mehta',
        degree: 'PhD in Bioengineering',
        experience: '13 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    }
];

export default function ProteinEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Protein Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Protein Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biomedical imaging is rapidly advancing with new technologies that improve diagnostic accuracy, treatment planning, and patient outcomes. Some of the most important emerging trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
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

            {/* SECTION: Applications of Protein Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Protein Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Applications of Engineering Proteins include many different applications of Protein Engineering in biomedicine and biotechnology & Pharmaceutical
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

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600"
                            alt="Protein Engineering Laboratory Analysis"
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
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
                            alt="Proteins Structure Function Bioinformatics Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            A large-scale evolutionary and structural analysis of CLC channels and transporters
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Ayush Mishra, Gladys Díaz Vázquez, Janice L. Robertson
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Protein Science
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Wiley
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            5.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Protein Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Protein Engineering Editors
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
"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'single-cell-genomics',
        title: 'Single-Cell Genomics',
        description: 'Studying the genome and transcriptome at the level of individual cells helps uncover cellular diversity, rare cell types, and disease mechanisms, especially in cancer and immunology.'
    },
    {
        id: 'crispr-and-genome-editing',
        title: 'CRISPR and Genome Editing',
        description: 'Advanced genome-editing tools, including base and prime editing, are enabling precise manipulation of genes for research and potential therapeutic applications.'
    },
    {
        id: 'multi-omics-integration',
        title: 'Multi-Omics Integration',
        description: 'Combining genomics with transcriptomics, proteomics, metabolomics, and microbiomics provides a holistic understanding of complex diseases, driving precision medicine.'
    },
    {
        id: 'population-genomics-and-diversity',
        title: 'Population Genomics and Diversity',
        description: 'Large-scale sequencing of diverse populations improves understanding of genetic variation, enhances disease risk prediction, and supports equitable healthcare.'
    },
    {
        id: 'clinical-genomics-and-personalized-medicine',
        title: 'Clinical Genomics & Personalized Medicine',
        description: 'Integration of genomic data into healthcare is facilitating tailored treatment strategies, pharmacogenomics, and genetic risk assessment.'
    },
    {
        id: 'artificial-intelligence-in-genomics',
        title: 'Artificial Intelligence in Genomics',
        description: 'Machine learning and AI algorithms are increasingly applied to genomic datasets to predict gene-disease associations, identify drug targets, and streamline data analysis pipelines.'
    }
];

const applicationsOfGenomicsData = [
    {
        title: 'Personalized Medicine',
        description: 'Genomics enables tailored healthcare by analysing individual genetic profiles to predict disease risk and optimize treatments. Pubrica supports researchers in translating genomic insights into clinical practice.'
    },
    {
        title: 'Disease Research',
        description: 'Genomic studies uncover genes linked to complex diseases like cancer, diabetes, and neurodegenerative disorders, aiding early diagnosis and targeted therapies. Pubrica guides manuscript and grant preparation for impactful publication.'
    },
    {
        title: 'Pharmacogenomics',
        description: 'By studying genetic influences on drug response, pharmacogenomics helps identify optimal dosing and prevent adverse reactions. Pubrica ensures accurate communication of these findings in high-quality journals.'
    },
    {
        title: 'Agrigenomics',
        description: 'Genomics improves crop yield, disease resistance, and sustainability by studying plant and animal genomes. Pubrica helps present Agri genomic research effectively for scientific and industry audiences.'
    },
    {
        title: 'Evolutionary Genomics',
        description: 'This field examines genetic changes over generations to understand adaptation and diversity. Pubrica supports clear and precise dissemination of evolutionary genomic studies.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Clarke',
        degree: 'PhD in Molecular Genetics',
        experience: '14 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/chemical-engineering/Dr-Ahmed-Khan.webp"
    },
    {
        name: 'Dr. Maya Fernandez',
        degree: 'PhD in Genomic Medicine',
        experience: '11 years of experience',
        manuscripts: '170+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/algorithm/Dr.-Elena-Petrova-1.webp"
    },
    {
        name: 'Dr. Sophia Martinez',
        degree: 'PhD in Human Genetics',
        experience: '13 years of experience',
        manuscripts: '190+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cosmeceuticals/Dr.-Sophia-Martinez-1.webp"
    }
];

export default function GenomicsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Genomic Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Genomic Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Genomic research is rapidly evolving, driven by technological innovations and computational advancements. Here are some key emerging trends shaping the field:
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

            {/* SECTION: Applications of Genomics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Genomics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Genomics has wide-ranging applications across medicine, biotechnology, agriculture, and environmental sciences:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        {applicationsOfGenomicsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/genomics/Applications-of-Genomics.webp"
                            alt="Genomics research setup"
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
                            src="/images/subject-matter-experts/genomics/sample-works-9-4.webp"
                            alt="BMC Medical Genomics Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Comparative genomic analysis of clinical Enterococcus faecalis distinguishes strains isolated from the bladder
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Hochstedler-Kramer, B. R., Ene, A., Putonti, C., & Wolfe, A. J.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            BMC Genomics
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            BioMed Central
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.7 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Genorphic/Genomic Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Genomic Editors
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
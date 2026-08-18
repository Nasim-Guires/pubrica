"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
    Briefcase,
    FileText,
    Dna,
    Search,
    Sprout,
    Network,
    Cpu,
    Brain
} from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'integrative-multi-omics',
        title: 'Integrative Multi-Omics Approaches',
        description:
            'Combining data from multiple omics layers allows researchers to obtain a holistic view of biological systems. Biocomputing tools are advancing to enable efficient integration, interpretation, and visualization of these complex datasets.'
    },
    {
        id: 'single-cell-analysis',
        title: 'Single-Cell Analysis',
        description:
            'Single-cell sequencing is reshaping our understanding of cellular heterogeneity. Computational methods in biocomputing now allow precise clustering, trajectory inference, and identification of rare cell types.'
    },
    {
        id: 'ai-drug-discovery',
        title: 'Artificial Intelligence in Drug Discovery',
        description:
            'AI-driven biocomputing is increasingly applied in virtual screening, target identification, and predictive toxicology, significantly accelerating pharmaceutical innovation.'
    },
    {
        id: 'crispr-genome-editing',
        title: 'CRISPR and Genome Editing Simulations',
        description:
            'Computational modelling predicts off-target effects and optimizes CRISPR-mediated genome editing, improving precision and safety in gene therapy.'
    },
    {
        id: 'digital-twin-models',
        title: 'Digital Twin Models of Biological Systems',
        description:
            'Virtual models of organs or whole organisms enable simulation-based experimentation, facilitating predictive insights without the need for extensive wet-lab trials.'
    },
    {
        id: 'cloud-based-biocomputing',
        title: 'Cloud-Based Biocomputing Solutions',
        description:
            'Cloud computing allows scalable storage and processing of massive biological datasets, making high-performance computational resources accessible to researchers globally.'
    }
];

const applicationsData = [
    {
        title: "Genomics and Precision Medicine",
        description: "Biocomputing tools analyze patient genomes to identify mutations, predict disease risk, and inform personalized treatment strategies.",
        icon: Dna
    },
    {
        title: "Drug Discovery and Development",
        description: "Computational simulations, molecular docking, and virtual screening help identify promising drug candidates faster and more cost-effectively than traditional methods.",
        icon: Search
    },
    {
        title: "Agricultural and Environmental Biotechnology",
        description: "Biocomputing supports genome editing in crops, predictive modelling of ecosystems, and bioremediation strategies for environmental sustainability.",
        icon: Sprout
    },
    {
        title: "Systems Pharmacology",
        description: "Predictive modelling of drug interactions, metabolism, and toxicity ensures safer and more effective therapeutics.",
        icon: Network
    },
    {
        title: "Synthetic Biology and Bioengineering",
        description: "Designing synthetic pathways, optimizing metabolic fluxes, and creating artificial biological systems are facilitated by advanced computational frameworks.",
        icon: Cpu
    },
    {
        title: "Neuroscience and Cognitive Modelling",
        description: "Computational models simulate neural networks, brain connectivity, and cognitive processes, supporting research in neurodegenerative diseases and mental health.",
        icon: Brain
    }
];

const editorsData = [
    {
        name: 'Dr. Elena Varkins',
        degree: 'PhD in Biocomputing',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biocomputing/Dr.-Elena-Varkins.webp"
    },
    {
        name: 'Dr. Marcus Lethbridge',
        degree: 'PhD in Computational Genomics',
        experience: '10 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biocomputing/Dr.-Sanjay-Verma.webp"
    },
    {
        name: 'Dr. Tobias Reinhardt',
        degree: 'PhD in Biocomputing',
        experience: '13 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biocomputing/Dr.-Tobias-Reinhardt.webp"
    }
];

export default function BiocomputingSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Biocomputing Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Biocomputing Research Trends
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biocomputing is evolving rapidly, and several trends are reshaping the global research landscape:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

            {/* NEW SECTION: Applications of Biocomputing */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Biocomputing
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biocomputing research has widespread implications across modern science, industry, and healthcare. Major applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left List of Applications */}
                    <div className="lg:col-span-7 space-y-5">
                        {applicationsData.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="p-2.5 rounded-lg bg-[#eef2f1] text-[#0e3b32] shrink-0 mt-1">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm sm:text-base leading-relaxed text-gray-700">
                                        <span className="font-bold text-gray-900">{item.title}: </span>
                                        {item.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Image Display */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/subject-matter-experts/biocomputing/Applications-of-Biocomputing.webp"
                                alt="Researcher examining samples with a microscope in laboratory setting"
                                fill
                                sizes="(max-width: 1024px) 100vw, 360px"
                                className="object-cover"
                            />
                        </div>
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
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/biocomputing/sample-works-10-1.webp"
                            alt="Journal of Computational Biology Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            A new structure feature introduced to predict protein-protein interaction sites
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Lai, L., Geng, J., Duan, H., Chen, S., Huang, L., &amp; Yu, J
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Computational Biology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Mary Ann Liebert
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Biocomputing Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biocomputing Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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
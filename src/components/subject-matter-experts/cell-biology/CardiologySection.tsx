"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
    Briefcase, 
    FileText, 
    ChevronDown,
    Activity,
    HeartPulse
} from 'lucide-react';

// Tabbed Data for Emerging Research Trends in Cell Biology
const conditionsTabs = [
    {
        id: 'single-cell-omics',
        label: 'Single-Cell Omics',
        title: 'Single-Cell Omics',
        description: 'High throughput sequencing and analysis of individual cells reveal cellular heterogeneity and lineage relationships.'
    },
    {
        id: 'organoid-technology',
        label: 'Organoid Technology',
        title: 'Organoid Technology',
        description: '3D organoid cultures model complex organ structures and functions, enhancing disease modeling and drug screening.'
    },
    {
        id: 'systems-cell-biology',
        label: 'Systems Cell Biology',
        title: 'Systems Cell Biology',
        description: 'Integrating computational modeling and quantitative data to understand complex cellular networks and interactions.'
    },
    {
        id: 'cell-mechanics',
        label: 'Cell Mechanics and Biophysics',
        title: 'Cell Mechanics and Biophysics',
        description: 'Investigating physical forces and mechanical properties that govern cellular behaviors and tissue organization.'
    },
    {
        id: 'ai-cell-imaging',
        label: 'Artificial Intelligence (AI) in Cell Imaging',
        title: 'Artificial Intelligence (AI) in Cell Imaging',
        description: 'Leveraging deep learning and computer vision to automate, segment, and extract insights from high-resolution cell images.'
    },
    {
        id: 'synthetic-biology',
        label: 'Synthetic Biology',
        title: 'Synthetic Biology',
        description: 'Engineering novel biological components, circuits, and synthetic cells to address biomedical and industrial challenges.'
    }
];

// Accordion Data for Applications of Cell Biology Research
const applicationsAccordionData = [
    {
        title: "Diagnostic Applications",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cell-Death-and-Survival-Mechanisms.webp",
        icon: Activity,
        content: (
            <div className="space-y-3">
                <p>
                    Cell Biology research extends across medical, pharmaceutical, and biotechnological industries, powering critical biomedical advancements.
                </p>
                <p>
                    <strong className="font-bold text-gray-900">Disease Mechanism Elucidation:</strong> Understanding how cellular dysfunction leads to diseases such as cancer, neurodegenerative disorders, diabetes, and cardiovascular conditions.<br />
                    <strong className="font-bold text-gray-900">Drug Discovery and Development:</strong> Utilizing cellular assays and models to identify drug targets, assess efficacy, and predict toxicity.<br />
                    <strong className="font-bold text-gray-900">Regenerative Medicine:</strong> Harnessing stem cell biology to regenerate damaged tissues and organs.<br />
                    <strong className="font-bold text-gray-900">Genetic Engineering:</strong> Applying cellular-level insights for gene editing using CRISPR-Cas9 and other molecular tools.
                </p>
            </div>
        )
    },
    {
        title: "Interventional and Therapeutic Applications",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cytoskeleton-and-Cell-Motility.webp",
        icon: HeartPulse,
        content: (
            <div className="space-y-3">
                <p>
                    Modern therapeutic frameworks build upon basic cell mechanics to deliver targeted interventions.
                </p>
                <p>
                    <strong className="font-bold text-gray-900">Vaccine Development:</strong> Exploring cellular immune responses to design effective vaccines against infectious diseases.<br />
                    <strong className="font-bold text-gray-900">Tissue Engineering:</strong> Integrating cell biology with materials science to develop biomimetic scaffolds for tissue reconstruction.
                </p>
            </div>
        )
    }
];

// Cell Biology Editors Data
const editorsData = [
    {
        name: 'Dr. Sarah Mitchell',
        degree: 'PhD in Cell Biology',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/cell-biology/Dr.-Sarah-Mitchell.webp"
    },
    {
        name: 'Dr. Emily Carter',
        degree: 'PhD in Developmental Cell Biology',
        experience: '10 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cardiology/Dr.-Emily-Carter.webp"
    },
    {
        name: 'Dr. Jonathan Reed',
        degree: 'PhD in Molecular and Cellular Physiology',
        experience: '15 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cell-biology/Dr.-Jonathan-Reed.webp"
    }
];

export default function CardiologySection() {
    // Active Tab State for Emerging Research Trends in Cell Biology
    const [activeTab, setActiveTab] = useState('single-cell-omics');

    // Accordion State for Applications of Cell Biology Research (Both closed by default)
    const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIdx(openAccordionIdx === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cell Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Research Trends in Cell Biology
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        With the advent of advanced tools and technologies, Cell Biology is transforming precision and integration. Key emerging trends include:
                    </p>
                </div>

                {/* Tabbed Component Box */}
                <div className="border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                    {/* Tabs Navigation Header */}
                    <div className="grid grid-cols-2 md:grid-cols-6 border-b border-gray-200 text-center text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100">
                        {conditionsTabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-3.5 px-3 transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center ${
                                        isActive
                                            ? 'bg-[#0e3b32] text-white'
                                            : 'hover:bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Panel */}
                    <div className="p-6 bg-white min-h-[140px] space-y-2">
                        {conditionsTabs.map((tab) => {
                            if (tab.id !== activeTab) return null;
                            return (
                                <div key={tab.id} className="space-y-2 transition-opacity duration-200">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                        {tab.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        {tab.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Applications of Cell Biology Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Cell Biology Research
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        The applications of Cell Biology extend across medical, pharmaceutical, and biotechnological industries. Some notable areas include:
                    </p>
                </div>

                {/* Collapsible Accordions for Applications */}
                <div className="space-y-4">
                    {applicationsAccordionData.map((item, idx) => {
                        const isOpen = openAccordionIdx === idx;
                        return (
                            <div key={idx} className="border border-gray-200 rounded-md overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full bg-[#0e3b32] text-white px-6 py-3.5 flex items-center justify-between font-semibold text-sm sm:text-base transition-colors duration-150 hover:bg-[#0a2f28]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isOpen && (
                                    <div className="p-6 bg-[#fafafa] border-t border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <Image
                            src="/images/subject-matter-experts/cell-biology/sample-works-6.webp"
                            alt="Nature Cell Biology Journal Cover"
                            width={224}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-xs sm:text-sm leading-relaxed pt-2">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Cholesterol sensing by the SCAP-FAM134B complex regulates ER-phagy and STING innate immunity
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Li, B., Zhou, D., Wang, X. et al
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nature Cell Biology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Nature Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            19.1 (2025)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Cell Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cell Biology Editors
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
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
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            width={56}
                                            height={56}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-xs bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                                    <div className="flex items-center space-x-1.5">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <FileText className="w-4 h-4 text-[#0e3b32] shrink-0" />
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
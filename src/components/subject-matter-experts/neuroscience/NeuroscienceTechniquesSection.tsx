"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const importanceOfNeuroscienceData = [
    {
        title: 'Understanding Brain Function',
        description: 'Neuroscience helps decode how neural circuits process sensory information, regulate emotions, and govern cognitive abilities.'
    },
    {
        title: 'Advancing Neurological Treatments',
        description: 'Research drives the development of targeted therapies for neurodegenerative disorders, psychiatric conditions, and brain injuries.'
    },
    {
        title: 'Brain-Computer Interfaces',
        description: 'Innovations in neurotechnology bridge the gap between biological neural systems and external digital devices.'
    },
    {
        title: 'Cognitive Enhancement and Plasticity',
        description: 'Studies on neuroplasticity reveal how the brain adapts, learns, and recovers following trauma or stroke.'
    }
];

const emergingTrendsData = [
    {
        id: 'neuroinformatics-big-data',
        title: 'Neuroinformatics and Big Data',
        description: 'Large-scale brain mapping projects like the Human Connectome Project are generating vast amounts of data. Advanced computational tools now allow researchers to integrate and analyze this data to better understand brain connectivity.'
    },
    {
        id: 'neurogenetics',
        title: 'Neurogenetics',
        description: 'Genetic research is uncovering how specific genes influence brain structure and function, offering new hope for understanding inherited neurological disorders.'
    },
    {
        id: 'brain-computer-interfaces',
        title: 'Brain-Computer Interfaces (BCIs)',
        description: 'BCIs enable direct communication between the brain and external devices, opening possibilities for restoring mobility in paralyzed individuals and advancing human–AI integration.'
    },
    {
        id: 'neuroethics',
        title: 'Neuroethics',
        description: 'As neuroscience progresses, ethical considerations surrounding brain privacy, cognitive enhancement, and artificial intelligence are becoming central to research discussions.'
    },
    {
        id: 'neuroimmunology',
        title: 'Neuroimmunology',
        description: 'This emerging field explores the interaction between the nervous system and the immune system, revealing how inflammation affects neurological diseases and behavior.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Neurodegenerative Diseases',
        description: 'Investigating mechanisms and therapeutic interventions for Alzheimer\'s, Parkinson\'s, and amyotrophic lateral sclerosis (ALS).'
    },
    {
        title: 'Psychiatric Disorders',
        description: 'Examining the neurobiological underpinnings of depression, schizophrenia, anxiety, and PTSD to improve intervention strategies.'
    },
    {
        title: 'Stroke and Neurovascular Health',
        description: 'Developing acute neuroprotection strategies and advanced rehabilitation protocols following cerebrovascular events.'
    },
    {
        title: 'Epilepsy and Seizure Disorders',
        description: 'Mapping epileptic foci using advanced neuroimaging and electrophysiology to guide surgical and neuromodulatory treatments.'
    },
    {
        title: 'Neurodevelopmental Conditions',
        description: 'Studying autism spectrum disorder, ADHD, and intellectual disabilities to understand early brain development pathways.'
    }
];

const editorsData = [
    {
        name: 'Dr. Aria Bennett',
        degree: 'PhD in Neuroscience',
        experience: '15 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/machine-learning/Dr.-Aria-Bennett.webp"
    },
    {
        name: 'Dr. Ethan Morales',
        degree: 'PhD in Neurobiology',
        experience: '10 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/machine-learning/Dr.-Ethan-Morales.webp"
    },
    {
        name: 'Dr. Priya Nair',
        degree: 'PhD in Cognitive Neuroscience',
        experience: '12 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp"
    }
];

export default function NeuroscienceTechniquesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(
        null
    );

    const toggleImportanceCard = (index: number) => {
        setOpenImportanceIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Neuroscience Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Neuroscience Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The 21st century has seen revolutionary advancements in neuroscience. Some of the most exciting trends shaping the future of the field include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 border-b border-gray-200">
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
            </section>

            {/* SECTION: Clinical Applications of Neuroscience */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Neuroscience
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Neuroscience plays a critical role in early diagnosis, disease monitoring, and treatment planning for brain and nervous system disorders. Key applications include:
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
                                    <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/neuroscience/Comprehensive-Support-for-Neuroscience-Research-Writing-and-Publication.webp"
                            alt="Neuroscience research setup"
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
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/neuroscience/Molecular-and-Cellular-Neuroscience.webp"
                            alt="Journal of Neuroscience Research Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            High-pressure freezing EM tomography of entire ribbon synapses in the retina
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Zhang, J., Aronova, M. A., Yu, X., Sousa, A. A., Leapman, R. D., & Diamond, J. S.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Neuroscience
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Society for Neuroscience
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.0 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Neuroscience Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Neuroscience Editors
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
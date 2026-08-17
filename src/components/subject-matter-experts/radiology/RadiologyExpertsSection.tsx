"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'ai-deep-learning',
        title: 'Artificial Intelligence (AI) and Deep Learning',
        description: 'Automated image analysis, anomaly detection, and workflow optimization.'
    },
    {
        id: 'precision-personalized-imaging',
        title: 'Precision and Personalized Imaging',
        description: 'Tailoring imaging protocols based on genetic, physiological, and clinical data.'
    },
    {
        id: 'teleradiology',
        title: 'Teleradiology',
        description: 'Remote image interpretation enabling global diagnostic support and healthcare access'
    },
    {
        id: '3d-printing-vr',
        title: '3D Printing and Virtual Reality (VR)',
        description: 'Creating patient-specific anatomical models for surgical planning and education.'
    },
    {
        id: 'quantitative-imaging-biomarkers',
        title: 'Quantitative Imaging Biomarkers',
        description: 'Linking imaging features with molecular and genetic data for predictive analytics.'
    },
    {
        id: 'radiology-informatics',
        title: 'Radiology Informatics',
        description: 'Integration of big data, electronic health records (EHRs), and picture archiving and communication systems (PACS) to improve efficiency and data management.'
    }
];

const whyTrustTabsData = [
    {
        id: 'expertise-led',
        title: 'Expertise-Led Support',
        description: 'Our company has an array of seasoned radiology research experts, editors and statisticians who are well-versed in the intricacies of diagnostic imaging and medical technology.'
    },
    {
        id: 'full-service',
        title: 'Full-Service Research Support',
        description: 'We provide comprehensive support from study design to data analysis, manuscript writing, and submitting to journals, covering all aspects of the research process.'
    },
    {
        id: 'high-standards',
        title: 'High Standards of Quality and Ethics',
        description: 'We adhere to the highest ethical standards, and are committed to providing researchers with accuracy, transparency, and compliance with guidelines for international publication.'
    },
    {
        id: 'expertise-publishing',
        title: 'Expertise in Publishing Worldwide',
        description: 'Having an in-depth knowledge of the most prestigious journals and the expectations of their editors will lead researchers to successful publication outcomes.'
    },
    {
        id: 'individualized-assistance',
        title: 'Individualized Assistance for Researchers',
        description: 'Projects will receive individualized assistance tailored to meet research goals, publication needs, and timelines, to help researchers achieve their objectives as efficiently as possible.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Radiographs:',
        description: 'X-rays to look at bones, the chest, or the abdomen.'
    },
    {
        title: 'CT (Computed Tomography):',
        description: 'A CT captures multiple x-ray angles of the patient using a doughnut-shaped machine, then creates computer-processed images.'
    },
    {
        title: 'MRI (Magnetic Resonance Imaging):',
        description: 'An MRI uses magnetic fields and radio waves with computer processing to create images.'
    },
    {
        title: 'Mammograms:',
        description: 'Specialized X-rays that look at breast tissue.'
    },
    {
        title: 'Ultrasound:',
        description: 'An ultrasound uses sound waves to create moving images that display on a monitor, commonly used for echocardiograms and examining the womb during pregnancy.'
    },
    {
        title: 'Fluoroscopy:',
        description: 'X-rays that make moving images of the body in real time. This imaging is crucial for many procedures, especially those involving the gastrointestinal tract.'
    },
    {
        title: 'Nuclear medicine:',
        description: 'These are short-acting radioactive substances that generate light from bodily processes. A camera collects the light, so a computer can process it and develop an image.'
    }
];

const editorsData = [
    {
        name: 'Dr. Sarah Mitchell',
        degree: 'PhD in Radiological Sciences',
        experience: '15 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/cell-biology/Dr.-Sarah-Mitchell.webp"
    },
    {
        name: 'Dr. Rajesh Kumar',
        degree: 'MD in Radiology',
        experience: '12 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/dentistry/Dr.-Rajesh-Kumar.webp"
    },
    {
        name: 'Dr. Emily Zhao',
        degree: 'PhD in Biomedical Imaging',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/neurology/Dr.-Laura-Stein.webp"
    }
];

export default function RadiologyExpertsSection() {
    // Accordion State: Default closed (-1)
    const [openTrendAccordion, setOpenTrendAccordion] = useState<number | null>(null);

    // Why Trust Pubrica Tab State
    const [activeTrustTab, setActiveTrustTab] = useState(0);

    const toggleTrendAccordion = (index: number) => {
        setOpenTrendAccordion(openTrendAccordion === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">
            {/* SECTION 1: Emerging Trends in Radiology Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Radiology Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Radiology is rapidly transforming with digital technologies and cross-disciplinary innovations. Key trends shaping the future of the field include:
                    </p>
                </div>

                {/* Tab Navigation Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrustTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrustTab(idx)}
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

                    {/* Active Tab Content */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {emergingTrendsData[activeTrustTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTrustTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: What Is Radiology Used For? */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        What Is Radiology Used For?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Radiology is used for a wide range of conditions, and is classified depending on the type of radiology and the exact imaging test used. The various imaging exams include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Radiology Exam Points */}
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title} </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Hand Image */}
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/radiology/Radiographs.webp"
                            alt="Radiology medical MRI scanner equipment"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica radiology services content across top-tier journals, conferences, and platforms, maximizing recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Journal Publication */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/biomedical-engineering/sample-works-7.webp"
                            alt="Radiology Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Using AI to Select Women with Intermediate Breast Cancer Risk for Breast Screening with MRI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Van Winkel, S. L., Samperna, R., Loehrer, E. A., Kroes, J., Rodriguez-Ruiz, A., & Mann, R. M.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Radiology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Radiological Society of North America (RSNA)
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            12.1
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Radiology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Radiology Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
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
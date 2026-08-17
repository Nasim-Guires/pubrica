"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const importanceOfMedicalImagingData = [
    {
        title: 'Early Diagnosis',
        description: 'Imaging allows the detection of disease before symptoms manifest, significantly improving patient outcomes.'
    },
    {
        title: 'Non-invasive Monitoring',
        description: 'Imaging provides a non-invasive window into internal organs, reducing the need for exploratory surgery or invasive procedures.'
    },
    {
        title: 'Precision Treatment',
        description: 'Imaging-guided interventions enhance treatment accuracy in oncology, cardiology, and neurosurgery.'
    },
    {
        title: 'Drug Development and Clinical Trials',
        description: 'Functional and molecular imaging provide critical biomarkers for assessing drug efficacy and safety.'
    }
];

const emergingTrendsData = [
    {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence (AI) and Machine Learning',
        description: 'AI algorithms enhance image interpretation, lesion detection, and workflow efficiency. AI-based tools reduce human error and provide quantitative assessments for precision medicine.'
    },
    {
        id: 'molecular-imaging',
        title: 'Molecular Imaging',
        description: 'Targeted radiotracers and contrast agents allow visualization at the molecular and cellular levels, aiding early disease detection and therapy monitoring.'
    },
    {
        id: '3d-4d-imaging',
        title: '3D and 4D Imaging',
        description: 'Advanced imaging techniques provide volumetric and dynamic views, improving surgical planning and interventional procedures.'
    },
    {
        id: 'portable-imaging',
        title: 'Portable and Point-of-Care Imaging',
        description: 'Miniaturized devices allow bedside imaging in emergency, rural, and resource-limited settings, improving accessibility and patient outcomes.'
    },
    {
        id: 'hybrid-imaging-systems',
        title: 'Hybrid Imaging Systems',
        description: 'Integration of modalities such as PET/CT or PET/MRI provides both anatomical and functional information in a single scan..'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Cardiology',
        description: 'Echocardiography, cardiac MRI, and CT angiography help assess heart structure, function, and vascular abnormalities.'
    },
    {
        title: 'Neurology',
        description: 'MRI, fMRI, PET, and CT are used to diagnose stroke, neurodegenerative diseases, brain tumours, and epilepsy.'
    },
    {
        title: 'Oncology',
        description: 'CT, MRI, PET, and SPECT aid in tumour detection, staging, treatment monitoring, and surgical planning.'
    },
    {
        title: 'Orthopaedics',
        description: 'X-ray, CT, and MRI are essential for diagnosing fractures, ligament injuries, and degenerative joint disorders.'
    },
    {
        title: 'Prenatal and Reproductive Health',
        description: 'Ultrasound and foetal MRI monitor foetal development and detect congenital anomalies.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Miller',
        degree: 'PhD in Medical Imaging',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp"
    },
    {
        name: 'Dr. Sophia Mehta',
        degree: 'PhD in Radiological Sciences',
        experience: '11 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp"
    },
    {
        name: 'Dr. Arjun Menon',
        degree: 'PhD in Clinical Radiology',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/animal-science/karrel.png"
    }
];

export default function MedicalImagingTechniquesSection() {
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

            {/* SECTION: Importance of Medical Imaging in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Importance of Medical Imaging in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medical imaging has revolutionized both clinical practice and biomedical research. Clinically, imaging enables early disease detection, accurate diagnosis, treatment planning, and monitoring of therapy outcomes. In research, imaging technologies facilitate the study of anatomy, physiology, and pathology in both preclinical models and human subjects. Key benefits include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {importanceOfMedicalImagingData.map((item, index) => {
                        const isOpen = openImportanceIndex === index;

                        return (
                            <div
                                key={item.title}
                                className="w-full self-start border border-gray-200 rounded-lg bg-[#f7f8f8] overflow-hidden transition-all duration-200 shadow-sm"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleImportanceCard(index)}
                                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="text-[#0e3b32]">
                                            <FileText className="w-5 h-5 shrink-0" />
                                        </div>

                                        <span className="font-bold text-[#0e3b32] text-base sm:text-lg">
                                            {item.title}
                                        </span>
                                    </div>

                                    <div className="text-[#0e3b32] bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 shrink-0" />
                                        ) : (
                                            <Plus className="w-4 h-4 shrink-0" />
                                        )}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-3 text-gray-700 text-base sm:text-lg leading-relaxed border-t border-gray-200/60">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION: Emerging Trends in Medical Imaging */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Medical Imaging
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of medical imaging is rapidly evolving, driven by technological innovation and computational advancements. Key trends include:
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

            {/* SECTION: Clinical Applications of Medical Imaging */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Medical Imaging
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Medical imaging plays a critical role in early diagnosis, disease monitoring, and treatment planning. Key applications include:
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
                            src="/images/subject-matter-experts/medical-imaging-techniques/Radiology-and-Diagnostic-Imaging.webp"
                            alt="Medical imaging research setup"
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
                        Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/medical-imaging-techniques/Magnetic-Resonance-Imaging-MRI.webp"
                            alt="BMC Medical Imaging Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Computed tomography image quality parameter settings for the design and manufacture of craniofacial implants
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Muller, H
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            BMC Medical Imaging
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            BioMed Central
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.2 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Medical Imaging Technique Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Medical Imaging Technique Editors
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
"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const importanceData = [
    {
        title: "Drug Discovery",
        description: "Creates drugs to treat conditions using drug candidates"
    },
    {
        title: "Optimizing Drug Formulations",
        description: "Drug Products are optimally formulated so that drugs are targeted and delivered effectively"
    },
    {
        title: "Safety Assessment",
        description: "To reduce the occurrence of drug side effects, toxicity testing will be conducted to promote patient safety."
    },
    {
        title: "Personalized Medicine",
        description: "Defines drugs for specific users by creating pharmacotherapy based on their genetic makeup, as well as their race and gender."
    },
    {
        title: "Improved Therapeutic Outcomes",
        description: "This improvement will increase the potential therapeutic value of a drug and its usefulness in the management of disease."
    }
];

const emergingTrendsData = [
    {
        id: 'ai-drug-discovery',
        title: 'Artificial Intelligence in Drug Discovery',
        description: 'AI and machine learning accelerate the process of developing drugs. They do this by predicting how molecules interact with one another, helping researchers to find and optimize potential drugs. AI and machine learning also help researchers identify potential drug candidates, thereby allowing drug discovery to occur in less time than traditional methods.'
    },
    {
        id: 'regenerative-medicine',
        title: 'Regenerative Medicine and Stem Cell Therapy',
        description: 'Research and development of stem cell therapies and regenerative medicine provide new treatment options to aid in the growth of tissue and provide hope to those affected with genetic diseases. The future of these types of medical interventions is promising with the advancement of modern medicine.'
    },
    {
        id: "3d-printing",
        title: "3D Printing in Pharmaceuticals",
        description:
            "With the invention of 3D printing technology, it is possible to create medication that is specifically designed for a patient's needs in terms of dosage, shape, and combination of medications.",
    },
    {
        id: 'green-chemistry',
        title: 'Green Chemistry in Drug Development',
        description: 'The emphasis on environmentally friendly production methods within pharmaceutical manufacturing; developing a more sustainable system of producing medicines with minimal harm to the environment.'
    },
    {
        id: 'organs-on-chips',
        title: 'Organs-on-Chips for Drug Testing',
        description: 'Using Organs-on-chip technology, researchers can analyze how human tissues and organs react to test drugs (or other types of therapies). This will not only improve the accuracy of preclinical testing but also result in less need for animal testing.'
    },
    {
        id: 'biologics-biosimilars',
        title: 'Biologics and Biosimilars',
        description: 'Biologics (monoclonal antibody-based treatments) are becoming popular means of treatment. Biosimilar drugs and other types of biologic treatment also provide alternatives to current disease therapies.'
    }
];

const areasOfStudyData = [
    { title: 'Molecular Biology' },
    { title: 'Disease Mechanisms' },
    { title: 'Medical Devices' },
    { title: 'Surgical Procedures' },
    { title: 'Medical Procedures' },
    { title: 'Gene Therapy' },
    { title: 'Pharmacology and Drug Mechanisms' },
    { title: 'Anatomy and Physiology' }
];

const editorsData = [
    {
        name: 'Dr. Alexander Lee',
        degree: 'PhD in Pharmaceutical Sciences',
        experience: '15 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Dr.-Alexander-Lee.webp"
    },
    {
        name: 'Dr. Maria Gonzalez',
        degree: 'PhD in Medicinal Chemistry',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇪🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp"
    },
    {
        name: 'Dr. James Smith',
        degree: 'PhD in Pharmacology',
        experience: '13 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Dr.-James-Smith.webp"
    }
];

export default function MedicinalAndPharmaceuticalChemistrySections() {
    const [activeTab, setActiveTab] = useState(0);
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(0);

    const toggleImportance = (index: number) => {
        setOpenImportanceIndex(openImportanceIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Importance of Medical and Pharmaceutical Chemistry in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Importance of Medical and Pharmaceutical Chemistry in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medical and Pharmaceutical Chemistry serves a fundamental purpose in enhancing the health of humanity by acting as a bridge between chemistry and medicine pharmacology. This discipline is essential to the development of new medications, therapeutic modalities (i.e., treatment strategies), and devices used to diagnose disease and improve the quality of care for patients. Below is an overview of how it is important to the medical field:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {importanceData.map((item, index) => {
                        const isOpen = openImportanceIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-[#f0f7f5] border border-[#d1e5e0] rounded-lg overflow-hidden shadow-xs transition-all"
                            >
                                <button
                                    onClick={() => toggleImportance(index)}
                                    className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-[#0e3b32] hover:bg-[#e4f2ee] transition-colors"
                                >
                                    <span className="flex items-center space-x-2 text-base">
                                        <FileText className="w-5 h-5 text-[#0e3b32] shrink-0" />
                                        <span>{item.title}</span>
                                    </span>
                                    <span className="p-1 rounded-full bg-white shadow-xs text-[#0e3b32]">
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-4 pt-1 text-gray-700 text-sm sm:text-base bg-white border-t border-[#d1e5e0]">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 1: Emerging Trends in Medical and Pharmaceutical Chemistry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Medical and Pharmaceutical Chemistry
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medical and pharmaceutical chemistry is continuously evolving with the introduction of innovative techniques and methods as well as the identification of new medications, medicinal products and drug therapies, which ultimately impact drug development and health care in the future. A few of the significant emerging trends in medical and pharmaceutical chemistry are:
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

            {/* SECTION 2: Clinical Applications of Medical and Pharmaceutical Chemistry */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Medical and Pharmaceutical Chemistry
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Clinical applications of Medical and Pharmaceutical Chemistry refer to how chemical principles are applied in real-world healthcare settings to optimize patient care and drug therapy. Key clinical applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left List */}
                    <div className="lg:col-span-7 space-y-4">
                        {[
                            {
                                title: "Drug Formulation",
                                desc: "Adjunct, drug form (oral, injectable, transdermal) to develop improved drug formulation for stability, effectiveness and compliance (adherence) with medication."
                            },
                            {
                                title: "Therapeutic Drug Monitoring",
                                desc: "The process of quantitating drug levels in the bloodstream to provide safe and sufficient drug dosages while minimizing the risk of adverse drug reactions."
                            },
                            {
                                title: "Biomarker Discovery",
                                desc: "The process used to identify molecular markers that can be used for diagnosis of disease as well as determining the efficacy of treatment to support the precision medicine model."
                            },
                            {
                                title: "Pharmacogenomics",
                                desc: "The process of utilizing genetic data to customize drug therapy to the individual patient to minimize the potential for adverse drug reactions."
                            },
                            {
                                title: "Toxicology & Adverse Drug Reactions",
                                desc: "The study of the side effects of drugs (Adverse Drug Reactions) to optimize safety and manage the risks associated with using drugs clinically."
                            }
                        ].map((app, i) => (
                            <div key={i} className="flex items-start space-x-3 bg-[#fafafa] border border-gray-200 p-4 rounded-lg">
                                <div className="p-2 bg-[#0e3b32]/10 text-[#0e3b32] rounded-md shrink-0 mt-0.5">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0e3b32] text-base">{app.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{app.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Medical-and-Pharmaceutical-Chemistry.webp"
                                alt="Clinical Applications of Medicinal Chemistry"
                                className="w-full h-full object-cover"
                            />
                        </div>
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
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/sample-works-11-16.webp"
                            alt="Journal of Medicinal Chemistry Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Recent Advances in Long-Acting Antiviral Agents: Innovations in Design and Strategies for Extended Duration.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Wang, S., Ma, F., Lindsley, C. W., Xu, S., Liu, X., & Zhan, P.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Medicinal Chemistry
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            American Chemical Society
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            6.8 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Medical And Pharmaceutical Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Medical And Pharmaceutical Chemistry Editors
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
"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'vaccine-immunotherapy',
        title: 'Vaccine and Immunotherapy Development',
        description: 'Using Peptides As research progresses on the use of peptide-based vaccines to produce specific antigenic responses, peptide-based vaccines will likely become a more prominent method for developing treatment for infectious disease and cancer due to their applicability to the field of infection control.'
    },
    {
        id: 'medication-delivery',
        title: 'Medication Delivery Via Peptide-Based',
        description: 'Nanomedicine Peptide-based nanomedicine is a promising new area of research and could lead to creating advanced drug delivery systems by utilizing peptide/nanoparticle conjugates to allow for greater localization, improved bioavailability/scalable risk reduction via peptide/nanoparticle conjugate applications'
    },
    {
        id: 'peptide-protein-interacting',
        title: 'Peptide/Protein Interacting Systems',
        description: 'An improved understanding of peptide/protein interaction models will allow for the creation of peptides to modulate complex cellular networks for the treatment of diseases that affect multiple cell types (e.g., cancer and autoimmune disorders).'
    },
    {
        id: 'peptide-biosimilars',
        title: 'Development of Peptide Biosimilars',
        description: 'Due to the expiration of patents, the number of companies developing biosimilars for peptides is growing rapidly. These biosimilars provide similar therapeutic benefits to those produced under the patent, but at significantly lower costs.'
    },
    {
        id: 'personalized-medicine',
        title: 'Personalized Medicine',
        description: 'Methods for creating peptide therapeutics is quickly gaining popularity in personalized medicine. Scientists take the genetic profile of a patient, and from this they create peptides specifically designed for that patient. This process substantially increases the accuracy and success of the treatment'
    },
    {
        id: 'synthetic-biology',
        title: 'Synthetic Biology scientists',
        description: 'can produce new, engineered peptides that have improved stability, specificity and activity. Engineered peptides can be used as either therapeutic agents or to aid in diagnosis, as they represent an entirely new direction for applications of Peptides outside of their traditionally known uses.'
    }
];

const clinicalApplicationsData = [
    {
        title: '',
        description: 'Peptide vaccines are an important part of developing vaccines against cancer and infectious diseases by specifically targeting antigens.'
    },
    {
        title: '',
        description: 'Diagnostic tools allow for the identification of disease biomarkers through various assays which facilitate diagnosing diseases as well as monitoring their progression.'
    },
    {
        title: '',
        description: 'Antimicrobial peptides provide an alternative to antibiotics and can be used to prevent infection and support wound healing.'
    },
    {
        title: '',
        description: 'Peptide hormones are used to treat metabolic and hormonal disorders such as insulin and human growth hormone.'
    },
    {
        title: '',
        description: 'Targeted Drug Delivery Peptides have been used to facilitate the delivery of therapeutic agents for higher efficacy and lower toxicity at the site of action.'
    },
    {
        title: '',
        description: 'Cosmetics and anti-aging agents using peptides stimulate the production of collagen which helps in reducing wrinkles in the skin.'
    },
    {
        title: '',
        description: 'Peptide Biosensors can be used to detect pollutants, pathogens, and toxins with quick and accurate monitoring capabilities.'
    },
    {
        title: '',
        description: 'Enzyme Inhibitors can be used to control the activity of enzymes in the biological process of disease management.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Caldwell',
        degree: 'PhD in Nutritional Science',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp"
    },
    {
        name: 'Dr. Priya Mehta',
        degree: 'MSc in Food and Nutraceutical Technology',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp"
    },
    {
        name: 'Dr. Ananya Rao',
        degree: 'PhD in Pharmacognosy',
        experience: '11 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/medicinal-chemistry/Dr.-Hiroshi-Nakamura.webp"
    }
];

export default function PeptidesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Peptides */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Peptides
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Peptide research is changing medicine as we know it. Advances in products such as peptide therapies and focused approaches to specific diseases, including cancer and autoimmune diseases, will open new avenues for personalizing medicines further:
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
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-b border-gray-200 flex items-center justify-center text-center ${isActive
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

            {/* SECTION: Applications of Peptides */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Peptides
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The most effective way to treat diseases such as autoimmunity, cancer, and diabetes is through therapeutic peptides which provide low-side effects and highly targeted therapy.
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

                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/peptides/Applications-of-Peptides.webp"
                            alt="Peptide research bottle products"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
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
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/peptides/sample-works-13-5.webp"
                            alt="Journal of Food Composition and Analysis Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Peptide biomarkers identified by LC-MS in processed meats of five animal species
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Gui-Ji Wang, Guang-Yun Zhou, Hao-Wei Ren, Yan Xu, Yan Yang, Li-Hai Guo, Ning Liu
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Food Composition and Analysis
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.8 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Peptides Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Peptides Editors
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
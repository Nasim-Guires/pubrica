"use client";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'radiopharmaceuticals',
        title: 'Radiopharmaceuticals',
        description: 'The use of Radiopharmaceuticals includes the introduction of new radiolabelled compounds that target therapies and diagnostic applications.'
    },
    {
        id: 'nuclear-waste-management',
        title: 'Nuclear Waste Management',
        description: 'Nuclear Waste Management introduces innovative means of safely disposing of radioactive waste.'
    },
    {
        id: 'nuclear-forensics',
        title: 'Nuclear Forensics',
        description: 'Nuclear Forensics includes a growing body of methods to trace nuclear materials for the sake of national security.'
    },
    {
        id: 'medical-isotopes',
        title: 'Medical Isotopes',
        description: 'Medical Isotopes allows for efficient and effective production of isotopes used for treating cancer and imaging.'
    },
    {
        id: 'fusion-energy',
        title: 'Fusion Energy',
        description: 'Fusion Energy has yielded breakthroughs in nuclear fusion, a way to harness energy from the sun.'
    },
    {
        id: 'environmental-radiochemistry',
        title: 'Environmental Radiochemistry',
        description: 'Environmental Radiochemistry provides a study of the impacts of radiation and possible methods of remediation.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Radiopharmaceutical Therapy',
        description: 'Advancing targeted radionuclide therapy for precise destruction of tumor cells while sparing healthy surrounding tissues.'
    },
    {
        title: 'Nuclear Reactor Safety',
        description: 'Improving materials science and coolant chemistry to enhance the safety and longevity of next-generation nuclear reactors.'
    },
    {
        title: 'Radiation Dosimetry',
        description: 'Developing advanced measurement techniques to accurately assess radiation exposure in medical and industrial environments.'
    },
    {
        title: 'Isotope Production & Sourcing',
        description: 'Optimizing accelerator and reactor production pathways for critical medical and industrial radioisotopes.'
    },
    {
        title: 'Decommissioning & Remediation',
        description: 'Engineering chemical separation and immobilization protocols for safe nuclear facility decommissioning.'
    }
];

const editorsData = [
    {
        name: 'Dr. Arun Patel',
        degree: 'PhD in Nuclear Chemistry',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Priya Verma',
        degree: 'PhD in Radiochemistry',
        experience: '9 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Kevin Thomas',
        degree: 'PhD in Nuclear Physics & Chemistry',
        experience: '11 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
];

export default function NuclearChemistrySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nuclear Chemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Nuclear Chemistry Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Nuclear chemistry is rapidly evolving with advancements in radiopharmaceuticals, waste management, and clean energy solutions. These emerging trends are driving innovations that will shape the future of medical, environmental, and energy sectors:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        {emergingTrendsData.map((item, index) => (
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

                    <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600"
                            alt="Nuclear chemistry research setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed pt-2">
                    Our experts stay ahead of these trends to help researchers craft cutting-edge, publishable work that contributes meaningfully to the nuclear chemistry of knowledge.
                </p>
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
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
                            alt="Radiation Physics and Chemistry Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Selective T-cell depletion in stored whole blood using green-synthesised $\gamma$-Fe₂O₃ nanoparticles with gamma or laser irradiation: A comparative in-vitro study
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Baydaa T. Sih, Alauldeen Alqasim
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Radiation Physics and Chemistry
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Nuclear Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Nuclear Chemistry Editors
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
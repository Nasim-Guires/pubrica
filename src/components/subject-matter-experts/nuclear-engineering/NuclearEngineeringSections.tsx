"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'small-modular-reactors',
        title: 'Small Modular Reactors (SMRs)',
        description: 'Small, modular nuclear reactors that are economical to build and flexible in their ability to produce energy.'
    },
    {
        id: 'nuclear-fusion',
        title: 'Nuclear Fusion',
        description: 'The development of fusion-based energy systems that are clean and virtually unlimited in supply.'
    },
    {
        id: 'ai-nuclear-systems',
        title: 'Artificial Intelligence (AI) for Nuclear Systems',
        description: 'The use of artificial intelligence for predictive maintenance, safety monitoring, and optimisation of nuclear reactors.'
    },
    {
        id: 'advanced-reactor-designs',
        title: 'Advanced Reactor Designs',
        description: 'Generation IV nuclear reactors designed with safety and efficiency goals, as well as sustainability in mind.'
    },
    {
        id: 'recycling-nuclear-waste',
        title: 'Recycling of Nuclear Waste',
        description: 'New methods for reducing and recycling radioactive waste using advanced nuclear technologies.'
    },
    {
        id: 'digital-twin-technology',
        title: 'Digital Twin Technology',
        description: 'The use of computer models of nuclear power plants to monitor and control operations in real-time.'
    },
    {
        id: 'radiation-applications',
        title: 'Radiation Applications in Medicine',
        description: 'The use of nuclear technology in the diagnosis and treatment of cancer.'
    },
    {
        id: 'sustainable-energy-integration',
        title: 'Sustainable Energy Integration',
        description: 'The utilization of nuclear energy in conjunction with renewable energy sources to provide a balanced energy mix.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Electricity Generation',
        description: 'The generation of electricity through the use of nuclear power plants.'
    },
    {
        title: 'Medical Use',
        description: 'Medical imaging, radiation therapy (for the treatment of cancer), and other medical applications.'
    },
    {
        title: 'Industrial Use',
        description: 'Non-destructive testing, material properties analysis, and radiation processing.'
    },
    {
        title: 'Environmental Protection',
        description: 'Monitoring and controlling radioactive materials in the environment.'
    },
    {
        title: 'Space Exploration',
        description: 'Providing power systems for spacecraft (including power systems used for deep space missions).'
    },
    {
        title: 'Research and Development',
        description: 'Researching the development of nuclear reactor technologies and nuclear materials.'
    },
    {
        title: 'Agriculture',
        description: 'Use of radiation techniques to increase crop production or to medicate crops from pests.'
    },
    {
        title: 'Security and Defence',
        description: 'The use of radiation detection systems and nuclear safety systems.'
    }
];

const editorsData = [
    {
        name: 'Dr. Robert Klein',
        degree: 'PhD in Nuclear Engineering',
        experience: '15 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp"
    },
    {
        name: 'Dr. Ananya Iyer',
        degree: 'PhD in Reactor Physics',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/cosmeceuticals/Dr.-Laura-Kim-1.webp"
    },
    {
        name: 'Dr. David Chen',
        degree: 'PhD in Nuclear Systems Engineering',
        experience: '11 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/nuclear-engineering/Dr.-David-Chen-1-1.webp"
    }
];

export default function NuclearEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nuclear Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Nuclear Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Nuclear engineering is at the forefront of innovation and development within the energy industry. As we move toward an age of cleaner and more efficient energy, we can use many emerging technologies to change the way we think about generating, using, and storing energy through nuclear engineering. The following emerging trends in Energy, Sustainability, and Advanced technologies will continue to evolve.
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-b border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                    The above trends represent how we are constantly changing our approach to achieving cleaner sources of energy and improving safety and sustainability through advanced nuclear engineering.
                </p>
            </section>

            {/* SECTION: Applications of Nuclear Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Nuclear Engineering
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Nuclear Engineering is a multi-disciplinary study that explores many aspects of using the energy generated from the fission process within power reactors and uses this energy for many purposes. Some examples of areas where N.E. is used are:
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
                                    <strong className="text-gray-900 font-bold">{item.title} - </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/nuclear-engineering/Nuclear-Engineering.webp"
                            alt="Nuclear engineering cooling towers"
                            width={600}
                            height={450}
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
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximising recognition and global reach.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white relative h-[280px]">
                        <Image
                            src="/images/subject-matter-experts/nuclear-engineering/Reactor-Design-Analysis.webp"
                            alt="Nuclear Engineering and Design Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Advances in Small Modular Reactor Design and Safety Analysis
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            John R. Anderson
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nuclear Engineering and Design
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.0
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Nuclear Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Nuclear Engineering Editors
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
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            width={56}
                                            height={56}
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
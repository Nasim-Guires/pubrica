"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'integrated-photonics',
        title: 'Integrated Photonics and Silicon Photonics',
        description: 'Silicon and Integrated Photonics Minimising of optical components used in electronics has led to improved data transmission speeds, reduced requirements to power usage and performing better overall for Optical Communications systems.'
    },
    {
        id: 'advanced-optoelectronic',
        title: 'Advanced Optoelectronic Devices',
        description: 'Advancements in Optoelectronic Components Improving the quality of imaging sensing, Enhanced Optical Sensors will enable advances in future products by providing better quality images and sensor data to use for other electronic systems.'
    },
    {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence-Enabled Optical Systems',
        description: 'Artificial Intelligence in Optical Systems Combining Ai and optical electronic systems will allow for greater accuracy, faster analysis of images and the ability to recognize patterns of data in real time.'
    },
    {
        id: 'flexible-wearable',
        title: 'Flexible and Wearable Electronics',
        description: 'Flexible and Wearable Electronics Flexible electronic and Optical Technologies have opened many new possibilities for usage of Wearable Health Monitoring Systems, Smart Textiles, and Human-Machine Interaction applications.'
    },
    {
        id: 'nanophotonic-metamaterials',
        title: 'Nanophotonic and Metamaterials',
        description: 'Nanophotonic and Metamaterials The invention of Nanostructured materials is allowing for the creation of new materials that enable stunningly precise control over the use of Light for Sensing, Imaging, as well as Energy Efficiency.'
    },
    {
        id: 'energy-efficient',
        title: 'Energy-Efficient and Sustainable Technologies',
        description: 'Sustainable, Energy Efficient Technology Development of Low Power Electronics and Smart Energy Harvesting Systems are creating many new opportunities for the development of Green, Sustainable, and Long-Lasting Electronic Technologies.'
    }
]

const applicationsData = [
    {
        title: 'Personalised Learning Facilitated by Artificial Intelligence',
        description: 'More rapid development of learner skills through micro-learning.'
    },
    {
        title: 'Gamification and Engagement',
        description: 'Ability to increase engagement through gamification.'
    },
    {
        title: 'Immersive Technologies',
        description: 'Use of A.R. and V.R. to enhance the learner experience.'
    },
    {
        title: 'Mobile-First Accessibility',
        description: 'Creation of mobile-first learning opportunities.'
    },
    {
        title: 'Learning Analytics',
        description: 'Use of data analytics to improve student learning outcomes.'
    },
    {
        title: 'Adaptive Learning Pathways',
        description: 'Creation of individualised and adaptive learning paths.'
    },
    {
        title: 'Collaborative Social Tools',
        description: 'Creation of collaborative and social technology tools for learners.'
    },
    {
        title: 'Micro-Certifications',
        description: 'Creation of micro-certifications and digital credentials.'
    },
    {
        title: 'Automated Assessment',
        description: 'Creation of automated assessment and feedback processes.'
    }
];

const editorsData = [
    {
        name: 'Dr. Arjun Rao',
        degree: 'PhD in Educational Technology',
        experience: '16 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/e-learning/Dr.-Arjun-Rao-1.webp"
    },
    {
        name: 'Dr. Kavita Nair',
        degree: 'PhD in Instructional Design & Learning Sciences',
        experience: '14 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/e-learning/Dr.-Kavita-Nair-1.webp"
    },
    {
        name: 'Dr. Meera Iyer',
        degree: 'PhD in Educational Psychology',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp"
    }
];

export default function ELearningSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Optics and Electronics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Advancements in optics and electronics are driving innovation across healthcare, communication, manufacturing, and scientific research. Key emerging trends include:
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

            {/* SECTION 2: Emerging Trends in E Learning */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in E Learning
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        E-learning continues to evolve rapidly with advancements in technology, pedagogy, and learner engagement strategies. The following trends are shaping the future of digital education:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0e3b32]">
                            Personalised Learning Facilitated by Artificial Intelligence:
                        </h3>
                        {applicationsData.map((app, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/e-learning/Dr.-Jane-Matthews.webp"
                            alt="E-Learning visual computer setup"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
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
                        Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/e-learning/sample-works-11-11.webp"
                            alt="Computers & Education Open Book Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Differential effects of student and parental mobile phone use on academic procrastination trajectories: Machine learning evidence
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Jiabin Liu, Ru-De Liu, Wei Hong, Jingmin Lin Show more.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Computers & Education
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            10.5
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert E Learning Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert E Learning Editors
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
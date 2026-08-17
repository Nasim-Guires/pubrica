"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'robotics',
        title: 'Robotics',
        description: 'The expansion of artificial intelligence and machine learning allows machines to perceive, learn, and make decisions in changing environments without the need for human assistance.'
    },
    {
        id: 'cobots',
        title: 'Cobots',
        description: 'Cobots are changing the manufacturing, healthcare, and service sectors by providing an alternative to the traditional human-robot interface. Cobots have been designed to work safely side-by-side with humans, offering many advantages in terms of flexibility and increased speed.'
    },
    {
        id: 'soft-robotics',
        title: 'Soft Robotics',
        description: 'Soft robots use flexible materials to accomplish tasks that are typically performed using hard robots, resulting in the ability to perform delicate tasks safely and therefore have the potential to facilitate human contact (in all fields) and have applications in medicine and exploration.'
    },
    {
        id: 'swarm-robotics',
        title: 'Swarm Robotics',
        description: 'The use of multiple robots working together through decentralized control systems creates scalable solutions for tasks such as search and rescue, environmental monitoring, and supply chain management.'
    },
    {
        id: 'robotics-computer-vision',
        title: 'Robotics with Computer Vision',
        description: 'Advanced vision systems enable robots to recognize and respond to visual information in complex environments. By improving object recognition, navigation, and real-time decision-making, vision-based robotics can improve the efficiency and effectiveness of several critical functions.'
    },
    {
        id: 'human-robot-interaction',
        title: 'Human-Robot Interaction',
        description: 'Various technologies, including intuitive interfaces and wearable robotics, assistive devices, and other wearable technologies, are improving human capabilities and enhancing the quality of life for people with disabilities and others requiring long-term rehabilitation.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Industrial Automation:',
        description: 'Robotic systems streamline production lines, increase throughput, and lower operational error rates across advanced manufacturing.'
    },
    {
        title: 'Healthcare & Surgery:',
        description: 'Medical robots enable high-precision minimally invasive surgeries, targeted rehabilitation, and automated pharmacy processing.'
    },
    {
        title: 'Field & Exploration:',
        description: 'Autonomous drones and rovers navigate harsh environments for deep-sea exploration, space missions, and disaster recovery.'
    },
    {
        title: 'Logistics & Supply Chain:',
        description: 'AGVs and automated sorting systems optimize warehouse storage, inventory movement, and last-mile delivery mechanisms.'
    },
    {
        title: 'Agriculture:',
        description: 'Precision farming techniques leverage autonomous harvesters and robotic crop monitoring to maximize yield efficiency.'
    }
];

const editorsData = [
    {
        name: 'Dr. Michael Anderson',
        degree: 'PhD in Robotics Engineering',
        experience: '15 years of experience',
        manuscripts: '190+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp"
    },
    {
        name: 'Dr. Sofia Martinez',
        degree: 'PhD in Artificial Intelligence and Robotics',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇦🇺',
        avatar: "/images/subject-matter-experts/biotechnology/Dr.-Sofia-Martinez.webp"
    },
    {
        name: 'Dr. Daniel Kovacs',
        degree: 'PhD in Mechatronics and Automation',
        experience: '18 years of experience',
        manuscripts: '210+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/bioinformatics/Dr.-Karrel.webp"
    }
];

export default function RoboticsSubjectMatterExperts() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Robotics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Robotics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Robotics is rapidly evolving with advancements in artificial intelligence, machine learning, and sensor technologies driving smarter and more autonomous systems. Key trends include collaborative:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${
                                        isActive
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
                            src="/images/subject-matter-experts/robotics/sample-works-11-14.webp"
                            alt="Robotics and Autonomous Systems Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Visually extracting the network topology of drone swarms
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Nisha Kumari, Kevin Lee, Chathuri Ranaweera Show more
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Robotics and Autonomous Systems
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            5.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Robotics Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Robotics Editors
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
"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'aiot',
        title: 'AIoT (Artificial Intelligence of Things)',
        description:
            'is defined as the integration of artificial intelligence into the Internet of Things (IoT). With this technology, devices equipped with sensors and data processing capabilities will have the ability to process data, analyze that data, make decisions based on that data and learn from their own experiences. As such, AIoT improves automation, predictive maintenance and real-time analytics in areas such as smart cities, healthcare, and manufacturing.'
    },
    {
        id: 'edge-fog-computing',
        title: 'Edge and Fog Computing',
        description: "As devices generate and send more data over the air, it's necessary to move processing from farther away to be as close to the source as possible, which also helps minimize bandwidth use and latency. The IoT can use edge and fog computing models to process data locally rather than rely only on cloud servers and data storage, which are not conducive to real-time processing for applications such as autonomous vehicles and industrial automation processes."
    },
    {
        id: '5g-connectivity',
        title: '5G Implementation and cutting-edge connectivity',
        description:
            'An improved understanding of peptide/protein interaction models will allow for the creation of peptides to modulate complex cellular networks for the treatment of diseases that affect multiple cell types (e.g., cancer and autoimmune disorders).'
    },
    {
        id: 'enhanced-security',
        title: 'Enhanced Security and Privacy Solutions',
        description:
            'Due to the expiration of patents, the number of companies developing biosimilars for peptides is growing rapidly. These biosimilars provide similar therapeutic benefits to those produced under the patent, but at significantly lower costs.'
    },
    {
        id: 'digital-twins',
        title: 'Digital Twins',
        description:
            'Methods for creating peptide therapeutics is quickly gaining popularity in personalized medicine. Scientists take the genetic profile of a patient, and from this they create peptides specifically designed for that patient. This process substantially increases the accuracy and success of the treatment'
    },
    {
        id: 'energy-efficient-iot',
        title: 'Energy-Efficient and Sustainable IoT',
        description:
            'can produce new, engineered peptides that have improved stability, specificity and activity. Engineered peptides can be used as either therapeutic agents or to aid in diagnosis, as they represent an entirely new direction for applications of Peptides outside of their traditionally known uses.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ananya Sharma',
        degree: 'PhD in Internet of Things and Smart Systems',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp"
    },
    {
        name: 'Dr. Sneha Varghese',
        degree: 'PhD in IoT and Embedded Systems',
        experience: '9 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Sneha-Varghese-2.webp"
    },
    {
        name: 'Dr. Ayesha Kapoor',
        degree: 'PhD in IoT and Wireless Sensor Networks',
        experience: '11 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp"
    }
];

export default function InternetOfThingsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Internet of Things Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Internet of Things Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The Internet of Things (IoT) is an area of rapid evolution and development that is changing many industries with new and improved ways to connect and interact with things. Research looks at increasing efficiency, security, scalability and intelligence in IoT environments, and the most notable trends are:
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

            {/* SECTION 2: Where Our Authors Publish */}
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
                            src="/images/subject-matter-experts/internet-of-things/Internet-of-Things-.webp"
                            alt="Internet of Things Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Cost and Time Optimization of Cloud Services in Arduino-Based Internet of Things Systems for Energy Applications
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Reza Nadimi*, Maryam Hashemi, Koji Tokimatsu
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal on Internet of Things (Tech Science Press)
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Tech Science Press
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.7 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Internet Of Things Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Internet Of Things Editors
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
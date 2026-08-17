"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'deep-learning-neural-networks',
        title: 'Deep Learning & Neural Networks',
        description: 'structured data into using the same techniques on highly unstructured datasets, such as images, audio files, and video, for example, identifying patterns to analyze the opinions of individuals and then make predictions on future actions.'
    },
    {
        id: 'big-data-analytics',
        title: 'Big Data Analytics',
        description: 'As Big Data progresses, so does the requirement for scalable, distributed solutions (e.g., Hadoop or Spark). Data miners must extract valuable knowledge from the immense data sets in real-time using big data technologies across multiple industries'
    },
    {
        id: 'real-time-data-mining',
        title: 'Real-Time Data Mining',
        description: 'Analytics in "real-time" are allowing companies and other types of organisations to be able to make decisions very quickly. Data mining in "real-time" is essential across a variety of areas including fraud detection; cybersecurity; as well as autonomous systems.'
    },
    {
        id: 'nlp',
        title: 'Natural Language Processing (NLP)',
        description: 'Data miners with the ability to analyze massive amounts of data in the form of textual content and obtain valuable information about their business or organization. These improvements will be beneficial for companies that conduct customer sentiment assessments using NLP, monitor social media activity and classify documents based upon their content.'
    },
    {
        id: 'predictive-prescriptive-analytics',
        title: 'Predictive Analytics & Prescriptive Analytics',
        description: 'As predictive analytics is growing in sophistication using increasingly advanced modelling techniques, we are beginning to see a shift towards prescriptive analytics, which not only predict the likely future outcome of an activity, but also offer recommendations for action based on the insights developed'
    },
    {
        id: 'automated-data-mining',
        title: 'Automated Data Mining',
        description: 'With advancements in AI, automated data mining tools are becoming more accessible, allowing non-experts to perform sophisticated analyses without needing deep technical knowledge.'
    }
];

const applicationsData = [
    {
        title: 'Healthcare Analytics',
        description: 'Healthcare Analytics – To find patterns among patients who are suffering from similar diseases, to predict how patients will react physically to their respective disease processes, and to tailor treatment plans for each patient.'
    },
    {
        title: 'Fraud Detection',
        description: 'Fraud Detection – Identify fraudulent transactions or activity based on patterns; includes banking, insurance, and e-commerce.'
    },
    {
        title: 'Risk Management',
        description: 'Risk Management – Assist businesses in identifying and mitigating risk relating to financial institutions, insurance agencies, and other business operations.'
    },
    {
        title: 'Social Media and Sentiment Analysis',
        description: 'Social Media and Sentiment Analysis: Utilize social media to monitor and determine how public sentiment is currently trending concerning a specific brand as well as other attributes used in marketing.'
    },
    {
        title: 'Recommendation Systems Services',
        description: 'Recommendation Systems Services – Create customized product recommendations for consumers using the e-commerce industry (Amazon), video streaming service companies such as Netflix, or other online businesses.'
    },
    {
        title: 'Manufacturing and Quality Control',
        description: 'Manufacturing and Quality Control – Monitor production processes, identify defects, and improve the quality of manufactured goods through quality control.'
    },
    {
        title: 'Education and E-Learning',
        description: 'Education and E-Learning – Use performance data from students to personalize the learning experience of each student and improve academic success for students.'
    }
];

const editorsData = [
    {
        name: 'Dr. Sarah Thompson',
        degree: 'PhD in Computer Science (Data Mining)',
        experience: '12 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/data-mining/Dr.-Sarah-Thompson.webp"
    },
    {
        name: 'Dr. Michael Roberts',
        degree: 'PhD in Data Science',
        experience: '10 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/computer-science/Dr.-Kevin-Marshall.webp"
    },
    {
        name: 'Dr. Jane Matthews',
        degree: 'PhD in Artificial Intelligence & Data Mining',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/data-mining/Dr.-Jane-Matthews.webp"
    }
];

export default function DataMiningSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Data Mining */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Data Mining
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Data mining is constantly evolving to meet the growing challenges of big data and complex analytics. Key emerging trends in data mining include:
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

            {/* SECTION 2: Applications of Data Mining */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The techniques used in data mining are constantly being improved and perfected to aid companies and organizations in their quest to innovate by gaining valuable knowledge through analysing large amounts of data and using this information to further improve upon existing products/services and processes.
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Data Mining
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Several industries utilize data mining to find hidden patterns, predict future trends, and assist with making decisions. Some of the more prominent applications of data mining are:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
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

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/data-mining/Data-Mining.webp"
                            alt="Applications of Data Mining"
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
                        Our authors share Data Mining publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/data-mining/Descriptive-Exploratory-Data-Mining.webp"
                            alt="Data Mining: A Knowledge Discovery Approach Book Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Entity completion for industrial knowledge graph based on zero-shot learning
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Yin Cai, Zhijun Fang, Zheyi Cheng.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Data Mining and Knowledge Discovery
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Springer Nature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            6.5
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Data Mining Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Data Mining Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        At Pubrica, our staff of professional editors specializing in data mining will edit manuscripts to make them suitable for publication with the highest level of clarity, precision and impact. The editors have earned higher degrees and/or possess domain-specific experience in data mining, machine learning, big data analytics, and computational modelling.
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
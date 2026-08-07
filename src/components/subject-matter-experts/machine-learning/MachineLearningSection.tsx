"use client";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'deep-learning-advancements',
        title: 'Deep Learning Advancements',
        description: 'Recent advances in deep learning Architecture with Transformers and Attention Mechanisms are enabling new breakthroughs and possibilities in Natural Language Processing, Computer Vision, and Speech Recognition.'
    },
    {
        id: 'federated-learning',
        title: 'Federated Learning',
        description: 'The decentralisation of training a neural network on different devices without exposing user data, which helps to protect privacy and maintain security in industries such as healthcare and finance.'
    },
    {
        id: 'explainable-ai',
        title: 'Explainable AI (XAI)',
        description: 'As AI becomes an integral part of business operation across all sectors, the need for AI systems that are developed and operated transparently will continue to rise.'
    },
    {
        id: 'automated-machine-learning',
        title: 'Automated Machine Learning (Auto ML)',
        description: 'The development of Auto ML has made it possible for a layman to use machine learning technologies without being a data scientist by simplifying the processes of model selection, hyperparameter adjustments, and workflow optimization through automating them.'
    },
    {
        id: 'reinforcement-learning',
        title: 'Reinforcement Learning in Real-World Applications',
        description: 'The development of reinforcement learning continues to evolve, giving rise to the emergence of more complex, resourceful autonomous systems; robotics, self-driving automobiles, and intelligent urban centres.'
    },
    {
        id: 'ai-for-drug-discovery',
        title: 'AI for Drug Discovery and Healthcare',
        description: 'Machine learning is transforming healthcare, with models being used to predict drug efficacy, personalize treatment plans, and optimize diagnostic imaging techniques.'
    }
];

const applicationsOfLifeScienceData = [
    {
        title: 'Predictive Maintenance',
        description: 'Anticipating equipment failures and optimizing industrial operations before downtime occurs'
    },
    {
        title: 'Natural Language Processing',
        description: 'Extracting insights, automating text generation, and enhancing conversational systems'
    },
    {
        title: 'Computer Vision',
        description: 'Enabling automated visual inspection, object detection, and pattern recognition'
    },
    {
        title: 'Robotics and Automation',
        description: 'Improving autonomous navigation, smart logistics, and industrial manufacturing workflows'
    },
    {
        title: 'Financial Services',
        description: 'Detecting fraudulent transactions, assessing credit risk, and automating algorithmic trading'
    },
    {
        title: 'Healthcare and Diagnostics',
        description: 'Assisting medical imaging analysis and predicting patient outcome trajectories'
    },
    {
        title: 'Research and Development',
        description: 'Accelerating data analysis, simulation modeling, and complex algorithm optimization'
    },
    {
        title: 'Smart Cities and IoT',
        description: 'Optimizing energy consumption, traffic flow, and urban infrastructure management'
    }
];

const editorsData = [
    {
        name: 'Dr. Aria Bennett',
        degree: 'PhD in Machine Learning',
        experience: '15 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Ethan Morales',
        degree: 'PhD in Data Science',
        experience: '10 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Priya Nair',
        degree: 'PhD in Computational Intelligence',
        experience: '12 years of experience',
        manuscripts: '110+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    }
];

export default function MachineLearningSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Machine Learning Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Machine Learning Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Emerging trends in machine learning research are transforming industries with innovations in deep learning, natural language processing, and AI-driven automation:
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

            {/* SECTION: Applications of Machine Learning (Preserving Layout structure) */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Machine Learning
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Machine learning encompasses an interdisciplinary area of technology that applies algorithmic and computational concepts in a variety of fields. The main applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {applicationsOfLifeScienceData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title} – </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600"
                            alt="Machine learning research setup"
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
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
                            alt="Artificial Intelligence Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Probabilistically robust counterfactual explanations under model changes
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Luca Marzari, Francesco Leofante, Ferdinando Cicalese, Alessandro Farinelli
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Artificial Intelligence
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Machine Learning Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Machine Learning Editors
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
"use client";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const trustItemsData = [
    {
        title: 'PhD-Qualified Subject Experts',
        description: 'Our editors and writers hold advanced degrees in glycobiology, biochemistry, and molecular sciences.'
    },
    {
        title: '15+ Years of Experience',
        description: 'Over a decade of expertise in supporting glycobiology research and publication across international journals.'
    },
    {
        title: 'Comprehensive Publication Support',
        description: 'From study design to peer-review response, we ensure your manuscript meets global publishing standards.'
    },
    {
        title: 'Ethical and Compliant Approach',
        description: 'We strictly adhere to COPE, CONSORT, and ICMJE guidelines for transparency and research integrity.'
    },
    {
        title: 'Global Experience',
        description: 'Having assisted researchers in over 30 countries, we understand diverse publication expectations and journal scopes.'
    },
    {
        title: 'Client-Centric Collaboration',
        description: 'Every project is handled with confidentiality, quality assurance, and personalized attention.'
    }
];

const emergingTrendsData = [
    {
        id: 'artificial-intelligence-in-glycomics',
        title: 'Artificial Intelligence in Glycomics',
        description: 'AI-driven tools are enabling high-throughput glycan identification, modelling, and prediction.'
    },
    {
        id: 'single-cell-glycomics',
        title: 'Single-Cell Glycomics',
        description: 'Techniques that analyse glycan heterogeneity at the cellular level are uncovering novel disease mechanisms.'
    },
    {
        id: 'glycoimmunology',
        title: 'Glycoimmunology',
        description: 'The interplay between glycans and immune receptors is shaping next-generation immunotherapies and vaccines.'
    },
    {
        id: 'biopharmaceutical-glycoengineering',
        title: 'Biopharmaceutical Glycoengineering',
        description: 'Optimizing glycosylation profiles for improved drug stability, efficacy, and patient safety.'
    },
    {
        id: 'glycan-biomarkers',
        title: 'Glycan Biomarkers',
        description: 'Discovery of novel carbohydrate-based biomarkers for cancer, infectious, and neurodegenerative diseases.'
    }
];

const areasOfStudyData = [
    { title: 'Biochemistry' },
    { title: 'Glycosylation' },
    { title: 'Glycoconjugates' },
    { title: 'Proteoglycans' },
    { title: 'Glycosaminoglycans' },
    { title: 'Glycosylation' },
    { title: 'Glycolipids' },
    { title: 'Proteomics' },
    { title: 'Carbohydrates' },
    { title: 'Glycoproteins' },
    { title: 'Genomics' },
    { title: 'Glycan Binding Proteins' }
];

const editorsData = [
    {
        name: 'Dr. Alicia Morgan',
        degree: 'PhD in Glycobiology',
        experience: '12 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Kenji Watanabe',
        degree: 'PhD in Molecular and Cellular Biology',
        experience: '15 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇯🇵',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Sofia Almeida',
        degree: 'PhD in Biochemistry',
        experience: '13 years of experience',
        manuscripts: '105+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200'
    }
];

export default function GlycobiologySection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Glycobiology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Glycobiology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Recent innovations in glycobiology research are transforming therapeutic and diagnostic development. Some key trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
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

            {/* SECTION: Why Choose Pubrica for Glycobiology Research and Publishing? */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Choose Pubrica for Glycobiology Research and Publishing?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Pubrica stands apart for its scientific expertise, editorial excellence, and global publishing experience. Our value proposition lies in:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {trustItemsData.map((item, index) => (
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
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
                            alt="Glycobiology research setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Areas of Study (Dark Theme Container matched with reference image) */}
            <section className="w-full bg-[#092c25] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Areas of Study
                        </h2>
                        <div className="w-16 h-1 bg-[#145345] mx-auto rounded-full"></div>
                        <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                            Pubrica supports a broad spectrum of glycobiology research. Whether it&apos;s the study of glycosylation, glycoconjugates, or glycomics, Pubrica&apos;s expertise ensures that your glycobiology research is robust, well-documented, and ready for publication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-xl border border-white/10 order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
                                alt="Glycobiology medical setup"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 order-1 lg:order-2">
                            {areasOfStudyData.map((app, index) => (
                                <div key={index} className="bg-white rounded-md px-3 py-3 shadow-sm flex items-center space-x-2 text-gray-900">
                                    <div className="text-[#0e3b32] bg-[#eef2f1] p-1 rounded shrink-0">
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                                        {app.title}
                                    </span>
                                </div>
                            ))}
                        </div>
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
                        Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
                            alt="Glycobiology Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            The Importance of N- and O-Glycosylation of Brain Cell Surface Glycoproteins
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Maxence Noel, Yumi M Zürcher, Ea K C Tulin, Richard D Cummings
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Glycobiology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Oxford University Press
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Glycobiology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Glycobiology Editors
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
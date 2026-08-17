"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'nanotechnology-based-drug-delivery',
        title: 'Nanotechnology-Based Drug Delivery',
        description: 'Targeting Drugs Precisely - Nanoparticles and nanocarriers offer a new method for targeting drugs to specific tissues or cells. They also reduce systemic side effects from drugs and improve their effectiveness, particularly for diseases that are difficult to treat, such as cancer.'
    },
    {
        id: 'gene-delivery-systems',
        title: 'Gene Delivery Systems',
        description: 'Advances in gene therapy are enabling the delivery of genetic material (DNA/RNA) to treat genetic disorders and cancers. The development of safe, efficient gene delivery vectors, such as viral and non-viral nanoparticles, is a key trend.'
    },
    {
        id: 'ai-machine-learning-in-dds',
        title: 'Artificial Intelligence (AI) and Machine Learning in DDS',
        description: 'AI is being used to design and optimize drug delivery systems by predicting how drugs interact with biological systems. Machine learning algorithms help streamline the design process, improving the efficiency and success rates of DDS development.'
    },
    {
        id: 'biodegradable-polymers',
        title: 'Biodegradable Polymers for Controlled Release',
        description: 'Development of biodegradable and biocompatible polymers that gradually release drugs over time, reducing the need for frequent doses.'
    },
    {
        id: '3d-printing-personalized-drug-delivery',
        title: '3D Printing for Personalized Drug Delivery',
        description: 'Leveraging 3D printing technology to design customized drug delivery devices or formulations tailored to individual patient needs.'
    },
    {
        id: 'combination-drug-delivery',
        title: 'Combination Drug Delivery',
        description: 'Integration of multiple drugs or therapies in a single delivery system to enhance the synergistic effects, such as in cancer treatment combining chemotherapy and immunotherapy.'
    }
];

const applicationsData = [
    {
        title: 'Targeted Drug Delivery',
        description: 'Targeted Drug Delivery: Provides medications directly at the location required to be effective while decreasing the likelihood of side effects, particularly used as an effective means of treating cancer.'
    },
    {
        title: 'Controlled Release Drug Delivery',
        description: 'Controlled Release Drug Delivery: Provides gradual release of medications over an extended period, ensuring that medication levels in a chronic disease remain stable, e.g., diabetes.'
    },
    {
        title: 'Nanomedicine Drug Delivery',
        description: 'Nanomedicine Drug Delivery: Nanoparticles are used to precisely target and release medications to treat a variety of diseases, including Cancer, Window, & Neurological Disorders.'
    },
    {
        title: 'Biologics Drug Delivery',
        description: 'Biologics Drug Delivery: Enhance the stability and absorption of biologics; monoclonal antibodies and gene therapies for the treatments of autoimmune & genetically mediated diseases; biotherapeutic agents.'
    },
    {
        title: 'Transdermal Drug Delivery',
        description: 'Transdermal Drug Delivery: Deliver medications via the skin; Many patients prefer non-invasive means of reaching their prescription medications.'
    },
    {
        title: 'Vaccines',
        description: 'Vaccines: Provides more effective antigen delivery for the prevention of disease and to enhance the immune response to the disease.'
    },
    {
        title: 'CNS Targeting',
        description: 'CNS Targeting: Develops systems that enable drugs to be delivered across the blood-brain barrier; develop systems to target areas of the brain that are affected by diseases such as Alzheimer’s & Parkinson’s Disease.'
    }
];

const areasOfStudyData = [
    'Molecular Biology',
    'Gene Therapy',
    'Immunology',
    'Surface Chemistry',
    'Microbiology',
    'Nanomedicine',
    'Tissue Engineering',
    'Formulation Science',
    'Pharmacogenomics',
    'In Vitro & In Vivo Studies',
    'Wound Healing & Regenerative Medicine'
];

const editorsData = [
    {
        name: 'Dr. Emma Clark',
        degree: 'PhD in Drug Delivery and Nanomedicine',
        experience: '7 years of experience',
        manuscripts: '80+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/drug-delivery-system/Dr.-Emma-Clark.webp"
    },
    {
        name: 'Michael Lee',
        degree: 'Master’s in pharmacology',
        experience: '8 years of experience',
        manuscripts: '60+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/ceramic-engineering/Michael-Lee.webp"
    },
    {
        name: 'Dr. Sarah Johnson',
        degree: 'PhD in Pharmaceutical Sciences',
        experience: '12 years of experience',
        manuscripts: '100+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/drug-delivery-system/Dr.-Sarah-Johnson.webp"
    }
];

export default function DrugDeliverySystemSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans space-y-20">

            {/* SECTION 1: Emerging Trends in Drug Delivery System */}
            <section className="max-w-6xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Drug Delivery System
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of animal science is rapidly evolving due to technological innovations and global challenges:
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

            {/* SECTION 2: Applications of Drug Delivery System */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Drug Delivery System
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Drug Delivery System is applied in diverse sectors:
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
                            src="/images/subject-matter-experts/drug-delivery-system/Drug-Delivery-System.webp"
                            alt="Applications of Drug Delivery System"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Areas of Study (Full-Width Dark Green Background) */}
            <section className="w-full bg-[#0a2923] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Areas of Study
                        </h2>
                        <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                    </div>

                    {/* Intro text / banner card on the left with grid of study tags on right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-lg relative min-h-[250px] flex items-end p-6 bg-cover bg-center" style={{ backgroundImage: `url('/images/subject-matter-experts/drug-delivery-system/Drug-Delivery-System.webp')` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <p className="relative z-10 text-white text-sm sm:text-base leading-relaxed">
                                Pubrica's experts provide comprehensive support for drug delivery system research, ensuring your work is accurate, impactful, and reaches the right audience, from design to clinical application.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {areasOfStudyData.map((study, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-gray-900 px-4 py-3 rounded-md shadow-sm flex items-center space-x-2 text-sm font-semibold"
                                >
                                    <ChevronRight className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                    <span>{study}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/drug-delivery-system/Pharmaceutical-Science.webp"
                            alt="Drug Delivery and Translational Research Book Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Topical delivery of Lidocaine using spicules for local anaesthesia
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Zhang, C., Yang, P., Lin, X.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Drug Delivery and Translational Research
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Springer nature
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            5.5
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Expert Editors In Drug Delivery Systems */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Editors In Drug Delivery Systems
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
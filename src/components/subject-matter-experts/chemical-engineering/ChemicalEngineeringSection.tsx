"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
    Briefcase, 
    FileText, 
    ChevronDown,
    Pill,
    Zap,
    Droplets,
    Utensils,
    Layers,
    Flame,
    Dna,
    Leaf
} from 'lucide-react';

const emergingTrendsData = [
    "AI & ML tools are ever more common in industry for operations enhancement, calculating when equipment will need service, and developing intelligent systems.",
    "Process intensification is the next area of innovation that focuses on the development of small, energy-efficient processes which result in increased productivity and less energy consumed.",
    "Green/Sustainability Engineering emphasises the use of environmentally conscious manufacturing methods and processes, using renewable energy to operate and minimising waste in production.",
    "Advanced Materials and Nanotechnology deal with creating new classes of materials with unique physical properties used in industrial and healthcare applications.",
    "CCU, or Carbon Capture and Utilisation Technologies, work to limit carbon emissions from all sources and enable the conversion of CO₂ by-products into usable materials.",
    "Digital Twins of Chemical Plants allow for the virtual representation of chemical facilities and aid in monitoring, controlling, and optimising the chemical process in \"real-time\"."
];

const applicationsData = [
    {
        icon: Pill,
        title: "Pharmaceuticals",
        description: "developing and manufacturing drug and biopharmaceutical products"
    },
    {
        icon: Zap,
        title: "Energy",
        description: "developing fuel, alternative energy technologies, and storage"
    },
    {
        icon: Droplets,
        title: "Environmental engineering",
        description: "waste treatment, water purification, and pollution"
    },
    {
        icon: Utensils,
        title: "Food processing",
        description: "improving the process for producing and preserving food"
    },
    {
        icon: Layers,
        title: "Materials science",
        description: "developing new materials such as polymers and nanomaterials"
    },
    {
        icon: Flame,
        title: "Petrochemical industry",
        description: "developing processes for refining crude oil, producing petrochemical products, and producing fuels"
    },
    {
        icon: Dna,
        title: "Biotechnology",
        description: "developing products such as enzymes and vaccines"
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "developing new processes that are sustainable and have a lower effect on the environment"
    }
];

const editorsData = [
    {
        name: 'Dr. Robert Williams',
        degree: 'PhD in Chemical Engineering',
        experience: '15 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Anjali Rao',
        degree: 'PhD in Process Engineering',
        experience: '12 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. David Lee',
        degree: 'PhD in Reaction Engineering',
        experience: '11 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    }
];

export default function ChemicalEngineeringSection() {
    // Collapsible accordion state for Future Trends (closed by default)
    const [isTrendsOpen, setIsTrendsOpen] = useState(false);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Chemical Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Chemical Engineering
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Trends in Health Care, Biotechnology, and Sustainability through Cutting-Edge Molecular Engineering.
                    </p>
                </div>

                {/* Collapsible Accordion Box */}
                <div className="border border-gray-200 rounded-md overflow-hidden">
                    <button
                        onClick={() => setIsTrendsOpen(!isTrendsOpen)}
                        className="w-full bg-[#0e3b32] text-white px-6 py-3.5 flex items-center justify-between font-semibold text-sm sm:text-base transition-colors duration-150 hover:bg-[#0a2f28]"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-bold">{isTrendsOpen ? '−' : '+'}</span>
                            <span>Future Trends in Molecular Engineering & Sustainable Technologies</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isTrendsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isTrendsOpen && (
                        <div className="p-6 bg-[#fafafa] border-t border-gray-200 space-y-3">
                            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {emergingTrendsData.map((trend, idx) => (
                                    <li key={idx} className="pl-1">
                                        <span className="text-gray-800">{trend}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 2: Applications of Chemical Engineering */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Chemical Engineering
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Chemical engineering is used to solve several problems in different industries, including:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Applications List with Outline Icons */}
                    <div className="lg:col-span-6 space-y-5">
                        {applicationsData.map((app, idx) => {
                            const IconComponent = app.icon;
                            return (
                                <div key={idx} className="flex items-start space-x-3 text-gray-800">
                                    <div className="p-1 text-gray-700 shrink-0 mt-0.5">
                                        <IconComponent className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <div className="text-xs sm:text-sm leading-relaxed">
                                        <strong className="font-bold text-gray-900">{app.title}: </strong>
                                        <span className="text-gray-700">{app.description}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Lab Scientist Image */}
                    <div className="lg:col-span-6 flex justify-center">
                        <div className="relative w-full h-[400px] sm:h-[480px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
                                alt="Chemical Engineering Research Laboratory"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
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
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximising recognition and impact.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <Image
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
                            alt="Chemical Engineering Journal Cover"
                            width={224}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-xs sm:text-sm leading-relaxed pt-2">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Advances in Process Intensification for Chemical Manufacturing
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            John A. Smith, Laura Chen
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Chemical Engineering Journal
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            15.1
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Chemical Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Chemical Engineering Editors
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation.
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
                                        <span className="absolute bottom-0 right-0 text-xs bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                                    <div className="flex items-center space-x-1.5">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <FileText className="w-4 h-4 text-[#0e3b32] shrink-0" />
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
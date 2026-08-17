"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'regenerative-endodontics',
        title: 'Regenerative Endodontics',
        description: 'Advancing pulp revascularization techniques and stem cell applications to restore vital tooth functions and biological integrity in compromised teeth.'
    },
    {
        id: 'digital-workflow',
        title: 'Digital Workflow & CAD/CAM',
        description: 'Leveraging intraoral scanning, 3D printing, and computer-aided design to fabricate highly precise crowns, bridges, and orthodontic appliances.'
    },
    {
        id: 'ai-in-diagnostics',
        title: 'AI in Dental Diagnostics',
        description: 'Using artificial intelligence and machine learning algorithms to detect early carious lesions, periodontal bone loss, and oral pathologies from imaging datasets.'
    },
    {
        id: 'minimally-invasive',
        title: 'Minimally Invasive Dentistry',
        description: 'Focusing on preventive protocols, resin infiltration, and micro-dentistry approaches to conserve healthy tooth structure and enhance patient comfort.'
    },
    {
        id: 'biomaterials-implants',
        title: 'Biomaterials & Osseointegration',
        description: 'Investigating novel bioactive bone grafts, surface modifications, and zirconia implants to improve success rates and long-term osseointegration.'
    },
    {
        id: 'laser-dentistry',
        title: 'Laser Dentistry',
        description: 'Utilizing hard and soft tissue lasers for precise surgical interventions, bacterial reduction, periodontal therapy, and accelerated wound healing.'
    }
];

const applicationsData = [
    {
        title: 'Digital Dentistry and CAD/CAM Technologies',
        description: 'Digital Dentistry and CAD/CAM Technologies – Enabling precision design and fabrication of restorations and prosthetics.'
    },
    {
        title: 'Implantology and Bone Regeneration',
        description: 'Implantology and Bone Regeneration – Improving implant survival through novel biomaterials and surface modifications.'
    },
    {
        title: 'Laser and Aesthetic Dentistry',
        description: 'Laser and Aesthetic Dentistry – Enhancing patient comfort and cosmetic outcomes with minimally invasive techniques.'
    },
    {
        title: 'Oral Cancer Diagnostics',
        description: 'Oral Cancer Diagnostics – Leveraging molecular markers, imaging modalities, and AI-driven histopathology.'
    },
    {
        title: 'Tele-dentistry',
        description: 'Tele-dentistry – Expanding remote diagnosis, consultation, and oral health education in underserved regions.'
    },
    {
        title: 'Nanotechnology In Dentistry',
        description: 'Nanotechnology In Dentistry – Introducing nanocomposites and nano-coatings for superior restorative outcomes.'
    }
];

const editorsData = [
    {
        name: 'Dr. Amelia Hart',
        degree: 'PhD in Dentistry',
        experience: '15 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/dentistry/Dr.-Amelia-Hart.webp"
    },
    {
        name: 'Dr. Jason Lee',
        degree: 'DDS, MS in Orthodontics',
        experience: '12 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-M.-Chen.webp"
    },
    {
        name: 'Dr. Emily Chen',
        degree: 'PhD in Prosthodontics',
        experience: '13 years of experience',
        manuscripts: '105+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cell-biology/Dr.-Emily-Chen.webp"
    }
];

export default function DentistrySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Dentistry */}
                 {/* SECTION 2: Applications of Dentistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Dental science is evolving rapidly, integrating innovations from regenerative medicine, biomaterials, and artificial intelligence. Pubrica's dental research support enables innovations in:
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Dentistry Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Researchers and clinicians utilize these advanced techniques to improve diagnostic accuracy, patient care outcomes, and clinical protocols across diverse dental specialties.
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
                            src="/images/subject-matter-experts/dentistry/Comprehensive-Research-Writing-and-Publication-Support-in-Dentistry.webp"
                            alt="Applications of Dentistry Research"
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
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/dentistry/Oral-Pathology-and-Microbiology.png"
                            alt="Journal of Dentistry Book Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            The Effect of Different White Spot Lesion Treatments on the Enamel Microhardness – An In Vitro Pilot Study
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Milanović M, Beloica M, Mandinić Z, Juloski J, Petrović M, Kosanović D, Todorović M, Dimitrijević M, Jakovljević A, Vorkapić M
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Dentistry Journal
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            MDPI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.1
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Dentistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Dentistry Editors
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
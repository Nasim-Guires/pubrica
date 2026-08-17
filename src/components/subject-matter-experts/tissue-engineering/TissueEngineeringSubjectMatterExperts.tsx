"use client";
import React from 'react';
import Image from 'next/image';
import { Briefcase, FileText } from 'lucide-react';

const trendsList = [
    {
        icon: '🖨️',
        text: 'Printing and making 3D Bioprinting using layers build of cells and/or materials to form new Printed Tissue Use and Organs.'
    },
    {
        icon: '🧬',
        text: 'Organoids and Microtissues (Mini Organ Models) for drug development, testing new medications, creating diseases to help test new treatments.'
    },
    {
        icon: '🔬',
        text: 'New stem cell advancements - Creating ways of taking stem cells from an individual and reprogramming them to enhance the growth of tissues.'
    },
    {
        icon: '🧪',
        text: 'Biomaterials Innovation - Developing advanced materials such as smart hydrogel and Nanomaterial to create a better performance in scaffold material.'
    },
    {
        icon: '🩸',
        text: 'Vascularization - Creating a vascular supply within the tissue to increase the longevity of the implanted tissue.'
    },
    {
        icon: '🩻',
        text: 'Customized Tissue Engineering - Using a patient\'s cells to develop a more effective therapy option.'
    },
    {
        icon: '💻',
        text: 'Artificial Intelligence Machine Learning - Using data-driven insight to create an improved tissue engineering process.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ayesha Patel',
        degree: 'PhD in Tissue Engineering',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/data-mining/Dr.-Mark-Robinson.webp"
    },
    {
        name: 'Dr. Mark Thompson',
        degree: 'PhD in Biomaterials Science',
        experience: '9 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/data-mining/Dr.-Mark-Robinson.webp"
    },
    {
        name: 'Dr. Emily Zhao',
        degree: 'PhD in Regenerative Medicine',
        experience: '7 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇦🇺',
        avatar: "/images/subject-matter-experts/neurology/Dr.-Laura-Stein.webp"
    }
];

export default function TissueEngineeringSubjectMatterExperts() {
    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Tissue Engineering Research (Exact Image Layout) */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Tissue Engineering Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Tissue engineering is revolutionizing the way we approach regenerative medicine, offering groundbreaking solutions for creating functional tissues and organs. Advancements like 3D bioprinting, stem cell innovations, and AI integration are shaping the future of healthcare and personalized treatments:
                    </p>
                </div>

                {/* Main Grid Layout matching the exact screenshot: List on Left, Image on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                    
                    {/* Left Side: Vertical List with Icons */}
                    <div className="lg:col-span-7 space-y-4">
                        {trendsList.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <span className="text-xl shrink-0 mt-0.5 text-[#0e3b32]">{item.icon}</span>
                                <p className="text-gray-700 text-sm sm:text-base leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-[#a3c9bd]/25">
                            <Image
                                src="/images/subject-matter-experts/tissue-engineering/Cell-Biology.webp"
                                alt="Tissue Engineering Research Lab"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                </div>

                <p className="text-gray-700 text-base sm:text-lg pt-2">
                    These trends are transforming tissue engineering, offering new opportunities for personalized healthcare.
                </p>
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
                            src="/images/subject-matter-experts/tissue-engineering/Materials-Science.webp"
                            alt="Journal of Tissue Engineering and Regenerative Medicine Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            The Chorioallantois Membrane as a Platform for Developing Vascularized Cell Microencapsulation Devices
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Murillo D. I. Bernardi, Sonny F. de Jong, Maarten B. Rookmaker, Andrej Shaykhet, Roel Deckers, Silvia M. Mihăilă, Rosalinde Masereeuw, Marianne C. Verhaar
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Tissue Engineering and Regenerative Medicine
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Wiley
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Tissue Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Tissue Engineering Editors
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
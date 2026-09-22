"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText, ChevronRight } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";

const emergingTrendsData = [
    {
        id: 'ar-vr',
        title: 'Augmented Reality (AR) and Virtual Reality (VR)',
        description:
            'Ongoing advances in AR and VR technologies are revolutionizing how we teach doctors, students entering the medical field, and provide healthcare services such as surgical procedures to patients through the creation of simulated environments that offer teachers, students, and patients an interactive experience.'
    },
    {
        id: 'personalized-medicine',
        title: 'Personalized Medicine',
        description:
            'An increasing number of healthcare providers are utilizing animated content to explain the unique aspects of a patient’s treatment plan and/or how gene therapy works.'
    },
    {
        id: 'ai-driven-animation',
        title: 'AI-Driven Animation',
        description:
            'AI is making it easier to create accurately animated data-driven medical content that can be used for research and educational purposes.'
    },
    {
        id: 'bioprinting',
        title: '3D Bioprinting and Molecular Visualizations',
        description:
            'Three-dimensional (3D) printings made from biopolymers or cellular materials are being used to visualize the latest biotechnologies and pharmaceutical products.'
    },
    {
        id: 'real-time-updates',
        title: 'Real-Time Animation Updates',
        description:
            'As newer technologies are developed in the field of real-time rendering of animated medical data, healthcare professionals will have the ability to continuously update their animated educational materials as more data is published in scientific journals and in the press.'
    }
];

const applicationsData = [
    {
        title: "",
        desc: "Medical Education: Utilizing the visual demonstration of complex biological processes, anatomy, and medical procedures, provides increased learning opportunities.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Medical-Education.webp",
    },
    {
        title: "",
        desc: "Patient Education: By providing clear and easy-to-understand visuals of diagnoses, treatment options, and surgical procedures, patients can more readily understand their condition.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Patient-Education.webp",
    },
    {
        title: "",
        desc: "Surgical Planning: Surgeons can visualize how to prepare for their next surgery by using visual aids of the anatomy involved as well as how to perform each step.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Surgical-Planning.webp",
    },
    {
        title: "",
        desc: "Pharmaceutical Marketing: Visually conveying drug mechanism action, clinical trial results, and therapeutic benefits to the public and healthcare professionals.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Pharmaceutical-Marketing.webp",
    },
    {
        title: "",
        desc: "Medical Device Demonstration: Presenting how medical devices function, offering healthcare providers and patients with the opportunity to learn about how they work.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Medical-Device-Demonstration.webp",
    },
    {
        title: "",
        desc: "Scientific Communication: A method for researchers to visually communicate the scientific concepts and results of their research in academic papers, conferences, and other publications.",
        iconSrc:
            "/images/subject-matter-experts/medical-animation/Scientific-Communication.webp",
    },
];

const areasOfStudyData = [
    { title: 'Molecular Biology' },
    { title: 'Disease Mechanisms' },
    { title: 'Medical Devices' },
    { title: 'Surgical Procedures' },
    { title: 'Medical Procedures' },
    { title: 'Gene Therapy' },
    { title: 'Pharmacology and Drug Mechanisms' },
    { title: 'Anatomy and Physiology' }
];

const editorsData = [
    {
        name: 'Dr. Emma Williams',
        degree: 'PhD in Medical Animation',
        experience: '12 years of experience',
        manuscripts: '200+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp"
    },
    {
        name: 'John Miller',
        degree: "Master's in medical Visualization",
        experience: '8 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/medical-animation/John-Miller.webp"
    },
    {
        name: 'Dr. Sophia Bennett',
        degree: 'PhD in Biomedical Visualization',
        experience: '4 years of experience',
        manuscripts: '80+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biomedical-imaging/Dr.-Evelyn-Carter-3.webp"
    }
];

export default function MedicalAnimationSections() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Medical Animation */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Medical Animation
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        New cutting-edge technologies, including the creation of 3D visualisations using real time rendering, and the ability to produce custom animations for individual users, are rapidly changing how we educate, research and practice medicine using animation:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-4 py-3 text-sm sm:text-base font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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

            {/* NEW SECTION: Applications of Medical Animation */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Applications of Medical Animation"
                    description="Medical Animation is applied in diverse sectors:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/medical-animation/Applications-of-Medical-Animation.webp"
                    imageAlt="Applications of Medical Animation"
                />
            </section>

            {/* SECTION 2: Areas of Study */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px] rounded-none overflow-hidden">
                {/* Left Side: Image with Dark Overlay */}
                <div className="lg:col-span-5 relative min-h-[300px] flex items-center p-8 sm:p-12 !rounded-none overflow-hidden">
                    <Image
                        src="/images/Medical-Animation.webp"
                        alt="Areas of Study"
                        fill
                        sizes="(max-width: 1024px) 100vw, 41vw"
                        className="object-cover !rounded-none"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                        priority
                    />

                    {/* Dark Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 !rounded-none z-10"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                    ></div>

                    {/* Text Overlay */}
                    <p className="relative z-20 text-white text-sm sm:text-base font-normal leading-relaxed max-w-md">
                        Pubrica&apos;s team of experts is equipped with the knowledge and experience
                        to assist you in all aspects of Meical Animation research, ensuring your
                        work is accurately represented and reaches the right audience effectively.
                    </p>
                </div>

                {/* Right Side: Dark Green Background with Header & Grid */}
                <div className="lg:col-span-7 bg-[#052b28] p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    {/* Section Header */}
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Areas of Study
                        </h2>

                        <div className="w-16 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Tag Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {areasOfStudyData.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-3 py-2.5 rounded-sm shadow-sm flex items-center space-x-2 text-xs font-semibold leading-snug"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#052b28] flex items-center justify-center shrink-0">
                                    <ChevronRight className="w-3 h-3 text-white stroke-[3]" />
                                </div>

                                <span>{area.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/medical-animation/sample-works-12-1.webp",
                    imageAlt: "Medical Science Educator Journal Cover",
                    paperTitle:
                        "Harnessing Data and Learning Analytics in the Era of AI: Reflections from Medical Education",
                    author: "Poh-Sun Goh, Mildred Lopez",
                    journalName: "Medical Science Educator",
                    publisher: "Springer Nature",
                    impactFactor: "1.8",
                }}
            />

            {/* SECTION 4: Our Expert Medical Animation Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Medical Animation Editors
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
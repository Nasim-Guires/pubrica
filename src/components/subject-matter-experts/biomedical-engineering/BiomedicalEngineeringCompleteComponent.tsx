"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Activity,
    FileText,
    Edit3,
    CheckCircle2,
    Wrench,
    BookOpen,
    HeartPulse,
    Cpu,
    Stethoscope,
    ShieldCheck,
    Award,
} from "lucide-react";
import CoreDisciplinesBiomedicalEngineering from "./CoreDisciplinesBiomedicalEngineering";

export default function BiomedicalEngineeringCompleteComponent() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const coreDisciplines = [
        {
            title: "Biomechanics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            desc: "Biomechanics applies mechanical engineering principles to biological systems. It helps analyse movement, tissue mechanics,",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            icon: Activity,
        },
        {
            title: "Biomaterials and Tissue Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            desc: "This discipline focuses on biocompatible materials used in implants, prosthetics, regenerative",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            icon: FileText,
        },
        {
            title: "Biomedical Imaging and Instrumentation",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            desc: "Innovations in MRI, CT, PET, ultrasound, and optical imaging rely heavily on engineering",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            icon: Edit3,
        },
        {
            title: "Medical Devices and Therapeutic Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: "From ventilators and infusion pumps to surgical robots and neuroprosthetics, medical device",
            img: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            icon: Cpu,
        },
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            desc: "This field involves analysing biological datasets, developing predictive models, and supporting",
            img: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            icon: Stethoscope,
        },
        {
            title: "Rehabilitation Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            desc: "It develops technologies such as exoskeletons, prosthetics, communication tools, and therapeutic robots to enhance",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Engineering.webp",
            icon: HeartPulse,
        },
    ];

    const researchServices = [
        {
            title: "Research Services",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            desc: "Guidance on project planning, execution, and data analysis.",
            img: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            img: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            icon: Edit3,
        },
        {
            title: "Peer-Reviewing Services",
            iconSrc: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            img: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: CheckCircle2,
        },
        {
            title: "Publication Support",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            img: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: Wrench,
        },
        {
            title: "Scientific Writing",
            iconSrc: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            img: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
        },
        {
            title: "Journal Selection",
            iconSrc: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            desc: "Strategic journal selection to maximize publication success.",
            img: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Activity,
        },
    ];

    const trends = [
        {
            title: "AI-Driven Healthcare Technologies",
            desc: "Artificial Intelligence enhances diagnostics, imaging analysis, personalized care, and predictive modelling. Pubrica supports AI-based biomedical engineering research writing for clinical applications.",
        },
        {
            title: "Wearable Devices and Remote Monitoring",
            desc: "Smart sensors and IoT-enabled technologies enable real-time monitoring and proactive healthcare management. Pubrica assists researchers working on sensor design, data analysis, and wearable health studies.",
        },
        {
            title: "3D Bioprinting and Regenerative Medicine",
            desc: "Advances in tissue engineering enable customised tissues, scaffolds, and organ structures. We provide editorial and publication support for cutting-edge regenerative medicine studies.",
        },
        {
            title: "Robotics and Automation in Surgery",
            desc: "Surgical robots enhance precision, reduce invasiveness, and improve patient outcomes. Robotic exoskeletons support rehabilitation and assist mobility.",
        },
        {
            title: "Precision Medicine and Genomic Engineering",
            desc: "Biomedical engineers contribute to technologies that analyse genetic information, develop personalised treatment strategies, and improve drug delivery mechanisms.",
        },
        {
            title: "Nanobiotechnology",
            desc: "Nanocarriers, nano-diagnostics, and nano-enabled drug delivery systems continue to redefine therapeutic efficiency.",
        },
    ];

    const applications = [
        {
            title: "Diagnostic and Imaging Solutions",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Diagnostic-and-Imaging-Solutions.webp",
            desc: "Biomedical innovations enable accurate diagnostics through imaging systems, biosensors, and point-of-care devices.",
            icon: Activity,
        },
        {
            title: "Therapeutic and Surgical Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: "From implants to sophisticated robotic surgical systems, therapeutic technologies are central to improving clinical outcomes.",
            icon: Cpu,
        },
        {
            title: "Healthcare Technology and Equipment Management",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Healthcare-Technology-and-Equipment-Management.webp",
            desc: "Biomedical engineers ensure safe operation, calibration, and optimisation of hospital equipment.",
            icon: Stethoscope,
        },
        {
            title: "Drug Delivery and Biopharmaceutical Research",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Drug-Delivery-and-Biopharmaceutical-Research.webp",
            desc: "Biomedical engineering supports targeted therapies, controlled drug release systems, and advanced bioprocessing techniques.",
            icon: HeartPulse,
        },
        {
            title: "Assistive and Rehabilitation Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Assistive-and-Rehabilitation-Technologies.webp",
            desc: "Prosthetics, orthotics, exoskeletons, and brain-computer interfaces significantly enhance patient independence.",
            icon: ShieldCheck,
        },
        {
            title: "Public Health and Predictive Healthcare Tools",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Public-Health-and-Predictive-Healthcare-Tools.webp",
            desc: "Wearables, mobile health apps, and AI-based tools help track health trends and support preventive care.",
            icon: Award,
        },
    ];

    const editors = [
        {
            name: "Dr. Aidan Matthews",
            role: "PhD in Biomedical Engineering",
            experience: "12 years of experience",
            manuscripts: "150+ manuscripts edited",
            img: "/images/subject-matter-experts/biomedical-engineering/Dr.-Aidan-Matthews-1.webp",
        },
        {
            name: "Dr. Sophia Raman",
            role: "PhD in Biomedical Engineering",
            experience: "10 years of experience",
            manuscripts: "145+ manuscripts edited",
            img: "/images/subject-matter-experts/biomedical-engineering/Dr.-Sophia-Raman-1.webp",
        },
        {
            name: "Dr. Ethan Varghese",
            role: "PhD in Biomedical Engineering",
            experience: "13 years of experience",
            manuscripts: "170+ manuscripts edited",
            img: "/images/subject-matter-experts/biomedical-engineering/Dr.-Ethan-Varghese-1.webp",
        },
    ];

    return (
        <div className="font-sans text-gray-800 bg-white py-12 px-4 space-y-16">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* SECTION 1: Our Core Disciplines In Biomedical Engineering */}
                <CoreDisciplinesBiomedicalEngineering />

                {/* SECTION 2: Our Expertise in Biomedical Engineering Research and Publication */}
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Our Expertise in Biomedical Engineering Research and Publication
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Pubrica is globally recognised for delivering accurate, high-quality, and customised support for biomedical engineering research and publication. We support scholars, PhD candidates, universities, R&D teams, and clinical researchers with end-to-end scientific assistance tailored to biomedical engineering domains:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchServices.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative h-44 w-full overflow-hidden">
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="relative p-5 pt-8 flex-1 flex flex-col items-center text-center bg-white">
                                        <div className="absolute -top-7 bg-white p-3 rounded-full shadow-md border border-gray-100 transition-all duration-300 group-hover:bg-[#0d3630] group-hover:text-white group-hover:border-[#0d3630]">
                                            {service.iconSrc ? (
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image
                                                        src={service.iconSrc}
                                                        alt=""
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </span>
                                            ) : (
                                                <Icon className="w-5 h-5 text-[#0d3630] transition-colors duration-300 group-hover:text-white" />
                                            )}
                                        </div>

                                        <h3 className="font-bold text-[#0d3630] text-sm mb-1 transition-colors duration-300 group-hover:text-emerald-800">
                                            {service.title}
                                        </h3>

                                        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2">
                                            <div className="overflow-hidden">
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 3: Emerging Trends in Biomedical Engineering */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Emerging Trends in Biomedical Engineering
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Biomedical Engineering is rapidly evolving, driven by technological breakthroughs and global healthcare needs. Some emerging trends include:
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold">
                            {trends.map((trend, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`py-3 px-2 transition-all border-r border-b sm:border-b-0 border-gray-200 last:border-r-0 ${activeTrendTab === idx
                                        ? "bg-[#0d3630] text-white shadow-inner"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {trend.title}
                                </button>
                            ))}
                        </div>

                        <div className="p-6 md:p-8 space-y-2 bg-white min-h-[120px] flex flex-col justify-center">
                            <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
                                {trends[activeTrendTab].title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {trends[activeTrendTab].desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* SECTION 4: Applications of Biomedical Engineering */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Applications of Biomedical Engineering
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Biomedical engineering supports a wide range of real-world applications that directly impact clinical practice, healthcare delivery, and medical research:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            {applications.map((app, idx) => {
                                const Icon = app.icon;
                                return (
                                    <div key={idx} className="flex items-start gap-3.5">
                                        <div className="p-2 bg-[#0d3630]/10 text-[#0d3630] rounded-lg mt-0.5 shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0d3630] text-xs md:text-sm">
                                                {app.title}:
                                            </h4>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {app.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="lg:col-span-5 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/images/subject-matter-experts/algorithm/Editing-Proofreading.png"
                                alt="Biomedical Laboratory Research"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* SECTION 5: Where Our Authors Publish */}
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Where Our Authors Publish
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-5 relative h-56 w-full rounded-md overflow-hidden bg-[#0d3630] flex items-center justify-center p-4">
                            <div className="text-white text-center space-y-2">
                                <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-1 rounded">
                                    Journal Showcase
                                </span>
                                <p className="font-serif font-bold text-sm md:text-base leading-snug">
                                    Nature Biomedical Engineering
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-7 space-y-3 text-xs md:text-sm">
                            <p>
                                <strong className="text-[#0d3630]">Paper Title:</strong> Targeting and tracking mRNA lipid nanoparticles at the particle, transcript, and protein level
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-[#0d3630]">Author:</strong> Kang, D.D., Marks, A., Maria-Polch, J. et al.
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-[#0d3630]">Journal Name:</strong> Nature Biomedical Engineering
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-[#0d3630]">Publisher:</strong> Springer Science and Business Media LLC
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-[#0d3630]">Impact factor:</strong> 29.2
                            </p>
                        </div>
                    </div>
                </div>

                {/* SECTION 6: Our Expert Biomedical Engineering Editors */}
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Our Expert Biomedical Engineering Editors
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {editors.map((editor, idx) => (
                            <div
                                key={idx}
                                className="bg-teal-50/50 border border-teal-100 rounded-xl p-5 flex flex-col justify-between shadow-sm space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-teal-200">
                                        <Image
                                            src={editor.img}
                                            alt={editor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0d3630] text-sm">
                                            {editor.name}
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-tight">
                                            {editor.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-teal-200/60 pt-3 flex justify-between text-xs text-gray-700 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Award className="w-3.5 h-3.5 text-[#0d3630]" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div>
                                        <span>{editor.manuscripts}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
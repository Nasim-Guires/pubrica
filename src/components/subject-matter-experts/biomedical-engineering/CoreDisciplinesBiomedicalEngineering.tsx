"use client";

import Image from "next/image";
import React from "react";
import {
    Activity,
    Layers,
    Scan,
    Cpu,
    Stethoscope,
    HeartPulse,
    ChevronDown,
    Settings,
    Shield,
    Database,
    LineChart,
    Network,
    Leaf,
} from "lucide-react";

export default function CoreDisciplinesBiomedicalEngineering() {
    const disciplines = [
        {
            title: "Biomechanics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            description:
                "Biomechanics applies mechanical engineering principles to biological systems. It helps analyse movement, tissue mechanics, orthopaedic implant performance, and sports injury prevention. Our biomechanics research writing and editing services support detailed modelling, gait analysis research, and computational simulations.",
            category: "Movement & Mechanics",
            icon: Activity,
        },
        {
            title: "Biomaterials and Tissue Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            description:
                "This discipline focuses on biocompatible materials used in implants, prosthetics, regenerative medicine, and drug delivery systems. Pubrica’s biomaterials manuscript support ensures strong scientific clarity, regulatory alignment, and impactful presentation of experimental results.",
            category: "Materials & Scaffolds",
            icon: Layers,
        },
        {
            title: "Biomedical Imaging and Instrumentation",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            description:
                "Innovations in MRI, CT, PET, ultrasound, and optical imaging rely heavily on engineering precision. Our Biomedical Engineering editing services help researchers refine complex imaging studies, segmentation algorithms, and diagnostic research papers for high-impact journals.",
            category: "Diagnostic Systems",
            icon: Scan,
        },
        {
            title: "Medical Devices and Therapeutic Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            description:
                "From ventilators and infusion pumps to surgical robots and neuroprosthetics, medical device innovation demands rigorous documentation and research accuracy. Pubrica supports medical device research writing, regulatory-focused documentation, and publication support for biomedical engineering.",
            category: "Devices & Robotics",
            icon: Cpu,
        },
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            description:
                "This field involves analysing biological datasets, developing predictive models, and supporting precision medicine. Our experts in computational Biomedical Engineering support with algorithm documentation, modelling papers, and AI-based diagnostic research.",
            category: "Computational Analysis",
            icon: Database,
        },
        {
            title: "Rehabilitation Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            description:
                "It develops technologies such as exoskeletons, prosthetics, communication tools, and therapeutic robots to enhance mobility and independence. Pubrica provides specialised writing, editing, and publication support for rehabilitation-focused studies.",
            category: "Assistive Technology",
            icon: HeartPulse,
        },
    ];

    return (
        <section className="py-16 px-4 bg-white font-sans">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d3630] tracking-tight">
                        Our Core Disciplines In Biomedical Engineering
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        At Pubrica, we provide comprehensive expertise in the multifaceted field of biomedical engineering, empowering researchers, clinicians, and industry professionals to translate technological innovations into impactful healthcare solutions. Our services span across key disciplines of biomedical engineering, ensuring a holistic approach to research, development, and publication support.
                    </p>
                </div>

                {/* Disciplines Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disciplines.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] "
                            >
                                {/* Top Corner Accent Gradient Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d3630] to-[#145347] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="space-y-5">
                                    {/* Header with Title and Icon */}
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-lg font-bold text-[#b91c1c] group-hover:text-[#991b1b] transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#0d3630]/5 group-hover:border-[#0d3630]/20 transition-all">
                                            {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={20} height={20} className="object-contain w-5 h-5 shrink-0" />
                                        ) : (
                                            <IconComponent className="w-5 h-5 text-[#0d3630]" />
                                        )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Footer category and dropdown indicator */}
                                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0d3630]">
                                    <span>{item.category}</span>
                                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#0d3630] group-hover:text-white transition-all">
                                        <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from "react";
import {
    Activity,
    Layers,
    Scan,
    Cpu,
    HeartPulse,
    Database,
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
        <section className="py-7 px-4 bg-white font-sans">
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
                <SmeCoreAreasGrid items={disciplines} />
            </div>
        </section>
    );
}
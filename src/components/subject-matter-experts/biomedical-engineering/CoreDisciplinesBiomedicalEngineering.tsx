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
import Link from "next/link";
import CoreAreasSection from "@/components/common/CoreAreasSection";

export default function CoreDisciplinesBiomedicalEngineering() {
    const disciplines = [
        {
            title: "Biomechanics",
            highlight: "Biomechanics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            desc: (
                <>
                    Biomechanics applies mechanical engineering principles to biological systems. It helps analyse movement, tissue mechanics, orthopaedic implant performance, and sports injury prevention. Our{" "}
                    <Link href="/insights/sample-work/management-of-neurogenic-shock-outside-of-the-hospital/" className="text-blue-600">
                        biomechanics research writing and editing services
                    </Link>{" "}
                    support detailed modelling, gait analysis research, and computational simulations.
                </>
            ),
            icon: Activity,
        },
        {
            title: "Biomaterials and Tissue Engineering",
            highlight: "Biomaterials and Tissue",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            desc: (
                <>
                    This discipline focuses on biocompatible materials used in implants, prosthetics, regenerative medicine, and drug delivery systems. Pubrica’s{" "}
                    <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600">
                        biomaterials manuscript support
                    </Link>{" "}
                    ensures strong scientific clarity, regulatory alignment, and impactful presentation of experimental results.
                </>
            ),
            icon: Layers,
        },
        {
            title: "Biomedical Imaging and Instrumentation",
            highlight: "Biomedical Imaging",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            desc: (
                <>
                    Innovations in MRI, CT, PET, ultrasound, and optical imaging rely heavily on engineering precision. Our Biomedical Engineering editing services
                    help researchers refine complex imaging studies, segmentation algorithms, and diagnostic research papers for high-impact journals.
                </>
            ),
            icon: Scan,
        },
        {
            title: "Medical Devices and Therapeutic Technologies",
            highlight: "Medical Devices",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: (
                <>
                    From ventilators and infusion pumps to surgical robots and neuroprosthetics, medical device innovation demands rigorous documentation and research accuracy. Pubrica supports{" "}
                    <Link href="/industries/medical-device/" className="text-blue-600 hover:underline">
                        medical device research writing
                    </Link>
                    , regulatory-focused documentation, and <Link href="/services/publication-support/" className="text-blue-600">publication support for biomedical engineering.</Link>
                </>
            ),
            icon: Cpu,
        },
        {
            title: "Bioinformatics and Computational Biology",
            highlight: "Bioinformatics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            desc: (
                <>
                    This field involves analysing biological datasets, developing predictive models, and supporting precision medicine. Our experts in computational Biomedical Engineering
                    support with algorithm documentation, modelling papers, and AI-based diagnostic research.
                </>
            ),
            icon: Database,
        },
        {
            title: "Rehabilitation Engineering",
            highlight: "Rehabilitation",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            desc: (
                <>
                    It develops technologies such as exoskeletons, prosthetics, communication tools, and therapeutic robots to enhance mobility and independence. Pubrica provides{" "}
                        specialised writing, editing, and publication support
                    for rehabilitation-focused studies.
                </>
            ),
            icon: HeartPulse,
        },
    ];

    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CoreAreasSection
                    title="Our Core Disciplines In Biomedical Engineering"
                    description="At Pubrica, we provide comprehensive expertise in the multifaceted field of biomedical engineering, empowering researchers, clinicians, and industry professionals to translate technological innovations into impactful healthcare solutions. Our services span across key disciplines of biomedical engineering, ensuring a holistic approach to research, development, and publication support."
                    items={disciplines}
                />
            </div>
        </div>
    );
}
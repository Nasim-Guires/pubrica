"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "Single-Molecule Techniques",
        title: "Single-Molecule Techniques",
        description:
            "Advanced microscopy and spectroscopy methods allow researchers to observe individual biomolecules in real time, revealing previously inaccessible mechanistic details",
    },
    {
        id: "quantum-materials",
        title: "Cryo-Electron Microscopy (Cryo-EM)",
        description:
            "Revolutionizing structural biology, Cryo-EM enables high-resolution visualization of proteins and complexes without crystallization.",
    },
    {
        id: "ai-materials",
        title: "Integrative Computational Models",
        description:
            "Combining AI, machine learning, and molecular simulations accelerates the prediction of protein structures, drug interactions, and cellular responses.",
    },
    {
        id: "sustainable-materials",
        title: "Optogenetics and Mechanobiology",
        description:
            "Techniques that control and measure biological processes with light or mechanical forces are providing novel insights into cell signaling, development, and disease mechanisms.",
    },
    {
        id: "smart-materials",
        title: "Biomedical Imaging and Spectroscopy",
        description:
            "Innovations in imaging modalities, including super-resolution microscopy and functional MRI, continue to deepen our understanding of complex biological systems.",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Emily Harrison",
        degree: "PhD in Biophysics",
        experience: "16 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Emily-Harrison.webp",
    },
    {
        name: "Dr. Priya Ramanathan",
        degree: "PhD in Computational Biophysics",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Priya-Ramanathan.webp",
    },
    {
        name: "Dr. Alexander Weiss",
        degree: "PhD in Biological Physics",
        experience: "18 years of experience",
        manuscripts: "230+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biophysics/sample-works-10.webp",
    imageAlt: "Advanced Materials Journal Cover",
    paperTitle:
        "Molecular origins of high viscosity in concentrated solutions of monoclonal antibodies",
    author:
        "Valiya Parambathu, A., Rosenman, D. J., Yadav, S., & Lenhoff, A. M",
    publisher: "Cell Press, Elsevier",
    journalName: "Biophysical Journal",
    impactFactor: "3.1",
};

export default function BioPhysicsScienceSections() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Material Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Biophysics"
                    description="The field of biophysics is rapidly evolving, driven by technological innovations and interdisciplinary collaborations. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">

                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={whereAuthorsPublishData}
                />
            </section>

            {/* SECTION 3: Our Expert Material Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biophysics Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
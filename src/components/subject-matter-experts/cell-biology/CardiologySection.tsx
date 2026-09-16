"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    Microscope,
    Dna,
    Syringe,
    FlaskConical,
    Stethoscope,
    Activity
} from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from '@/components/common/EmergingTrendsSection';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish, { AuthorPublicationData } from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

// Tabbed Data for Emerging Research Trends in Cell Biology
const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "single-cell-omics",
        title: "Single-Cell Omics",
        description:
            "High-throughput sequencing and analysis of individual cells reveal cellular heterogeneity and lineage relationships.",
    },
    {
        id: "organoid-technology",
        title: "Organoid Technology",
        description:
            "Development of 3D cell cultures that mimic organ structure and function, facilitating disease modeling and drug screening.",
    },
    {
        id: "systems-cell-biology",
        title: "Systems Cell Biology",
        description:
            "Integrating computational modeling and bioinformatics to understand complex cellular networks.",
    },
    {
        id: "cell-mechanics",
        title: "Cell Mechanics and Biophysics",
        description:
            "Investigating how physical forces and mechanical properties influence cellular behavior.",
    },
    {
        id: "ai-cell-imaging",
        title: "Artificial Intelligence (AI) in Cell Imaging",
        description:
            "Using AI-based algorithms for automated image analysis, pattern recognition, and predictive modeling.",
    },
    {
        id: "synthetic-biology",
        title: "Synthetic Biology",
        description:
            "Engineering cells to perform novel functions for therapeutic and industrial applications.",
    },
];

// Applications List Data (2-Column Icon + Text layout matching screenshot)
const applicationsData = [
    {
        icon: Stethoscope,
        title: "Disease Mechanism Elucidation",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Interventional-Car-diology.png",
        desc: "Understanding how cellular dysfunction leads to diseases such as cancer, neurodegenerative disorders, diabetes, and cardiovascular conditions.",
    },
    {
        icon: Microscope,
        title: "Drug Discovery and Development",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Electrophysiology.png",
        desc: "Utilizing cellular assays and models to identify drug targets, assess efficacy, and predict toxicity.",
    },
    {
        icon: Activity,
        title: "Regenerative Medicine",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Heart-Failure-and-Transplantation.png",
        desc: "Harnessing stem cell biology to regenerate damaged tissues and organs.",
    },
    {
        icon: Dna,
        title: "Genetic Engineering",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Cardiac-Surgery.png",
        desc: "Applying cellular-level insights for gene editing using CRISPR-Cas9 and other molecular tools.",
    },
    {
        icon: Syringe,
        title: "Vaccine Development",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Paediatric-Cardiology.png",
        desc: "Exploring cellular immune responses to design effective vaccines against infectious diseases.",
    },
    {
        icon: FlaskConical,
        title: "Tissue Engineering",
        iconSrc:
            "/images/subject-matter-experts/cardiology/Cardiovascular-Imaging.png",
        desc: "Integrating cell biology with materials science to develop biomimetic scaffolds for tissue reconstruction.",
    },
];

// Cell Biology Editors Data
// const editorsData = [
//     {
//         name: 'Dr. Sarah Mitchell',
//         degree: 'PhD in Cell Biology',
//         experience: '12 years of experience',
//         manuscripts: '120+ manuscripts edited',
//         countryFlag: '🇬🇧',
//         avatar: '/images/subject-matter-experts/cardiology/Empowering-Research-Excellence-in-Cardiology-through-Expert-Guidance.webp'
//     },
//     {
//         name: 'Dr. Emily Carter',
//         degree: 'PhD in Developmental Cell Biology',
//         experience: '10 years of experience',
//         manuscripts: '95+ manuscripts edited',
//         countryFlag: '🇺🇸',
//         avatar: "/images/subject-matter-experts/cardiology/Dr.-Emily-Carter.webp"
//     },
//     {
//         name: 'Dr. Jonathan Reed',
//         degree: 'PhD in Molecular and Cellular Physiology',
//         experience: '15 years of experience',
//         manuscripts: '140+ manuscripts edited',
//         countryFlag: '🇺🇸',
//         avatar: '/images/subject-matter-experts/cardiology/Dr.-Samuel-Hart.webp'
//     }
// ];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/cell-biology/sample-works-6.webp",
    imageAlt: "Nature Cell Biology Journal Cover",
    paperTitle:
        "Cholesterol sensing by the SCAP-FAM134B complex regulates ER-phagy and STING innate immunity",
    author: "Li, B., Zhou, D., Wang, X. et al",
    publisher: "Nature Research",
    journalName: "Nature Cell Biology",
    impactFactor: "19.1 (2025)",
};

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sarah Mitchell",
        degree: "PhD in Cell Biology",
        experience: "12 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/cell-biology/Dr.-Sarah-Mitchell.webp",
    },
    {
        name: "Dr. Emily Carter",
        degree: "PhD in Developmental Cell Biology",
        experience: "10 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cell-biology/Dr.-Emily-Carter.webp",
    },
    {
        name: "Dr. Jonathan Reed",
        degree: "PhD in Molecular and Cellular Physiology",
        experience: "15 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cell-biology/Dr.-Jonathan-Reed.webp",
    },
];


export default function CardiologySection() {
    // Active Tab State for Emerging Research Trends in Cell Biology
    const [activeTab, setActiveTab] = useState('single-cell-omics');

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cell Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Research Trends in Cell Biology"
                    description="With the advent of advanced tools and technologies, Cell Biology is transforming precision and integration. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Cell Biology Research (Exact Match Design) */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Cell Biology Research"
                    description="The applications of Cell Biology extend across medical, pharmaceutical, and biotechnological industries. Some notable areas include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/cell-biology/Applications-of-Cell-Biology-Research.webp"
                    imageAlt="Applications of Cell Biology Research"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert Cell Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Cell Biology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "precision-medicine",
        title: "Precision Medicine",
        description:
            "Using Genetic Information to Customize Treatment Choices and Improve Treatment Response.",
    },
    {
        id: "synthetic-biology",
        title: "Synthetic Biology",
        description:
            "Engineering Biological Systems to Develop Biobased Products.",
    },
    {
        id: "nanotechnology",
        title: "Nanotechnology",
        description:
            "Researching nanomaterials for medical and energy-related applications.",
    },
    {
        id: "gene-therapy",
        title: "Gene Therapy",
        description:
            "Precision Gene Editing (CRISPR) is being utilized for Health and Agricultural applications.",
    },
    {
        id: "ai-in-drug-discovery",
        title: "Artificial Intelligence (AI) in Drug Discovery",
        description:
            "Utilizing AI in the Discovery of New Drugs and Molecular Design.",
    },
    {
        id: "computational-modelling",
        title: "Computational Modelling",
        description:
            "Creating Complex Simulations and Analyses of Molecular Behaviour.",
    },
    {
        id: "environmental-solutions",
        title: "Environmental Solutions",
        description:
            "Developing Molecular Solutions to tackle Environmental Challenges.",
    },
    {
        id: "quantum-computing",
        title: "Quantum Computing",
        description:
            "Using Quantum Technologies to Enhance Molecular Simulations.",
    },
];


const applicationsData = [
    {
        title: "Materials",
        desc: "Different types of smart materials and specialized polymers",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Materials.webp",
    },
    {
        title: "Biotechnology",
        desc: "Engineering organisms, gene-editing techniques, (e.g. CRISPR).",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Biotechnology-1.webp",
    },
    {
        title: "Quantum Technologies",
        desc: "Development of quantum dots and quantum computing materials.",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Quantum-Technologies.webp",
    },
    {
        title: "Energy",
        desc: "Improved battery technologies and improved solar technologies (e.g. solar cells)",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Energy.webp",
    },
    {
        title: "Environment",
        desc: "Actions taken to control pollution and to capture carbon dioxide",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Environment.webp",
    },
    {
        title: "Sensors",
        desc: "Detection and measurement of specific types of molecules to monitor human health and the environment.",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Sensors.webp",
    },
    {
        title: "Artificial Intelligence",
        desc: "Molecular data storage/coding and drug discovery processes that are driven by artificial intelligence.",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Artificial-Intelligence.webp",
    },
    {
        title: "Robotics",
        desc: "The use of molecular motors for performing jobs at the nanoscale.",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Robotics.webp",
    },
    {
        title: "Food Engineering",
        desc: "crops to be resistant to disease and the production of synthetic foods.",
        iconSrc:
            "/images/subject-matter-experts/molecular-engineering/Food.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Evelyn Carter",
        degree: "PhD in Biomolecular Engineering",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/medical-animation/John-Miller.webp",
    },
    {
        name: "Dr. Maya Chen",
        degree: "PhD in Chemical & Biomolecular Engineering",
        experience: "10 years of experience",
        manuscripts: "145+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp",
    },
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Biomolecular Engineering",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/environmental-science/Dr.-Michael-Taylor.webp",
    },
];

export default function MolecularEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Molecular Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Molecular Engineering"
                    description="Trends in Health Care, Biotechnology, and Sustainability through Cutting-Edge Molecular Engineering."
                    trends={emergingTrendsData}
                    footerText=""
                />
                <p>All these trends are Changing the Way We Approach Healthcare, Biotechnology, and Sustainability by Utilizing Cutting Edge Molecular Engineering.</p>
            </section>

            {/* SECTION: Applications of Molecular Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Molecular Engineering"
                    description="Molecular engineering is an interdisciplinary field that involves designing and manipulating molecules to create new materials, devices, and systems with specific functions. It applies principles from chemistry, physics, biology, and engineering to control molecular properties at the atomic and molecular levels. Here are some of its key applications:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/molecular-engineering/Applications-of-Molecular-Engineering.webp"
                    imageAlt="Applications of Molecular Engineering"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/molecular-engineering/sample-works-13.webp",
                    imageAlt: "Journal of Cardiovascular Development and Disease Cover",
                    paperTitle:
                        "Areca Plant Extracts as a Green Corrosion Inhibitor of Carbon Steel Metal in 3 M Hydrochloric Acid: Gasometric, Colorimetry and Atomic Absorption Spectroscopy Views",
                    author: "Narasimha Raghavendra",
                    journalName: "Journal of Cardiovascular Development and Disease",
                    publisher: "World Scientific Publishing Co. Pte. Ltd.",
                    impactFactor: "1.0",
                }}
            />

            {/* SECTION: Our Expert Molecular Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Molecular Engineering Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
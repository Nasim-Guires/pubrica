"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
    Briefcase,
    FileText,
    Rocket,
    Zap,
    Cpu,
    HeartPulse,
    Car,
    Factory,
    Leaf
} from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "additive-manufacturing",
        title: "Additive Manufacturing 3D Printing",
        description:
            "Custom-made ceramic components with intricate shapes and minimal material waste.",
    },
    {
        id: "nanostructured-ceramics",
        title: "Nanostructured Functional Ceramics",
        description:
            "The ability to improve mechanical, thermal and electrical performance of ceramics by creating a material that has been altered at the nanometre scale.",
    },
    {
        id: "high-temperature-materials",
        title: "High Temperature Heat Resistant Materials",
        description:
            "New and Improved Ceramics with Innovative Employment in Aerospace, Energy and Industrial Markets.",
    },
    {
        id: "bio-ceramics",
        title: "Bio-Ceramics Biomedical Applications",
        description:
            "New Opportunities for Developing Implants, Prosthetics and Tissue Engineering Materials.",
    },
    {
        id: "computational-models",
        title: "Computational Predictive Simulation Models",
        description:
            "The Use of Simulations to Analyze and Optimize Ceramic Microstructure, Performance and Processes.",
    },
    {
        id: "eco-friendly-processes",
        title: "Eco-Friendly and Sustainable Manufacturing Processes",
        description:
            "Development of Processors and Machines That Are Designed to Minimize Energy Usage and Recyclability of Ceramic Materials.",
    },
    {
        id: "smart-multifunctional-ceramics",
        title: "Smart Multifunctional Ceramics",
        description:
            "Developing New Applications for Ceramics That Include Developing Sensor Devices, Actuator Devices and Self-Healing Ceramic Materials.",
    },
];

const applicationsData = [
    {
        title: "Aerospace and Defense",
        desc: "heat resistant components, thermal barrier materials, and lightweight structural components.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Materials-Design-Development.webp",
        icon: Rocket,
    },
    {
        title: "Energy and Power",
        desc: "fuel cells, batteries, solar panels, and nuclear reactors.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Processing-Fabrication-Engineering.webp",
        icon: Zap,
    },
    {
        title: "Electrical and Electronics",
        desc: "capacitors, insulators, semiconductors, and sensors.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Microstructural-analysis-and-characterization.webp",
        icon: Cpu,
    },
    {
        title: "Health and Biomedical",
        desc: "implants, prosthetics, dental ceramics, and bioactive ceramics.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Mechanical-Thermal-Properties.webp",
        icon: HeartPulse,
    },
    {
        title: "Automobile and Transportation",
        desc: "engine parts, wear-resistant coatings for brakes.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Electrical-Functional-Ceramics.webp",
        icon: Car,
    },
    {
        title: "Industrial Manufacturing",
        desc: "cutting tools, select refractory materials, and various chemical processing equipment.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Computational-Ceramic-Engineering.webp",
        icon: Factory,
    },
    {
        title: "Environmental and Sustainable Applications",
        desc: "ceramic filters, environmental catalysts, and environmental ceramic materials.",
        iconSrc:
            "/images/subject-matter-experts/ceramic-engineering/Environmental-and-Sustainable-Applications.webp",
        icon: Leaf,
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Rajesh Kumar",
        degree: "PhD in Ceramic Engineering",
        experience: "15 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/animal-science/warvien.png",
    },
    {
        name: "Dr. Priya Desai",
        degree: "PhD in Materials & Ceramic Engineering",
        experience: "10 years of experience",
        manuscripts: "145+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp",
    },
    {
        name: "Dr. Michael Thompson",
        degree: "PhD in Advanced Ceramics & Engineering",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/ceramic-engineering/sample-works-12.webp",
    imageAlt: "Ceramic Science and Engineering Cover",
    paperTitle: "4 – Bio ceramics: materials, properties, and applications",
    author: "Wei Cui, Lei Cao, Xing Zhang",
    publisher: "Elsevier",
    journalName: "Ceramic Science and Engineering",
    impactFactor: "1.2",
};

export default function CeramicEngineeringSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Ceramic Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Ceramic Engineering"
                    description="The field of Ceramic Engineering is ever evolving, as new materials develop at an increasingly rapid pace due to advances in materials science and manufacturing technologies, as well as improvements in computational tools."
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Ceramic Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Ceramic Engineering"
                    description="Ceramic Engineering serves diverse industries because of the special characteristics of ceramic materials (example: high temperature resistance, strength, and insulation). The major applications of ceramic materials include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/ceramic-engineering/Applications-of-Ceramic-Engineering.webp"
                    imageAlt="Applications of Ceramic Engineering"

                />
                <p>Ceramic Engineering supports innovation and durability in a variety of high-performance applications across a wide range of industries.</p>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />

            {/* SECTION 4: Our Expert Ceramic Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Ceramic Engineering Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}


"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, Cpu, BookOpen, Layers, ShieldCheck, Zap } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from '@/components/common/EmergingTrendsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "nanomedicine-targeted-delivery",
        title: "Nanomedicine and Targeted Delivery of Drugs",
        description:
            "Using nanoparticle-based systems will enable precise drug delivery, improved therapeutic effectiveness, and fewer adverse effects on patients.",
    },
    {
        id: "nanoelectronics-quantum-technology",
        title: "Nanoelectronics and Quantum Technology",
        description:
            "The new generation of nanoscale electronic and quantum technologies is paving the way for advancements in the fields of computing, telecommunications, and sensors.",
    },
    {
        id: "nanoengineered-materials-functional-coatings",
        title: "Nanoengineered Materials Functional Coatings",
        description:
            "Applying engineered nanomaterials will create stronger, lighter, less-costly-to-manufacture materials for use in energy, building, and manufacturing.",
    },
    {
        id: "nano-sensors-diagnostic-devices",
        title: "Nano sensors and Diagnostic Devices",
        description:
            "Nanoscale sensors will offer significant advantages in the medical diagnostics, environmental monitoring, and industrial applications by being able to detect small amounts of chemicals with speed and accuracy.",
    },
    {
        id: "sustainable-environmentally-friendly-nanotechnology",
        title: "Sustainable & Environmentally Friendly Nanotechnology",
        description:
            "Advancements in nanotechnology will create environmentally sustainable solutions to address pollution, provide purified water or create renewable energy sources that will help provide a cleaner planet.",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Verma",
        degree: "PhD in Nanomedicine",
        experience: "12 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/nanotechnology/Dr.-Ananya-Verma.webp",
    },
    {
        name: "Dr. Michael Thompson",
        degree: "PhD in Nanoengineering",
        experience: "16 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
    },
    {
        name: "Dr. Sofia Martinez",
        degree: "PhD in Nanomaterials",
        experience: "14 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/nanotechnology/Dr.-Sofia-Martinez.webp",
    },
];

export default function NanotechnologySections() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Nanotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Nanotechnology"
                    description="At Pubrica Key trends include nanoparticle-based drug delivery, nano sensors for diagnostics, advanced nanomaterials for energy, quantum devices, and sustainable nanotechnology for environmental solutions."
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/nanotechnology/sample-works-11-8.webp",
                    imageAlt: "Nature Nanotechnology Journal Cover",
                    paperTitle:
                        "Machine perception liquid biopsy identifies brain tumours via systemic immune and tumour microenvironment signature",
                    author: "Dana Goerzen, Mijin Kim, Chanel Schraff",
                    journalName: "Nature Nanotechnology",
                    publisher: "Nature Portfolio",
                    impactFactor: "3.83",
                }}
            />

            {/* SECTION 3: Our Expert Nanotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Nanotechnology Editors"
                    description="Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
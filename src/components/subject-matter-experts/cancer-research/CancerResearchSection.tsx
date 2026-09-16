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
    Leaf,
    ChevronRight
} from 'lucide-react';
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
import Link from "next/link";

const emergingTrendsData = [
    {
        id: "ai-ml",
        title: "Artificial Intelligence and Machine Learning",
        description:
            "AI enhances early detection, tumour classification, treatment response prediction, and drug discovery. Machine learning models assist in image-based diagnostics and clinical decision support systems.",
    },
    {
        id: "liquid-biopsies",
        title: "Liquid Biopsies and Minimal Residual Disease (MRD)",
        description:
            "Technologies Non-invasive biomarkers such as circulating tumour DNA (ctDNA) and exosomes enable early detection and real-time monitoring of treatment efficacy.",
    },
    {
        id: "multi-omics",
        title: "Multi-Omics Integration",
        description:
            "Genomics, proteomics, metabolomics, and transcriptomics provide a comprehensive understanding of tumour biology and support personalized medicine strategies.",
    },
    {
        id: "organoid-3d",
        title: "Organoid and 3D Bioprinting Models",
        description:
            "Patient-derived organoids replicate real tumour microenvironments, improving drug testing accuracy.",
    },
    {
        id: "next-gen-immuno",
        title: "Next-Generation Immunotherapies",
        description:
            "Bispecific antibodies, dendritic cell therapies, and engineered immune cells offer new possibilities for hard-to-treat cancers.",
    },
];

const researchTypesData = [
    "Breast Cancer",
    "Lung Cancer",
    "Prostate Cancer",
    "Colorectal Cancer",
    "Brain Tumours",
    "Pancreatic Cancer",
    "Ovarian & Cervical Cancers",
    "Hematological Malignancies"
];

const applicationsData = [
    {
        icon: Rocket,
        title: "Aerospace and Defense",
        iconSrc: "/images/subject-matter-experts/cancer-research/Molecular-and-Cellular-Oncology.webp",
        description: "heat resistant components, thermal barrier materials, and lightweight structural components."
    },
    {
        icon: Zap,
        title: "Energy and Power",
        iconSrc: "/images/subject-matter-experts/cancer-research/Cancer-Genomics-and-Biomarker-Discovery.webp",
        description: "fuel cells, batteries, solar panels, and nuclear reactors."
    },
    {
        icon: Cpu,
        title: "Electrical and Electronics",
        iconSrc: "/images/subject-matter-experts/cancer-research/Immuno-Oncology-and-Immunotherapy.webp",
        description: "capacitors, insulators, semiconductors, and sensors."
    },
    {
        icon: HeartPulse,
        title: "Health and Biomedical",
        iconSrc: "/images/subject-matter-experts/cancer-research/Radiation-Surgical-and-Medical-Oncology.webp",
        description: "implants, prosthetics, dental ceramics, and bioactive ceramics."
    },
    {
        icon: Car,
        title: "Automobile and Transportation",
        iconSrc: "/images/subject-matter-experts/cancer-research/Drug-Development-and-Translational-Oncology.webp",
        description: "engine parts, wear-resistant coatings for brakes."
    },
    {
        icon: Factory,
        title: "Industrial Manufacturing",
        iconSrc: "/images/subject-matter-experts/cancer-research/Cancer-Epidemiology-Emerging-and-Public-Health.webp",
        description: "cutting tools, select refractory materials, and various chemical processing equipment."
    },
    {
        icon: Leaf,
        title: "Environmental and Sustainable Applications",
        description: "ceramic filters, environmental catalysts, and environmental ceramic materials."
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Priya Sharma",
        degree: "PhD in Oncology",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/agrotechnology/Dr.-Priya-Sharma.webp",
    },
    {
        name: "Dr. Sanjay Verma",
        degree: "MD in Radiology",
        experience: "12 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocomputing/Dr.-Sanjay-Verma.webp",
    },
    {
        name: "Dr. Kavita Reddy",
        degree: "PhD in Molecular Oncology",
        experience: "8 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/agrotechnology/Dr.-Kavita-Reddy.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/cancer-research/sample-works-9-2.webp",
    imageAlt: "Cancer Research Journal Cover",
    paperTitle:
        "Mismatch Repair as a Dynamic and Clinically Actionable Vulnerability in Cancer",
    author:
        "Piumatti, E., Vitiello, P. P., Amodio, V., Bardelli, A., & Germano, G.",
    publisher: "American Association for Cancer Research",
    journalName: "Cancer Research",
    impactFactor: "16.6",
};

export default function CancerResearchSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Cancer Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Cancer Research"
                    description="The oncology landscape is rapidly evolving, with several emerging trends shaping the future of cancer research:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Types of Cancer Research We Cover (MISSING FROM PREVIOUS CODE) */}
            <section className="w-full bg-[#0e3b32] text-white py-6 px-6 rounded-xl overflow-hidden shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Overlay Column */}
                    <div className="lg:col-span-5 relative min-h-[220px] flex items-center justify-center rounded-lg overflow-hidden bg-black/30 p-6 border border-white/10">
                        <div className="text-left space-y-4 z-10">
                            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                                Pubrica offers support for a wide range of cancer types, including but not limited to:
                            </p>
                        </div>
                    </div>

                    {/* Right Grid Column: Cancers Covered */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                                Types of Cancer Research We Cover
                            </h2>
                            <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                            {researchTypesData.map((type, idx) => (
                                <div key={idx} className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-2.5 rounded-md shadow-xs border border-gray-100">
                                    <div className="border border-[#0e3b32] rounded-full p-0.5 text-[#0e3b32]">
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold truncate">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Why Cancer Research Is Important */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Why Cancer Research Is Important
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Cancer research is important because the better we understand these diseases, the more progress we will make toward diminishing the tremendous human and economic tolls of cancer. Research has helped us accumulate extensive knowledge about the biological processes involved in cancer onset, growth, and spread in the body. Those discoveries have led to more effective and targeted treatments and prevention strategies.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Breakthroughs in prevention, early detection, screening, diagnosis, and treatment are often the result of research and discoveries made by scientists in a wide array of disciplines over decades and even generations. Ultimately, cancer research requires partnerships and collaborations involving researchers, clinicians, patients, and others to translate yesterday's discoveries into today's advances and tomorrow's cures.
                        </p>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm h-[300px] sm:h-[350px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/cancer-research/Why-Cancer-Research-is-Important-1.webp"
                                alt="Cancer Research ribbon awareness"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />
            {/* SECTION 5: Our Expert Cancer Research Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cancer Research Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of <Link href="/subject-matter-experts/" className="text-blue-600">subject matter experts</Link> brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Grid */}
                <ExpertEditorsSection
                    title=""
                    description=""
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
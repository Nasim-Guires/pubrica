"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const applicationsData = [
    {
        title: "",
        desc: "Biomedical Research: Understanding glycosylation pathways aids in the development of targeted therapies and diagnostic biomarkers for diseases such as cancer, diabetes, and neurodegenerative disorders.",
        iconSrc:
            "/images/subject-matter-experts/glycobiology/Biomedical-Research.webp",
    },
    {
        title: "",
        desc: "Drug Development: Glycoengineering enhances drug efficacy, bioavailability, and immunogenicity, especially in biologics and vaccines.",
        iconSrc:
            "/images/subject-matter-experts/glycobiology/Drug-Development.webp",
    },
    {
        title: "",
        desc: "Infectious Diseases: Elucidating the role of glycans in pathogen-host interactions has led to novel antiviral and antibacterial strategies.",
        iconSrc:
            "/images/subject-matter-experts/glycobiology/Infectious-Diseases.webp",
    },
    {
        title: "",
        desc: "Regenerative Medicine: Glycans are integral to stem cell differentiation, tissue repair, and organ regeneration.",
        iconSrc:
            "/images/subject-matter-experts/glycobiology/Regenerative-Medicine-1.webp",
    },
    {
        title: "",
        desc: "Industrial Biotechnology: Glycobiology facilitates the design of glycan-modified enzymes and biopolymers for sustainable bioengineering solutions.",
        iconSrc:
            "/images/subject-matter-experts/glycobiology/Industrial-Biotechnology.webp",
    },
];
const emergingTrendsData = [
    {
        id: 'artificial-intelligence-in-glycomics',
        title: 'Artificial Intelligence in Glycomics',
        description: 'AI-driven tools are enabling high-throughput glycan identification, modelling, and prediction.'
    },
    {
        id: 'single-cell-glycomics',
        title: 'Single-Cell Glycomics',
        description: 'Techniques that analyse glycan heterogeneity at the cellular level are uncovering novel disease mechanisms.'
    },
    {
        id: 'glycoimmunology',
        title: 'Glycoimmunology',
        description: 'The interplay between glycans and immune receptors is shaping next-generation immunotherapies and vaccines.'
    },
    {
        id: 'biopharmaceutical-glycoengineering',
        title: 'Biopharmaceutical Glycoengineering',
        description: 'Optimizing glycosylation profiles for improved drug stability, efficacy, and patient safety.'
    },
    {
        id: 'glycan-biomarkers',
        title: 'Glycan Biomarkers',
        description: 'Discovery of novel carbohydrate-based biomarkers for cancer, infectious, and neurodegenerative diseases.'
    }
];

const areasOfStudyData = [
    { title: 'Biochemistry' },
    { title: 'Glycosylation' },
    { title: 'Glycoconjugates' },
    { title: 'Proteoglycans' },
    { title: 'Glycosaminoglycans' },
    { title: 'Glycosylation' },
    { title: 'Glycolipids' },
    { title: 'Proteomics' },
    { title: 'Carbohydrates' },
    { title: 'Glycoproteins' },
    { title: 'Genomics' },
    { title: 'Glycan Binding Proteins' }
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Alicia Morgan",
        degree: "PhD in Glycobiology",
        experience: "12 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/glycobiology/Dr.-Alicia-Morgan.webp",
    },
    {
        name: "Dr. Kenji Watanabe",
        degree: "PhD in Molecular and Cellular Biology",
        experience: "15 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/jp.png",
        avatar:
            "/images/subject-matter-experts/glycobiology/Dr.-Kenji-Watanabe.webp",
    },
    {
        name: "Dr. Sofia Almeida",
        degree: "PhD in Biochemistry",
        experience: "13 years of experience",
        manuscripts: "105+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/gynecology/Dr.-Sofia-Almeida.webp",
    },
];


export default function GlycobiologySection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Glycobiology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Glycobiology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Recent innovations in glycobiology research are transforming therapeutic and diagnostic development. Some key trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                        ? 'bg-[#0e3b32] text-white shadow-sm'
                                        : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-250'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Box */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {emergingTrendsData[activeTrendTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTrendTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Why Choose Pubrica for Glycobiology Research and Publishing? */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Glycobiology"
                    description="The applications of glycobiology are vast and transformative. Research in this domain contributes to several major scientific and clinical advancements:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/glycobiology/Applications-of-Glycobiology.webp"
                    imageAlt="Applications of Glycobiology"
                />
            </section>

            {/* SECTION: Areas of Study (Dark Theme Container matched with reference image) */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px] rounded-none overflow-hidden">
                {/* Left Side: Image with Dark Overlay */}
                <div className="lg:col-span-5 relative min-h-[300px] flex items-center p-8 sm:p-12 !rounded-none overflow-hidden">
                    <Image
                        src="/images/Gynaecology.webp"
                        alt="Glycobiology research"
                        fill
                        sizes="(max-width: 1024px) 100vw, 41vw"
                        className="object-cover !rounded-none"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                        priority
                    />

                    {/* Dark Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 !rounded-none z-10"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                    ></div>

                    {/* Text Overlay */}
                    <p className="relative z-20 text-white text-sm sm:text-base font-normal leading-relaxed max-w-md">
                        Pubrica supports a broad spectrum of glycobiology research. Whether it&apos;s the study of glycosylation, glycoconjugates, or glycomics, Pubrica&apos;s expertise ensures that your glycobiology research is robust, well-documented, and ready for publication.
                    </p>
                </div>

                {/* Right Side: Dark Green Background with Header & Grid */}
                <div className="lg:col-span-7 bg-[#052b28] p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    {/* Section Header */}
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Areas of Study
                        </h2>

                        <div className="w-16 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Tag Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {areasOfStudyData.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-3 py-2.5 rounded-sm shadow-sm flex items-center space-x-2 text-xs font-semibold leading-snug"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#052b28] flex items-center justify-center shrink-0">
                                    <ChevronRight className="w-3 h-3 text-white stroke-[3]" />
                                </div>

                                <span>{app.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={{
                        imageSrc:
                            "/images/subject-matter-experts/glycobiology/sample-works-6-1.webp",
                        imageAlt: "Glycobiology Journal Cover",
                        paperTitle:
                            "The Importance of N- and O-Glycosylation of Brain Cell Surface Glycoproteins",
                        author:
                            "Maxence Noel, Yumi M Zürcher, Ea K C Tulin, Richard D Cummings",
                        journalName: "Glycobiology",
                        publisher: "Oxford University Press",
                        impactFactor: "3.3",
                    }}
                />
            </section>

            {/* SECTION: Our Expert Glycobiology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Glycobiology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}
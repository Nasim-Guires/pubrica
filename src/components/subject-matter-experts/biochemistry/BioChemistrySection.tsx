"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
    BookOpen,
    Award,
    Briefcase,
    FileText,
    PenTool,
    Send,
    Image as ImageIcon,
    BookMarked,
    Stethoscope,
    Pill,
    Sprout,
    Search,
    GraduationCap
} from 'lucide-react';

const serviceIconsData = [
    {
        title: "Scientific Writing",
        iconSrc: "/images/subject-matter-experts/biochemistry/Molecular-Biology-and-Genetics.webp",
        icon: PenTool,
    },
    {
        title: "Journal Submission",
        iconSrc: "/images/subject-matter-experts/biochemistry/Enzymology-andProtein-Chemistry.webp",
        icon: Send,
    },
    {
        title: "Graphical Abstract",
        iconSrc: "/images/subject-matter-experts/biochemistry/Metabolism-and-Bioenergetics.webp",
        icon: ImageIcon,
    },
    {
        title: "Journal Selection",
        iconSrc: "/images/subject-matter-experts/biochemistry/Structural-Biology.webp",
        icon: BookMarked,
    }
];

const emergingTrendsData = [
    {
        id: 'omics-technologies',
        title: 'Omics Technologies',
        description:
            'Genomics, proteomics, metabolomics, and transcriptomics provide holistic insights into cellular function and disease mechanisms, enabling precision medicine approaches.'
    },
    {
        id: 'crispr-genome-editing',
        title: 'CRISPR and Genome Editing',
        description:
            'The ability to precisely edit genes is revolutionizing biochemistry, allowing targeted research into gene function, disease modelling, and therapeutic development.'
    },
    {
        id: 'ai-computational-biochemistry',
        title: 'Artificial Intelligence and Computational Biochemistry',
        description:
            'AI and machine learning are accelerating the analysis of biochemical data, predicting protein structures, and simulating metabolic networks to drive innovation in drug discovery.'
    },
    {
        id: 'synthetic-biology',
        title: 'Synthetic Biology and Biomolecular Engineering',
        description:
            'The design of novel biomolecules and synthetic pathways is transforming biotechnology, creating solutions for healthcare, agriculture, and industrial applications.'
    },
    {
        id: 'single-cell-biochemistry',
        title: 'Single-Cell Biochemistry',
        description:
            'Advanced techniques now allow the study of individual cells, offering insights into cellular heterogeneity, signalling dynamics, and disease progression at unprecedented resolution.'
    },
    {
        id: 'integrative-structural-biology',
        title: 'Integrative Structural Biology',
        description:
            'Combining multiple structural techniques enables a comprehensive understanding of biomolecular complexes, advancing both fundamental and applied biochemistry research.'
    }
];

const realWorldApplications = [
    {
        title: "Disease Diagnosis and Treatment",
        iconSrc: "/images/subject-matter-experts/biochemistry/Cell-Signalling-and-Molecular-Interactions.webp",
        description: "Identifying biomarkers for early detection of diseases such as cancer, diabetes, and neurological disorders.",
        icon: Stethoscope
    },
    {
        title: "Pharmaceutical Development",
        iconSrc: "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
        description: "Targeting enzymes and receptors to develop novel therapeutics.",
        icon: Pill
    },
    {
        title: "Agricultural Biotechnology",
        iconSrc: "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
        description: "Enhancing crop yield, pest resistance, and nutritional value through metabolic engineering.",
        icon: Sprout
    },
    {
        title: "Environmental Monitoring",
        iconSrc: "/images/subject-matter-experts/biochemistry/Environmental-Monitoring.webp",
        description: "Studying biochemical pathways to assess pollution effects and design remediation strategies.",
        icon: Search
    },
    {
        title: "Education & Research",
        iconSrc: "/images/subject-matter-experts/biochemistry/Education-Research.webp",
        description: "Training the next generation of scientists, veterinarians, and animal welfare specialists.",
        icon: GraduationCap
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Clarke',
        degree: 'PhD in Biochemistry',
        experience: '14 years of experience',
        manuscripts: '190+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/algorithm/Dr.-Robert-Klein.webp"
    },
    {
        name: 'Dr. Sophia Patel',
        degree: 'PhD in Clinical Biochemistry',
        experience: '11 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp"
    },
    {
        name: 'Dr. Marcus Liu',
        degree: 'PhD in Bioorganic Chemistry',
        experience: '15 years of experience',
        manuscripts: '200 manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Marcus-Liu.webp"
    }
];

export default function BioChemistrySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Biochemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Biochemistry Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of biochemistry is rapidly evolving, influenced by technological advancements and interdisciplinary research. Some of the most promising trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                        ? 'bg-[#0e3b32] text-white shadow-sm'
                                        : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-200'
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
                            {emergingTrendsData[activeTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTab].description}
                        </p>
                    </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base pt-2">
                    Pubrica's editorial team stays at the forefront of these trends, providing insights and support that align with cutting-edge biochemistry research.
                </p>
            </section>

            {/* SECTION: Biochemistry in Real-World Applications */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Biochemistry in Real-World Applications
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Biochemistry drives advancements across medicine, biotechnology, and environmental sciences. Its applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* List Items (7 Cols) */}
                    <div className="md:col-span-7 space-y-6">
                        {realWorldApplications.map((app, index) => {
                            const AppIcon = app.icon;
                            return (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="p-2 border border-gray-300 rounded-md shrink-0 text-[#0e3b32] bg-gray-50 mt-1">
                                        {"iconSrc" in app && app.iconSrc ? (
                                            <Image
                                                src={app.iconSrc}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="object-contain w-5 h-5 shrink-0"
                                            />
                                        ) : (
                                            <AppIcon className="w-5 h-5" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm sm:text-base inline">
                                            {app.title}:{" "}
                                        </h4>
                                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {app.description}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Side Image (5 Cols) */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
    <Image
      src="/images/subject-matter-experts/biochemistry/Biochemistry-in-Real-World-Applications.webp"
      alt="Biochemistry Laboratory Applications"
      fill
      sizes="(max-width: 1024px) 100vw, 360px"
      className="object-cover"
    />
  </div>
                    </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base pt-2">
                    These applications highlight the pivotal role of biochemistry in solving global challenges, making expertise in this field invaluable.
                </p>
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/biochemistry/sample-works-9-1.webp"
                            alt="American Journal of Biochemistry & Biotechnology Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            The oxidase reaction of flavin-dependent Thymidylate Synthase reveals the nature of inhibitor binding
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Ozcan, S. I., Iy, M., Mostarshed, N., Shaw, S., & Koehn, E. M
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Biochemistry
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            American Chemical Society
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.9
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Expert Biochemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Biochemistry Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                {/* Header with Avatar and Flags */}
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <img
                                            src={editor.avatar}
                                            alt={editor.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="space-y-2 text-xs sm:text-sm font-semibold text-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.manuscripts}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
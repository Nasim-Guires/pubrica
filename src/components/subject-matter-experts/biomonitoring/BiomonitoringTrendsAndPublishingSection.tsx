"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Users,
    Leaf,
    ShieldAlert,
    FlaskConical,
    FileCheck,
    Trees,
    Globe2,
} from "lucide-react";

export default function BiomonitoringTrendsAndPublishingSection() {
    const [activeTab, setActiveTab] = useState(1);

    const trendsTabs = [
        {
            title: "High-Resolution Metabolomics and Proteomics",
            heading: "High-Resolution Metabolomics and Proteomics",
            content:
                "These techniques allow for the discovery of new biomarkers that reflect subtle physiological changes induced by low-level exposures.",
        },
        {
            title: "Non-invasive Sampling Methods",
            heading: "Non-invasive Sampling Methods",
            content:
                "The use of hair, saliva, nails, and exhaled breath condensate is gaining popularity due to ease of collection and reduced ethical concerns.",
        },
        {
            title: "Remote Monitoring Technologies",
            heading: "Remote Monitoring Technologies",
            content:
                "Portable biosensors and wearable devices now enable continuous exposure tracking, offering a dynamic understanding of exposure variability.",
        },
        {
            title: "Omics-Based Biomonitoring",
            heading: "Omics-Based Biomonitoring",
            content:
                "Integration of genomics, transcriptomics, proteomics, and metabolomics facilitates a holistic assessment of exposure-related biological changes.",
        },
        {
            title: "Biomonitoring for Emerging Contaminants",
            heading: "Biomonitoring for Emerging Contaminants",
            content:
                "Increasing attention is being paid to microplastics, pharmaceuticals, and per- and polyfluoroalkyl substances (PFAS), which are now recognized as persistent and bioaccumulative.",
        },
        {
            title: "Global Biomonitoring Networks",
            heading: "Global Biomonitoring Networks",
            content:
                "International collaborations, such as the Human Biomonitoring for Europe (HBM4EU) initiative, promote standardized methodologies and data sharing for cross-country comparisons.",
        },
    ];

    const applications = [
        {
            title: "Public Health Surveillance",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Environmental-Biomonitoring.webp",
            desc: "Used to detect population-level exposure trends, such as blood lead levels or pesticide residues, supporting preventive health policies.",
            icon: Users,
        },
        {
            title: "Environmental Impact Assessment",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Human-Feed-Biomonitoring.webp",
            desc: "Biomonitoring helps evaluate pollution sources, ecological damage, and recovery following remediation programs.",
            icon: Leaf,
        },
        {
            title: "Occupational Health Management",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Occupational-Health-Management.webp",
            desc: "Regular biomonitoring of workers in industries like mining, agriculture, and manufacturing ensures safety and compliance with exposure limits.",
            icon: ShieldAlert,
        },
        {
            title: "Drug and Chemical Safety Evaluation",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Ecological-Biomonitoring.webp",
            desc: "Used in preclinical and post-market studies to assess the bioavailability and potential toxicity of chemicals and pharmaceuticals.",
            icon: FlaskConical,
        },
        {
            title: "Risk Communication and Policy Development",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Pharmacokinetic-and-Toxicological-Research.webp",
            desc: "Provides evidence for policymakers to establish or revise environmental and occupational standards.",
            icon: FileCheck,
        },
        {
            title: "Wildlife Conservation and Ecosystem Protection",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Wildlife-Conservation-and-Ecosystem-Protection.webp",
            desc: "Monitoring bioindicators such as fish, amphibians, and lichens helps assess ecosystem health and biodiversity changes due to pollution.",
            icon: Trees,
        },
        {
            title: "Climate and Global Change Studies",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Climate-and-Global-Change-Studies.webp",
            desc: "Tracks the impact of global environmental changes, such as temperature shifts and pollution transport, on biological systems.",
            icon: Globe2,
        },
    ];

    const editors = [
        {
            name: "Dr. Emily Carter",
            role: "PhD in Environmental Toxicology",
            experience: "15 years of experience",
            manuscripts: "200+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp",
        },
        {
            name: "Dr. Rajesh Nair",
            role: "PhD in Biochemistry",
            experience: "12 years of experience",
            manuscripts: "170+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Rajesh-Nair.webp",
        },
        {
            name: "Dr. Laura Mitchell",
            role: "PhD in Environmental Health Sciences",
            experience: "18 years of experience",
            manuscripts: "210+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Laura-Fischer.webp",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-white font-sans text-gray-800 space-y-16">

            {/* SECTION 1: EMERGING TRENDS IN BIOMONITORING */}
            <section className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Emerging Trends in Biomonitoring
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The field of biomonitoring is rapidly evolving, driven by technological innovation, interdisciplinary collaboration, and growing environmental concerns. Several emerging trends are reshaping how scientists and policymakers approach exposure assessment and health protection.
                    </p>
                </div>

                {/* Tabs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-300 bg-[#f8f9fa] rounded-t-sm overflow-hidden text-center">
                    {trendsTabs.map((tab, idx) => {
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`py-3 px-2 text-[11px] font-bold transition-all border-r border-b lg:border-b-0 border-gray-300 last:border-r-0 flex items-center justify-center leading-snug ${isActive
                                        ? "bg-[#0d3630] text-white border-b-2 border-b-[#0d3630]"
                                        : "bg-[#f8f9fa] text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content Box */}
                <div className="border border-gray-300 border-t-0 rounded-b-sm p-6 bg-white shadow-sm space-y-3">
                    <h3 className="text-sm md:text-base font-bold text-[#0d3630]">
                        {trendsTabs[activeTab].heading}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {trendsTabs[activeTab].content}
                    </p>
                </div>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">
                    These innovations are transforming biomonitoring from a purely analytical tool into a dynamic, predictive science that informs policy decisions, personal health management, and environmental sustainability.
                </p>
            </section>

            {/* SECTION 2: APPLICATIONS OF BIOMONITORING */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Applications of Biomonitoring
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Biomonitoring has a wide range of applications across scientific, industrial, and policy domains. Its data serve as a cornerstone for understanding exposure patterns, identifying vulnerable populations, and improving health outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Applications List */}
                    <div className="lg:col-span-7 space-y-4">
                        {applications.map((app, idx) => {
                            const Icon = app.icon;
                            return (
                                <div key={idx} className="flex items-start gap-3.5">
                                    <div className="p-2 bg-[#0d3630]/10 rounded-lg text-[#0d3630] shrink-0 mt-0.5">
                                        {(app as { iconSrc?: string }).iconSrc ? (
                                            <Image src={(app as { iconSrc?: string }).iconSrc!} alt="" width={16} height={16} className="object-contain shrink-0" />
                                        ) : (
                                            <Icon className="w-4 h-4" />
                                        )}
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="text-xs md:text-sm font-bold text-[#0d3630]">
                                            {app.title}:
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {app.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side Microscope Image */}
                    <div className="lg:col-span-5 flex justify-center sticky top-6">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/subject-matter-experts/biomonitoring/Applications-of-Biomonitoring.webp"
                                alt="Laboratory Microscope Analysis"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
            <section className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Where Our Authors Publish
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our authors share biomonitoring publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-40 h-52 shrink-0 border border-gray-200 shadow-sm rounded overflow-hidden bg-gray-50">
                        <Image
                            src="/images/subject-matter-experts/biomonitoring/sample-works-7-3.webp"
                            alt="Atmosphere Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-2 text-xs md:text-sm">
                        <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
                            Paper Title: Biomonitoring of Air Pollution
                        </h3>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Author:</span> Giordano S, Spagnuolo V, Capozzi F
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Journal Name:</span> Atmosphere
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Publisher:</span> MDPI
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Impact factor:</span> 2.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: OUR EXPERT BIOMONITORING EDITORS */}
            <section className="space-y-8">
                <div className="text-center space-y-2 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Our Expert Biomonitoring Editors
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Pubrica&apos;s team of biomonitoring experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editors.map((editor, idx) => (
                        <div
                            key={idx}
                            className="bg-[#eaf1ee] border border-[#d3e2de] rounded-lg p-5 text-center space-y-4 shadow-sm"
                        >
                            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <Image
                                    src={editor.avatar}
                                    alt={editor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-[#0d3630]">
                                    {editor.name}
                                </h3>
                                <p className="text-xs text-gray-600 font-medium">
                                    {editor.role}
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-300/60 flex justify-around text-xs text-gray-700 font-medium">
                                <span>{editor.experience}</span>
                                <span>•</span>
                                <span>{editor.manuscripts}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
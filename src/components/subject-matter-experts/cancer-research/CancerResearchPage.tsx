"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dna,
    Activity,
    Layers,
    Microscope,
    PieChart,
    Search,
    FileText,
    Database,
    PenTool,
    FileSearch,
    Send,
    FileSpreadsheet,
    BookMarked,
    ChevronDown,
    ArrowRight
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CancerResearchPage() {
    const disciplines = [
        {
            title: "Molecular and Cellular Oncology",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Molecular-and-Cellular-Oncology.webp",
            description:
                "We assist with research on tumour biology, gene expression, oncogenes, tumour suppressors, epigenetics, and signalling pathways. Our writers ensure accurate representation of experimental results, diagrams, and mechanistic interpretations.",
            icon: Dna,
        },
        {
            title: "Cancer Genomics and Biomarker Discovery",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Cancer-Genomics-and-Biomarker-Discovery.webp",
            description:
                "From next-generation sequencing to bioinformatics-based analysis, Pubrica helps interpret complex genomic datasets and develop manuscripts highlighting biomarkers for diagnosis, prognosis, and treatment selection.",
            icon: Activity,
        },
        {
            title: "Immuno-Oncology and Immunotherapy",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Immuno-Oncology-and-Immunotherapy.webp",
            description:
                "We support research involving checkpoint inhibitors, CAR-T cell therapy, tumour immune evasion, and inflammation-driven cancers. Our team ensures that immunological mechanisms and clinical outcomes are conveyed precisely.",
            icon: Layers,
        },
        {
            title: "Radiation, Surgical, and Medical Oncology",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Radiation-Surgical-and-Medical-Oncology.webp",
            description:
                "Pubrica develops evidence-based content on treatment techniques, clinical outcomes, survival metrics, and comparative effectiveness studies across various oncological interventions.",
            icon: PieChart,
        },
        {
            title: "Drug Development and Translational Oncology",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Drug-Development-and-Translational-Oncology.webp",
            description:
                "Our experts assist pharmaceutical and biotech clients with preclinical studies, mechanism-of-action reports, PK/PD modelling, and translational data linking bench research to clinical application.",
            icon: Microscope,
        },
        {
            title: "Cancer Epidemiology, Emerging and Public Health",
            iconSrc:
                "/images/subject-matter-experts/cancer-research/Cancer-Epidemiology-Emerging-and-Public-Health.webp",
            description:
                "We support population-level studies, burden-of-disease reports, risk factor analysis, screening programs, and prevention strategies.",
            icon: Activity,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            icon: FileSearch,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
        },
        {
            title: "Original Research",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cancer Research"
                description="From proposal development to manuscript publication, Pubrica empowers your cancer research journey with accuracy, clarity, and domain expertise."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Cancer Research Through Expert Guidance and High-Quality Scientific Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cancer-research/Cancer-Research.webp"
                                        alt="Cancer research professionals"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline hover:no-underline">Cancer research</Link> aims to understand, prevent, diagnose, treat, and cure cancer by studying its causes and biology. This field encompasses many disciplines, from molecular science to clinical trials, and has led to significant advances, such as improved treatments, early detection methods, and preventative strategies.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Key areas of research include developing new therapies like immunotherapies, using AI to predict treatment response, and identifying genetic risk factors. As the global burden of cancer continues to increase, high-quality, reproducible, and clinically relevant research has never been more important. Pubrica supports researchers, oncologists, academicians, and <Link href="/industries/biotechnology/" className="text-blue-600 no-underline hover:no-underline">biotechnology</Link> organizations by offering end-to-end research development and <Link href="/services/publication-support/" className="text-blue-600 no-underline hover:no-underline">publication services</Link> that bring scientific ideas to life.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Cancer research involves systematic investigations aimed at understanding the biological mechanisms of cancer development, identifying risk factors, improving diagnostic accuracy, and designing innovative therapies. It spans molecular biology, genetics,<Link href="/services/bioinformatics/" className="text-blue-600 no-underline hover:no-underline">bioinformatics</Link> , immunology, pharmacology, clinical sciences, epidemiology, and public health.
                                    </p>

                                    <div className="pt-2">
                                        <h3 className="font-bold text-gray-800 text-base mb-3">
                                            The primary goals of cancer research include:
                                        </h3>
                                        <ul className="space-y-3 text-base leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span>Understanding the cellular and molecular basis of tumorigenesis</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span>Identifying biomarkers for early detection and precision diagnostics</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span>Evaluating novel therapeutic agents, drug targets, and treatment strategies</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span>Developing personalised and targeted therapies</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span>Improving patient survival, quality of life, and long-term outcomes</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <GetFreeQuoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Key Areas Grid */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CoreAreasSection
                        title="Key Disciplines in Cancer Research"
                        description="Cancer research is a multidisciplinary field that integrates molecular biology, genetics, immunology, pharmacology, and bioinformatics. It is broadly categorized into several key areas:"
                        items={disciplines}
                    />
                </div>
            </section>         {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Cancer Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica offers specialized research and publication tailored explicitly
                        for cancer research. Our experts understand the complexities associated
                        with cancer models, biomarkers,{" "}
                        <Link
                            href="/services/research-services/product-development/"
                            className="text-blue-600 no-underline hover:no-underline"
                        >
                            drug discovery
                        </Link>
                        , clinical trial protocols, and statistical interpretations. We work
                        closely with researchers to craft scientifically sound and
                        publication-ready documents. Our services include:
                    </p>
                </div>

                {/* 4 Cards Per Row Grid */}
                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
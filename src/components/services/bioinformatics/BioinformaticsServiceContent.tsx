"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

/* ==========================================================================
   DATA OBJECTS FOR ACCORDION CARDS
   ========================================================================== */
interface ServiceItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

const leftServicesData: ServiceItem[] = [
    {
        id: "single-cell",
        title: "Single-Cell Data Analysis",
        content: (
            <>
                Our single-cell RNA sequencing (scRNA-seq) analysis services identify
                cell types, expression differences, and heterogeneity in biological
                samples. Using dimension reduction and clustering methods such as UMAP
                and t-SNE, we assess cellular responses to various conditions or
                treatments across multiple samples.
            </>
        ),
    },
    {
        id: "genomic",
        title: "Genomic Data Analysis",
        content: (
            <>
                We specialize in next-generation sequencing (NGS) data analysis,
                including whole-genome sequencing (WGS), whole-exome sequencing (WES),
                and targeted sequencing. Our expertise helps identify genetic
                variations, disease predispositions, and pharmacogenomic responses,
                driving advances in personalized medicine.
            </>
        ),
    },
    {
        id: "proteomic",
        title: "Proteomic Data Analysis",
        content: (
            <>
                Our proteomics services cover protein identification, quantification, and post-translational modification (PTM) analysis. These insights are essential for understanding disease mechanisms and discovering novel therapeutic targets.
            </>
        ),
    },
    {
        id: "transcriptomic",
        title: "Transcriptomic Data Analysis",
        content: (
            <>
                We analyze RNA sequencing (RNA-seq) data to evaluate gene expression under varying conditions, including differential gene expression, isoform detection, and non-coding RNA analysis. This provides a deeper understanding of gene regulation and functional pathways.
            </>
        ),
    },
    {
        id: "genetic-variation",
        title: "Genetic Variation & Variant Calling",
        content: (
            <>
                We perform large-scale variant discovery using SNP arrays, WGS, and WES. Our pipelines process terabyte-scale sequencing data for variant calling, annotation, and interpretation, linking genetic variation to disease and clinical outcomes.
            </>
        ),
    },
    {
        id: "metabolomics",
        title: "Metabolomics Data Analysis",
        content: (
            <>
                Metabolomics offers a direct snapshot of biochemical processes within cells. Our bioinformatics services connect genetic, environmental, and microbiome influences to disease biomarkers and therapeutic responses through comprehensive metabolite profiling
            </>
        ),
    },
    {
        id: "microbiome",
        title: "Microbiome & Metagenomics Analysis",
        content: (
            <>
                We provide microbiome sequencing and metagenomics analysis (16S rRNA
                and shotgun sequencing) to profile microbial diversity and
                host-microbiota interactions. These insights are crucial in gut
                health, disease research, and nutrition studies.
            </>
        ),
    },
];

const rightServicesData: ServiceItem[] = [
    {
        id: "epigenomics",
        title: "Epigenomics Data Analysis",
        content: (
            <>
                Our{" "}
                <Link href="/services/bioinformatics/epigenetics-bioinformatics-biostatistical-methods" className="text-sky-600 hover:underline">
                    epigenetics bioinformatics services
                </Link>{" "}
                include DNA methylation profiling, histone modification analysis, and
                ChIP-seq data interpretation, providing insights into gene regulation,
                epigenetic markers, and disease associations.
            </>
        ),
    },
    {
        id: "multi-omics",
        title: "Integrative Multi-Omics Analysis",
        content: (
            <>
                We integrate genomics, transcriptomics, proteomics, metabolomics, and
                epigenomics datasets to uncover molecular mechanisms of disease,
                identify biomarkers, and support systems biology approaches.
            </>
        ),
    },
    {
        id: "structural",
        title: "Structural Bioinformatics",
        content: (
            <>
                We support protein structure prediction, molecular docking, and simulation studies to explore structure–function relationships, protein-ligand interactions, and rational drug design.
            </>
        ),
    },
    {
        id: "machine-learning",
        title: "Machine Learning & AI in Bioinformatics",
        content: (
            <>
                Our experts apply machine learning and deep learning techniques for biomarker classification, predictive modeling, and pattern recognition in complex omics datasets. This empowers precision medicine and data-driven drug discovery.
            </>
        ),
    },
    {
        id: "clinical-translational",
        title: "Clinical & Translational Bioinformatics",
        content: (
            <>
                We bridge omics research and clinical practice by providing bioinformatics for diagnostics, pharmacogenomics, and clinical decision support. These services accelerate the path from bench to bedside in personalized healthcare.
            </>
        ),
    },
    {
        id: "pipeline-dev",
        title: "Bioinformatics Pipeline & Software Development",
        content: (
            <>
               We develop customized pipelines, workflows, and cloud-based solutions for efficient and reproducible data processing, tailored to the needs of specific projects and institutions.
            </>
        ),
    },
    {
        id: "visualization",
        title: "Data Visualization & Publication Support",
        content: (
            <>
               We generate publication-ready visualizations such as heatmaps, volcano plots, PCA, phylogenetic trees, and pathway enrichment charts. Our outputs enhance the clarity and impact of scientific publications and presentations.
            </>
        ),
    },
];

/* ==========================================================================
   MAIN REUSABLE COMPONENT
   ========================================================================== */
export default function BioinformaticsServiceContent() {
    // State set to null so ALL cards are CLOSED by default
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="w-full bg-white text-slate-800 font-sans">
            {/* --------------------------------------------------------------------
         1. HERO SECTION
         -------------------------------------------------------------------- */}
            <section className="bg-[#0b2b26] text-white py-6 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-emerald-500/30 p-8 sm:p-12 rounded-lg bg-emerald-950/20 backdrop-blur-sm">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        Transforming Biological Data into Scientific Discovery
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                        With Pubrica&apos;s bioinformatics services, researchers gain
                        accurate analyses, actionable insights, and publication-ready
                        outputs trusted by leading journals.
                    </p>
                </div>
            </section>

            {/* --------------------------------------------------------------------
         2. OVERVIEW SECTION
         -------------------------------------------------------------------- */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content Block */}
                    <div className="lg:col-span-7 space-y-6">
                        <header>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b2b26] mb-4">
                                Pubrica Bioinformatics Services
                            </h2>
                            <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                                Transforming Complex Biological Data into Meaningful Insights
                            </h3>
                        </header>

                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            Pubrica provides end-to-end{" "}
                            <Link href="/academy/bioinformatics/bioinformatics-clinical-applications/" className="text-sky-600 hover:underline">
                                bioinformatics
                            </Link>{" "}
                            consulting services for genomics, proteomics, transcriptomics,
                            metabolomics, and multi-omics research. Our team of PhD-qualified
                            computational biologists, data scientists, and bioinformaticians
                            specializes in next-generation sequencing (NGS) data analysis,
                            omics data integration, and advanced computational biology
                            techniques. We help researchers and healthcare professionals
                            translate raw biological data into accurate, insightful, and
                            publication-ready results.
                        </p>

                        <ul className="space-y-3 pt-2 text-sm sm:text-base text-slate-700">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 font-bold">•</span>
                                <span>
                                    15+ years of expertise delivering
                                    bioinformatics solutions for global medical and life sciences
                                    research.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 font-bold">•</span>
                                <span>
                                    1,200+ projects completed in genomic
                                    sequencing, protein structure prediction, transcriptomics
                                    analysis, and clinical omics studies.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 font-bold">•</span>
                                <span>
                                    A multidisciplinary team skilled in machine
                                    learning, big data bioinformatics, and advanced visualization
                                    (heatmaps, phylogenetic trees, gene expression profiles).
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 font-bold">•</span>
                                <span>
                                    Proven track record of supporting
                                    high-impact publications and regulatory submissions through
                                    precise data analysis and customized pipelines.
                                </span>
                            </li>
                        </ul>

                        <div className="pt-4">
                        <GetFreeQuoteButton/>
                        </div>
                    </div>

                    {/* Image Container Block */}
                    <div className="lg:col-span-5 flex justify-center">
                        {/* Image Section Start */}
                        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden - p-2 ">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/services/bio/Bioinformatics-Services.webp"
                                    alt="Scientist analyzing medical data on laptop in bioinformatics lab"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Image Section End */}
                    </div>
                </div>
            </section>

            {/* --------------------------------------------------------------------
         3. SERVICES UNDERTAKEN SECTION
         -------------------------------------------------------------------- */}
            <section className="py-7 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-left">
                        <h2 className="text-3xl font-bold text-[#0b2b26] mb-3">
                            Bioinformatics Services That We Undertake
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base max-w-5xl leading-relaxed mb-2">
                            Pubrica offers a comprehensive suite of bioinformatics services
                            tailored to the{" "}
                            <Link href="/subject-matter-experts/life-sciences/" className="text-sky-600 hover:underline">
                                life sciences
                            </Link>
                            , healthcare, and medical research sectors, supporting researchers
                            in unraveling complex biological data and advancing scientific
                            discoveries.
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base max-w-5xl leading-relaxed">
                            We provide specialized services across pre-clinical, translational,
                            and clinical development, enabling researchers to transform raw
                            data into meaningful insights, biomarker discovery, and
                            publication-ready results.
                        </p>
                    </div>

                    {/* 3-Column Dynamic Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Column Services */}
                        <div className="lg:col-span-4 space-y-3">
                            {leftServicesData.map((item) => (
                                <article key={item.id} className="border-b border-slate-300 pb-3">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full text-left flex items-center justify-between py-1 group focus:outline-none"
                                    >
                                        <span className="font-semibold text-[#0b2b26] text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                                            {openId === item.id ? "—" : "+"} {item.title}
                                        </span>
                                    </button>
                                    {openId === item.id && (
                                        <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-800 transition-all duration-200">
                                            {item.content}
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>

                        {/* Center Column Image */}
                        <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
                            {/* Image Section Start */}
                            <div className="relative w-full max-w-xs h-[450px] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/services/bio/Bioinformatics-Services-That-We-Undertake.png"
                                    alt="Scientists conducting laboratory research with microscope"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            {/* Image Section End */}
                        </div>

                        {/* Right Column Services */}
                        <div className="lg:col-span-4 space-y-3">
                            {rightServicesData.map((item) => (
                                <article key={item.id} className="border-b border-slate-300 pb-3">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full text-left flex items-center justify-between py-1 group focus:outline-none"
                                    >
                                        <span className="font-semibold text-[#0b2b26] text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                                            {openId === item.id ? "—" : "+"} {item.title}
                                        </span>
                                    </button>
                                    {openId === item.id && (
                                        <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-800 transition-all duration-200">
                                            {item.content}
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
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

export default function BioinformaticsPage() {
    const disciplines = [
        {
            title: "Single-Cell Sequencing Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Single-Cell-Data-Analysis.webp",
            description:
                "Our single-cell RNA sequencing (scRNA-seq) analysis services identify cell types, expression differences, and heterogeneity in biological samples. Using dimension reduction and clustering methods such as UMAP and t-SNE, we assess cellular responses to various conditions or treatments across multiple samples.",
            icon: Activity,
        },
        {
            title: "Genomic Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Genomic-Data-Analysis.webp",
            description:
                "We specialize in next-generation sequencing (NGS) data analysis, including whole-genome sequencing (WGS), whole-exome sequencing (WES), and targeted sequencing. Our expertise helps identify genetic variations, disease predispositions, and pharmacogenomic responses, driving advances in personalized medicine.",
            icon: Dna,
        },
        {
            title: "Proteomic Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Proteomic-Data-Analysis.webp",
            description:
                "Our proteomics services cover protein identification, quantification, and post-translational modification (PTM) analysis. These insights are essential for understanding disease mechanisms and discovering novel therapeutic targets.",
            icon: Layers,
        },
        {
            title: "Transcriptomic Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Transcriptomic-Data-Analysis.webp",
            description:
                "We analyze RNA sequencing (RNA-seq) data to evaluate gene expression under varying conditions, including differential gene expression, isoform detection, and non-coding RNA analysis. This provides a deeper understanding of gene regulation and functional pathways.",
            icon: PieChart,
        },
        {
            title: "Microbiome & Metagenomics Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Microbiome-Metagenomics-Analysis.webp",
            description:
                "We provide microbiome sequencing and metagenomics analysis (16S rRNA and shotgun sequencing) to profile microbial diversity and host-microbiota interactions. These insights are crucial in gut health, disease research, and nutrition studies.",
            icon: Microscope,
        },
        {
            title: "Metabolomics Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Metabolomics-Data-Analysis.webp",
            description:
                "Metabolomics offers a direct snapshot of biochemical processes within cells. Our bioinformatics services connect genetic, environmental, and microbiome influences to disease biomarkers and therapeutic responses through comprehensive metabolite profiling.",
            icon: Activity,
        },
        {
            title: "Structural Bioinformatics",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Structural-Bioinformatics.webp",
            description:
                "We support protein structure prediction, molecular docking, and simulation studies to explore structure–function relationships, protein-ligand interactions, and rational drug design.",
            icon: Layers,
        },
        {
            title: "Epigenomics Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Epigenomics-Data-Analysis.webp",
            description:
                "Our epigenetics bioinformatics services include DNA methylation profiling, histone modification analysis, and ChIP-seq data interpretation, providing insights into gene regulation, epigenetic markers, and disease associations.",
            icon: Dna,
        },
        {
            title: "Clinical & Translational Bioinformatics",
            iconSrc:
                "/images/subject-matter-experts/bioinformatics/Clinical-Translational-Bioinformatics.webp",
            description:
                "We bridge omics research and clinical practice by providing bioinformatics for diagnostics, pharmacogenomics, and clinical decision support. These services accelerate the path from bench to bedside in personalized healthcare.",
            icon: Microscope,
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
            desc: "Strategic journal selection to maximize publication success",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Transforming Biological Data into Scientific Discovery"
                description="With Pubrica’s bioinformatics support, researchers gain accurate analyses, actionable insights, and publication-ready outputs trusted by leading journals."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Complex Biological Data into Meaningful Insights
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/bioinformatics/Bioinformatics.webp"
                                        alt="Bioinformatics and laboratory researchers"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Bioinformatics is an interdisciplinary field that combines biology, <Link href="/subject-matter-experts/computer-science" className="text-blue-600 no-underline hover:no-underline">computer science</Link>, mathematics, and statistics to interpret and analyze biological data. With the rapid growth of high-throughput technologies such as next-generation sequencing (NGS), proteomics, metabolomics, and structural biology, bioinformatics has become the backbone of modern life sciences research. From decoding genetic variations to predicting protein structures and facilitating personalized medicine, bioinformatics provides computational frameworks and algorithms that transform complex biological information into actionable insights.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        As life sciences move toward data-intensive research, the demand for robust bioinformatics methodologies and analytical precision continues to grow. At Pubrica, we offer comprehensive research, writing, editing, and <Link href="/insights/sample-work/the-impact-of-drinking-water-sources-on-gut-microbial-diversity-in-canines-peer-review/" className="text-blue-600 no-underline hover:no-underline">publication support</Link> for scholars, clinicians, and scientists working across all domains of bioinformatics.
                                    </p>

                                    <div className="pt-2">
                                        <h3 className="font-bold text-gray-800 text-base mb-3">
                                            Our Expertise in Animal Science Includes
                                        </h3>

                                        <ul className="space-y-3 text-base leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>15+ years of expertise</strong> delivering Pubrica bioinformatics solutions for global medical and life sciences research.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>1,200+ projects completed</strong> in genomic sequencing, protein structure analysis, single-cell RNA-seq, and clinical bioinformatics publication support.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>A multidisciplinary team</strong> skilled in machine learning, big data bioinformatics, and advanced visualization (heatmaps, phylogenetic trees, gene expression profiles).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>Proven track record</strong> of supporting high-impact publications and regulatory submissions through precise data analysis and customized pipelines.</span>
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


            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <CoreAreasSection
                        title="Our Core Disciplines In Bioinformatics"
                        description={
                            <>
                                <span>
                                    Pubrica offers a comprehensive suite of{" "}
                                    <Link
                                        href="/subject-matter-experts/bioinformatics"
                                        className="text-blue-600 no-underline hover:no-underline"
                                    >
                                        bioinformatics services
                                    </Link>{" "}
                                    tailored to the{" "}
                                    <Link
                                        href="/subject-matter-experts/life-sciences"
                                        className="text-blue-600 no-underline hover:no-underline"
                                    >
                                        life sciences
                                    </Link>
                                    , healthcare, and medical research sectors, supporting researchers
                                    in unraveling complex biological data and advancing scientific
                                    discoveries.
                                </span>{" "}
                                We provide specialized services across pre-clinical, translational,
                                and clinical development, enabling researchers to transform raw data
                                into meaningful insights, biomarker discovery, and publication-ready
                                results.
                            </>
                        }
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Bioinformatics Research and Publication"
                    description="At Pubrica, we bring together a team of multidisciplinary experts to support researchers, scholars, biotech innovators, and healthcare professionals in advancing bioinformatics-driven discoveries. With deep knowledge of computational biology, genomics, data analytics, and scientific writing, our specialists provide end-to-end support, from study design to manuscript publication."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
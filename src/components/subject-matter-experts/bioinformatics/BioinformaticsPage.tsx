"use client";
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

export default function BioinformaticsPage() {
    const disciplines = [
        {
            title: "Single-Cell Sequencing Analysis",
            description: "Our single-cell RNA sequencing (scRNA-seq) analysis services identify cell types, expression differences, and heterogeneity in biological samples. Using dimension reduction and clustering methods such as UMAP and t-SNE, we assess cellular responses to various conditions or treatments across multiple samples.",
            icon: Activity
        },
        {
            title: "Genomic Data Analysis",
            description: "We specialize in next-generation sequencing (NGS) data analysis, including whole-genome sequencing (WGS), whole-exome sequencing (WES), and targeted sequencing. Our expertise helps identify genetic variations, disease predispositions, and pharmacogenomic responses, driving advances in personalized medicine.",
            icon: Dna
        },
        {
            title: "Proteomic Data Analysis",
            description: "Our proteomics services cover protein identification, quantification, and post-translational modification (PTM) analysis. These insights are essential for understanding disease mechanisms and discovering novel therapeutic targets.",
            icon: Layers
        },
        {
            title: "Transcriptomic Data Analysis",
            description: "We analyze RNA sequencing (RNA-seq) data to evaluate gene expression under varying conditions, including differential gene expression, isoform detection, and non-coding RNA analysis. This provides a deeper understanding of gene regulation and functional pathways.",
            icon: PieChart
        },
        {
            title: "Microbiome & Metagenomics Analysis",
            description: "We provide microbiome sequencing and metagenomics analysis (16S rRNA and shotgun sequencing) to profile microbial diversity and host-microbiota interactions. These insights are crucial in gut health, disease research, and nutrition studies.",
            icon: Microscope
        },
        {
            title: "Metabolomics Data Analysis",
            description: "Metabolomics offers a direct snapshot of biochemical processes within cells. Our bioinformatics services connect genetic, environmental, and microbiome influences to disease biomarkers and therapeutic responses through comprehensive metabolite profiling.",
            icon: Activity
        },
        {
            title: "Structural Bioinformatics",
            description: "We support protein structure prediction, molecular docking, and simulation studies to explore structure–function relationships, protein-ligand interactions, and rational drug design.",
            icon: Layers
        },
        {
            title: "Epigenomics Data Analysis",
            description: "Our epigenetics bioinformatics services include DNA methylation profiling, histone modification analysis, and ChIP-seq data interpretation, providing insights into gene regulation, epigenetic markers, and disease associations.",
            icon: Dna
        },
        {
            title: "Clinical & Translational Bioinformatics",
            description: "We bridge omics research and clinical practice by providing bioinformatics for diagnostics, pharmacogenomics, and clinical decision support. These services accelerate the path from bench to bedside in personalized healthcare.",
            icon: Microscope
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
            icon: Database
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80",
            icon: PenTool
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
            icon: Send
        },
        {
            title: "Original Research",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
            icon: FileSpreadsheet
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Transforming Biological Data into Scientific Discovery
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        With Pubrica’s bioinformatics support, researchers gain accurate analyses, actionable insights, and publication-ready outputs trusted by leading journals.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Complex Biological Data into Meaningful Insights
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Bioinformatics is an interdisciplinary field that combines biology, <Link href="#" className="text-sky-600 hover:underline">computer science</Link>, mathematics, and statistics to interpret and analyze biological data. With the rapid growth of high-throughput technologies such as next-generation sequencing (NGS), proteomics, metabolomics, and structural biology, bioinformatics has become the backbone of modern life sciences research. From decoding genetic variations to predicting protein structures and facilitating personalized medicine, bioinformatics provides computational frameworks and algorithms that transform complex biological information into actionable insights.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            As life sciences move toward data-intensive research, the demand for robust bioinformatics methodologies and analytical precision continues to grow. At Pubrica, we offer comprehensive research, writing, editing, and <Link href="#" className="text-sky-600 hover:underline">publication support</Link> for scholars, clinicians, and scientists working across all domains of bioinformatics.
                        </p>

                        <div className="pt-2">
                            <h3 className="font-bold text-gray-800 text-base mb-3">
                                Our Expertise in Animal Science Includes
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>15+ years of expertise</strong> delivering Pubrica bioinformatics solutions for global medical and life sciences research.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>1,200+ projects completed</strong> in genomic sequencing, protein structure analysis, single-cell RNA-seq, and clinical bioinformatics publication support.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>A multidisciplinary team</strong> skilled in machine learning, big data bioinformatics, and advanced visualization (heatmaps, phylogenetic trees, gene expression profiles).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>Proven track record</strong> of supporting high-impact publications and regulatory submissions through precise data analysis and customized pipelines.</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/order-now"
                                className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                                alt="Bioinformatics and laboratory researchers"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 320px, 380px"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Bioinformatics
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            Pubrica offers a comprehensive suite of <Link href="#" className="text-sky-600 hover:underline">bioinformatics services</Link> tailored to the <Link href="#" className="text-sky-600 hover:underline">life sciences</Link>, healthcare, and medical research sectors, supporting researchers in unraveling complex biological data and advancing scientific discoveries.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We provide specialized services across pre-clinical, translational, and clinical development, enabling researchers to transform raw data into meaningful insights, biomarker discovery, and publication-ready results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {disciplines.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-base font-bold text-[#9E1B1E] group-hover:text-[#7d1417] transition-colors pr-2">
                                                {item.title}
                                            </h3>
                                            <div className="p-2 bg-gray-50 rounded-lg shrink-0 text-[#0e3b32]">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Bioinformatics Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we bring together a team of multidisciplinary experts to support researchers, scholars, biotech innovators, and healthcare professionals in advancing bioinformatics-driven discoveries. With deep knowledge of computational biology, genomics, data analytics, and scientific writing, our specialists provide end-to-end support, from study design to manuscript publication.
                    </p>
                </div>

                {/* 4 Cards Per Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={index}
                                className="relative h-[260px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card (Slides up on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description (Appears on Hover) */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}
"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    TrendingUp,
    FileText,
    Database,
    AlertTriangle,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function GlycobiologyPage() {
    const disciplines = [
        {
            title: "Structural Glycobiology",
            iconSrc: "/images/subject-matter-experts/glycobiology/Structural-Glycobiology.webp",
            description: "We specialize in elucidating the three-dimensional architecture of glycoconjugates using advanced analytical tools, including mass spectrometry, NMR spectroscopy, and X-ray crystallography. Understanding glycan structures is fundamental for linking carbohydrate sequences with biological function and for developing innovative therapeutic molecules.",
            icon: Search
        },
        {
            title: "Glycomics and Proteomics Integration",
            iconSrc: "/images/subject-matter-experts/glycobiology/Glycomics-and-Pro-teomics-Integration.webp",
            description: "Our experts specialize in integrating glycomics with proteomics to understand protein–glycan interactions, post-translational modifications, and cellular communication. This synergy helps reveal molecular pathways critical in immune response, cell signalling, and disease mechanisms.",
            icon: TrendingUp
        },
        {
            title: "Glycoengineering and Synthetic Glycobiology",
            iconSrc: "/images/subject-matter-experts/glycobiology/Glycoengineering-and-Synthetic-Glycobiology.webp",
            description: "This discipline involves designing and synthesizing glycoconjugates, glycoproteins, and engineered enzymes to enhance therapeutic efficacy. We support research in glycoengineering for vaccine development, antibody design, and biopharmaceutical optimization.",
            icon: FileText
        },
        {
            title: "Disease Glycobiology",
            iconSrc: "/images/subject-matter-experts/glycobiology/Disease-Glycobiology.webp",
            description: "We explore the role of glycans in various diseases, including cancer, neurodegenerative disorders, infectious diseases, and autoimmune conditions. Our expertise helps researchers identify glycan-based biomarkers and therapeutic targets to advance diagnostic and treatment strategies.",
            icon: Database
        },
        {
            title: "Computational and and Systems Glycobiology",
            iconSrc: "/images/subject-matter-experts/glycobiology/Computational-and-and-Systems-Glycobiology.webp",
            description: "Using bioinformatics tools and computational modelling, we decode complex glycan networks and simulate molecular interactions. This discipline enables predictive modelling, pathway mapping, and integration of large-scale glycomics datasets for systems-level understanding.",
            icon: AlertTriangle
        },
        {
            title: "Microbial and Plant Glycobiology",
            iconSrc: "/images/subject-matter-experts/glycobiology/Microbial-and-Plant-Glycobiology.webp",
            description: "We delve into the study of glycan biosynthesis and modification in microorganisms and plants. This includes investigating glycoconjugates in bacterial pathogenesis, host–microbe interactions, and plant cell wall polysaccharides for agricultural and biotechnological applications.",
            icon: Layers
        },
    ];

    const expertiseCards = [
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
            href: "/services/physician-writing-services/original-research-article",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
        },
        {
            title: "Literature Review and Systematic Reviews",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Cpu,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Glycobiology"
                description="Advancing the Science of Glycans, Glycoproteins, and Glycolipids through Expert Guidance, Data-Driven Insights, and Global Publication Expertise"
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Glycobiology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/glycobiology/Comprehensive-Research-Writing-and-Publication-Support-in-Glycobiology.webp"
                                        alt="Gynaecology research visualization"
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
                                        Glycobiology is a rapidly evolving interdisciplinary field that explores the structure, biosynthesis, and biological functions of carbohydrates (glycans) and glycoconjugates in living organisms. It lies at the intersection of biochemistry, molecular biology, immunology, and biotechnology, offering vital insights into cellular communication, disease mechanisms, and therapeutic development. As research in glycobiology continues to uncover the complex roles of glycans in health and disease, scientists face the dual challenge of advanced experimentation and effective{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            scientific communication
                                        </Link>{" "}
                                        for global publication.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        As a rapidly advancing area, glycobiology research is uncovering novel roles of glycosylation in disease mechanisms such as cancer, diabetes, neurodegenerative disorders, and infectious diseases. Understanding glycan structures and their biosynthetic pathways offers researchers the potential to develop new diagnostics, biomarkers, and glycan-based therapeutics.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we understand the intricacies of glycobiology research, from glycan structure elucidation to functional genomics and glycoengineering. Our comprehensive support services empower researchers, clinicians, and academicians to conduct high-quality studies and publish in top-tier journals with clarity, precision, and impact.
                                    </p>

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

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Glycobiology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, our expertise in Glycobiology spans a comprehensive range of core disciplines that support cutting-edge research, discovery, and publication excellence. Each discipline integrates advanced methodologies and interdisciplinary approaches to decode the structural, functional, and clinical significance of glycans in health and disease.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Header Title with Right Decorative Line */}
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3836] whitespace-nowrap">
                        Our Expertise in Glycobiology Research and Publication
                    </h2>
                    {/* <div className="h-[2px] w-full bg-[#0F3836]"></div> */}
                </div>

                {/* Description with Internal Link */}
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                    Pubrica provides end-to-end research, writing, and{' '}
                    <Link
                        href="/services/publication-support/"
                        className="text-blue-600 no-underline"
                    >
                        publication support
                    </Link>{' '}
                    for glycobiology scholars and industry professionals. Our team comprises domain experts with advanced degrees in molecular biology, biochemistry, and biotechnology, possessing in-depth knowledge of glycosylation pathways and analytical methods. Our services include:
                </p>

                {/* Cards Component with Empty Title & Description */}
                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
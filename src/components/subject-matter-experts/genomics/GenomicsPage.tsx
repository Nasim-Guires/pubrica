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
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function GenomicsPage() {
    const disciplines = [
        {
            title: "Functional Genomics",
            iconSrc: "/images/subject-matter-experts/genomics/Functional-Genomics.webp",
            description: "It explores how genes and regulatory elements interact to control biological processes. This discipline integrates transcriptomics, proteomics, and epigenomics to reveal gene function and pathway dynamics. Pubrica assists researchers in presenting functional genomics studies clearly, emphasizing experimental design, data interpretation, and biological significance, which enhances manuscript readability and scientific impact.",
            icon: Search
        },
        {
            title: "Structural Genomics",
            iconSrc: "/images/subject-matter-experts/genomics/Structural-Genomics.webp",
            description: "They focus on the three-dimensional structures of proteins and nucleic acids. These structural insights are critical for understanding molecular mechanisms and developing therapeutic strategies. Our team supports authors in presenting crystallography, NMR, cryo-EM, and computational modelling studies with clarity, ensuring methodological transparency, accurate data representation, and compliance with structural biology reporting standards.",
            icon: TrendingUp
        },
        {
            title: "Comparative and Evolutionary Genomics",
            iconSrc: "/images/subject-matter-experts/genomics/Comparative-and-Evolutionary-Genomics.webp",
            description: "It investigates genome similarities and differences across species to understand evolutionary relationships and conserved biological functions. Pubrica helps researchers articulate phylogenetic analyses, cross-species comparisons, and evolutionary interpretations, ensuring manuscripts are logically structured and scientifically rigorous.",
            icon: FileText
        },
        {
            title: "Medical and Clinical Genomics",
            iconSrc: "/images/subject-matter-experts/genomics/Medical-and-Clinical-Genomics.webp",
            description: "It applies genomic knowledge to disease diagnosis, prognosis, and therapy. This includes personalized medicine, pharmacogenomics, and translational research. We help authors present variant interpretations, genotype–phenotype correlations, and clinical utility in a clear and ethically compliant manner, supporting publication in high-impact clinical journals.",
            icon: Database
        },
        {
            title: "Cancer Genomics",
            iconSrc: "/images/subject-matter-experts/genomics/Cancer-Genomics.webp",
            description: "Examines genetic changes driving tumour progression, therapeutic response, and resistance mechanisms. Pubrica assists researchers in conveying complex genomic alterations, tumour heterogeneity, and oncogenic pathways in a manner that is accurate, well-structured, and accessible to both scientific and clinical audiences.",
            icon: AlertTriangle
        },
        {
            title: "Epigenomics",
            iconSrc: "/images/subject-matter-experts/genomics/Epigenomics.webp",
            description: "Focuses on heritable changes in gene expression that do not involve alterations in the DNA sequence, such as DNA methylation, histone modification, and chromatin accessibility. Pubrica supports the clear presentation of these complex regulatory mechanisms, experimental workflows, and functional implications.",
            icon: Layers
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/translation-with-editing",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
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
                title="Transforming Genomic Data into Publishable Scientific Insight"
                description="Expert editing, peer review support, and publication guidance for cutting-edge genomics research."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Genomic Discoveries Through Expert Scientific Communication
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/genomics/Genomic-Data.webp"
                                        alt="Genomics research visualization"
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
                                        Genomics is transforming the landscape of modern biology and medicine by enabling comprehensive analysis of entire genomes to understand the structure, function, evolution, and regulation of genes. From unravelling the molecular basis of complex diseases to driving breakthroughs in personalized medicine, agriculture, and biotechnology, genomics stands at the forefront of scientific innovation. As genomic technologies continue to evolve rapidly, the ability to communicate research findings with clarity, accuracy, and publication-ready quality has become just as critical as the research itself.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide end-to-end{" "}
                                        <Link href="/services/publication-support" className="text-blue-600 no-underline">
                                            genomics publication support
                                        </Link>
                                        , empowering researchers, clinicians, and industry scientists to publish high-impact{" "}
                                        <Link href="/services/research-services" className="text-blue-600 no-underline">
                                            genomics research
                                        </Link>{" "}
                                        in leading international journals. Our expert-driven editorial and scientific services ensure that your{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline">
                                            genomics manuscripts
                                        </Link>{" "}
                                        meet the highest standards of technical rigor, ethical compliance, and scholarly excellence.
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
                            Our Core Disciplines In Genomics
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Genomics is revolutionizing modern biology and medicine by enabling a comprehensive understanding of genetic variation, gene function, and molecular mechanisms underlying health and disease. At Pubrica, we support researchers across the full spectrum of genomic disciplines by delivering expert <Link href="/services/editing-and-translation/scientific-editing/" className="text-blue-600">scientific editing</Link>, publication support, and strategic guidance to ensure research findings are communicated with accuracy, clarity, and global impact.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Genomic Research and Publication"
                    description="Pubrica delivers comprehensive genomics support services designed to enhance the quality, credibility, and impact of your research. Our team consists of PhD-level editors, genomics specialists, and publication experts with deep domain knowledge across life sciences and clinical research."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
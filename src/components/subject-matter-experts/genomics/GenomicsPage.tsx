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

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
            href: "/services/editing-and-translation/translation-with-editing"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Transforming Genomic Data into Publishable Scientific Insight
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Expert editing, peer review support, and publication guidance for cutting-edge genomics research.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Genomic Discoveries Through Expert Scientific Communication
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Genomics is transforming the landscape of modern biology and medicine by enabling comprehensive analysis of entire genomes to understand the structure, function, evolution, and regulation of genes. From unravelling the molecular basis of complex diseases to driving breakthroughs in personalized medicine, agriculture, and biotechnology, genomics stands at the forefront of scientific innovation. As genomic technologies continue to evolve rapidly, the ability to communicate research findings with clarity, accuracy, and publication-ready quality has become just as critical as the research itself.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide end-to-end{' '}
                            <Link href="/services/publication-support" className="text-blue-600 no-underline hover:no-underline">
                                genomics publication support
                            </Link>
                            , empowering researchers, clinicians, and industry scientists to publish high-impact{' '}
                            <Link href="/services/research-services" className="text-blue-600 no-underline hover:no-underline">
                                genomics research
                            </Link>{' '}
                            in leading international journals. Our expert-driven editorial and scientific services ensure that your{' '}
                            <Link href="/services/medical-writing" className="text-blue-600 no-underline hover:no-underline">
                                genomics manuscripts
                            </Link>{' '}
                            meet the highest standards of technical rigor, ethical compliance, and scholarly excellence.
                        </p>

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
                                src="/images/subject-matter-experts/genomics/Genomic-Data.webp"
                                alt="Genomics research visualization"
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Genomics
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Genomics is revolutionizing modern biology and medicine by enabling a comprehensive understanding of genetic variation, gene function, and molecular mechanisms underlying health and disease. At Pubrica, we support researchers across the full spectrum of genomic disciplines by delivering expert scientific editing, publication support, and strategic guidance to ensure research findings are communicated with accuracy, clarity, and global impact.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Genomic Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica delivers comprehensive genomics support services designed to enhance the quality, credibility, and impact of your research. Our team consists of PhD-level editors, genomics specialists, and publication experts with deep domain knowledge across life sciences and clinical research.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="relative h-[280px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group block bg-white"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-[65%]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 group-hover:h-full shadow-lg flex flex-col items-center justify-center text-center">

                                    {/* Floating Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32] group-hover:top-4 transition-all duration-300">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2 group-hover:mt-12 transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-2">
                                        {service.description}
                                    </p>

                                </div>
                            </Link>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}
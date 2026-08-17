"use client";
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

    const services = [
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/physician-writing-services/original-research-article"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
            href: "/services/editing-and-translation"
        },
        {
            title: "Literature Review and Systematic Reviews",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Cpu,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/publication-support/journal-submission"
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
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Glycobiology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Advancing the Science of Glycans, Glycoproteins, and Glycolipids through Expert Guidance, Data-Driven Insights, and Global Publication Expertise
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                           Comprehensive Research, Writing, and Publication Support in Glycobiology
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          Glycobiology is a rapidly evolving interdisciplinary field that explores the structure, biosynthesis, and biological functions of carbohydrates (glycans) and glycoconjugates in living organisms. It lies at the intersection of biochemistry, molecular biology, immunology, and biotechnology, offering vital insights into cellular communication, disease mechanisms, and therapeutic development. As research in glycobiology continues to uncover the complex roles of glycans in health and disease, scientists face the dual challenge of advanced experimentation and effective scientific communication for global publication.


                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            As a rapidly advancing area, glycobiology research is uncovering novel roles of glycosylation in disease mechanisms such as cancer, diabetes, neurodegenerative disorders, and infectious diseases. Understanding glycan structures and their biosynthetic pathways offers researchers the potential to develop new diagnostics, biomarkers, and glycan-based therapeutics.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          At Pubrica, we understand the intricacies of glycobiology research, from glycan structure elucidation to functional genomics and glycoengineering. Our comprehensive support services empower researchers, clinicians, and academicians to conduct high-quality studies and publish in top-tier journals with clarity, precision, and impact.
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
                                src="/images/subject-matter-experts/glycobiology/Comprehensive-Research-Writing-and-Publication-Support-in-Glycobiology.webp"
                                alt="Gynaecology research visualization"
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
                            Our Core Disciplines In Glycobiology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, our expertise in Glycobiology spans a comprehensive range of core disciplines that support cutting-edge research, discovery, and publication excellence. Each discipline integrates advanced methodologies and interdisciplinary approaches to decode the structural, functional, and clinical significance of glycans in health and disease.
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
                                                {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
                                            ) : (
                                                <IconComponent className="w-6 h-6" />
                                            )}
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

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Glycobiology  Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                       Pubrica provides end-to-end research, writing, and publication support for glycobiology scholars and industry professionals. Our team comprises domain experts with advanced degrees in molecular biology, biochemistry, and biotechnology, possessing in-depth knowledge of glycosylation pathways and analytical methods. Our services include:
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
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                            Pubrica’s reproductive medicine editing and obstetrics and gynaecology writing services ensure precision, clarity, and compliance with top-tier journal requirements.
                        </p>

            </section>

        </main>
    );
}
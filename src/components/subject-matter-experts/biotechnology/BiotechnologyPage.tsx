"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Settings,
    Shield,
    Layers,
    Cpu,
    Activity,
    Leaf,
    FileText,
    PenTool,
    Image as ImageIcon,
    Database,
    Compass,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function BiotechnologyPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedCard, setExpandedCard] = useState<number | null>(0);

    const coreDisciplines = [
        {
            title: "Understanding Gene Expression",
            iconSrc: "/images/subject-matter-experts/biotechnology/Molecular-Biology-and-Genetics-1.png",
            subtitle: "Molecular Biology & Genetics",
            desc: "Understanding gene expression, DNA sequencing, and protein interactions forms the foundation of modern biotechnology. Our experts assist in designing experiments, analysing genetic data, and interpreting results to help researchers draw meaningful conclusions.",
            icon: Settings,
        },
        {
            title: "Microbiology and Immunology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Microbiology-and-Immunology.png",
            subtitle: "Immune Systems & Pathogens",
            desc: "We support research in microbial biotechnology, including bacteriology, virology, and fungal studies. Our experts aid in microbial culture analysis, pathogenic studies, and immunological assays, helping researchers explore vaccine development, antimicrobial resistance, and immune system interactions.",
            icon: Shield,
        },
        {
            title: "Bioprocessing and Industrial Biotechnology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Bioprocessing-and-Industrial-Biotechnology.png",
            subtitle: "Scaling & Fermentation",
            desc: "We offer expertise in bioprocess engineering, fermentation technology, and enzyme production. From optimizing large-scale production processes to ensuring sustainability and efficiency, our guidance helps bridge the gap between laboratory research and industrial application.",
            icon: Layers,
        },
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Bioinformatics-and-Computational-Biology.png",
            subtitle: "Genomic Big Data",
            desc: "In the era of big data, our bioinformatics experts assist with genomic, proteomic, and metabolomic analyses. We provide computational modelling, data mining, and predictive analysis support to help researchers derive meaningful insights from complex biological datasets.",
            icon: Cpu,
        },
        {
            title: "Pharmaceutical and Medical Biotechnology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Pharmaceutical-and-Medical-Biotechnology.png",
            subtitle: "Therapeutics & Diagnostics",
            desc: "We support research in drug development, molecular diagnostics, and therapeutic interventions. Our guidance encompasses preclinical studies, biomarker identification, and formulation research to accelerate discoveries from bench to bedside.",
            icon: Activity,
        },
        {
            title: "Plant and Animal Biotechnology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Plant-and-Animal-Biotechnology.png",
            subtitle: "Agricultural Innovations",
            desc: "Our services extend to agricultural and animal research, assisting in crop improvement, transgenic plant studies, and livestock genetic enhancement. We provide support in tissue culture, cloning, and molecular breeding to accelerate innovations in agriculture and animal husbandry.",
            icon: Leaf,
        },
    ];

    const services = [
        {
            title: "Editing & Proofreading",
            subtitle: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: FileText,
        },
        {
            title: "Grant Writing",
            subtitle: "Crafting compelling research proposals to secure funding for innovative projects.",
            imageUrl: "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            subtitle: "Professional visuals for your figures, tables, and graphical abstracts.",
            imageUrl: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: ImageIcon,
        },
        {
            title: "Journal Formatting",
            subtitle: "Tailored manuscript formatting to meet specific journal guidelines.",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            subtitle: "Structured data gathering tailored for artificial intelligence and machine learning.",
            imageUrl: "/images/subject-matter-experts/biotechnology/Data-Collection-for-AI-ML.webp",
            icon: Database,
        },
        {
            title: "Journal Selection",
            subtitle: "Strategic journal selection to maximize publication success.",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: Compass,
        },
    ];

    const trendsTabs = [
        {
            title: "CRISPR and Gene Editing",
            heading: "CRISPR & Gene Editing",
            content:
                "Precise gene-editing technologies like CRISPR-Cas9 are revolutionizing medical research and agricultural development, offering unprecedented control over genetic modification.",
        },
        {
            title: "Synthetic Biology",
            heading: "Synthetic Biology",
            content:
                "The design and construction of artificial biological systems are opening new possibilities in drug development, biomaterials, and industrial processes.",
        },
        {
            title: "Bioinformatics and Big Data",
            heading: "Bioinformatics and Big Data",
            content:
                "Advanced computational tools are enabling researchers to analyse vast biological datasets, leading to more accurate predictions, personalized medicine, and efficient drug discovery.",
        },
        {
            title: "Regenerative Medicine and Stem Cell Research",
            heading: "Regenerative Medicine and Stem Cell Research",
            content:
                "Stem cell technology and regenerative medicine are redefining treatment paradigms for degenerative diseases and injuries. Cutting-edge research in this area focuses on tissue engineering, organ regeneration, and cellular therapies.",
        },
        {
            title: "Biopharmaceutical Innovations",
            heading: "Biopharmaceutical Innovations",
            content:
                "Biopharmaceuticals, including monoclonal antibodies, cell therapies, and RNA-based drugs, are at the forefront of modern medicine. These therapies are addressing previously untreatable conditions and offering new hope to patients worldwide.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
            <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #0d3630;
          border-radius: 4px;
        }
      `}</style>

            {/* HEADER HERO BANNER */}
            <header className="w-full bg-[#0d3630] text-white py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto border border-gray-500/40 py-8 px-6 bg-[#0a2c27]/40 backdrop-blur-sm rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
                        Biotechnology
                    </h1>
                    <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Harnessing living organisms and biological systems to develop innovative solutions for various fields, from medicine and agriculture to industrial processes
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

                {/* INTRO SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
                            Empowering Research Excellence in Biotechnology through Expert Guidance and Support
                        </h2>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <p>
                                Biotechnology, a multidisciplinary field at the intersection of biology, chemistry, and engineering, has revolutionized the way we approach healthcare, agriculture, environmental sustainability, and industrial processes. From developing sustainable agricultural practices to advancing medical treatments, biotechnology has become pivotal in modern science. It encompasses a broad spectrum of applications, including genetic engineering, molecular biology, bioinformatics, and regenerative medicine, making it an interdisciplinary field that transforms scientific knowledge into practical solutions.
                            </p>
                            <p>
                                Currently, there are more than 250 biotechnology healthcare products and vaccines available to patients, many of which treat previously untreatable diseases. More than 13.3 million farmers around the world use agricultural biotechnology to increase yields, prevent damage from insects and pests, and reduce farming&apos;s impact on the environment.
                            </p>
                            <p>
                                At Pubrica, we empower researchers, scholars, and industry professionals in biotechnology to excel in their work through expert guidance, publication support, and comprehensive research assistance.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="#quote"
                                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/biotechnology/Biotechnology.webp"
                                alt="Biotechnology Laboratory Research"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* CORE DISCIPLINES SECTION */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Core Disciplines In Biotechnology
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, we provide comprehensive expertise in the multifaceted field of biotechnology, empowering researchers, academicians, and industry professionals to translate scientific discoveries into impactful solutions. Our services span across key disciplines of biotechnology, ensuring a holistic approach to research, development, and publication support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreDisciplines.map((item, index) => {
                            const Icon = item.icon;
                            const isExpanded = expandedCard === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                                >
                                    <div>
                                        <div className="flex justify-between items-start gap-3 mb-3">
                                            <div>
                                                <h3 className="text-xs font-bold text-[#b81c1c] leading-snug">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className="p-2 bg-[#0d3630]/10 rounded-lg text-[#0d3630] shrink-0">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-[#0d3630]">
                                            {item.subtitle}
                                        </span>
                                        <button
                                            onClick={() => setExpandedCard(isExpanded ? null : index)}
                                            className="text-gray-400 hover:text-[#0d3630] transition-colors p-1"
                                            aria-label="Toggle details"
                                        >
                                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* WHY CHOOSE PUBRICA SERVICES */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Why Choose Pubrica for Biotechnology Research and Publishing?
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Pubrica stands out as a trusted partner for biotechnology research and publishing, offering a comprehensive suite of services designed to support researchers at every stage of their scientific journey. From manuscript preparation and editing to journal selection and publication strategy, we empower scientists to communicate their innovations effectively. We provide services such as:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-72"
                                >
                                    <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-gray-100">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-72px)] group-hover:translate-y-0 flex flex-col h-44 z-10 shadow-lg">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full border border-gray-200 shadow-md group-hover:bg-[#0d3630] group-hover:text-white transition-colors duration-300">
                                            <ServiceIcon className="w-4 h-4 text-[#0d3630] group-hover:text-white" />
                                        </div>

                                        <div className="pt-3 text-center">
                                            <h3 className="text-xs font-bold text-[#0d3630] leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <div className="mt-3 text-center overflow-hidden flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                            <p className="text-[11px] text-gray-600 leading-relaxed px-1">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* EMERGING TRENDS SECTION */}
                <section className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Emerging Trends in Biotechnology
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            The biotechnology sector is witnessing rapid scientific evolution. Some emerging trends include:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-gray-300 bg-[#f8f9fa] rounded-t-sm overflow-hidden text-center">
                        {trendsTabs.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`py-3 px-3 text-[11px] md:text-xs font-bold transition-all border-r border-b lg:border-b-0 border-gray-300 last:border-r-0 flex items-center justify-center leading-snug ${isActive
                                            ? "bg-[#0d3630] text-white border-b-2 border-b-[#0d3630]"
                                            : "bg-[#f8f9fa] text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="border border-gray-300 border-t-0 rounded-b-sm p-6 bg-white shadow-sm space-y-3">
                        <h3 className="text-sm md:text-base font-bold text-[#0d3630]">
                            {trendsTabs[activeTab].heading}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {trendsTabs[activeTab].content}
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
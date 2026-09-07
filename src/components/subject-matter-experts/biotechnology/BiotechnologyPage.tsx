"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";

export default function BiotechnologyPage() {
    const [activeTab, setActiveTab] = useState(0);

    const coreDisciplines = [
        {
            title: "Understanding Gene Expression",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Molecular-Biology-and-Genetics-1.png",
            subtitle: "Molecular Biology & Genetics",
            desc: "Understanding gene expression, DNA sequencing, and protein interactions forms the foundation of modern biotechnology. Our experts assist in designing experiments, analysing genetic data, and interpreting results to help researchers draw meaningful conclusions.",
            icon: Settings,
        },
        {
            title: "Microbiology and Immunology",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Microbiology-and-Immunology.png",
            subtitle: "Immune Systems & Pathogens",
            desc: "We support research in microbial biotechnology, including bacteriology, virology, and fungal studies. Our experts aid in microbial culture analysis, pathogenic studies, and immunological assays, helping researchers explore vaccine development, antimicrobial resistance, and immune system interactions.",
            icon: Shield,
        },
        {
            title: "Bioprocessing and Industrial Biotechnology",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Bioprocessing-and-Industrial-Biotechnology.png",
            subtitle: "Scaling & Fermentation",
            desc: "We offer expertise in bioprocess engineering, fermentation technology, and enzyme production. From optimizing large-scale production processes to ensuring sustainability and efficiency, our guidance helps bridge the gap between laboratory research and industrial application.",
            icon: Layers,
        },
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Bioinformatics-and-Computational-Biology.png",
            subtitle: "Genomic Big Data",
            desc: "In the era of big data, our bioinformatics experts assist with genomic, proteomic, and metabolomic analyses. We provide computational modelling, data mining, and predictive analysis support to help researchers derive meaningful insights from complex biological datasets.",
            icon: Cpu,
        },
        {
            title: "Pharmaceutical and Medical Biotechnology",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Pharmaceutical-and-Medical-Biotechnology.png",
            subtitle: "Therapeutics & Diagnostics",
            desc: "We support research in drug development, molecular diagnostics, and therapeutic interventions. Our guidance encompasses preclinical studies, biomarker identification, and formulation research to accelerate discoveries from bench to bedside.",
            icon: Activity,
        },
        {
            title: "Plant and Animal Biotechnology",
            iconSrc:
                "/images/subject-matter-experts/biotechnology/Plant-and-Animal-Biotechnology.png",
            subtitle: "Agricultural Innovations",
            desc: "Our services extend to agricultural and animal research, assisting in crop improvement, transgenic plant studies, and livestock genetic enhancement. We provide support in tissue culture, cloning, and molecular breeding to accelerate innovations in agriculture and animal husbandry.",
            icon: Leaf,
        },
    ];

    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            icon: FileText,
            imageUrl:
                "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            href: "/services/editing-and-translation/",
        },
        {
            title: "Grant Writing",
            desc: "Crafting compelling research proposals to secure funding for innovative projects.",
            icon: PenTool,
            imageUrl:
                "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            href: "/services/research-services/grant-writing/",
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            icon: ImageIcon,
            imageUrl:
                "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            href: "/services/publication-support/art-work-preparation/",
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            icon: FileText,
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            icon: Database,
            imageUrl:
                "/images/subject-matter-experts/biotechnology/Data-Collection-for-AI-ML.webp",
            href: "/services/data-analytics-machine-learning/data-collection/",
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            icon: Compass,
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            href: "/services/publication-support/journal-selection/",
        },
    ];
    const emergingTrends = [
        {
            id: "crispr",
            title: "CRISPR and Gene Editing",
            description:
                "Precise gene-editing technologies like CRISPR-Cas9 are revolutionizing medical research and agricultural development, offering unprecedented control over genetic modification.",
        },
        {
            id: "synthetic-biology",
            title: "Synthetic Biology",
            description:
                "The design and construction of artificial biological systems are opening new possibilities in drug development, biomaterials, and industrial processes.",
        },
        {
            id: "bioinformatics",
            title: "Bioinformatics and Big Data",
            description:
                "Advanced computational tools are enabling researchers to analyse vast biological datasets, leading to more accurate predictions, personalized medicine, and efficient drug discovery.",
        },
        {
            id: "regenerative-medicine",
            title: "Regenerative Medicine and Stem Cell Research",
            description:
                "Stem cell technology and regenerative medicine are redefining treatment paradigms for degenerative diseases and injuries. Cutting-edge research in this area focuses on tissue engineering, organ regeneration, and cellular therapies.",
        },
        {
            id: "biopharmaceutical",
            title: "Biopharmaceutical Innovations",
            description:
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
            <HeroBanner
                title="Biotechnology"
                description="Harnessing living organisms and biological systems to develop innovative solutions for various fields, from medicine and agriculture to industrial processes"
                headingAs="h1"
            />
            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">

                {/* INTRO SECTION */}
                <section className="max-w-7xl mx-auto px-4 py-4">
                    {/* Section heading placed above everything like the reference image */}
                    <div className="space-y-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight max-w-4xl">
                            Empowering Research Excellence in Biotechnology through Expert Guidance and Support
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Biotechnology, a multidisciplinary field at the intersection of biology, chemistry, and engineering, has revolutionized the way we approach healthcare, <Link href="/subject-matter-experts/agriculture/" className="text-blue-600">agriculture</Link>, environmental sustainability, and industrial processes. From developing sustainable agricultural practices to advancing medical treatments, biotechnology has become pivotal in modern science. It encompasses a broad spectrum of applications, including genetic engineering, molecular biology, <Link href="/services/bioinformatics/" className="text-blue-600">bioinformatics</Link>, and regenerative medicine, making it an interdisciplinary field that transforms scientific knowledge into practical solutions.
                                </p>
                                <p>
                                    Currently, there are more than 250 biotechnology healthcare products and vaccines available to patients, many of which treat previously untreatable diseases. More than 13.3 million farmers around the world use agricultural biotechnology to increase yields, prevent damage from insects and pests, and reduce farming&apos;s impact on the environment.
                                </p>
                                <p>
                                    At Pubrica, we empower researchers, scholars, and industry professionals in biotechnology to excel in their work through expert guidance, <Link href="/services/publication-support/" className="text-blue-600">publication support</Link>, and comprehensive research assistance.
                                </p>
                            </div>

                            <div className="pt-4">
                                <GetFreeQuoteButton />
                            </div>
                        </div>

                        {/* Right Circular Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                                <Image
                                    src="/images/subject-matter-experts/biotechnology/Biotechnology.webp"
                                    alt="Biotechnology Laboratory Research"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CORE DISCIPLINES SECTION */}
                <CoreAreasSection
                    title="Our Core Disciplines In Biotechnology"
                    description="At Pubrica, we provide comprehensive expertise in the multifaceted field of biotechnology, empowering researchers, academicians, and industry professionals to translate scientific discoveries into impactful solutions. Our services span across key disciplines of biotechnology, ensuring a holistic approach to research, development, and publication support."
                    items={coreDisciplines}
                />

                <div>
                    {/* Custom Section with the Title, Divider, and Hyperlink */}
                    <div className="mb-6">
                        {/* Heading with inline line matching the image */}
                        <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                                Why Choose Pubrica for Biotechnology Research and Publishing?
                            </h2>
                            <div className="flex-grow border-t-2 border-black"></div>
                        </div>

                        {/* Description paragraph with the functional Link */}
                        <p className="text-gray-700 leading-relaxed">
                            Pubrica stands out as a trusted partner for biotechnology research and publishing,
                            offering a comprehensive suite of services designed to support researchers at every stage of their
                            scientific journey. From manuscript preparation and editing to{' '}
                            <Link href="services/publication-support/journal-selection/" className="text-blue-600 ">
                                journal selection
                            </Link>{' '}
                            and publication strategy, we empower scientists to communicate their innovations effectively.
                            We provide services such as:
                        </p>
                    </div>

                    {/* Render the component with empty title/description so it only outputs the cards */}
                    <CommonExpertiseCards
                        title=""
                        description=""
                        cards={expertiseCards}
                    />
                </div>

                {/* EMERGING TRENDS SECTION */}
                <EmergingTrendsSection
                    title="Emerging Trends in Biotechnology"
                    description="The biotechnology sector is witnessing rapid scientific evolution. Some emerging trends include:"
                    trends={emergingTrends}
                    footerText="These emerging trends are driving innovation across biotechnology, healthcare, agriculture, and industrial applications."
                />

            </main>
        </div>
    );
}
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dna,
    Network,
    Layers,
    Cpu,
    BarChart3,
    Bot,
    Search,
    FileText,
    Database,
    PenTool,
    FileSearch,
    Send,
    FileSpreadsheet,
    BookMarked,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function BiocomputingPage() {
    const disciplines = [
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc:
                "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            description:
                "Bioinformatics is the backbone of biocomputing, focusing on the storage, retrieval, and analysis of biological data. We assist researchers in developing algorithms for sequence alignment, genome assembly, molecular modelling, and evolutionary analysis.",
            icon: Dna,
        },
        {
            title: "Systems Biology",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Systems-Biology.webp",
            description:
                "It integrates computational models to study complex biological networks and interactions. Our support includes constructing predictive models of cellular pathways, gene regulatory networks, and metabolic circuits.",
            icon: Network,
        },
        {
            title: "Structural Bioinformatics",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Structural-Bioinformatics.webp",
            description:
                "It involves analysing three-dimensional structures of biomolecules such as proteins, nucleic acids, and complexes. We guide researchers in molecular docking, structure prediction, and simulation of protein-ligand interactions.",
            icon: Layers,
        },
        {
            title: "Synthetic Biology and Computational Modelling",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Synthetic-Biology-and-Computational-Modelling.webp",
            description:
                "Synthetic biology leverages biocomputing to design and optimize genetic circuits, metabolic pathways, and synthetic organisms. Our experts facilitate computational modelling of synthetic constructs, enabling accurate predictions of biological behaviour.",
            icon: Cpu,
        },
        {
            title: "Omics Data Analysis",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Omics-Data-Analysis.webp",
            description:
                "Omics technologies, including genomics, transcriptomics, proteomics, and metabolomics, generate massive datasets. We support researchers in multi-omics integration, pathway enrichment analysis, and machine learning-based predictions.",
            icon: BarChart3,
        },
        {
            title: "Machine Learning and AI in Biocomputing",
            iconSrc:
                "/images/subject-matter-experts/biocomputing/Machine-Learning-and-AI-in-Biocomputing.webp",
            description:
                "Artificial intelligence (AI) and machine learning are revolutionizing biocomputing by identifying patterns, predicting molecular interactions, and optimizing experimental design. Our team specializes in training AI models for disease prediction, drug discovery, and personalized medicine.",
            icon: Bot,
        },
    ];

    const expertiseCards: ExpertiseCardItem[] = [
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
                title="Biocomputing"
                description="Comprehensive research, publication, and editorial support in biocomputing for scholars, scientists, research institutions, and industry innovators, enabling breakthroughs through the power of computation and biological data intelligence."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Science with Innovative Biocomputing Research and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biocomputing/Biocomputing.webp"
                                        alt="Biocomputing and laboratory research"
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
                                        Biocomputing, also known as biological computing or bioinformatics-driven computation, is an interdisciplinary field that converges biology, <Link href="/subject-matter-experts/computer-science" className="text-blue-600 no-underline hover:no-underline">computer science</Link>, and mathematics. As biological data expands at an unprecedented pace, computational biology and biocomputing have become crucial in unlocking hidden patterns, optimizing research efficiency, and designing novel biological solutions.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        In modern life sciences, biocomputing drives innovation across genomics, proteomics, structural biology, immunology, neurobiology, drug development, systems biology, and personalized medicine. From discovering disease genes to simulating molecular interactions and predicting therapeutic targets, biocomputing capabilities have transformed how research is conducted and how scientific decisions are made.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we specialize in offering end-to-end <Link href="/services/research-services/" className="text-blue-600 no-underline hover:no-underline">biocomputing research support</Link>, scientific manuscript writing, <Link href="/subject-matter-experts/bioinformatics" className="text-blue-600 no-underline hover:no-underline">bioinformatics data analytics</Link>, and <Link href="/services/publication-support/" className="text-blue-600 no-underline hover:no-underline">publication assistance</Link>. With subject-matter experts, data scientists, scientific writers, and domain editors, we ensure your research achieves clarity, accuracy, scientific integrity, and global publishing standards, allowing researchers to focus on discovery while we support the technical and editorial complexities.
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
                    <CoreAreasSection
                        title="Our Core Disciplines In Biocomputing"
                        description="At Pubrica, our expertise spans several core disciplines that define the scope of biocomputing research and applications:"
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Biocomputing Research and Publication"
                    description={
                        <>
                            Pubrica is dedicated to supporting researchers at every stage of their biocomputing projects, ensuring high-quality, reproducible, and impactful outcomes. Our services include:
                        </>
                    }
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
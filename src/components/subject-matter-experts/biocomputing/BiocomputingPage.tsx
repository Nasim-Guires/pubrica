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

export default function BiocomputingPage() {
    const disciplines = [
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            description: "Bioinformatics is the backbone of biocomputing, focusing on the storage, retrieval, and analysis of biological data. We assist researchers in developing algorithms for sequence alignment, genome assembly, molecular modelling, and evolutionary analysis.",
            icon: Dna
        },
        {
            title: "Systems Biology",
            iconSrc: "/images/subject-matter-experts/biocomputing/Systems-Biology.webp",
            description: "It integrates computational models to study complex biological networks and interactions. Our support includes constructing predictive models of cellular pathways, gene regulatory networks, and metabolic circuits.",
            icon: Network
        },
        {
            title: "Structural Bioinformatics",
            iconSrc: "/images/subject-matter-experts/biocomputing/Structural-Bioinformatics.webp",
            description: "It involves analysing three-dimensional structures of biomolecules such as proteins, nucleic acids, and complexes. We guide researchers in molecular docking, structure prediction, and simulation of protein-ligand interactions.",
            icon: Layers
        },
        {
            title: "Synthetic Biology and Computational Modelling",
            iconSrc: "/images/subject-matter-experts/biocomputing/Synthetic-Biology-and-Computational-Modelling.webp",
            description: "Synthetic biology leverages biocomputing to design and optimize genetic circuits, metabolic pathways, and synthetic organisms. Our experts facilitate computational modelling of synthetic constructs, enabling accurate predictions of biological behaviour.",
            icon: Cpu
        },
        {
            title: "Omics Data Analysis",
            iconSrc: "/images/subject-matter-experts/biocomputing/Omics-Data-Analysis.webp",
            description: "Omics technologies, including genomics, transcriptomics, proteomics, and metabolomics, generate massive datasets. We support researchers in multi-omics integration, pathway enrichment analysis, and machine learning-based predictions.",
            icon: BarChart3
        },
        {
            title: "Machine Learning and AI in Biocomputing",
            iconSrc: "/images/subject-matter-experts/biocomputing/Machine-Learning-and-AI-in-Biocomputing.webp",
            description: "Artificial intelligence (AI) and machine learning are revolutionizing biocomputing by identifying patterns, predicting molecular interactions, and optimizing experimental design. Our team specializes in training AI models for disease prediction, drug discovery, and personalized medicine.",
            icon: Bot
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            icon: FileSearch
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send
        },
        {
            title: "Original Research",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSpreadsheet
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Biocomputing
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editorial support in biocomputing for scholars, scientists, research institutions, and industry innovators, enabling breakthroughs through the power of computation and biological data intelligence.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Science with Innovative Biocomputing Research and Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biocomputing, also known as biological computing or bioinformatics-driven computation, is an interdisciplinary field that converges biology, <Link href="/subject-matter-experts/computer-science" className="text-blue-600 no-underline hover:no-underline">computer science</Link>, and mathematics. As biological data expands at an unprecedented pace, computational biology and biocomputing have become crucial in unlocking hidden patterns, optimizing research efficiency, and designing novel biological solutions.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            In modern life sciences, biocomputing drives innovation across genomics, proteomics, structural biology, immunology, neurobiology, drug development, systems biology, and personalized medicine. From discovering disease genes to simulating molecular interactions and predicting therapeutic targets, biocomputing capabilities have transformed how research is conducted and how scientific decisions are made.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we specialize in offering end-to-end <Link href="/subject-matter-experts/biocomputing" className="text-blue-600 no-underline hover:no-underline">biocomputing research support</Link>, scientific manuscript writing, <Link href="/subject-matter-experts/bioinformatics" className="text-blue-600 no-underline hover:no-underline">bioinformatics data analytics</Link>, and publication assistance. With subject-matter experts, data scientists, scientific writers, and domain editors, we ensure your research achieves clarity, accuracy, scientific integrity, and global publishing standards, allowing researchers to focus on discovery while we support the technical and editorial complexities.
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
                                src="/images/subject-matter-experts/biocomputing/Biocomputing.webp"
                                alt="Biocomputing and laboratory research"
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
                            Our Core Disciplines In Biocomputing
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, our expertise spans several core disciplines that define the scope of biocomputing research and applications:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Biocomputing Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica is dedicated to supporting researchers at every stage of their biocomputing projects, ensuring high-quality, reproducible, and impactful outcomes. Our services include:
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
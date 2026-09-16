"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dna,
    RotateCw,
    Radio,
    GitCommit,
    Sparkles,
    ShieldAlert,
    Move,
    Microscope,
    FileText,
    CheckCircle,
    ImageIcon,
    UserCheck,
    Send,
    BookOpen,
    MessageSquare,
    PenTool,
    Search,
    ChevronDown,
    ArrowRight
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CellBiologyPage() {
    const disciplines = [
        {
            title: "Cell Structure and Organization",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cell-Structure-and-Organization.webp",
            description:
                "We provide expertise in the study of cellular architecture, including organelles, membranes, and cytoskeletal components. Our editors assist researchers in exploring how cell structures support essential biological functions such as metabolism, transport, and communication.",
            icon: Dna,
        },
        {
            title: "Cell Division and Cell Cycle Regulation",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cell-Division-and-Cell-Cycle-Regulation.webp",
            description:
                "Understanding the precise control of cell growth and replication is central to biology and medicine. We support research on mitosis, meiosis, checkpoints, and regulatory proteins that maintain genomic integrity and prevent uncontrolled cell proliferation.",
            icon: RotateCw,
        },
        {
            title: "Cellular Signalling and Communication",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cellular-Signalling-and-Communication.webp",
            description:
                "Our experts assist in studies focusing on how cells perceive and respond to their environment through signalling pathways. We help authors communicate discoveries related to receptor-ligand interactions, intracellular signalling cascades, and molecular cross-talk between cells and tissues.",
            icon: Radio,
        },
        {
            title: "Cell Differentiation and Development",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cell-Differentiation-and-Development.webp",
            description:
                "Cell differentiation underlies tissue formation and organismal development. We guide research manuscripts that uncover transcriptional, epigenetic, and environmental factors influencing cell fate, morphogenesis, and regeneration.",
            icon: GitCommit,
        },
        {
            title: "Stem Cell Biology",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Stem-Cell-Public-Biology.webp",
            description:
                "Stem cells represent a frontier in regenerative medicine. We specialize in assisting manuscripts related to pluripotency, lineage commitment, reprogramming, and therapeutic applications of stem cells in tissue repair and disease treatment.",
            icon: Sparkles,
        },
        {
            title: "Cell Death and Survival Mechanisms",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cell-Death-and-Survival-Mechanisms.webp",
            description:
                "Apoptosis, necrosis, and autophagy are critical to maintaining cellular balance. Our subject-matter experts provide editorial guidance on molecular pathways regulating programmed cell death and their implications in cancer and degenerative diseases.",
            icon: ShieldAlert,
        },
        {
            title: "Cytoskeleton and Cell Motility",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cytoskeleton-and-Cell-Motility.webp",
            description:
                "Cell motility drives development, immune responses, and metastasis. Our expertise spans cytoskeletal dynamics, motor proteins, and cell migration mechanisms, all central to physiology and pathology.",
            icon: Move,
        },
        {
            title: "Cellular Pathology and Disease Mechanisms",
            iconSrc:
                "/images/subject-matter-experts/cell-biology/Cellular-Pathology-and-Disease-Mechanisms.webp",
            description:
                "We help researchers connect molecular alterations to disease phenotypes. Our editors ensure accuracy and impact in studies linking cellular dysfunction to conditions such as cancer, neurodegeneration, and infectious diseases.",
            icon: Microscope,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: UserCheck,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: ImageIcon,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: BookOpen,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cell Biology"
                description="Empowering cellular science with expert research guidance, manuscript editing, and publication excellence."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Cell Biology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cell-biology/Comprehensive-Research-Writing-and-Publication-Support-in-Cell-Biology-480x480.webp"
                                        alt="Cell biology chromosome and cellular research visual"
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
                                        Cell biology is the study of the structure and function of the cell, as it comprises prokaryotic and eukaryotic cells. Cells are the basic unit of life, and <span className="text-[#0284c7] font-medium">Cell Biology research support</span> involves studying cell communication, cell cycle, cell metabolism, and cell composition. These studies will be carried out using cell culture, cell fractionation, and multiple microscopic studies. Understanding the cell structure, function, reaction, and components is the foundation for all the biological sciences, which is essential for biomedical research like cancer, cardiovascular disease, and infectious diseases etc. It is interconnected with multiple research areas, including molecular genetics, biochemistry, molecular biology, medical microbiology, immunology, genetics, life sciences, and cytochemistry.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        In the advanced research environment, cell biology research took place in cultures to manipulate cells outside the human body, to investigate the physiology, and derive therapeutic medicine with the support of medicinal and pharmaceutical chemistry. The commonly used techniques and technologies to study molecular cell biology are cell culture, cell fractionation, cytometry, fluorescence microscopy, confocal microscopy, transmission electron microscope, phase-contrast microscope, etc.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide comprehensive research, writing, and <Link href="/services/publication-support/" className="text-blue-600">publication support</Link> tailored to cell biology professionals, researchers, and scholars. Our team of <Link href="/subject-matter-experts/" className="text-blue-600">subject-matter experts</Link> helps translate complex cellular phenomena into well-structured, scientifically rigorous manuscripts that meet the highest standards of international journals.
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
                        title="Our Core Areas Of Cell Biology"
                        description="Cell Biology bridges several scientific disciplines, including genetics, molecular biology, biochemistry, physiology, and developmental biology. The field aims to decode how cells operate individually and collectively within tissues and organs. Key areas of study include:"
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Cell Biology Research and Publication"
                    description="Pubrica's team comprises experienced scientists, editors, and publication specialists with advanced degrees (PhD and MD) in Cell Biology and related fields. Our experts provide end-to-end research and publication support, ensuring accuracy, scientific rigor, and adherence to journal guidelines. We offer end-to-end support that encompasses:"
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
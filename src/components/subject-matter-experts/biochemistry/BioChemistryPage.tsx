import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import {
    Search,
    Edit3,
    Eye,
    BarChart3,
    FileText,
    Send,
    PenTool,
    BookOpen,
} from "lucide-react";

export default function BioChemistryPage() {
    const disciplines = [
        {
            title: "Molecular Biology and Genetics",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Molecular-Biology-and-Genetics.webp",
            description:
                "Understanding gene expression, DNA replication, transcription, translation, and epigenetic modifications is central to molecular biology. Biochemists study how genetic information translates into functional proteins and how alterations in these processes can lead to disease.",
        },
        {
            title: "Enzymology and Protein Chemistry",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Enzymology-andProtein-Chemistry.webp",
            description:
                "Enzymes are biological catalysts that facilitate virtually all biochemical reactions. By studying enzyme kinetics, regulation, and structure-function relationships, biochemists can develop targeted therapeutics and understand metabolic control mechanisms.",
        },
        {
            title: "Metabolism and Bioenergetics",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Metabolism-and-Bioenergetics.webp",
            description:
                "Biochemical research on metabolic pathways provides insight into how cells generate energy, manage resources, and maintain homeostasis. Metabolic studies are critical for understanding conditions such as diabetes, obesity, and cancer.",
        },
        {
            title: "Structural Biology",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Structural-Biology.webp",
            description:
                "Determining the three-dimensional structures of biomolecules using techniques like X-ray crystallography, NMR spectroscopy, and cryo-electron microscopy helps elucidate their functions, interactions, and therapeutic potential.",
        },
        {
            title: "Cell Signalling and Molecular Interactions",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Cell-Signalling-and-Molecular-Interactions.webp",
            description:
                "Cells communicate through intricate signalling networks. Biochemical studies of receptors, second messengers, and signal transduction pathways reveal mechanisms behind cellular responses, development, and disease progression.",
        },
        {
            title: "Biotechnology and Applied Biochemistry",
            iconSrc:
                "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
            description:
                "Modern biotechnology leverages biochemical principles for industrial, agricultural, and medical applications, including recombinant protein production, gene therapy, biomarker discovery, and synthetic biology.",
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
            icon: Edit3,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Eye,
        },
        {
            title: "Data Science & Analytics",
            desc: "Advanced statistical analysis and interpretation to uncover actionable insights.",
            href: "/services/research-services/biostatistics-and-statistical-programming-services/",
            imageUrl: "/images/subject-matter-experts/biochemistry/Data-Science-Analytics.webp",
            icon: BarChart3,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookOpen,
        },
    ];
    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Biochemistry"
                description="Advance your research with precision editing, manuscript preparation, and publication guidance from our team of seasoned biochemistry experts."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Unlocking the Molecular Secrets of Life: Advanced Biochemistry Research &amp; Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biochemistry/Biochemistry.webp"
                                        alt="Biochemistry lab research"
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
                                        Biochemistry is the cornerstone of modern life sciences, providing a molecular understanding of biological processes that govern life itself. At its core, biochemistry bridges biology and chemistry, exploring the chemical structures, functions, and interactions of biomolecules such as proteins, nucleic acids, lipids, and carbohydrates. These molecular insights are fundamental to deciphering complex cellular mechanisms, disease pathology, metabolic pathways, and therapeutic interventions.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        In the contemporary scientific landscape, biochemistry plays a pivotal role in translational research, drug discovery, diagnostics, and{" "}
                                        <Link href="/subject-matter-experts/biotechnology" className="text-blue-600 no-underline hover:no-underline">
                                            biotechnology
                                        </Link>
                                        . From unravelling the intricacies of enzyme catalysis to understanding genetic regulation and signal transduction, biochemistry provides the tools and knowledge essential for scientific innovation.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we specialize in providing extensive biochemistry support, guiding researchers, students, and professionals through every stage of the research and publication process. Whether it's{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 no-underline hover:no-underline">
                                            manuscript editing
                                        </Link>
                                        , research methodology consultation, or data interpretation, our services ensure that biochemistry research is communicated with clarity, accuracy, and scientific rigor.
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
                        title="Our Core Disciplines in Biochemistry"
                        description={
                            <>
                                Biochemistry encompasses a broad spectrum of research areas, each
                                contributing uniquely to our understanding of biological systems.
                                Our editorial and{" "}
                                <Link
                                    href="/subject-matter-experts/animal-science/"
                                    className="text-blue-600 no-underline hover:no-underline"
                                >
                                    publication support
                                </Link>{" "}
                                at Pubrica covers the following core disciplines:
                            </>
                        }
                        items={disciplines}
                    />
                </div>
            </section>
            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (3 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Our Expertise in Biochemistry Research and Publication"
                    description="Pubrica’s biochemistry services are designed to facilitate seamless research communication and publication. Our expertise spans the entire publication process, ensuring that your work reaches the global scientific community with clarity and credibility. Our services include:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
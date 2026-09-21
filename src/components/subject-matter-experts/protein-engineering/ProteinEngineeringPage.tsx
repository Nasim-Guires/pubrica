"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Brain,
    Users,
    HeartHandshake,
    ShieldAlert,
    UserCheck,
    Pill,
    Cpu,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    ChevronDown,
    Palette,
    FileSpreadsheet,
    Image as ImageIcon,
    Dna,
    Microscope,
    FlaskConical,
    FileSearch,
    ShieldCheck,
    CheckCircle,
    Settings,
    Clock,
    Sliders,
    Bot,
    Shield,
    Wrench,
    FileText,
    TrendingUp
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function ProteinEngineeringPage() {
    const disciplines = [
        {
            title: "Directed Evolution",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Directed-Evolution.webp",
            description: "A technique to produce proteins that have higher stability, specificity, or catalytic efficiency than naturally occurring proteins by utilizing natural evolutionary processes through oligonucleotide-based mutagenesis and subsequent selection of the improved proteins.",
            icon: Dna,
        },
        {
            title: "Site-Directed Mutagenesis",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Site-Directed-Mutagenesis.webp",
            description: "A method of designing proteins with specific mutations to learn how function or character of specific proteins might be improved, through targeted modification of proteins for therapeutic, diagnostic, or industrial use.",
            icon: Microscope,
        },
        {
            title: "Protein Expression & Purification",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Protein-Expression-Purification.webp",
            description: "A technology used to produce large quantities of proteins through recombinant DNA technology in microbes, insects, or mammals, followed by purification methods to obtain pure protein for downstream applications.",
            icon: FlaskConical,
        },
        {
            title: "Computational Protein Design",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Computational-Protein-Design.webp",
            description: "Computational prediction and design of protein folds and stabilities for the development of new proteins for use in drug development or enzyme engineering.",
            icon: Cpu,
        },
        {
            title: "Enzyme Engineering",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Enzyme-Engineering.webp",
            description: "The manipulation of the properties of enzymes so they can be used more efficiently; the use of enzymes for industry, diagnostics, and therapeutics.",
            icon: Activity,
        },
        {
            title: "Antibody Engineering",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Antibody-Engineering.webp",
            description: "The design of monoclonal antibodies with very specific properties and characteristics (e.g., specificity, affinity, and therapeutic potential) necessary for clinical diagnostics and targeted therapies.",
            icon: ShieldCheck,
        },
        {
            title: "Synthetic Biology and Gene Synthesis",
            iconSrc: "/images/subject-matter-experts/protein-engineering/Synthetic-Biology-and-Gene-Synthesis.webp",
            description: "The synthesis of genes to create new proteins and metabolic pathways, thus creating completely new biosynthetic pathways for the generation of high-value products for pharmaceuticals, agricultural products, and biotechnology.",
            icon: Sliders,
        },
        {
            title: "HTS (High-Throughput Screening)",
            iconSrc: "/images/subject-matter-experts/protein-engineering/HTS-High-Throughput-Screening.webp",
            description: "Automated systems can quickly screen engineered proteins from large libraries and help identify quickly the best candidates for your own research applications, drug development, or end uses in manufacturing.",
            icon: TrendingUp,
        }
    ];

    const expertiseCards = [
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Journal Selection",
            desc: "Guidance on selecting the most appropriate journals for your research.",
            href: "/services/publication-support/journal-selection",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileSpreadsheet,
        },
        {
            title: "Case Report Writing",
            desc: "Assistance in drafting and editing case reports for rare diseases.",
            href: "/services/physician-writing-services/case-report",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: UserCheck,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl:
                "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: BookOpen,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Protein Engineering"
                description="Protein engineering blends molecular biology, chemistry, and computational science to create custom proteins that solve complex biological and industrial challenges."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Protein Engineering Solutions for Advanced Research &amp; Clinical Innovation
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/protein-engineering/Protein-Engineering.webp"
                                        alt="Protein Engineering Support"
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
                                        Protein engineering represents one of the most innovative areas of research in both biotechnology and life sciences today. Protein engineering allows researchers to design and modify proteins with desirable characteristics, thus bridging several disciplines, including molecular biology, chemistry, computer science, and applied medicine. Whether it be developing new drugs or optimizing{" "}
                                        <Link href="/subject-matter-experts/enzymes/" className="text-blue-600 no-underline">
                                            enzymes
                                        </Link>{" "}
                                        for industrial purposes, protein engineering is reshaping the limits of precision, efficiency, and innovation.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we offer advanced protein engineering services to help researchers, clinicians,{" "}
                                        <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline">
                                            pharmaceutical companies
                                        </Link>
                                        , and academic institutions produce{" "}
                                        <Link href="/academy/scientific-editing/scientific-vs-language-editing-high-quality-publications/" className="text-blue-600 no-underline">
                                            high-quality publication-ready data
                                        </Link>
                                        . Our protein engineering services are designed to increase the functional, stable, and specific nature of proteins to ensure that any of your research or applications conform to the highest international standards. Protein engineering provides healthcare and research with:
                                    </p>

                                    <div className="pt-2">
                                        <h3 className="text-base font-bold text-[#0c2e3a] mb-3">
                                            Our Expertise in Agriculture Includes:
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">➔</span>
                                                <span>New therapeutics and biological products.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">➔</span>
                                                <span>Greater enzyme efficiency and specificity for industrial utilization.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">➔</span>
                                                <span>Targeted drug delivery systems that work effectively.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">➔</span>
                                                <span>Optimized proteins for diagnostics and therapeutic use.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">➔</span>
                                                <span>Support for innovative research and original scientific publications.</span>
                                            </li>
                                        </ul>
                                    </div>

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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Modalities in Protein Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Pubrica offers a variety of different advanced modalities for Protein Engineering that have been designed to address specific problems in research, clinical innovation and industrial applications. We utilise the latest techniques to create new proteins or improve existing ones to enhance their function, stability, or specificity and create innovative disruptive solutions. Our core modalities are:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>
            {/* SECTION 4: Expertise Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Cards Grid with title & description passed directly */}
                    <CommonExpertiseCards
                        title="Our Expertise in Protein Engineering Research and Publication"
                        description={
                            <>
                                Pubrica provides the highest quality research, publication ready protein engineering that supports innovation in science and creates breakthroughs in technology. Pubrica's experts combine a solid foundation of molecular biology, bioinformatics, and biochemistry with their passion for helping <Link href="/services/academic-editorial-services/" className="text-blue-600 ">Academia and Research</Link>. Pubrica's comprehensive background in protein Design and Modification enables us to ensure that your protein engineering research is both scientifically accurate and published according to global standards.
                            </>
                        }
                        cards={expertiseCards}
                    />

                </div>
            </section>
        </main>
    );
}
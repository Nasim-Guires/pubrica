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

    const services = [
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Journal Selection",
            description: "Guidance on selecting the most appropriate journals for your research.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Case Report Writing",
            description: "Assistance in drafting and editing case reports for rare diseases.",
            image: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: UserCheck,
            href: "/services/physician-writing-services/case-report"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: BookOpen,
            href: "/services/publication-support"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Protein Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Protein engineering blends molecular biology, chemistry, and computational science to create custom proteins that solve complex biological and industrial challenges.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Protein Engineering Solutions for Advanced Research & Clinical Innovation
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Protein engineering represents one of the most innovative areas of research in both biotechnology and life sciences today. Protein engineering allows researchers to design and modify proteins with desirable characteristics, thus bridging several disciplines, including molecular biology, chemistry, computer science, and applied medicine. Whether it be developing new drugs or optimizing enzymes for industrial purposes, protein engineering is reshaping the limits of precision, efficiency, and innovation.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we offer advanced protein engineering services to help researchers, clinicians, pharmaceutical companies, and academic institutions produce high-quality publication-ready data. Our protein engineering services are designed to increase the functional, stable, and specific nature of proteins to ensure that any of your research or applications conform to the highest international standards. Protein engineering provides healthcare and research with:
                        </p>

                        <div className="pt-2">
                            <h3 className="text-sm font-bold text-[#0e3b32] mb-3">
                                Our Expertise in Agriculture Includes:
                            </h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#a3c9bd]/30 flex items-center justify-center">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Modalities in Protein Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica offers a variety of different advanced modalities for Protein Engineering that have been designed to address specific problems in research, clinical innovation and industrial applications. We utilise the latest techniques to create new proteins or improve existing ones to enhance their function, stability, or specificity and create innovative disruptive solutions. Our core modalities are:
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
                            Our Expertise in Protein Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica provides the highest quality research, publication ready protein engineering that supports innovation in science and creates breakthroughs in technology. Pubrica's experts combine a solid foundation of molecular biology, bioinformatics, and biochemistry with their passion for helping Academia and Research. Pubrica's comprehensive background in protein Design and Modification enables us to ensure that your protein engineering research is both scientifically accurate and published according to global standards.
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
"use client";
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

export default function CellBiologyPage() {
    const disciplines = [
        {
            title: "Cell Structure and Organization",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cell-Structure-and-Organization.webp",
            description: "We provide expertise in the study of cellular architecture, including organelles, membranes, and cytoskeletal components. Our editors assist researchers in exploring how cell structures support essential biological functions such as metabolism, transport, and communication.",
            icon: Dna
        },
        {
            title: "Cell Division and Cell Cycle Regulation",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cell-Division-and-Cell-Cycle-Regulation.webp",
            description: "Understanding the precise control of cell growth and replication is central to biology and medicine. We support research on mitosis, meiosis, checkpoints, and regulatory proteins that maintain genomic integrity and prevent uncontrolled cell proliferation.",
            icon: RotateCw
        },
        {
            title: "Cellular Signalling and Communication",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cellular-Signalling-and-Communication.webp",
            description: "Our experts assist in studies focusing on how cells perceive and respond to their environment through signalling pathways. We help authors communicate discoveries related to receptor-ligand interactions, intracellular signalling cascades, and molecular cross-talk between cells and tissues.",
            icon: Radio
        },
        {
            title: "Cell Differentiation and Development",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cell-Differentiation-and-Development.webp",
            description: "Cell differentiation underlies tissue formation and organismal development. We guide research manuscripts that uncover transcriptional, epigenetic, and environmental factors influencing cell fate, morphogenesis, and regeneration.",
            icon: GitCommit
        },
        {
            title: "Stem Cell Biology",
            iconSrc: "/images/subject-matter-experts/cell-biology/Stem-Cell-Public-Biology.webp",
            description: "Stem cells represent a frontier in regenerative medicine. We specialize in assisting manuscripts related to pluripotency, lineage commitment, reprogramming, and therapeutic applications of stem cells in tissue repair and disease treatment.",
            icon: Sparkles
        },
        {
            title: "Cell Death and Survival Mechanisms",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cell-Death-and-Survival-Mechanisms.webp",
            description: "Apoptosis, necrosis, and autophagy are critical to maintaining cellular balance. Our subject-matter experts provide editorial guidance on molecular pathways regulating programmed cell death and their implications in cancer and degenerative diseases.",
            icon: ShieldAlert
        },
        {
            title: "Cytoskeleton and Cell Motility",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cytoskeleton-and-Cell-Motility.webp",
            description: "Cell motility drives development, immune responses, and metastasis. Our expertise spans cytoskeletal dynamics, motor proteins, and cell migration mechanisms, all central to physiology and pathology.",
            icon: Move
        },
        {
            title: "Cellular Pathology and Disease Mechanisms",
            iconSrc: "/images/subject-matter-experts/cell-biology/Cellular-Pathology-and-Disease-Mechanisms.webp",
            description: "We help researchers connect molecular alterations to disease phenotypes. Our editors ensure accuracy and impact in studies linking cellular dysfunction to conditions such as cancer, neurodegeneration, and infectious diseases.",
            icon: Microscope
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: UserCheck
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: ImageIcon
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: BookOpen
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cell Biology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Empowering cellular science with expert research guidance, manuscript editing, and publication excellence.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Research, Writing, and Publication Support in Cell Biology
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cell biology is the study of the structure and function of the cell, as it comprises prokaryotic and eukaryotic cells. Cells are the basic unit of life, and <span className="text-[#0284c7] font-medium">Cell Biology research support</span> involves studying cell communication, cell cycle, cell metabolism, and cell composition. These studies will be carried out using cell culture, cell fractionation, and multiple microscopic studies. Understanding the cell structure, function, reaction, and components is the foundation for all the biological sciences, which is essential for biomedical research like cancer, cardiovascular disease, and infectious diseases etc. It is interconnected with multiple research areas, including molecular genetics, biochemistry, molecular biology, medical microbiology, immunology, genetics, life sciences, and cytochemistry.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            In the advanced research environment, cell biology research took place in cultures to manipulate cells outside the human body, to investigate the physiology, and derive therapeutic medicine with the support of medicinal and pharmaceutical chemistry. The commonly used techniques and technologies to study molecular cell biology are cell culture, cell fractionation, cytometry, fluorescence microscopy, confocal microscopy, transmission electron microscope, phase-contrast microscope, etc.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive research, writing, and <span className="text-[#0284c7] font-medium">publication support</span> tailored to cell biology professionals, researchers, and scholars. Our team of <span className="text-[#0284c7] font-medium">subject-matter experts</span> helps translate complex cellular phenomena into well-structured, scientifically rigorous manuscripts that meet the highest standards of international journals.
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
                                src="/images/subject-matter-experts/cell-biology/sample-works-6.webp"
                                alt="Cell biology chromosome and cellular research visual"
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
                            Our Core Areas Of Cell Biology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cell Biology bridges several scientific disciplines, including genetics, molecular biology, biochemistry, physiology, and developmental biology. The field aims to decode how cells operate individually and collectively within tissues and organs. Key areas of study include:
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
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
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

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Cell Biology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica's team comprises experienced scientists, editors, and publication specialists with advanced degrees (PhD and MD) in Cell Biology and related fields. Our experts provide end-to-end research and publication support, ensuring accuracy, scientific rigor, and adherence to journal guidelines. We offer end-to-end support that encompasses:
                    </p>
                </div>

                {/* Cards Grid */}
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

                                {/* Bottom White Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description */}
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
"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
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
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';

export default function MolecularEngineeringPage() {
    const disciplines = [
        {
            title: "Molecular Design and Synthesis",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Molecular-Design-and-Synthesis.webp",
            description: "Custom designs are created for molecules and materials in healthcare, energy and many other fields.",
            icon: Search
        },
        {
            title: "Nanotechnology",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Nanotechnology-1.webp",
            description: "Nanoscale materials and devices are used to improve drug delivery, diagnostics, and environmentally friendly technologies.",
            icon: TrendingUp
        },
        {
            title: "Biomolecular Engineering",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Biomolecular-Engineering.webp",
            description: "The creation and optimization of biomolecules, such as proteins, enzymes, and DNA, create technologies used in the development of biotechnology, medicine, and industrial processes.",
            icon: FileText
        },
        {
            title: "Computational Modelling",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Computational-Modelling.webp",
            description: "Advanced computer tools allow for predicting the behaviour of molecules, which in turn develops new materials and therapies.",
            icon: Database
        },
        {
            title: "Synthetic Biology",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Synthetic-Biology-2.webp",
            description: "Synthetic biology is a means by which new biological systems and sustainable solutions are advanced using genetic engineering and synthetic pathways.",
            icon: AlertTriangle
        },
        {
            title: "Advanced Bioprocessing",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Advanced-Bioprocessing.webp",
            description: "The innovation of bioprocessing techniques enables the efficient manufacture of pharmaceuticals, biofuels, and other biological-based products.",
            icon: ShieldAlert
        },
        {
            title: "Material Science",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Material-Science.webp",
            description: "The molecular architecture of the next generation of materials includes “smart” materials, as well as self-healing material systems.",
            icon: Layers
        },
        {
            title: "Environmental Engineering",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Environmental-Engineering.webp",
            description: "Applying molecular engineering principles to develop solutions for pollution control, waste management, and resource conservation.",
            icon: Cpu
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
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: FileSearch,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Cpu,
            href: "/services/research-services/"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: BarChart3,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: Layers,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileSearch,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Molecular Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        The discipline of Molecular Engineering combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Molecules into Real-World Solutions with Precision Molecular Engineering.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            As a field of research, Biomolecular Engineering continues to experience rapid changes because of the increasing focus on Precision Medicine, Sustainable Energy and Advanced Bioprocessing. To support these emerging trends to drive innovation, Pubrica has developed and will continue to develop the following products and services for Biomolecular Engineering researchers: Biomanufacturing, Biomolecular Engineering Research Support, and Comprehensive Academic Solutions for Researchers, Scientists and Industry Professionals working within the Biomolecular Engineering Arena. All our solutions are intended to provide researchers, scientists and industry professionals with Enhanced Quality, Accuracy and Impact of Research Deliverables across the Entire Spectrum of Biomolecular Engineering.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Molecular Biology, Biomolecular Engineering, Biomolecular Engineering Research Support, and Computational Engineering are just some of the many aspects of Biomolecular Engineering that focus on understanding and manipulating biological systems at the molecular level through the application of Engineering Principles. Engineering Principles are applied to understand biomolecules such as DNA, RNA, proteins, enzymes and metabolic pathways. The application of Engineering Principles to biomolecular engineering includes Computational Design, Synthetic Biology Tools, Gene Regulation Techniques, and Advanced Bioprocessing Techniques to enable biomolecular engineers to provide solutions to complex biological issues.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Computational Biomolecular Engineering projects allow researchers to explore molecular behaviour and trends at a much deeper level of detail by using state-of-the-art predictive tools.
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
                                src="/images/subject-matter-experts/molecular-engineering/Molecular-Engineering.webp"
                                alt="Molecular Engineering research visualization"
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
                            Our Core Areas Of Molecular Engineering
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Our expertise spans several key areas of Molecular Engineering, driving innovation across industries:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Molecular Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we offer specialized expertise in Molecular Engineering research and publication, supporting scientists, researchers, and industry professionals in advancing their work. Our services include:
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
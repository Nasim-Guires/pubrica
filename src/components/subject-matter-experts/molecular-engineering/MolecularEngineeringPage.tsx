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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: FileSearch,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Cpu,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: BarChart3,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: Layers,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileSearch,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Molecular Engineering"
                description="The discipline of Molecular Engineering combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Molecules into Real-World Solutions with Precision Molecular Engineering.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        As a field of research, Biomolecular Engineering continues to experience rapid changes because of the increasing focus on Precision Medicine, Sustainable Energy and Advanced Bioprocessing. To support these emerging trends to drive innovation, Pubrica has developed and will continue to develop the following products and services for Biomolecular Engineering researchers: Biomanufacturing,{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            Biomolecular Engineering Research Support
                                        </Link>
                                        , and Comprehensive Academic Solutions for Researchers, Scientists and{" "}
                                        <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline">
                                            Industry
                                        </Link>{" "}
                                        Professionals working within the Biomolecular Engineering Arena. All our solutions are intended to provide researchers, scientists and industry professionals with Enhanced Quality, Accuracy and{" "}
                                        <Link href="/services/research-impact/" className="text-blue-600 no-underline">
                                            Impact of Research
                                        </Link>{" "}
                                        Deliverables across the Entire Spectrum of Biomolecular Engineering.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Molecular Biology, Biomolecular Engineering,{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            Biomolecular Engineering Research Support
                                        </Link>
                                        , and Computational Engineering are just some of the many aspects of Biomolecular Engineering that focus on understanding and manipulating biological systems at the molecular level through the application of Engineering Principles. Engineering Principles are applied to understand biomolecules such as DNA, RNA, proteins,{" "}
                                        <Link href="/subject-matter-experts/enzymes/" className="text-blue-600 no-underline">
                                            enzymes
                                        </Link>{" "}
                                        and metabolic pathways. The application of Engineering Principles to biomolecular engineering includes Computational Design, Synthetic Biology Tools, Gene Regulation Techniques, and Advanced Bioprocessing Techniques to enable biomolecular engineers to provide solutions to complex biological issues.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Computational Biomolecular Engineering projects allow researchers to explore molecular behaviour and trends at a much deeper level of detail by using state-of-the-art predictive tools.
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
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Molecular Engineering Research and Publication"
                    description="At Pubrica, we offer specialized expertise in Molecular Engineering research and publication, supporting scientists, researchers, and industry professionals in advancing their work. Our services include:"
                    cards={expertiseCards}
                />


            </section>

        </main>
    );
}
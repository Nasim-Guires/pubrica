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
    ShieldAlert,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    BookOpen,
    UserCheck,
    Wrench
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function NuclearEngineeringPage() {
    const disciplines = [
        {
            title: "Reactor Design & Analysis",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Reactor-Design-Analysis.webp",
            description: "Goals are to design and optimize nuclear reactors for maximum efficiency, safety & sustainability of energy production.",
            icon: Search,
        },
        {
            title: "Radiation Physics & Shielding",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Radiation-Physics-Shielding.webp",
            description: "The study of radiation interactions, shielding materials and their use in both nuclear facilities (industry) and medical applications.",
            icon: TrendingUp
        },
        {
            title: "Nuclear Fuel Cycle Engineering",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Nuclear-Fuel-Cycle-Engineering.webp",
            description: "Evaluating nuclear fuel from the production phase through use, reprocessing, and finally to waste management. This will help to create a sustainable nuclear power system.",
            icon: FileText
        },
        {
            title: "Computational Modelling",
            iconSrc: "/images/subject-matter-experts/molecular-engineering/Computational-Modelling.webp",
            description: "Provides simulated tools to predict reactor behaviour, neutron transport, thermal-hydraulic behaviour; and hence assists in decision making.",
            icon: Database
        },
        {
            title: "Nuclear Safety and Risk Assessment",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Nuclear-Safety-and-Risk-Assessment.webp",
            description: "Evaluates the reactor safety systems and risk mitigation strategies and ensures compliance with international (global) nuclear safety standards.",
            icon: ShieldAlert
        },
        {
            title: "Thermal Hydraulics",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Thermal-Hydraulics.webp",
            description: "Examining heat transfer & fluid flow in industry; then helps optimise both the reactor cooling and reactor performance.",
            icon: Layers
        },
        {
            title: "Fusion and Advanced Reactor Technologies",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Fusion-and-Advanced-Reactor-Technologies.webp",
            description: "Investigating next-generation nuclear technologies, including fusion reactors & small modular reactors (SMRs).",
            icon: BookOpen
        },
        {
            title: "Material Science in Nuclear Systems",
            iconSrc: "/images/subject-matter-experts/nuclear-engineering/Material-Science-in-Nuclear-Systems.webp",
            description: "The research and development of materials that are resistant to damage (radiation) for both reactors and structural components.",
            icon: BarChart3
        }
    ];
    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: UserCheck,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
    ];;

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Nuclear Engineering"
                description="The discipline of Molecular Engineering combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Energy Systems into Real-World Solutions with Precision Nuclear Engineering.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/nuclear-engineering/Nuclear-Engineering.webp"
                                        alt="Nuclear Engineering research visualization"
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
                                        As a field of research, Nuclear Engineering is constantly changing and developing with the increasing need for clean and safe energy production and the development of more efficient reactors and safety systems. To keep up with the developing trends and innovations in the field of Nuclear Engineering research, Pubrica has established and continues to expand its specialized services and solutions for Nuclear Engineering researchers and scientists, including reactor analysis and modelling, nuclear systems modelling, and complete academic solutions for scientists and engineers in the field of Nuclear Engineering research.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        All of these solutions are intended to improve the quality and accuracy of research deliverables in the entire scope of Nuclear Engineering.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Nuclear Physics, Reactor Engineering, Radiation Science, and Computational Engineering are some of the important branches of Nuclear Engineering as a whole, which are concerned with the study and control of nuclear phenomena with the aim of producing energy and applying nuclear science and technology in various industries.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Engineering principles are applied to nuclear reactions and phenomena with the aim of solving complex problems and challenges in the production of nuclear energy and the application of radiation. Computational Nuclear Engineering is a project that enables the researcher to simulate nuclear reactors and radiation systems with the aid of advanced predictive tools and techniques.
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Areas Of Nuclear Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Our areas of expertise cover various key areas of Nuclear Engineering, thus promoting innovations in various sectors like energy, healthcare, and industry:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">


                <CommonExpertiseCards
                    title="Our Expertise in Nuclear Engineering Research and Publication"
                    description="We specialize in Nuclear Engineering research and publishing, and provide specialised skills to assist scientists, researchers and people in industry to further their work on an individual basis. Services provided are:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
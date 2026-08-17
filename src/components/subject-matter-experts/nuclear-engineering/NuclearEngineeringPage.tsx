"use client";
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

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services. ",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: UserCheck,
            href: "/services/editing-and-translation"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/publication-support"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
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
                        Nuclear Engineering
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
                            Transforming Energy Systems into Real-World Solutions with Precision Nuclear Engineering.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            As a field of research, Nuclear Engineering is constantly changing and developing with the increasing need for clean and safe energy production and the development of more efficient reactors and safety systems. To keep up with the developing trends and innovations in the field of Nuclear Engineering research, Pubrica has established and continues to expand its specialized services and solutions for Nuclear Engineering researchers and scientists, including reactor analysis and modelling, nuclear systems modelling, and complete academic solutions for scientists and engineers in the field of Nuclear Engineering research.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            All of these solutions are intended to improve the quality and accuracy of research deliverables in the entire scope of Nuclear Engineering.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Nuclear Physics, Reactor Engineering, Radiation Science, and Computational Engineering are some of the important branches of Nuclear Engineering as a whole, which are concerned with the study and control of nuclear phenomena with the aim of producing energy and applying nuclear science and technology in various industries.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Engineering principles are applied to nuclear reactions and phenomena with the aim of solving complex problems and challenges in the production of nuclear energy and the application of radiation. Computational Nuclear Engineering is a project that enables the researcher to simulate nuclear reactors and radiation systems with the aid of advanced predictive tools and techniques.
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
                                src="/images/subject-matter-experts/nuclear-engineering/Nuclear-Engineering.webp"
                                alt="Nuclear Engineering research visualization"
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
                            Our Core Areas Of Nuclear Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our areas of expertise cover various key areas of Nuclear Engineering, thus promoting innovations in various sectors like energy, healthcare, and industry:
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
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
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

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Nuclear Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We specialize in Nuclear Engineering research and publishing, and provide specialised skills to assist scientists, researchers and people in industry to further their work on an individual basis. Services provided are:
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
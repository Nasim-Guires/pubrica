"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dna,
    Activity,
    Layers,
    Microscope,
    PieChart,
    Search,
    FileText,
    Database,
    PenTool,
    FileSearch,
    Send,
    FileSpreadsheet,
    BookMarked,
    ChevronDown,
    ArrowRight,
    Compass,
    Cpu,
    Flame,
    Leaf,
    Pen,
    BarChart3,
    BookOpen
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function ChemicalEngineeringPage() {
    const disciplines = [
        {
            title: "Reaction Engineering",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Reaction-Engineering.webp",
            description:
                "Optimization of various chemical reactions such as kinetics and reactors to improve the efficiency of the process.",
            icon: Flame,
        },
        {
            title: "Separation Processes",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Separation-Processes.webp",
            description:
                "Techniques such as distillation, filtration, and separation of chemical compounds using methods such as extraction and membrane separation.",
            icon: Layers,
        },
        {
            title: "Transport Phenomena (Heat Transfer, Mass Transfer, and Fluid Dynamics)",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Transport-Phenomena-Heat-Transfer-Mass-Transfer-and-Fluid-Dynamics.webp",
            description:
                "Use of the principles of Transport Phenomena to optimize the efficiency of the process.",
            icon: Compass,
        },
        {
            title: "Process Control & Optimization",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Process-Control-Optimization.webp",
            description:
                "Use of Control Systems and Optimization Techniques to improve the efficiency of the process.",
            icon: Activity,
        },
        {
            title: "Computational Fluid Dynamics (CFD)",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Computational-Fluid-Dynamics-CFD.webp",
            description:
                "Simulation of fluids and the study of the behavior of fluids and the efficiency of the process.",
            icon: Cpu,
        },
        {
            title: "Materials & Nanotechnology Engineering",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Materials-Nano-technology-Engineering.webp",
            description:
                "Use of materials and nanotechnology and the study of materials and nanotechnology in the field of chemical engineering.",
            icon: Dna,
        },
        {
            title: "Biochemical Engineering",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Biochemical-Engineering.webp",
            description:
                "is the use of chemical engineering principles on biological systems in order to create biopharmaceuticals, biofuels, and other bioproducts.",
            icon: Microscope,
        },
        {
            title: "Sustainable/Green Engineering",
            iconSrc:
                "/images/subject-matter-experts/chemical-engineering/Sustainable_Green-Engineering.webp",
            description:
                "is the design of environmentally friendly processes that create minimal waste, have low emissions, and maximize energy efficiency.",
            icon: Leaf,
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
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Pen,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookMarked,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Chemical Engineering"
                description="The discipline of Chemical Engineering combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Molecules into Real-World Solutions with Precision Chemical Engineering.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/chemical-engineering/Chemical-Engineering.webp"
                                        alt="Chemical Engineering Research Laboratory"
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
                                        Chemical engineering is a multi-disciplinary area that utilizes the principles of chemistry, physics, mathematics and engineering in order to design, optimise and scale industrial manufacturing processes. Chemical engineering is fundamental to many industries including but not limited to, pharma, energy, materials, food processing and environmental sustainability. Whether designing effective chemical processes, to creating sustainable technologies, chemical engineering is a pillar of innovation and advancement of industry.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide advanced chemical engineering consulting services to help researchers, industry practitioners and academic entities in developing high-quality publication ready deliverables. We enhance efficiency of your processes, promote safety within your industry and adhere to established global regulations whilst supporting innovative research in the Chemical Engineering field. Chemical engineering supports research and industry by providing:
                                    </p>

                                    <div className="pt-2">
                                        <ul className="space-y-3 text-base leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>Development of efficient and scalable chemical processes</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>Optimisation of the industrial manufacturing (production) systems</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>Advancement of materials and products designed for manufacturing</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                                                <span><strong>Assistance with innovative research and publishing scientific articles.</strong></span>
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <CoreAreasSection
                        title="Our Core Areas Of Chemical Engineering"
                        description="Pubrica's wide range of cutting-edge Chemical Engineering modalities can help resolve complex issues in the areas of research, industrial innovation, and optimization. Some of the core modalities of Chemical Engineering are as follows: Process Design & Simulation – Design of chemical processes using the latest modelling tools to optimize the efficiency and cost of the application in the industry:"
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Chemical Engineering Research and Publication"
                    description="Through providing premier-level research and publication support in the field of Chemical Engineering, Pubrica fosters innovation and advances technology. Our specialists have an extensive level of experience in the areas of Process Engineering, Thermodynamics and Computational Modelling to assist you with producing research that is of a worldwide standard:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
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

export default function ChemicalEngineeringPage() {
    const disciplines = [
        {
            title: "Reaction Engineering",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Reaction-Engineering.webp",
            description: "Optimization of various chemical reactions such as kinetics and reactors to improve the efficiency of the process.",
            icon: Flame
        },
        {
            title: "Separation Processes",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Separation-Processes.webp",
            description: "Techniques such as distillation, filtration, and separation of chemical compounds using methods such as extraction and membrane separation.",
            icon: Layers
        },
        {
            title: "Transport Phenomena (Heat Transfer, Mass Transfer, and Fluid Dynamics)",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Transport-Phenomena-Heat-Transfer-Mass-Transfer-and-Fluid-Dynamics.webp",
            description: "Use of the principles of Transport Phenomena to optimize the efficiency of the process.",
            icon: Compass
        },
        {
            title: "Process Control & Optimization",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Process-Control-Optimization.webp",
            description: "Use of Control Systems and Optimization Techniques to improve the efficiency of the process.",
            icon: Activity
        },
        {
            title: "Computational Fluid Dynamics (CFD)",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Computational-Fluid-Dynamics-CFD.webp",
            description: "Simulation of fluids and the study of the behavior of fluids and the efficiency of the process.",
            icon: Cpu
        },
        {
            title: "Materials & Nanotechnology Engineering",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Materials-Nano-technology-Engineering.webp",
            description: "Use of materials and nanotechnology and the study of materials and nanotechnology in the field of chemical engineering.",
            icon: Dna
        },
        {
            title: "Biochemical Engineering",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Biochemical-Engineering.webp",
            description: "is the use of chemical engineering principles on biological systems in order to create biopharmaceuticals, biofuels, and other bioproducts.",
            icon: Microscope
        },
        {
            title: "Sustainable/Green Engineering",
            iconSrc: "/images/subject-matter-experts/chemical-engineering/Sustainable_Green-Engineering.webp",
            description: "is the design of environmentally friendly processes that create minimal waste, have low emissions, and maximize energy efficiency.",
            icon: Leaf
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Pen
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookMarked
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Chemical Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        The discipline of Chemical Engineering combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Molecules into Real-World Solutions with Precision Chemical Engineering.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Chemical engineering is a multi-disciplinary area that utilizes the principles of chemistry, physics, mathematics and engineering in order to design, optimise and scale industrial manufacturing processes. Chemical engineering is fundamental to many industries including but not limited to, pharma, energy, materials, food processing and environmental sustainability. Whether designing effective chemical processes, to creating sustainable technologies, chemical engineering is a pillar of innovation and advancement of industry.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide advanced chemical engineering consulting services to help researchers, industry practitioners and academic entities in developing high-quality publication ready deliverables. We enhance efficiency of your processes, promote safety within your industry and adhere to established global regulations whilst supporting innovative research in the Chemical Engineering field. Chemical engineering supports research and industry by providing:
                        </p>

                        <div className="pt-2">
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>Development of efficient and scalable chemical processes</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>Optimisation of the industrial manufacturing (production) systems</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>Advancement of materials and products designed for manufacturing</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span><strong>Assistance with innovative research and publishing scientific articles.</strong></span>
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Areas Of Chemical Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica's wide range of cutting-edge Chemical Engineering modalities can help resolve complex issues in the areas of research, industrial innovation, and optimization. Some of the core modalities of Chemical Engineering are as follows: Process Design & Simulation – Design of chemical processes using the latest modelling tools to optimize the efficiency and cost of the application in the industry:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Chemical Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Through providing premier-level research and publication support in the field of Chemical Engineering, Pubrica fosters innovation and advances technology. Our specialists have an extensive level of experience in the areas of Process Engineering, Thermodynamics and Computational Modelling to assist you with producing research that is of a worldwide standard:
                    </p>
                </div>

                {/* 4 Cards Per Row Grid */}
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

                                {/* Bottom White Overlay Card (Slides up on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description (Appears on Hover) */}
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
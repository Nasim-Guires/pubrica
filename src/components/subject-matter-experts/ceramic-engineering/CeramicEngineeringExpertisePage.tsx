"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Boxes,
    Factory,
    Microscope,
    ShieldAlert,
    Zap,
    Cpu,
    FileText,
    SearchCheck,
    Wrench,
    FileSpreadsheet,
    PenTool,
    Image as ImageIcon,
    BookOpen,
    Send,
    ChevronDown
} from 'lucide-react';

export default function CeramicEngineeringExpertisePage() {
    const disciplines = [
        {
            title: "Materials Design & Development",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Materials-Design-Development.webp",
            description: "The design of materials focuses on developing ceramics that have customized attributes to facilitate their use in specific applications. High-temperature ceramics, bio ceramics, electronic materials, etc. represent innovative materials created from the materials design process and will lead to advancements in the following industries: aerospace, healthcare, energy and manufacturing.",
            icon: Boxes
        },
        {
            title: "Processing & Fabrication Engineering",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Processing-Fabrication-Engineering.webp",
            description: "Processing & Fabrication Engineering provides advanced techniques for manufacturing and forming ceramics including techniques used in powder processing sintering additive manufacturing and coatings to improve their mechanical, thermal, and chemical properties.",
            icon: Factory
        },
        {
            title: "Microstructural analysis and characterization",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Microstructural-analysis-and-characterization.webp",
            description: "Consider the effect of ceramic microstructures on the properties of ceramics. It uses structural characterization (electron microscopy), composition characterization (X-ray diffraction), and physical characterization (spectroscopy, thermal analysis) to create strong, durable, and high-performance ceramics.",
            icon: Microscope
        },
        {
            title: "Mechanical & Thermal Properties",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Mechanical-Thermal-Properties.webp",
            description: "Engineering Ceramics engineers examine and improve hardness, toughness, thermal resistance and wear behaviour. There are also studies that show how to engineer high performance and heat-resistant and long-lasting materials through research.",
            icon: ShieldAlert
        },
        {
            title: "Electrical & Functional Ceramics",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Electrical-Functional-Ceramics.webp",
            description: "Electrical or functional ceramic materials are created or designed to supply electronic, magnetic or physical properties. They can be engineered for various uses including capacitors, superconductors, sensors, energy storage mediums and many others.",
            icon: Zap
        },
        {
            title: "Computational Ceramic Engineering",
            iconSrc: "/images/subject-matter-experts/ceramic-engineering/Computational-Ceramic-Engineering.webp",
            description: "Molecular Simulations, and Predictive Analytics) to create and refine product concepts in ceramics has increased the speed at which products can reach maturity (and are thus usable by the public) through the reduction of time spent testing prototypes",
            icon: Cpu
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: SearchCheck
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen
        },
        {
            title: "Publication Support",
            description: "Providing complete assistance from initial research planning to final manuscript submission ensuring high-quality deliverables throughout the publication process.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: Send
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Ceramic Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Ceramic Engineering delivers innovative engineering solutions with a focus on quality, precision, and reliability. We turn complex challenges into efficient, real-world results.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming molecules into real-world solutions through innovation, precision, and advanced Ceramic Engineering
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The Discipline of Ceramic Engineering is a rapidly developing and dynamic field that involves the Application of the science of materials (Materials Science), Chemistry, Physics and Engineering, to develop High-Performance Ceramic Materials for Use in Real-World Products. Ceramic Engineering is Essential for Modern Manufacturing Industries including Aerospace, Energy, Electronics, Health Care, and Manufacturing. The demand for High-Performance, Durable, Sustainable and Heat-Resistant Materials is Driving Development in this Area.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Ceramic Engineering is focused on the design, Processing, Characterization and Application of both Traditional and Advanced Sophisticated Ceramics, Glass Ceramics, and Composite Material Systems. Ceramic Engineers use Advanced Synthesis, Sintering, Computational Modelling, and Microstructural Analysis to solve Complex Engineering Problems. With the use of Computational Ceramic Engineering Services, researchers can Obtain a Greater understanding of the Behaviour of Materials and use Advanced Simulations and Predictive Tools to optimize the Design, improve the Performance, and Accelerate Innovation.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide targeted Ceramic Engineering Solutions, targeted <Link href="/services/research-services" className="text-blue-600 hover:underline">Research Support</Link> for those involved in Research in this area, and overall Academic Solutions specifically for Researchers, Scholars, and Industry Professionals conducting research or working within the domain of Ceramic Engineering. By doing so, we are striving to support increases in the overall Quality, Technical Accuracy, and Global Reach of Research Outputs produced within the field of Ceramic Engineering.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723]">
                            <Image
                                src="/images/subject-matter-experts/ceramic-engineering/Ceramic-Engineering.webp"
                                alt="Ceramic Engineering Crafting and Research"
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
                            Our Core Areas Of Ceramic Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Ceramic Engineering encompasses several interconnected areas, each contributing to the development, optimization, and application of advanced ceramic materials. These core disciplines include:
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
                            Our Expertise in Ceramic Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Our team includes PhD-qualified specialists with considerable experience in ceramics and materials science, ceramics manufacturing techniques, computational modelling, and advanced manufacturing processes to assist the academic research community, graduate students, and materials scientists in the ceramic engineering, ceramics, and advanced manufacturing fields:
                    </p>
                </div>

                {/* Grid */}
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
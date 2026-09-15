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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CeramicEngineeringExpertisePage() {
    const disciplines = [
        {
            title: "Materials Design & Development",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Materials-Design-Development.webp",
            description:
                "The design of materials focuses on developing ceramics that have customized attributes to facilitate their use in specific applications. High-temperature ceramics, bio ceramics, electronic materials, etc. represent innovative materials created from the materials design process and will lead to advancements in the following industries: aerospace, healthcare, energy and manufacturing.",
            icon: Boxes,
        },
        {
            title: "Processing & Fabrication Engineering",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Processing-Fabrication-Engineering.webp",
            description:
                "Processing & Fabrication Engineering provides advanced techniques for manufacturing and forming ceramics including techniques used in powder processing sintering additive manufacturing and coatings to improve their mechanical, thermal, and chemical properties.",
            icon: Factory,
        },
        {
            title: "Microstructural analysis and characterization",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Microstructural-analysis-and-characterization.webp",
            description:
                "Consider the effect of ceramic microstructures on the properties of ceramics. It uses structural characterization (electron microscopy), composition characterization (X-ray diffraction), and physical characterization (spectroscopy, thermal analysis) to create strong, durable, and high-performance ceramics.",
            icon: Microscope,
        },
        {
            title: "Mechanical & Thermal Properties",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Mechanical-Thermal-Properties.webp",
            description:
                "Engineering Ceramics engineers examine and improve hardness, toughness, thermal resistance and wear behaviour. There are also studies that show how to engineer high performance and heat-resistant and long-lasting materials through research.",
            icon: ShieldAlert,
        },
        {
            title: "Electrical & Functional Ceramics",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Electrical-Functional-Ceramics.webp",
            description:
                "Electrical or functional ceramic materials are created or designed to supply electronic, magnetic or physical properties. They can be engineered for various uses including capacitors, superconductors, sensors, energy storage mediums and many others.",
            icon: Zap,
        },
        {
            title: "Computational Ceramic Engineering",
            iconSrc:
                "/images/subject-matter-experts/ceramic-engineering/Computational-Ceramic-Engineering.webp",
            description:
                "Molecular Simulations, and Predictive Analytics) to create and refine product concepts in ceramics has increased the speed at which products can reach maturity (and are thus usable by the public) through the reduction of time spent testing prototypes",
            icon: Cpu,
        },
    ];


    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: SearchCheck,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
        {
            title: "Publication Support",
            desc: "Providing complete assistance from initial research planning to final manuscript submission ensuring high-quality deliverables throughout the publication process.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: Send,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Ceramic Engineering"
                description="Ceramic Engineering delivers innovative engineering solutions with a focus on quality, precision, and reliability. We turn complex challenges into efficient, real-world results."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming molecules into real-world solutions through innovation, precision, and advanced Ceramic Engineering
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723] flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        The Discipline of Ceramic Engineering is a rapidly developing and dynamic field that involves the Application of the science of materials (Materials Science), Chemistry, Physics and Engineering, to develop High-Performance Ceramic Materials for Use in Real-World Products. Ceramic Engineering is Essential for Modern Manufacturing Industries including Aerospace, Energy, Electronics, Health Care, and Manufacturing. The demand for High-Performance, Durable, Sustainable and Heat-Resistant Materials is Driving Development in this Area.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Ceramic Engineering is focused on the design, Processing, Characterization and Application of both Traditional and Advanced Sophisticated Ceramics, Glass Ceramics, and Composite Material Systems. Ceramic Engineers use Advanced Synthesis, Sintering, Computational Modelling, and Microstructural Analysis to solve Complex Engineering Problems. With the use of Computational Ceramic Engineering Services, researchers can Obtain a Greater understanding of the Behaviour of Materials and use Advanced Simulations and Predictive Tools to optimize the Design, improve the Performance, and Accelerate Innovation.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide targeted Ceramic Engineering Solutions, targeted <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline hover:no-underline">Research Support</Link> for those involved in Research in this area, and overall Academic Solutions specifically for Researchers, Scholars, and Industry Professionals conducting research or working within the domain of Ceramic Engineering. By doing so, we are striving to support increases in the overall Quality, Technical Accuracy, and Global Reach of Research Outputs produced within the field of Ceramic Engineering.
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
                    <CoreAreasSection
                        title="Our Core Areas Of Ceramic Engineering"
                        description="Ceramic Engineering encompasses several interconnected areas, each contributing to the development, optimization, and application of advanced ceramic materials. These core disciplines include:"
                        items={disciplines}
                    />
                </div>
            </section>
            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Our Expertise in Ceramic Engineering Research and Publication"
                    description="Our team includes PhD-qualified specialists with considerable experience in ceramics and materials science, ceramics manufacturing techniques, computational modelling, and advanced manufacturing processes to assist the academic research community, graduate students, and materials scientists in the ceramic engineering, ceramics, and advanced manufacturing fields:"
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
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
    BookOpen
} from 'lucide-react';

export default function MedicinalChemistryPage() {
    const disciplines = [
        {
            title: "Drug Discovery and Lead Identification",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Drug-Discovery-and-Lead-Identification.webp",
            description: 'This discipline focuses on identifying and validating potential drugs and our experts are available to help authors with the preparation and writing of manuscripts that fall under the broad headings of "target screening," "HTS," and "Hit-to-Lead Optimization."',
            icon: Search,
        },
        {
            title: "Lead Optimization and Structure-Activity Relationship (SAR) Studies",
            iconSrc: "/images/subject-matter-experts/shared/Lead-Optimization-and-Structure-Activity-Relationship-SAR-Studies.webp",
            description: "At this stage of drug discovery, we help authors describe the work that they are doing to refine the potency, selectivity, and pharmacokinetic properties of their compounds through chemical modification and/or SAR study (Lead optimization)",
            icon: TrendingUp
        },
        {
            title: "Cheminformatics and molecular docking",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Cheminformatics-and-molecular-docking.webp",
            description: "Encompassing molecular modelling, docking, and in silico predictions, our team provides editorial and analytical assistance for research involving computational drug design and virtual screening.",
            icon: FileText
        },
        {
            title: "Organic and Synthetic Chemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Organic-and-Synthetic-Chemistry.webp",
            description: "Our chemists aid with the writing of manuscripts that detail the Synthetic Pathways of Novel Compounds and their associated Reaction Mechanisms. Additionally, our Chemists have developed and can describe methods that can be used for Scale-Up Synthesis.",
            icon: Database
        },
        {
            title: "Pharmacokinetics (ADME) and Pharmacodynamics",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Pharmacokinetics-ADME-and-Pharmacodynamics.webp",
            description: "Our Pharmacokinetics and Pharmacodynamics team aids authors in preparing their manuscripts that describe, through analytical methods, how their drugs behave in terms of Absorption, Distribution, Metabolism and Excretion (ADME), and their effects on Biological Systems.",
            icon: ShieldAlert
        },
        {
            title: "Bioorganic and Medicinal Biochemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Bioorganic-and-Medicinal-Biochemistry.webp",
            description: "Experts assist Authors with their preparation of Studies describing the interaction of Chemical Compounds with Biological Targets. This includes studies related to enzyme inhibition, receptor binding, as well as Biochemical Assays.",
            icon: Layers
        },
        {
            title: "Natural Product Chemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Natural-Product-Chemistry.webp",
            description: "We help our authors to prepare manuscripts describing the extraction method, structural identification and biological testing for natural products that have a biological activity.",
            icon: BookOpen
        },
        {
            title: "Analytical Chemistry for Drug Development",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Analytical-Chemistry-for-Drug-Development.webp",
            description: "Our editorial support incorporates analytical methods, validation of analytical methods (including chromatography and spectroscopy), and use these methodologies during the development of drug products by providing Editorial Support.",
            icon: BarChart3
        },
        {
            title: "Preclinical Drug Development",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Preclinical-Drug-Development.webp",
            description: "In addition to comprehensive reports, we assist researchers during preparation of their comprehensive preclinical chemistry research and preparation of scientific manuscripts that incorporate pharmacology, toxicity studies, and efficacy evaluations both through in vivo and in vitro methods.",
            icon: FileSearch
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Research gaps are recognized and thoroughly examined using extensive literature analysis enabled by medicinal chemistry review writing.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileText,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts, in adjunct with medicinal chemistry manuscript editing.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Graphical Abstract",
            description: "Providing a single, clear visual summary of your research and its findings.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BookOpen,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Research Services",
            description: "Expert counsel on how to plan your project, execute your project and analyze your data.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Cpu,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Systematic Reviews",
            description: "Providing literature reviews and evidence synthesis on the extent of the literature available on a topic related to the Clinical Research and Academic Research fields",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Journal Submission",
            description: "Assisting you in determining which journals will be most appropriate for your submission and subsequently providing you with a streamlined submission process",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/subject-matter-experts/medicinal-chemistry"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/subject-matter-experts/medicinal-chemistry"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Medicinal Chemistry
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Elevating medicinal chemistry research with expert analytical insight, clear scientific writing, and seamless journal submission assistance.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Elevating Medicinal Chemistry Excellence with End-to-End Research and Publication Services
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Medicinal chemistry is an interdisciplinary field that combines elements from chemistry, biology, and pharmacology to design, synthesize and optimize molecules with biologically active characteristics. Its primary purpose is to contribute to drug discovery research by converting the knowledge obtained through various types of chemical research into potential therapeutics. The Medicinal Chemistry Research Support Services provided by Pubrica provide researchers, scientists and other members of the pharmaceutical industry with everything they need in order to write and edit manuscript-style articles related to their medicinal chemistry research. The Medicinal Chemistry manuscript writing and editing services ensure that researchers have the tools and support needed to prepare their manuscripts for publication in high impact medicinal chemistry journals.
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
                                src="/images/subject-matter-experts/medicinal-chemistry/Medicinal-Chemistry.webp"
                                alt="Medicinal Chemistry research visualization"
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
                            Our Core Disciplines In Medicinal Chemistry
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our medicinal chemistry division at Pubrica provides professional, comprehensive support at every step of the drug discovery process. The Medicinal Chemistry division works closely with researchers and product developers to create the highest-quality and most effective technical writing, editorial support, and analytical services for both medicinal chemistry research and high-impact publishing.
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
                            Our Expertise in Medicinal Chemistry Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Publishing in high-impact medicinal chemistry journals does not only require experimental research data but also demands detailed analysis of important chemical properties along with good scientists' communication and a thorough explanation of the research methods. The following are ways that Pubrica can help support Medicinal Chemistry research publishing:
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
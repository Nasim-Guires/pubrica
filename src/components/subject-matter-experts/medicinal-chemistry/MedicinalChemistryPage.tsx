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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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
            icon: TrendingUp,
        },
        {
            title: "Cheminformatics and molecular docking",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Cheminformatics-and-molecular-docking.webp",
            description: "Encompassing molecular modelling, docking, and in silico predictions, our team provides editorial and analytical assistance for research involving computational drug design and virtual screening.",
            icon: FileText,
        },
        {
            title: "Organic and Synthetic Chemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Organic-and-Synthetic-Chemistry.webp",
            description: "Our chemists aid with the writing of manuscripts that detail the Synthetic Pathways of Novel Compounds and their associated Reaction Mechanisms. Additionally, our Chemists have developed and can describe methods that can be used for Scale-Up Synthesis.",
            icon: Database,
        },
        {
            title: "Pharmacokinetics (ADME) and Pharmacodynamics",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Pharmacokinetics-ADME-and-Pharmacodynamics.webp",
            description: "Our Pharmacokinetics and Pharmacodynamics team aids authors in preparing their manuscripts that describe, through analytical methods, how their drugs behave in terms of Absorption, Distribution, Metabolism and Excretion (ADME), and their effects on Biological Systems.",
            icon: ShieldAlert,
        },
        {
            title: "Bioorganic and Medicinal Biochemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Bioorganic-and-Medicinal-Biochemistry.webp",
            description: "Experts assist Authors with their preparation of Studies describing the interaction of Chemical Compounds with Biological Targets. This includes studies related to enzyme inhibition, receptor binding, as well as Biochemical Assays.",
            icon: Layers,
        },
        {
            title: "Natural Product Chemistry",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Natural-Product-Chemistry.webp",
            description: "We help our authors to prepare manuscripts describing the extraction method, structural identification and biological testing for natural products that have a biological activity.",
            icon: BookOpen,
        },
        {
            title: "Analytical Chemistry for Drug Development",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Analytical-Chemistry-for-Drug-Development.webp",
            description: "Our editorial support incorporates analytical methods, validation of analytical methods (including chromatography and spectroscopy), and use these methodologies during the development of drug products by providing Editorial Support.",
            icon: BarChart3,
        },
        {
            title: "Preclinical Drug Development",
            iconSrc: "/images/subject-matter-experts/medicinal-chemistry/Preclinical-Drug-Development.webp",
            description: (
                <>
                    In addition to comprehensive reports, we assist researchers during preparation of their comprehensive{" "}
                    <Link
                        href="/services/research-services/medical-writing/"
                        className="text-blue-600"
                    >
                        preclinical chemistry research
                    </Link>{" "}
                    and preparation of scientific manuscripts that incorporate pharmacology, toxicity studies, and efficacy evaluations both through in vivo and in vitro methods.
                </>
            ),
            icon: FileSearch,
        },
    ];

    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Research gaps are recognized and thoroughly examined using extensive literature analysis enabled by medicinal chemistry review writing.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileText,
        },
        {
            title: "Scientific Writing",
            desc: (
                <>
                    Crafting clear, precise, and publication-ready research manuscripts, in adjunct with{" "}
                    <Link
                        href="/services/editing-and-translation/manuscript-editing/"
                        className="text-blue-600"
                    >
                        medicinal chemistry manuscript editing
                    </Link>
                    .
                </>
            ),
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Graphical Abstract",
            desc: "Providing a single, clear visual summary of your research and its findings.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BookOpen,
        },
        {
            title: "Research Services",
            desc: "Expert counsel on how to plan your project, execute your project and analyze your data.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Cpu,
        },
        {
            title: "Systematic Reviews",
            desc: "Providing literature reviews and evidence synthesis on the extent of the literature available on a topic related to the Clinical Research and Academic Research fields",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Assisting you in determining which journals will be most appropriate for your submission and subsequently providing you with a streamlined submission process",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];
    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Medicinal Chemistry"
                description="Elevating medicinal chemistry research with expert analytical insight, clear scientific writing, and seamless journal submission assistance."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Elevating Medicinal Chemistry Excellence with End-to-End Research and Publication Services
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Medicinal chemistry is an interdisciplinary field that combines elements from chemistry, biology, and pharmacology to design, synthesize and optimize molecules with biologically active characteristics. Its primary purpose is to contribute to{" "}
                                        <Link href="/services/research-services/experimental-design/" className="text-blue-600 no-underline">
                                            drug discovery research
                                        </Link>{" "}
                                        by converting the knowledge obtained through various types of chemical research into potential therapeutics. The{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            Medicinal Chemistry Research Support Services
                                        </Link>{" "}
                                        provided by Pubrica provide researchers, scientists and other members of the pharmaceutical industry with everything they need in order to write and edit manuscript-style articles related to their medicinal chemistry research. The{" "}
                                        <Link href="/services/physician-writing-services/" className="text-blue-600 no-underline">
                                            Medicinal Chemistry manuscript writing and editing services
                                        </Link>{" "}
                                        ensure that researchers have the tools and support needed to prepare their manuscripts for publication in{" "}
                                        <Link href="/services/publication-support/journal-selection/" className="text-blue-600 no-underline">
                                            high impact medicinal chemistry journals
                                        </Link>
                                        .
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

                <section className="space-y-8 font-['Poppins',sans-serif]">
                    {/* Section Heading */}
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                            Our Expertise in Medicinal Chemistry Research and Publication
                        </h2>

                        <p className="text-sm md:text-base text-gray-600">
                            Publishing in high-impact medicinal chemistry journals does not only require experimental research data but also demands detailed analysis of important chemical properties along with good scientists' communication and a thorough explanation of the research methods. The following are ways that Pubrica can help support Medicinal Chemistry research publishing:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-center max-w-6xl">

                        {expertiseCards.map((card, idx) => {
                            const CardIcon = card.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-300 rounded-none overflow-hidden shadow-sm h-64"
                                >
                                    {/* Background Image */}
                                    <div className="relative h-40 w-full bg-gray-100">
                                        <Image
                                            src={card.imageUrl}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Center Circle Icon */}
                                    <div className="absolute top-[8.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 ease-in-out group-hover:top-20 group-hover:scale-105">
                                        {CardIcon && (
                                            <CardIcon className="w-5 h-5 text-[#12433e]" />
                                        )}
                                    </div>

                                    {/* Sliding White Panel */}
                                    <div className="absolute inset-x-0 bottom-0 top-36 z-10 bg-white pt-7 pb-3 px-3 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out group-hover:top-20 group-hover:pt-12 group-hover:justify-start">

                                        {/* Clickable Card Title */}
                                        <Link
                                            href={card.href}
                                            className="text-sm md:text-base font-bold text-gray-900 hover:text-blue-600 transition-all duration-300"
                                        >
                                            {card.title}
                                        </Link>

                                        {/* Description */}
                                        <p className="text-xs text-gray-500 mt-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </section>
            </section>

        </main>
    );
}
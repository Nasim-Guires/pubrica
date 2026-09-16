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
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function EnzymesPage() {
    const disciplines = [
        {
            title: "Enzyme Discovery and Characterization",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Discovery-and-Characterization.webp",
            description: (
                <>
                    We focus on discovering and analysing novel enzymes, studying their kinetics and mechanisms. Our team aids researchers in manuscript writing, experimental protocols, and{" "}
                    <Link href="/services/research-services/systematic-review/" className="text-blue-600">
                        systematic reviews
                    </Link>
                    . We also support enzyme characterization for industrial and therapeutic applications.
                </>
            ),
            icon: Search,
        },
        {
            title: "Enzyme Engineering and Optimization",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Engineering-and-Optimization-1.webp",
            description: "Enzyme engineering focuses on enhancing enzyme activity, stability, and specificity. We support protein engineering, directed evolution, and genetic modifications for efficient industrial and therapeutic enzymes. Our team helps researchers craft impactful, well-structured publications.",
            icon: TrendingUp,
        },
        {
            title: "Industrial Biotechnology and Enzymes",
            iconSrc: "/images/subject-matter-experts/enzymes/Industrial-Biotechnology-and-Enzymes.webp",
            description: (
                <>
                    This discipline explores enzyme applications in biofuels, food production, and waste management. We assist with writing and editing research on sustainable, efficient enzyme-based processes. Our{" "}
                    <Link href="/services/academic-editorial-services/" className="text-blue-600 ">
                        editorial services
                    </Link>{" "}
                    ensure complex research is accessible and publication ready.
                </>
            ),
            icon: FileText,
        },
        {
            title: "Enzyme-Based Therapeutics",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Based-Therapeutics.webp",
            description: "Enzyme-based therapies are gaining traction for treating deficiencies, metabolic disorders, and cancers. We provide editorial and analytical support for studies on enzyme replacement therapies, inhibitors, and gene therapy. Our team helps communicate the clinical impact and potential of enzyme innovations.",
            icon: Database,
        },
        {
            title: "Enzyme Mechanisms and Biochemistry",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Mechanisms-and-Biochemistry.webp",
            description: (
                <>
                    We study the molecular mechanisms behind enzyme catalysis, including substrate interactions and reaction pathways. Our team supports researchers in presenting their findings clearly for publication in leading{" "}
                    <Link href="/academy/journal-templates/" className="text-blue-600 ">
                        scientific journals
                    </Link>
                    .
                </>
            ),
            icon: AlertTriangle,
        },
        {
            title: "Enzyme Production and Purification",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Production-and-Purification.webp",
            description: "This discipline focuses on optimizing enzyme production and purification for commercial use. Our team helps design methods, document processes, and ensures clear presentation of technical details in research publications.",
            icon: Layers,
        },
        {
            title: "Enzyme Diagnostics",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Diagnostics.webp",
            description: (
                <>
                    We focus on diagnostic enzymes used in disease detection, including cancer, liver function, and genetic screening. Our experts assist with writing and reviewing research to ensure clear, professional presentation for{" "}
                    <Link href="/academy/peer-review/journal-peer-review-process-after-submission/" className="text-blue-600 ">
                        peer-reviewed journals
                    </Link>
                    .
                </>
            ),
            icon: Cpu,
        },
        {
            title: "Enzyme Regulation and Pathways",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Regulation-and-Pathways.webp",
            description: "We focus on enzyme regulation in cellular processes, including activity control, feedback mechanisms, and signalling pathways. Our team helps researchers publish clear manuscripts on how enzymes regulate key biological functions, from metabolism to gene expression.",
            icon: BarChart3,
        },
        {
            title: "Enzyme Applications in Medicine",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Applications-in-Medicine.webp",
            description: "We support research on enzymes in drug design, enzyme replacement therapies, and enzyme inhibitors. Our team helps prepare clinical reports and publication-ready manuscripts that highlight enzymes' role in modern medicine.",
            icon: PenTool,
        },
    ];
    const expertiseCards = [
        {
            title: "Publication Support",
            desc: "Providing complete assistance from initial research planning to final manuscript submission ensuring high-quality deliverables throughout the publication process.",
            href: "/services/publication-support",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Literature Review Services",
            desc: "Providing comprehensive literature summaries, systematic reviews, and evidence mapping tailored to enzyme research topics.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Clinical-Literature-Review-Services.jpg",
            icon: FileSearch,
        },
        {
            title: "Manuscript Writing in Enzyme Research",
            desc: "Developing high-quality manuscripts including original research, review articles, and short communications aligned with journal guidelines.",
            href: "/services/editing-and-translation/manuscript-editing",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
        },
        {
            title: "Grant Writing Proposals",
            desc: "Crafting scientifically strong enzyme-related grant proposals with clear objectives, methodology, and expected outcomes.",
            href: "/services/research-services/grant-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Cpu,
        },
        {
            title: "Journal Selection & Submission Support",
            desc: "Helping authors select high-impact journals related to enzymology and prepare manuscripts, figures, references, and cover letters for submission",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Layers,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Enzymes"
                description="The enzyme research, discovery, and therapeutic applications, connecting biochemistry, pharmacology, and healthcare for improved treatment strategies and disease management."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Discoveries in Enzymes Through Expert Writing, Editing, and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/enzymes/Enzymes.webp"
                                        alt="Enzyme research molecular visualization"
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
                                        At Empowering Discoveries in Enzymes, we provide manuscript writing,{" "}
                                        <Link href="/academy/scientific-editing/scientific-vs-academic-editing-differences/" className="text-blue-600 ">
                                            scientific editing
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 ">
                                            publication support
                                        </Link>{" "}
                                        to researchers working in enzymology. Our expert team provides researchers in{" "}
                                        <Link href="/services/research-services/grant-writing/" className="text-blue-600 no-underline">
                                            enzyme research
                                        </Link>{" "}
                                        with{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline">
                                            manuscript writing services
                                        </Link>{" "}
                                        from manuscript preparation through{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline">
                                            journal submission support
                                        </Link>{" "}
                                        and responding to{" "}
                                        <Link href="/academy/peer-review/journal-peer-review-process-after-submission/" className="text-blue-600 no-underline">
                                            peer review
                                        </Link>
                                        . We will provide all services necessary to publish an article, so researchers can publish their research findings on enzymes in a professional manner and make them available for global distribution.
                                    </p>

                                    <div className="pt-2">
                                        <h3 className="text-base font-bold text-[#0c2e3a] mb-2">
                                            Our Expertise In Enzyme Science Includes:
                                        </h3>
                                        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Catalyse Reactions:</strong> Enhance the rate of biochemical reactions in organisms.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Energy Efficient:</strong> Reduce activation energy, allowing for the conduct of biochemical reactions under mild conditions.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Digestion:</strong> Breakdown of food so nutrients are available to the body.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Regulate Cellular Metabolism:</strong> Control the rate of metabolism in the cells.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Industrial Uses:</strong> Applies to industries e.g. Food, Pharmaceutical, Biofuel, etc.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#C4161C] font-bold mr-2">→</span>
                                                <span><strong>Environmentally Friendly:</strong> Sustainable and eco-friendly alternatives to chemical processes.</span>
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

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="max-w-4xl mx-auto text-left sm:text-center mb-2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e3b32] mb-4">
                                Our Core Disciplines In Enzymes
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed sm:leading-normal text-left sm:text-center">
                                Pubrica is dedicated to the advancement of enzyme research through a combination of expert manuscript writing, scientific editing, and{" "}
                                <Link
                                    href="/academy/publication-support/challenges-in-research-paper-writing-and-strategies-to-overcome-them/"
                                    className="text-blue-600 no-underline hover:text-blue-800 transition-colors inline"
                                >
                                    publication support
                                </Link>
                                . We assist researchers in clearly communicating their findings to maximise the chances of successful publication, and thereby, get a better chance of having their enzyme-related discoveries seen around the world by adding clarity and coherence. In addition to preparing and submitting manuscripts, we provide an all-in-one solution for all your enzyme-related publication needs. Trust us to maximise the potential impact of your enzyme research and to facilitate the advancement of this important area of science.
                            </p>
                        </div>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Enzymes Research and Publication"
                    description="At Pubrica we provide specialist services in the areas of editing, writing and publishing about enzyme research. Our team of professionals will help you with how to communicate your discovery engineering application of an enzyme with clarity and accuracy to ensure that your results are of the highest quality and suitable for submission to leading scientific journals, thereby aiding in the progression of research and understanding worldwide in enzyme research:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
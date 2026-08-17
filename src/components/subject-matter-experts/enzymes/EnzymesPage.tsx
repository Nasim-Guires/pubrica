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

export default function EnzymesPage() {
    const disciplines = [
        {
            title: "Enzyme Discovery and Characterization",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Discovery-and-Characterization.webp",
            description: "We focus on discovering and analysing novel enzymes, studying their kinetics and mechanisms. Our team aids researchers in manuscript writing, experimental protocols, and systematic reviews. We also support enzyme characterization for industrial and therapeutic applications.",
            icon: Search
        },
        {
            title: "Enzyme Engineering and Optimization",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Engineering-and-Optimization-1.webp",
            description: "Enzyme engineering focuses on enhancing enzyme activity, stability, and specificity. We support protein engineering, directed evolution, and genetic modifications for efficient industrial and therapeutic enzymes. Our team helps researchers craft impactful, well-structured publications.",
            icon: TrendingUp
        },
        {
            title: "Industrial Biotechnology and Enzymes",
            iconSrc: "/images/subject-matter-experts/enzymes/Industrial-Biotechnology-and-Enzymes.webp",
            description: "This discipline explores enzyme applications in biofuels, food production, and waste management. We assist with writing and editing research on sustainable, efficient enzyme-based processes. Our editorial services ensure complex research is accessible and publication ready.",
            icon: FileText
        },
        {
            title: "Enzyme-Based Therapeutics",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Based-Therapeutics.webp",
            description: "Enzyme-based therapies are gaining traction for treating deficiencies, metabolic disorders, and cancers. We provide editorial and analytical support for studies on enzyme replacement therapies, inhibitors, and gene therapy. Our team helps communicate the clinical impact and potential of enzyme innovations.",
            icon: Database
        },
        {
            title: "Enzyme Mechanisms and Biochemistry",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Mechanisms-and-Biochemistry.webp",
            description: "We study the molecular mechanisms behind enzyme catalysis, including substrate interactions and reaction pathways. Our team supports researchers in presenting their findings clearly for publication in leading scientific journals.",
            icon: AlertTriangle
        },
        {
            title: "Enzyme Production and Purification",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Production-and-Purification.webp",
            description: "This discipline focuses on optimizing enzyme production and purification for commercial use. Our team helps design methods, document processes, and ensures clear presentation of technical details in research publications.",
            icon: Layers
        },
        {
            title: "Enzyme Diagnostics",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Diagnostics.webp",
            description: "We focus on diagnostic enzymes used in disease detection, including cancer, liver function, and genetic screening. Our experts assist with writing and reviewing research to ensure clear, professional presentation for peer-reviewed journals",
            icon: Cpu
        },
        {
            title: "Enzyme Regulation and Pathways",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Regulation-and-Pathways.webp",
            description: "We focus on enzyme regulation in cellular processes, including activity control, feedback mechanisms, and signalling pathways. Our team helps researchers publish clear manuscripts on how enzymes regulate key biological functions, from metabolism to gene expression.",
            icon: BarChart3
        },
        {
            title: "Enzyme Applications in Medicine",
            iconSrc: "/images/subject-matter-experts/enzymes/Enzyme-Applications-in-Medicine.webp",
            description: "We support research on enzymes in drug design, enzyme replacement therapies, and enzyme inhibitors. Our team helps prepare clinical reports and publication-ready manuscripts that highlight enzymes' role in modern medicine.",
            icon: PenTool
        }
    ];

    const services = [
        {
            title: "Publication Support",
            description: "Providing complete assistance from initial research planning to final manuscript submission ensuring high-quality deliverables throughout the publication process.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            icon: FileText,
            href: "/services/publication-support"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Literature Review Services",
            description: "Providing comprehensive literature summaries, systematic reviews, and evidence mapping tailored to enzyme research topics.",
            image: "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Clinical-Literature-Review-Services.jpg",
            icon: FileSearch,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Manuscript Writing in Enzyme Research",
            description: "Developing high-quality manuscripts including original research, review articles, and short communications aligned with journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
            href: "/services/editing-and-translation/manuscript-editing"
        },
        {
            title: "Grant Writing Proposals",
            description: "Crafting scientifically strong enzyme-related grant proposals with clear objectives, methodology, and expected outcomes.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Cpu,
            href: "/services/research-services/grant-writing"
        },
        {
            title: "Journal Selection & Submission Support",
            description: "Helping authors select high-impact journals related to enzymology and prepare manuscripts, figures, references, and cover letters for submission",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Layers,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Enzymes
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        The enzyme research, discovery, and therapeutic applications, connecting biochemistry, pharmacology, and healthcare for improved treatment strategies and disease management.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering discoveries in Enzymes through expert writing, editing, and publication support.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Empowering Discoveries in Enzymes, we provide manuscript writing, <Link href="/services/editing-and-translation" className="text-[#2b6cb0] hover:underline">scientific editing</Link>, and <Link href="/services/publication-support/" className="text-[#2b6cb0] hover:underline">publication support</Link> to researchers working in enzymology. Our expert team provides researchers in <Link href="/services/research-services/scientific-writing" className="text-[#2b6cb0] hover:underline">enzyme research</Link> with <Link href="/services/research-services/scientific-writing" className="text-[#2b6cb0] hover:underline">manuscript writing services</Link> from manuscript preparation through <Link href="/services/publication-support/journal-submission" className="text-[#2b6cb0] hover:underline">journal submission support</Link> and responding to <Link href="/services/publication-support/peer-review-pre-submission" className="text-[#2b6cb0] hover:underline">peer review</Link>. We will provide all services necessary to publish an article, so researchers can publish their research findings on enzymes in a professional manner and make them available for global distribution.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-base font-bold text-[#0e3b32] mb-2">
                                Our Expertise in Enzyme Science Includes
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
                                src="/images/subject-matter-experts/enzymes/Enzymes.webp"
                                alt="Enzyme research molecular visualization"
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
                            Our Core Disciplines In Enzymes
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Pubrica is dedicated to the advancement of enzyme research through a combination of expert manuscript writing, scientific editing, and publication support. We assist researchers in clearly communicating their findings to maximise the chances of successful publication, and thereby, get a better chance of having their enzyme-related discoveries seen around the world by adding clarity and coherence. In addition to preparing and submitting manuscripts, we provide an all-in-one solution for all your enzyme-related publication needs. Trust us to maximise the potential impact of your enzyme research and to facilitate the advancement of this important area of science.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Enzymes Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica we provide specialist services in the areas of editing, writing and publishing about enzyme research. Our team of professionals will help you with how to communicate your discovery engineering application of an enzyme with clarity and accuracy to ensure that your results are of the highest quality and suitable for submission to leading scientific journals, thereby aiding in the progression of research and understanding worldwide in enzyme research:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
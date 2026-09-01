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
    ArrowRight
} from 'lucide-react';

export default function CancerResearchPage() {
    const disciplines = [
        {
            title: "Molecular and Cellular Oncology",
            iconSrc: "/images/subject-matter-experts/cancer-research/Molecular-and-Cellular-Oncology.webp",
            description: "We assist with research on tumour biology, gene expression, oncogenes, tumour suppressors, epigenetics, and signalling pathways. Our writers ensure accurate representation of experimental results, diagrams, and mechanistic interpretations.",
            icon: Dna
        },
        {
            title: "Cancer Genomics and Biomarker Discovery",
            iconSrc: "/images/subject-matter-experts/cancer-research/Cancer-Genomics-and-Biomarker-Discovery.webp",
            description: "From next-generation sequencing to bioinformatics-based analysis, Pubrica helps interpret complex genomic datasets and develop manuscripts highlighting biomarkers for diagnosis, prognosis, and treatment selection.",
            icon: Activity
        },
        {
            title: "Immuno-Oncology and Immunotherapy",
            iconSrc: "/images/subject-matter-experts/cancer-research/Immuno-Oncology-and-Immunotherapy.webp",
            description: "We support research involving checkpoint inhibitors, CAR-T cell therapy, tumour immune evasion, and inflammation-driven cancers. Our team ensures that immunological mechanisms and clinical outcomes are conveyed precisely.",
            icon: Layers
        },
        {
            title: "Radiation, Surgical, and Medical Oncology",
            iconSrc: "/images/subject-matter-experts/cancer-research/Radiation-Surgical-and-Medical-Oncology.webp",
            description: "Pubrica develops evidence-based content on treatment techniques, clinical outcomes, survival metrics, and comparative effectiveness studies across various oncological interventions.",
            icon: PieChart
        },
        {
            title: "Drug Development and Translational Oncology",
            iconSrc: "/images/subject-matter-experts/cancer-research/Drug-Development-and-Translational-Oncology.webp",
            description: "Our experts assist pharmaceutical and biotech clients with preclinical studies, mechanism-of-action reports, PK/PD modelling, and translational data linking bench research to clinical application.",
            icon: Microscope
        },
        {
            title: "Cancer Epidemiology, Emerging and Public Health",
            iconSrc: "/images/subject-matter-experts/cancer-research/Cancer-Epidemiology-Emerging-and-Public-Health.webp",
            description: "We support population-level studies, burden-of-disease reports, risk factor analysis, screening programs, and prevention strategies.",
            icon: Activity
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
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
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
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            icon: FileSearch
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send
        },
        {
            title: "Original Research",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSpreadsheet
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cancer Research
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From proposal development to manuscript publication, Pubrica empowers your cancer research journey with accuracy, clarity, and domain expertise.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Cancer Research Through Expert Guidance and High-Quality Scientific Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <Link href="/subject-matter-experts/cancer-research" className="text-blue-600 no-underline hover:no-underline">Cancer research</Link> aims to understand, prevent, diagnose, treat, and cure cancer by studying its causes and biology. This field encompasses many disciplines, from molecular science to clinical trials, and has led to significant advances, such as improved treatments, early detection methods, and preventative strategies.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Key areas of research include developing new therapies like immunotherapies, using AI to predict treatment response, and identifying genetic risk factors. As the global burden of cancer continues to increase, high-quality, reproducible, and clinically relevant research has never been more important. Pubrica supports researchers, oncologists, academicians, and <Link href="/subject-matter-experts/biotechnology" className="text-blue-600 no-underline hover:no-underline">biotechnology</Link> organizations by offering end-to-end research development and <Link href="/services/publication-support" className="text-blue-600 no-underline hover:no-underline">publication services</Link> that bring scientific ideas to life.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cancer research involves systematic investigations aimed at understanding the biological mechanisms of cancer development, identifying risk factors, improving diagnostic accuracy, and designing innovative therapies. It spans molecular biology, genetics, bioinformatics, immunology, pharmacology, clinical sciences, epidemiology, and public health.
                        </p>

                        <div className="pt-2">
                            <h3 className="font-bold text-gray-800 text-base mb-3">
                                The primary goals of cancer research include:
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Understanding the cellular and molecular basis of tumorigenesis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Identifying biomarkers for early detection and precision diagnostics</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Evaluating novel therapeutic agents, drug targets, and treatment strategies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Developing personalised and targeted therapies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Improving patient survival, quality of life, and long-term outcomes</span>
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
                                src="/images/subject-matter-experts/cancer-research/Cancer-Research.webp"
                                alt="Cancer research professionals"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 320px, 380px"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Key Areas Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Key Areas Of Cancer Research
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            Cancer research is a multidisciplinary field that integrates molecular biology, genetics, immunology, pharmacology, and bioinformatics. It is broadly categorized into several key areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Cancer Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica offers specialized research and publication tailored explicitly for cancer research. Our experts understand the complexities associated with cancer models, biomarkers, drug discovery, clinical trial protocols, and statistical interpretations. We work closely with researchers to craft scientifically sound and publication-ready documents. Our services include:
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
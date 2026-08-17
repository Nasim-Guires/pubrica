"use client";
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
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';

export default function LifeSciencesPage() {
    const disciplines = [
        {
            title: "Molecular Biology and Genetics",
            iconSrc: "/images/subject-matter-experts/biochemistry/Molecular-Biology-and-Genetics.webp",
            description: "Understanding how genes work and how they affect our biology through techniques such as gene expression analysis, DNA sequencing, pathways, protein structure/function and molecular mechanisms.",
            icon: Search
        },
        {
            title: "Biotechnology And Bioengineering",
            iconSrc: "/images/subject-matter-experts/life-sciences/Biotechnology-And-Bioengineering.webp",
            description: "Innovative technology development using biology and biological systems in medicine agriculture industry.",
            icon: TrendingUp
        },
        {
            title: "Pharmaceutical Sciences and Drug Development",
            iconSrc: "/images/subject-matter-experts/life-sciences/Pharmaceutical-Sciences-and-Drug-Development.webp",
            description: "The design, development, and testing of new medicines to cure diseases.",
            icon: FileText
        },
        {
            title: "Bioinformatics And Computational Biology",
            iconSrc: "/images/subject-matter-experts/life-sciences/Bioinformatics-And-Computational-Biology.webp",
            description: "Using computational tools to analyze biological data like genomic data, proteomic data, and systems biology data.",
            icon: Database
        },
        {
            title: "Clinical Research and Trials Conduct",
            iconSrc: "/images/subject-matter-experts/life-sciences/Clinical-Research-and-Trials-Conduct.webp",
            description: "clinical trials to evaluate the safety and effectiveness of the treatment of patients with certain diseases.",
            icon: AlertTriangle
        },
        {
            title: "Immunology And Microbiology",
            iconSrc: "/images/subject-matter-experts/life-sciences/Immunology-And-Microbiology.webp",
            description: "Understanding the immune response to pathogens, infectious diseases, and developing vaccines.",
            icon: ShieldAlert
        },
        {
            title: "Cell And Developmental Biology",
            iconSrc: "/images/subject-matter-experts/life-sciences/Cell-And-Developmental-Biology.webp",
            description: "Understanding cell and developmental biology is key to advancing medicine, genetics, and biotechnology by explaining tissue formation, disease development, and regenerative therapies.",
            icon: Layers
        },
        {
            title: "Neuroscience And Behavioral Sciences",
            iconSrc: "/images/subject-matter-experts/life-sciences/Neuroscience-And-Behavioral-Sciences.webp",
            description: "Research to study the nervous system and brain functions related to how to behave normally and in some instances may have to do with neurological disorders.",
            icon: Cpu
        },
        {
            title: "Environmental And Agricultural Life Sciences",
            iconSrc: "/images/subject-matter-experts/life-sciences/Environmental-And-Agricultural-Life-Sciences.webp",
            description: "Study of the environment for ecological and agricultural purposes, including agriculture with sustained yield, sustainable agriculture and the effect of the environment on organisms that live there.",
            icon: BookOpen
        },
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
            href: "/services/publication-support"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileText,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Life Science
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Advanced research techniques enable deeper understanding of cellular processes, genetics, and disease pathways. These insights support the development of new therapies, biotechnologies, and sustainable solutions for global challenges.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Life Sciences into Real-World Solutions with Advanced Scientific Innovation.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Life Sciences is a rapidly growing field that is developing and growing due to the rising demand for new health care technologies, innovation in biotechnology, and better management of diseases. To assist with these types of developments and speed up scientific research, Pubrica has created and continues to improve on specialised services tailored specifically to the needs of Life Sciences researchers. Some examples of these are: biological data analysis, experimental design support, and comprehensive support solutions for scientific researchers (including traditional academia) as well as for clinicians and people in industry. All of our services are intended to enhance the quality, accuracy and overall impact of all research findings across the full range of Life Sciences; This can involve using scientific principles applied to cellular activity and processes, genetic theory, drug discovery and development, and disease pathways Involves using contemporary laboratory techniques, computational biology tools, data analysis techniques, and experimental validation methods to solve complex life science problems.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Comp Life Sciences projects provide the opportunity for the research community to use computers to create models of biological systems, analyse large amounts of genomic or genetic data sets, and utilise advanced techniques in bioinformatics and simulations to assess the effects of diseases and determine future outcomes.
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
                                src="/images/subject-matter-experts/life-sciences/Life-Science.webp"
                                alt="Life Sciences research visualization"
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
                            Our Core Areas Of Life Sciences
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Our areas of expertise cover several key areas of Life Sciences, which are driving innovation in the healthcare, biotechnology, and pharmaceutical industries:
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
                            Our Expertise in Life Science Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we provide specialized expertise in Life Sciences research and publication, supporting researchers, healthcare professionals, and academicians in advancing their work. Our services include:
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
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
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileText,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Life Science"
                description="Advanced research techniques enable deeper understanding of cellular processes, genetics, and disease pathways. These insights support the development of new therapies, biotechnologies, and sustainable solutions for global challenges."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Life Sciences into Real-World Solutions with Advanced Scientific Innovation.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Life Sciences is a rapidly growing field that is developing and growing due to the rising demand for new health care technologies, innovation in <Link href="/subject-matter-experts/biotechnology/" className="text-blue-600">biotechnology</Link>, and better management of diseases. To assist with these types of developments and speed up scientific research, Pubrica has created and continues to improve on specialised services tailored specifically to the needs of Life Sciences researchers. Some examples of these are: biological data analysis, experimental design support, and comprehensive support solutions for scientific researchers (including traditional academia) as well as for clinicians and people in industry. All of our services are intended to enhance the quality, accuracy and overall impact of all research findings across the full range of Life Sciences; This can involve using scientific principles applied to cellular activity and processes, genetic theory, drug discovery and development, and disease pathways Involves using contemporary laboratory techniques, computational biology tools, data analysis techniques, and experimental validation methods to solve complex life science problems.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Comp Life Sciences projects provide the opportunity for the research community to use computers to create models of biological systems, analyse large amounts of genomic or genetic data sets, and utilise advanced techniques in bioinformatics and simulations to assess the effects of diseases and determine future outcomes.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2 mb-2">
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
                            Our Core Areas Of Life Sciences
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Our areas of expertise cover several key areas of Life Sciences, which are driving innovation in the healthcare, biotechnology, and pharmaceutical industries:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Life Science Research and Publication"
                    description="At Pubrica, we provide specialized expertise in Life Sciences research and publication, supporting researchers, healthcare professionals, and academicians in advancing their work. Our services include:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
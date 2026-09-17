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

export default function NanobiotechnologyPage() {
    const disciplines = [
        {
            title: "Drug delivery and systems",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Drug-delivery-and-systems.webp",
            description: "Are focused on using nanoparticle formulations to provide accurate, regulated, and efficacious dosing to support improved therapeutic outcomes while minimizing adverse effects.",
            icon: Search
        },
        {
            title: "Diagnostic tools and biosensors",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Diagnostic-tools-and-biosensors.webp",
            description: "Are designed around nanoscale devices that can detect disease, pathogen, and biomarker early and accurately using nanoscale techniques.",
            icon: TrendingUp
        },
        {
            title: "Gene therapy and regulation",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Gene-therapy-and-regulation.webp",
            description: "Involve the use of nanomaterials to deliver genes or regulatory nucleotides to cells or tissues of interest for the purpose of gene editing and therapeutic intervention.",
            icon: FileText
        },
        {
            title: "Industrial",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Industrial.webp",
            description: "bioprocessing will benefit from the use of nanobiotechnology to enhance manufacturing and production of biopharmaceuticals, biofuels, and other biobased materials efficiently.",
            icon: Database
        },
        {
            title: "Nanomedicine",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Nanomedicine.webp",
            description: "is using nanotechnology to explore new ways to treat patients, including through cancer nanotherapeutics, individualized medicine, and regenerative capabilities.",
            icon: AlertTriangle
        },
        {
            title: "Nanoscale imaging techniques and molecular",
            iconSrc: "/images/subject-matter-experts/nanobiotechnology/Nanoscale-imaging-techniques-and-molecular.webp",
            description: "modelling methodologies are being developed using advanced imaging and computational technology to facilitate the understanding of molecular mechanisms within biological systems at the nanoscale.",
            icon: ShieldAlert
        }
    ];
    const expertiseCards = [
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts through our biomolecular engineering editing services.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: Cpu,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileSearch,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Layers,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
        },
    ];



    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Nano Biotechnology"
                description="Comprehensive research, publication, and editing support for nanobiotechnology scholars, researchers, and industry experts, driving innovation in nanomaterials, drug delivery systems, and nanoscale applications in healthcare and environmental sustainability."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming into Real-World Solutions through Innovation, Precision, and Advanced Nano Biotechnology.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/nanobiotechnology/Nano-Biotechnology.webp"
                                        alt="Nanobiotechnology research visualization"
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
                                        Nanobiotechnology is a blend of nanotechnology and biological systems to develop cutting-edge technologies for medical care, environmental sustainability and industrial biomanufacturing. Using nanotechnology, researchers can manipulate molecules and cells with precision at the nanoscale, leading to innovative solutions in diagnostics, treatment and delivering medicines, bioprocessing and so much more. At Pubrica, we provide several unique services to the nano biotech{" "}
                                        <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline">
                                            industry
                                        </Link>{" "}
                                        such as{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            research support
                                        </Link>
                                        , regulatory analysis, and educational resources for both academic and industrial users of nanobiotechnology. Our aim is to increase the accuracy and effectiveness of all nanobiotechnology research products. The field of{" "}
                                        <Link href="/subject-matter-experts/nanobiotechnology/" className="text-blue-600 no-underline">
                                            nanobiotechnology
                                        </Link>{" "}
                                        includes nanoparticles, nanomaterials and nanodevices, all of which interact in ways not possible with larger and more traditional forms of biological materials.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        This field allows for the creation of specially designed nanoparticles for drug delivery, diagnostics and biosensing and for manipulating and controlling the interactions of biomolecules to achieve therapeutic goals.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Through our research support, we assist researchers in developing better understanding of how molecular systems function at the nanoscale and applying this knowledge to identify new targets for minimally invasive therapies in medicine, renewable energy and the preservation of our planet.
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
                            Our Core Areas Of Nano Biotechnology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Biomolecular engineering encompasses several interconnected areas, each contributing to the development of efficient biological systems and products. These core disciplines include:
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
                            Our Expertise in Nano Biotechnology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we pride ourselves on our extensive expertise in <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600">nanobiotechnology research and publication</Link>. Our team of seasoned researchers, scientists, and technical writers is dedicated to advancing the field of nanobiotechnology by providing cutting-edge research support and delivering high-quality publications:
                    </p>
                </div>

                {/* Cards Grid */}
                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
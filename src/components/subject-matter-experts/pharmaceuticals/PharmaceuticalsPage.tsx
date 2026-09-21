"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Brain,
    Users,
    HeartHandshake,
    ShieldAlert,
    UserCheck,
    Pill,
    Cpu,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    ChevronDown,
    Palette,
    FileSpreadsheet,
    Image as ImageIcon,
    Dna,
    Microscope,
    FlaskConical,
    FileSearch,
    ShieldCheck,
    CheckCircle,
    Settings,
    Clock,
    Sliders,
    Bot,
    Shield,
    Wrench,
    FileText,
    TrendingUp
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function PharmaceuticalsPage() {
    const disciplines = [
        {
            title: "Pharmaceutical Chemistry",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Pharmaceutical-chemistry.webp",
            description: "It focuses on the design, synthesis, and development of biologically active compounds. It plays a crucial role in identifying potential drug candidates and optimizing their pharmacological properties. Our experts assist in manuscript development, data presentation, and publication support for studies involving medicinal chemistry, structure-activity relationships (SAR), and analytical characterization of novel compounds.",
            icon: FlaskConical,
        },
        {
            title: "Pharmacology and Toxicology",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Pharmacology-and-Toxicology.webp",
            description: (
                <>
                    Understanding drug action and safety is vital for advancing therapeutic innovation. We provide comprehensive support for studies in molecular, cellular, and systems pharmacology, as well as toxicology research assessing drug safety and adverse effects. Our{" "}
                    <Link
                        href="/services/editing-and-translation/"
                        className="text-blue-600"
                    >
                        pharmaceutical editing services
                    </Link>{" "}
                    and scientific writing services help researchers communicate complex mechanisms of action, receptor binding, and dose-response relationships with clarity and precision.
                </>
            ),
            icon: Microscope,
        },
        {
            title: "Pharmaceutics and Drug Delivery",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Pharmaceutics-and-Drug-Delivery.webp",
            description: "Innovations in drug delivery systems are transforming the way therapies are administered and absorbed. Our pharmacists specialize in formulation science, nanotechnology-based delivery, controlled-release systems, and bioavailability enhancement. We assist authors in articulating formulation methodologies, stability studies, and in-vitro/in-vivo correlation findings to meet the standards of high-impact pharmaceutical journals.",
            icon: Pill,
        },
        {
            title: "Pharmacokinetics and Pharmacodynamics (PK/PD)",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Pharmacokinetics-and-Pharmacodynamics-PK_PD.webp",
            description: "The quantitative analysis of drug absorption, distribution, metabolism, and excretion is central to rational drug design. Our support extends to PK/PD modeling, bioequivalence studies, and population pharmacokinetic analyses. We ensure that manuscripts accurately present statistical models, validation data, and interpretation aligned with regulatory expectations and scientific rigor.",
            icon: Activity,
        },
        {
            title: "Pharmaceutical Biotechnology",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Pharmaceutical-Biotechnology.webp",
            description: "This discipline merges molecular biology, genetic engineering, and bioprocess technology to develop biologics and biosimilars. We support authors in articulating findings on monoclonal antibodies, recombinant proteins, vaccine design, and gene therapy. Our editors emphasize scientific accuracy, ethical compliance, and regulatory alignment.",
            icon: Dna,
        },
        {
            title: "Regulatory Affairs and Quality Assurance",
            iconSrc: "/images/subject-matter-experts/pharmaceuticals/Regulatory-Affairs-and-Quality-Assurance.webp",
            description: "Compliance with international regulatory standards is essential for successful drug approval. Our experts assist in preparing regulatory documentation, quality control studies, and validation reports according to FDA, EMA, and ICH guidelines. We also provide support in writing systematic reviews and white papers on regulatory strategies and policy trends.",
            icon: ShieldCheck,
        },
    ];

    const expertiseCards = [
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: UserCheck,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileText,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
        },
    ];


    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Pharmaceuticals"
                description="Expert guidance for pharmaceutical research, writing, and journal submission, advancing drug discovery, clinical development, and therapeutic innovation for improved global health."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Pharmaceutical Research Through Expert Editing and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/pharmaceuticals/Pharmaceuticals.webp"
                                        alt="Pharmaceutical Research Support"
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
                                        Pharmaceutical science is a multidisciplinary field that integrates biology, chemistry, pharmacology, and technology to develop safe and effective therapeutics that improve health outcomes worldwide. From{" "}
                                        <Link href="/services/research-services/product-development/" className="text-blue-600 no-underline">
                                            drug discovery
                                        </Link>{" "}
                                        and preclinical studies to formulation, quality assurance, and clinical trials, every stage of pharmaceutical research demands precision, accuracy, and clarity in documentation. As the{" "}
                                        <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline">
                                            pharmaceutical
                                        </Link>{" "}
                                        landscape evolves with advancements in biotechnology, personalized medicine, and regulatory frameworks, researchers face increasing challenges in producing high-quality manuscripts that meet the expectations of international journals.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide comprehensive{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            pharmaceutical research support
                                        </Link>
                                        , editing, writing, and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline">
                                            publication support
                                        </Link>{" "}
                                        tailored for pharmaceutical professionals and academics. Our expert team of PhD-qualified editors and domain specialists ensures that your research meets the highest standards of scientific integrity, readability, and journal-specific formatting.
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Disciplines In Pharmaceutical
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            At Pubrica, we offer comprehensive expertise across all major disciplines within the pharmaceutical sciences. Our multidisciplinary team of scientists, researchers, and editors brings deep domain knowledge, ensuring precision, clarity, and scientific integrity in every manuscript. From early-stage drug discovery to clinical translation and regulatory documentation, our expertise spans the entire pharmaceutical research spectrum.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-left max-w-4xl mb-12">
                    <div className="flex items-center justify-start gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] whitespace-nowrap">
                            Our Expertise in Pharmaceutical Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] shrink-0" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Publishing in high-impact pharmaceutical and medical journals requires more than sound science; it demands precision in presentation, adherence to formatting guidelines, and linguistic clarity. Our pharmaceutical editors and <Link href="/services/research-services/scientific-writing/" className="text-blue-600">scientific writing</Link> team offer tailored solutions for every stage of your research journey.
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
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
            description: "Understanding drug action and safety is vital for advancing therapeutic innovation. We provide comprehensive support for studies in molecular, cellular, and systems pharmacology, as well as toxicology research assessing drug safety and adverse effects. Our pharmaceutical editing services and scientific writing services help researchers communicate complex mechanisms of action, receptor binding, and dose-response relationships with clarity and precision.",
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
        }
    ];

    const services = [
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: UserCheck,
            href: "services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/medical-data-collection"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
            href: "/services/editing-and-translation/"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileText,
            href: "/services/physician-writing-services/original-research-article"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Pharmaceuticals
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Expert guidance for pharmaceutical research, writing, and journal submission, advancing drug discovery, clinical development, and therapeutic innovation for improved global health.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Pharmaceutical Research Through Expert Editing and Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pharmaceutical science is a multidisciplinary field that integrates biology, chemistry, pharmacology, and technology to develop safe and effective therapeutics that improve health outcomes worldwide. From drug discovery and preclinical studies to formulation, quality assurance, and clinical trials, every stage of pharmaceutical research demands precision, accuracy, and clarity in documentation. As the pharmaceutical landscape evolves with advancements in biotechnology, personalized medicine, and regulatory frameworks, researchers face increasing challenges in producing high-quality manuscripts that meet the expectations of international journals.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive pharmaceutical research support, editing, writing, and publication support tailored for pharmaceutical professionals and academics. Our expert team of PhD-qualified editors and domain specialists ensures that your research meets the highest standards of scientific integrity, readability, and journal-specific formatting.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#a3c9bd]/30 flex items-center justify-center">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Pharmaceutical
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we offer comprehensive expertise across all major disciplines within the pharmaceutical sciences. Our multidisciplinary team of scientists, researchers, and editors brings deep domain knowledge, ensuring precision, clarity, and scientific integrity in every manuscript. From early-stage drug discovery to clinical translation and regulatory documentation, our expertise spans the entire pharmaceutical research spectrum.
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
                            Our Expertise in Pharmaceutical Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Publishing in high-impact pharmaceutical and medical journals requires more than sound science; it demands precision in presentation, adherence to formatting guidelines, and linguistic clarity. Our pharmaceutical editors and scientific writing team offer tailored solutions for every stage of your research journey.
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
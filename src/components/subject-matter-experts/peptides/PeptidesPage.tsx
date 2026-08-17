"use client";
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
    CheckCircle
} from 'lucide-react';

export default function PeptidesPage() {
    const disciplines = [
        {
            title: "Synthetic Peptide Development and Engineered Peptides",
            iconSrc: "/images/subject-matter-experts/peptides/Synthetic-Peptide-Development-and-Engineered-Peptides.webp",
            description: "We use cutting-edge methods of peptide synthesis and modification to produce very pure and stable synthetic peptides which may be used as therapeutic agents or diagnostic tools.",
            icon: Dna,
        },
        {
            title: "Characterization and Analysis of Peptides",
            iconSrc: "/images/subject-matter-experts/peptides/Characterization-and-Analysis-of-Peptides.webp",
            description: "We utilize cutting-edge technologies such as mass spectrometry (MS), nuclear magnetic resonance (NMR), and chromatography to characterize peptides to accurately determine their structures as a new peptide drug.",
            icon: Microscope,
        },
        {
            title: "Assessments of the Mechanisms of Action and Bioactivity of Peptides",
            iconSrc: "/images/subject-matter-experts/peptides/Assessments-of-the-Mechanisms-of-Action-and-Bioactivity-of-Peptides.webp",
            description: "Investigating how the mechanism of action of a peptide interacts with receptors, enzymes and other biological substrates to determine the therapeutic potential and mechanism of action of the peptide.",
            icon: FlaskConical,
        },
        {
            title: "Preclinical/Clinical Study Support",
            iconSrc: "/images/subject-matter-experts/peptides/Preclinical_Clinical-Study-Support.webp",
            description: "We design and conduct preclinical/clinical studies that examine the safety, efficacy, and pharmacokinetic properties of peptide products.",
            icon: FileSearch,
        },
        {
            title: "Assessment of Immunogenicity and Toxicology",
            iconSrc: "/images/subject-matter-experts/peptides/Assessment-of-Immunogenicity-and-Toxicology.webp",
            description: "Using comprehensive methods of assessment to predict the potential for an immune or toxic reaction to peptide drugs in humans.",
            icon: ShieldCheck,
        },
        {
            title: "Regulatory/Compliance Support",
            iconSrc: "/images/subject-matter-experts/peptides/Regulatory_Compliance-Support.webp",
            description: "Providing guidance through the complex regulatory requirements that must be followed for peptide product approval, preparing the documentation necessary for regulatory approvals of peptide products and negotiating compliance with both national and international guidelines and standards.",
            icon: CheckCircle,
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
            href: "/services/publication-support/journal-submission"
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
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Transforming peptide research into high-impact scientific publications to drive innovation in molecular science
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Peptide research holds immense potential for advancing molecular science, and transforming these findings into high-impact publications is crucial for driving innovation and fostering groundbreaking discoveries.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing health through evidence-based peptide research and scientific communication.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Peptides are becoming increasingly important in the Therapeutic Innovation and Treatment of Disease as a rapidly growing area in Biomedical Research. The definition of a peptide is a small chain of amino acids that can be classified as Bioactive compounds used for a wide variety of purposes, including Drug Discovery, Personalized Medicines, and Disease Prevention. Peptides are now recognized by researchers as having the capability to Target Specific Molecular Pathways and Increase Efficacy of Drugs, Modify Immune Response, and Improve Health Outcomes from the use of synthetic peptide-based vaccines to peptide-based new therapies and cutting-edge science driving new discoveries in the field of Peptide Science and Modern Health Care.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive Scientific Communication and Publishing Assistance to Researchers, Clinicians, Product Developers, and Regulatory Specialists in the Peptide Industry. At Pubrica, we have complete knowledge of the Full Lifecycle of Peptide Research; Peptide Synthesis, Structural Characterization, Bioactivity Testing, Preclinical and Clinical Trials, Immunogenicity Testing, and Regulatory Documentation using the expertise of Our Medical Writers, Analysts and Domain Experts to enable You to Produce Accurate, Effective, and Consistent Research that meets Global Publishing Standards.
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
                                src="/images/subject-matter-experts/peptides/Peptides.webp"
                                alt="Peptide research and scientific support"
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
                            Our Core Disciplines In Peptides
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica is involved in both Research and Development of peptide systems, and we perform R&D in many of the key areas of peptide science so that we can help others develop peptide-based therapeutics and innovative peptide products. We have the knowledge and experience to help you with every aspect of peptide technology including:
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
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
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
                            Our Expertise in Peptides Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we have extensive experience in core peptide research and publishing throughout the entire development process (synthesis to clinical use). Our personalized support for researchers enables them to communicate their findings effectively while maintaining strict scientific standards and global compliance for publishing:
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
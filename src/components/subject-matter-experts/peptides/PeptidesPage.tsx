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
    CheckCircle
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl:
                "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl:
                "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Transforming peptide research into high-impact scientific publications to drive innovation in molecular science"
                description="Peptide research holds immense potential for advancing molecular science, and transforming these findings into high-impact publications is crucial for driving innovation and fostering groundbreaking discoveries."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing health through evidence-based peptide research and scientific communication.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Peptides are becoming increasingly important in the Therapeutic Innovation and Treatment of Disease as a rapidly growing area in{" "}
                                        <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline">
                                            Biomedical Research
                                        </Link>
                                        . The definition of a peptide is a small chain of amino acids that can be classified as Bioactive compounds used for a wide variety of purposes, including Drug Discovery, Personalized Medicines, and Disease Prevention. Peptides are now recognized by researchers as having the capability to Target Specific Molecular Pathways and Increase Efficacy of Drugs, Modify Immune Response, and Improve Health Outcomes from the use of synthetic peptide-based vaccines to peptide-based new therapies and cutting-edge science driving new discoveries in the field of{" "}
                                        <Link href="/subject-matter-experts/peptides/" className="text-blue-600 no-underline">
                                            Peptide Science
                                        </Link>{" "}
                                        and Modern Health Care.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide comprehensive{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            Scientific Communication
                                        </Link>{" "}
                                        and Publishing Assistance to Researchers, Clinicians, Product Developers, and Regulatory Specialists in the Peptide Industry. At Pubrica, we have complete knowledge of the Full Lifecycle of Peptide Research; Peptide Synthesis, Structural Characterization, Bioactivity Testing, Preclinical and Clinical Trials, Immunogenicity Testing, and Regulatory Documentation using the expertise of Our{" "}
                                        <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline">
                                            Medical Writers
                                        </Link>
                                        , Analysts and Domain Experts to enable You to Produce Accurate, Effective, and Consistent Research that meets Global Publishing Standards.
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
                            Our Core Disciplines In Peptides
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Pubrica is involved in both Research and Development of peptide systems, and we perform R&D in many of the key areas of peptide science so that we can help others develop peptide-based therapeutics and innovative peptide products. We have the knowledge and experience to help you with every aspect of peptide technology including:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Peptides Research and Publication"
                    description="At Pubrica, we have extensive experience in core peptide research and publishing throughout the entire development process (synthesis to clinical use). Our personalized support for researchers enables them to communicate their findings effectively while maintaining strict scientific standards and global compliance for publishing:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
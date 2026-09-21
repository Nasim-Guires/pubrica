"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Heart,
    Shield,
    Dna,
    Zap,
    Scale,
    GitBranch,
    Droplets,
    Radio,
    Disc,
    Cpu,
    Flame,
    Search,
    PenTool,
    Languages,
    FileText,
    Send,
    FileSearch,
    CheckCircle2,
    ChevronDown,
    Database
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CardiovascularBiologyPage() {
    const disciplines = [
        {
            title: "Angiogenesis",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Angiogenesis.png",
            description: "Study of new blood vessel formation.",
            icon: GitBranch
        },
        {
            title: "Atherosclerosis",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Atherosclerosis.png",
            description: "Research on buildup of fats and cholesterol in artery walls.",
            icon: Shield
        },
        {
            title: "Calcification",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Calcification.png",
            description: "Study of calcium deposits in the cardiovascular system.",
            icon: Heart
        },
        {
            title: "Bioactive Lipids and Receptors",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Bioactive-Lipids-and-Receptors.png",
            description: "Investigation of lipids and their receptors in cardiovascular function.",
            icon: Radio
        },
        {
            title: "Cardiac Hypertrophy",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Cardiac-Hypertrophy.png",
            description: "Research on the thickening of the heart muscle.",
            icon: Activity
        },
        {
            title: "Cardiac Regeneration",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Cardiac-Regeneration.png",
            description: "Investigating methods to regenerate damaged heart tissues.",
            icon: Flame
        },
        {
            title: "Cardiovascular Genetics",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Cardiovascular-Genetics.png",
            description: "Research on genetic factors influencing cardiovascular health.",
            icon: Dna
        },
        {
            title: "Coagulation",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Coagulation.png",
            description: "Study of blood clotting mechanisms and related disorders.",
            icon: Droplets
        },
        {
            title: "Hormones and Receptors",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Hormones-and-Receptors.png",
            description: "Research on hormonal regulation and receptor activity in the heart.",
            icon: Zap
        },
        {
            title: "Platelets",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Platelets.png",
            description: "Study of platelet function in cardiovascular diseases.",
            icon: Disc
        },
        {
            title: "Signal Transduction",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Signal-Transduction.png",
            description: "Investigation of cellular signalling pathways in cardiovascular systems.",
            icon: Cpu
        },
        {
            title: "Lipid/Cholesterol Metabolism",
            iconSrc: "/images/subject-matter-experts/cardiovascular-biology/Lipid_Cholesterol-Metabolism.png",
            description: "Study of lipid and cholesterol metabolism in cardiovascular health.",
            icon: Scale
        }
    ];

    const expertiseCards = [
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: CheckCircle2,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Languages,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Search,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
        },
        {
            title: "Manuscript Editing",
            desc: "Expert editing to ensure technical accuracy, scientific integrity, and compliance with target journal standards.",
            href: "/services/editing-and-translation/manuscript-editing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Database,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cardiovascular Biology"
                description="Advancing global cardiovascular research through expert scientific insights, data interpretation, and publication excellence."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Cardiovascular Biology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cardiovascular-biology/Comprehensive-Research-Writing-and-Publication-Support-in-Cardiovascular-Biology.webp"
                                        alt="Cardiovascular biology research model visual"
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
                                        Cardiovascular Biology is a dynamic interdisciplinary field dedicated to understanding the structure, function, and regulation of the heart, blood vessels, and circulatory system. It integrates molecular biology, physiology, genetics, and pathology to elucidate mechanisms that control cardiovascular function in health and disease. This discipline underpins advances in cardiovascular medicine, including diagnostics, therapeutics, regenerative medicine, and translational cardiovascular research.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        The human cardiovascular system is central to life, transporting oxygen, nutrients, hormones, and immune cells throughout the body. Its dysfunction is associated with a wide range of diseases, such as atherosclerosis, hypertension, coronary artery disease, heart failure, and stroke. An estimated 19.8 million people died from cardiovascular diseases (CVDs) in 2022, representing approximately 32% of all global deaths. Of these deaths, 85% were due to heart attack and stroke.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides comprehensive biomedical research and{" "}
                                        <Link
                                            href="/services/publication-support/"
                                            className="text-blue-600 no-underline"
                                        >
                                            publication support
                                        </Link>{" "}
                                        in cardiovascular biology, empowering scientists, clinicians, and academicians to produce impactful research. Our team of vascular biology and cardiac regeneration experts offers end-to-end guidance from conceptualization to journal publication.
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
                            Our Core Areas Of Study
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Pubrica supports a broad spectrum of cardiovascular biology research. Whether it&apos;s angiogenesis, atherosclerosis, or cardiac regeneration, our expertise ensures that your heart disease research is robust, well-documented, and publication-ready.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Cards Grid with title & description passed directly */}
                    <CommonExpertiseCards
                        title="Our Expertise in Cardiovascular Biology Research and Publication"
                        description={
                            <>
                                At Pubrica, our cardiovascular biology specialists hold advanced degrees (PhD, MD, or MSc) with expertise in cardiovascular physiology, pathology, and molecular medicine. They possess extensive publication experience in reputed journals like{" "}
                                <a
                                    href="https://www.ahajournals.org/journal/res"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Circulation Research
                                </a>,{" "}
                                <a
                                    href="https://www.jacc.org/journal/jacc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Journal of the American College of Cardiology
                                </a>, and{" "}
                                <a
                                    href="https://academic.oup.com/cardiovascres"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Cardiovascular Research
                                </a>. Our Core research and publication services include:
                            </>
                        }
                        cards={expertiseCards}
                    />

                </div>
            </section>
        </main>
    );
}
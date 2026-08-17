"use client";
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

    const services = [
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: CheckCircle2,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Languages,
            href: "/services/editing-and-translation/"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Manuscript Editing",
            description: "Expert editing to ensure technical accuracy, scientific integrity, and compliance with target journal standards.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileText,
            href: "/services/editing-and-translation/manuscript-editing"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Database,
            href: "/services/medical-data-collection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cardiovascular Biology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Advancing global cardiovascular research through expert scientific insights, data interpretation, and publication excellence.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Research, Writing, and Publication Support in Cardiovascular Biology
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cardiovascular Biology is a dynamic interdisciplinary field dedicated to understanding the structure, function, and regulation of the heart, blood vessels, and circulatory system. It integrates molecular biology, physiology, genetics, and pathology to elucidate mechanisms that control cardiovascular function in health and disease. This discipline underpins advances in cardiovascular medicine, including diagnostics, therapeutics, regenerative medicine, and translational cardiovascular research.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The human cardiovascular system is central to life, transporting oxygen, nutrients, hormones, and immune cells throughout the body. Its dysfunction is associated with a wide range of diseases, such as atherosclerosis, hypertension, coronary artery disease, heart failure, and stroke. An estimated 19.8 million people died from cardiovascular diseases (CVDs) in 2022, representing approximately 32% of all global deaths. Of these deaths, 85% were due to heart attack and stroke.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides comprehensive biomedical research and{" "}
                            <Link
                                href="/services/publication-support/"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                publication support
                            </Link>{" "}
                            in cardiovascular biology, empowering scientists, clinicians, and academicians to produce impactful research. Our team of vascular biology and cardiac regeneration experts offers end-to-end guidance from conceptualization to journal publication.
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
                                src="/images/subject-matter-experts/cardiovascular-biology/Comprehensive-Research-Writing-and-Publication-Support-in-Cardiovascular-Biology.webp"
                                alt="Cardiovascular biology research model visual"
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
                            Our Core Areas Of Study
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Pubrica supports a broad spectrum of cardiovascular biology research. Whether it&apos;s angiogenesis, atherosclerosis, or cardiac regeneration, our expertise ensures that your heart disease research is robust, well-documented, and publication-ready.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            Our Expertise in Cardiovascular Biology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, our cardiovascular biology specialists hold advanced degrees (PhD, MD, or MSc) with expertise in cardiovascular physiology, pathology, and molecular medicine. They possess extensive publication experience in reputed journals like{" "}
                        <a
                            href="https://www.ahajournals.org/journal/res"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium italic"
                        >
                            Circulation Research
                        </a>,{" "}
                        <a
                            href="https://www.jacc.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium italic"
                        >
                            Journal of the American College of Cardiology
                        </a>, and{" "}
                        <a
                            href="https://academic.oup.com/cardiovascres"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium italic"
                        >
                            Cardiovascular Research
                        </a>. Our Core research and publication services include:
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
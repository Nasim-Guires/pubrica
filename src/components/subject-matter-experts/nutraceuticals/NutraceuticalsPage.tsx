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
    ShieldAlert,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    BookOpen,
    UserCheck,
    Wrench
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function NutraceuticalsPage() {
    const disciplines = [
        {
            title: "Functional Foods & Beverages",
            iconSrc: "https://pubrica.com/wp-content/uploads/2026/04/Functional-Foods-Beverages.webp",
            description: "We specialize in scientific writing and review services for functional foods fortified with vitamins, minerals, probiotics, antioxidants, and herbal extracts. Our team understands formulation science, ingredient stability, sensory characteristics, and the health claim substantiation required for global markets. Whether you're publishing clinical findings or preparing a product monograph, our experts ensure clarity, accuracy, and compliance.",
            icon: Search,
        },
        {
            title: "Dietary Supplements & Herbal Products",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Dietary-Supplements-Herbal-Products.webp",
            description: "Pubrica provides comprehensive support in dietary supplement research, covering botanicals, phytochemicals, amino acids, proteins, enzymes, and micronutrient formulations. We assist in literature reviews, regulatory documentation, safety assessments, and clinical manuscript development.",
            icon: TrendingUp
        },
        {
            title: "Regulatory Science for Nutraceuticals",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Regulatory-Science-for-Nutraceuticals.webp",
            description: "We provide guidance on scientific writing aligned with international regulatory frameworks, including FSSAI (India), EFSA (Europe), FDA-DSHEA (US), TGA (Australia), and ASEAN guidelines. From claims substantiation to safety documentation, we help authors prepare regulatory-ready dossiers, compliance-focused manuscripts, risk assessments, and scientific justifications for product approvals.",
            icon: FileText
        },
        {
            title: "Bioactive Compounds & Phytochemistry",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Bioactive-Compounds-Phytochemistry.webp",
            description: "Pubrica's specialists cover a wide range of bioactive, including polyphenols, flavonoids, carotenoids, alkaloids, peptides, and plant-derived molecules. We support research interpretation, mechanistic explanation, and data-driven publication support for these compounds.",
            icon: Database
        },
        {
            title: "Nutrigenomics & Personalized Nutrition",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Nutrigenomics-Personalized-Nutrition.webp",
            description: "As personalized health becomes a global trend, our team supports genomic-driven nutraceutical research, including gene–nutrient interactions, microbiome studies, personalized diet strategies, and precision supplement formulations. We help researchers translate advanced omics-based insights into impactful",
            icon: ShieldAlert
        }
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: UserCheck,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Transforming Nutraceutical Research Into High-Impact Scientific Publications"
                description="From functional foods to bioactive supplements, we support researchers, manufacturers, and healthcare innovators in presenting reliable, regulatory-compliant, and publication-ready nutraceutical research."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Nutraceuticals: Advancing Health Through Evidence-Based Research and Scientific Communication
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/nutraceuticals/Nutraceutical-480x480.webp"
                                        alt="Nutraceutical capsules spilled from a bottle"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 300px, 360px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        In today&apos;s rapidly evolving healthcare landscape, nutraceuticals are emerging as pivotal contributors to preventive medicine and wellness optimization. The term &quot;nutraceutical&quot; blends nutrition and pharmaceutical, describing products derived from food sources that provide additional health benefits beyond basic nutrition. These bioactive compounds, including vitamins, minerals, herbal extracts, functional foods, and probiotics, are increasingly recognized for their potential to prevent and manage chronic diseases, enhance immunity, and improve overall quality of life. From plant-derived phytochemicals to cutting-edge probiotic formulations, nutraceutical innovations are driving new scientific discoveries and reshaping preventive healthcare.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we empower researchers, clinicians, product developers, and regulatory specialists in the nutraceutical industry by offering comprehensive{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            scientific communication
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/services/publication-support" className="text-blue-600 no-underline">
                                            publication support
                                        </Link>
                                        . Our expertise covers the full spectrum of nutraceutical research, formulation development, bioavailability studies, preclinical and clinical evaluations, toxicology assessments, and regulatory documentation. With an expert team of medical writers, research analysts, and domain specialists, Pubrica ensures that your scientific work is accurate, impactful, and aligned with global publishing standards.
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
                            Our Core Disciplines In Nutraceuticals
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-full">
                            At Pubrica, we deliver end-to-end <Link href="/services/research-services/scientific-writing" className="text-blue-600 no-underline hover:no-underline">scientific writing</Link>, <Link href="/services/research-services" className="text-blue-600 no-underline hover:no-underline">research support</Link>, and publication services across the full spectrum of nutraceutical sciences. Our expertise blends clinical evidence, regulatory competence, and advanced scientific communication to help researchers, manufacturers, and healthcare professionals bring high-quality nutraceutical innovations to global markets.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Nutraceutical Research and Publication"
                    description="Pubrica is dedicated to empowering nutraceutical researchers and companies to share their innovations with the global scientific community. Our team of experienced editors, researchers, and publication specialists offers comprehensive support across the entire research lifecycle:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
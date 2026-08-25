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

export default function NutraceuticalsPage() {
    const disciplines = [
        {
            title: "Functional Foods & Bioactive Compounds",
            iconSrc: "https://pubrica.com/wp-content/uploads/2026/04/Functional-Foods-Beverages.webp",
            description: "Understanding functional characteristics and the health claim substantiation required for global markets. Whether you are publishing clinical findings or preparing a product monograph, our experts ensure clarity, accuracy, and compliance.",
            icon: Search,
        },
        {
            title: "Dietary Supplements & Herbal Products",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Dietary-Supplements-Herbal-Products.webp",
            description: "Pubrica provides comprehensive support in dietary supplement research, covering botanicals, vitamins, and bioactive formulations.",
            icon: TrendingUp
        },
        {
            title: "Regulatory Science for Nutraceuticals",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Regulatory-Science-for-Nutraceuticals.webp",
            description: "We provide guidance on scientific writing aligned with international regulatory frameworks, including novel food submissions and safety dossiers.",
            icon: FileText
        },
        {
            title: "Bioactive Compounds & Phytochemistry",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Bioactive-Compounds-Phytochemistry.webp",
            description: "Pubrica's specialists cover a wide range of bioactive research, including polyphenols, flavonoids, plant extracts, and natural active ingredients.",
            icon: Database
        },
        {
            title: "Nutrigenomics & Personalized Nutrition",
            iconSrc:
                "https://pubrica.com/wp-content/uploads/2026/04/Nutrigenomics-Personalized-Nutrition.webp",
            description: "As personalized health becomes a global trend, our team supports genomic-driven nutraceutical research and clinical publications.",
            icon: ShieldAlert
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: UserCheck,
            href: "/services/editing-and-translation"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/publication-support"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-snug">
                        Transforming Nutraceutical Research Into High-Impact Scientific Publications
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From functional foods to bioactive supplements, we support researchers, manufacturers, and healthcare innovators in presenting reliable, regulatory-compliant, and publication-ready nutraceutical research.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Nutraceuticals: Advancing Health Through Evidence-Based Research and Scientific Communication
                        </h2>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            In today&apos;s rapidly evolving healthcare landscape, nutraceuticals are emerging as pivotal contributors to preventive medicine and wellness optimization. The term &quot;nutraceutical&quot; blends nutrition and pharmaceutical, describing products derived from food sources that provide additional health benefits beyond basic nutrition. These bioactive compounds, including vitamins, minerals, herbal extracts, functional foods, and probiotics, are increasingly recognized for their potential to prevent and manage chronic diseases, enhance immunity, and improve overall quality of life. From plant-derived phytochemicals to cutting-edge probiotic formulations, nutraceutical innovations are driving new scientific discoveries and reshaping preventive healthcare.
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we empower researchers, clinicians, product developers, and regulatory specialists in the nutraceutical industry by offering comprehensive <Link href="/services/research-services/scientific-writing" className="text-blue-600 underline">scientific communication</Link> and <Link href="/services/publication-support" className="text-blue-600 underline">publication support</Link>. Our expertise covers the full spectrum of nutraceutical research, formulation development, bioavailability studies, preclinical and clinical evaluations, toxicology assessments, and regulatory documentation. With an expert team of medical writers, research analysts, and domain specialists, Pubrica ensures that your scientific work is accurate, impactful, and aligned with global publishing standards.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/order-now"
                                className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Display */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full overflow-hidden shadow-lg border-4 border-white">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Nutraceuticals
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we deliver end-to-end <Link href="/services/research-services/scientific-writing" className="text-blue-600 underline">scientific writing</Link>, <Link href="/services/research-services" className="text-blue-600 underline">research support</Link>, and publication services across the full spectrum of nutraceutical sciences. Our expertise blends clinical evidence, regulatory competence, and advanced scientific communication to help researchers, manufacturers, and healthcare professionals bring high-quality nutraceutical innovations to global markets.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Nutraceutical Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We specialize in Nutraceutical research and publishing, and provide specialized skills to assist scientists, researchers and people in industry to further their work on an individual basis. Services provided are:
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
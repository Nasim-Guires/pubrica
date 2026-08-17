"use client";
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

export default function NeurologyPage() {
    const disciplines = [
        {
            title: "Functional Foods & Beverages",
            iconSrc: "/images/subject-matter-experts/neurology/Clinical-Neurology.webp",
            description: "We specialize in scientific writing and review services for functional foods fortified with vitamins, minerals, probiotics, antioxidants, and herbal extracts. Our team understands formulation science, ingredient stability, sensory characteristics, and the health claim substantiation required for global markets. Whether you're publishing clinical findings or preparing a product monograph, our experts ensure clarity, accuracy, and compliance.",
            icon: Search,
        },
        {
            title: "Dietary Supplements & Herbal Products",
            iconSrc: "/images/subject-matter-experts/neurology/Cognitive-and-Behavioural-Neurology.webp",
            description: "Pubrica provides comprehensive support in dietary supplement research, covering botanicals, phytochemicals, amino acids, proteins, enzymes, and micronutrient formulations. We assist in literature reviews, regulatory documentation, safety assessments, and clinical manuscript development.",
            icon: TrendingUp
        },
        {
            title: "Regulatory Science for Nutraceuticals",
            iconSrc: "/images/subject-matter-experts/neurology/Neurophysiology.webp",
            description: "We provide guidance on scientific writing aligned with international regulatory frameworks, including FSSAI (India), EFSA (Europe), FDA-DSHEA (US), TGA (Australia), and ASEAN guidelines. From claims substantiation to safety documentation, we help authors prepare regulatory-ready dossiers, compliance-focused manuscripts, risk assessments, and scientific justifications for product approvals.",
            icon: FileText
        },
        {
            title: "Bioactive Compounds & Phytochemistry",
            iconSrc: "/images/subject-matter-experts/neurology/Neuroimaging-and-Neurodiagnostic.webp",
            description: "Pubrica's specialists cover a wide range of bioactive, including polyphenols, flavonoids, carotenoids, alkaloids, peptides, and plant-derived molecules. We support research interpretation, mechanistic explanation, and data-driven publication support for these compounds.",
            icon: Database
        },
        {
            title: "Nutrigenomics & Personalized Nutrition",
            iconSrc: "/images/subject-matter-experts/animal-science/Animal-Behavior-and-Welfare.png",
            description: "As personalized health becomes a global trend, our team supports genomic-driven nutraceutical research, including gene–nutrient interactions, microbiome studies, personalized diet strategies, and precision supplement formulations. We help researchers translate advanced omics-based insights into impactful",
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
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/medical-data-collection"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
            href: "/services/research-impact/graphical-abstractt"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: BookOpen,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Transforming Nutraceutical Research Into High-Impact Scientific Publications
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
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

                        <p className="text-gray-600 text-sm leading-relaxed">
                            In today's rapidly evolving healthcare landscape, nutraceuticals are emerging as pivotal contributors to preventive medicine and wellness optimization. The term "nutraceutical" blends nutrition and pharmaceutical, describing products derived from food sources that provide additional health benefits beyond basic nutrition. These bioactive compounds, including vitamins, minerals, herbal extracts, functional foods, and probiotics, are increasingly recognized for their potential to prevent and manage chronic diseases, enhance immunity, and improve overall quality of life. From plant-derived phytochemicals to cutting-edge probiotic formulations, nutraceutical innovations are driving new scientific discoveries and reshaping preventive healthcare.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we empower researchers, clinicians, product developers, and regulatory specialists in the nutraceutical industry by offering comprehensive scientific communication and publication support. Our expertise covers the full spectrum of nutraceutical research, formulation development, bioavailability studies, preclinical and clinical evaluations, toxicology assessments, and regulatory documentation. With an expert team of medical writers, research analysts, and domain specialists, Pubrica ensures that your scientific work is accurate, impactful, and aligned with global publishing standards.
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
                                src="/images/subject-matter-experts/neurology/Neurology.webp"
                                alt="Nutraceutical research visualization"
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
                            Our Core Disciplines In Nutraceuticals
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we deliver end-to-end scientific writing, research support, and publication services across the full spectrum of nutraceutical sciences. Our expertise blends clinical evidence, regulatory competence, and advanced scientific communication to help researchers, manufacturers, and healthcare professionals bring high-quality nutraceutical innovations to global markets.
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
                            Our Expertise in Nutraceutical Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica is dedicated to empowering nutraceutical researchers and companies to share their innovations with the global scientific community. Our team of experienced editors, researchers, and publication specialists offers comprehensive support across the entire research lifecycle:
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
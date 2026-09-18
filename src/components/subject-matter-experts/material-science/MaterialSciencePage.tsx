import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from "@/components/common/HeroBanner";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import {
    Activity,
    BookOpen,
    CheckCircle2,
    Edit3,
    FileText,
    Languages,
    Search,
    Send,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";


export default function MaterialSciencePage() {
    const disciplines = [
        {
            title: "Metals and Alloys",
            iconSrc: "/images/subject-matter-experts/material-science/Metals-and-Alloys.webp",
            description: (
                <>
                    Research in metallurgy focuses on corrosion resistance, fatigue strength, heat treatment, mechanical characterization, alloy development, and industrial performance optimization. We provide{" "}
                    <Link href="/academy/research-services/ethical-considerations-research-design/" className="text-blue-600 no-underline hover:no-underline">
                        metallurgical research assistance
                    </Link>{" "}
                    for studies involving phase analysis, mechanical modelling, and microstructural evaluation.
                </>
            ),
        },
        {
            title: "Polymers and Plastics",
            iconSrc: "/images/subject-matter-experts/material-science/Polymers-and-Plastics.webp",
            description:
                "From polymer synthesis and rheology to biodegradable materials and industrial polymer applications, we support research involving theoretical modelling, experimental design, and data interpretation for both synthetic and bio-based polymers.",
        },
        {
            title: "Ceramics and Glass Materials",
            iconSrc: "/images/subject-matter-experts/material-science/Ceramics-and-Glass-Materials.webp",
            description: (
                <>
                    Pubrica guides ceramic engineering studies, including thermal barrier coatings, oxide and non-oxide ceramics, structural ceramics, sintering mechanisms, glass science, and advanced ceramic composites. We assist researchers with precise{" "}
                    <Link href="/services/research-services/" className="text-blue-600 no-underline hover:no-underline">
                        ceramics research services
                    </Link>{" "}
                    for academic, industrial, and applied investigations.
                </>
            ),
        },
        {
            title: "Nanomaterials and Nanotechnology",
            iconSrc: "/images/subject-matter-experts/material-science/Nanomaterials-and-Nanotechnology.webp",
            description:
                "Whether exploring graphene, carbon nanotubes, nanocomposites, or nano-coatings, our team supports nano-focused materials research, including surface characterization, electronic behaviour analysis, and computational modelling.",
        },
        {
            title: "Composite Materials",
            iconSrc: "/images/subject-matter-experts/material-science/Composite-Materials.webp",
            description: (
                <>
                    We assist with research on hybrid and fiber-reinforced composites across aerospace, civil engineering, biomedical, and defence applications. Our{" "}
                    <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline hover:no-underline">
                        composite materials manuscript editing
                    </Link>{" "}
                    service supports studies involving performance evaluation, durability testing, and microstructure analysis.
                </>
            ),
        },
        {
            title: "Biomaterials and Biomedical Engineering",
            iconSrc: "/images/subject-matter-experts/material-science/Biomaterials-and-Biomedical-Engineering.webp",
            description:
                "Pubrica assists with research into biocompatibility, bio-polymers, bio-ceramics, implant materials, drug delivery systems, and tissue engineering scaffolds.",
        },
    ];
    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            iconSrc: "",
            icon: CheckCircle2,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            iconSrc: "",
            icon: Edit3,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            iconSrc: "",
            icon: FileText,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            iconSrc: "",
            icon: Languages,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            iconSrc: "",
            icon: BookOpen,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            iconSrc: "",
            icon: Send,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            iconSrc: "",
            icon: Activity,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            iconSrc: "",
            icon: Search,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Material Science"
                description="Expert guidance in materials characterization, nanomaterials, metallurgy, polymers, composites, and advanced materials research, supporting scholars from concept to publication success."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Scientific Ideas Into Breakthrough Material Research
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/material-science/Material-Science-1.webp"
                                        alt="Material Science Research Laboratory"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 350px, 380px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Material Science is a multidisciplinary scientific field focused on understanding, designing, and engineering the properties and performance of materials that drive technological progress. Positioned at the intersection of physics, chemistry, mathematics, engineering, and nanoscience, Material Science investigates the structure, synthesis, composition, characterization, and applications of materials, ranging from metals, alloys, polymers, ceramics, composites, and bio-materials to cutting-edge smart and nanostructured systems.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        From aerospace and automotive manufacturing to energy storage, electronics, medical devices, construction, and sustainable engineering, Material Science forms the foundation of modern industrial and research advancements. With the continuous demand for cleaner energy, stronger and lighter materials, improved electronic performance, and intelligent systems, Material Science is essential for solving real-world challenges and propelling scientific progress.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide specialised{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline hover:no-underline">
                                            material science research services
                                        </Link>
                                        ,{" "}
                                        <Link href="/services/editing-and-translation/" className="text-blue-600 no-underline hover:no-underline">
                                            material science editing support
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline hover:no-underline">
                                            publication support for material science
                                        </Link>{" "}
                                        tailored for scientists, scholars, academicians, and industry professionals working in diverse branches of Material Science. With a team of subject-matter experts, experienced PhD editors, and scientific consultants, we empower researchers to publish high-quality manuscripts in top-tier journals with confidence.
                                    </p>
                                </div>

                                <div className="pt-2">
                                       <GetFreeQuoteButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <CoreAreasSection
                    title="Our Core Disciplines In Biomonitoring"
                    description="At Pubrica, we cover a comprehensive range of material science sub-disciplines, offering specialized manuscript development, study design support, technical editing, and publication services across the following domains:"
                    items={disciplines}
                />
            </div>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <CommonExpertiseCards
                    title="Our Expertise in Material Science Research and Publication"
                    description={
                        <>
                            As a trusted global research partner, Pubrica delivers structured scientific support tailored to researchers at all stages, from concept development to final publication. Our team includes experienced scientists, PhDs,{" "}
                            <Link
                                href="/subject-matter-experts"
                                className="text-blue-600 no-underline hover:no-underline"
                            >
                                subject matter experts
                            </Link>
                            , and publication strategists with deep domain expertise in material science, nanotechnology, chemical engineering, and applied physics. Our services include:
                        </>
                    }
                    cards={expertiseCards}
                />
            </div>

        </main>
    );
}
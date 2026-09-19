import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from "@/components/common/HeroBanner";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import {
    FileText,
    Edit3,
    Send,
    Search,
    PenTool,
    BookOpen,
} from "lucide-react";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
export default function BiophysicsSciencePage() {
    const disciplines = [
        {
            title: "Molecular Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Molecular-Biophysics.webp",
            description:
                "Focuses on the physical principles underlying biomolecular structures and interactions. Techniques such as X-ray crystallography, nuclear magnetic resonance (NMR) spectroscopy, and cryo-electron microscopy allow researchers to explore protein folding, ligand binding, and molecular dynamics in unprecedented detail.",
        },
        {
            title: "Cellular Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Cellular-Biophysics.webp",
            description:
                "Investigates the mechanical, electrical, and biochemical properties of cells. This discipline helps elucidate cellular processes such as signalling pathways, membrane transport, and cytoskeletal dynamics, providing critical insights for understanding diseases like cancer and neurodegeneration.",
        },
        {
            title: "Structural Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Structural-Biophysics.webp",
            description:
                "Examines the three-dimensional architecture of biomolecules. Understanding molecular structures at atomic resolution enables rational drug design, enzyme engineering, and the development of targeted therapies.",
        },
        {
            title: "Computational Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Computational-Biophysics.webp",
            description:
                "Utilizes computational models and simulations to predict biomolecular behaviour, study complex biological networks, and analyze large datasets from experiments. Molecular dynamics simulations, Monte Carlo methods, and bioinformatics tools are central to this domain.",
        },
        {
            title: "Medical Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Medical-Biophysics.webp",
            description:
                "Applies biophysical principles to medical diagnostics and therapeutics. Techniques such as medical imaging (MRI, CT, PET) and radiation therapy benefit from biophysical analyses to improve disease detection and patient care.",
        },
    ];

    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: Edit3,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            icon: Search,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/medical-writing-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/medical-writing-services/original-research-article/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Edit3,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review/",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookOpen,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Biophysics"
                description="Pubrica provides expert support for biophysics research and publication, helping scientists transform complex discoveries into high-impact publications."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] leading-snug">
                            Biophysics – Bridging Biology and Physics for Breakthrough Scientific Innovation
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biophysics is a rapidly growing interdisciplinary field that bridges the gap between biology, physics, chemistry, engineering, mathematics, and computational sciences. By analysing biological systems through the lens of physical principles, biophysics helps researchers understand the structure, dynamics, and mechanisms of living organisms at molecular, cellular, and systemic levels. From protein folding and DNA mechanics to neural signalling and biomedical instrumentation, biophysics drives modern scientific discovery and medical innovation.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we understand that the complexities of biophysical research demand clarity, precision, and scientifically rigorous presentation. Our services are designed to support students, researchers, healthcare practitioners, and{" "}

                            academic institutions

                            in producing impactful publications and research outputs that meet the highest global editorial standards. With a team of{" "}
                            <Link href="/subject-matter-experts" className="text-blue-600 no-underline hover:no-underline">
                                subject-matter experts
                            </Link>
                            , professional editors, and research specialists, Pubrica delivers end-to-end support throughout the research cycle, from proposal development to{" "}
                            <Link href="/services/publication-support/journal-submission" className="text-blue-600 no-underline hover:no-underline">
                                journal submission
                            </Link>
                            .
                        </p>
                        <div className="pt-2">
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/biophysics/Biophysics.webp"
                                alt="Material Science Research Laboratory"
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
                    <CoreAreasSection
                        title="Our Core Disciplines In Biomonitoring"
                        description="Biophysics encompasses a wide range of subfields that explore biological questions through the lens of physics:"
                        items={disciplines}
                    />
                </div>
            </section>
            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

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
            </section>

        </main>
    );
}
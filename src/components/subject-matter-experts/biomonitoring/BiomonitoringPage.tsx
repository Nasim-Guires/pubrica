"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Leaf,
    Users,
    Shield,
    Activity,
    Cpu,
    FileText,
    PenTool,
    Languages,
    BookOpen,
    CheckCircle,
    Compass,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection, { SmeCoreAreaItem } from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function BiomonitoringPage() {
    const coreDisciplines: SmeCoreAreaItem[] = [
        {
            title: "Environmental Biomonitoring",
            highlight: "Environmental",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Environmental-Biomonitoring.webp",
            desc: "Focused on tracking environmental pollutants such as heavy metals, pesticides, and persistent organic pollutants (POPs), environmental biomonitoring uses living organisms (e.g., fish, mosses, lichens, or invertebrates) as bioindicators of ecosystem health. This approach helps identify contamination patterns, bioaccumulation, and potential ecological risks.",
            icon: Leaf,
        },
        {
            title: "Human Feed Biomonitoring",
            highlight: "Human",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Human-Feed-Biomonitoring.webp",
            desc: "Human biomonitoring assesses chemical exposure in individuals or populations through analysis of biological matrices like blood, urine, or breast milk. It is widely used in epidemiological research, occupational safety studies, and public health surveillance to evaluate exposure to chemicals such as lead, mercury, phthalates, or bisphenol A (BPA).",
            icon: Users,
        },
        {
            title: "Occupational Biomonitoring",
            highlight: "Occupational",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Occupational-Health-Management.webp",
            desc: "In industrial and workplace settings, biomonitoring evaluates exposure to hazardous substances, including solvents, metals, or industrial chemicals. This information supports risk management, exposure control, and compliance with occupational safety standards.",
            icon: Shield,
        },
        {
            title: "Ecological Biomonitoring",
            highlight: "Ecological",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Ecological-Biomonitoring.webp",
            desc: "It uses bioindicator species to assess environmental quality and ecosystem responses to pollutants. Aquatic organisms like mussels, algae, or macroinvertebrates serve as effective indicators for monitoring the health of rivers, lakes, and coastal systems.",
            icon: Activity,
        },
        {
            title: "Pharmacokinetic and Toxicological Research",
            highlight: "Pharmacokinetic",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Pharmacokinetic-and-Toxicological-Research.webp",
            desc: "Biomonitoring data enhance understanding of how chemicals are absorbed, distributed, metabolized, and excreted in the body, contributing to toxicokinetic modeling and safety evaluations.",
            icon: Cpu,
        },
    ];

    const biomonitoringCards: ExpertiseCardItem[] = [
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
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
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: CheckCircle,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Compass,
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
            <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #0d3630;
          border-radius: 4px;
        }
      `}</style>

            {/* HEADER HERO BANNER */}
            <HeroBanner
                title="Biomonitoring"
                description="Comprehensive research, publication, and editing support for biomonitoring professionals, researchers, and environmental scientists, advancing the assessment of human and ecological exposure for a healthier and sustainable future."
                headingAs="h1"
            />

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">

                {/* INTRO SECTION */}
                <section className="pt-6 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section heading placed above everything like the reference image */}
                            <div className="mb-5">
                                <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                    Empowering biomonitoring research and practice through expert analysis, data interpretation, and publication support
                                </h2>
                            </div>

                            <div className="flow-root">
                                {/* Right Circular Image */}
                                <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                    <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                        <Image
                                            src="/images/subject-matter-experts/biomonitoring/Biomonitoring-480x480.webp"
                                            alt="Biomonitoring Laboratory Microscope"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-5 text-slate-700">
                                    <div className="space-y-5 text-base leading-relaxed">
                                        <p>
                                            Biomonitoring is an advanced scientific method used to measure and evaluate the levels of chemicals, toxins, or biological agents within human tissues or biological fluids such as blood, urine, or saliva. It serves as a vital tool in understanding environmental exposure, occupational safety, and public health risks. By directly assessing the internal dose of contaminants, <Link href="/services/data-analytics-machine-learning/" className="text-blue-600">biomonitoring data analysis</Link> provides a realistic picture of how external factors affect human health over time. This technique is widely used to monitor the presence of excessive toxins and to conduct clinical trials and public health research, aiming to understand the exposure and metabolic changes of chemicals in the human body. Key applications of biomonitoring services include breath analysers, urine analysis, and lead or arsenic detection.
                                        </p>

                                        <p>
                                            At Pubrica, we offer end-to-end research and <Link href="/services/publication-support/" className="text-blue-600">publication support</Link> in the domain of biomonitoring, helping scientists, clinicians, environmental researchers, and toxicologists produce high-quality, data-driven studies. Our team combines expertise in epidemiology, toxicology studies, analytical chemistry, and public health to support your research objectives, from study design to publication in high-impact journals.
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

                {/* CORE DISCIPLINES SECTION */}
                <CoreAreasSection
                    title="Our Core Disciplines In Biomonitoring"
                    description="Biomonitoring integrates multiple scientific disciplines, drawing from biology, toxicology, environmental science, public health, and analytical chemistry. These interconnected fields ensure a comprehensive understanding of how pollutants or toxic agents influence biological systems. Our biomonitoring expertise spans the following core areas:"
                    items={coreDisciplines}
                />

                {/* EXPERTISE IN BIOMONITORING RESEARCH AND PUBLICATION */}
                <div className="container mx-auto px-4 py-12 space-y-12">
                    {/* Optional Header Section matching your snippet */}


                    {/* Common Expertise Cards Component */}
                    <CommonExpertiseCards
                        title="Our Expertise in Biomonitoring Research and Publication"
                        description="At Pubrica, we specialize in providing end-to-end support for researchers, academicians, and professionals involved in biomonitoring studies. Our subject matter experts combine scientific knowledge with extensive publication experience to ensure that every project meets the highest standards of quality, accuracy, and ethical integrity. Our key areas of expertise include:"
                        cards={biomonitoringCards}
                    />
                </div>

            </main>
        </div>
    );
}
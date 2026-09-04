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

export default function BiomonitoringPage() {
    const coreDisciplines = [
        {
            title: "Environmental Biomonitoring",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Environmental-Biomonitoring.webp",
            subtitle: "Heavy Metals & Pollutants",
            desc: "Focused on tracking environmental pollutants such as heavy metals, pesticides, and persistent organic pollutants (POPs), environmental biomonitoring uses living organisms (e.g., fish, mosses, lichens, or invertebrates) as bioindicators of ecosystem health. This approach helps identify contamination patterns, bioaccumulation, and potential ecological risks.",
            icon: Leaf,
        },
        {
            title: "Human Biomonitoring",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Human-Feed-Biomonitoring.webp",
            subtitle: "Biochemical Matrices",
            desc: "Human biomonitoring assesses chemical exposure in individuals or populations through analysis of biological matrices like blood, urine, or breast milk. It is widely used in epidemiological research, occupational safety studies, and public health surveillance to evaluate exposure to chemicals such as lead, mercury, phthalates, or bisphenol A (BPA).",
            icon: Users,
        },
        {
            title: "Occupational Biomonitoring",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Occupational-Health-Management.webp",
            subtitle: "Workplace Exposure",
            desc: "In industrial and workplace settings, biomonitoring evaluates exposure to hazardous substances, including solvents, metals, or industrial chemicals. This information supports risk management, exposure control, and compliance with occupational safety standards.",
            icon: Shield,
        },
        {
            title: "Ecological Biomonitoring",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Ecological-Biomonitoring.webp",
            subtitle: "Bioindicator Species",
            desc: "It uses bioindicator species to assess environmental quality and ecosystem responses to pollutants. Aquatic organisms like mussels, algae, or macroinvertebrates serve as effective indicators for monitoring the health of rivers, lakes, and coastal systems.",
            icon: Activity,
        },
        {
            title: "Pharmacokinetic and Toxicological Research",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Pharmacokinetic-and-Toxicological-Research.webp",
            subtitle: "Chemical Absorption",
            desc: "Biomonitoring data enhance understanding of how chemicals are absorbed, distributed, metabolized, and excreted in the body, contributing to toxicokinetic modeling and safety evaluations.",
            icon: Cpu,
        },
    ];

    const services = [
        {
            title: "Publication Support",
            subtitle: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            subtitle: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Translation Services",
            subtitle: "Accurate scientific translations to broaden the reach of your research.",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Scientific Writing",
            subtitle: "Crafting clear, precise, and publication-ready research manuscripts.",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Peer-Reviewing Services",
            subtitle: "Comprehensive review to refine and validate your research pre-submission.",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: CheckCircle,
        },
        {
            title: "Journal Selection",
            subtitle: "Strategic journal selection to maximize publication success.",
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
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
                            Empowering biomonitoring research and practice through expert analysis, data interpretation, and publication support
                        </h2>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <p>
                                Biomonitoring is an advanced scientific method used to measure and evaluate the levels of chemicals, toxins, or biological agents within human tissues or biological fluids such as blood, urine, or saliva. It serves as a vital tool in understanding environmental exposure, occupational safety, and public health risks. By directly assessing the internal dose of contaminants, biomonitoring data analysis provides a realistic picture of how external factors affect human health over time. This technique is widely used to monitor the presence of excessive toxins and to conduct clinical trials and public health research, aiming to understand the exposure and metabolic changes of chemicals in the human body. Key applications of biomonitoring services include breath analysers, urine analysis, and lead or arsenic detection.
                            </p>
                            <p>
                                At Pubrica, we offer end-to-end research and publication support in the domain of biomonitoring, helping scientists, clinicians, environmental researchers, and toxicologists produce high-quality, data-driven studies. Our team combines expertise in epidemiology, toxicology studies, analytical chemistry, and public health to support your research objectives, from study design to publication in high-impact journals.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="#quote"
                                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/biomonitoring/Biomonitoring-480x480.webp"
                                alt="Biomonitoring Laboratory Microscope"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* CORE DISCIPLINES SECTION */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Core Disciplines In Biomonitoring
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Biomonitoring integrates multiple scientific disciplines, drawing from biology, toxicology, environmental science, public health, and analytical chemistry. These interconnected fields ensure a comprehensive understanding of how pollutants or toxic agents influence biological systems. Our biomonitoring expertise spans the following core areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={coreDisciplines} />
                </section>

                {/* EXPERTISE IN BIOMONITORING RESEARCH AND PUBLICATION */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Expertise in Biomonitoring Research and Publication
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, we specialize in providing end-to-end support for researchers, academicians, and professionals involved in biomonitoring studies. Our subject matter experts combine scientific knowledge with extensive publication experience to ensure that every project meets the highest standards of quality, accuracy, and ethical integrity. Our key areas of expertise include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-72"
                                >
                                    <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-gray-100">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-72px)] group-hover:translate-y-0 flex flex-col h-44 z-10 shadow-lg">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full border border-gray-200 shadow-md group-hover:bg-[#0d3630] group-hover:text-white transition-colors duration-300">
                                            <ServiceIcon className="w-4 h-4 text-[#0d3630] group-hover:text-white" />
                                        </div>

                                        <div className="pt-3 text-center">
                                            <h3 className="text-xs font-bold text-[#0d3630] leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <div className="mt-3 text-center overflow-hidden flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                            <p className="text-[11px] text-gray-600 leading-relaxed px-1">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>
        </div>
    );
}
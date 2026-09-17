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

export default function OpticsAndElectronicsPage() {
    const disciplines = [
        {
            title: "Photonics and Optical Systems",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Photonics-and-Optical-Systems.webp",
            description: "Development and design of systems using light as their basis from which a physical imaging (photo imaging) system or electronic sensor relies on to obtain diagnostic, inspection, and research images.",
            icon: Search,
        },
        {
            title: "Optoelectronics",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Optoelectronics.webp",
            description: "Bringing together optical and electronic components, the use of light in conjunction with electrical energy can provide enablement of high functionality.",
            icon: TrendingUp
        },
        {
            title: "Imaging and Vision",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Imaging-and-Vision.webp",
            description: "Creating a multi-dimensional imaging systems from high-resolution original images for medical diagnostic purposes, manufacturing quality assurance, and academic research.",
            icon: FileText
        },
        {
            title: "Microelectronics and Semiconductor Devices",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Microelectronics-and-Semiconductor-Devices.webp",
            description: "Developing and producing electronic circuit solutions from electronic circuit models that support intermediate to large-scale electronic systems through the component definition, assembly, and subsequent integration of the components.",
            icon: Database
        },
        {
            title: "Communication and Signal Processing",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Communication-and-Signal-Processing.webp",
            description: "Building, refining, and enhancing the electronic and optical signals used in modern communication, including communications networks and related transmission systems.",
            icon: ShieldAlert
        },
        {
            title: "Nanophotonic and Advanced Materials",
            iconSrc: "/images/subject-matter-experts/optics-and-electronics/Nanophotonic-and-Advanced-Materials.webp",
            description: "Utilizing both nanotechnology and advanced materials to improve optical throughput, improve device sensitivity, and create energy-efficient devices.",
            icon: BarChart3
        }
    ];

    const expertiseCards = [
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: PenTool,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Layers,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSearch,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Optics and Electronics"
                description="Advancing technology through the power of light and electronics. Shaping smarter, faster, and more connected solutions."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-3 leading-tight">
                                Transforming Healthcare with Advanced Optoelectronics
                            </h2>
                            <p className="text-base text-slate-700 leading-relaxed">
                                From diagnosis to research, Pubrica empowers Optoelectronics professionals to publish high-impact findings with clarity and precision.
                            </p>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/optics-and-electronics/Optics-and-Electronics.webp"
                                        alt="Optics and electronics research visualization"
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
                                        Optics and electronics provide the bedrock for the most significant innovations in technology today and will continue to influence many areas such as health care, communication, manufacturing, and the sciences. Optical imaging and photonic systems are utilized to carry out accurate processing of signals, transmission of data, and integration of systems that are critical for the development of future technologies. The continual development and growth of optical systems and aqueous materials, as well as microelectronics and nanotechnology, will alter how we capture, process, and apply information within all scientific and industrial fields.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we appreciate that{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            publication of optics and electronics research
                                        </Link>{" "}
                                        requires technical accuracy, multiple disciplines of knowledge, and the ability to communicate clearly with researchers. Pubrica provides editorial support for researchers, engineers, and inventors to facilitate effective presentation of the research through{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer-reviewed journals
                                        </Link>{" "}
                                        and international conferences.
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
                            Our Core Disciplines In Optics And Electronics
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our expertise spans a wide range of optical and electronic technologies that support innovation across healthcare, communications, manufacturing, and scientific research.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">


                <CommonExpertiseCards
                    title="Our Expertise in Optics and Electronics"
                    description="We have structured professional development and technical innovation in photonics, optics, and electronic systems engineering; we support development and research efforts in all aspects of the above areas. Therefore, we can provide comprehensive assistance in optical engineering, electronic devices, signal processing, and system architecting. Our experienced engineering team has the technical knowledge to help move your inventions from initial concept to fully developed solutions that conform to industry and universities' highest standards."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
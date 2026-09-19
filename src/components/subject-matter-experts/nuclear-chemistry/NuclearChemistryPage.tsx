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
    AlertTriangle,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function NuclearChemistryPage() {
    const disciplines = [
        {
            title: "Radiochemistry",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Radiochemistry-1.webp",
            description: "Radiochemistry examines the chemical and physical properties of radioactive elements, particularly how they behave as isotopes and how they are affected by nuclear reactions and radiological phenomena across a variety of environments.",
            icon: Search
        },
        {
            title: "Nuclear Reactions and Fission",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Nuclear-Reactions-and-Fission.webp",
            description: "Nuclear fission, fusion, and other nuclear reactions are studied to further develop our understanding of how energy is produced and how to maintain nuclear safety.",
            icon: TrendingUp
        },
        {
            title: "Radiopharmaceutical Chemistry",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Radiopharmaceutical-Chemistry.webp",
            description: "The development of radiolabelled substances for use in diagnostic imaging and as a treatment option in nuclear medicine.",
            icon: FileText
        },
        {
            title: "Isotope Chemistry",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Isotope-Chemistry.webp",
            description: "The production, isolation, and application of both stable and radioactive isotopes as they relate to the various applications in industrial, medical, and environmental applications.",
            icon: Database
        },
        {
            title: "Radioactive Material and Waste Management",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Radioactive-Material-and-Waste-Management-1.webp",
            description: "Investigation of methods and techniques for managing and disposing of radioactive waste and contamination to minimize risk to the environment and human health from nuclear technology",
            icon: AlertTriangle
        },
        {
            title: "Nuclear Forensic Science",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Nuclear-Forensic-Science.webp",
            description: "Identification and tracking nuclear materials for the purpose of aiding in nuclear protection and prevention of the illegal trafficking or misuse of radioactive materials.",
            icon: ShieldAlert
        },
        {
            title: "Environmental Radiochemistry",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Environmental-Radiochemistry.webp",
            description: "Study of the effects of radioactive materials on the environment and ecosystems, including contamination of soil, water and air, and methods for remediating contamination",
            icon: Cpu
        },
        {
            title: "Medical Physics and Nuclear Imaging",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Medical-Physics-and-Nuclear-Imaging.webp",
            description: "Use of nuclear chemistry in medical imaging (PET, SPECT, CT) for the improved diagnosis and treatment of diseases such as cancer.",
            icon: Layers
        },
        {
            title: "Radiation Protection and Dosimetry",
            iconSrc: "/images/subject-matter-experts/nuclear-chemistry/Radiation-Protection-and-Dosimetry.webp",
            description: "Measurement and evaluation of radiation exposure in the workplace and the environment for the purpose of ensuring compliance with safety standards and governmental regulations.",
            icon: BookOpen
        }
    ];

    const expertiseCards = [
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
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
            icon: FileSearch,
        },
        {
            title: "Original Research",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article",
            imageUrl: "/images/subject-matter-experts/nuclear-chemistry/Pain-points-in-Writing-Original-Research-Articles.webp",
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
            icon: BarChart3,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: PenTool,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Nuclear Chemistry"
                description="Nuclear Chemistry involves the understanding of how radioactivity and its components influence everything from human health to the protection of our environment; whether related to using radiopharmaceuticals or creating clean forms of energy through nuclear means."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Nuclear Chemistry Through Expert Editing and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/nuclear-chemistry/Nuclear-Chemistry.webp"
                                        alt="Nuclear chemistry research visualization"
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
                                        The field of Nuclear Chemistry incorporates aspects of both Chemistry and Physics, as well as some elements of Radiation Science, to study the characteristics and uses of materials that emit ionizing radiation (Radioactive Materials). It involves studying all stages of an experiment of Nuclear Chemistry - from making the experiment to writing up the results. Because of the complexity of experiments in this area, there is an increasing need for high quality publications that can withstand scrutiny from{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer reviewers
                                        </Link>{" "}
                                        who will review submitted manuscripts in accordance with the most current international guidelines of scientific practice.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Recognizing this growing requirement, Pubrica has established a full range of nuclear{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline">
                                            chemistry research writing and editing services
                                        </Link>{" "}
                                        that meet the specific needs of nuclear chemists and those working in this field as research scientists. Our{" "}
                                        <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline">
                                            nuclear chemistry writing service
                                        </Link>{" "}
                                        is staffed by editors and scientists with PhDs in related fields, who ensure that the editors work adheres to the published standards for conducting research and for preparing documents for publication.
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
                            Our Core Disciplines In Nuclear Chemistry
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we offer comprehensive expertise across all major disciplines within the pharmaceutical sciences. Our multidisciplinary team of scientists, researchers, and editors brings deep domain knowledge, ensuring precision, clarity, and scientific integrity in every manuscript. From early-stage drug discovery to clinical translation and regulatory documentation, our expertise spans the entire pharmaceutical research spectrum.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-left w-full mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-3">
                        Our Expertise in Nuclear Chemistry Research and Publication
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica we provide expert <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600">editing & publishing support</Link> for the nuclear community with our team of specialists ensures your research meets all academic publishing requirements, remains clear, accurate & based on sound science; from Radiochemistry to Nuclear Reaction to Radiopharmaceutical, we have the ability of offering customized solutions to focus on your individual area of Research.
                    </p>
                </div>

                {/* Cards Grid */}
                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
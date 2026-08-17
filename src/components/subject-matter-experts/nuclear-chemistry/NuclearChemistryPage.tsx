"use client";
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

    const services = [
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/editing-and-translation"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
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
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileSearch,
            href: "/services/editing-and-translation"
        },
        {
            title: "Original Research",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/nuclear-chemistry/Pain-points-in-Writing-Original-Research-Articles.webp",
            icon: Layers,
            href: "/services/physician-writing-services/original-research-article"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: PenTool,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Nuclear Chemistry
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Nuclear Chemistry involves the understanding of how radioactivity and its components influence everything from human health to the protection of our environment; whether related to using radiopharmaceuticals or creating clean forms of energy through nuclear means.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Nuclear Chemistry Through Expert Editing and Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The field of Nuclear Chemistry incorporates aspects of both Chemistry and Physics, as well as some elements of Radiation Science, to study the characteristics and uses of materials that emit ionizing radiation (Radioactive Materials). It involves studying all stages of an experiment of Nuclear Chemistry - from making the experiment to writing up the results. Because of the complexity of experiments in this area, there is an increasing need for high quality publications that can withstand scrutiny from peer reviewers who will review submitted manuscripts in accordance with the most current international guidelines of scientific practice.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Recognizing this growing requirement, Pubrica has established a full range of nuclear chemistry research writing and editing services that meet the specific needs of nuclear chemists and those working in this field as research scientists. Our nuclear chemistry writing service is staffed by editors and scientists with PhDs in related fields, who ensure that the editors work adheres to the published standards for conducting research and for preparing documents for publication.
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
                                src="/images/subject-matter-experts/nuclear-chemistry/Nuclear-Chemistry.webp"
                                alt="Nuclear chemistry research visualization"
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
                            Our Core Disciplines In Nuclear Chemistry
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we offer comprehensive expertise across all major disciplines within the pharmaceutical sciences. Our multidisciplinary team of scientists, researchers, and editors brings deep domain knowledge, ensuring precision, clarity, and scientific integrity in every manuscript. From early-stage drug discovery to clinical translation and regulatory documentation, our expertise spans the entire pharmaceutical research spectrum.
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
                            Our Expertise in Nuclear Chemistry Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica we provide expert editing & publishing support for the nuclear community with our team of specialists ensures your research meets all academic publishing requirements, remains clear, accurate & based on sound science; from Radiochemistry to Nuclear Reaction to Radiopharmaceutical, we have the ability of offering customized solutions to focus on your individual area of Research.
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
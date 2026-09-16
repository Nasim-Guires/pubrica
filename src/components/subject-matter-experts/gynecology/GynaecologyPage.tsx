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
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function GynaecologyPage() {
    const disciplines = [
        {
            title: "Reproductive Endocrinology and Infertility",
            iconSrc: "/images/subject-matter-experts/gynecology/Reproductive-Endocrinology-and-Infertility.webp",
            description: "Investigating hormonal regulation, ovulation mechanisms, assisted reproductive technologies (ART), and fertility preservation.",
            icon: Search
        },
        {
            title: "Gynaecologic Oncology",
            iconSrc: "/images/subject-matter-experts/gynecology/Gynaecologic-Oncology.webp",
            description: "Focused on cancers of the female reproductive organs, cervical, ovarian, uterine, vaginal, and vulvar cancers, and their prevention, early detection, and treatment.",
            icon: TrendingUp
        },
        {
            title: "Urogynaecology",
            iconSrc: "/images/subject-matter-experts/gynecology/Urogynaecology.webp",
            description: "Addressing pelvic floor disorders such as urinary incontinence, pelvic organ prolapse, and reconstructive surgery.",
            icon: FileText
        },
        {
            title: "Adolescent Gynaecology",
            iconSrc: "/images/subject-matter-experts/gynecology/Adolescent-Gynaecology.webp",
            description: "Concentrating on puberty, menstrual irregularities, and sexual health education for young women..",
            icon: Database
        },
        {
            title: "Menopause and Hormone Therapy",
            iconSrc: "/images/subject-matter-experts/gynecology/Menopause-and-Hormone-Therapy.webp",
            description: "Exploring the physiological changes during menopause, hormone replacement therapy (HRT), and associated long-term health impacts.",
            icon: AlertTriangle
        },
        {
            title: "Minimally Invasive and Robotic Surgery",
            iconSrc: "/images/subject-matter-experts/gynecology/Minimally-Invasive-and-Robotic-Surgery.webp",
            description: "Employing laparoscopic and robotic-assisted techniques for gynaecologic procedures to reduce complications and recovery time.",
            icon: Layers
        },
        {
            title: "Preventive Gynaecology",
            iconSrc: "/images/subject-matter-experts/gynecology/Preventive-Gynaecology.webp",
            description: "Promoting routine screening, vaccination, and public health initiatives to enhance overall women’s wellness.",
            icon: FileSearch
        }
    ];

    const expertiseCards = [
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
            href: "/services/physician-writing-services/original-research-article",
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
            icon: FileSearch,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
        },
        {
            title: "Literature Review and Systematic Reviews",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Cpu,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
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
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Gynaecology"
                description="Empower your publication journey with expert gynaecology editors, researchers, and biostatisticians at Pubrica."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Gynaecology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/gynecology/Comprehensive-Research-Writing-and-Publication-Support-in-Gynaecology.webp"
                                        alt="Gynaecology research visualization"
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
                                        Gynaecology is a crucial branch of medical science that focuses on the health of the female reproductive system, encompassing a wide spectrum of physiological functions, disorders, and diseases. It deals with the diagnosis, treatment, and prevention of conditions affecting the uterus, fallopian tubes, ovaries, and breasts. In modern women's health research, gynaecology integrates with obstetrics, reproductive endocrinology, oncology, and minimally invasive surgery to improve women's health outcomes and quality of life.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        The field of gynaecology research is rapidly evolving, driven by innovations in molecular biology, genetics, endocrinology, and imaging technologies. Key research areas include reproductive health, menstrual disorders, infertility, pelvic inflammatory disease, endometriosis, gynaecologic oncology, and minimally invasive surgical techniques.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Gynaecology is a crucial branch of medical science that focuses on the health of the female reproductive system, encompassing a wide spectrum of physiological functions, disorders, and diseases. It deals with the diagnosis, treatment, and prevention of conditions affecting the uterus, fallopian tubes, ovaries, and breasts. In modern women’s health research, gynaecology integrates with obstetrics, reproductive endocrinology, oncology, and minimally invasive surgery to improve women’s health outcomes and quality of life.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        The field of gynaecology research is rapidly evolving, driven by innovations in molecular biology, genetics, endocrinology, and imaging technologies. Key research areas include reproductive health, menstrual disorders, infertility, pelvic inflammatory disease, endometriosis, gynaecologic oncology, and minimally invasive surgical techniques.
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
                            Our Core Disciplines In Gynaecology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Gynaecologic research covers a diverse array of subdisciplines that focus on both preventive and therapeutic aspects of women's health. Key disciplines include:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Gynaecology Research and Publication"
                    description="At Pubrica, our multidisciplinary team includes experienced gynaecologists, reproductive health specialists, biomedical researchers, and publication experts who provide end-to-end support for your research journey. We help across the full research lifecycle from idea conceptualization to post-publication promotion. Our Services Include:"
                    cards={expertiseCards}
                />
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Pubrica’s reproductive medicine editing and obstetrics and gynaecology writing services ensure precision, clarity, and compliance with top-tier journal requirements.
                </p>
            </section>

        </main>
    );
}
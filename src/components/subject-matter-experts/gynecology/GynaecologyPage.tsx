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
    Cpu
} from 'lucide-react';

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

    const services = [
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/physician-writing-services/original-research-article"
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
            icon: FileSearch,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Cpu,
            href: "/services/editing-and-translation"
        },
        {
            title: "Literature Review and Systematic Reviews",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Cpu,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
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
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Gynaecology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Empower your publication journey with expert gynaecology editors, researchers, and biostatisticians at Pubrica.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Research, Writing, and Publication Support in Gynaecology
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Gynaecology is a crucial branch of medical science that focuses on the health of the female reproductive system, encompassing a wide spectrum of physiological functions, disorders, and diseases. It deals with the diagnosis, treatment, and prevention of conditions affecting the uterus, fallopian tubes, ovaries, and breasts. In modern women's health research, gynaecology integrates with obstetrics, reproductive endocrinology, oncology, and minimally invasive surgery to improve women's health outcomes and quality of life.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The field of gynaecology research is rapidly evolving, driven by innovations in molecular biology, genetics, endocrinology, and imaging technologies. Key research areas include reproductive health, menstrual disorders, infertility, pelvic inflammatory disease, endometriosis, gynaecologic oncology, and minimally invasive surgical techniques.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Gynaecology is a crucial branch of medical science that focuses on the health of the female reproductive system, encompassing a wide spectrum of physiological functions, disorders, and diseases. It deals with the diagnosis, treatment, and prevention of conditions affecting the uterus, fallopian tubes, ovaries, and breasts. In modern women’s health research, gynaecology integrates with obstetrics, reproductive endocrinology, oncology, and minimally invasive surgery to improve women’s health outcomes and quality of life.

                            The field of gynaecology research is rapidly evolving, driven by innovations in molecular biology, genetics, endocrinology, and imaging technologies. Key research areas include reproductive health, menstrual disorders, infertility, pelvic inflammatory disease, endometriosis, gynaecologic oncology, and minimally invasive surgical techniques.
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
                                src="/images/subject-matter-experts/gynecology/Comprehensive-Research-Writing-and-Publication-Support-in-Gynaecology.webp"
                                alt="Gynaecology research visualization"
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
                            Our Core Disciplines In Gynaecology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Gynaecologic research covers a diverse array of subdisciplines that focus on both preventive and therapeutic aspects of women's health. Key disciplines include:
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
                            Our Expertise in Gynaecology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, our multidisciplinary team includes experienced gynaecologists, reproductive health specialists, biomedical researchers, and publication experts who provide end-to-end support for your research journey. We help across the full research lifecycle from idea conceptualization to post-publication promotion. Our Services Include:
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
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                            Pubrica’s reproductive medicine editing and obstetrics and gynaecology writing services ensure precision, clarity, and compliance with top-tier journal requirements.
                        </p>

            </section>

        </main>
    );
}
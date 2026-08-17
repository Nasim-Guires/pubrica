"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Brain,
    Users,
    HeartHandshake,
    ShieldAlert,
    UserCheck,
    Pill,
    Cpu,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    ChevronDown,
    Palette,
    FileSpreadsheet,
    Image as ImageIcon
} from 'lucide-react';

export default function PsychiatryPage() {
    const disciplines = [
        {
            title: "Clinical Psychiatry and Diagnosis",
            iconSrc: "/images/subject-matter-experts/psychiatry/Clinical-Psychiatry-and-Diagnosis.webp",
            description: "The assessment, diagnosis, and treatment of mental health issues through standardized clinical models.",
            icon: Activity,
        },
        {
            title: "Psychotherapy and Counseling",
            iconSrc: "/images/subject-matter-experts/psychiatry/Psychotherapy-and-Counseling.webp",
            description: "Evidence-based therapeutic techniques, such as CBT, DBT, and psychodynamic therapy, for the treatment and management of mental health issues.",
            icon: HeartHandshake,
        },
        {
            title: "Neuropsychiatry",
            iconSrc: "/images/subject-matter-experts/psychiatry/Neuropsychiatry.webp",
            description: "The study of the correlation between the brain and behavior, and the associated neurological and psychiatric conditions.",
            icon: Brain,
        },
        {
            title: "Child and Adolescent Psychiatry",
            iconSrc: "/images/subject-matter-experts/psychiatry/Child-and-Adolescent-Psychiatry.webp",
            description: "The diagnosis and treatment of mental health issues among children and adolescents.",
            icon: Users,
        },
        {
            title: "Addiction Psychiatry",
            iconSrc: "/images/subject-matter-experts/psychiatry/Addiction-Psychiatry.webp",
            description: "The assessment, diagnosis, and treatment of substance abuse and behavioral addictions through therapeutic and counseling techniques.",
            icon: ShieldAlert,
        },
        {
            title: "Geriatric Psychiatry",
            iconSrc: "/images/subject-matter-experts/psychiatry/Geriatric-Psychiatry.webp",
            description: "The focus is on the mental health issues among the elderly, including dementia and cognitive impairments associated with aging.",
            icon: UserCheck,
        },
        {
            title: "Psychopharmacology",
            iconSrc: "/images/subject-matter-experts/psychiatry/Psychopharmacology.webp",
            description: "The study and application of medications and drugs used to treat psychiatric conditions and disorders.",
            icon: Pill,
        },
        {
            title: "Behavioral and Cognitive Sciences",
            iconSrc: "/images/subject-matter-experts/psychiatry/Behavioral-and-Cognitive-Sciences.webp",
            description: "The study and understanding of human behavior, cognition, and emotions.",
            icon: Cpu,
        },
        {
            title: "Community and Social Psychiatry",
            iconSrc: "/images/subject-matter-experts/psychiatry/Community-and-Social-Psychiatry.webp",
            description: "The focus is on the mental health issues among communities and the social determinants of mental illnesses.",
            icon: Globe,
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
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
            href: "/services/publication-support"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Palette,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
            href: "/services/research-impact/graphical-abstract"
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
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Psychiatry
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Focuses on diagnosis, treatment, and management of mental health disorders. Includes clinical assessments, case reports, and patient care strategies. Supports evidence-based psychiatric practice and outcomes.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Mental Health Care into Real-World Impact with Precision Psychiatry.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            As a dynamic and rapidly changing field, Psychiatry continues to advance and improve with time, especially with the growing global interest in mental health, neurobiological studies, and therapeutic research. To improve and advance Psychiatry research, we, at Pubrica, have developed and continue to improve our specialized services for Psychiatry researchers, including clinical analysis, mental health modeling, and complete academic solutions for clinicians, psychologists, and healthcare professionals, with the aim of improving and advancing research deliverables in all areas of Psychiatry.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span className="text-[#0e3b32] font-semibold">Psychiatric Disorders, Clinical Psychology, Neuropsychiatry, and Behavioral Sciences</span> are important areas of Psychiatry, and they cover a range of mental health conditions, including how they are diagnosed and treated. Scientific and clinical approaches are employed in brain functions, emotional control, behavioral patterns, and therapeutic approaches.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Computational Psychiatry research allows researchers to study behavioral patterns, simulate cognitive functions, and predict therapeutic outcomes using advanced analytical tools and approaches, allowing them to advance and improve clinical approaches and innovation in Psychiatry research.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#a3c9bd]/30 flex items-center justify-center">
                            <Image
                                src="/images/subject-matter-experts/psychiatry/Psychiatry.webp"
                                alt="Psychiatry research and clinical support"
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
                            Our Core Areas Of Psychiatry
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our areas of expertise include the following areas of the domain of Psychiatry, contributing to the progress and development of the field:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Psychiatry Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we offer specialised expertise in Psychiatry research and publication, supporting clinicians, researchers, and mental health professionals in advancing their work. Our services include:
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
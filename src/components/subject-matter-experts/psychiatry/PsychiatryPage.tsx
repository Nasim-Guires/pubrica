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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts through our Chemical engineering editing services.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Palette,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
        },
    ];



    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Psychiatry"
                description="Focuses on diagnosis, treatment, and management of mental health disorders. Includes clinical assessments, case reports, and patient care strategies. Supports evidence-based psychiatric practice and outcomes."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Mental Health Care into Real-World Impact with Precision Psychiatry.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        As a dynamic and rapidly changing field, Psychiatry continues to advance and improve with time, especially with the growing global interest in mental health, neurobiological studies, and therapeutic research. To improve and advance Psychiatry research, we, at Pubrica, have developed and continue to improve our specialized services for Psychiatry researchers, including clinical analysis, mental health modeling, and complete academic solutions for clinicians, psychologists, and healthcare professionals, with the aim of improving and advancing research deliverables in all areas of Psychiatry.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        <span className="text-[#0c2e3a] font-semibold">Psychiatric Disorders, Clinical Psychology, Neuropsychiatry, and Behavioral Sciences</span> are important areas of Psychiatry, and they cover a range of mental health conditions, including how they are diagnosed and treated. Scientific and clinical approaches are employed in brain functions, emotional control, behavioral patterns, and therapeutic approaches.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Computational Psychiatry research allows researchers to study behavioral patterns, simulate cognitive functions, and predict therapeutic outcomes using advanced analytical tools and approaches, allowing them to advance and improve clinical approaches and innovation in Psychiatry research.
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
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Psychiatry Research and Publication"
                    description="At Pubrica, we offer specialised expertise in Psychiatry research and publication, supporting clinicians, researchers, and mental health professionals in advancing their work. Our services include:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Stethoscope,
    Brain,
    HeartPulse,
    Users,
    Activity,
    GraduationCap,
    BookOpenCheck,
    Search,
    FileText,
    Cpu,
    PenTool,
    Layers,
    BookOpen,
    FileSearch,
    UserCheck,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function PsychologyPage() {
    const disciplines = [
        {
            title: "Clinical Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Clinical-psychology.webp",
            description: (
                <>
                    It focuses on diagnosing and treating mental health disorders such as anxiety, depression, and schizophrenia. It combines psychotherapy, assessment, and intervention techniques to promote psychological well-being. Our{" "}
                    <Link
                        href="/services/editing-and-translation/"
                        className="text-blue-600"
                    >
                        clinical psychology editing
                    </Link>{" "}
                    ensures accuracy, clarity, and compliance with APA standards for academic publishing.
                </>
            ),
            icon: Stethoscope,
        },
        {
            title: "Cognitive Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Cognitive-Psychology.webp",
            description: (
                <>
                    This branch explores mental processes such as perception, memory, learning, language, and problem-solving. Cognitive psychologists investigate how people process information and how these processes influence behavior. Our experts provide{" "}
                    <Link
                        href="/services/research-services/medical-writing/"
                        className="text-blue-600"
                    >
                        cognitive psychology writing
                    </Link>{" "}
                    assistance to strengthen the theoretical and methodological sections of your manuscripts.
                </>
            ),
            icon: Brain,
        },
        {
            title: "Health Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Health-Psychology.webp",
            description: "It studies how psychological factors affect physical health and illness. It promotes health-enhancing behaviours, such as stress management, exercise, and nutrition. Health psychologists often collaborate with medical professionals to develop patient-centered care models.",
            icon: HeartPulse,
        },
        {
            title: "Social Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Social-Psychology.webp",
            description: "Examines how others influence individuals’ thoughts and behaviours. It explores concepts like conformity, persuasion, prejudice, and interpersonal relationships.",
            icon: Users,
        },
        {
            title: "Neuropsychology",
            iconSrc: "/images/subject-matter-experts/psychology/Neuropsychology.webp",
            description: "It bridges psychology and neuroscience, studying the relationship between brain function and behavior. It plays a vital role in understanding brain injuries, neurodegenerative disorders, and cognitive rehabilitation.",
            icon: Activity,
        },
        {
            title: "Developmental Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Developmental-Psychology.webp",
            description: "It studies how people grow and change throughout life, from infancy to old age. Topics include cognitive development, emotional regulation, and social learning.",
            icon: GraduationCap,
        },
        {
            title: "Educational Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Educational-Psychology.webp",
            description: "Focuses on how people learn and retain knowledge. It explores teaching methods, learning styles, and motivation. Educational psychologists work closely with schools and institutions to develop effective learning environments and address learning difficulties such as dyslexia or ADHD.",
            icon: BookOpenCheck,
        },
    ];
    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission",
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
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BookOpen,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Psychology"
                description="From experimental studies to clinical manuscripts, our psychology experts provide comprehensive editing, writing, and publication support to help your research make a lasting impact."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering psychological research and practice through expert writing, editing, and publication support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/psychology/Empowering-psychological.webp"
                                        alt="Psychology research visualization"
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
                                        Psychology is the scientific study of the mind, behavior, and mental processes. It explores how people think, feel, and act in various situations, offering deep insights into human emotions, cognition, and social interactions. As a discipline, psychology bridges the gap between biological sciences and social sciences, drawing on theories, experiments, and observations to understand what drives human and animal behavior. From mental health and neuroscience to social behavior and personality, psychology plays a crucial role in improving quality of life, fostering well-being, and advancing scientific knowledge about the human condition.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide comprehensive{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            psychology research support
                                        </Link>
                                        ,{" "}
                                        <Link href="/services/editing-and-translation/" className="text-blue-600 no-underline">
                                            psychology editing services
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline">
                                            psychology publication help
                                        </Link>{" "}
                                        to researchers, scholars, clinicians, and students worldwide. Our goal is to transform your research ideas into well-structured, scientifically sound, and publication-ready manuscripts that advance the frontiers of psychological science.
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Disciplines In Psychology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            At Pubrica, we understand that psychology is a diverse and dynamic field that bridges science and human behavior. Our expert team of subject-matter specialists, researchers, and editors provides comprehensive support across all major branches of psychology, ensuring scientific accuracy, methodological rigor, and clarity in communication. Our disciplines include:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-left max-w-4xl mb-12">
                    <div className="flex items-center justify-start gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] whitespace-nowrap">
                            Our Expertise in Psychology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] shrink-0" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica <Link href="/insights/sample-work/management-of-neurogenic-shock-outside-of-the-hospital/" className="text-blue-600">research and editing services</Link>, we provide comprehensive academic psychology support to researchers, academicians, and practitioners. Our team of PhD-qualified psychology experts and professional editors ensures that every manuscript, dissertation, and publication meets international academic standards.
                    </p>
                </div>


                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}
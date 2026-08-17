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

export default function PsychologyPage() {
    const disciplines = [
        {
            title: "Clinical Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Clinical-psychology.webp",
            description: "It focuses on diagnosing and treating mental health disorders such as anxiety, depression, and schizophrenia. It combines psychotherapy, assessment, and intervention techniques to promote psychological well-being. Our clinical psychology editing ensures accuracy, clarity, and compliance with APA standards for academic publishing.",
            icon: Stethoscope,
        },
        {
            title: "Cognitive Psychology",
            iconSrc: "/images/subject-matter-experts/psychology/Cognitive-Psychology.webp",
            description: "This branch explores mental processes such as perception, memory, learning, language, and problem-solving. Cognitive psychologists investigate how people process information and how these processes influence behavior. Our experts provide cognitive psychology writing assistance to strengthen the theoretical and methodological sections of your manuscripts.",
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
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
            href: "/services/editing-and-translation"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Layers,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BookOpen,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Psychology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From experimental studies to clinical manuscripts, our psychology experts provide comprehensive editing, writing, and publication support to help your research make a lasting impact.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering psychological research and practice through expert writing, editing, and publication support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Psychology is the scientific study of the mind, behavior, and mental processes. It explores how people think, feel, and act in various situations, offering deep insights into human emotions, cognition, and social interactions. As a discipline, psychology bridges the gap between biological sciences and social sciences, drawing on theories, experiments, and observations to understand what drives human and animal behavior. From mental health and neuroscience to social behavior and personality, psychology plays a crucial role in improving quality of life, fostering well-being, and advancing scientific knowledge about the human condition.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive <span className="text-[#0e3b32] font-semibold">psychology research support</span>, <span className="text-[#0e3b32] font-semibold">psychology editing services</span>, and <span className="text-[#0e3b32] font-semibold">psychology publication help</span> to researchers, scholars, clinicians, and students worldwide. Our goal is to transform your research ideas into well-structured, scientifically sound, and publication-ready manuscripts that advance the frontiers of psychological science.
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
                                src="/images/subject-matter-experts/psychology/Empowering-psychological.webp"
                                alt="Psychology research visualization"
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
                            Our Core Disciplines In Psychology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we understand that psychology is a diverse and dynamic field that bridges science and human behavior. Our expert team of subject-matter specialists, researchers, and editors provides comprehensive support across all major branches of psychology, ensuring scientific accuracy, methodological rigor, and clarity in communication. Our disciplines include:
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
                            Our Expertise in Psychology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica research and editing services, we provide comprehensive academic psychology support to researchers, academicians, and practitioners. Our team of PhD-qualified psychology experts and professional editors ensures that every manuscript, dissertation, and publication meets international academic standards.
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
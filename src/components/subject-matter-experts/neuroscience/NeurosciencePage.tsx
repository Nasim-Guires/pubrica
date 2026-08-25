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

export default function NeurosciencePage() {
    const disciplines = [
        {
            title: "Molecular and Cellular Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Molecular-and-Cellular-Neuroscience.webp",
            description: "This area focuses on understanding how individual neurons function at a molecular and cellular level. It studies the roles of neurotransmitters, ion channels, synapses, and genetic mechanisms that govern neural signalling. Research in this area helps in identifying the root causes of neurological diseases.",
            icon: Search
        },
        {
            title: "Systems Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Systems-Neuroscience.webp",
            description: "It investigates how networks of neurons interact to control behavior and cognition. It explores sensory processing, motor control, and neural circuits responsible for perception, attention, and movement.",
            icon: TrendingUp
        },
        {
            title: "Cognitive and Behavioural Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Cognitive-and-Behavioural-Neuroscience.webp",
            description: "This branch explores how brain activity is linked to higher mental processes such as memory, language, decision-making, and emotion. It combines psychology with neuroscience to understand how the brain produces thought and behavior.",
            icon: FileText
        },
        {
            title: "Developmental Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Developmental-Neuroscience.webp",
            description: "It examines how the nervous system forms during embryonic development and how it changes throughout life. It studies neurogenesis, neural migration, and synaptic pruning to uncover how early experiences shape the brain.",
            icon: Database
        },
        {
            title: "Clinical Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Clinical-Neuroscience.webp",
            description: "It bridges laboratory research and medical practice. It focuses on diagnosing, treating, and preventing neurological and psychiatric disorders such as epilepsy, multiple sclerosis, schizophrenia, and depression.",
            icon: AlertTriangle
        },
        {
            title: "Computational Neuroscience",
            iconSrc: "/images/subject-matter-experts/neuroscience/Computational-Neuroscience.webp",
            description: "This area uses mathematical models and simulations to understand brain function. It plays a crucial role in developing artificial intelligence, neural networks, and brain–computer interface technologies.",
            icon: ShieldAlert
        }
    ];

    const services = [
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Literature Review and Data Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileSearch,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Medical Writing",
            description: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            image: "/images/subject-matter-experts/machine-learning/Medical-Writing.webp",
            icon: Layers,
            href: "/services/research-services/medical-writing"
        },
        {
            title: "Statistical Analysis",
            description: "We provide biostatistical support for data interpretation, ensuring robust and scientifically valid conclusions",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
            href: "/services/research-services/biostatistics-and-statistical-programming-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection/"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Neuroscience
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for neuroscience scholars, researchers, and professionals, advancing understanding of the brain, behavior, and neurological health.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Support for Neuroscience Research, Writing, and Publication
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Neuroscience is the scientific study of the nervous system, spanning molecular, cellular, cognitive, and behavioural levels. It encompasses various subfields such as neurobiology research, cognitive neuroscience, neuroimaging research, and computational neuroscience. Researchers in this field strive to understand the mechanisms underlying brain function, neurological disorders, and behavior.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            In recent years, neuroscience research has expanded due to technological innovations such as functional magnetic resonance imaging (fMRI), optogenetics, artificial intelligence (AI)-based modeling, and neuroinformatics. These tools have enabled deeper insights into neural pathways, brain plasticity, and neurodegenerative diseases such as Alzheimer&apos;s, Parkinson&apos;s, and multiple sclerosis.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide end-to-end neuroscience research support services tailored for researchers, clinicians, and academicians. Our team of subject matter experts, biostatisticians, and scientific writers works collaboratively to assist in every stage of your research, right from conceptualization to publication. Whether you need neuroscience writing services, neuroscience publication help, or neuroscience editing, Pubrica delivers expert solutions designed to enhance your research quality and publication success.
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
                                src="/images/subject-matter-experts/neuroscience/Comprehensive-Support-for-Neuroscience-Research-Writing-and-Publication.webp"
                                alt="Neuroscience research visualization"
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
                            Our Core Discipline Of Neuroscience
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Neuroscience is a multidisciplinary field encompassing several branches, each focusing on different aspects of brain and nervous system function. Below are some of the core areas of specialization that make this subject both fascinating and essential to scientific progress:
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
                            Our Expertise in Neuroscience Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we understand that neuroscience research demands precision, multidisciplinary collaboration, and adherence to evolving ethical and methodological standards. Our Pubrica neuroscience experts hold advanced degrees (PhD, MD, or MSc) in neuroscience and related fields, with extensive publication experience in top-tier journals such as Nature Neuroscience, Neuron, and Brain Research. We provide specialized neuroscience writing services and neuroscience publication help, such as:
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
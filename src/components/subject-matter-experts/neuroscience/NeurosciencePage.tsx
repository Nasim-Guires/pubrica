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

    const expertiseCards = [
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
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
            title: "Literature Review and Data Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileSearch,
        },
        {
            title: "Medical Writing",
            desc: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            href: "/services/research-services/medical-writing",
            imageUrl: "/images/subject-matter-experts/machine-learning/Medical-Writing.webp",
            icon: Layers,
        },
        {
            title: "Statistical Analysis",
            desc: "We provide biostatistical support for data interpretation, ensuring robust and scientifically valid conclusions",
            href: "/services/research-services/biostatistics-and-statistical-programming-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Neuroscience"
                description="Comprehensive research, publication, and editing support for neuroscience scholars, researchers, and professionals, advancing understanding of the brain, behavior, and neurological health."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Support for Neuroscience Research, Writing, and Publication
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Neuroscience is the scientific study of the nervous system, spanning molecular, cellular, cognitive, and behavioural levels. It encompasses various subfields such as neurobiology research, cognitive neuroscience, neuroimaging research, and computational neuroscience. Researchers in this field strive to understand the mechanisms underlying brain function, neurological disorders, and behavior.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        In recent years, neuroscience research has expanded due to technological innovations such as functional magnetic resonance imaging (fMRI), optogenetics, <Link href="/services/ai-ml-support/" className="text-blue-600">artificial intelligence (AI)</Link>-based modeling, and neuroinformatics. These tools have enabled deeper insights into neural pathways, brain plasticity, and neurodegenerative diseases such as Alzheimer&apos;s, Parkinson&apos;s, and multiple sclerosis.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide end-to-end neuroscience research support services tailored for researchers, clinicians, and academicians. Our team of subject matter experts, biostatisticians, and scientific writers works collaboratively to assist in every stage of your research, right from conceptualization to publication. Whether you need neuroscience writing services, neuroscience publication help, or neuroscience editing, Pubrica delivers expert solutions designed to enhance your research quality and publication success.
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
                            Our Core Discipline Of Neuroscience
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-full">
                            Neuroscience is a multidisciplinary field encompassing several branches, each focusing on different aspects of brain and nervous system function. Below are some of the core areas of specialization that make this subject both fascinating and essential to scientific progress:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>
            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Neuroscience Research and Publication"
                    description="At Pubrica, we understand that neuroscience research demands precision, multidisciplinary collaboration, and adherence to evolving ethical and methodological standards. Our Pubrica neuroscience experts hold advanced degrees (PhD, MD, or MSc) in neuroscience and related fields, with extensive publication experience in top-tier journals such as Nature Neuroscience, Neuron, and Brain Research. We provide specialized neuroscience writing services and neuroscience publication help, such as:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}
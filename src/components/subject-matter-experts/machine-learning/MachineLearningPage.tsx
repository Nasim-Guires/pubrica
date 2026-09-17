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

export default function MachineLearningPage() {
    const disciplines = [
        {
            title: "Molecular and Cellular Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Molecular-and-Cellular-Machine-Learning.webp",
            description: "This field looks at the underlying algorithmic and mathematical frameworks that underlie all machine learning systems. It addresses all the data processing, feature extraction and optimization methods applied during the training and prediction phases of models.",
            icon: Search,
        },
        {
            title: "Machine learning systems tools",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-learning-systems-tools.webp",
            description: "They focus on studying different types of machine learning models, including but not limited to all network and deep learning architectures; all algorithms used in a machine-learning environment; and how various algorithms interact or work together during the machine learning process to provide control over results such as decision making, classification and prediction.",
            icon: TrendingUp,
        },
        {
            title: "Cognitive and Behavioural Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Cognitive-and-Behavioural-Machine-Learning.webp",
            description: "The study of this branch of how machine learning algorithms can perform human cognitive processes is known as Cognitive and Behavioural Machine Learning. The key cognitive processes in this area are the same as the cognitive processes found in all human beings: pattern recognition, decision-making, and language comprehension.",
            icon: FileText,
        },
        {
            title: "Developing Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Developing-Machine-Learning.webp",
            description: "Analyses the evolution of machine learning models through the addition of more data. This encompasses model training, Reinforcement Learning, and Continual Learning, all of which allow the creation of intelligent machines that will continue to adapt to their environment, much like the evolution of human cognition.",
            icon: Database,
        },
        {
            title: "Machine Learning Applications in Clinical Practice",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-Learning-Applications-in-Clinical-Practice.webp",
            description: "Clinical ML generally encompasses a broad range of activities, including the creation of classification systems for medical images; prediction models for various diseases; and even predictive models in the areas of genomics and precision medicine.",
            icon: AlertTriangle,
        },
        {
            title: "Machine Learning by Computing",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-Learning-by-Computing.webp",
            description: (
                <>
                    In machine learning, computational methods are used to model and analyze large amounts of data and find general trends in the data. As a result, machine learning plays a key role in the creation of Artificial Intelligence (AI) applications such as Brain Computer Interfaces (BCI), Autonomous Vehicles (AV),{" "}
                    <Link
                        href="/services/data-analytics-machine-learning/predictive-analytics/"
                        className="text-blue-600 "
                    >
                        Predictive Analytics
                    </Link>
                    ,
                </>
            ),
            icon: ShieldAlert,
        },
    ];
    const expertiseCards = [
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Journal Selection",
            desc: "Guidance on selecting the most appropriate journals for your research.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: PenTool,
        },
        {
            title: "Medical Writing",
            desc: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            href: "/services/research-services/medical-writing",
            imageUrl: "/images/subject-matter-experts/machine-learning/Medical-Writing.webp",
            icon: FileSearch,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
        },
        {
            title: "Statistical Analysis",
            desc: "We provide biostatistical support for data interpretation, ensuring robust and scientifically valid conclusions.",
            href: "/services/research-services/biostatistics-and-statistical-programming-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BarChart3,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Machine Learning"
                description="Traditional AI includes Machine Learning techniques. Machine Learning can use data to train a model that will improve and learn on its own over time. The use of Machine Learning is changing the way businesses operate. It provides businesses with tools for automating processes and predicting future results."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Support for Machine Learning Research, Writing, and Publication
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/machine-learning/Comprehensive-Support-for-Machine-Learning-Research-Writing-and-Publication.webp"
                                        alt="Machine Learning research visualization"
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
                                        Machine Learning is a sub-discipline within Artificial Intelligence (AI).{" "}
                                        <Link href="/services/ai-ml-support/" className="text-blue-600 no-underline">
                                            Machine Learning
                                        </Link>{" "}
                                        systems learn from data and do not require explicit programming (also known as pre-programmed) to perform their functions. It incorporates areas such as: Supervised Learning, Unsupervised Learning, and Deep Learning, to address complex problems to predict and optimize results in various fields.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Recent breakthroughs based on Big Data and more powerful algorithms have made it possible to utilize machine learning across many different sectors, including healthcare, financial services, and robotics.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides a complete support system for machine learning research, from very early stages such as{" "}
                                        <Link href="/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/" className="text-blue-600 no-underline">
                                            algorithm development
                                        </Link>{" "}
                                        through to the publication stages, thus ensuring that quality results are achieved.
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
                            Our Core Discipline of Machine Learning
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            We focus on developing intelligent systems through deep learning, reinforcement learning, and other techniques to solve challenges in various fields, from medical research to industrial automation:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Machine Learning Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Our Expertise in Machine Learning Research and Publication lies in providing comprehensive support for every stage of the research process. From algorithm development to{" "}
                        <Link
                            href="/academy/manuscript-editing/from-research-to-final-draft-best-practices-in-manuscript-editing/"
                            className="text-blue-600 no-underline hover:no-underline"
                        >
                            manuscript writing
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/insights/sample-work/journal-submission-report-sample/"
                            className="text-blue-600 no-underline hover:no-underline"
                        >
                            journal submission
                        </Link>
                        , our team of experts ensures that your machine learning research is not only scientifically rigorous but also tailored for successful publication in top-tier academic journals:
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
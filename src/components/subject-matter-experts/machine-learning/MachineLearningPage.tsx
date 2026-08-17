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

export default function MachineLearningPage() {
    const disciplines = [
        {
            title: "Molecular and Cellular Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Molecular-and-Cellular-Machine-Learning.webp",
            description: "This field looks at the underlying algorithmic and mathematical frameworks that underlie all machine learning systems. It addresses all the data processing, feature extraction and optimization methods applied during the training and prediction phases of models.",
            icon: Search
        },
        {
            title: "Machine learning systems tools",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-learning-systems-tools.webp",
            description: "They focus on studying different types of machine learning models, including but not limited to all network and deep learning architectures; all algorithms used in a machine-learning environment; and how various algorithms interact or work together during the machine learning process to provide control over results such as decision making, classification and prediction.",
            icon: TrendingUp
        },
        {
            title: "Cognitive and Behavioural Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Cognitive-and-Behavioural-Machine-Learning.webp",
            description: "The study of this branch of how machine learning algorithms can perform human cognitive processes is known as Cognitive and Behavioural Machine Learning. The key cognitive processes in this area are the same as the cognitive processes found in all human beings: pattern recognition, decision-making, and language comprehension.",
            icon: FileText
        },
        {
            title: "Developing Machine Learning",
            iconSrc: "/images/subject-matter-experts/machine-learning/Developing-Machine-Learning.webp",
            description: "Analyses the evolution of machine learning models through the addition of more data. This encompasses model training, Reinforcement Learning, and Continual Learning, all of which allow the creation of intelligent machines that will continue to adapt to their environment, much like the evolution of human cognition.",
            icon: Database
        },
        {
            title: "Machine Learning Applications in Clinical Practice",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-Learning-Applications-in-Clinical-Practice.webp",
            description: "Clinical ML generally encompasses a broad range of activities, including the creation of classification systems for medical images; prediction models for various diseases; and even predictive models in the areas of genomics and precision medicine.",
            icon: AlertTriangle
        },
        {
            title: "Machine Learning by Computing",
            iconSrc: "/images/subject-matter-experts/machine-learning/Machine-Learning-by-Computing.webp",
            description: "In machine learning, computational methods are used to model and analyze large amounts of data and find general trends in the data. As a result, machine learning plays a key role in the creation of Artificial Intelligence (AI) applications such as Brain Computer Interfaces (BCI), Autonomous Vehicles (AV), Predictive Analytics,",
            icon: ShieldAlert
        }
    ];

    const services = [
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Selection",
            description: "Guidance on selecting the most appropriate journals for your research.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: PenTool,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Medical Writing",
            description: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            image: "/images/subject-matter-experts/machine-learning/Medical-Writing.webp",
            icon: FileSearch,
            href: "/services/research-services/medical-writing"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Layers,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Statistical Analysis",
            description: "We provide biostatistical support for data interpretation, ensuring robust and scientifically valid conclusions.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BarChart3,
            href: "/services/research-services/biostatistics-and-statistical-programming-services"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileSearch,
            href: "/services/publication-support/journal-submission"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Machine Learning
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Traditional AI includes Machine Learning techniques. Machine Learning can use data to train a model that will improve and learn on its own over time. The use of Machine Learning is changing the way businesses operate. It provides businesses with tools for automating processes and predicting future results.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Support for Machine Learning Research, Writing, and Publication
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Machine Learning is a sub-discipline within Artificial Intelligence (AI). Machine Learning systems learn from data and do not require explicit programming (also known as pre-programmed) to perform their functions. It incorporates areas such as: Supervised Learning, Unsupervised Learning, and Deep Learning, to address complex problems to predict and optimize results in various fields.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Recent breakthroughs based on Big Data and more powerful algorithms have made it possible to utilize machine learning across many different sectors, including healthcare, financial services, and robotics.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides a complete support system for machine learning research, from very early stages such as algorithm development through to the publication stages, thus ensuring that quality results are achieved.
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
                                src="/images/subject-matter-experts/machine-learning/Comprehensive-Support-for-Machine-Learning-Research-Writing-and-Publication.webp"
                                alt="Machine Learning research visualization"
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
                            Our Core Discipline of Machine Learning
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            We focus on developing intelligent systems through deep learning, reinforcement learning, and other techniques to solve challenges in various fields, from medical research to industrial automation:
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
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
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
                            Our Expertise in Machine Learning Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Our Expertise in Machine Learning Research and Publication lies in providing comprehensive support for every stage of the research process. From algorithm development to manuscript writing and journal submission, our team of experts ensures that your machine learning research is not only scientifically rigorous but also tailored for successful publication in top-tier academic journals:
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